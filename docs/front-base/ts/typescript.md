# TypeScript

## TypeScript 基础类型
### Boolean 类型
```ts
const isBoolean: boolean = true
```
### String 类型
```ts
const str: string = 'TypeScript'
```
### Number 类型
```ts
const num: number = 123
```
### Enum 类型
* 基础用法
```ts
enum FrontLanguage {
  JAVASCRIPT,
  TYPESCRIPT,
  VUE,
  REACT,
  CSS,
  HTML,
}

const lang: FrontLanguage = FrontLanguage.JAVASCRIPT
console.log(lang) // 0
```
* 设置默认值
```ts
enum FrontLanguage {
  JAVASCRIPT = 'js',
  TYPESCRIPT = 'ts',
  VUE = 'vue',
  REACT = 'react',
  CSS = 'css',
  HTML = 'html',
}

const lang: FrontLanguage = FrontLanguage.JAVASCRIPT
console.log(lang) // js
```
### Array 类型
```ts
const arr: any[] = [1, '2', {}]
const arr1: Array<any> = [1, '2', {}]
```
### Tuple 类型
元组（ Tuple ）表示一个已知数量和类型的数组,可以理解为它是一种特殊的数组
```ts
const tuple: [number, string] = [1, '']
```
> 需要注意的是，元组类型只能表示一个已知元素数量和类型的数组，长度已指定，越界访问会提示错误。例如，一个数组中可能有多种类型，数量和类型都不确定，那就直接any[]。
### Undefined and Null 类型
默认情况下 null 和 undefined 是所有类型的子类型。 也就是说你可以把 null 和 undefined 赋值给其他类型。
```ts
const a: undefined
const b: null = null
let str: string = 'ts'

str = null
str = undefined
```
如果你在tsconfig.json指定了"strictNullChecks":true。***null 和 undefined 只能赋值给 void 和它们各自的类型。***
```ts
// 启用 --strictNullChecks
let x: number
x = 1 // ✅
x = undefined // ❌
x = null // ❌

const c: void = undefined // ✅
const d: void = null // ❌
```
### Any and Unknown 类型
```ts
// let x: any
let x: unknown = 1
x = 'ts'
x = 123
```
any 和 unknown 的区别
> 任何类型的值可以赋值给any，同时any类型的值也可以赋值给任何类型。unknown 任何类型的值都可以赋值给它，但它只能赋值给unknown和any
### Void 类型
void 意思就是无效的, 一般只用在函数上，表示这个函数没有返回值。
```ts
function test(): void {
  console.log('ts')
}
```
### Never 类型
never 类型表示的是那些永不存在的值的类型。 例如never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
```ts
// 异常
function error(msg: string): never {
  throw new Error(msg)
}
```
## 联合类型
联合类型用<font color="#f5222d"> | </font>分隔，表示取值可以为多种类型中的一种
```ts
const x: number | string
```
## 类型别名
类型别名用来给一个类型起个新名字。它只是起了一个新名字，并没有创建新类型。类型别名常用于联合类型。
```ts
type TCount = number | number[]
function getCount(count: TCount): number {
  if (Array.isArray(count))
    return count.reduce((acc, cur) => acc + cur, 0)
  return count
}
```
## 交叉类型
交叉类型就是跟联合类型相反，用<font color="#f5222d"> & </font>操作符表示，交叉类型就是两个类型必须存在
```ts
interface IOption {
  label: string
  value: string
}
interface IState {
  disabled?: boolean
}

const item: IOption & IState = {
  label: 'ts',
  value: 'ts',
}
```
## 类型断言
某些情况下我们可能比 <code>typescript</code> 更加清楚的知道某个变量的类型，所以我们可能希望手动指定一个值的类型

类型断言有两种方式

```ts
const str: any = 'ts'
// 方式一
const strLen: number = (<string>str).length
// 方式二
const len: number = (str as string).length
```
## 泛型
### 泛型工具类型
* typeof

类型推导
```ts
const info = {
  lang: 'ts',
  type: 'md'
}

type TInfo = typeof info
function getInfo(info: TInfo): string {
  return info.lang
}
```
* keyof

