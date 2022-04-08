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
  /* position: fixed; */
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;

    /* background-color: linear-gradient(rgb(251, 92, 118),rgb(230, 15, 15)); */
  /* box-shadow: 8px 8px 15px white,; */
}
#nav-btn {
  position: fixed;
  background: #5dd9ff;
  padding: 10px;
  /* border-radius: 10%; */
  outline: none;
  display: none;
}
.container-fluid{
  margin-bottom: 0%;
  padding: 0px;
  background-color: #e9e8e6;
}
/* #nav {
  margin-left: 0;
  margin-top: 4px;
  z-index: 674564563453;
  position: fixed;
  top:0;
  left: 0;
  width:100%;
  /* padding: 30px; */
  
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
  /* border-bottom: #5dd9ff; */
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
.navbar {
  padding: 0;
}
.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}
.navbar li {
  position: relative;
  padding: 20px 0px 0px 18px;
}
.navbar a, .navbar a:focus {

  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Raleway", sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: blue;
  white-space: nowrap;
  transition: 0.3s;
  position: relative;
}
.navbar a i, .navbar a:focus i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
}
.navbar > ul > li > a:before {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 0;
  background-color: #34b7a7;
  visibility: hidden;
  width: 0px;
  transition: all 0.3s ease-in-out 0s;
}
.navbar a:hover:before, .navbar li:hover > a:before, .navbar .active:before {
  visibility: visible;
  width: 25px;
}
.navbar a:hover, .navbar .active, .navbar .active:focus, .navbar li:hover > a {
  color: #222222;
}
.navbar .dropdown ul {
  display: block;
  position: absolute;
  left: 14px;
  top: calc(100% + 30px);
  margin: 0;
  padding: 10px 0;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  background: yellow;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  transition: 0.3s;
  border-radius: 4px;
}
.navbar .dropdown ul li {
  min-width: 200px;
  padding: 0;
}
.navbar .dropdown ul a {
  padding: 10px 20px;
  font-size: 15px;
  text-transform: none;
  font-weight: 600;
}
.navbar .dropdown ul a i {
  font-size: 12px;
}
.navbar .dropdown ul a:hover, .navbar .dropdown ul .active:hover, .navbar .dropdown ul li:hover > a {
  color: #34b7a7;
}
.navbar .dropdown:hover > ul {
  opacity: 1;
  top: 100%;
  visibility: visible;
}
.navbar .dropdown .dropdown ul {
  top: 0;
  left: calc(100% - 30px);
  visibility: hidden;
}
.navbar .dropdown .dropdown:hover > ul {
  opacity: 1;
  top: 0;
  left: 100%;
  visibility: visible;
}
@media (max-width: 1366px) {
  .navbar .dropdown .dropdown ul {
    left: -90%;
  }
  .navbar .dropdown .dropdown:hover > ul {
    left: -100%;
  }
}
/* .mobile-nav-toggle {
  color: #222222;
  font-size: 28px;
  cursor: pointer;
  display: none;
  line-height: 0;
  transition: 0.5s;
}
.mobile-nav-toggle.bi-x {
  color: #e9e8e6;
}

@media (max-width: 991px) {
  .mobile-nav-toggle {
    display: block;
  }

  .navbar ul {
    display: none;
  }
} */
.navbar-mobile {
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(9, 9, 9, 0.9);
  transition: 0.3s;
  z-index: 999;
}
.navbar-mobile .mobile-nav-toggle {
  position: absolute;
  top: 15px;
  right: 15px;
}
.navbar-mobile ul {
  display: block;
  position: absolute;
  top: 55px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  padding: 10px 0;
  border-radius: 10px;
  background-color: #e9e8e6;
  overflow-y: auto;
  transition: 0.3s;
}
.navbar-mobile a, .navbar-mobile a:focus {
  font-size: 15px;
  padding-right: 15px;
  color: #222222;
}
.navbar-mobile a:hover, .navbar-mobile .active, .navbar-mobile li:hover > a {
  color: #34b7a7;
}
.navbar-mobile .getstarted, .navbar-mobile .getstarted:focus {
  margin: 15px;
}
.navbar-mobile .dropdown ul {
  position: static;
  display: none;
  margin: 10px 20px;
  padding: 10px 0;
  z-index: 99;
  opacity: 1;
  visibility: visible;
  background: #e9e8e6;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
}
.navbar-mobile .dropdown ul li {
  min-width: 200px;
}
.navbar-mobile .dropdown ul a {
  padding: 10px 20px;
}
.navbar-mobile .dropdown ul a i {
  font-size: 12px;
}
.navbar-mobile .dropdown ul a:hover, .navbar-mobile .dropdown ul .active:hover, .navbar-mobile .dropdown ul li:hover > a {
  color: #34b7a7;
}
.navbar-mobile .dropdown > .dropdown-active {
  display: block;
}

</style>