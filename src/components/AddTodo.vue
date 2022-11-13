<template>
    <form @submit.prevent="onSubmit">
        <input v-model="title" type="text">
        <button type="submit">Add Todo</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            title: ''
        }
    },
    methods: {
        onSubmit() {
            if (this.title.trim()) {
                this.$emit('add_task', this.title);
                this.title = "";
            }
        }
    }
}
</script>