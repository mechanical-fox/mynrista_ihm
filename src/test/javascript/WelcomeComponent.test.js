
import Welcome from '../../component/Welcome.vue';

import {mount} from "@vue/test-utils";
import { expect, test, beforeAll} from 'vitest';

import {Helper} from './helpers/Helper';
import {Provider} from '../../script/Provider';
import { FetchMock } from "./helpers/FetchMock";



beforeAll(()=>{
    Provider.mockFetch((url, options)=> FetchMock.fetch(url, options));
});


test("Le top Nouveautés et Tendances correspond au Top renvoyé par l'API", async ()=>{

    const wrapper = mount(Welcome);

    await Helper.sleep(300);

    expect(wrapper.find("#top-recent-1").exists()).toBe(true);
    expect(wrapper.find("#top-recent-1").text()).toContain("Z.A.T.O. // I Love the World and Everything In It");
    expect(wrapper.find("#top-recent-2").exists()).toBe(true);
    expect(wrapper.find("#top-recent-2").text()).toContain("We Need Space");
    expect(wrapper.find("#top-recent-3").exists()).toBe(true);
    expect(wrapper.find("#top-recent-3").text()).toContain("Kiss/OFF");
    expect(wrapper.find("#top-recent-4").exists()).toBe(true);
    expect(wrapper.find("#top-recent-4").text()).toContain("Repurpose");

});


test("Les Visuals Novels du Top Nouveautés et Tendances changent de style CSS au passage de la sourie", async ()=>{

    const wrapper = mount(Welcome);

    await Helper.sleep(300);

    expect(wrapper.find("#top-recent-1").exists()).toBe(true);
    expect(wrapper.find("#top-recent-text-1").exists()).toBe(true);

    expect(wrapper.find("#top-recent-text-1").attributes().class).toBe("welcome-top-text");

    wrapper.find("#top-recent-1").trigger("mouseover");
    await Helper.sleep(300);

    expect(wrapper.find("#top-recent-text-1").attributes().class).toBe("welcome-top-text-selected");
});


test("Les Visuals Novels du Top Nouveautés et Tendances reviennent au style CSS initial au départ de la sourie", async ()=>{

    const wrapper = mount(Welcome);

    await Helper.sleep(300);

    expect(wrapper.find("#top-recent-1").exists()).toBe(true);
    expect(wrapper.find("#top-recent-text-1").exists()).toBe(true);

    expect(wrapper.find("#top-recent-text-1").attributes().class).toBe("welcome-top-text");

    wrapper.find("#top-recent-1").trigger("mouseover");
    await Helper.sleep(300);
    wrapper.find("#top-recent-1").trigger("mouseout");
    await Helper.sleep(300);

    expect(wrapper.find("#top-recent-text-1").attributes().class).toBe("welcome-top-text");

    
});


test("Le top Meilleurs Evaluations correspond au Top renvoyé par l'API", async ()=>{

    const wrapper = mount(Welcome);

    await Helper.sleep(300);

    expect(wrapper.find("#top-rating-1").exists()).toBe(true);
    expect(wrapper.find("#top-rating-1").text()).toContain("Z.A.T.O. // I Love the World and Everything In It");
    expect(wrapper.find("#top-rating-2").exists()).toBe(true);
    expect(wrapper.find("#top-rating-2").text()).toContain("Twofold");
    expect(wrapper.find("#top-rating-3").exists()).toBe(true);
    expect(wrapper.find("#top-rating-3").text()).toContain("Nightshade");
    expect(wrapper.find("#top-rating-4").exists()).toBe(true);
    expect(wrapper.find("#top-rating-4").text()).toContain("Arcadia Fallen");
    expect(wrapper.find("#top-rating-5").exists()).toBe(true);
    expect(wrapper.find("#top-rating-5").text()).toContain("Guilty Parade");
    expect(wrapper.find("#top-rating-6").exists()).toBe(true);
    expect(wrapper.find("#top-rating-6").text()).toContain("We Need Space");

});


test("Les Visuals Novels du Top Meilleurs Evaluations changent de style CSS au passage de la sourie", async ()=>{

    const wrapper = mount(Welcome);
    await Helper.sleep(300);

    expect(wrapper.find("#top-rating-1").exists()).toBe(true);
    expect(wrapper.find("#top-rating-1").attributes().class).toBe("welcome-div-top-rating-item");

    wrapper.find("#top-rating-1").trigger("mouseover");
    await Helper.sleep(300);

    expect(wrapper.find("#top-rating-1").attributes().class).toBe("welcome-div-top-rating-item-selected");
});


test("Les Visuals Novels du Top Meilleurs Evaluations reviennent au style CSS initial au départ de la sourie", async ()=>{

    const wrapper = mount(Welcome);

    await Helper.sleep(300);

    expect(wrapper.find("#top-rating-1").exists()).toBe(true);
    expect(wrapper.find("#top-rating-1").attributes().class).toBe("welcome-div-top-rating-item");

    wrapper.find("#top-rating-1").trigger("mouseover");
    await Helper.sleep(300);
    wrapper.find("#top-rating-1").trigger("mouseout");
    await Helper.sleep(300);

    expect(wrapper.find("#top-rating-1").attributes().class).toBe("welcome-div-top-rating-item");

    
});