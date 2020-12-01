<template>
  <div class="container ">
    <form @submit.prevent="addTask" class="mb-3">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="post.title"
        />
      </div>

      <button type="submit" class="btn btn-primary" >Submit</button>
    </form>

    <!---  categories-->
    <ul class="list-group">
      <li class="list-group-item" v-for="item in items" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
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
      axios.get("/api/categories").then(response => {
        this.items = response.data.categories;
      });
    },
  
  addTask() {
    axios
      .post("/api/categories", this.post)
      .then(response=> {
        //this.type = response.data.categories;
        this.fetchTasks();
        console.log(this.post);
      })
      .catch(function (error) {
        console.log(error);
    });
  }
  }
};
</script>