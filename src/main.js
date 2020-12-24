/**
 * @author yfmei
 * @date 2020/1/19
 */

export function hello(msg) {
  console.log("hello in")

  let str = `hello ${msg}!`
  let textNode = document.createTextNode(str)
  document.body.appendChild(textNode)
}
