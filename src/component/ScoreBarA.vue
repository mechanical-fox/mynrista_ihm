
<template>

    <div class="score-a-div">
        <img v-for="image in images" :src="image" class="score-a-star" />
    </div>

</template>

<script setup>

    import {ref} from "vue";

    const props = defineProps(['score']);
    const images = ref([]);

    let remain = props.score;

    if(remain >= 95)
        remain = 100;

    for(let i = 0; i < 5; i++){
        if(remain >= 20){
            remain -= 20;
            images.value.push("images/star-filled.svg");
        }
        else if(remain >= 10){
            remain -= 10;
            images.value.push("images/star-half-filled.svg");
        }
        else
            images.value.push("images/star.svg");
    }

</script>