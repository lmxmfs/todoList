<template>
    <div :class="['todo-item', todoItem.finishStatus ? 'completed' : '']">
        <input 
            type="checkbox"
            v-model="todoItem.finishStatus"
        />
        <label for="">{{ todoItem.content }}</label>
        <button
            @click="delItem"
        ></button>
    </div>
</template>

<script>
    export default {
        name: 'todoItem',
        props: {
            todoItem: {
                type: Object,
                default: () => {}
            }
        },
        methods: {
            delItem() {
                this.$emit('delItem', this.todoItem.id)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/theme.styl'
    @import '~styles/mixins.styl'

    .todo-item
        background: $white
        display: flex
        justify-content: space-between
        align-items: center
        padding: 10px
        font-size: 24px
        border-top: 1px solid $black
        &:hover
            button:after
                content: 'x'
                font-size: 24px
                color: $lightred
        &.completed
            label
                color: $grey
                text-decoration: line-through

        input
            width: 50px
            height: 30px
            padding-top: 3px
            text-align: center
            cleanDefaultStyle()
            &:after
                content: url('~svg/unchecked.svg')
            &:checked:after
                content: url('~svg/checked.svg')

        label
            flex: 1
            transition: color 0.2s

        button
            width: 40px
            background-color: transparent
            cleanDefaultStyle()
            cursor: pointer
</style>