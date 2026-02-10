

import {mount} from "@vue/test-utils";
import Nav from '../../component/Nav.vue';
import {Helper} from './helpers/Helper';
import {Provider} from '../../script/Provider';
import { FetchMock } from "./helpers/FetchMock";

import { expect, test} from 'vitest';

Provider.mockFetch((url, options)=> FetchMock.fetch(url, options));


test('The text change when I click on the item "A propos"', async ()=>{


    const wrapper = mount(Nav);

    expect(wrapper.find("#welcome-div").exists()).toBe(true);
    expect(wrapper.find("#welcome-div").text()).toContain("This is the Welcome Page");

    await wrapper.find("#about-item").trigger("click");

    expect(wrapper.find("#about-div").exists()).toBe(true);
    expect(wrapper.find("#about-div").text()).toContain("This is the About Page");
    
});


test("I can't register with a password < 6 characters", async ()=>{


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


test("I can't register with an email already used", async ()=>{


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





