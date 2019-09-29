const jjKey = {
    REALKEYS: [],
    init: () => {
        window.addEventListener("keydown", jjKey.keydownFn, true);
        window.addEventListener("keyup", jjKey.keyupFn, true);
    },
    destroy: () => {
        window.removeEventListener("keydown", jjKey.keydownFn);
        window.removeEventListener("keyup", jjKey.keyupFn);
    },
    isConsole: false,
    target: {},
    delTarget: (key)=>{
        if(jjKey.target[key]){
            
        }
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
    parseKey: event => {
        const { key, code, ctrlKey, altKey, shiftKey, metaKey } = event;
        // modifier: key
        if (["Control", "Shift", "Alt", "Meta"].indexOf(key) >= 0) {
            return {
                key,
                code,
                isModifier: true,
                smart: key,
                ctrlKey,
                altKey,
                shiftKey,
                metaKey
            };
        }
        // navigation: key
        if (
            [
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
            ].indexOf(key) >= 0
        ) {
            return {
                key,
                code,
                smart: key,
                ctrlKey,
                altKey,
                shiftKey,
                metaKey
            };
        }
        // number: key
        if (key.match(/^\d$/)) {
            return {
                key,
                code,
                smart: key,
                ctrlKey,
                altKey,
                shiftKey,
                metaKey
            };
        }
        // number: code
        if (code.match(/^Digit\d$/)) {
            return {
                key,
                code,
                smart: code.substr(5),
                ctrlKey,
                altKey,
                shiftKey,
                metaKey
            };
        }
        // alphabet: code
        if (code.match(/^Key\w$/)) {
            return {
                key,
                code,
                smart: code.substr(3).toUpperCase(),
                ctrlKey,
                altKey,
                shiftKey,
                metaKey
            };
        }
        // other: code
        return { key, code, smart: code, ctrlKey, altKey, shiftKey, metaKey };
    },
    keydownFn: (event) => {
        const info = jjKey.parseKey(event);
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
        if(jjKey.isConsole){
            console.log(jjKey.REALKEYS.join("+"))
        }
        if(typeof jjKey.target[jjKey.REALKEYS.join("+")] === "function"){
            jjKey.target[jjKey.REALKEYS.join("+")]()
        }
        return;
    },
    addKey: (key) => {
        if (jjKey.REALKEYS.indexOf(key) === -1) {
            jjKey.REALKEYS.push(key);
            setTimeout(() => {
                jjKey.delKey(key);
            }, 300);
        }
        return;
    },
    delKey: (key) => {
        if(jjKey.REALKEYS.length > 0){
            const i = jjKey.REALKEYS.indexOf(key);
            if (i > -1) {
                jjKey.REALKEYS.splice(i, 1);
            }
        }
    },
    keyupFn: (event) => {
        const info = jjKey.parseKey(event);
        jjKey.delKey(info.smart);
    }
};

jjKey.init()
// jjKey.isConsole = true
jjKey.target["Control+A"] = () => {
    alert("success");
};
jjKey.target["A+S+D"] = () => {
    alert("fail");
};
// jjKey.delTarget("");

// add the function to prevent the browser's default behavior

// handle the order of shortcut keyboards