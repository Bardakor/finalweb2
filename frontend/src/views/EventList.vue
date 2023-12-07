<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" v-on="{deleteCardFromChild: deleteEventInList}"/>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventService from '../services/EventService.js'

export default {
  name: 'EventList',
  components: {
    EventCard
  },
  data() {
    return {
      events: [],
    };
  },
  created(){
    EventService.getEvents()
      .then(response =>{
        this.events = response.data;
      }).catch(error => {
        console.log(error);
      });
  },
  methods:{
    deleteEventInList(id){
      this.events = this.events.filter(event => event.id !== id);
    },
  },
};
</script>

<style scoped>
.events{
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
