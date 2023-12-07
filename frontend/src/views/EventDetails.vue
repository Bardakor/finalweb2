<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
        <p>{{ event.description }}</p>
        <div><router-link v-if="event" class="edit-button" :to="{name: 'EditEvent', params: {id: event.id}}">Edit Event</router-link></div>
    </div>
</template>

<script>
import EventService from '../services/EventService.js';

export default {
    data(){
        return{
            event: null,
        }
    },
    props: {
        id: String,
    },
    created(){
        EventService.getEvent(this.id).then(response => {   
            this.$store.commit('editEvent', response.data);
            this.event = this.$store.state.event;
        }).catch(error => {
            console.log(error);
        });
    },
};
</script>

<style scoped>

</style>
