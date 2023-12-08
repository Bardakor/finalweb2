<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" v-on="{ deleteCardFromChild: deleteEventInList }" />
  </div>
  <button @click="getUserDetails">Get User Details</button>
  <button @click="userLogOut">Get User Details</button>

</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventService from '../services/EventService.js'
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: 'EventList',
  components: {
    EventCard
  },
  data() {
    return {
      events: [],
      user: null,
    };
  },
  created() {
    EventService.getEvents()
      .then(response => {
        this.events = response.data;
      }).catch(error => {
        console.log(error);
      });
  },
  methods: {
    deleteEventInList(id) {
      this.events = this.events.filter(event => event.id !== id);
    },
    getUserDetails() {
      let token = localStorage.getItem("user");
      try {
        let decoded = VueJwtDecode.decode(token);
        this.user = decoded;
        console.log(decoded);
      } catch (error) {
        console.log(error, "error from decoding token");
      }
    },
    userLogOut(){
      localStorage.removeItem("user");
      this.$router.push("/login");
    }
  },
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

