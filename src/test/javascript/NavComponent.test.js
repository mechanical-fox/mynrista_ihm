
import Nav from '../../component/Nav.vue';

import {mount} from "@vue/test-utils";
import { expect, test, beforeAll} from 'vitest';

import {Helper} from './helpers/Helper';
import {Provider} from '../../script/Provider';
import { FetchMock } from "./helpers/FetchMock";




beforeAll(()=>{
    Provider.mockFetch((url, options)=> FetchMock.fetch(url, options));
});

test(`La page affichée change lorsque je clique sur l'item "A propos"`, async ()=>{


    const wrapper = mount(Nav);

    await Helper.sleep(300);
    expect(wrapper.find("#welcome-div").exists()).toBe(true);
    expect(wrapper.find("#welcome-div").text()).toContain("Nouveautés et Tendances");

    await wrapper.find("#about-item").trigger("click");

    expect(wrapper.find("#about-div").exists()).toBe(true);
    expect(wrapper.find("#about-div").text()).toContain("Site créé avec les technologies Java 25, et Vue 3.5");
    
});


test("Impossible de s'enregistrer avec un mot de passe < 6 caractères", async ()=>{


    const wrapper = mount(Nav);

    expect(wrapper.find("#signup-button").exists()).toBe(true);

    await wrapper.find("#signup-button").trigger("click");

    await wrapper.find("#input-pseudo").setValue("Shuumei");
    await wrapper.find("#input-email").setValue("shuumei.studart@gmail.com");
    await wrapper.find("#input-password-1").setValue("b4dl");
    await wrapper.find("#input-password-2").setValue("b4dl");

    await wrapper.find("#confirmation-button").trigger("click");
    
    expect(wrapper.find("#registration-div").text()).toContain("Mot de passe trop court.");
    expect(wrapper.find("#registration-div").text()).toContain("Celui-ci devrait comporter au moins 6 caractères.");
    
});


test("Impossible de s'enregistrer avec un email déjà utilisé", async ()=>{


    const wrapper = mount(Nav);

    expect(wrapper.find("#signup-button").exists()).toBe(true);

    await wrapper.find("#signup-button").trigger("click");

    await wrapper.find("#input-pseudo").setValue("Wolf");
    await wrapper.find("#input-email").setValue("wolf.studart@gmail.com");
    await wrapper.find("#input-password-1").setValue("b4dl5f");
    await wrapper.find("#input-password-2").setValue("b4dl5f");


    await wrapper.find("#confirmation-button").trigger("click");
    
    await Helper.sleep(500);
    expect(wrapper.find("#registration-div").text()).toContain("Email déjà enregistré.");
    
});

test("L'inscription est un succès, quand toutes les informations remplis sont correctes", async ()=>{


    const wrapper = mount(Nav);

    expect(wrapper.find("#signup-button").exists()).toBe(true);

    await wrapper.find("#signup-button").trigger("click");

    await wrapper.find("#input-pseudo").setValue("Shuumei");
    await wrapper.find("#input-email").setValue("shuumei.studart@gmail.com");
    await wrapper.find("#input-password-1").setValue("b4dl5f");
    await wrapper.find("#input-password-2").setValue("b4dl5f");


    await wrapper.find("#confirmation-button").trigger("click");
    
    await Helper.sleep(500);
    expect(wrapper.find("#registration-div").text()).toContain("Inscription prise en compte.");
    
});

test("Un message d'erreur apparait en cas de mot de passe erroné", async ()=>{


    const wrapper = mount(Nav);

    expect(wrapper.find("#signin-button").exists()).toBe(true);
    await wrapper.find("#signin-button").trigger("click");
    await wrapper.find("#input-email").setValue("itsuki@gmail.com");
    await wrapper.find("#input-password").setValue("-----");
    await wrapper.find("#connection-button").trigger("click");

    await Helper.sleep(500);
    expect(wrapper.find("#login-div").text()).toContain("Email, ou mot de passe incorrect");
    
});


test("Après une connexion réussie, pseudo et image sont visibles", async ()=>{


    const wrapper = mount(Nav);

    expect(wrapper.find("#signin-button").exists()).toBe(true);
    await wrapper.find("#signin-button").trigger("click");
    await wrapper.find("#input-email").setValue("itsuki@gmail.com");
    await wrapper.find("#input-password").setValue("Sky@Rim&");
    await wrapper.find("#connection-button").trigger("click");
    
    await Helper.sleep(500);
    expect(wrapper.find("#user_image").exists()).toBe(true);
    expect(wrapper.find("#user_pseudo").exists()).toBe(true);
    expect(wrapper.find("#user_pseudo").text()).toContain("Itsuki");
    
});



test("Cliquer sur un Visual Novel du Top Nouveautés et Tendances affiche les informations sur le Visual Novel", async ()=>{

    const wrapper = mount(Nav);

    await Helper.sleep(300);

    expect(wrapper.find("#top-recent-3").exists()).toBe(true);
    expect(wrapper.find("#top-recent-3").text()).toContain("Kiss/OFF");

    wrapper.find("#top-recent-3").trigger("click");
    await Helper.sleep(300);

    expect(wrapper.text()).toContain("Kiss/OFF is an action-packed visual novel");
    expect(wrapper.text()).toContain("31 mars 2024");
    expect(wrapper.text()).toContain("92 % évaluations positives (Steam)");
});

test("Cliquer sur un Visual Novel du Top Meilleurs évaluations affiche les informations sur le Visual Novel", async ()=>{

    const wrapper = mount(Nav);

    await Helper.sleep(300);

    expect(wrapper.find("#top-rating-2").exists()).toBe(true);
    expect(wrapper.find("#top-rating-2").text()).toContain("Twofold");

    wrapper.find("#top-rating-2").trigger("click");
    await Helper.sleep(300);

    expect(wrapper.text()).toContain("Twofold is a story about love, family, and connection");
    expect(wrapper.text()).toContain("27 oct. 2023");
    expect(wrapper.text()).toContain("97 % évaluations positives (Steam)");
});





