<template>
  <a href @click.prevent>
    <div class="tag-card d-flex flex-row px-2 align-items-center mr-2 mb-3">
      <i class="fas fa-tag mr-2"></i>
      <span class="name mr-2">{{ tag }}</span>
    </div>
  </a>
</template>

<script>
export default {
  props: ['tag']
}
</script>

<style scoped>
a {
  text-decoration: none !important;
}

.tag-card {
  background-color: rgb(216, 216, 216);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.486);
  padding-top: 3px;
  padding-bottom: 3px;
  margin: 0 0.2rem;
}

.name {
  font-family: 'Times New Roman', Times, serif;
  font-size: 12px;
  color: black!important;
}

i {
  font-size: 10px;
}
</style>
