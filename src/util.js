/**
 * 工具类
 * @author yfmei
 * @date 2020/12/25
 */
function mixin(target, mixin) {
    for(let key in mixin){
        if (target[key] !== mixin[key]) {
            target[key] = mixin[key]
        }
    }
}

function isObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]"
}

function isArray(arr) {
    return Array.isArray(arr)
}

export default {
    mixin,
    isArray,
    isObject
}
