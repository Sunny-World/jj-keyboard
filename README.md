# jj-keyboard
js监听键盘的快捷键

- [文档地址](https://sunny-world.github.io/jj-keyboard/)

## 引用办法：
```js
import jjKeyboard from "jj-keyboard";
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

## 请我喝杯果汁呗～

![Image text](https://github.com/sunny-world/jj-keyboard/blob/master/image/alipay.jpg?raw=true)![Image text](https://github.com/sunny-world/jj-keyboard/blob/master/image/wechat.jpg?raw=true)