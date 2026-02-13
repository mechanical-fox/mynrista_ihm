
<template>

    <div class="edition-div">
        <p class="basic-text">Title: {{ title }}</p>
        <input type="file" @change="changeImage($event)"/>

        <img v-if="data" id="edition-image" :src="data" class="edition-image" alt="something"/>
        
    </div>

</template>


<script setup>

    import {ref} from 'vue';
    import { Util } from '../script/Util';

    const props = defineProps(['title']);
    const title = ref(props.title);
    const data = ref("");

    /** Change the image displayed on screen, by the image given by the user */
    async function changeImage(event){

        let sleepTime = 0;
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);

        while(reader.readyState != FileReader.DONE && sleepTime < 1000){
            await Util.sleep(200);
            sleepTime += 200;
        }

        data.value=`${reader.result}`;
        
    }

</script>