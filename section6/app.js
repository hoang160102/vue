const app = Vue.createApp({
    data() {
        return {
            friends: [
                {   
                    id: 1,
                    name: 'Manuel Lorenx',
                    phone: '0123456789',
                    email: 'manuel@localhost.com'
                },
                {   
                    id: 2,
                    name: 'Julie Jones',
                    phone: '0987654321',
                    email: 'julie@localhost.com'
                }
            ]
        }
    },
})

app.component('friend-contact', {
    template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{ visibleDetails ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="visibleDetails">
            <li><strong>Phone:</strong>{{ friend.phone }}</li>
            <li><strong>Email:</strong>{{ friend.email }}</li>
        </ul>
    </li>
    `,
    data() {
        return {
            visibleDetails: false,
            friend: {   
                id: 1,
                name: 'Manuel Lorenx',
                phone: '0123456789',
                email: 'manuel@localhost.com'
            }
        }
    },
    methods: {
        toggleDetails() {
            this.visibleDetails = !this.visibleDetails
        }
    }
})

app.mount('#app')