export default {
    getItem: function (key) {
        let value;
        try {
            value = localStorage.getItem(key);
        } catch (e) {
            //开发环境下提示error
            if (__DEV__) {
                console.log("localStore.getItem报错", e.message);
            }
        } finally {
            return value;
        }
    },
    setItem: function (key, value) {
        try {
            //ios safari 无痕模式下，直接使用 localStorage.setItem 会报错
            localStorage.setItem(key, value);
        } catch (e) {
            // 开发环境下提示 error
            if (__DEV__) {
                console.error('localStorage.setItem报错, ', ex.message)
            }
        }
    }
}