获取一个对象接口中的所有 key 值
```ts
interface TInfo {
  lang: 'ts' | 'js'
  type: string
}
type TInfoKey = keyof TInfo // "lang" | "type"
```
* in

用来遍历枚举类型
```ts
type TKey = 'lang' | 'type' | 'author'
type TInfo = {
  [K in TKey]: K extends 'lang' ? 'ts' | 'js' : string
}
```
* infer

在条件类型语句中，可以用 <code>infer</code> 声明一个类型变量并且对它进行使用。

1. <code>infer</code> 只能在条件类型的 <code>extends</code> 子句中使用
2. <code>infer</code> 得到的类型只能在 <code>true</code> 语句中使用
```ts
type InferArray<T> = T extends (infer U)[] ? U : never
type InferFirst<T extends unknown[]> = T extends [infer F, ...infer _] ? P : never
type ReturnType<T> = T extends (...arg: any[]) => infer R ? R : any
type InferString<T extends string> = T extends `${infer F}${infer _}` ? F : []
type StringToUnion<T extends string, U = never> = T extends ''
  ? U
  : T extends `${infer L}${infer R}`
    ? StringToUnion<R, U | L>
    : U
```
* [] 索引访问操作符
```ts
interface TInfo {
  lang: 'ts' | 'js'
  type: string
}
type TLang = TInfo['lang'] // 'ts' | 'js'
```
## tsconfig.json
```json
{
  "compilerOptions": {
    /* 基本选项 */
    "target": "es5",                       // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "module": "commonjs",                  // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "lib": [],                             // 指定要包含在编译中的库文件
    "allowJs": true,                       // 允许编译 javascript 文件
    "checkJs": true,                       // 报告 javascript 文件中的错误
    "jsx": "preserve",                     // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "declaration": true,                   // 生成相应的 '.d.ts' 文件
    "sourceMap": true,                     // 生成相应的 '.map' 文件
    "outFile": "./",                       // 将输出文件合并为一个文件
    "outDir": "./",                        // 指定输出目录
    "rootDir": "./",                       // 用来控制输出目录结构 --outDir.
    "removeComments": true,                // 删除编译后的所有的注释
    "noEmit": true,                        // 不生成输出文件
    "importHelpers": true,                 // 从 tslib 导入辅助工具函数
    "isolatedModules": true,               // 将每个文件做为单独的模块 （与 'ts.transpileModule' 类似）.

    /* 严格的类型检查选项 */
    "strict": true,                        // 启用所有严格类型检查选项
    "noImplicitAny": true,                 // 在表达式和声明上有隐含的 any类型时报错
    "strictNullChecks": true,              // 启用严格的 null 检查
    "noImplicitThis": true,                // 当 this 表达式值为 any 类型的时候，生成一个错误
    "alwaysStrict": true,                  // 以严格模式检查每个模块，并在每个文件里加入 'use strict'

    /* 额外的检查 */
    "noUnusedLocals": true,                // 有未使用的变量时，抛出错误
    "noUnusedParameters": true,            // 有未使用的参数时，抛出错误
    "noImplicitReturns": true,             // 并不是所有函数里的代码都有返回值时，抛出错误
    "noFallthroughCasesInSwitch": true,    // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）

    /* 模块解析选项 */
    "moduleResolution": "node",            // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./",                       // 用于解析非相对模块名称的基目录
    "paths": {},                           // 模块名到基于 baseUrl 的路径映射的列表
    "rootDirs": [],                        // 根文件夹列表，其组合内容表示项目运行时的结构内容
    "typeRoots": [],                       // 包含类型声明的文件列表
    "types": [],                           // 需要包含的类型声明文件名列表
    "allowSyntheticDefaultImports": true,  // 允许从没有设置默认导出的模块中默认导入。

    /* Source Map Options */
    "sourceRoot": "./",                    // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    "mapRoot": "./",                       // 指定调试器应该找到映射文件而不是生成文件的位置
    "inlineSourceMap": true,               // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    "inlineSources": true,                 // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

    /* 其他选项 */
    "experimentalDecorators": true,        // 启用装饰器
    "emitDecoratorMetadata": true          // 为装饰器提供元数据的支持
  }
}
```
