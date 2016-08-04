new Vue({
    el: '#demo',
    data: {
        message: 'hello word~'
    }
})

//构造器
//每个Vue.js应用的起步都是通过构造函数Vue创建一个Vue的根实例：
var vm = new Vue({

})
//一个Vue实例其实正是一个MVVM模式中所描述的 ViewModel - 因此在文档中经常会使用vm这个变量名。



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