<template>
    <form @submit.prevent="submitEventForm">
        <h1>Create an Event</h1>
        <label for="category">Select a category: </label>
        <select name="category" v-model="newEvent.category" required>
            <option value="">--Chose a category--</option>
            <option v-for="(cat, index) in category" :key="index">{{ cat }}</option>
        </select>
        <h4>Name & Describe your event</h4>
        <label for="title">Title</label>
        <br>
        <input type="text" name="title" placeholder="Title" v-model="newEvent.title" required>
        <br>
        <label for="description">Description</label>
        <br>
        <input type="text" name="description" placeholder="Description" v-model="newEvent.description" required>
        <h4>Where is your event ?</h4>
        <label for="location">Location</label>
        <br>
        <input type="text" name="location" placeholder="Location" v-model="newEvent.location" required>
        <h4>When is your event ?</h4>
        <label for="date">Date</label>
        <br>
        <input type="date" name="date" v-model="newEvent.date" required>
        <br>
        <label for="time">Time</label>
        <br>
        <input type="time" name="time" v-model="newEvent.time" required>
        <br>
        <button class="submit-button" type="submit" :disabled="loading">Create</button>
    </form>
</template>

<script>
import EventService from '../services/EventService.js';

export default {
    name: 'AddEvent',
    data(){
        return {
            category: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community'],
            newEvent: {
                id: 0,
                category: '',
                title: '',
                description: '',
                location: '',
                date: '',
                time: '',
                petsAllowed: true,
                organizer: 'Camille Bordes'
            },
            loading: false,
        };
    },
    methods: {
        submitEventForm(){
            //EventService.getEvents().then(response =>this.eventListTemp = response.data).catch(error => console.log(error));
            // while(this.eventListTemp.some(event => event.id === this.newEvent.id)){
            //     this.newEvent.id++;
            // } msk ca sert à rien enft
            this.loading = true;
            EventService.addEvent(this.newEvent).then(() => {
                this.$router.push({name: 'EventList'});
                this.newEvent = {
                        id: 0,
                        category: '',
                        title: '',
                        description: '',
                        location: '',
                        date: '',
                        time: '',
                        petsAllowed: true,
                        organizer: 'Camille Bordes'
                    };
            }).catch(error => console.log(error)).finally(() => this.loading = false);
        },
    },
};
</script>
