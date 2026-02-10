
<template>

    <div id="registration-div" class="registration-div">
        <p class="registration-title">Créer un compte</p>

        <div v-if=" user_message == '' || color_message == 'red' " class="flex-line">
            <div class="flex-column">
                <p class="registration-text-input"> Pseudo </p>
                <input id="input-pseudo" v-model="pseudo" class="registration-input"/>
                <p class="registration-text-input"> Email </p>
                <input id="input-email" v-model="email" class="registration-input"/>
            </div>
            <div class="flex-column">
                <p class="registration-text-input"> Mot de Passe </p>
                <input id="input-password-1" v-model="password1" class="registration-input" type="password"/>
                <p class="registration-text-input"> Confirmation Mot de Passe </p>
                <input id="input-password-2" v-model="password2" class="registration-input" type="password"/>
            </div>
        </div>
        
        
        <button id="confirmation-button" v-if=" user_message == '' || color_message == 'red' " class="registration-button" @click="register()"> Inscription </button>

        <p v-if=" user_message != '' && color_message=='green' " v-html="user_message" class="registration-user-message registration-green"></p>
        <p v-if=" user_message != '' && color_message=='red' " v-html="user_message" class="registration-user-message registration-red"></p>

    </div>

</template>



<script setup>


        
    import {ref} from 'vue';
    import {API_Util} from '../script/API_Util';
    import {EErrorCode} from '../script/EErrorCode';
    import {MessageUtil} from '../script/MessageUtil';

    const user_message = ref("");
    const color_message = ref("");

    const pseudo = ref("");
    const email = ref("");
    const password1 = ref("");
    const password2 = ref("");

    /** Check if pseudo, email, and passwords respect basic rules (Filled, Minimum length, password and confirmation password 
     * match... ). Returns true if it's the case, or false in the other cases. Moreover, an error message will be displayed to the 
     * client, if a problem is encountered. */
    async function checkValidity(pseudoValue, emailValue, password, confirmation_password){

        if(password.length < 6){
            user_message.value = "Mot de passe trop court.<br/><br/>";
            user_message.value += "Celui-ci devrait comporter au moins 6 caractères."
            color_message.value = "red";
            return false;
        }
        else if(password != confirmation_password){
            user_message.value = "La vérification des mots de passe est incorrecte.<br/><br/>";
            user_message.value += "Le mot de passe, et la confirmation du mot de passe devraient être identiques."
            color_message.value = "red";
            return false;
        }
        else if(pseudoValue.trim().length < 4){
            user_message.value = "Login trop court.<br/><br/>";
            user_message.value += "Celui-ci devrait comporter au moins 4 caractères."
            color_message.value = "red";
            return false;
        }
        else if(emailValue.trim().length < 4 || !emailValue.includes("@")){
            user_message.value = "Email non valide.";
            color_message.value = "red";
            return false;
        }
        else if(pseudoValue.includes(" ")){
            user_message.value = "Un pseudo ne peut pas contenir d'espaces.";
            color_message.value = "red";
            return false;
        }
        else
            return true;
    }

    /** Check if the pseudo given, and the email given are available. Returns true if it's the case. Returns false if the pseudo
    *  or email is already in use. Moreover, an error message will be displayed to the client, if a problem is encountered. */
    async function checkAvailability(pseudo, email){

        let url = "/users/validity/" + pseudo + "/" + email;
        let answer = await API_Util.get(url);

        if(answer.hasFailed && answer.errorCode == EErrorCode.ERROR_CONNECTION){
            MessageUtil.call("logError", ["ERR_CONNECT", "Erreur de connexion au serveur"]);
            return false;
        }
        else if(answer.hasFailed){
            MessageUtil.call("logError", [answer.status, "Une erreur innatendue s'est produite. Veuillez réesayer ultérieurement."]);
            return false;
        }
        else if(answer.data.pseudoAlreadyExisting == true){
            user_message.value = "Pseudo déjà utilisé.<br/><br/>Merci de choisir un nouveau pseudo.";
            color_message.value = "red";
            return false;
        }
        else if(answer.data.emailAlreadyExisting == true){
            user_message.value = "Email déjà enregistré.<br/><br/>";
            color_message.value = "red";
            return false;
        }
        else
            return true;
        
    }


    /* Chek if register an account, with the informations provided. A confirmation message is displayed on screen, in case of success. An error 
    message is displayed on screen, in case of failure. */
    async function register(){

        let valid = await checkValidity(pseudo.value, email.value, password1.value, password2.value);

        if(valid){
            let available = await checkAvailability(pseudo.value, email.value);

            if(available){
                user_message.value = "";
                color_message.value = "";
                let body = {
                    pseudo : pseudo.value,
                    email : email.value,
                    password : password1.value
                };
                
                let answer = await API_Util.post("/users", body);
                

                if(answer.hasFailed)
                    MessageUtil.call("logError", [answer.status, "Une erreur innatendue s'est produite. Veuillez réesayer ultérieurement."]);
                else{
                    user_message.value = "Inscription prise en compte.<br/><br/>";
                    user_message.value += "Un email vous a été envoyé, afin de confirmer la création de votre compte."
                    color_message.value = "green";
                }
            }

        }

    }

    
</script>

