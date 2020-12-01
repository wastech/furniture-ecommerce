<template>
  <div class="container">
    <form>
      <div class="form-group row">
        <label
          for="colFormLabelLg"
          class="col-sm-2 col-form-label col-form-label-lg"
          >Email</label
        >
        <div class="col-sm-10">
          <input
            type="email"
            class="form-control form-control-lg"
            id="colFormLabelLg"
            placeholder=""
            v-model="post.email"
          />
        </div>
      </div>

      <div class="form-group row">
        <label
          for="colFormLabelLg"
          class="col-sm-2 col-form-label col-form-label-lg"
          >country</label
        >
        <select class="form-control  col-sm-9 form-control-lg" v-model="post.country">
  <option
     v-for="country in countries"
                        :key="country.alpha2Code"
                        :value="country.name"
                        >{{country.name}}</option>
</select>
      </div>
      <div class="form-group row">
        <label
          for="colFormLabelLg"
          class="col-sm-2 col-form-label col-form-label-lg"
         
          >fullName</label
        >
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control form-control-lg"
            id="colFormLabelLg"
             v-model="post.fullName"
            placeholder=""
          />
        </div>
      </div>


      <div class="form-group row">
        <label
          for="colFormLabelLg"
          class="col-sm-2 col-form-label col-form-label-lg"
          >streetAddress</label
        >
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control form-control-lg"
            id="colFormLabelLg"
            v-model="post.streetAddress"
            placeholder=""
          />
        </div>
      </div>

      <div class="form-group row">
        <label
          for="colFormLabelLg"
          class="col-sm-2 col-form-label col-form-label-lg"
          >city</label
        >
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control form-control-lg"
            id="colFormLabelLg"
              v-model="post.city"
            placeholder=""
          />
        </div>
      </div>

      <div class="form-group row">
        <label
          for="colFormLabelLg"
          class="col-sm-2 col-form-label col-form-label-lg"
          >phoneNumber</label
        >
        <div class="col-sm-10">
          <input
            type="number"
            v-model="post.phoneNumber"
            class="form-control form-control-lg"
            id="colFormLabelLg"
            placeholder=""
          />
        </div>
      </div>

      <div class="form-group row">
        <label
          for="colFormLabelLg"
          class="col-sm-2 col-form-label col-form-label-lg"
          >deliverInstructions</label
        >
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control form-control-lg"
            id="colFormLabelLg"
             v-model="post.deliverInstructions"
            placeholder=""
          />
        </div>
      </div>

      <div class="form-group row">
        <label
          for="colFormLabelLg"
          class="col-sm-2 col-form-label col-form-label-lg"
          >state</label
        >
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control form-control-lg"
            id="colFormLabelLg"
            v-model="post.state"
            placeholder=""
          />
        </div>
      </div>

       <div class="form-group row">
        <label
          for="colFormLabelLg"
          class="col-sm-2 col-form-label col-form-label-lg"
          >zipCode</label
        >
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control form-control-lg"
            id="colFormLabelLg"
            v-model="post.zipCode"
            placeholder=""
          />
        </div>
      </div>
      
      <button type="button" class="btn btn-primary btn-lg" @click="address">next step</button>
    </form>
    
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      post: {},
      countries: [],
     
    };
  },

  created() {
    this.fetchTasks();
  }
  ,
 /* created() {
    axios.get("http://localhost:3000/api/countries").then((response) => {
      this.countries = response.data;
    });*/
  methods: {
    
    fetchTasks() {
      
     axios.get("http://localhost:3000/api/address/countries").then(response => {
        this.countries = response.data;
       console.log(this.countries);
}).catch(function(err){
  console.log(err);
})
    
    },

    address() {
      axios
        .post("http://localhost:3000/api/addresses", this.post)
        .then((response) => {
          this.fetchTasks();
          this.$router.push({ name: "paymentid", params: { _id: this._id } });
         
          
        
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },

}
</script>