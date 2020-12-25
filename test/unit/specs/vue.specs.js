/**
 * @author yfmei
 * @date 2020/12/25
 */

import Vue from "@/vue"

describe("#vue.js", function () {
    it("should print Vue prototype", function () {
        let vm = new Vue("world")

        console.log("test start", vm)

    })
})
