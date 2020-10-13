<template>
  <div>
    <button>Add contact</button>
    <div>
      <ul>
        <Contact />
        <!-- c помощью v-for итерирую массив данных и передаю его в компонент contact через v-bind 
         (key обязателен, т.к. без него компилятор ругается)-->
      </ul>
    </div>
  </div>
</template>

<script>
import Contact from "@/components/contact";
export default {
  props: ["contacts"],
  components: {
    Contact,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>