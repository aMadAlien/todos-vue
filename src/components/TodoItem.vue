<template>
    <li>
        <input class="checkbox" type="checkbox" @change="todo.completed = !todo.completed" />
        <span class="task" :class="{completed: todo.completed}">{{todoitem.title}}</span>
        <button @click="$emit('remove_task', todo.id)" class="remove">x</button>
    </li>
</template>

<script>

export default {
    props: ['todoitem'],
    data() {
        return {
            todo: this.todoitem
        }
    }
}
</script>

<style scoped>
li {
    display: flex;
    align-items: center;
    list-style: none;
    margin-bottom: 20px;
}

.checkbox {
    margin-right: 20px;
}

.task {
    width: 350px;
    text-align: left;
    word-wrap: break-word;
}
.completed{
    text-decoration: line-through;
}

.remove {
    font-size: 18px;
    width: 30px;
    height: 30px;
    margin-left: auto;
    border: none;
    border-radius: 5px;
}
</style>