# JQueryPractice

--------------------------------------------------------------------
AddELement

append()            --在被选元素的结尾插入内容
prepend()           --在被选元素的开头插入内容
after()             --在被选元素之后插入内容
before()            --在被选元素之前插入内容

--------------------------------------------------------------------

--------------------------------------------------------------------
删除
remove()            --删除被选元素及其子元素
empty()             --删除被选元素的子元素

remove()可以接受一个参数，可以对被删元素进行过滤:
$("#div").remove(".italic");

empty()不接受任何参数.

--------------------------------------------------------------------


--------------------------------------------------------------------
获取并设置CSS类
addClass()          --向被选元素添加一个或多个类
removeClass()       --向被选元素删除一个或多个类
toggleClass()       --向被选元素添加/删除类的切换

--------------------------------------------------------------------

--------------------------------------------------------------------
css()方法
css("propertyname");
                    --返回首个匹配元素的propertyname的值
css("propertyname", value)
                    --设置指定元素的propertyname的属性 

css可同时设置多个CSS属性
css("propertyname":"value", "propertyname":"value", ...)

--------------------------------------------------------------------

--------------------------------------------------------------------
JQuery遍历

parent()            --返回被选元素的直接父元素
parents()           --返回被选元素的所有祖先元素
parentsUntil()      --返回介于两个给定元素之间的所有祖先元素

children()          --返回被选元素的所有直接子元素，并且可以是使用参数来过滤
find()              --返回被选元素的后代元素直到最后一个后代

siblings()          --返回被选元素的所有同胞元素,可使用参数进行过滤
next()              --返回被选元素的下一个同胞元素，只返回一个元素
nextAll()           --返回被选元素所有跟随的同胞元素
nextUntil()         --返回介于两个给定参数之间的所有跟随的同胞元素
prev()              --返回被选元素的上一个同胞元素
prevAll()           --返回被选元素之前的所有同胞元素
prevUntil()         --返回介于两个给定参数之间的所有之前的同胞元素

first()             --返回被选元素的首个元素
last()              --返回被选元素的最后一个元素
eq()                --返回被选元素中带有指定索引号的元素
filter()            --返回被选元素中符合过滤条件的元素
not()               --返回被选元素中不符合过滤条件的元素,与filter()相反

--------------------------------------------------------------------
    

--------------------------------------------------------------------
Ajax

$(selector).load(URL, data, callback);
                    --从服务器加载数据，并将返回的数据放入被选元素中

URL         必需，规定希望加载的URL
data        可选，规定与请求一起发送的查询字符串键/值对集合
calllback   load()方法完成后所执行的函数名称
    callback(responseTxt, statusTxt, xhr);
    
    responseTxt     包含调用成功时的结果内容
    statusTxt       包含调用的状态
    shr             包含XMLHttpRequest对象

