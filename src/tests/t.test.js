
//import { mount, render } from '@testing-library/vue';
import {mount} from "@vue/test-utils";
import Nav from '../component/Nav.vue';

const valueSelector = '[data-testid=stepper-value]';
const buttonSelector = '[data-testid=increment]';

const wrapper = mount(Nav, {
  props: {
    max: 1
  }
});

expect(wrapper.find(valueSelector).text()).toContain('This is a beautiful world');

await wrapper.find(buttonSelector).trigger('click');

expect(wrapper.find(valueSelector).text()).toContain('1');