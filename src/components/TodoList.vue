<template>
    <div>
        <AddTodo @add_task="addTask"  />
        <ul v-if="data.length" class="todo-list">
            <TodoItem 
                @remove_task="removeTask" 
                v-for="todoitem of data" 
                v-bind:key="todoitem.id" 
                v-bind:todoitem="todoitem" />
        </ul>
        <p v-else
            class="no-tasks">
            No tasks!</p>
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'
import AddTodo from '@/components/AddTodo'

export default {
    data() {
        return {
            data: []
        }
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(json => this.data = json)
    },
    components: {
        TodoItem,
        AddTodo
    },
    methods: {
        addTask(title) {
            this.data.push({ id: this.data.length + 1, title: title, completed: false });
        },
        removeTask(id) {
            this.data = this.data.filter(item => item.id !== id)
        }
    }
}
</script>

<style>
.todo-list {
    width: 500px;
    margin: 2rem auto;
}
.no-tasks {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 3rem;
}
</style>