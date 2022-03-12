<script setup>
    import HelloWorld from './components/HelloWorld/index.vue'
    let message = "Bonjour";
</script>

<template>
  <HelloWorld :message="message" />
</template>
