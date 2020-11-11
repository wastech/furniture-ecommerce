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
          />
        </div>
      </div>

      <div class="form-group row">
        <label
          for="colFormLabelLg"
          class="col-sm-2 col-form-label col-form-label-lg"
          >country</label
        >
        <select class="form-control  col-sm-9 form-control-lg">
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
          >Firstname</label
        >
        <div class="col-sm-10">
          <input
            type="text"
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
          >lastname</label
        >
        <div class="col-sm-10">
          <input
            type="tezt"
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
          >Address</label
        >
        <div class="col-sm-10">
          <input
            type="text"
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
          >city</label
        >
        <div class="col-sm-10">
          <input
            type="text"
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
          >phone</label
        >
        <div class="col-sm-10">
          <input
            type="number"
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
          >zip</label
        >
        <div class="col-sm-10">
          <input
            type="number"
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
          >state</label
        >
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control form-control-lg"
            id="colFormLabelLg"
            placeholder=""
          />
        </div>
      </div>
      <button type="button" class="btn btn-primary btn-lg">next step</button>
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
      categories:[]
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
      
     axios.get("http://localhost:3000/api/countries").then(response => {
        this.countries = response.data;
      
}).catch(function(err){
  console.log(err);
})
    
    },

    addTask() {
      axios
        .post("http://localhost:3000/api/products", this.post)
        .then((response) => {
          //this.type = response.data.categories;
          this.fetchTasks();
          console.log(this.post);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },

}
</script>