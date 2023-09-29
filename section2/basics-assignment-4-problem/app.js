const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            paragraph: true,
            color: ''
        }
    },
    computed: {
        paraClasses() {
            return {
                visible: this.paragraph,
                hidden: !this.paragraph
            }
        }
    },
    methods: {
        fetchUser() {
            this.userInput = event.target.value
        },
        toggleShowHide() {
            this.paragraph = !this.paragraph
        },
        // seeParagraph() {
        //     return this.paragraph ? 'visible' : 'hidden'
        // },
        getColor() {
            this.color = event.target.value
        }
    }
})
app.mount('#assignment')