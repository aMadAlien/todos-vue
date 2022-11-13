<template>
    <ul class="todo-list">
        <TodoItem 
            @remove_task="removeTask" 
            v-for="todoitem of data" 
            v-bind:key="todoitem.id" 
            v-bind:todoitem="todoitem" />
    </ul>

</template>

<script>
import TodoItem from '@/components/TodoItem'

export default {
    props: ['data'],
    data() {
        return {
            todolist: this.data
        }
    },
    components: {
        TodoItem
    },
    methods: {
        removeTask(id) {
            this.$emit('remove_task', id)
        }
    }
}
</script>

<style>
.todo-list {
    width: 500px;
    margin: 0 auto;
}
</style>