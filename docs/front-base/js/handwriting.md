# 工具方法

## 虚拟 dom 转真实 dom

```js
const vnode = {
  tag: 'div',
  attrs: {
    id: 'app',
  },
  children: [
    {
      tag: 'span',
      children: [],
    },
  ],
};

const render = (vnode, container) => {
  const el = document.createElement(vnode.tag);

  if (vnode.attrs) {
    for (const key in vnode.attrs) {
      el.setAttribute(key, vnode.attrs[key]);
    }
  }

  if (vnode.children) {
    vnode.children.forEach((item) => {
      render(item, el);
    });
  }

  container.appendChild(el);
};

let container = document.createElement('div');
console.log(render(vnode, container));

```

## fetchWithRetry

实现一个函数, fetchWithRetry 会自动重试3次，任意一次成功直接返回

```js
const fetchWithRetry = async (url, options, retryCount = 0) => {
  const { maxRetry = 3, ...remainOption } = options;

  try {
    return await fetch(url, remainOption);
  } catch (error) {
    if (retryCount < maxRetry) {
      return fetchWithRetry(url, options, retryCount + 1);
    }
    throw error;
  }
};
```

## compose

实现compose函数, 类似于koa的中间件洋葱模型

```js
let middleware = [];
middleware.push((next) => {
  console.log(1);
  next();
  console.log(1.1);
});
middleware.push((next) => {
  console.log(2);
  next();
  console.log(2.1);
});
middleware.push((next) => {
  console.log(3);
  next();
  console.log(3.1);
});

const compose = (middleware) => {
  return (next) => {
    return dispatch(0);

    function dispatch(i) {
      const fn = middleware[i];
      if (!fn) return Promise.resolve();

      try {
        return Promise.resolve(fn(() => dispatch(i + 1)));
      } catch (error) {
        return Promise.reject(error);
      }
    }
  };
};

let fn = compose(middleware);
fn();
function compose(middleware) {
  let middlewareData = {};

  async function dispatch(index) {
    if (index === middleware.length) return;

    const { name, fn } = middleware[index];

    const { data } = await fn({
      middlewareData,
      next: () => {
        dispatch(++index);
      },
    });

    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data,
      },
    };
  }

  dispatch(0);

  return middlewareData;
}
```

## 实现发布-订阅者模式

```js
class EventEmitter {
  constructor() {
    this.event = {};
  }

  on(type, fn) {
    if (!this.event[type]) {
      this.event[type] = [fn];
    } else {
      this.event[type].push(fn);
    }
  }

  off(type, fn) {
    if (!this.event[type]) return;
    this.event[type] = this.event[type].filter((item) => item !== fn);
  }

  emit(type, ...args) {
    if (!this.event[type]) return;
    this.event[type].forEach((fn) => {
      fn(...args);
    });
  }

  once(type, cb) {
    const fn = () => {
      cb();
      this.off(type, fn);
    };
    this.on(type, fn);
  }
}

```

## 获取两个对象的差异

```js
const getObjDiff = (before, after) => {
  const result = Array.isArray(after) ? [] : {};
  const allKeys = [...new Set([...Object.keys(before), ...Object.keys(after)])];

  for (const key of allKeys) {
    const hasBefore = before.hasOwnProperty(key);
    const hasAfter = after.hasOwnProperty(key);
    const beforeVal = before[key];
    const afterVal = after[key];

    if (typeof beforeVal === 'object' && typeof afterVal === 'object' && beforeVal && afterVal) {
      const subDiff = getObjDiff(beforeVal, afterVal);
      if (Object.keys(subDiff).length) {
        result[key] = {
          _type: 'change',
          _value: subDiff,
        };
      }
    } else {
      result[key] =
        hasBefore && hasAfter
          ? beforeVal !== afterVal
            ? { _type: 'change', _value: afterVal }
            : undefined
          : hasBefore
          ? { _type: 'delete', _value: beforeVal }
          : { _type: 'add', _value: afterVal };
    }
  }

  return result;
};

```

## 实现 lodash get set 方法

```js
const _get = (obj, path, defaultVal) => {
  // 统一输入格式 string => array 'a[0].b' => [a, 0, b]
  const newPath = Array.isArray(path) ? path : path.match(/[^\[\].]+/g);
  return (
    newPath.reduce((rlt, cur) => {
      return (rlt || {})[cur];
    }, obj) ?? defaultVal
  );
};

const _set = (obj, path, val) => {
  const newPath = Array.isArray(path) ? path : path.match(/[^\[\].]+/g);
  newPath.reduce((rlt, cur, index, arr) => {
    if (index === arr.length - 1) {
      rlt[cur] = val;
    } else if (cur in rlt) {
      return rlt[cur];
    } else {
      rlt[cur] = /^[0-9]{1,}$/.test(arr[index + 1]) ? [] : {};
      return rlt[cur];
    }
  }, obj);
  return obj;
};
```

## 将列表转为树形结构

```js
const listToTree = (list, root = 0, key = 'id', pKey = 'pId') => {
  // 如果是乱序需要先排序
  // list.sort((a, b) => a[key] - b[key])
  const parent = {};
  const result = [];

  for (const item of list) {
    // 这里拿到需要的数据然后做处理
    const { [key]: id, [pKey]: pId } = item;
    const copy = { id, pId };

    if (parent[pId]) {
      // (parent[pId].children ||= []).push(copy);
      (parent[pId].children || (parent[pId].children = [])).push(copy);
    }
    parent[id] = copy;

    if (pId === root) result.push(copy);
  }

  return result;
};
```

## call、apply、bind

```js
Function.prototype.cCall = function (context, ...args) {
  if (typeof this !== 'function') throw new TypeError('error');

  context = context || window;
  let fn = Symbol('fn');
  context[fn] = this;
  const res = context[fn](...args);
  delete context[fn];

  return res;
};

Function.prototype.cApply = function (context, args) {
  if (typeof this !== 'function') throw new TypeError('error');

  context = context || window;
  let fn = Symbol('fn');
  context[fn] = this;
  const res = context[fn](...args);
  delete context[fn];

  return res;
};

Function.prototype.cBind = function (context, ...args) {
  let fn = this;

  return function newFn() {
    if (this instanceof newFn) {
      return new fn(...args, ...arguments);
    }

    return fn.call(context, ...args, ...arguments);
  };
};
```

## 实现并发请求限制并发数

```js
const delay = (interval) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        res(interval);
      } else {
        rej(null);
      }
    }, interval);
  });
};

let tasks = [
  () => {
    console.log(1);
    return delay(1000);
  },
  () => {
    console.log(2);
    return delay(1050);
  },
  () => {
    console.log(3);
    return delay(2000);
  },
  () => {
    console.log(4);
    return delay(2050);
  },
  () => {
    console.log(5);
    return delay(3000);
  },
  () => {
    console.log(6);
    return delay(4000);
  },
];

const sendRequest = (tasks, max, callBack) => {
  let index = 0;
  let together = new Array(max).fill(null);
  const result = [];

  together = together.map(() => {
    return new Promise((resolve) => {
      const run = () => {
        if (index >= tasks.length) {
          resolve();
          return;
        }
        let cur = index;
        let task = tasks[index++];
        task()
          .then((res) => {
            result[cur] = res;
            run();
          })
          .catch((err) => {
            result[cur] = err;
            run();
            // reject(err);
          });
      };
      run();
    });
  });
  Promise.all(together).then(() => callBack(result));
};

sendRequest(tasks, 2, (res) => {
  console.log(res);
});
```