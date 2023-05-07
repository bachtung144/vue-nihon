<template>
  <div>
    <h2>{{title | upperCase}}</h2>
    <h2>{{subTitle | lowerCase | upperCase}}</h2>
    <p v-border:solid.round.shadow="{width: '5px', color: 'red'}">Home</p>
    <p>{{number}}</p>
    <button @click="number ++">+1</button>
  </div>
</template>

<script>
import {tokyoNumber} from "@/tokyoNumber";

export default {
  name: "CountNumber",
  mixins: [tokyoNumber]
}
</script>

<style scoped>

</style>