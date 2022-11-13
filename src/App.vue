<template>
  <div>
    <h1>Todo List</h1>
    <hr/>
    <aside>
      <router-link class="link" to='/'>Home Page</router-link>
      <router-link class="link" to='/main'>Main Tasks</router-link>
      <router-link class="link" to='/others'>Others</router-link>
    </aside>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
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
aside {
  width: 20%;
  padding: 1rem .5rem;
  margin-right: .5rem;
  float: left;
  box-shadow: inset -10px 0 5px -5px #29627e;
}

.link {
  display: block;
  margin-bottom: 1rem;
  color: #2c3e50;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
}
</style>
