

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.fDVDcrhj.js","_app/immutable/chunks/scheduler.OzGIaFTW.js","_app/immutable/chunks/index.YF_IkidX.js"];
export const stylesheets = ["_app/immutable/assets/2.CQssTpcS.css"];
export const fonts = [];
