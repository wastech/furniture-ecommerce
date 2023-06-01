<template>
  <div class="container">
    <h4>Add a New Product</h4>
    <div class="row">
      <div class="col-sm-12">
        <form @submit.prevent="addTask">
          <!-- Category dropdow -->
          <div class="input-group">
            <select
              class="custom-select shadow mb-2"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
              v-model="post.categoryID"
            >
              <option
                selected
                v-for="category in categories"
                :value="category._id"
                :key="category._id"
              >
                {{ category.title }}
              </option>
            </select>
          </div>

          <!-- Owner Dropdown -->

          <div class="input-group mb-2">
            <select
              class="custom-select shadow"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
              v-model="post.ownerID"
            >
              <option
                selected
                v-for="owner in owners"
                :value="owner._id"
                :key="owner._id"
              >
                {{ owner.name }}
              </option>
            </select>
          </div>

          <!-- input-->
          <div class="form-group required">
            <label for="" class="control-label">name</label>
            <input
              type="text"
              class="form-control shadow"
              aria-describedby="textHelp"
              v-model="post.name"
              placeholder="title"
            />
          </div>

          <div class="form-group required">
            <label for="" class="control-label">price</label>
            <input
              type="number"
              class="form-control shadow"
              aria-describedby="textHelp"
              v-model="post.price"
              placeholder="price..........."
            />
          </div>

          <div class="form-group">
            <label for="exampleInputFile">photo</label>
            <input
              type="text"
              class="form-control shadow"
              placeholder="Image URL...."
              id="exampleInputFile"
              aria-describedby="fileHelp"
              v-model="post.photo"
            />
            <!--<small id="fileHelp" class="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>-->
          </div>
          <div class="form-group">
            <label for="" class="control-label">description</label>
            <textarea
              class="form-control shadow"
              id="exampleFormControlTextarea1"
              v-model="post.description"
              placeholder="your text...."
              rows="10"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-lg btn-block mt-5">
            submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      post: {},
      owners: [],
      categories: [],
    };
  },

  created() {
    this.fetchTasks();
  },
  methods: {
    fetchTasks() {
      var url1 = axios
        .get("https://e-furniture-7e2p.onrender.com/api/owners")
        .then((response) => {
          this.owners = response.data.owners;
        });
      var url2 = axios
        .get("https://e-furniture-7e2p.onrender.com/api/categories")
        .then((response) => {
          this.categories = response.data.categories;
        });
      Promise.all([url1, url2])
        .then(function (values) {
          return values;
        })
        .catch(function (err) {
          console.log(err);
        });
    },

    addTask() {
      axios
        .post("https://e-furniture-7e2p.onrender.com/api/products", this.post)
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
};
</script>


<style scoped>
.form-group.required .control-label:after {
  content: "*";
  color: red;
}
h4 {
  text-align: center;
}
.form-control {
  padding: 1.5em;
}
label {
  font-weight: 900;
  font-size: small;
}
</style>