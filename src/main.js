/*
* 获取目标元素（find）
* */
{
  const x = jQuery(".test2").find_demo1(".child")
  console.log(x)
}

/*
* find
* */
{
  jQuery(".test4")
    .find(".child")
    .addClass("red")
    .addClass("blue")
    .addClass("green")
}

/*
* 回到上一次的 api （end）
* */
{
  jQuery(".test5")
    .find(".child")
    .addClass("aa")
    .addClass("bb")
    .addClass("cc")
    .end()
    .addClass("abc")
}


/*
* 遍历元素，对每项执行特定操作（each）
* */
{
  const x = jQuery(".test2").find(".child")
  x.each((ele, index, array) => {
    console.log("ele:", ele)
    console.log("index:", index)
    // console.log("array", array)
  })
}

/*
* 获取父元素（parent）
* */
{
  const x = jQuery(".test2").find(".child")
  x.parent().print()
  const x2 = jQuery(".test")
  x2.parent().print()
}

/*
* 获取子元素（children）
* */
{
  jQuery(".test2").children().print().end()
    .parent().print().addClass("hahhhhhhhhh")
}
