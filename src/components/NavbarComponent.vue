<script setup>

</script>

<template>
    <div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul class="navbar-nav"> <!-- Use ml-auto class to pull right -->
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
            </li>
            
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" :to="{ name: 'Posts' }">Posts</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" :to="{name: 'Contact'}">Contact</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" :to="{name: 'Protected'}">Protected</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>


</style>