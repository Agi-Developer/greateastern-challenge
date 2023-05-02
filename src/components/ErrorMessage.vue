<template>
  <div class="alert alert-danger m-4" role="alert">
    <h4 class="alert-heading">Error!</h4>
    <p>
      {{ error }}
    </p>
  </div>
</template>
<script setup>
defineProps(['error'])
</script>
