<template>
    <div class="main">
        <main-header></main-header>
        <main-todo></main-todo>
        <main-footer></main-footer>
    </div>
</template>

<script>
    import mainHeader from './views/mainHeader.vue'
    import mainTodo from './components/mainTodo.vue'
    import mainFooter from './views/mainFooter.vue'

    import './assets/styles/global.styl'

    export default {
        name: 'App',
        components: {
            // 组件名： 组件对象 （两者一致时可简写）
            mainHeader: mainHeader,
            mainTodo,
            mainFooter
        }
    }
</script>

<style lang="stylus" scoped>
    .main
        float: left
        margin-left: 50px
</style>