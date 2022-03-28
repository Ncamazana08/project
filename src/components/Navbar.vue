<template>
<div id="nav">
<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Siyanda Ncamazana</a>
    <button class="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarRightAlignExample" aria-controls="navbarRightAlignExample" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" ></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarRightAlignExample">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
        </li>
        <li class="nav-item">
        <router-link to="/">Home</router-link> &nbsp;
        </li>
        <li class="nav-item">
        <router-link to="/about">About</router-link>  &nbsp;
        </li>
        <li class="nav-item">
        <router-link to="/Testimonial">Testimonials</router-link>  &nbsp;
        </li>
        <li class="nav-item">
        <router-link to="/Resume">Resume</router-link>  &nbsp;
        </li>
        <li class="nav-item">
        <router-link to="Projects">Projects</router-link>  &nbsp;
        </li>
        <li class="nav-item">
        <router-link to="/Contacts">Contacts</router-link>  &nbsp;
        </li>
      </ul>
    </div>
  </div>
  
</nav>
    </div>
</template>

<style >
#nav {
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
    /* background-color: linear-gradient(rgb(251, 92, 118),rgb(230, 15, 15)); */
  /* box-shadow: 8px 8px 15px white,; */
}
#nav-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #5dd9ff;
  padding: 10px;
  border-radius: 10%;
  outline: none;
  display: none;
}
#nav {
  margin-left: 0;
  margin-top: 4px;
  z-index: 674564563453;
  position: fixed;
  top:0;
  left: 0;
  width:100%;
  /* padding: 30px; */
  }
  nav a {
    font-weight: bold;
    color: blue;
    padding: 20px;
    text-decoration: none;}
    nav.router-link-exact-active:not(.logout) {
      color: lightblue;
    }
  
@media screen and (max-width: 500px) {
  #nav {
    height: 100%;
    left: -100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: left 0.1s linear;
  }
  #nav.active {
    left: 0;
  }
  #nav-btn {
    display: block;
  }
}
#nav a:hover {
  background-color: lightblue;
}
/* 
.active {
  background-color: #04AA6D;
} */
#nav a {
  padding: 12px;
  /* color: white; */
  text-decoration: none;
  font-size: 17px;
}
</style>