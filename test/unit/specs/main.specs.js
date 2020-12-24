/**
 * @author yfmei
 * @date 2020/1/19
 */

import { hello } from "@/main"

describe("#main.js", function () {
  it("should print hello world", function () {
    console.log("test start")

    hello("world")
  })
})
