const app = Vue.createApp({
    data() {
        return {
            inputTask: '',
            tasks: [],
            toggle: true
        }
    },
    computed: {
        list() {
            if (this.toggle) {
                return 'Hide'
            }
            return 'Show'
        }
    },
    methods: {
        addTask() {
            if (this.inputTask.length > 0) {
                this.tasks.push(this.inputTask)
            }
        },
        toggleList() {
            this.toggle = !this.toggle
        }
    }
})
app.mount('#assignment')