<template>
  <div>
    <p v-border:solid.round.shadow="{width: '5px', color: 'red'}">Home</p>
    <CountNumber/>
  </div>
</template>

<script>
import CountNumber from "@/components/CountNumber.vue";

export default {
  name: "Home",
  components: {CountNumber},
  directives: {
    border(el, binding) {
      //ko dung dk this
      el.style.border = "solid black 2px";
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color
      el.style.borderStyle = binding.arg
      if (binding.modifiers.round){
        el.style.borderRadius = "10px"
      }
      if (binding.modifiers.shadow){
        el.style.boxShadow = "0 2px 5px rgba(0, 0 , 0, 0.26)"
      }
    }
  }
}
</script>
