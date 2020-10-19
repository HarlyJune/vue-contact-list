<template>
  <div>
    <button>Add contact</button>
    <div class="container">
        <Contact
            v-for="contact in contacts"
            :key="contact.id"
            :contact="contact"
            @click.native="goToContactView(contact)"
        />
        <!-- c помощью v-for итерирую массив данных и передаю его в компонент contact через v-bind
         (key обязателен, т.к. без него компилятор ругается)-->
    </div>
  </div>
</template>

<script>
import contact from "./contactShort";
export default {
    props: ["contacts"],
    components: {
      Contact: contact,
    },
    methods: {
        goToContactView(contact){
            console.log("go")
            this.$router.push({
                name: 'Contact',
                params: { contact : contact }
            });
        }
    }
};
</script>

<style >
  .container{
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
</style>