<template>
  <div class="">
    <div class="title">
      <h5>Welcome to our checkout.</h5>
      <hr>
    </div>
    <div class="container">
    <div class="row ">
      <div class="col-sm-6">

        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Name on Card</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
   
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Card Number</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
   
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Billing Address</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
   
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">CVC</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
   
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Expiration</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
   
  </div>

   <div class="form-group">
    <label for="exampleInputEmail1">Year</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
   
  </div>

  
  <button type="button" class="btn btn-primary btn-lg btn-block">continue</button>
</form>
      </div>
      
      <div class="col-sm-6">
        <div class="alert alert-info" role="alert">
          <small>
  Please choose your method of payment and hit continue. You will then be sent down to pay using your selected payment option.</small>
</div>
<ul class="list-group">
  <li class="list-group-item">Stripe/Credit card</li>
  <li class="list-group-item">Paypal</li>
  
</ul>

   <div class="text"> 
     <i>BALANCE  DUE</i>
        <br>
     <b>#34.990</b>
   </div>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
.container{
  max-width: 60em;
}
h5{
  text-align: center;
 border-bottom: 5px solid #0000;
 font-size: x-large;
}
.form-group {
    margin-bottom: 0.5rem;
}
label {
    display: inline-block;
    margin-bottom: 0.1em;
}
.alert{
  margin-top: 1em;
}
.text{
  padding: 5em;
  background-color: #eee;
  margin-top: 1em;
  text-align: center;
}
</style>