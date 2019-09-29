# jj-keyboard
js监听键盘的快捷键

- [文档地址](https://javison666.github.io/jj-keyboard/)

## 引用办法：
```js
import jjKeyboard from "./dist/index.js";
```
```html
<script src="./common/jjKeyboard.js"></script>
```

## 使用方法
```js
// 初始化实例
jjKeyboard.init();

// 打开按键输出日志
jjKeyboard.isConsole = true  

// 注入监听按键
jjKeyboard.target["Control+A"] = () => {
    alert("success");
};

// 删除监听按键
jjKeyboard.delTarget("Control+A")

//  取消监听器
jjKeyboard.destroy()
```