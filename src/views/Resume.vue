<template>

<div id="workEdu">
            <div class="container3">
        <div class="col-sm-auto col-md-auto col-lg- col-xl- col-xxl">
        <div class="row justify-content-center align-items-center" >
          <div class="col-md-5 ">
      <h3 class="text-uppercase" style="margin-top: 50px; font-size: 50px; text-align: center;"><strong>My Resume</strong></h3>
    </div>
        </div>

            <div class="timeline">

                <div class="containerp left timeline-cont" data-aos="fade-right">
                    <div class="contentq">
                     <h2 style="color:black">2009-2014</h2>
                    <strong><p style="font-size: 20px;">Claremont Primary School, <br> Palmyra Road, Claremont, <br> Cape Town.</p></strong> 
                </div>
                </div>              
                  <div class="containerp right timeline-cont" data-aos="fade-left">
                    <div class="contentq">
                        <h2 style="color:black">2015-2019</h2>
               <strong><p style="font-size: 20px;">Voortrekker High School, <br> Salisbury Road, Kenilworth, <br> Cape Town.</p></strong> 

                    <!-- <p style="font-size: 20px;">Voortrekker High School, <br> Salisbury Road, Kenilworth <br> Cape Town.<p> -->
                </div>
                  </div>
                <div class="containerp left timeline-cont" data-aos="fade-right">
                    <div class="contentq">
                    <h2 style="color:black">2021</h2>
                    <strong><p style="font-size: 20px;">Higher Certificate in Office Administration, Rosebank College.IIE <br> Buitengracht Street <br> Capr Town.</p></strong> 
                    </div>
                </div>
                <div class="containerp right timeline-cont" data-aos="fade-left">
                    <div class="contentq">
                        <h2 style="color:black">2021</h2>
                    <strong><p style="font-size: 20px;">Coding Bootcamp, <br>Life Choices Academy, <br> Imam Haron Road, Landsdown<br> Cape Town.</p></strong>
                    </div>
                </div>
            
                  </div> 
            </div>
        </div>
</div>

</template>

<script>
export default {

}
</script>

<style>
#workEdu {
  padding: 50px;
  max-height: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.containerp {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.containerp::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: cyan;
  border: 4px solid #508aa8;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 0;
}

/* Place the container to the right */
.right {
  left: 50%;
}

/* Add arrows to the left container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid blue;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid blue;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -16px;
}

/* The actual content */
.contentq {
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
  /* Place the timelime to the left */
  .timeline::after {
  left: 31px;
  }
  
  /* Full-width containers */
  .containerp {
  width: 100%;
  padding-left: 70px;
  padding-right: 25px;
  }
  
  /* Make sure that all arrows are pointing leftwards */
  .containerp::before {
  left: 60px;
  border: medium solid blue;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .left::after, .right::after {
  left: 15px;
  }
  
  /* Make all right containers behave like the left ones */
  .right {
  left: 0%;
  }
}
.carousel-img {
  width: 40%;
  border-radius: 100%;}
  
</style>