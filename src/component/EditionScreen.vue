
<template>

    <div class="edition-div">

        <div class="flex-column">
            <img v-if="data" id="edition-image" :src="data" class="edition-image" alt="something"/>
            <p class="edition-text-title"> Title </p>
            <p id="display-title" class="edition-text"> {{ title }}</p>
            <p class="edition-text-title"> Image (465 * 215) </p>
            <input type="file" class="edition-browse-image-button" @change="changeImage($event)"/>
            <p class="edition-text-title"> Date de parution </p>
            <input id="input-date" v-model="release_date" type="date" class="edition-input-date"/>
            <p class="edition-text-title"> Pourcentage d'évaluations Positives (Steam) </p>
            <input id="input-percent-evaluation" v-model="percent_evaluation" class="edition-input-number" type="number"/>
            <p class="edition-text-title"> Nombre d'évaluations (Steam) </p>
            <input id="input-number-evaluation" v-model="number_evaluation"  class="edition-input-number" type="number"/>
            <p class="edition-text-title"> Tags </p>
            <div class="edition-tag-flex">
                <div v-for="tag in tags" class="edition-tag-flex2">
                    <p class="edition-tag-name">{{ tag.name }}</p>
                    <input :id="tag.id" v-model="tag.checked" type="checkbox" class="edition-tag-checkbox"/>
                </div>
            </div>
            <p class="edition-text-title"> Sommaire </p>
            <textarea id="input-summary" v-model="summary" class="edition-textarea" rows="6" cols="60" spellcheck="false"></textarea>
            <p class="edition-text-title"> Description </p>
            <textarea id="input-description" v-model="description" class="edition-textarea" rows="12" cols="60" spellcheck="false"></textarea>
        </div>
        
        <p v-if=" error_message != ''" v-html="error_message" class="edition-error-message"></p>

        <div class="flex-line">
            <button id="edition-save-button" class="edition-button" @click="save()"> Enregistrer </button>
            <button id="edition-cancel-button" class="edition-button" @click="cancel()"> Annuler </button>
        </div>
       
        
    </div>

</template>


