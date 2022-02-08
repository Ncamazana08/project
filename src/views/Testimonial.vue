<template>
    
      <div class="container3">
        <div class="row justify-content-center align-items-center" >
          <div class="col-md-5 ">
      <h3 class="text-uppercase" style="margin-top: 50px; font-size: 50px; text-align: center; padding-bottom: 10px;"><strong>Testimonials</strong></h3><br>
      <p><em>Please place mouse icon on the card for the Testimonial at the back.</em></p>

    </div>
      <div class="flip-container">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="https://i.postimg.cc/jj4wsftB/Chad2.jpg" alt="Chad" style="width:300px;height:400px;">
            </div>
            <div class="flip-card-back">
              <h1>Chad Hendricks</h1> 
              <p class="fst-italic">Class-mate</p> 
              <p style="text-align:justify; padding-left: 5px; padding-right: 6px;" >"I only have good things to say about Siyanda. Since we started working together, she has shown that she is a committed, hardworking and a talented developer. Always striving for excellence, never giving less than 110 percent. She definitely has a bright future in this industry!" </p>
            </div>
          </div>
        </div>
        
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="https://i.postimg.cc/5NWVmRwq/Reese2.jpg" alt="Reese" style="width:300px;height:400px;">
            </div>
            <div class="flip-card-back">
              <h1>Reese Adrahams</h1> 
              <p class="fst-italic">Class-mate</p> 
              <p style="text-align:justify; padding-left: 5px; padding-right: 6px;">"Siyanda is an extremely hard-worker and is open minded. She is not afraid of challenges and is willing to go the extra mile. i believe she will be a great asset in the industry." </p>
            </div>
          </div>
        </div>
      


 <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="https://i.postimg.cc/wBg5cgv8/nande.jpg" alt="Nande" style="width:300px;height:400px;">
    </div>
    <div class="flip-card-back">
      <h1>Nande Bija</h1> 
      <p class="fst-italic">Class-mate</p> 
      <p style="text-align:justify; padding-left: 5px; padding-right: 6px;">"Siyanda comes across as a very strong and brilliant person with a positive personality. I am glad i got to meet her when i did, I am looking forward to more years of friendship."</p>
    </div>
  </div>
</div>

        <div class="flip-card">
         <div class="flip-card-inner">
            <div class="flip-card-front">
            <img src="https://i.postimg.cc/NjdpZVt5/Lilitha.jpg" alt="Lilitha" style="width:300px;height:400px;">
              </div>
              <div class="flip-card-back">
              <h1>Lilitha Mantini</h1> 
           <p class="fst-italic">Class-mate</p> 
           <p style="text-align:justify; padding-left: 5px; padding-right: 6px;">"I have worked with Siyanda on a number of projects, she is a good team player, tartget driven and not afraid of challenges. She is very professional in and out the office enviromnent."</p>
          </div>
       </div>
      </div> 

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
            <img src="https://i.postimg.cc/bN9K9NYp/siyabong-A.jpg" alt="Siyabonga" style="width:300px;height:400px;">
            </div>
        <div class="flip-card-back">
      <h1>Siyabonga Mkhosana</h1> 
      <p class="fst-italic">Class-mate</p> 
      <p style="text-align:justify; padding-left: 5px; padding-right: 6px;">"Miss Ncamazana has shown admirable optimsim for teamwork and shown initiative in every project and task she has been given to do. I deeem her a very work and people oriented and a committed young women."</p>
    </div>
  </div>
</div>
      <div class="flip-card">
        <div class="flip-card-inner">
           <div class="flip-card-front">
           <img src="https://i.postimg.cc/MTGTqrsj/Godwin.jpg" alt="Godwin" style="width:300px;height:400px;">
             </div>
             <div class="flip-card-back">
             <h1>Godwin Dzvapatsva</h1> 
          <p class="fst-italic">Head of Curriculum and Learning</p> 
          <p style="text-align:justify; padding-left: 5px; padding-right: 6px;">"I see a lot of potential in Siyanda as a web developing student. She gets quite excited when she sees an opportunity to participate during the lesson and show off her design skills. As long as she is focused in class, Siyanda will continue to improve steadily."</p>
         </div>
      </div>
     </div>
    </div>
        </div>
      </div>
</template>

<style scoped>   
                 
.img-fluid{
  float: left;
  height: auto;
  max-width:100%;
}
@media only screen and (max-width: 300px){
  .img-fluid{
    float: none}
}


.flip-card-inner {
  position: absolute;
  width: 300px;
  height: 400px;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 300px;
  height: 400px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-image: linear-gradient(to bottom, rgba(0, 30, 255, 0.65), rgba(4, 215, 243, 0.712));
  font-weight: bolder;
  color: white;
  transform: rotateY(180deg);
  border:black;
}   

div.flip-card {
  /* background-color: lightgrey; */
  width: 400px;
  height: 500px;
  /* border font: inherit;: 15px solid blue; */
  padding-top: 7px;
  margin-top: 8%;
  border: black;
}

.flip-container {
  /* padding-top: 10px; */
  flex-direction: row;
  display: flex;
  grid-row: 10px;
  gap: 10px 20px;
  column-gap: 30px;
  align-items: baseline;
  flex-wrap: wrap;
  justify-content: center;
  flex-flow: space-evenly;
}
.container3 {
  width: 80%; 
  justify-content: center; 
  margin-top: 8%; 
  margin-left: 10%;
}
</style>
