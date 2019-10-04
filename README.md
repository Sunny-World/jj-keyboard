# jj-keyboard
js监听键盘的快捷键

- [文档地址](https://sunny-world.github.io/jj-keyboard/)

## 安装办法：
```js
npm i jj-keyboard
```

进行引用
```js
import jjKeyboard from "jj-keyboard";
```

或者外链方法
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
jjKeyboard.target["Control+A"] = (event) => {
    alert("success");
};
// 或者
jjKeyboard.catch("Control+S", event => {
    alert(123);
});

// 取消快捷键的默认事件
jjKeyboard.defaultCatch("Control+S", event => {
    alert(123);
});

// 删除监听按键
jjKeyboard.delCatch("Control+A")

// 删除全部监听按键
jjKeyboard.delAllCatch()

//  取消监听器
jjKeyboard.destroy()
```

## 请我喝杯果汁呗～

![Image text](https://github.com/sunny-world/jj-keyboard/blob/master/image/alipay.jpg?raw=true)![Image text](https://github.com/sunny-world/jj-keyboard/blob/master/image/wechat.jpg?raw=true)