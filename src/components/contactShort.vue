<template>
  <div>
    {{contact.name}} {{contact.surname}}
  </div>
</template>

<script>

export default ({
  props: ["contact"]
})
</script>



<style scoped>
div{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  border-radius: 14px;
  box-sizing: border-box;
  margin: 0.5rem 0 0.5rem 0;
  border: 0.5rem solid navajowhite;
  width: 100%;
  height: 6em;
}
div:hover{
  background-color: lightslategray;
}
</style>


