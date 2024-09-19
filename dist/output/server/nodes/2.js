

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DDhkU6S8.js","_app/immutable/chunks/scheduler.ClYQhJMz.js","_app/immutable/chunks/index.Wh2IFfSo.js"];
export const stylesheets = ["_app/immutable/assets/2.B0nljDBJ.css"];
export const fonts = [];
