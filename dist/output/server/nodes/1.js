

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DwlZKUUc.js","_app/immutable/chunks/scheduler.ClYQhJMz.js","_app/immutable/chunks/index.Wh2IFfSo.js","_app/immutable/chunks/entry.CSzB1aAY.js"];
export const stylesheets = [];
export const fonts = [];
