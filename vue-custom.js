Vue.component('task', {
    template: `<li>
                <span>{{action}}</span>
                <slot></slot>
               </li>`,
    data() {
        return {
            action: 'Go to'
        }
    }
});

new Vue({
    el: '#root'
});