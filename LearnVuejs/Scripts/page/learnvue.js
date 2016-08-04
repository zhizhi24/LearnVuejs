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



//1-8
//过滤器
//Vue.js 允许在表达式后添加可选的“过滤器 (Filter) ”，以“管道符(|)”指示。过滤器本质上是一个函数，这个函数会接收一个值，将其处理并返回。
//这里我们将表达式 message 的值“管输（pipe）”到内置的 uppercase 过滤器，这个过滤器其实只是一个 JavaScript 函数，返回大写化的值。
var data = {
    message: "heLLO Vue.js!"
}

new Vue({
    el: '#learnvue1-8',
    data: data
})



//1-9
//指令
//Vue.js指令 (Directives) 是特殊的带有前缀 v- 的特性。
//本质是模板中出现的特殊标记，让处理模板的库知道需要对这里的DOM元素进行一些对应的处理。
//指令的职责就是当其表达式的值改变时把某些特殊的行为应用到 DOM 上。
//在Vue.js中为我们提供了一些指令：v-text，v-html，v-model，v-on，v-else等等
var data = {
    msgtrue: 1,
    msgfalse: false
}

new Vue({
    el: '#learnvue1-9',
    data: data
})



//1-10
//计算属性 Computed Properties
//在模板中表达式非常便利，但是它们实际上只用于简单的操作。模板是为了描述视图的结构。
//在模板中放入太多的逻辑会让模板过重且难以维护。这就是为什么 Vue.js 将绑定表达式限制为一个表达式。如果需要多于一个表达式的逻辑，应当使用计算属性。

new Vue({
    el: '#learnvue1-10',
    data: {
        a: 1
    },
    //在 Vue.js 中，可以通过 computed 选项定义计算属性：
    computed: {
        b: function () {
            // `this` 指向 Vue实例
            return this.a +1
        }
    }
})