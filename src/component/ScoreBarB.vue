
<template>

    <div class="score-b-div">
        <img v-for="image in images" :src="image" class="score-b-star" />
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
            images.value.push("star-filled-b.svg");
        }
        else if(remain >= 10){
            remain -= 10;
            images.value.push("star-half-filled-b.svg");
        }
        else
            images.value.push("star-b.svg");
    }

</script>