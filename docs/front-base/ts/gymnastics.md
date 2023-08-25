# 类型体操
模板
```md
### TypeName
描述
```ts
/**
 * 1.思路
*/
type TypeName<T> = T

type X = TypeName<[]>
```

## object 工具类型
### Merge
合并两个已知类型，对于同名的key，合并类型，最后返回一个新类型
```ts
/**
 * 1.in 遍历 T 或者 U 类型 keyof T | keyof U 也可以写成 keyof (T & U)
 * 2.extends 关键字构建条件类型
 * 3.判断 K 子类型是不是在 T 或者 U 中，如果是生成联合类型
*/
type Merge<T extends Record<string, any>, U extends Record<string, any>> = {
  [K in keyof T | keyof U]: K extends keyof U
    ? K extends keyof T
      ? U[K] | T[K]
      : U[K]
    : K extends keyof T
      ? T[K] : never
}

type X = Merge<{ a: string; c: string }, { a: number; b: number }>
```
### Diff
找出两个对象类型的差异，返回一个新的类型
```ts
/**
 * 1.通过 keyof (T | U) 可以获取类型的公共部分
 * 2.in 遍历所有 keyof (T & U) 枚举类型
 * 3.通过 Exclude 排除公共类型，as 断言为新的类型 Exclude
*/
type Diff<T extends object, U extends object> = {
  [K in keyof (T & U) as Exclude<K, keyof (T | U)>]: (T & U)[K]
}

type X = Diff<{ a: string; c: string }, { a: number; b: number }>
```
### Flip
交换对象类型的 key 和 value
> 由于对象类型的key只能是基本类型，但是其value却可以是任意类型，那就意味着，当我们使用索引类型T[K]来取value作为新的key时，将会有报错风险，因此，我们对key进行下约束
```ts
type Flip<T extends Record<string | number | symbol, any>> = {
  [K in keyof T as T[K]]: K
}

type X = Flip<{ x: string }>
```
## array 工具类型
### Push
在元组后面插入一位
```ts
type Push<T extends unknown[], U> = [...T, U]

type X = Push<['ts'], 123>
```
### Unshift
在元组前面插入一位
```ts
type Unshift<T extends unknown[], U> = [U, ...T]

type X = Unshift<['ts'], 123>
```
### First
获取元组第一个元素
```ts
type First<T extends unknown[]> = T extends [] ? never : T[0]

type X = First<['ts', 123]>
```
### Last
获取元组第一个元素
>我们知道 <code>T[number]</code> 能够拿到指定索引位置的成员，而 <code>T['length']</code> 是元组的个数，这刚好比索引位置多一位。
>因此我们可以来构造一个与 <code>T['length']</code> 的取值相等的元组
```ts
type Last<T extends unknown[]> = [never, ...T][T['length']]

type X = Last<['ts', 123]>
```
### Concat
将两个类型合并为元组类型
```ts
/**
 * 1. 首先判断 T U 是不是元祖类型，如果是可以直接用扩展运算符
 * 2. U[number] 可以获取元祖所有集合 key
*/
type Concat<T, U> = T extends unknown[]
  ? U extends unknown[]
    ? [...T, ...U]
    : [...T, U]
  : [T, U extends unknown[] ? U[number] : U]

type X = Concat<'ts', 123>
```
### TupleToObject
元祖类型构造对象类型
> 在TypeScript，元组类型的集合key通过 <code>T[number]</code> 获取。有了集合key之后我们只需要遍历这个集合，拿到每一个key重新进行映射即可
```ts
type TupleToObject<T extends readonly(string | number | symbol)[]> = {
  [K in T[number]]: K
}

type X = TupleToObject<['ts']>
```
### TupleToUnion
元祖类型构造联合类型
> 元组类型的集合key通过 <code>T[number]</code> 获取
```ts
type TupleToUnion<T extends unknown[]> = T[number]

type X = TupleToObject<['ts', 123]>
```
### IsTuple
判断一个类型是否是元祖
```ts
/**
 * 1.元祖与数组类型的区别，数组类型的 length 返回 number
 * 元祖类型的 length 返回具体的数字
*/
type IsTuple<T> = T extends readonly any[]
  ? number extends T['length']
    ? false : true
  : false

type X = IsTuple<['ts', 123]>
```
### LastIndexOf
找到元素在元组中的位置，找不到返回-1
```ts
/**
 * 1.利用扩展运算符拿到最后一个元素，利用 infer 关键字与 U 作比较
 * 2.当两个类型一样或者具有父子关系时，通过 extends 可以得到 true
 * 3.最后利用递归直到找到目标元素
*/
type LastIndexOf<T extends any[], U> = T extends [...infer F, infer L]
  ? U extends L ? F['length']
    : LastIndexOf<F, U>
  : -1

