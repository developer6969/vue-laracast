Vue.component('task-list', {
    template: `<div>
                <task-item v-for="(task, id) in tasks" :key="id">
                    {{ task.name }}
                </task-item>
               </div>`,
    data() {
        return {
            tasks: [{
                id: 1,
                name: 'work',
                complete: true
            },
            {
                id: 2,
                name: 'school',
                complete: false
            },
            {
                id: 3,
                name: 'park',
                complete: false
            },
            {
                id: 4,
                name: 'India',
                complete: true
            }
            ]
        }
    }
});

Vue.component('task-item', {
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