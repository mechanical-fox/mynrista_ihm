

import {mount} from "@vue/test-utils";
import Nav from '../component/Nav.vue';

import { expect, test} from 'vitest';


test('The item "Accueil" must be present', ()=>{

    const valueSelector = '#item-bar';
    const wrapper = mount(Nav);

    expect(wrapper.find(valueSelector).text()).toContain('Accueil');
    wrapper.find(valueSelector).exists()
    
});




