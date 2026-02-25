


<template>

    <div class="banner">
        <div class="flex-line-end">

            <div v-if="!connected" class="nav-div-3">
                <button id="signin-button" class="nav-button" @click="select('Login')"> Connexion </button>
                <button id="signup-button" class="nav-button" @click="select('Registration')"> Inscription </button>
            </div>
            <img v-if="connected" id="user_image" class="nav-user-image" src="/user.svg"/>
            <p v-if="connected" id="user_pseudo" class="nav-pseudo"> {{ pseudo }}</p>
        </div>
        <div class="flex-line-align-top">
            <div class="nav-div-1">
                <p class="title">Mynrista</p>
            </div>
            <div class="nav-div-2">
                <div  id="item-bar" class="flex-line">
                    <div v-for="item in items" class="div-for">
                        <p v-if="selected == item.text" :id="item.id" class="item-activated">{{ item.text }}</p>
                        <p v-else class="item-desactivated" :id="item.id" @click="select(item.text)" >{{ item.text }}</p>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    

    <Welcome v-if="selected=='Accueil'" @requestVisual="showVisual($event)"/>
    <Category v-if="selected=='Catégories'" @requestVisual="showVisual($event)"/>
    <About v-if="selected=='A propos'" />
    <Publishing v-if="selected=='Publication'" />
    <Registration v-if="selected=='Registration'" />
    <Login v-if="selected=='Login'" />
    <Description v-if="selected=='Description'" :visual_id="idVisualRequested"/>

    <p v-if="error_message" class="error-message">
        <b>{{ error_title }}</b>
        <br/><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;
        {{ error_message }}
    </p>

</template>


<script setup>
        
    import {ref} from 'vue';
    import {MessageUtil} from '../script/MessageUtil';
    import {Util} from '../script/Util';

    import Welcome from './Welcome.vue';
    import About from './About.vue';
    import Registration from './Registration.vue';
    import Publishing from './Publishing.vue';
    import Login from './Login.vue';
    import Description from './Description.vue';
    import Category from './Category.vue';


    const MESSAGE_TIME_MS = 8000;

    const items = ref([]);
    items.value.push({id : "welcome-item", text : "Accueil"});
    items.value.push({id : "category-item", text : "Catégories"});
    items.value.push({id : "about-item", text : "A propos"});
    const selected = ref("Accueil");
    const idVisualRequested = ref(null);
    const error_title = ref("");
    const error_message = ref("");
    const connected = ref(false);
    const pseudo = ref("");

    /** A function to redirect toward the page Description, giving informations about the visual novel of id
    * "event.id" */
    function showVisual(event){
        idVisualRequested.value = event.id;
        selected.value = "Description";
    }

    /** A function to change what page is shown */
    function select(item){
        selected.value = item;
    }

    /** Clear the errors displayed in the page */
    function clearError(){
        error_title.value = "";
        error_message.value = "";
    }


    /** A function than given an array string of two arguments, will display the user as connected.
     * The first argument must be the pseudo to display. The second argument must be the token to use when
     * calling the server. */
    function connect(args){

        if(args.length == undefined || args.length != 2)
            console.warn("Function connect uncorrectly called");
        else{
            let argPseudo = args[0];
            let argToken = args[1];
            MessageUtil.setVar("token", argToken);
            selected.value = "Accueil";
            pseudo.value = argPseudo;
            connected.value = true;
            items.value.push({id : "publishing-item", text : "Publication"});
        }
        
    }

    /** A function than given an array string of two arguments, will display the error.
     * The first argument must be the error_title. The second argument must be the error_message.*/
    function logError(args){

        if(args.length == undefined || args.length != 2)
            console.warn("Function logError uncorrectly called");
        else{
            error_title.value = args[0];
            error_message.value = args[1];
            Util.startTimer("ErrorTimer");
        }

    }

    Util.createTimer("ErrorTimer",()=>clearError(), MESSAGE_TIME_MS);
    MessageUtil.listen("logError", (args)=>logError(args));
     MessageUtil.listen("connect", (args)=>connect(args));

</script>


