import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const view = writable();
export const region = writable();

if (browser){
  view.set(JSON.parse(localStorage.getItem('view')) || 'birds');
  view.subscribe(value => {
    localStorage.setItem('view', JSON.stringify(value));
  });
  
  region.set(JSON.parse(localStorage.getItem('region')) || 'philly');
  region.subscribe(value => {
    localStorage.setItem('region', JSON.stringify(value));
  });
}
