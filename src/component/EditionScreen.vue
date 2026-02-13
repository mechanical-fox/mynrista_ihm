
<template>

    <div class="edition-div">

        <div class="flex-column">
            <img v-if="data" id="edition-image" :src="data" class="edition-image" alt="something"/>
            <p class="edition-text-title"> Title </p>
            <p class="edition-text"> {{ title }}</p>
            <p class="edition-text-title"> Image (465 * 215) </p>
            <input type="file" class="edition-browse-image-button" @change="changeImage($event)"/>
            <p class="edition-text-title"> Description </p>
            <textarea v-model="description" class="edition-textarea" rows="12" cols="60" ></textarea>
        </div>
        
        <p v-if=" error_message != ''" v-html="error_message" class="edition-error-message"></p>
        <button id="edition-save-button" class="edition-save-button" @click="save()"> Enregistrer </button>
       
        
        
    </div>

</template>


<script setup>

    import {ref} from 'vue';
    import { Util } from '../script/Util';

    const imageDefault = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAAXNSR0IB2" + 
    "cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAlwSFlzAAAuIwAALiM" + 
    "BeKU/dgAAAAd0SU1FB+oCDQgYNrATRYEAAAAVSURBVBjTY1y/fj0DbsDEgBeMVGkAhRQCISTTBI4AAAAASUVORK5CYII=";

    const props = defineProps(['title']);
    const title = ref(props.title);
    const data = ref(imageDefault);
    const error_message = ref("");
    const description = ref("");
    const EDITION_MESSAGE_TIME_MS = 8000;

    /** Change the image for the visual novel displayed on screen, by the image given by the user. The parameter is an event
     * received during the event "change" of an input of type file.*/
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

    /** Erase the error message displayed to the client on screen */
    async function clearEditionError(){
        error_message.value = "";
    }

    /** Register the Visual Novel in the database if the informations filled are correct. An error message is displayed to the client
     * if some informations are missing.*/
    async function save(){
        if(description.value.trim() == ""){
            error_message.value = "Le champ description est obligatoire, afin de finaliser l'enregistrement.";
            Util.startTimer("EditionErrorTimer");
        }
    }

    Util.createTimer("EditionErrorTimer",()=>clearEditionError(), EDITION_MESSAGE_TIME_MS);

</script>