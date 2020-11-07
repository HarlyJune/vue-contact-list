<script>
  import './main'
  export default {
    name: "App",
    data: function() {
      return {
        contacts : this.$api.getContacts()
      };
    },
    mounted(){
      this.$root.$on('remove-contact', this.removeContact)
    },
    methods: {
      removeContact: function(id) {
        console.log("catched");
        this.$api.deleteContact(this.id)
        this.contacts = this.contacts.filter(  x => /*return*/ x.id !== id ) //1
        // this.contacts = contacts.filter( (x) => /*return*/ x.id !== contact.id) //2
        // this.contacts = contacts.filter( function (x){ return x.id !== contact.id } ) //3
        console.log(this.id)
      }

    }
  };

</script>

<template>
  <div id="app" >
    <router-view v-bind:contacts = 'contacts' />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
