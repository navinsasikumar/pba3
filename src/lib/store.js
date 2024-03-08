import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const view = writable();
export const region = writable();
export const sortOrder = writable();

if (browser){
  view.set(JSON.parse(localStorage.getItem('view')) || 'birds');
  view.subscribe(value => {
    localStorage.setItem('view', JSON.stringify(value));
  });
  
  region.set(JSON.parse(localStorage.getItem('region')) || 'philly');
  region.subscribe(value => {
    localStorage.setItem('region', JSON.stringify(value));
  });
  
  sortOrder.set(JSON.parse(localStorage.getItem('sortOrder')) || 'taxonomic');
  sortOrder.subscribe(value => {
    localStorage.setItem('sortOrder', JSON.stringify(value));
  });
}
