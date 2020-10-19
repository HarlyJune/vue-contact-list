<template>
    <div>
        <div v-for="key in Object.keys(contact)"
             :key="key"
             class="row"
        >
            {{key}} : {{contact[key]}}
        </div>

    </div>
</template>

<script>
    export default ({
        props: ["contact"]
    })
</script>



<style scoped>
    .row{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 6em;
        border: 1px solid tomato;
        border-radius: 14px;
    }
</style>


