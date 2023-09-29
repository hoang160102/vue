const app = Vue.createApp({
    data() {
        return {
            name: 'Hoang',
            age: 21,
            img: 'https://cdn4.buysellads.net/uu/1/23814/1542656909-explore-themes-2.jpg'
        }
    },
    methods: {
        ageInFiveYears() {
            return this.age + 5
        },
        getNumber() {
            return Math.random()
        }
    }
})
app.mount('#assignment')