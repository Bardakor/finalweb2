<template>
    <form @submit.prevent="submitLoginForm">
        <h1>Register you :</h1>
        <label for="username">Username</label>
        <br>
        <input type="text" name="username" placeholder="username" v-model="user.username" required>
        <br>
        <label for="password">Password</label>
        <br>
        <input type="text" name="password" placeholder="password" v-model="user.password" required>
        <br>
        <button class="submit-button" type="submit" :disabled="loading">Register</button>
    </form>
</template>

<script>
import LoginService from '../services/LoginService.js';
import jwt_decode from 'jwt-decode';

export default {
    name: 'LoginUser',
    data() {
        return {
            user: {
                username: '',
                password: '',
            }
        };
    },
    methods: {
        submitLoginForm() {
            this.loading = true;

            LoginService.addLogin(this.user)
                .then(response => {
                    let token = response.data.token;

                    let decodedToken = jwt_decode(token);

                    localStorage.setItem("user", JSON.stringify(decodedToken));
                })
                .catch(error => {
                    console.error('Erreur lors de l\'inscription :', error);
                })
                .finally(() => this.loading = false);
        },
    },
};
</script>
