<template>
  <div class="container">
    <table class="table ">
  <caption>List of users</caption>
  <thead  class="thead-dark">
    <tr >
      <th scope="col-sm-3">Name</th>
      <th scope="col-sm-3">Order</th>
      <th scope="col-sm-3">Address</th>
      <th scope="col-sm-3">Amount</th>
      <th scope="col-sm-3">Status</th>
      <th scope="col-sm-3">Detail</th>

    </tr>
  </thead>
  <tbody>
    <tr  v-for="(item, index) in items" :key="item.id">
      <th scope="row">{{index}}</th>
      <td> <p>{{item.name}}</p> </td>
      <td> <img :src="item.photo" alt=""> </td>
      <td>@{{item.owner.name}}</td>
      <td><i class="fas fa-pencil-alt"></i>
       <router-link
                v-bind:to="{ name: 'productdetail', params: { id: item._id } }"
              > <i class="far fa-eye"></i></router-link>
      <i class="far fa-trash-alt" @click.prevent="deleteTask(item._id)"></i></td>
      
    </tr>
   
  </tbody>
</table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "posts",
 
  data() {
    return {
      items: [],
     
    };
  },
  created() {
    axios.get("https://infinite-headland-81013.herokuapp.com/api/products").then((response) => {
      this.items = response.data.products;
    });
  },
  methods:{
     deleteTask(_id){
              axios.delete("https://infinite-headland-81013.herokuapp.com/api/products/" +_id).then((response) => {
     
    });
            },
  },
};

</script>
<style scoped>
img{
  max-width: 5em;
}
td{
  max-width: 20%;
}
.fa, .fas {
    font-family: "Font Awesome 5 Pro";
    font-weight: 900;
    margin-right: 1em;
    
}
.fa-trash-alt{
  font-family: "Font Awesome 5 Pro";
    font-weight: 900;
    margin-right: 1em;
    
}
.fa, .far {
    font-family: "Font Awesome 5 Pro";
    font-weight: 900;
    margin-right: 1em;
  
}
</style>
