<template>
<div id="app">
    <h1>{{ msg }}</h1>
    <el-button @click.native="visible = true">按钮</el-button>
    <el-dialog v-model="visible" title="Hello world">
        <p>欢迎使用 Element</p>
    </el-dialog>
    <bookshelf></bookshelf>
</div>
</template>

<script>
import bookshelf from './components/bookshelf.vue'
export default {
    name: 'app',
    data() {
        return {
            msg: '兑吧图书借阅系统',
            visible: false
        }
    },
    components: {bookshelf}
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
