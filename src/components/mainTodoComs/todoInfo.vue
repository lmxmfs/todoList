<template>
    <div class="todo-info">
        <span class="item-total">{{this.unFinishTotal}} item left</span>
        <div class="item-tabs">
            <a
                :class="['item-btn', 'primary', 'border', tab == item ? 'actived' : '']"
                v-for="(item, index) of tabStates"
                :key="index"
                @click="toggleTab(item)"
            >
            {{item}}
            </a>
        </div>
        <button 
            class="item-btn info"
            @click="clearCompleted"
        >
            Clear Completed
        </button>
    </div>
</template>

<script>
    export default {
        name: 'todoInfo',
        props: {
            unFinishTotal: {
                type: Number
            }
        },
        data() {
            return {
                tabStates: ['all', 'active', 'completed'],
                tab: 'all'
            }
        },
        methods: {
            toggleTab(tab) {
                this.tab = tab
                this.$emit('toggleTab', tab)
            },
            clearCompleted() {
                this.$emit('clearCompleted')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/theme.styl'
    @import '~styles/mixins.styl'

    .todo-info
        background: $white
        display: flex
        justify-content: space-between
        font-weight: 400
        padding: 5px 15px
        line-height: 30px
        border-top 1px solid $black

        .item-total
            color: $red
        
        .item-tabs
            display: flex
            justify-content: space-between
            width: 200px

        .item-btn.primary.border
            primaryBorderBtn()
            &.actived
                primaryBtn()

        .item-btn.info
            infoBtn()

</style>