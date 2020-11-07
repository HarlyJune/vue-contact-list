<script>
import delButton from "./delButton";
import contact from "./contactShort";
export default {
  props: ["contacts"],
  mounted: function () {},
  components: {
    Contact: contact,
    DelButton: delButton,
  },
  methods: {
    goToContactView(contact) {
      console.log("go");
      this.$router.push({
        name: "Contact",
        params: { contact: contact },
      });
    },
  },
};
</script>

<template>
  <div>
    <form action="/action_page.php">
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname" /><br /><br />
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname" /><br /><br />
      <input type="submit" value="Add Contact!" />
    </form>
    <div v-for="contact in contacts" :key="contact.id" class="container">
      <Contact :contact="contact" @click.native="goToContactView(contact)" />
      <DelButton :id="contact.id" />
      <!-- c помощью v-for итерирую массив данных и передаю его в компонент contact через v-bind
             (key обязателен, т.к. без него компилятор ругается)-->
    </div>
  </div>
</template>

<style >
.container {
  display: flex;
  justify-content: start;
}
</style>