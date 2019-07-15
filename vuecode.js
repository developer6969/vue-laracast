Vue.component('tabs', {
    template: `<div>
                    <div class="tabs">
                        <ul>
                            <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }" >
                                <a :href="tab.href" @click="selectTab(tab)" v-text="tab.name"></a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <slot></slot>
                    </div>
                </div>    
            `,
    data() {
        return {
            tabs: [],
        };
    },
    created() {
        this.tabs = this.$children;
    },
    mounted() {
        console.log(this.$children);
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            })
        }
    },
});

Vue.component('tab', {
    props: {
        name: { required: true },
        selected: { default: false },
    },
    template: `<div v-show="isActive"><slot></slot></div>`,
    data() {
        return {
            isActive: false,
        }
    },
    mounted() {
        this.isActive = this.selected;
    },
    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },
});

Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: `
    <button v-on:click="count++">
      You clicked me {{ count }} times.
    </button>
  `,
});

Vue.component('modal', {
    props: ['modal_title', 'modal_body'],
    template: `
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
              <div class="box">
                <h1 class="heading">{{ modal_title }}</h1>
                <p> 
                  {{ modal_body }} 
                </p>
                <h6><slot></slot></h6>
              </div>
            </div>
            <button class ="modal-close is-large" aria-label="close" @click="$emit('close')"></button> 
        </div>
    `,
});

Vue.component('message', {
    props: ['title', 'body'],
    data() {
        return {
            modalState: true,
        }
    },
    template: `
        <article class="message" v-show="modalState">
            <div class="message-header">
                {{ title }}
                <button class="delete" @click="modalState = false" aria-label="delete"></button>
            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>
    `,
    methods: {
        closeModal() {
            this.modalState = false;
        }
    },
});

Vue.component('joblist', {

    template: `
        <ul>
            <job v-for="item in items" :key="item.id">
                {{ item.name }}
            </job>
        </ul>
    `,

    data() {
        return {
            items: [{
                id: 1,
                name: 'Go home',
                complete: true
            },
            {
                id: 2,
                name: 'Go school',
                complete: false
            },
            {
                id: 3,
                name: 'Go to work',
                complete: false
            },
            {
                id: 4,
                name: 'Go India',
                complete: true
            },
            ]
        };
    }
});

Vue.component('job', {
    template: '<li><slot></slot></li>',
});

var app = new Vue({
    el: "#root",
    data: {
        showModal: false,
        modalState: false,
        message: "Hello World",
        names: ["John", "Gary", "Martin"],
        country: "",
        countries: ["India", "China", "Australia"],
        title: "I have been hovered",
        className: "color-red",
        isLoading: false,
        btnState: false,
        tasks: [{
            description: "Go home",
            completed: true
        },
        {
            description: "Finish ScreenCast",
            completed: false
        },
        {
            description: "Make Donation",
            completed: false
        },
        {
            description: "Clean Home",
            completed: false
        },
        {
            description: "Play eith Adi",
            completed: false
        },
        {
            description: "Go to park",
            completed: true
        }
        ]
    },

    // VUE.JS
    methods: {
        addValue() {
            this.countries.push(this.country);
            this.country = "";
        },

        toggleClass() {
            if (this.isLoading) {
                this.isLoading = false;
            } else {
                this.isLoading = true;
            }
        },

        disable() {
            if (this.btnState) {
                this.btnState = false;
            } else {
                this.btnState = true;
            }
        },

        incrementCount() {
            count = count + 1;
        }
    },

    computed: {
        reversedMessage() {
            return this.message
                .split("")
                .reverse()
                .join("");
        },

        incompleteTasks() {
            return this.tasks.filter(task => !task.completed);
        }
    },

    // JQUERY
    mounted() {
        document.querySelector("#button").addEventListener("click", () => {
            let name = document.querySelector("#input");
            app.names.push(name.value);
            name.value = "";
        });
    }
});