<template>
<div class="container bootstrap snippets">
        <h3 class="text-uppercase" style="margin-top: 0px; font-size: 50px; text-align: center; padding-top: 30px;"><strong>Contacts</strong></h3><br>
      <div class="row text-center" >
        <div class="col-sm-4">
          <div class="contact-detail-box">
            <i class="fa fa-th fa-3x text-colored"></i>
            <h4>Get In Touch</h4>
            <abbr title="Phone">P:</abbr> (063) 148 0554 <br>
            E: <a href="mailto:email@email.com" class="text-muted">siyandancamazana08@gmail.com</a>
          </div>
        </div><!-- end col -->

        <div class="col-sm-4">
          <div class="contact-detail-box">
            <i class="fa fa-map-marker fa-3x text-colored"></i>
            <h4>My Location</h4>

            <address>
            Cape Town<br>
            South Africa<br>
          </address>
          </div>
        </div><!-- end col -->

        <div class="col-sm-4">
          <div class="contact-detail-box">
            <i class="fa fa-book fa-3x text-colored"></i>
            <br>
            <h4>Social Platform</h4>
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
</div>
          </div>
        </div><!-- end col -->

      </div>
      <!-- end row -->


      <div class="row" >
        <div class="col-sm-6">
          <div class="contact-map">
                        <img src="https://i.postimg.cc/BQ77tcfS/gownyy.jpg" class="img-fluid" alt="Card image cap" id="siyandaimg">
          </div>
        </div><!-- end col -->

        <!-- Contact form -->
        <div class="col-sm-6" style="width:500px">
            <form action="https://formspree.io/f/{form_id}" method="post">
            <div class="form-group">
              <label for="name2">Name</label>
              <input class="form-control" id="name2" name="name" onblur="if(this.value == '') this.value='Name'" onfocus="if(this.value == 'Name') this.value=''" type="text" value="Name">
              <div class="error" id="err-name" style="display: none;">Please enter name</div>
            </div> <!-- /Form-name -->

            <div class="form-group">
              <label for="email2">Email</label>
              <input class="form-control" id="email2" name="email" type="text" onfocus="if(this.value == 'E-mail') this.value='';" onblur="if(this.value == '') this.value='E-mail';" value="E-mail">
              <div class="error" id="err-emailvld" style="display: none;">E-mail is not a valid format</div> 
            </div> <!-- /Form-email -->

            <div class="form-group">
              <label for="message2">Message</label>
              <textarea class="form-control" id="message2" name="message" rows="5" onblur="if(this.value == '') this.value='Message'" onfocus="if(this.value == 'Message') this.value=''">Message</textarea>

              <div class="error" id="err-message" style="display: none;">Please enter message</div>
            </div> <!-- /col -->

            <div class="row">            
              <div class="col-xs-12">
                <div id="ajaxsuccess" class="text-success">E-mail was successfully sent.</div>
                <div class="error" id="err-form" style="display: none;">There was a problem validating the form please check!</div>
                <div class="error" id="err-timedout">The connection to the server timed out!</div>
                <div class="error" id="err-state"></div>
                <button type="submit" class="btn btn-primary btn-shadow btn-rounded w-md" id="send">Submit</button>
              </div> <!-- /col -->
            </div> <!-- /row -->


          </form> <!-- /form -->
        </div> <!-- end col -->

      </div> <!-- end row -->
          
    </div>

 
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
.container {
  height: 100%;
  margin-top: 20px;
  overflow: hidden;
  margin-bottom: 30px;
}
form,
input,
textarea,
button { 
 
  border-radius: 20px;
  /* color: white; */
  padding: 10% 10%;
  }
form {
  /* margin-top: 10%; */
  /* padding-top:10px ; */
  /* width: 100%; */
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
  /* background: linear-gradient(315deg, #ffffff, #d7e1ec); */
}
.wrapper{
  padding-top: 5px;
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
  background: cyan;
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
  background:cyan;
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

/* Subscribe me on Youtube
https://bit.ly/3m9avif
*/

body{margin-top:20px;}


/*======= Contact ======*/

.form-control {
  box-shadow: none !important;
  outline: none !important;
  border: 2px solid black;
  height: 30px;
}
.form-control:hover ,.form-control:focus{
  border-color: black;
}


.error {
  margin: 8px 0px;
  display: none;
  color: red;
}
#ajaxsuccess {
  font-size: 16px;
  width: 100%;
  display: none;
  clear: both;
  margin: 8px 0px;
}
.con_sub_text {
  margin: 20px 0px;
  font-size: 15px;
}

.contact-detail-box {
  margin-top: 0%;
  margin-bottom: 50px;
}

.contact-detail-box address {
  font-size: 14px;
}
.contact-map {
  width: 90%;
   height: 510px;
  background-color: black;
}
img{
  margin-left: 30px;
  margin-top: 8px;
  width:90%;
  height: 500px;
}

.title-box .border,.btn-primary,.back-to-top,
.logo i,.question-q-box,.social-circle li a:hover {
  background-color: blue !important;
}
.title-box .title-alt,.text-colored,.footer a:hover,
.navbar-custom .navbar-nav li a:hover,
.navbar-custom .navbar-nav li a:focus,
.navbar-custom .navbar-nav li a:active,
.navbar-custom .navbar-nav li.active a {
  color: cyan;
}

.btn-primary {
  width: 90px;
  border: 1px solid black !important;
}
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.btn-primary.focus,
.btn-primary:active,
.btn-primary:focus,
.btn-primary:hover,
.open > .dropdown-toggle.btn-primary,
.btn-primary.active.focus, .btn-primary.active:focus, 
.btn-primary.active:hover, .btn-primary:active.focus, 
.btn-primary:active:focus, .btn-primary:active:hover, 
.open>.dropdown-toggle.btn-primary.focus, 
.open>.dropdown-toggle.btn-primary:focus, 
.open>.dropdown-toggle.btn-primary:hover {
  background-color: cyan !important;
  border: 1px solid #d85600 !important;
}

.btn-shadow.btn-primary {
  box-shadow: 1px 5px 9px rgba(241, 96, 1, 0.32);
}



/*======= Responsive ======*/
@media (min-width: 768px) {
    .nav-custom-left {
		margin-left: 5%;
	}
  .navbar-nav>li>a {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .contact-page .col-sm-6 {
    padding-left: 30px;
    padding-right: 30px;
  }
}

@media (max-width: 768px) {
  .navbar-custom {
        -moz-box-shadow: 0 2px 2px rgba(0,0,0,.1);
    -webkit-box-shadow: 0 2px 2px rgba(0,0,0,.1);
    box-shadow: 0 2px 2px rgba(0,0,0,.1);
  }
  .screen-space {
    margin: 0px auto 50px auto;
  }
  .feature-detail {
    padding: 0px 0px 50px 30px !important;
  }
  .footer h5 {
    margin-top: 30px;
  }
}


@media only screen and (min-width: 768px) and (max-width: 991px){
  .blog-wrapper .blog-item {
    width: 50%;
  }
  .navbar-custom .navbar-nav li a {
    font-size: 12px;
  }
  .blog-detail-box {
  padding-right: 0px;
}
}
@media only screen and (min-width: 767px) and (max-width: 991px){
  
}
@media (max-width: 767px) {
  .blog-wrapper .blog-item {
    width: 100%;
  }
  .logo {
    margin-top: 7px;
  }
  .blog-detail-box {
  padding-right: 0px;
}
}
</style>