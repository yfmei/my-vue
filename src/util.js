/**
 * 工具类
 * @author yfmei
 * @date 2020/12/25
 */

/**
 * mix properties into target object
 * @param target
 * @param mixin
 */
function mixin(target, mixin) {
    for(let key in mixin){
        if (target[key] !== mixin[key]) {
            target[key] = mixin[key]
        }
    }
}

/**
 * 对象类型检测
 * @param obj
 * @returns {boolean}
 */
function isObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]"
}

/**
 * 数组类型检测
 * @param arr
 * @returns {arg is any[]}
 */
function isArray(arr) {
    return Array.isArray(arr)
}

/**
 * 定义一个只读不可枚举的属性
 * @param obj
 * @param key
 * @param value
 */
function define(obj, key, value) {
    Object.defineProperty(obj, key, {
        value,
        enumerable: false,
        writable: false,
        configurable: true
    })
}

export default {
    mixin,
    isArray,
    isObject,
    define
}
