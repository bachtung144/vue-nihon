<template>
  <div id="app">
    <div>
      <Home/>
      <h2>Event Form</h2>
<!--      <EventTitle-->
<!--          :value="eventData.title"-->
<!--          @input="eventData.title = $event"-->
<!--      />-->
      <EventTitle v-model="eventData.title"/>
    </div>

    <div>
      <h2>Event Form</h2>
      <label for="title">People</label>
      <input id="title" type="number" v-model.number="eventData.maxNumber">
      <p>{{eventData.maxNumber}}</p>
    </div>

    <div>
      <h2>Event Form Text</h2>
      <label for="title">People</label>
      <input id="title" type="text" v-model.trim="eventData.detail">

      <br>

      <textarea id="detail" v-model="eventData.detail"></textarea>
      <pre>{{eventData.detail}}</pre>

      <br>

      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
      <label for="isPrivate"> private </label>
      <p>{{eventData.isPrivate}}</p>

      <br>

      <p>many checkbox</p>
      <input type="checkbox" id="10" value="10s" v-model="eventData.target">
      <label for="10">10s</label>
      <input type="checkbox" id="20" value="20s" v-model="eventData.target">
      <label for="20">20s</label>
      <input type="checkbox" id="30" value="30s" v-model="eventData.target">
      <label for="30">30s</label>
      <p>{{eventData.target}}</p>

      <br>
      <p>Radio checkbox</p>
      <input type="radio" id="free" value="free" v-model="eventData.price">
      <label for="free">free</label>
      <input type="radio" id="paid" value="paid" v-model="eventData.price">
      <label for="paid">paid</label>

      <select v-model="eventData.location" multiple>
        <option v-for="location in locations" :key="location">{{location}}</option>
      </select>
      <p>{{eventData.location}}</p>

    </div>

  </div>
</template>

<script>

import EventTitle from "@/components/EventTitle.vue";
import Home from "@/components/Home.vue";

export default {
  name: 'App',
  data() {
    return {
      eventData: {
        title: "title",
        maxNumber: 20,
        detail: "",
        isPrivate: false,
        target: [],
        price: "free",
        location: []
      },
      locations: ['tokyo', 'nagoya', 'osaka']
    }
  },
  components: {
    EventTitle,
    Home
  }
}
</script>
