import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const view = writable();

if (browser){
    view.set(JSON.parse(localStorage.getItem('view')) || 'birds');
    view.subscribe(value => {
        localStorage.setItem('view', JSON.stringify(value));
    });
}
