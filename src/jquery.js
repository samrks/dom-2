window.jQuery = function (selectorOrArray) {
  /*
  * elements 表示通过选择器找到的目标元素组成的伪数组
  * */
  let elements
  if (typeof selectorOrArray === "string") {  // 重载
    elements = document.querySelectorAll(selectorOrArray)
  } else if (selectorOrArray instanceof Array) {
    elements = selectorOrArray
  }
  // ↓ api 可以操作 elements（this 就是 jQuery 返回的 api）
  return {
    addClass(className) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(className)
      }
      return this
    },
    find(selector) {
      console.log(`elements`, elements)
      let array = []
      for (let i = 0; i < elements.length; i++) {
        array = array.concat(Array.from(elements[i].querySelectorAll(selector)))
      }
      console.log(`array`, array)
      array.oldApi = this
      return jQuery(array)
    },
    oldApi: selectorOrArray.oldApi,  // 在 find 中，通过 array 保存下来的旧的 api
    end() {
      return this.oldApi
    },
    each(fn) {
      for (let i = 0; i < elements.length; i++) {
        fn.call(null, elements[i], i, elements)
      }
      return this
      // this 就是 api !!!
    },
    print() {
      console.log(elements)
      return this
    },
    parent() {
      const array = []
      // 遍历父元素 ↓
      this.each(node => {
        if (array.indexOf(node.parentNode) === -1) {  // 去重
          array.push(node.parentNode)
        }
      })
      array.oldApi = this
      return jQuery(array)
    },
    children() {
      const array = []
      this.each(node => {
        if (node.children) {
          array.push(...node.children) // 等同于 ↓
          // array.push(node.children[0], node.children[1], node.children[2], node.children[3], ...)
        }
      })
      array.oldApi = this
      return jQuery(array)
    }
    /******************************************/
  }
}













