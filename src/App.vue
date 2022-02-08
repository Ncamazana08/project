<template>
  <Navbar />
  
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/Testimonial">Testimonial</router-link> |
    <router-link to="/Portfolio">Portfolio</router-link> |
    <router-link to="/Contacts">Contacts</router-link>
   -->
  <router-view/>
  <Footer />
</template>
<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default ({
  data() {
    
  },
  components: {
    Navbar,
    Footer,
  }
})
</script>


<style>
#app {
  background-image: url("https://i.postimg.cc/8P9JS7WL/Violet-Geometric-Cool-Desktop-Wallpaper-2.png");
  background-size: cover;
  background-position: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

.navbar a.router-link-exact-active {
   background-color: rgba(252, 253, 253, 0.274);
 color:cyan;
}

.navbar-light .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
}

  .navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: left;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(252, 253, 253, 0.274);
}

.navbar-light .navbar-nav .nav-link{
    font-size: 25px;
    color:blue;
    padding: 20px;
}
.nav-link:hover{
    margin-top: 1px;
    border-bottom: 4px solid black;
    padding: 1px;
}
.container{
    margin:180px;
    padding-top: 30px;
}

.fw-bolder{
    color: white;
    padding-left: 50px;
}
.buttoncontainer{
    color: white;
    padding-left: 50px;
    font-size: 30px;
    padding-top: 0;
    position: absolute;
    float: left;
}
</style>
