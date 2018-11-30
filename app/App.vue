<template>
    <div id="app">
        <h2 class="title">{{ welcome }}</h2>
        <button>click me!</button>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                welcome: 'Hello from vue',
            }
        }
    }
</script>

<style>
    .title {
        color: #42b983;
    }
</style>
