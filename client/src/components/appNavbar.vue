<template>
<div class="hello">
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <a class="navbar-brand">
      <router-link to="/">Our Products</router-link>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav   mr-auto ">
        <li class="nav-item">
          <a class="nav-link">
            <router-link to="/">Chairs</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link to="/">Sofas</router-link>
          </a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link to="/">Beds</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link to="/">Tables</router-link>
          </a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="enter you email...." aria-label="Search">
        <button class="btn btn-primary my-2 my-sm-0 " type="submit">search</button>
      </form>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: 'appnavbar',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
ul {
  margin: 0 auto;
  color: black;
  font-weight: bolder;
  padding: 2rem;
}
button {
  border-radius: 0.7rem;
}
input {
  border: 0.2rem solid #ccc;
  border-radius: 0.7rem;
}
#nav a.router-link-exact-active {
    color: black;
    font-size: 1.5em;
}
</style>