<template>
  <body>
 
  <div class="contain_01" >
<div class="jumbotron text-center">
      <div class="row justify-content-center align-items-center" style="height: calc(100vh - 166px)" >
          <div class="col-md-6 text-center text-md-start" style=" margin-top: 0%; margin-bottom: 0%; overflow:hidden;">
                  <div class="m-5 p-5"></div>
                      <h1>
                         <div class="wrapper">
                             <div class="static-txt display-2">Siyanda Ncamazana</div>
                             <br>
                              <ul class="dynamic-txts display-5 text-light">
                                <li><span>Designer</span></li>
                                <li><span>Developer</span></li>
                                <li><span>Freelancer</span></li>
                                <li><span>Administator</span></li>
                              </ul>
                            </div>
                      </h1>         
          </div>
        <div class= "col-md-5 text-center d-none d-md-block">
          <img class="img-fluit" alt="Vue logo" src="https://i.postimg.cc/nh2V8gjv/pikky.jpg" style="margin-top:130px; padding-top: 40px; margin-bottom:50px; height: 44rem" >
      </div>
     </div>
 </div>
</div>
   
  </body>
</template>


<style scoped>
body{
    background-color: linear-gradient(rgb(251, 92, 118),rgb(230, 15, 15));
  /* overflow: scroll; */
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

.wrapper .static-txt{
  color: cyan;
  font-size: 70px;
  font-weight: 800;
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
  font-weight: 400;
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
  line-height: 80px;
}
.dynamic-txts li span::after{
  content: "";
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
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
