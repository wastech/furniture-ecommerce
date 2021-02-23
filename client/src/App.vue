<template>
  <div id="nav" class="container">
    <appNavbar />
    <router-view :key="$route.path" />
  </div>
</template>
<script>
import appNavbar from "@/components/appNavbar";
export default {
  components: {
    appNavbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: white;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
