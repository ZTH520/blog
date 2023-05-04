# npm 常用操作命令

## npm config

### 查看所有配置

```shell
npm config ls -l
```

### get/set

```shell
npm config get registry
```

```shell
npm config set registry=http://registry.npmjs.org
npm config set registry=http://registry.npm.taobao.org/
```

## npm view

### view

查看指定包的历史所有版本

```shell
npm view [包名] versions
```
aliases: info, show, v
```shell
npm show/info/v [包名] versions
```

## npm link

### link

```shell
npm link [<package-spec>]

alias: ln
```
