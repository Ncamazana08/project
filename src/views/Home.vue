<template>
  
  <div class="contain_01" >
<div class="jumbotron text-center">
      <div class="row justify-content-center align-items-center" >
          <div class="col-md-6 text-center text-md-start" style=" margin-top: 0%; margin-bottom: 10%;">
                  <div class="m-5 p-5"></div>
                      <h1>
                         <div class="wrapper">
                             <div class="static-txt display-2">Siyanda Ncamazana</div>
                             <br>
                              <ul class="dynamic-txts display-5 text-light">
                                <li><span>Administator</span></li>
                                <li><span>Designer</span></li>
                                <li><span>Developer</span></li>
                                <li><span>Freelancer</span></li>
                              </ul>
                            </div>
                       <!-- <div class="display-5 text-light">I am a passionate Front-End Web Developer from Cape Town.</div> -->
                      </h1>         
          </div>
        <div class= "col-md-5 text-center d-none d-md-block">
          <img class="img-fluit" alt="Vue logo" src="https://i.postimg.cc/nh2V8gjv/pikky.jpg" style="margin-top:20px; padding-top: 60px; margin-bottom:50px" >
      </div>
     </div>
 </div>
</div>

</template>


<style scoped>
*{

  overflow: hidden;
}
 /* #zonein {
   width: 100px;
   height: 50px;
   font-weight: bold;
   position: relative;
   animation: mymove 5s;
 } */
 /* @keyframes mymove {
  from {left: 0px;}
  to {left: 300px;}
} */
 /* .position {
 
  display: inline-flex;
  vertical-align: left;
}  */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
/* *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
} */
/* body{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #343F4F;
} */
/* .wrapper{
  display: flex;
} */
.wrapper .static-txt{
  color: #fff;
  font-size: 70px;
  font-weight: 500;
}
.wrapper .dynamic-txts{
  margin-left: 0;
  height: 90px;
  line-height: 90px;
  overflow: hidden;
}
.dynamic-txts li{
  list-style: none;
  color: rgb(17, 7, 153);
  font-size: 60px;
  font-weight: 300;
  position: relative; 
  top: 0;
  animation: slide 12s steps(4) infinite;
}
@keyframes slide {
  100%{
    top: -360px;
  }
}
.dynamic-txts li span{
  position: relative;
  margin: 5px 0;
  line-height: 90px;
}
.dynamic-txts li span::after{
  content: "";
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
  /* background:rgb(81, 69, 255); */
  border-left: 5px solid cyan;
  animation: typing 3s steps(10) infinite;
}
@keyframes typing {
  40%, 60%{
    left: calc(100% + 30px);
  }
  100%{
    left: 0;
  }
}
</style>
