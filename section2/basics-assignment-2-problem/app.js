const app = Vue.createApp({
    data() {
        return {
            alertText: 'Show event',
            para1: '',
            para2: ''
        }
    },
    methods: {
        fillInput() {
            alert(this.alertText)
        },
        firstOutput(event) {
            this.para1 = event.target.value
            return this.para1
        },
        secondOutput() {
            this.para2 = this.para1
        }
    }
})
app.mount('#assignment')