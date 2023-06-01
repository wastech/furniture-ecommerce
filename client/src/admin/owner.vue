<template>
  <div class="container">
    <h4>Add a New Author</h4>
    <div class="row">
      <div class="col-sm-12">
        <form @submit.prevent="addTask">
          <div class="form-group required">
            <label for="" class="control-label">name</label>
            <input
              type="text"
              class="form-control shadow"
              aria-describedby="textHelp"
              v-model="post.name"
              placeholder="you name ....."
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
            <label for="" class="control-label">About</label>
            <textarea
              class="form-control shadow"
              id="exampleFormControlTextarea1"
              v-model="post.about"
              placeholder="your text...."
              rows="5"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-lg btn-block mt-1">
            submit
          </button>
        </form>

        <!-- owner-->
        <div class="row">
          <div class="col-sm-6 mt-3" v-for="item in items" :key="item.id">
            <div class="row no-gutters bg-light position-relative">
              <div class="col-md-6 mb-md-0 p-md-4">
                <img :src="item.photo" class="w-100" alt="..." />
              </div>
              <div class="col-md-6 position-static p-4 pl-md-0">
                <h5 class="mt-0">{{ item.name }}</h5>
                <div>
                  <p>{{ item.about }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      items: [],
    };
  },

  created() {
    this.fetchTasks();
  },
  methods: {
    fetchTasks() {
      axios
        .get("https://e-furniture-7e2p.onrender.com/api/owners")
        .then((response) => {
          this.items = response.data.owners;
        });
    },

    addTask() {
      axios
        .post("https://e-furniture-7e2p.onrender.com/api/owners", this.post)
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
p {
  word-wrap: break-word;
}
.form-control {
  padding: 1em;
}
label {
  font-weight: 900;
  font-size: large;
}
</style>