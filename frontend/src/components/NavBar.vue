<template>
    <nav>
        <router-link :to="{ name: 'EventList' }">Events</router-link> |
        <router-link :to="{ name: 'AddEvent' }">Create Event</router-link>
        <router-link v-if="!isAuth" :to="{ name: 'RegistrationUser' }">Register</router-link>
        <router-link v-if="!isAuth" :to="{ name: 'LoginUser' }">Login</router-link>
        <router-link  :to="{ name: 'AdminView' }">ADMIN</router-link>

        <button v-if="isAuth" @click="userLogOut">Log Out</button>

    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            isAuth: null,
            role: null,
        };
    },
    created() {
        this.isAuth = this.$store.state.isAuth;
        this.role = localStorage.getItem('role');
    },
    watch: {
        '$store.state.isAuth'(newIsAuth) {
            this.isAuth = newIsAuth;
        },
    },
    methods: {
        userLogOut() {
            localStorage.removeItem("user");
            this.$router.push({ name: "LoginUser" });
        }
    }

}
</script>

<style scoped>
nav {
    background: linear-gradient(to right, #003366, #0056b3);
    /* Gradient from navy to bright blue */
    padding: 15px 30px;
    display: flex;
    justify-content: center;
    /* Distribute space around links */
    border-bottom: 4px solid #007bff;
    /* Bright blue border for contrast */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    /* Subtle shadow for depth */
}

router-link {
    color: white;
    /* White text for the links */
    text-decoration: none;
    /* Remove underline */
    font-size: 18px;
    /* Increase font size for better readability */
    padding-bottom: 5px;
    /* Padding for the underline effect */
    transition: color 0.3s, border-bottom 0.3s, transform 0.3s;
    /* Smooth transitions for interactive effects */
}

router-link:hover {
    color: #00b7ff;
    /* Cyan for hover effect */
    border-bottom: 2px solid white;
    /* White underline effect on hover */
    transform: translateY(-3px);
    /* Slightly raise the link on hover */
}

router-link.router-link-exact-active {
    color: #00b7ff;
    /* Cyan for the active link */
    border-bottom: 3px solid white;
    /* Thicker white underline for the active link */
    transform: scale(1.05);
    /* Slightly enlarge the active link */
}
</style>




