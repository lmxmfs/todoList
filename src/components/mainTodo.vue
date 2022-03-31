<template>
    <div class="main-todo">
        <input type="text" 
            class="add-todo"
            placeholder="What are you going to do?"
            autofocus
            v-model="content"
            @keyup.enter="addTodo" 
        />
        <todoItem 
            v-for="(item, index) of filterTodoData" 
            :key="index"
            :todoItem = item
            @delItem = "handleDelItem"
        >
        </todoItem>
        <todoInfo
            :unFinishTotal = total
            @toggleTab = "handleToggleTab"
            @clearCompleted = "handleClearCompleted"
        ></todoInfo>
    </div>
</template>

<script>
    import todoItem from './mainTodoComs/todoItem.vue'
    import todoInfo from './mainTodoComs/todoInfo.vue'

    let id = 0

    export default {
        name: "mainTodo",
        components: {
            todoItem,
            todoInfo
        },
        data () {
            return {
                todoData: [],
                content: '',
                total: 0,
                filterState: 'all'
            }
        },
        watch: {
            todoData: {
                deep: true,
                handler() {
                    this.total = this.todoData.filter(item => item.finishStatus == false).length
                }
            }
        },
        computed: {
            filterTodoData() {
                switch(this.filterState) {
                    case 'all':
                        return this.todoData
                        break
                    case 'active':
                        return this.todoData.filter(item => item.finishStatus == false)
                        break
                    case 'completed':
                        return this.todoData.filter(item => item.finishStatus == true)
                        break
                }
            }
        },
        methods: {
            addTodo() {
                if (this.content === '') return
                this.todoData.unshift(
                    {
                        id: id++,
                        content: this.content,
                        finishStatus: false
                    }
                )
                this.content = ''
            },
            handleDelItem(id) {
                this.todoData.splice(this.todoData.findIndex(item => item.id === id), 1)
            },
            handleToggleTab(tab) {
                this.filterState = tab
            },
            handleClearCompleted() {
                this.todoData = this.todoData.filter(item => item.finishStatus == false)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/theme.styl'

    .main-todo
        margin: 0 auto
        width: 600px
        background-color: $white
        box-shadow: 0 0 5px #666

        .add-todo
            padding: 16px 16px 16px 36px
            width: 100%
            font-size: 24px
            font-weight inherit
            font-family: inherit
            color: inherit
            border: none
            outline: none
            box-sizing: border-box
            background: $white
</style>