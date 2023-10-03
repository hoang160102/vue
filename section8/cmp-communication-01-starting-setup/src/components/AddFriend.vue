<template>
    <form v-on:submit.prevent>
        <div>
            <label>Name</label>
            <input type="text" v-model="enterName">
        </div>
        <div>
            <label>Phone</label>
            <input type="text" v-model="enterPhone">
        </div>
        <div>
            <label>Email</label>
            <input type="text" v-model="enterEmail">
        </div>
        <button @click="submitData">Add Contact</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                enterName: '',
                enterPhone: '',
                enterEmail: ''
            }
        },
        methods: { 
            submitData() {
                this.$emit('new-contact', this.enterName, this.enterPhone, this.enterEmail)
            }
        }
    }
</script>