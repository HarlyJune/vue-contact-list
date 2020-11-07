<script>
import delButton from "./delButton";
import changeButton from "./changeButton";
export default {
  props: ["contact"],
  components: {
    DelButton: delButton,
    ChangeButton: changeButton
  },
};
</script>

<template>
  <div>
    <div>
      <ChangeButton />
      <DelButton />
    </div>
    <div v-for="key in Object.keys(contact)" :key="key" class="row">
      {{ key }} : {{ contact[key] }}
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 6em;
  border: 1px solid tomato;
  border-radius: 14px;
}
</style>


