<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>
export default {
    name: "App",
};
</script>
<style>
html {
    font-size: 10px;
}
body {
    font-size: 1.6rem;
}
#app {
    font-family: '微软雅黑',Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
/* a.router-link-exact-active {
    color: #42b983;
}  */
</style>
