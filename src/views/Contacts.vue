<template>
 <form
        action="https://formspree.io/f/xoqybjpe"
        method="POST"
      >
  
       <div class="col-sm-auto col-md-auto col-lg- col-xl- col-xxl">
        <div class="row justify-content-center align-items-center" >
        <h3 class="text-uppercase" style="margin-top: 50px; font-size: 50px; text-align: center; padding-bottom: 10px;"><strong>Contact Details</strong></h3>
    </div>
        </div>

      <div class="row">
        <div class="contact-info-item">
          <div class="info-box">
            <div class="icon"><i class="fa fa-phone"></i></div>
            <h3>Call Me On</h3>
            <p>+276-31-48-0554</p>
          </div>

           <div class="info-box">
            <div class="icon"><i class="fa fa-map-marker-alt"></i></div>
            <h3>Location</h3>
            <p>Cape Town</p>
          </div>

            <div class="info-box">
            <div class="icon"><i class="fa fa-envelope"></i></div>
            <h3>Email Me</h3>
            <p>siyandancamazana08@gmail.com</p>
          </div>
        </div>
      </div>

  

        <!-- <div class="col-md-6 mt-6 mt-md-0 d-flex align-items-stretch">
          <div class="info-box">
            <i class="bx bx-share-alt"></i>
            <h3>Social Profiles</h3>
            <div class="social-links">

              <div class="buttons" style="display: flex; padding-top: 10px;">
                <button type="submit" style="background-color: transparent; border: none;"><i class="bi bi-facebook"></i></button>
                <button type="submit" style="background-color: transparent; border: none;"><i class="bi bi-whatsapp"></i></button>
                <button type="submit" style="background-color: transparent; border: none;"><i class="bi bi-messenger"></i></button>
                <button type="submit" style="background-color: transparent; border: none;"><i class="bi bi-linkedin"></i></button>
                <button type="submit" style="background-color: transparent; border: none;"><i class="bi bi-skype"></i></button>
              </div>
            </div>
          </div>
        </div> -->

        <!-- <div class="col-md-6 mt-4 d-flex align-items-stretch">
          <div class="info-box">
            <i class="bx bx-phone-call"></i>
            <h3>Call Me</h3>
            <p>+27 63 148 0554</p>
          </div>
        </div> -->
      <!-- </div> -->

       <!-- </div> -->
  
    
      <h2 style="color: blue;">Please complete the form below.</h2>
        <div class="row" style="width:500px">
          <div class="col">
        
              <input type="text" class="form-control" placeholder="First Name" name="firstname">
      <br>    
              <input tpye="text" class="form-control" placeholder="Last Name" name="lastname">
     <br>
              <input type="tel" class="form-control" placeholder="Phone Number" name="pnumb">
      <br>
                <input type="text" class="form-control" id="email" placeholder="Enter email" name="email">
   <br>       <!-- <input type="email" name="_replyto" placeholder="Email"> -->
            <input type="password" class="form-control" placeholder="Enter password" name="pswd">
    <br>    <textarea name="message" class="form-control" placeholder="Message"></textarea>
  <br>   
      <!-- your other form fields go here -->
      <div class="enter" style="row justify-content-center align-items-center">
      <button type="submit" class="btn btn-primary mt-3">Submit</button>
      <!-- reset button -->
      <button type="reset" class="btn btn-info mt-3">Reset</button>
      <!-- <labal for="reset"></labal> -->
      </div>
    </div>
  </div>


 </form>
</template>

<script>
      src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"

</script>

<style>
/*  */
form,
input,
textarea,
button { 
  /* background: rgba(0, 0, 0, 0.35); */
  /* box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); */
  /* backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px); */
  border-radius: 10px;
  /* color: white; */
  padding: 5% 10%;
  }
form {
  /* margin-top: 10%; */
  padding-top:10px ;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  }
  .text-center {
  text-align: center !important;
}
.info-box{
  display:inline-block;
  padding-top: 20px;
  padding-right: 60px;
}
.icon{
  padding-left: 50px;
}
/* label{
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input,select{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px sold #ddd;
    color: #5555;
} 
input[type="checkbox"]{
display: inline-block;
width: 16px;
margin: 0 10px 0 0;
position: relative;
top: 2px;
}
.pill{
    background: #eee;
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    font-size: 12px;
    letter-spacing: 1px;
    border-radius: 20px;
    color: #777;
    font-weight: bold;
    cursor: pointer;
} */
</style>