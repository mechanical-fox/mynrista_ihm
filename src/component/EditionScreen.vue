
<template>

    <div class="edition-div">
        <p class="basic-text">Title: {{ title }}</p>
        <input type="file" @change="changeImage($event)"/>
        <img src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA
    AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO
        9TXL0Y4OHwAAAABJRU5ErkJggg==" alt="Red dot" />
        <img class="edition-image" src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA
    AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO
        9TXL0Y4OHwAAAABJRU5ErkJggg==" alt="Red dot" />
        <image id="edition-image" :src="data" class="edition-image" alt="something"/>
        <text>{{ data }}</text>

    </div>

</template>


<script setup>

    import {ref} from 'vue';
    import { Util } from '../script/Util';

    const props = defineProps(['title']);
    const title = ref(props.title);
    const imageLoaded = ref(false);
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

        console.log(`ReaderResult: ${reader.result}`);
        imageLoaded.value = true;
        await Util.sleep(200);
        data.value=reader.result;
        //let node = document.getElementById("edition-image");
        //node.setAttribute("src",reader.result);
        /*img.src = window.URL.createObjectURL(node.value);
		console.log("src: " + img.src);
		console.log("width: " + img.width + " / height: " + img.height);*/
        
    }

</script>