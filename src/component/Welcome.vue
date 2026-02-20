<template>

    <div v-if="isLoaded" id="welcome-div" class="welcome-div">
        <p class="welcome-top-title">Nouveautés et Tendances</p>
        <div class="welcome-div-top">
            <div v-for="visual in topRecent" class="welcome-div-inline" @mouseover="mouseOver(visual.id)" @mouseout="mouseOut(visual.id)">
                <img :id="visual.id" :src="visual.image_base64" class="welcome-image" />
                <p :class="visual.style">{{ visual.title }}</p>
            </div>
        </div>

        <ScoreBar score="30"></ScoreBar>
        <ScoreBar score="67"></ScoreBar>
    </div>

    <div v-if="!isRecentlyOpened && !isLoaded" class="flex-line-center">
        <div class="loading-circle"></div>
    </div>
    

</template>

<script setup>

    import {ref} from "vue";
    import { API_Util } from "../script/API_Util";
    import { EErrorCode } from "../script/EErrorCode";
    import { MessageUtil } from "../script/MessageUtil";
    import {Util} from "../script/Util";
    import ScoreBar from "./ScoreBar.vue";

    const DELAY_BEFORE_LOADING_CIRCLE = 1200;
    let topRecent = ref([]);
    let isRecentlyOpened = ref(true);
    let isLoaded = ref(false);
    loadData();

    async function loadData(){
        let answer = await API_Util.get("/visual-novel/top-new");

        if(answer.hasFailed && answer.errorCode == EErrorCode.ERROR_CONNECTION){
            MessageUtil.call("logError", ["ERR_CONNECT", "Erreur de connexion au serveur"]);
            isLoaded.value = true;
        }
            
        else if(answer.hasFailed && answer.errorCode == EErrorCode.ERROR_STATUS_CODE){
            MessageUtil.call("logError", [answer.status, "Une erreur innatendue s'est produite. Veuillez réesayer ultérieurement."]);
            isLoaded.value = true;
        }
        else{
            if(answer.data.length && answer.data.length <= 4)
                topRecent.value = answer.data;
            else if(answer.data.length && answer.data.length >= 4)
                topRecent.value = answer.data.slice(0,4);

            for(let visual of topRecent.value){
                visual.style = ref(`welcome-top-text`);
                visual.id = `visual-novel-${visual.id}`;
            }   

            isLoaded.value = true;
        }
        
    }

    async function mouseOver(id){
        for(let visual of topRecent.value){
            if(visual.id == id){
                visual.style = `welcome-top-text-selected`;
            }
        }
    }

    async function mouseOut(id){
        for(let visual of topRecent.value){
            if(visual.id == id){
                visual.style = `welcome-top-text`;
            }
        }
    }


    Util.createTimer("timerWelcome", ()=>isRecentlyOpened.value = false, DELAY_BEFORE_LOADING_CIRCLE);
    Util.startTimer("timerWelcome");

</script>