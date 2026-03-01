

<template>

<div v-if="isLoaded">


    <div class="category-tag-panel">

        <div :id="tag.id" v-for="tag in tags" :class="tag.div_style" @click="clickTag(tag.name)" @mouseover="mouseOverTag(tag.name)" @mouseout="mouseOutTag(tag.name)">
            <img  :src="tag.image" class="category-tag-image"/>
            <p :class="tag.text_style">{{ tag.name }}</p>
        </div>

    </div>

    <div class="category-visual-global-div">
        <div v-for="visual in selectedVisualNovels" class="category-visual-second-div" @mouseover="mouseOverVisual(visual.htmlId)"
        @mouseout="mouseOutVisual(visual.htmlId)" @click="requestVisualNovel(visual.id)">
            <img :src="visual.image_base64" class="category-visual-image" />
            <p :class="visual.style">{{ visual.title }}</p>
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


    const DELAY_BEFORE_LOADING_CIRCLE = import.meta.env.VITE_DELAY_BEFORE_LOADING_CIRCLE;
    const emit = defineEmits(['requestVisual']);
    let visualNovels = ref([]);
    let selectedVisualNovels = ref([]);
    let tags = ref([]);
    let isRecentlyOpened = ref(true);
    let isLoaded = ref(false);

    loadData();
    Util.createTimer("timerWelcome", ()=>isRecentlyOpened.value = false, DELAY_BEFORE_LOADING_CIRCLE);
    Util.startTimer("timerWelcome");



    /** Change on page the visual novel, to match only the tags selected. Will not reload the data, and will
     * not call the API. If you wish to call the API again, the function loadData() must be used. */
    function refreshVisualNovel(){

        let newValue = [];

        for(let visualNovel of visualNovels.value){

            let selected = true;

            for(let tagB of tags.value){
                if(tagB.selected){
                    let found = false;

                    for(let tagA of visualNovel.tags){
                        if(tagA == tagB.name)
                            found = true;
                    }

                    selected = selected && found;
                }
            }

            if(selected){
                visualNovel.style = ref(`category-visual-text`);
                visualNovel.htmlId = `visual-${visualNovel.id}`;
                newValue.push(visualNovel);
            }
        }

        selectedVisualNovels.value = newValue;
    }

    /** Function called when the user click on a tag */
    function clickTag(name){
        for(let tag of tags.value){
            if(tag.name == name){
                if(tag.selected){
                    tag.selected = false;
                    tag.div_style = "category-tag-div";
                    tag.image = "/images/tag.svg";
                    tag.text_style =  "category-tag-text";
                }
                else{
                    tag.selected = true;
                    tag.div_style = "category-tag-div-selected";
                    tag.image = "/images/tag-selected.svg";
                    tag.text_style = "category-tag-text-selected";
                }
            }
        }

        refreshVisualNovel();
    }

    /** Function called when the mouse is on a tag - it change the color of the tag but don't select it */
    function mouseOverTag(name){
        for(let tag of tags.value){
            if(tag.name == name){
                tag.div_style = "category-tag-div-selected";
                tag.image = "/images/tag-selected.svg";
                tag.text_style = "category-tag-text-selected";
            }
        }
    }

    /** Function called when the mouse is over a Visual Novel. It change the presentation of the Visual Novel, to show that the 
    * VisualNovel is selected */
    function mouseOverVisual(htmlId){
        for(let visual of selectedVisualNovels.value){
            if(visual.htmlId == htmlId)
                visual.style = `category-visual-text-selected`;
        }
    }

    /** Function called when the mouse is no longer over a Visual Novel. It change the presentation of the Visual Novel, to show that the 
    * VisualNovel is no longer selected */
    function mouseOutVisual(htmlId){
        for(let visual of selectedVisualNovels.value){
            if(visual.htmlId == htmlId)
                visual.style = `category-visual-text`;
        }
    }

    /** A function to request to be redirected to the page, of the visual novel with the id given in parameter. */
    async function requestVisualNovel(id){
        emit("requestVisual", {id : id});
    }

    /** Function called when the mouse is no longer on a tag - it change the color of the tag if necessary */
    function mouseOutTag(name){
        for(let tag of tags.value){
            if(tag.name == name && tag.selected == false){
                tag.div_style = "category-tag-div";
                tag.image = "/images/tag.svg";
                tag.text_style = "category-tag-text";
            }
        }
    }

    /** Function that ask to the API all the visual novels. After this function, the page will be loaded. 
     * Before than, a loading circle will be present. */
    async function loadData(){
        let answer = await API_Util.get("/visual-novel");
        

        if(answer.hasFailed && answer.errorCode == EErrorCode.ERROR_CONNECTION){
            MessageUtil.call("logError", ["ERR_CONNECT", "Erreur de connexion au serveur"]);
            isLoaded.value = true;
        }
        else if(answer.hasFailed && answer.errorCode == EErrorCode.ERROR_STATUS_CODE){
            MessageUtil.call("logError", [answer.status, "Une erreur innatendue s'est produite. Veuillez réesayer ultérieurement."]);
            isLoaded.value = true;
        }
        else{
            visualNovels.value = answer.data;
            isLoaded.value = true;
            let inserted = [];
            tags.value = [];

            for(let visualNovel of answer.data){
                for(let tag of visualNovel.tags){
                    if(!inserted.includes(tag)){

                        let id = `tag-${tag.toLowerCase().replaceAll(" ", "-")}`;

                        let item = {
                            id : id,
                            name: tag, 
                            selected: false,
                            div_style : "category-tag-div", 
                            image : "/images/tag.svg", 
                            text_style : "category-tag-text"
                        };

                        tags.value.push(item);
                        inserted.push(tag);
                    }
                }
            }

            if(tags.value.length > 0){
                tags.value[0].selected = true;
                tags.value[0].div_style = "category-tag-div-selected";
                tags.value[0].image = "/images/tag-selected.svg";
                tags.value[0].text_style = "category-tag-text-selected";
            }

            refreshVisualNovel();
                
        }
        
    }

</script>