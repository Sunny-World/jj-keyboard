var jjKey = {
    REALKEYS: [],
    init: function () {
        window.addEventListener("keydown", jjKey.keydownFn, true);
        window.addEventListener("keyup", jjKey.keyupFn, true);
    },
    destroy: function () {
        window.removeEventListener("keydown", jjKey.keydownFn);
        window.removeEventListener("keyup", jjKey.keyupFn);
    },
    isConsole: false,
    target: {},
    catch: function (str, fn) {
        jjKey.target[str] = function (event) {
            fn(event);
        };
    },
    defaultCatch: function (str, fn) {
        jjKey.target[str] = function (event) {
            if (event.preventDefault) {
                event.preventDefault();
            }
            else {
                event.returnValue = false;
            }
            fn(event);
        };
    },
    delCatch: function (key) {
        if (jjKey.target[key] !== undefined) {
            delete jjKey.target[key];
        }
    },
    delAllCatch: function () {
        jjKey.target = {};
    },
    /**
     * handle the event "KeyboardEvent"
     * key: the true value to return, just like "Alt"
     * code: the details value to return, just like "AltLeft"
     * smart: the value which doesn't changed by the shiftButton
     * ctrlKey: return the value whether the button of "ctrlKey" is pressed
     * altKey: return the value whether the button of "altKey" is pressed
     * shiftKey: return the value whether the button of "altKey" is pressed
     * metaKey: return the value whether the button of "metaKey" is pressed, used as "Command" on Mac
     */
    parseKey: function (event) {
        var key = event.key, code = event.code, ctrlKey = event.ctrlKey, altKey = event.altKey, shiftKey = event.shiftKey, metaKey = event.metaKey;
        // modifier: key
        if (["Control", "Shift", "Alt", "Meta"].indexOf(key) >= 0) {
            return {
                key: key,
                code: code,
                isModifier: true,
                smart: key,
                ctrlKey: ctrlKey,
                altKey: altKey,
                shiftKey: shiftKey,
                metaKey: metaKey
            };
        }
        // navigation: key
        if ([
            "Up",
            "Down",
            "Left",
            "Right",
            "ArrowUp",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "Home",
            "End",
            "PageUp",
            "PageDown"
        ].indexOf(key) >= 0) {
            return {
                key: key,
                code: code,
                smart: key,
                ctrlKey: ctrlKey,
                altKey: altKey,
                shiftKey: shiftKey,
                metaKey: metaKey
            };
        }
        // number: key
        if (key.match(/^\d$/)) {
            return {
                key: key,
                code: code,
                smart: key,
                ctrlKey: ctrlKey,
                altKey: altKey,
                shiftKey: shiftKey,
                metaKey: metaKey
            };
        }
        // number: code
        if (code.match(/^Digit\d$/)) {
            return {
                key: key,
                code: code,
                smart: code.substr(5),
                ctrlKey: ctrlKey,
                altKey: altKey,
                shiftKey: shiftKey,
                metaKey: metaKey
            };
        }
        // alphabet: code
        if (code.match(/^Key\w$/)) {
            return {
                key: key,
                code: code,
                smart: code.substr(3).toUpperCase(),
                ctrlKey: ctrlKey,
                altKey: altKey,
                shiftKey: shiftKey,
                metaKey: metaKey
            };
        }
        // other: code
        return { key: key, code: code, smart: code, ctrlKey: ctrlKey, altKey: altKey, shiftKey: shiftKey, metaKey: metaKey };
    },
    keydownFn: function (event) {
        var info = jjKey.parseKey(event);
        if (info.ctrlKey) {
            jjKey.addKey("Control");
        }
        if (info.altKey) {
            jjKey.addKey("Alt");
        }
        if (info.shiftKey) {
            jjKey.addKey("Shift");
        }
        if (info.metaKey) {
            jjKey.addKey("Meta");
        }
        jjKey.addKey(info.smart);
        if (jjKey.isConsole) {
            console.log(jjKey.REALKEYS.join("+"));
        }
        if (typeof jjKey.target[jjKey.REALKEYS.join("+")] === "function") {
            jjKey.target[jjKey.REALKEYS.join("+")](event);
        }
        return;
    },
    addKey: function (key) {
        if (jjKey.REALKEYS.indexOf(key) === -1) {
            jjKey.REALKEYS.push(key);
            setTimeout(function () {
                jjKey.delKey(key);
            }, 300);
        }
        return;
    },
    delKey: function (key) {
        if (jjKey.REALKEYS.length > 0) {
            var i = jjKey.REALKEYS.indexOf(key);
            if (i > -1) {
                jjKey.REALKEYS.splice(i, 1);
            }
        }
    },
    keyupFn: function (event) {
        var info = jjKey.parseKey(event);
        jjKey.delKey(info.smart);
    }
};
// jjKey.init();
// jjKey.isConsole = true
// jjKey.target["Control+A"] = () => {
//     alert("success");
// };
// jjKey.target["A+S+D"] = () => {
//     alert("fail");
// };
// jjKey.delTarget("");
// add the function to prevent the browser's default behavior
// handle the order of shortcut keyboards
export default jjKey;
export var jjKeyboard = jjKey;
//# sourceMappingURL=index.js.map