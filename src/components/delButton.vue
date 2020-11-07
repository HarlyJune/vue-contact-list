<script>
    export default({
        props:["id"],
        methods:{
            remove(){
                console.log("emitted");
                this.$root.$emit('remove-contact', this.id)
            }
        }
    })
</script>

<template>
    <div>
        <button @click="remove">Delete!</button>
    </div>
</template>
