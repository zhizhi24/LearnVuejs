//1-1
new Vue({
    el: '#learnvue1-1',
    data: {
        message: 'hello word~'
    }
})

//1-2
//构造器
//每个Vue.js应用的起步都是通过构造函数Vue创建一个Vue的根实例：
var vm = new Vue({

})
//一个Vue实例其实正是一个MVVM模式中所描述的 ViewModel - 因此在文档中经常会使用vm这个变量名。


//1-3
//属性与方法
var data = {
    name: "yeeee"
}

//每个Vue实例都会代理其data对象里所有的属性
//注意只有这些被代理的属性是响应的。如果在实例创建之后添加新的属性到实例上，它不会触发视图更新。
var vm = new Vue({
    el: '#exapmle',
    data: data
})

//除了数据属性，Vue 实例还有一些有用的实例属性与方法。
//这些属性与方法都有前缀 $，以便与代理的数据属性区分。

vm.$data === data;
vm.$el === document.getElementById('example');

//$watch 是一个实例方法
vm.$watch('a', function (newVal, oldVal) {
    // 这个回调将在 `vm.a`  改变后调用
})


//1-4
//插值
//数据绑定最基础的形式是文本插值，使用 {{}} 语法（双大括号）
var data = {
    msg: 'Hello Vue.js!'
}

new Vue({
    el: '#learnvue1-4',
    data: data
})

data.msg = "yeeee~"


//1-5
//原始的HTML
var data = {
    msg: '<h1>Hello Vue.js! 输出HTML字符串，非纯文本~~ </h1>'
}

new Vue({
    el: '#learnvue1-5',
    data: data
})


//1-6
//HTML特性
//双大括号标签也可以用在 HTML 特性 (Attributes) 

var data = {
    class: 'learnvue1-6',
    msg: 'ya~~'
}

new Vue({
    el: 'div',
    data: data
})


//1-7
//JavaScript表达式

var data = {
    number: 1,
    ok: true,
    message: "Hello Vue.js!"
}

new Vue({
    el: '#learnvue1-7',
    data: data
})