<template>
    <router-link class="event-link" :to="{name: 'EventDetails', params: {id: event.id}}">
        <div class="event-card">
            <span>@{{ event.time }} on {{ event.date }}</span>
            <h4>{{ event.title }}</h4>
            <button @click.prevent="deleteCard">delete</button>
        </div>
    </router-link>
</template>

<script>
import EventService from '../services/EventService.js';

export default {    
    name: 'EventCard',
    props: {
        event: {
            type: Object,
            required: true,
        },
    },
    methods:{
        deleteCard(){
            EventService.deleteEvent(this.event.id).then().catch(error => console.log(error));
            this.$emit('deleteCardFromChild', this.event.id);
        },
    },
};
</script>


<style scoped>
.event-card{
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
}

.event-card:hover{
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.event-link{
    color: #2c3e50;
    text-decoration: none;
}

</style>
