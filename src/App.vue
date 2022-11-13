<template>
  <div>
    <h1>Todo List</h1>
    <hr/>
    <AddTodo @add_task="addTask"  />
    <TodoList @remove_task="removeTask" v-bind:data="data"/>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'

export default {
  name: 'App',
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
    TodoList,
    AddTodo
  },
  methods: {
    addTask(title) {
      this.data.push({id: this.data.length+1, title: title, completed: false});
    },
    removeTask(id) {
      this.data = this.data.filter(item => item.id !== id)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