<script setup>

    import {ref} from 'vue';
    import { Util } from '../script/Util';
    import { API_Util } from '../script/API_Util';
    import { MessageUtil } from '../script/MessageUtil';
    import { EErrorCode } from '../script/EErrorCode';

    const DEFAULT_IMAGE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAAXNSR0IB2" + 
    "cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAlwSFlzAAAuIwAALiM" + 
    "BeKU/dgAAAAd0SU1FB+oCDQgYNrATRYEAAAAVSURBVBjTY1y/fj0DbsDEgBeMVGkAhRQCISTTBI4AAAAASUVORK5CYII=";

    const AVAILABLE_TAGS = ["Casual", "Fantasy", "Aventure", "Mystère", "Comédie", "Otome", "Fin multiples", 
        "LGBTQ+", "Indépendant", "Philosophique"];

    const props = defineProps(['title','edit_id']);
    const emit = defineEmits(['submit']);
    const title = props.title;
    const edit_id = props.edit_id;
    const data = ref(DEFAULT_IMAGE);
    const error_message = ref("");
    const summary = ref("");
    const description = ref("");
    const percent_evaluation = ref("");
    const number_evaluation = ref("");
    const EDITION_MESSAGE_TIME_MS = 8000;
    const release_date = ref(null);
    const tags = ref([]);
    
    Util.createTimer("EditionErrorTimer",()=>clearEditionError(), EDITION_MESSAGE_TIME_MS);

    if(edit_id != null)
        loadData(edit_id);

    for(let i = 0; i < AVAILABLE_TAGS.length;i++)
        tags.value.push({ id: `tag-${i + 1}`, name: AVAILABLE_TAGS[i], checked : false});

    /** In the inputs field, change the values with the informations retrieved from the API for this visual novel. This function is called only
     * if the user edit an existing Visual Novel, and not when there is a creation.*/
    async function loadData(id){

        let answer = await API_Util.get(`/visual-novel/${id}`);

        if(answer.hasFailed && answer.errorCode == EErrorCode.ERROR_CONNECTION){
            MessageUtil.call("logError", ["ERR_CONNECT", "Erreur de connexion au serveur"]);
            emit("submit"); //return to the previous page
        }
        else if(answer.hasFailed){
            MessageUtil.call("logError", [answer.status, "Une erreur innatendue s'est produite. Veuillez réesayer ultérieurement."]);
            emit("submit"); //return to the previous page
        } 
        
        data.value = answer.data.image_base64;
        description.value = answer.data.description;
        summary.value = answer.data.summary;
        percent_evaluation.value = answer.data.percentPositiveEvaluationOnSteam;
        number_evaluation.value = answer.data.numberEvaluationOnSteam;
        release_date.value = Util.toDateFormatIHM(answer.data.releaseDate);

        for(let tagAPI of answer.data.tags){
            for(let tagIHM of tags.value){
                if(tagAPI == tagIHM.name)
                    tagIHM.checked = true;
            }
        }
    }

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

    /** A function to cancel the creation, or the edition of a Visual Novel */
    function cancel(){
        emit("submit");
    }

    /** A function than check if all fields are correctly filled. If yes will return true, else will return false and
     * display an error message to the user.*/
    function formValid(){
        if(summary.value.trim() == ""){
            error_message.value = "Le champ sommaire est obligatoire, afin de créer une nouvelle page.";
            Util.startTimer("EditionErrorTimer");
            return false;
        }
        else if(description.value.trim() == ""){
            error_message.value = "Le champ description est obligatoire, afin de créer une nouvelle page.";
            Util.startTimer("EditionErrorTimer");
            return false;
        }
        else if(percent_evaluation?.value?.trim && percent_evaluation.value.trim() != "" && !Number.isInteger(number_evaluation.value)){
            error_message.value = " Pourcentage d'évaluations Positives (Steam) doit être un entier.";
            Util.startTimer("EditionErrorTimer");
            return false;
        }
        else if(number_evaluation?.value?.trim && number_evaluation.value.trim() != "" && !Number.isInteger(number_evaluation.value)){
            error_message.value = "Nombre d'évaluations (Steam) doit être un entier.";
            Util.startTimer("EditionErrorTimer");
            return false;
        }

        return true;
    }

    /** Register the Visual Novel in the database if the informations filled are correct. An error message is displayed to the client
     * if some informations are missing.*/
    async function save(){

        if(formValid()){

            let percentPositiveEvaluationOnSteam = !percent_evaluation?.value?.trim  || percent_evaluation.value.trim() == "" ? percent_evaluation.value : null;
            let numberEvaluationOnSteam  = !number_evaluation?.value?.trim  || number_evaluation.value.trim() == "" ? number_evaluation.value : null;
            let tagsList = [];
            
            for(let tag of tags.value){
                if(tag.checked)
                    tagsList.push(tag.name);
            }

            let body = {
                title : title,
                releaseDate : Util.toDateFormatAPI(release_date.value),
                percentPositiveEvaluationOnSteam : percentPositiveEvaluationOnSteam,
                numberEvaluationOnSteam :  numberEvaluationOnSteam,
                tags: tagsList,
                description : description.value,
                summary : summary.value,
                image_base64 : data.value  
            };
            let token = MessageUtil.getVar("token");
            let answer = null;

            if(edit_id == null)
                answer = await API_Util.postAuth("/visual-novel", body, token);
            else
                answer = await API_Util.putAuth(`/visual-novel/${edit_id}`, body, token);

            if(answer.hasFailed && answer.errorCode == EErrorCode.ERROR_CONNECTION)
                MessageUtil.call("logError", ["ERR_CONNECT", "Erreur de connexion au serveur"]);
            else if(answer.hasFailed)
                MessageUtil.call("logError", [answer.status, "Une erreur innatendue s'est produite. Veuillez réesayer ultérieurement."]);
            else
                emit("submit");
        }

    }

    

</script>