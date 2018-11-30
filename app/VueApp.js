import Vue from 'vue';
import VueApp from './App.vue';

export function renderVueApp(container) {
    new Vue({
        el: container,
        render: h => h(VueApp)
    });
}
