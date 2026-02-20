
<template>

    <div class="score-div">
        <img v-for="image in images" :src="image" class="score-star" />
    </div>

</template>

<script setup>

    import {ref} from "vue";

    const props = defineProps(['score']);
    const images = ref([]);
    let remain = props.score;

    for(let i = 0; i < 5; i++){
        if(remain >= 20){
            remain -= 20;
            images.value.push("star-filled.svg");
        }
        else if(remain >= 10){
            remain -= 10;
            images.value.push("star-half-filled.svg");
        }
        else
            images.value.push("star.svg");
    }

</script>