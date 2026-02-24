
<template>

    <div v-if="isLoaded" class="description-global-div">
        <div class="description-left-div">
            <img :src="visual.image_base64" class="description-image" />
            <p class="description-summary">{{ visual.summary }}</p>
            <div>
                <p class="description-date-text-left">Date de parution:</p>
                <p class="description-date-text-right">{{ visual.textReleaseDate }}</p>
            </div> 
        </div>
        <div class="description-right-div">
            <p class="description-title">{{ visual.title }} </p>
            <ScoreBarB :score="visual.percentPositiveEvaluationOnSteam" class="description-score-bar"/>
            <p class="description-sub-title"> {{ visual.percentPositiveEvaluationOnSteam }} % évaluations positives (Steam)</p>
            <p class="description-sub-title"> {{ visual.numberEvaluationOnSteam }} évaluations (Steam)</p>

            <!--<div v-html="description"> </div>-->
            <!--<div id="here"> </div>-->
            <p v-html="description" class="description-text" ></p>
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
    import ScoreBarB from "./ScoreBarB.vue";

    const props = defineProps(['visual_id']);
    const visual_id = props.visual_id;
    const DELAY_BEFORE_LOADING_CIRCLE = 1200;
    const isLoaded = ref(false);
    const isRecentlyOpened = ref(true);
    const visual = ref(null);
    const description = ref("");

    loadData();
    Util.createTimer("timerWelcome", ()=>isRecentlyOpened.value = false, DELAY_BEFORE_LOADING_CIRCLE);
    Util.startTimer("timerWelcome");

    /** Function that ask to the API the informations about a visual novel, to display them. */
    async function loadData(){
        let answer = await API_Util.get(`/visual-novel/${visual_id}`);

        if(answer.hasFailed && answer.errorCode == EErrorCode.ERROR_CONNECTION){
            MessageUtil.call("logError", ["ERR_CONNECT", "Erreur de connexion au serveur"]);
            isLoaded.value = true;
        }
        else if(answer.hasFailed && answer.errorCode == EErrorCode.ERROR_STATUS_CODE){
            MessageUtil.call("logError", [answer.status, "Une erreur innatendue s'est produite. Veuillez réesayer ultérieurement."]);
            isLoaded.value = true;
        }
        else{
            visual.value = answer.data;
            
            description.value = Util.toHtmlEscaped(answer.data.description);
            isLoaded.value = true;
        }
        
    }

</script>