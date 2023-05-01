<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <h1 class="m-2">The GreatEastern Stackoverflow</h1>
  <div class="d-flex flex-column">
    <header class="d-flex justify-content-between">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <RouterLink class="nav-link active" to="/">All Questions</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/about">About</RouterLink>
        </li>
      </ul>
      <div class="mr-auto align">
        <RouterLink class="nav-link active" to="/ask">
          <button type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off">
            Ask Questions
          </button>
        </RouterLink>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
