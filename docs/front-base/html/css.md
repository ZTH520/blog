# CSS

## CSS盒子模型

### 基本概念

CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容。

标准模型：`Box Model = margin + border + padding + content`

- IE模型：`width = content`
- 标准模型：`width = content + padding + border`

```css
//设置标准模型
box-sizing: content-box;
//设置IE模型
box-sizing: border-box;
```
### js获取盒模型的宽和高
```js
// 只能获取内联样式设置的宽高
dom.style.width / height
// 获取渲染后即时运行的宽高，值是准确的。但只支持 IE
dom.currentStyle.width / height
// 获取渲染后即时运行的宽高，值是准确的。兼容性更好
window.getComputedStyle(dom).width / height
// 获取渲染后即时运行的宽高，值是准确的。兼容性也很好，一般用来获取元素的绝对位置，getBoundingClientRect()会得到4个值：left, top, width, height
dom.getBoundingClientRect().width / height
```

## 日常积累

### 省略号
- 超一行省略
```css
{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}
```

- 超多行省略
```CSS
{
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
```

### 隐藏滑动条
```CSS
-webkit-scrollbar { width: 0; height: 0;  }
```

### CSS动画
animation
- animation：时长|过渡方式|延迟|次数|方向|填充模式|是否暂停|动画名
- animation-duration(时长)：1S或者1000ms
- animation-timing-function(过渡方式)：同transition取值相同，如：linear
- animation-delay(延迟)：延迟
- animation-iteration-count(次数)：1或者2.5或者infinite
- animation-direction(方向)：reverse|alternate|alternate-reverse
- animation-fill-mode(填充模式)：none|forwards|backwards|both
- animation-play-state(是否暂停)：paused|running

### transition

- transition：属性名 时长 过渡方式 延迟。
- transition：left 200ms linear。
- 还可以用逗号分隔两个不同属性： transition：left 200ms，top 300ms。
- 也可以用all来代表所有属性： transition：all 1s；
- 过渡方式： linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier | step-start | step-end | steps