type X = LastIndexOf<['ts', 123], 'ts'>
```
### Includes
判断元素是否在元组中
```ts
/**
 * 1.与 LastIndexOf 思路大致相同
 * 2. infer 关键字的巧妙使用
*/
type Includes<T extends any[], U> = T extends [infer F, ...infer rest]
  ? F extends U
    ? true
    : Includes<rest, U>
  : false

type X = Includes<['ts', 124], 'ts'>
```
### Reverse
将数组类型中的元素进行翻转
```ts
type Reverse<T extends any[]> = T extends [infer F, ...infer R]
  ? [...Reverse<R>, F]
  : T

type X = Reverse<['ts', 123]>
```
### Filter
从数组类型中挑选指定的类型并返回一个由挑选类型组成的新数组
```ts
type Filter<T extends any[], U> = T extends [infer F, ...infer R]
  ? F extends U
    ? [...Filter<R, U>, F]
    : Filter<R, U>
  : T

type X = Filter<['ts', 123], 'ts'>
```
### Flatten
扁平化数组
```ts
type Flatten<T extends any[]> = T extends []
  ? []
  : T extends [infer F, ...infer R]
    ? F extends any[]
      ? [...Flatten<F>, ...Flatten<R>]
      : [F, ...Flatten<R>]
    : [T]

type X = Flatten<['ts', [123, 'js']]>
```
### Fill
逐一替换指定位置或者区间的元素
```ts
type Result = Fill<['ts', 123], 1> // [1, 1]
type Result = Fill<['ts', 123], 1, 1> // [1, 123]
type Result = Fill<['ts', 123, 'js'], 1, 1, 3> // [1, 1, 'js']
```
> 在TypeScript中跟位置相关的有 number 和 length,前者是用来获取元素的,后者得到的是数字
```ts
/**
 * 1.在递归的过程中 T['length'] 一直在减少
 * 2.需要声明一个类型变量用于记录当前已经处理了几个元素，这里使用 C 来表示 count 计数
 * 3.递归出口,当 C['length'] 与 E 相等时，后续的元素都不需要再进行处理了
 * 4.遇到 S 时我们能够有一个变量 M 来标记开始，然后在遇到 E 前，都强制取U
*/
// 版本一
type Fill<T extends any[], U> = T extends [T[0], ...infer L]
  ? [U, ...Fill<L, U>]
  : T
// 版本二
type Fill<T extends any[], U, S extends number = 0> =
  T extends [...infer L, infer R]
    ? T['length'] extends S
      ? [...Fill<L, U, S>, U]
      : [...Fill<L, U, S>, S extends 0 ? U : R]
    : T

type Common<T extends any[], U, S extends number = 0> =
  T extends [...infer L, infer R]
    ? T['length'] extends S
      ? [...Common<L, U, S>, U]
      : [...Common<L, U, S>, S extends 0 ? U : R]
    : T
// 版本三
type Fill<
  T extends any[],
  U,
  S extends number = 0,
  E extends number = T['length'],
  C extends any[] = [U],
  M extends boolean = C['length'] extends S ? true : false,
> =
  C['length'] extends E
    ? T
    : T extends [infer L, ...infer R]
      ? S extends 0
        ? Common<T, U, S>
        : M extends true
          ? [U, ...Fill<R, U, S, E, [...C, any], M>]
          : [L, ...Fill<R, U, S, E, [...C, any]>]
      : T

type X = Fill<['ts', 123, 'js'], 1, 3>
```

## string 工具类型
### StartsWith
判断字符串是否以子串为起始
> TS模板字符类型
```ts
type StartsWith<T extends string, U extends string> = T extends `${U}${string}` ? true : false

type X = StartsWith<'typescript', 'type'>
```
### EndsWith
判断字符串是否以子串为结尾
```ts
type EndsWith<T extends string, U extends string> = T extends `${string}${U}` ? true : false

type X = EndsWith<'typescript', 'script'>
```
### TrimLeft
除去字符串类型前置空白字符
```ts
/**
 * 1.空格有多种形式，构建一个辅助类型 Space
 * 2.空格数量可能有多个，需要递归的去掉
*/
type Space = ' ' | '\n' | '\t'
type TrimLeft<T extends string> = T extends `${Space}${infer R}` ? TrimLeft<R> : T

type X = TrimLeft<' ts'>
```
