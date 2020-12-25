/**
 * @author yfmei
 * @date 2020/12/25
 */
import _ from "@/util";
import Compiler from "@/compiler/compiler"

function Vue(options) {
    this._compiler = new Compiler(this, options)
}

// 注入实例方法
let p = Vue.prototype;
_.mixin(p, import("./instance/lifecycle"))
_.mixin(p, import("./instance/data"))
_.mixin(p, import("./instance/dom"))
_.mixin(p, import("./instance/events"))

// 静态方法
Vue.config = import("./api/config")
Vue.use = import("./api/use")
Vue.extend = import("./api/extend")
export default Vue
