


import Category from '../../component/Category.vue';

import {mount} from "@vue/test-utils";
import { expect, test, beforeAll} from 'vitest';

import {Helper} from './helpers/Helper';
import {Provider} from '../../script/Provider';
import { FetchMock } from "./helpers/FetchMock";



beforeAll(()=>{
    Provider.mockFetch((url, options)=> FetchMock.fetch(url, options));
});


test("Si je selectionne les catégories Aventure (Défaut), Comédie, et Fin Multiples, alors 2 Visual Novels sont affichés", async()=>{


    const wrapper = mount(Category);
    
    await Helper.sleep(300);

    await wrapper.find("#tag-fin-multiples").trigger("click");
    await wrapper.find("#tag-comédie").trigger("click");

    await Helper.sleep(300);

    expect(await wrapper.findAll(".category-visual-second-div").length).toBe(2);
    expect(await wrapper.findAll(".category-visual-second-div")[0].text()).toContain("Kiss/OFF");
    expect(await wrapper.findAll(".category-visual-second-div")[1].text()).toContain("Love Notes");

});