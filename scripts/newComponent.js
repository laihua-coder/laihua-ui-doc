const { mkdir, ShellString, cd, sed, test, ls } = require("shelljs");
const inquirer = require("inquirer");
const boxen = require("boxen");
const { execSync } = require("child_process");
const chalk = require("chalk");
const print = require("../build/utils/print.js");
const green = print("green");
const emptyLine = print();

// 写入文件
const writeToFile = (contents, file) => {
  new ShellString(contents).to(file);
};

// 创建 scss样式文件
function FileScss(name) {
  return `
.lh-${name.toLowerCase()}-content{
  background: red;
}
.lh-${name.toLowerCase()}{
  background: #000;
  color: #fff;
}`.trim();
}

// 创建index.js 对外导出组件
function FileIndex(name) {
  return `import './style.scss'
import lh${name} from './lh${name}'

lh${name}.install = function(Vue) {
  Vue.component(lh${name}.name, lh${name});
}

export default lh${name};
`.trim();
}

// 创建组件
function FileComponent(name) {
  return `
  <template>
  <div class="lh-${name}">
    <div>我的是一个lh${name}组件</div>
  </div>
</template>

<script>
export default {
  name: "lh${name}"
};
</script>`.trim();
}

// 使用命令添加组件导出
function addComponentExport(name) {
  sed(
    "-i",
    "// new component slot",
    `export { default as lh${name} } from './lh${name}/index'\n// new component slot`,
    "components/index.js"
  );
}

console.log(
  boxen("New Component Options", {
    padding: 1,
    margin: 2,
    borderColor: "yellow",
    borderStyle: "round"
  })
);

var questions = [
  {
    type: "input",
    name: "name",
    message: "请输入新组件的名称?",
    filter: String,
    validate: value => {
      if (test("-e", `src/components/lh${value}`)) {
        return "组件已经存在";
      } else if (!/^[A-Z]/.test(value)) {
        return "组件首字母大写";
      } else {
        return true;
      }
    }
  }
];


// 创建组件文档
function FileComponentMD(name) {
  return `---
title : lh${name}
---

## ${name}

::: demo

\`\`\`html
<template>
  <lh-${name}></lh-${name}>
</template>
<script>
  export default {
    name: "lh${name}"
  };
</script>
\`\`\`

:::`.trim();
}

// 修改vuepress配置文件config.js
function addComponentConfig(name) {
  sed(
    "-i",
    "// new component slot 2",
    `{title:"${name}",path:"${name}"}\n// new component slot 2`,
    "config.js"
  );
}

inquirer.prompt(questions).then(answers => {
  const name = answers.name;
  // 创建docs
  cd("./docs/components");
  writeToFile(FileComponentMD(name), `${name}.md`); // 创建组件示例文档
  cd("../../docs/.vuepress");
  addComponentConfig(name); // 配置config.js
  // 创建 component
  cd("../../src");
  addComponentExport(name);
  mkdir("-p", `components/lh${name}`);
  cd(`components/lh${name}`);
  writeToFile(FileScss(name), `style.scss`);
  writeToFile(FileIndex(name), `index.js`);
  writeToFile(FileComponent(name), `lh${name}.vue`);
  execSync(`code style.scss && code lh${name}.vue && code index.js`);
  emptyLine();
  emptyLine();
  green(chalk.bold(`组件创建成功!`));
  emptyLine();
  emptyLine();
});
