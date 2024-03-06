# [Nx](https://nx.dev/getting-started/intro)

## Vue

```shell
# 安装插件
npm add -D @nx/vue
```
```shell
# 创建vue app [app名称] --directory=[app存放目录]
nx g @nx/vue:app admin --directory=apps/vue/admin
```
```shell
# 创建vue lib [lib名称] --directory=[lib存放目录]
nx g @nx/vue:lib theme --directory=libs/vue/theme
```
```shell
# 创建component
nx g @nx/vue:component --directory=my-app/src/app/one --name=one --nameAndDirectoryFormat=as-provided --unitTestRunner=vitest
```

## NestJS

```shell
# 安装插件
npm add -D @nx/nest
```
```shell
# 创建app
nx g @nx/nest:app my-nest-app
```
```shell
# 创建lib
nx g @nx/nest:lib my-nest-lib
```
```shell
# 创建可构建的lib
nx g @nx/nest:lib my-nest-lib --buildable
```
```shell
# 发布lib
nx g @nx/nest:lib my-nest-lib --publishable --importPath=@my-workspace/my-nest-lib
```