<template>
  <div class="container">
    <h4>Add a New author</h4>
    <div class="row">
      <div class="col-sm-12">
        <form>
          <!-- Category dropdow -->

          <div class="input-group">
            <select
              class="custom-select form-control shadow mb-2"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
              v-model="categoryID"
            >
              <option
                v-for="category in categories"
                :value="category._id"
                :key="category._id"
              >
                {{ category.type }}
              </option>
            </select>
          </div>
          <!-- Owner Dropdown -->

          <div class="input-group mb-2">
            <select
              class="custom-select form-control shadow"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
              v-model="ownerID"
            >
              <option
                v-for="owner in owners"
                :value="owner._id"
                :key="owner._id"
              >
                {{ owner.name }}
              </option>
            </select>
          </div>

          <div class="col">
            <div class="form-group">
              <label>Top Product</label>
              <input
                type="checkbox"
                class="form-control"
                id="isTopProduct"
                name="isTopProduct"
                placeholder="Password"
                v-model="post.isTopProduct"
              />
            </div>
          </div>

          <div class="col">
            <div class="form-group">
              <label>Best Product</label>
              <input
                type="checkbox"
                class="form-control"
                id="isBestProduct"
                name="isBestProduct"
                placeholder="Password"
                v-model="post.isBestProduct"
              />
            </div>
          </div>

          <div class="col">
            <div class="form-group">
              <label>New Product</label>
              <input
                type="checkbox"
                class="form-control"
                id="isNewProduct"
                name="isNewProduct"
                placeholder="Password"
                v-model="post.isNewProduct"
              />
            </div>
          </div>

          <!-- input-->
          <div class="form-group required">
            <label for="" class="control-label">title</label>
            <input
              type="text"
              class="form-control shadow"
              aria-describedby="textHelp"
              v-model="post.title"
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
          <button type="button" class="btn btn-primary btn-lg btn-block mt-5">
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
      categories:[],
       categoryID: null,
      ownerID: null,
    };
  },

  created() {
    this.fetchTasks();
  },
  methods: {
    
    fetchTasks() {
      axios.get("http://localhost:3000/api/categories").then((response) => {
        this.categories = response.data.categories;
      });
    },
    fetchTasks() {
      axios.get("http://localhost:3000/api/owners").then((response) => {
        this.owners = response.data.owners;
      });
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
  padding: 2em;
}
label {
  font-weight: 900;
  font-size: large;
}
</style>