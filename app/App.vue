<template>
    <div>
        <h2 class="title">{{ welcome }}</h2>
        <div id="angular-root"></div>
    </div>
</template>

<script>
    import 'core-js/es7/reflect';
    import 'zone.js';
    import {initAngular} from "./angularApp";

    export default {
        name: 'app',
        data() {
            return {
                welcome: 'Hello from vue',
            }
        },
        mounted: function () {
            this.$nextTick(initAngular)
        }
    }
</script>

<style>
    .title {
        color: #42b983;
    }
</style>
