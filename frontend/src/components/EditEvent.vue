<template>
    <form @submit.prevent="submitUpdatedEvent">
        <h1>Edit Event</h1>
        <label for="category">Select a category: </label>
        <br>
        <select name="category" v-model="event.category" >
            <option v-for="(cat, index) in category" :key="index">{{ cat }}</option>
        </select>
        <br>
        <label for="title">Title</label>
        <br>
        <input type="text" name="title" v-model="event.title" >
        <br>
        <label for="description">Description</label>
        <br>
        <input type="text" name="description" v-model="event.description" >
        <br>
        <label for="location">Location</label>
        <br>
        <input type="text" name="location" v-model="event.location" >
        <br>
        <label for="date">Date</label>
        <br>
        <input type="date" name="date" v-model="event.date" >
        <br>
        <label for="time">Time</label>
        <br>
        <input type="time" name="time" v-model="event.time" >
        <br>
        <br>    
        <button class="submit-button" type="submit" :disabled="loading">edit</button>
    </form>
</template>

<script>
import EventService from '../services/EventService.js';

export default {
    name: 'EditEvent',
    data(){
        return{
            event: null,
            category: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community'],
            loading: false,
        };
    },
    created(){
        this.event = this.$store.state.event;
    },
    methods: {  
        submitUpdatedEvent(){
          this.loading = true;  
          EventService.editEvent(this.event).then(() => {
                this.$router.push({name: 'EventDetails', path: `/event/${this.event.id}`});
          }).catch(error => console.log(error)).finally(() => this.loading = false);
        },
    },
}

</script>

