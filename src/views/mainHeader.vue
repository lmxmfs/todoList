<template>
    <div>
        <header class="main-header">
            <h3>TodoList</h3>
        </header>
    </div>
</template>

<script>
    export default {
        name: 'mainHeader'
    }
</script>

<style lang="stylus" scoped>
    // 路径以 . 开头，将会被看作相对的模块依赖，并按照本地文件系统上的目录结构进行解析
    // 路径以 ~ 开头，其后的部分将会被看作模块依赖，这意味着你可以用该特性来引用一个 Node 依赖中的资源
    @import '~styles/theme.styl'
    .main-header
        text-align: center

        h3
            margin 20px
            font-size: 60px
            font-weight: 100
            color: $lightred
            text-shadow: 5px 5px 5px rgb(0, 0, 0, 0.1)

</style>