<template>
    <nav>
        <router-link :to="{ name: 'EventList' }">Events</router-link> |
        <router-link :to="{ name: 'AddEvent' }">Create Event</router-link>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    components: {

    },
    data() {
        return {

        };
    },

}
</script>

<style scoped></style>
