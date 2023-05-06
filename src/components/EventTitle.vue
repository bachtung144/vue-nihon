<template>
  <div>
    <label for="title">title</label>
    <input id="title"
           type="text"
           :value="value"
           @input="$emit('input', $event.target.value)"
    >
    <p>{{value}}</p>
  </div>
</template>

<script>
export default {
  name: "EventTitle",
  props: ['value']
}
</script>
