# 简介

`laihua-ui` 是一个基于 `Element-UI` 的组件，它可以帮助你在编写文档的时候增加 `组件` 示例，它的诞生初衷是为了降低编写组件文档时增加一些相关示例的难度。

使用 Vuepress 编写组件示例有以下尴尬之处：

1. 组件示例和示例代码本质上一样，却需要写两遍；
2. Vuepress 无法渲染 Markdown 中的 `export default {}` 代码块；

Demo Container 参考了 Element UI 的文档渲染，实现了和它一样的，可在 Markdown 中直接编写示例的语法。

- Element UI ColorPicker 组件的**文档编写示例**，[点此查看](https://github.com/ElemeFE/element/blob/dev/examples/docs/zh-CN/color-picker.md)
- Element UI ColorPicker 组件的**文档示例预览**，[点此查看](https://element.eleme.cn/2.0/#/zh-CN/component/color-picker)

[点此查看示例与使用文档](https://docs.chenjianhui.site/vuepress-plugin-demo-container/zh/)

## 组件生成

`laihua-ui-doc` 他可以帮助你自动生成`组件`和`文档`示例 使用命令如下：

### 输入命令

```js
npm run new
```

### 输入组件名

例如 Button 脚本会自动生成 laihua-ui 组件。无需多余配置，开箱即用，方便快捷

> 注意事项： 1.组件名首字母大写，2.组件名不可与现有组件库中组件重复
