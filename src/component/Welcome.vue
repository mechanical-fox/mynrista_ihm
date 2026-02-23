<template>

    <div v-if="isLoaded" id="welcome-div" class="welcome-div">
        <p class="welcome-top-title">Nouveautés et Tendances</p>
        <div class="welcome-div-top-trend">
            <div v-for="visual in topRecent" class="welcome-div-inline" @mouseover="mouseOver(visual.id)" @mouseout="mouseOut(visual.id)">
                <img :src="visual.image_base64" class="welcome-image" />
                <p :class="visual.style">{{ visual.title }}</p>
            </div>
        </div>

        <div class="welcome-div-top-rating">
            <p class="welcome-top-title-2">Meilleures Evaluations</p>
            <hr class="hr-rating-2"/>
        
            <div v-for="visual in topRating" class="flex-column">
            
                <div :class="visual.style" @mouseover="mouseOver(visual.id)" @mouseout="mouseOut(visual.id)">
                    <img :src="visual.image_base64" class="welcome-image-rating" />
                    <div class="welcome-rating-item-right">
                        <p class="welcome-rating-text">{{ visual.title }}</p>
                        <div class="flex-line">
                            <ScoreBar :score="visual.percentPositiveEvaluationOnSteam"></ScoreBar>
                            <p class="welcome-rating-date">{{ visual.textReleaseDate }}</p>
                        </div>
                        
                    </div>
                
                </div>
                <hr v-if="lastRatingId != visual.id" class="hr-rating"/>
            </div>
            
        </div>

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
    let topRating = ref([]);
    let lastRatingId = ref(null);
    let isRecentlyOpened = ref(true);
    let isLoaded = ref(false);
    loadData();

    async function loadData(){
        let answer = await API_Util.get("/visual-novel/top-new");
        let answer2 = await API_Util.get("/visual-novel/top-rating");

        if(answer.hasFailed && answer.errorCode == EErrorCode.ERROR_CONNECTION){
            MessageUtil.call("logError", ["ERR_CONNECT", "Erreur de connexion au serveur"]);
            isLoaded.value = true;
        }
        else if(answer2.hasFailed && answer2.errorCode == EErrorCode.ERROR_CONNECTION){
            MessageUtil.call("logError", ["ERR_CONNECT", "Erreur de connexion au serveur"]);
            isLoaded.value = true;
        }
        else if(answer.hasFailed && answer.errorCode == EErrorCode.ERROR_STATUS_CODE){
            MessageUtil.call("logError", [answer.status, "Une erreur innatendue s'est produite. Veuillez réesayer ultérieurement."]);
            isLoaded.value = true;
        }
        else if(answer2.hasFailed && answer2.errorCode == EErrorCode.ERROR_STATUS_CODE){
            MessageUtil.call("logError", [answer2.status, "Une erreur innatendue s'est produite. Veuillez réesayer ultérieurement."]);
            isLoaded.value = true;
        }
        else{
            topRecent.value = answer.data;
            topRating.value = answer2.data;

            for(let visual of topRecent.value){
                visual.style = ref(`welcome-top-text`);
                visual.id = `top-recent-${visual.id}`;
            }   

            for(let visual of topRating.value){
                visual.style = ref(`welcome-div-top-rating-item`);
                visual.id = `top-rating-${visual.id}`;
            }   

            if(topRating.value && topRating.value.length)
                lastRatingId.value = topRating.value[topRating.value.length - 1].id;

            isLoaded.value = true;
        }
        
    }

    async function mouseOver(id){
        for(let visual of topRecent.value){
            if(visual.id == id)
                visual.style = `welcome-top-text-selected`;
        }

        for(let visual of topRating.value){
            if(visual.id == id)
                visual.style = `welcome-div-top-rating-item-selected`;
        }
    }

    async function mouseOut(id){
        for(let visual of topRecent.value){
            if(visual.id == id){
                visual.style = `welcome-top-text`;
            }
        }

        for(let visual of topRating.value){
            if(visual.id == id)
                visual.style = `welcome-div-top-rating-item`;
        }
    }


    Util.createTimer("timerWelcome", ()=>isRecentlyOpened.value = false, DELAY_BEFORE_LOADING_CIRCLE);
    Util.startTimer("timerWelcome");

</script>