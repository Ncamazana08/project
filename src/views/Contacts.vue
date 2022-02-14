<template>
 <form @submit.prevent="handleSubmit"
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
      <h2 style="color: blue;">Please complete the form below.</h2>
        <div class="row" style="width:500px">
          <div class="col">
        
              <input type="text" class="form-control" placeholder="First Name" v-model="firstname">
      <br>    
              <input tpye="text" class="form-control" placeholder="Last Name" v-model="lastname">
     <br>
              <input type="tel" class="form-control" placeholder="Phone Number" v-model="phoneNumber">
      <br>
                <input type="text" class="form-control" id="email" placeholder="Enter email" v-model="email">
   <br>     
    <br>    <textarea name="message" class="form-control" placeholder="Message" v-model="message"></textarea>
  <br>   
      <!-- your other form fields go here -->
      <div class="enter" style="row justify-content-center align-items-center">
      <button type="submit" class="btn btn-primary mt-3">Submit</button>
      <!-- reset button -->
      <button type="reset" class="btn btn-info mt-3">Reset</button>

      </div>
    </div>
  </div>
  <br>
<br>
<div class="wrapper">
  <div class="icon facebook">
    <div class="text">Facebook</div> 
      <span><i>
        <a class="fab fa-facebook-f" href="https://www.facebook.com/siyanda.ncamazana.56"></a>
        </i>
        </span>
  </div>
   <div class="icon github">
    <div class="text">Github</div>
      <span><i>
        <a class="fab fa-github" href="https://github.com/Ncamazana08"></a>
        </i></span>
  </div>
   <div class="icon linkedin">
    <div class="text">LinkedIn</div>
      <span><i>
    <a class="fab fa-linkedin" href="https://www.linkedin.com/in/siyanda-ncamazana-9866b4223/"></a>
     </i>
      </span>
  </div>

   <!-- <div class="icon github">
    <div class="text">Github</div>
      <span><i class="fab fa-github"></i></span>
  </div> -->
</div>

 </form>
 
</template>

<script>
export default{
  data(){
    return{
      
      firstname: "",
      lastname: "",
      email: "",
      phoneNumber: "",
      message: ""
    }
  },
  method: {
    handleSubmit() {
      console.log(this.firstname, this.lastname, this.email, this.phoneNumber, this.message),
      fetch('https://dashboard.heroku.com/apps/api-bckend/contacts',  
      {
        method: 'POST',
        body: JSON.stringify({
         firstname: this.firstname,
         lastname: this.lastname,
         email: this.email,
         phoneNumber: this.phoneNumber,
         message: this.message,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.json())
      .then((json) => console.log(json));
    }
  }
}
</script>

<style scoped>
form,
input,
textarea,
button { 
 
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
body{
  display:grid;
  height: 100%;
  width: 100%;
  overflow: hidden;
  /* place-items: center; */
  background: linear-gradient(315deg, #ffffff, #d7e1ec);
}
.wrapper{
  display: inline-flex;
}
.wrapper .icon{
  margin: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 2;
  cursor: pointer;
}
.wrapper .icon span{
  position: relative;
  height: 60px;
  width: 60px;
  display: block;
  background: #fff;
  text-align: center;
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 10px 10px rgba(0,0,0,);
}
.wrapper .icon span i{
  font-size: 25px;
  line-height: 60px;
}
.wrapper .icon .text{
  position: absolute;
  top: -0px;
  background:white;
  font-size: 20px;
  padding: 10px 14px;
  border-radius: 20px;
  box-shadow: 0 10px 10px rgba(0,0,0,);
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265,1.55);
}
.wrapper .icon:hover .text{
  top: -70px;
  opacity: 1;
  pointer-events: auto;
}
.wrapper .icon .text::before{
  position: absolute;
  content: "";
  height: 15px;
  width: 1;
}
.wrapper .icon:hover span
.wrapper .icon:hover .text{
  text-shadow: 0px -1px 0px rgba(0,0,0,0.4);
}


</style>