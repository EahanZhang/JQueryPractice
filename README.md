# JQueryPractice

AddELement

append()            --在被选元素的结尾插入内容
prepend()           --在被选元素的开头插入内容
after()             --在被选元素之后插入内容
before()            --在被选元素之前插入内容


删除
remove()            --删除被选元素及其子元素
empty()             --删除被选元素的子元素

remove()可以接受一个参数，可以对被删元素进行过滤:
$("#div").remove(".italic");

empty()不接受任何参数.


获取并设置CSS类
addClass()          --向被选元素添加一个或多个类
removeClass()       --向被选元素删除一个或多个类
toggleClass()       --向被选元素添加/删除类的切换


css()方法
css("propertyname");
                    --返回首个匹配元素的propertyname的值
css("propertyname", value)
                    --设置指定元素的propertyname的属性 

css可同时设置多个CSS属性
css("propertyname":"value", "propertyname":"value", ...)
