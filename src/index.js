// 1、导入 Vue
// 2、导入 App 组件
import Vue from 'vue'
import App from './App.vue'
// 3、创建 Vue 根实例
// 4、挂载 App 组件
new Vue ({
    // el: '#app',
    // // 组件名：组件对象
    // components: {
    //     // App: App
    //     // ES6里面当组件名和组件对象名称一致时可简写
    //     App: App
    // },
    // // 渲染标签 => 代表组件名
    // template: '<App/>'
    render: h => h(App)
}).$mount("#app")

