<template>
    <form @submit.prevent="submitRegisterForm">
        <h1>Register you :</h1>
        <label for="username">Username</label>
        <br>
        <input type="text" name="username" placeholder="username" v-model="user.username" required>
        <br>
        <label for="email">Email</label>
        <br>
        <input type="text" name="email" placeholder="email" v-model="user.email" required>
        <br>
        <label for="password">Password</label>
        <br>
        <input type="text" name="password" placeholder="password" v-model="user.password" required>
        <br>
        <button class="submit-button" type="submit" :disabled="loading">Register</button>
    </form>
</template>

<script>
import RegistrationService from '../services/RegistrationService.js';

export default {
    name: 'RegistrationUser',
    data(){
        return {
            user:{
                username: '',
                email: '',
                password: '',
            }
        };
    },
    methods: {
        submitRegisterForm(){

            this.loading = true;
            RegistrationService.addRegistration(this.user).then(() => {
                this.user={
                    username: '',
                    email: '',
                    password: '',
                };
            }).catch(error => console.log(error)).finally(() => this.loading = false);
        },
    },
};
</script>
