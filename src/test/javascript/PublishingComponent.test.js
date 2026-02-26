


import Publishing from '../../component/Publishing.vue';

import {mount} from "@vue/test-utils";
import { expect, test, beforeAll} from 'vitest';

import {Helper} from './helpers/Helper';
import {Provider} from '../../script/Provider';
import { FetchMock } from "./helpers/FetchMock";



beforeAll(()=>{
    Provider.mockFetch((url, options)=> FetchMock.fetch(url, options));
});


test("Lorsque je crée un Visual Novel, le titre affiché correspond à celui rentré par l'utilisateur", async()=>{

    const wrapper = mount(Publishing);

    await wrapper.find("#publishing-input").setValue("The Good People (Na Daoine Maithe)");
    await wrapper.find("#publishing-button").trigger("click");
    
    await Helper.sleep(300);

    expect(wrapper.find("#display-title").text()).toBe("The Good People (Na Daoine Maithe)");
    
});


test("Lorsque je crée un Visual Novel, la requête envoyée à l'API correspond aux informations rentrées par l'utilisateur", async()=>{

    const wrapper = mount(Publishing);

    let summary = "The Good People (Na Daoine Maithe) is a lore-rich, choice-driven visual novel inspired by Irish myths.";
    let description = `The Good People (Na Daoine Maithe) is a lore-rich and choice-driven historical fantasy visual novel 
    inspired by Irish mythology and Celtic folklore. Play as a tenant farmer from mid-19th century Ireland.`;


    await wrapper.find("#publishing-input").setValue("The Good People (Na Daoine Maithe)");
    await wrapper.find("#publishing-button").trigger("click");
    
    await Helper.sleep(300);

    await wrapper.find("#input-date").setValue("2024-11-01");
    await wrapper.find("#input-percent-evaluation").setValue(100);
    await wrapper.find("#input-number-evaluation").setValue(33);
    await wrapper.find("#tag-1").setValue(true);
    await wrapper.find("#tag-2").setValue(true);
    await wrapper.find("#tag-3").setValue(true);
    await wrapper.find("#tag-6").setValue(true);
    await wrapper.find("#tag-8").setValue(true);
    await wrapper.find("#tag-9").setValue(true);
    await wrapper.find("#input-summary").setValue(summary);
    await wrapper.find("#input-description").setValue(description);
    await wrapper.find("#edition-save-button").trigger("click");
    
    await Helper.sleep(300);

    let sendedBody = FetchMock.getLastBodyGiven();

    expect(sendedBody.title).toBe("The Good People (Na Daoine Maithe)");
    expect(sendedBody.releaseDate).toBe("01/11/2024");
    expect(sendedBody.summary).toBe(summary);
    expect(sendedBody.percentPositiveEvaluationOnSteam).toBe(100);
    expect(sendedBody.numberEvaluationOnSteam).toBe(33);
    expect(sendedBody.description).toBe(description);
    expect(sendedBody.tags.length).toBe(6);
    expect(sendedBody.tags[0]).toBe("Casual");
    expect(sendedBody.tags[1]).toBe("Fantasy");
    expect(sendedBody.tags[2]).toBe("Aventure");
    expect(sendedBody.image_base64).toBeDefined();

});

