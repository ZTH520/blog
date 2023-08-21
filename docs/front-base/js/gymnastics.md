# 类型体操

## Merge
合并两个已知类型，对于同名的key，合并类型，最后返回一个新类型
```ts
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
