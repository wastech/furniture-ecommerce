<template >
  <main>
    <div class="container-fluid c-selection">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-spacing-top-medium"></div>
          <h2>Add a new Owner</h2>
          <form>
            <!-- name -->
            <div class="a-spacing-top-medium">
              <label>Name</label>
              <input class="a-input-text" style="width: 100%" v-model="name" />
            </div>
            <!-- about -->
            <div class="a-spacing-top-medium">
              <label>About</label>
              <input class="a-input-text" style="width: 100%" v-model="about" />
            </div>

            <!-- Photo file -->

            <div class="a-spacing-top-medium">
              <label style="margin-bottom: 0px;">Add Photo</label>
              <div class="a-row a-spacing-top-medium">
                <label>
                  <i class="fal fa-plus"></i>
                  <input type="text" v-model="photo" />
                 
                </label>
              </div>
            </div>
            <!-- Buttonn -->
            <hr />
            <div class="a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text" @click="onAddOwner">Add Owner</span>
                </span>
              </span>
            </div>
          </form>
          <br />

          <ul class="list-group-item">
            <li v-for="owner in owners" :key="owner._id">{{owner.name}}</li>
          </ul>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      let owners = $axios.$get("http://localhost:3000/api/owners");
      const [ownerResponse] = await Promise.all([owners]);
      console.log(ownerResponse);
      return {
        owners: ownerResponse.owners
      };
    } catch (err) {
      console.log(err);
    }
  },
  data() {
    return {
      name: "",
      about: "",
      photo:""
    };
  },
  methods: {

   
    async onAddOwner() {
      let data = new FormData();
      data.append("name", this.name);
      data.append("about", this.about);
      data.append("photo", this.photo);
      let result = await this.$axios.$post(
        "http://localhost:3000/api/owners",
        data
      );
      this.owners.push({name: this.name});
    }
  }
};
</script>