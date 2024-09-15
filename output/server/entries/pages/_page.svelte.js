import { c as create_ssr_component, e as escape, d as null_to_empty, f as compute_rest_props, h as add_attribute, i as spread, j as escape_attribute_value, k as escape_object, v as validate_component, l as each, o as is_promise, n as noop } from "../../chunks/ssr.js";
import "a11y-dialog";
import "agnostic-helpers/dist/index.esm.js";
const css$1$5 = {
  code: ".card.svelte-10sz0ec,.card-base.svelte-10sz0ec{display:flex;flex-wrap:wrap;align-items:center;position:relative;box-sizing:border-box;width:100%}.card-border.svelte-10sz0ec{border:1px solid var(--agnostic-card-border-color, var(--agnostic-gray-light))}.card-rounded.svelte-10sz0ec{border-radius:var(--agnostic-radius, 0.25rem)}.card-shadow.svelte-10sz0ec{box-shadow:var(--agnostic-card-boxshadow1-offset-x, 0)\n    var(--agnostic-card-boxshadow1-offset-y, 0.375rem)\n    var(--agnostic-card-boxshadow1-blur, 0.5625rem)\n    var(--agnostic-card-boxshadow1-color, rgb(6 6 6 / 7.5%)),\n    var(--agnostic-card-boxshadow2-offset-x, 0) var(--agnostic-card-boxshadow2-offset-y, 0)\n    var(--agnostic-card-boxshadow2-blur, 1px)\n    var(--agnostic-card-boxshadow2-color, rgb(5 5 5 / 10%));border-radius:var(--agnostic-card-border-radius, var(--agnostic-radius, 0.25rem));overflow:hidden}.card-shadow.svelte-10sz0ec:hover{box-shadow:var(--agnostic-card-boxshadow1-offset-x, 0)\n    var(--agnostic-card-boxshadow1-offset-y, 0.375rem)\n    var(--agnostic-card-boxshadow1-blur, 0.875rem)\n    var(--agnostic-card-boxshadow1-color, rgb(4 4 4 / 10%)),\n    var(--agnostic-card-boxshadow2-offset-x, 0) var(--agnostic-card-boxshadow2-offset-y, 0)\n    var(--agnostic-card-boxshadow2-blur, 2px)\n    var(--agnostic-card-boxshadow2-color, rgb(3 3 3 / 10%))}.card-animated.svelte-10sz0ec{transition:box-shadow ease-out 5s,\n    transform var(--agnostic-timing-fast)\n    cubic-bezier(\n      var(--agnostic-card-cubic-1, 0.39),\n      var(--agnostic-card-cubic-2, 0.575),\n      var(--agnostic-card-cubic-3, 0.565),\n      var(--agnostic-card-cubic-4, 1)\n    )}.card-animated.svelte-10sz0ec:hover{transform:translateY(var(--agnostic-card-translate-y-hover, -3px));transition:box-shadow ease-out var(--agnostic-timing-fast),\n    transform var(--agnostic-timing-slow)\n    cubic-bezier(\n      var(--agnostic-card-cubic-1, 0.39),\n      var(--agnostic-card-cubic-2, 0.575),\n      var(--agnostic-card-cubic-3, 0.565),\n      var(--agnostic-card-cubic-4, 1)\n    )}@media(prefers-reduced-motion), (update: slow){.card-animated.svelte-10sz0ec,.card-animated.svelte-10sz0ec:hover{transition-duration:0.001ms !important}}.card-stacked.svelte-10sz0ec{flex-direction:column}.card-success.svelte-10sz0ec{background:var(--agnostic-action-light);color:var(--agnostic-action-dark)}.card-info.svelte-10sz0ec{background:var(--agnostic-primary-light);color:var(--agnostic-primary-dark)}.card-error.svelte-10sz0ec{background:var(--agnostic-error-light);color:var(--agnostic-error-dark)}.card-warning.svelte-10sz0ec{background:var(--agnostic-warning-light);color:var(--agnostic-warning-dark)}",
  map: '{"version":3,"file":"Card.svelte","sources":["Card.svelte"],"sourcesContent":["<style>\\n/**\\n * Cards\\n *\\n * I drew some inspiration from the article on media-query less cards:\\n * https://css-tricks.com/how-to-make-a-media-query-less-card-component/\\n */\\n.card,\\n.card-base {\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-items: center;\\n  position: relative;\\n  box-sizing: border-box;\\n  width: 100%;\\n}\\n\\n.card-border {\\n  border: 1px solid var(--agnostic-card-border-color, var(--agnostic-gray-light));\\n}\\n\\n.card-rounded {\\n  border-radius: var(--agnostic-radius, 0.25rem);\\n}\\n\\n.card-shadow {\\n  box-shadow:\\n    var(--agnostic-card-boxshadow1-offset-x, 0)\\n    var(--agnostic-card-boxshadow1-offset-y, 0.375rem)\\n    var(--agnostic-card-boxshadow1-blur, 0.5625rem)\\n    var(--agnostic-card-boxshadow1-color, rgb(6 6 6 / 7.5%)),\\n    var(--agnostic-card-boxshadow2-offset-x, 0) var(--agnostic-card-boxshadow2-offset-y, 0)\\n    var(--agnostic-card-boxshadow2-blur, 1px)\\n    var(--agnostic-card-boxshadow2-color, rgb(5 5 5 / 10%));\\n  border-radius: var(--agnostic-card-border-radius, var(--agnostic-radius, 0.25rem));\\n  overflow: hidden;\\n}\\n\\n.card-shadow:hover {\\n  box-shadow:\\n    var(--agnostic-card-boxshadow1-offset-x, 0)\\n    var(--agnostic-card-boxshadow1-offset-y, 0.375rem)\\n    var(--agnostic-card-boxshadow1-blur, 0.875rem)\\n    var(--agnostic-card-boxshadow1-color, rgb(4 4 4 / 10%)),\\n    var(--agnostic-card-boxshadow2-offset-x, 0) var(--agnostic-card-boxshadow2-offset-y, 0)\\n    var(--agnostic-card-boxshadow2-blur, 2px)\\n    var(--agnostic-card-boxshadow2-color, rgb(3 3 3 / 10%));\\n}\\n\\n/**\\n * Animates the y position and box shadow on hover\\n */\\n.card-animated {\\n  transition:\\n    box-shadow ease-out 5s,\\n    transform var(--agnostic-timing-fast)\\n    cubic-bezier(\\n      var(--agnostic-card-cubic-1, 0.39),\\n      var(--agnostic-card-cubic-2, 0.575),\\n      var(--agnostic-card-cubic-3, 0.565),\\n      var(--agnostic-card-cubic-4, 1)\\n    );\\n}\\n\\n.card-animated:hover {\\n  transform: translateY(var(--agnostic-card-translate-y-hover, -3px));\\n  transition:\\n    box-shadow ease-out var(--agnostic-timing-fast),\\n    transform var(--agnostic-timing-slow)\\n    cubic-bezier(\\n      var(--agnostic-card-cubic-1, 0.39),\\n      var(--agnostic-card-cubic-2, 0.575),\\n      var(--agnostic-card-cubic-3, 0.565),\\n      var(--agnostic-card-cubic-4, 1)\\n    );\\n}\\n\\n@media (prefers-reduced-motion), (update: slow) {\\n  .card-animated,\\n  .card-animated:hover {\\n    transition-duration: 0.001ms !important;\\n  }\\n}\\n\\n.card-stacked {\\n  flex-direction: column;\\n}\\n\\n.card-success {\\n  background: var(--agnostic-action-light);\\n  color: var(--agnostic-action-dark);\\n}\\n\\n.card-info {\\n  background: var(--agnostic-primary-light);\\n  color: var(--agnostic-primary-dark);\\n}\\n\\n.card-error {\\n  background: var(--agnostic-error-light);\\n  color: var(--agnostic-error-dark);\\n}\\n\\n.card-warning {\\n  background: var(--agnostic-warning-light);\\n  color: var(--agnostic-warning-dark);\\n}\\n\\n</style>\\n\\n<script>\\n  export let isAnimated = false;\\n  export let isSkinned = true;\\n  export let isStacked = false;\\n  export let isShadow = false;\\n  export let isBorder = false;\\n  export let isRounded = false;\\n  export let type = \\"\\";\\n  export let css = \\"\\";\\n\\n  let klasses = [\\n    isSkinned ? \\"card\\" : \\"card-base\\",\\n    isAnimated ? \\"card-animated\\" : \\"\\",\\n    isStacked ? \\"card-stacked\\" : \\"\\",\\n    isShadow ? \\"card-shadow\\" : \\"\\",\\n    isRounded ? \\"card-rounded\\" : \\"\\",\\n    isBorder ? \\"card-border\\" : \\"\\",\\n    type ? `card-${type}` : \\"\\",\\n    css ? `${css}` : \\"\\",\\n  ]\\n    .filter((klass) => klass.length)\\n    .join(\\" \\");\\n<\/script>\\n\\n<div class={klasses} on:click on:focus on:blur>\\n  <slot />\\n</div>\\n"],"names":[],"mappings":"AAOA,oBAAK,CACL,yBAAW,CACT,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,MAAM,CACnB,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,UAAU,CACtB,KAAK,CAAE,IACT,CAEA,2BAAa,CACX,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,4BAA4B,CAAC,2BAA2B,CAChF,CAEA,4BAAc,CACZ,aAAa,CAAE,IAAI,iBAAiB,CAAC,QAAQ,CAC/C,CAEA,2BAAa,CACX,UAAU,CACR,IAAI,mCAAmC,CAAC,EAAE,CAAC;AAC/C,IAAI,IAAI,mCAAmC,CAAC,SAAS,CAAC;AACtD,IAAI,IAAI,+BAA+B,CAAC,UAAU,CAAC;AACnD,IAAI,IAAI,gCAAgC,CAAC,kBAAkB,CAAC,CAAC;AAC7D,IAAI,IAAI,mCAAmC,CAAC,EAAE,CAAC,CAAC,IAAI,mCAAmC,CAAC,EAAE,CAAC;AAC3F,IAAI,IAAI,+BAA+B,CAAC,IAAI,CAAC;AAC7C,IAAI,IAAI,gCAAgC,CAAC,iBAAiB,CAAC,CACzD,aAAa,CAAE,IAAI,6BAA6B,CAAC,gCAAgC,CAAC,CAClF,QAAQ,CAAE,MACZ,CAEA,2BAAY,MAAO,CACjB,UAAU,CACR,IAAI,mCAAmC,CAAC,EAAE,CAAC;AAC/C,IAAI,IAAI,mCAAmC,CAAC,SAAS,CAAC;AACtD,IAAI,IAAI,+BAA+B,CAAC,SAAS,CAAC;AAClD,IAAI,IAAI,gCAAgC,CAAC,iBAAiB,CAAC,CAAC;AAC5D,IAAI,IAAI,mCAAmC,CAAC,EAAE,CAAC,CAAC,IAAI,mCAAmC,CAAC,EAAE,CAAC;AAC3F,IAAI,IAAI,+BAA+B,CAAC,IAAI,CAAC;AAC7C,IAAI,IAAI,gCAAgC,CAAC,iBAAiB,CAC1D,CAKA,6BAAe,CACb,UAAU,CACR,UAAU,CAAC,QAAQ,CAAC,EAAE,CAAC;AAC3B,IAAI,SAAS,CAAC,IAAI,sBAAsB,CAAC;AACzC,IAAI;AACJ,MAAM,IAAI,uBAAuB,CAAC,KAAK,CAAC,CAAC;AACzC,MAAM,IAAI,uBAAuB,CAAC,MAAM,CAAC,CAAC;AAC1C,MAAM,IAAI,uBAAuB,CAAC,MAAM,CAAC,CAAC;AAC1C,MAAM,IAAI,uBAAuB,CAAC,EAAE,CAAC;AACrC,KACA,CAEA,6BAAc,MAAO,CACnB,SAAS,CAAE,WAAW,IAAI,iCAAiC,CAAC,KAAK,CAAC,CAAC,CACnE,UAAU,CACR,UAAU,CAAC,QAAQ,CAAC,IAAI,sBAAsB,CAAC,CAAC;AACpD,IAAI,SAAS,CAAC,IAAI,sBAAsB,CAAC;AACzC,IAAI;AACJ,MAAM,IAAI,uBAAuB,CAAC,KAAK,CAAC,CAAC;AACzC,MAAM,IAAI,uBAAuB,CAAC,MAAM,CAAC,CAAC;AAC1C,MAAM,IAAI,uBAAuB,CAAC,MAAM,CAAC,CAAC;AAC1C,MAAM,IAAI,uBAAuB,CAAC,EAAE,CAAC;AACrC,KACA,CAEA,MAAO,wBAAwB,EAAE,SAAS,IAAI,CAAE,CAC9C,6BAAc,CACd,6BAAc,MAAO,CACnB,mBAAmB,CAAE,OAAO,CAAC,UAC/B,CACF,CAEA,4BAAc,CACZ,cAAc,CAAE,MAClB,CAEA,4BAAc,CACZ,UAAU,CAAE,IAAI,uBAAuB,CAAC,CACxC,KAAK,CAAE,IAAI,sBAAsB,CACnC,CAEA,yBAAW,CACT,UAAU,CAAE,IAAI,wBAAwB,CAAC,CACzC,KAAK,CAAE,IAAI,uBAAuB,CACpC,CAEA,0BAAY,CACV,UAAU,CAAE,IAAI,sBAAsB,CAAC,CACvC,KAAK,CAAE,IAAI,qBAAqB,CAClC,CAEA,4BAAc,CACZ,UAAU,CAAE,IAAI,wBAAwB,CAAC,CACzC,KAAK,CAAE,IAAI,uBAAuB,CACpC"}'
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isAnimated = false } = $$props;
  let { isSkinned = true } = $$props;
  let { isStacked = false } = $$props;
  let { isShadow = false } = $$props;
  let { isBorder = false } = $$props;
  let { isRounded = false } = $$props;
  let { type = "" } = $$props;
  let { css: css2 = "" } = $$props;
  let klasses = [
    isSkinned ? "card" : "card-base",
    isAnimated ? "card-animated" : "",
    isStacked ? "card-stacked" : "",
    isShadow ? "card-shadow" : "",
    isRounded ? "card-rounded" : "",
    isBorder ? "card-border" : "",
    type ? `card-${type}` : "",
    css2 ? `${css2}` : ""
  ].filter((klass) => klass.length).join(" ");
  if ($$props.isAnimated === void 0 && $$bindings.isAnimated && isAnimated !== void 0) $$bindings.isAnimated(isAnimated);
  if ($$props.isSkinned === void 0 && $$bindings.isSkinned && isSkinned !== void 0) $$bindings.isSkinned(isSkinned);
  if ($$props.isStacked === void 0 && $$bindings.isStacked && isStacked !== void 0) $$bindings.isStacked(isStacked);
  if ($$props.isShadow === void 0 && $$bindings.isShadow && isShadow !== void 0) $$bindings.isShadow(isShadow);
  if ($$props.isBorder === void 0 && $$bindings.isBorder && isBorder !== void 0) $$bindings.isBorder(isBorder);
  if ($$props.isRounded === void 0 && $$bindings.isRounded && isRounded !== void 0) $$bindings.isRounded(isRounded);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.css === void 0 && $$bindings.css && css2 !== void 0) $$bindings.css(css2);
  $$result.css.add(css$1$5);
  return `<div class="${escape(null_to_empty(klasses), true) + " svelte-10sz0ec"}">${slots.default ? slots.default({}) : ``}</div>`;
});
const css$1$4 = {
  code: ".header.svelte-5asgb,.header-base.svelte-5asgb{display:block}.header-base.svelte-5asgb img,.header.svelte-5asgb img{max-width:100%;height:auto}.header.svelte-5asgb,.header-skin.svelte-5asgb{background-color:var(--agnostic-header-background-color, var(--agnostic-light));box-shadow:var(--agnostic-header-box-shadow-hor, 0) var(--agnostic-header-box-shadow-ver, 1px)\n    var(--agnostic-header-box-shadow-blur, 5px) var(--agnostic-header-box-shadow-spread, 2px)\n    var(--agnostic-header-box-shadow-color, rgb(0 0 0 / 10%));font-family:var(--agnostic-header-font-family, var(--agnostic-font-family-body));border-bottom:1px solid var(--agnostic-header-border-color, var(--agnostic-gray-light));padding-block-start:var(--agnostic-vertical-pad, 0.5rem);padding-block-end:var(--agnostic-vertical-pad, 0.5rem);padding-inline-start:var(--fluid-24);padding-inline-end:var(--fluid-24)}.header-content.svelte-5asgb{width:var(--agnostic-header-content-width, 960px);max-width:100%;margin:0 auto;display:flex;justify-content:space-around;align-items:center;flex-flow:wrap column}.header-sticky.svelte-5asgb{position:relative;top:0;z-index:10}@media(min-width: 960px){.header-sticky.svelte-5asgb{position:sticky}.header-content.svelte-5asgb{flex-direction:row;justify-content:space-between}.header-content-start.svelte-5asgb{justify-content:flex-start}.header-content-end.svelte-5asgb{justify-content:flex-end}}",
  map: '{"version":3,"file":"Header.svelte","sources":["Header.svelte"],"sourcesContent":["<style>\\n.header,\\n.header-base {\\n  display: block;\\n}\\n\\n.header-base :global(img),\\n.header :global(img) {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.header,\\n.header-skin {\\n  background-color: var(--agnostic-header-background-color, var(--agnostic-light));\\n  box-shadow:\\n    var(--agnostic-header-box-shadow-hor, 0) var(--agnostic-header-box-shadow-ver, 1px)\\n    var(--agnostic-header-box-shadow-blur, 5px) var(--agnostic-header-box-shadow-spread, 2px)\\n    var(--agnostic-header-box-shadow-color, rgb(0 0 0 / 10%));\\n  font-family: var(--agnostic-header-font-family, var(--agnostic-font-family-body));\\n  border-bottom: 1px solid var(--agnostic-header-border-color, var(--agnostic-gray-light));\\n  padding-block-start: var(--agnostic-vertical-pad, 0.5rem);\\n  padding-block-end: var(--agnostic-vertical-pad, 0.5rem);\\n  padding-inline-start: var(--fluid-24);\\n  padding-inline-end: var(--fluid-24);\\n}\\n\\n.header-content {\\n  width: var(--agnostic-header-content-width, 960px);\\n  max-width: 100%;\\n  margin: 0 auto;\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  flex-flow: wrap column;\\n}\\n\\n/**\\n * If you make your header sticky, you should likely consider that jump links\\n * e.g. <h1 id=\\"Jump-Here\\">... will tuck underneath the header! Here\'s a recommendation\\n * for how to circumnavigate this issue via scroll-margin-top:\\n  h1[id],\\n  h2[id],\\n  h3[id],\\n  h4[id],\\n  h5[id],\\n  h6[id] {\\n    scroll-margin-top: 80px;\\n  }\\n * In this case I have a 64px tall header so I\'ve added 16px for clearance -- you\'ll need\\n * to curate your own use case, but scroll-margin-top is super useful for this use case.\\n */\\n\\n.header-sticky {\\n  position: relative;\\n  top: 0;\\n  z-index: 10;\\n}\\n\\n@media (min-width: 960px) {\\n  .header-sticky {\\n    position: sticky;\\n  }\\n\\n  .header-content {\\n    flex-direction: row;\\n    justify-content: space-between;\\n  }\\n\\n  .header-content-start {\\n    justify-content: flex-start;\\n  }\\n\\n  .header-content-end {\\n    justify-content: flex-end;\\n  }\\n}\\n\\n</style>\\n\\n<script>\\n  export let isSticky = false;\\n  export let isSkinned = true;\\n  export let isHeaderContentStart = false;\\n  export let isHeaderContentEnd = false;\\n  export let css = \\"\\";\\n\\n  const klasses = [\\n    isSkinned ? \\"header\\" : \\"header-base\\",\\n    isSticky ? \\"header-sticky\\" : \\"\\",\\n    css ? `${css}` : \\"\\",\\n  ]\\n    .filter((cl) => cl.length)\\n    .join(\\" \\");\\n\\n  const headerContentClasses = [\\n    \\"header-content\\",\\n    isHeaderContentStart ? \\"header-content-start\\" : \\"\\",\\n    isHeaderContentEnd ? \\"header-content-end\\" : \\"\\",\\n  ]\\n    .filter((cl) => cl.length)\\n    .join(\\" \\");\\n<\/script>\\n\\n<nav class={klasses}>\\n  <div class={headerContentClasses}>\\n    <slot name=\\"logoleft\\" />\\n    <slot />\\n    <slot name=\\"logoright\\" />\\n  </div>\\n</nav>\\n"],"names":[],"mappings":"AACA,oBAAO,CACP,yBAAa,CACX,OAAO,CAAE,KACX,CAEA,yBAAY,CAAS,GAAI,CACzB,oBAAO,CAAS,GAAK,CACnB,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,IACV,CAEA,oBAAO,CACP,yBAAa,CACX,gBAAgB,CAAE,IAAI,kCAAkC,CAAC,sBAAsB,CAAC,CAChF,UAAU,CACR,IAAI,gCAAgC,CAAC,EAAE,CAAC,CAAC,IAAI,gCAAgC,CAAC,IAAI,CAAC;AACvF,IAAI,IAAI,iCAAiC,CAAC,IAAI,CAAC,CAAC,IAAI,mCAAmC,CAAC,IAAI,CAAC;AAC7F,IAAI,IAAI,kCAAkC,CAAC,iBAAiB,CAAC,CAC3D,WAAW,CAAE,IAAI,6BAA6B,CAAC,iCAAiC,CAAC,CACjF,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,8BAA8B,CAAC,2BAA2B,CAAC,CACxF,mBAAmB,CAAE,IAAI,uBAAuB,CAAC,OAAO,CAAC,CACzD,iBAAiB,CAAE,IAAI,uBAAuB,CAAC,OAAO,CAAC,CACvD,oBAAoB,CAAE,IAAI,UAAU,CAAC,CACrC,kBAAkB,CAAE,IAAI,UAAU,CACpC,CAEA,4BAAgB,CACd,KAAK,CAAE,IAAI,+BAA+B,CAAC,MAAM,CAAC,CAClD,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,YAAY,CAC7B,WAAW,CAAE,MAAM,CACnB,SAAS,CAAE,IAAI,CAAC,MAClB,CAkBA,2BAAe,CACb,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,OAAO,CAAE,EACX,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,2BAAe,CACb,QAAQ,CAAE,MACZ,CAEA,4BAAgB,CACd,cAAc,CAAE,GAAG,CACnB,eAAe,CAAE,aACnB,CAEA,kCAAsB,CACpB,eAAe,CAAE,UACnB,CAEA,gCAAoB,CAClB,eAAe,CAAE,QACnB,CACF"}'
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isSticky = false } = $$props;
  let { isSkinned = true } = $$props;
  let { isHeaderContentStart = false } = $$props;
  let { isHeaderContentEnd = false } = $$props;
  let { css: css2 = "" } = $$props;
  const klasses = [
    isSkinned ? "header" : "header-base",
    isSticky ? "header-sticky" : "",
    css2 ? `${css2}` : ""
  ].filter((cl) => cl.length).join(" ");
  const headerContentClasses = [
    "header-content",
    isHeaderContentStart ? "header-content-start" : "",
    isHeaderContentEnd ? "header-content-end" : ""
  ].filter((cl) => cl.length).join(" ");
  if ($$props.isSticky === void 0 && $$bindings.isSticky && isSticky !== void 0) $$bindings.isSticky(isSticky);
  if ($$props.isSkinned === void 0 && $$bindings.isSkinned && isSkinned !== void 0) $$bindings.isSkinned(isSkinned);
  if ($$props.isHeaderContentStart === void 0 && $$bindings.isHeaderContentStart && isHeaderContentStart !== void 0) $$bindings.isHeaderContentStart(isHeaderContentStart);
  if ($$props.isHeaderContentEnd === void 0 && $$bindings.isHeaderContentEnd && isHeaderContentEnd !== void 0) $$bindings.isHeaderContentEnd(isHeaderContentEnd);
  if ($$props.css === void 0 && $$bindings.css && css2 !== void 0) $$bindings.css(css2);
  $$result.css.add(css$1$4);
  return `<nav class="${escape(null_to_empty(klasses), true) + " svelte-5asgb"}"><div class="${escape(null_to_empty(headerContentClasses), true) + " svelte-5asgb"}">${slots.logoleft ? slots.logoleft({}) : ``} ${slots.default ? slots.default({}) : ``} ${slots.logoright ? slots.logoright({}) : ``}</div></nav>`;
});
const css$1$3 = {
  code: ".header-nav.svelte-xmqeos{margin:0;padding:0;display:flex;flex-direction:column;align-items:center}@media(min-width: 960px){.header-nav.svelte-xmqeos{flex-direction:row}}",
  map: '{"version":3,"file":"HeaderNav.svelte","sources":["HeaderNav.svelte"],"sourcesContent":["<style>\\n/* Goes on the <ul> */\\n.header-nav {\\n  margin: 0;\\n  padding: 0;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n@media (min-width: 960px) {\\n  .header-nav {\\n    flex-direction: row;\\n  }\\n}\\n\\n</style>\\n\\n<script>\\n  export let css = \\"\\";\\n  const containerClasses = [css ? `${css}` : \\"\\"].filter((c) => c.length);\\n<\/script>\\n\\n<nav class={containerClasses}>\\n  <ul class=\\"header-nav\\">\\n    <slot />\\n  </ul>\\n</nav>\\n"],"names":[],"mappings":"AAEA,yBAAY,CACV,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MACf,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,yBAAY,CACV,cAAc,CAAE,GAClB,CACF"}'
};
const HeaderNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { css: css2 = "" } = $$props;
  const containerClasses = [css2 ? `${css2}` : ""].filter((c) => c.length);
  if ($$props.css === void 0 && $$bindings.css && css2 !== void 0) $$bindings.css(css2);
  $$result.css.add(css$1$3);
  return `<nav class="${escape(null_to_empty(containerClasses), true) + " svelte-xmqeos"}"><ul class="header-nav svelte-xmqeos">${slots.default ? slots.default({}) : ``}</ul></nav>`;
});
const css$1$2 = {
  code: ".header-nav-item.svelte-ogomo2{display:inline-block}.header-nav-item.svelte-ogomo2:not(:last-child){margin-inline-end:initial;margin-block-end:var(--fluid-8)}.header-nav-item.svelte-ogomo2 a{color:var(--agnostic-header-color, var(--agnostic-font-color))}@media(min-width: 960px){.header-nav-item.svelte-ogomo2:not(:last-child){margin-inline-end:var(--agnostic-header-nav-spacing, var(--fluid-32));margin-block-end:initial}}",
  map: '{"version":3,"file":"HeaderNavItem.svelte","sources":["HeaderNavItem.svelte"],"sourcesContent":["<style>\\n.header-nav-item {\\n  display: inline-block;\\n}\\n\\n.header-nav-item:not(:last-child) {\\n  margin-inline-end: initial;\\n  margin-block-end: var(--fluid-8);\\n}\\n\\n.header-nav-item :global(a) {\\n  color: var(--agnostic-header-color, var(--agnostic-font-color));\\n}\\n\\n@media (min-width: 960px) {\\n  .header-nav-item:not(:last-child) {\\n    margin-inline-end: var(--agnostic-header-nav-spacing, var(--fluid-32));\\n    margin-block-end: initial;\\n  }\\n}\\n\\n</style>\\n\\n<script>\\n  export let css = \\"\\";\\n  let klasses = [\\"header-nav-item\\", css ? `${css}` : \\"\\"];\\n  klasses = klasses.filter((klass) => klass.length);\\n  klasses = klasses.join(\\" \\");\\n<\/script>\\n\\n<li class={klasses}>\\n  <slot />\\n</li>\\n"],"names":[],"mappings":"AACA,8BAAiB,CACf,OAAO,CAAE,YACX,CAEA,8BAAgB,KAAK,WAAW,CAAE,CAChC,iBAAiB,CAAE,OAAO,CAC1B,gBAAgB,CAAE,IAAI,SAAS,CACjC,CAEA,8BAAgB,CAAS,CAAG,CAC1B,KAAK,CAAE,IAAI,uBAAuB,CAAC,2BAA2B,CAChE,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,8BAAgB,KAAK,WAAW,CAAE,CAChC,iBAAiB,CAAE,IAAI,6BAA6B,CAAC,gBAAgB,CAAC,CACtE,gBAAgB,CAAE,OACpB,CACF"}'
};
const HeaderNavItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { css: css2 = "" } = $$props;
  let klasses = ["header-nav-item", css2 ? `${css2}` : ""];
  klasses = klasses.filter((klass) => klass.length);
  klasses = klasses.join(" ");
  if ($$props.css === void 0 && $$bindings.css && css2 !== void 0) $$bindings.css(css2);
  $$result.css.add(css$1$2);
  return `<li class="${escape(null_to_empty(klasses), true) + " svelte-ogomo2"}">${slots.default ? slots.default({}) : ``}</li>`;
});
const css$1$1 = {
  code: ".input-base.svelte-5ha1y2,.input.svelte-5ha1y2{user-select:initial;appearance:none;box-sizing:border-box;caret-color:currentColor}.label.svelte-5ha1y2,.label-base.svelte-5ha1y2{padding:0;border:0;box-sizing:border-box;font-family:inherit}.field-help.svelte-5ha1y2,.field-help-large.svelte-5ha1y2,.field-help-small.svelte-5ha1y2,.field-error.svelte-5ha1y2,.field-error-large.svelte-5ha1y2,.field-error-small.svelte-5ha1y2,.label-skin.svelte-5ha1y2,.label.svelte-5ha1y2,.input-addon-container.svelte-5ha1y2,.input-small.svelte-5ha1y2,.input-large.svelte-5ha1y2,.input-skin.svelte-5ha1y2,.input-underlined.svelte-5ha1y2,.input-underlined-bg.svelte-5ha1y2,.input.svelte-5ha1y2{color:var(--agnostic-font-color, var(--agnostic-dark));font-family:var(--agnostic-font-family-body);font-weight:var(--agnostic-font-weight, 300);font-size:var(--agnostic-font-size, 1rem);line-height:var(--agnostic-line-height, var(--fluid-20, 1.25rem));width:100%;max-width:100%}.input-skin.svelte-5ha1y2,.input.svelte-5ha1y2{border-style:solid;border-width:var(--agnostic-input-border-size, 1px);border-color:var(--agnostic-input-border-color, var(--agnostic-gray-light));padding-block-start:var(--agnostic-input-vertical-pad, 0.5rem);padding-block-end:var(--agnostic-input-vertical-pad, 0.5rem);padding-inline-start:var(--agnostic-input-side-padding, 0.75rem);padding-inline-end:var(--agnostic-input-side-padding, 0.75rem);transition-property:box-shadow;transition-duration:var(--agnostic-input-timing, var(--agnostic-timing-medium))}.label.svelte-5ha1y2{display:inline-block;margin-block-start:0;margin-inline-start:0;margin-inline-end:0;margin-block-end:var(--agnostic-input-label-pad, 0.375rem);vertical-align:initial}.field-help.svelte-5ha1y2,.field-error.svelte-5ha1y2{font-size:calc(var(--agnostic-font-size, 1rem) - 2px)}.label-inline.svelte-5ha1y2,.input-inline.svelte-5ha1y2{width:auto}.label-inline.svelte-5ha1y2{margin-block-start:0;margin-block-end:0;margin-inline-start:0;margin-inline-end:var(--agnostic-input-side-padding, 0.75rem)}.input.svelte-5ha1y2::-webkit-input-placeholder{color:currentColor;opacity:50%;transition:opacity var(--agnostic-timing-fast) ease-out}.input.svelte-5ha1y2::placeholder{color:currentColor;opacity:50%;transition:opacity var(--agnostic-timing-fast) ease-out}.input.svelte-5ha1y2::-ms-placeholder{color:currentColor;opacity:50%;transition:opacity var(--agnostic-timing-fast) ease-out}.input.svelte-5ha1y2:-ms-placeholder{color:currentColor;opacity:50%;transition:opacity var(--agnostic-timing-fast) ease-out}.input-underlined.svelte-5ha1y2{border-top:0;border-left:0;border-right:0;border-color:var(--agnostic-input-underlined-color, var(--agnostic-gray-mid-dark));background-color:transparent}.input-underlined-bg.svelte-5ha1y2{background-color:var(--agnostic-input-underlined-bg-color, var(--agnostic-gray-extra-light))}.input-rounded.svelte-5ha1y2{border-radius:var(--agnostic-radius, 0.25rem)}.label-error.svelte-5ha1y2{color:var(--agnostic-input-error-color, var(--agnostic-error))}.input-error.svelte-5ha1y2{border-color:var(--agnostic-input-error-color, var(--agnostic-error))}.label-error.svelte-5ha1y2,.field-error.svelte-5ha1y2,.field-error-small.svelte-5ha1y2,.field-error-large.svelte-5ha1y2{color:var(--agnostic-input-error-color, var(--agnostic-error))}.field-help.svelte-5ha1y2,.field-help-small.svelte-5ha1y2,.field-help-large.svelte-5ha1y2{color:var(--agnostic-input-help-color, var(--agnostic-gray-dark))}.field-help.svelte-5ha1y2,.field-help-small.svelte-5ha1y2,.field-help-large.svelte-5ha1y2,.field-error.svelte-5ha1y2,.field-error-small.svelte-5ha1y2,.field-error-large.svelte-5ha1y2{display:inline-block;width:100%;margin-block-start:calc(var(--agnostic-input-vertical-pad, 0.5rem) / 2)}.input-large.svelte-5ha1y2{font-size:calc(var(--agnostic-font-size, 1rem) + 0.25rem);line-height:1.6rem}.field-help-large.svelte-5ha1y2,.field-error-large.svelte-5ha1y2{font-size:var(--agnostic-font-size, 1rem)}.label-large.svelte-5ha1y2{font-size:calc(var(--agnostic-font-size, 1rem) + 0.25rem)}.input-small.svelte-5ha1y2{font-size:calc(var(--agnostic-font-size, 1rem) - 0.25rem);line-height:1rem}.field-help-small.svelte-5ha1y2,.field-error-small.svelte-5ha1y2,.label-small.svelte-5ha1y2{font-size:calc(var(--agnostic-font-size, 1rem) - 0.25rem)}.input.svelte-5ha1y2:focus{box-shadow:0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);outline:var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style)\n    var(--agnostic-focus-ring-outline-color);transition:box-shadow var(--agnostic-timing-fast) ease-out}.input-error.svelte-5ha1y2:focus{box-shadow:0 0 0 3px transparent}.input.disabled.svelte-5ha1y2,.input.svelte-5ha1y2:disabled{background:var(--agnostic-input-disabled-bg, var(--agnostic-disabled-bg)) !important;color:var(--agnostic-input-disabled-color, var(--agnostic-disabled-color)) !important;appearance:none !important;box-shadow:none !important;cursor:not-allowed !important;opacity:80% !important}@media screen and (-ms-high-contrast: active){.input.svelte-5ha1y2:disabled{outline:2px solid transparent;outline-offset:-2px}}.input-addon-container.svelte-5ha1y2{display:flex;position:relative;width:100%;min-height:100%}.input-has-left-addon.svelte-5ha1y2{padding-left:calc(var(--agnostic-side-padding) * 3)}.input-has-right-addon.svelte-5ha1y2{padding-right:calc(var(--agnostic-side-padding) * 3)}.input-addon-left.svelte-5ha1y2{left:var(--agnostic-input-side-padding)}.input-addon-right.svelte-5ha1y2{right:var(--agnostic-input-side-padding)}@media(prefers-reduced-motion), (update: slow){.input-skin.svelte-5ha1y2,.input.svelte-5ha1y2,.input.svelte-5ha1y2::placeholder,.input.svelte-5ha1y2::-webkit-input-placeholder,.input.svelte-5ha1y2::-ms-placeholder,.input.svelte-5ha1y2:-ms-placeholder,.input.svelte-5ha1y2:focus{transition-duration:0.001ms !important}}",
  map: '{"version":3,"file":"Input.svelte","sources":["Input.svelte"],"sourcesContent":["<style>\\n.input-base,\\n.input {\\n  /* Note this cannot be user-select: none else mobile safari won\'t accept input:\\n  https://stackoverflow.com/questions/49889003/cannot-write-into-input-field-on-safari/49901069\\n   */\\n  user-select: initial;\\n  appearance: none;\\n  box-sizing: border-box;\\n\\n  /* Use the same color for the cursor */\\n  caret-color: currentColor;\\n}\\n\\n.label,\\n.label-base {\\n  padding: 0;\\n  border: 0;\\n  box-sizing: border-box;\\n  font-family: inherit;\\n}\\n\\n/* Electing to scope these as opposed to doing :root level definitions */\\n.field-help,\\n.field-help-large,\\n.field-help-small,\\n.field-error,\\n.field-error-large,\\n.field-error-small,\\n.label-skin,\\n.label,\\n.input-addon-container,\\n.input-small,\\n.input-large,\\n.input-skin,\\n.input-underlined,\\n.input-underlined-bg,\\n.input {\\n  color: var(--agnostic-font-color, var(--agnostic-dark));\\n  font-family: var(--agnostic-font-family-body);\\n  font-weight: var(--agnostic-font-weight, 300);\\n  font-size: var(--agnostic-font-size, 1rem);\\n  line-height: var(--agnostic-line-height, var(--fluid-20, 1.25rem));\\n  width: 100%;\\n  max-width: 100%;\\n}\\n\\n.input-skin,\\n.input {\\n  /* seems like a reasonable default as chrome picks `outset` which results in a weird 3d effect */\\n  border-style: solid;\\n\\n  /* this can be overriden, but it might mess with the balance of the button heights across variants */\\n  border-width: var(--agnostic-input-border-size, 1px);\\n  border-color: var(--agnostic-input-border-color, var(--agnostic-gray-light));\\n\\n  /* these can be overriden, but it might mess with the balance of the inputheights across variants */\\n  padding-block-start: var(--agnostic-input-vertical-pad, 0.5rem);\\n  padding-block-end: var(--agnostic-input-vertical-pad, 0.5rem);\\n  padding-inline-start: var(--agnostic-input-side-padding, 0.75rem);\\n  padding-inline-end: var(--agnostic-input-side-padding, 0.75rem);\\n\\n  /* Note we only want to set properties that we actually want\\n  to transition in. For example, if we transition \\"all\\", the\\n  inputs will \\"grow in\\" on page load—not a happy effect :) */\\n  transition-property: box-shadow;\\n  transition-duration: var(--agnostic-input-timing, var(--agnostic-timing-medium));\\n}\\n\\n.label {\\n  display: inline-block;\\n\\n  /* Provided --agnostic-input-vertical-pad isn\'t overriden we\'ll get 20px\\n  label w/a 6px margin then a 38px input = 64 which is on the 8pt grid */\\n  margin-block-start: 0;\\n  margin-inline-start: 0;\\n  margin-inline-end: 0;\\n  margin-block-end: var(--agnostic-input-label-pad, 0.375rem);\\n  vertical-align: initial;\\n}\\n\\n/* Reset field errors and help text to be 2px less then input font size */\\n.field-help,\\n.field-error {\\n  font-size: calc(var(--agnostic-font-size, 1rem) - 2px);\\n}\\n\\n.label-inline,\\n.input-inline {\\n  width: auto;\\n}\\n\\n/* When inlined, the margin-block-end will throw the label off-center with adjacent input */\\n.label-inline {\\n  margin-block-start: 0;\\n  margin-block-end: 0;\\n  margin-inline-start: 0;\\n  margin-inline-end: var(--agnostic-input-side-padding, 0.75rem);\\n}\\n\\n/**\\n* Placeholder\\n*/\\n\\n/* stylelint-disable-next-line */\\n.input::-webkit-input-placeholder {\\n  color: currentColor;\\n  opacity: 50%;\\n  transition: opacity var(--agnostic-timing-fast) ease-out;\\n}\\n\\n/* stylelint-disable-next-line */\\n.input::placeholder {\\n  color: currentColor;\\n  opacity: 50%;\\n  transition: opacity var(--agnostic-timing-fast) ease-out;\\n}\\n\\n/* stylelint-disable-next-line */\\n.input::-ms-placeholder {\\n  color: currentColor;\\n  opacity: 50%;\\n  transition: opacity var(--agnostic-timing-fast) ease-out;\\n}\\n\\n/* stylelint-disable-next-line */\\n.input:-ms-placeholder {\\n  color: currentColor;\\n  opacity: 50%;\\n  transition: opacity var(--agnostic-timing-fast) ease-out;\\n}\\n\\n/**\\n* Underlined inputs\\n*/\\n.input-underlined {\\n  border-top: 0;\\n  border-left: 0;\\n  border-right: 0;\\n  border-color: var(--agnostic-input-underlined-color, var(--agnostic-gray-mid-dark));\\n  background-color: transparent;\\n}\\n\\n.input-underlined-bg {\\n  background-color: var(--agnostic-input-underlined-bg-color, var(--agnostic-gray-extra-light));\\n}\\n\\n/**\\n* Rounded inputs\\n*/\\n.input-rounded {\\n  border-radius: var(--agnostic-radius, 0.25rem);\\n}\\n\\n/**\\n * Errors\\n * We provide a class-based approach to setting errors which means we do\\n * not support :invalid, so it requires custom use of html4 validation API\\n * (see https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation\\n * of the example in corresponding input.html file). The reason I elected to\\n * not include :invalid, is it seems to result in \\"shouting\\" at the user as\\n * I did not find an easy way to only kick in errors after a certain number\\n * of characters have been type (blur is actually better but I did not\\n * implement that in the contrived example).\\n */\\n.label-error {\\n  color: var(--agnostic-input-error-color, var(--agnostic-error));\\n}\\n\\n.input-error {\\n  border-color: var(--agnostic-input-error-color, var(--agnostic-error));\\n}\\n\\n.label-error,\\n.field-error,\\n.field-error-small,\\n.field-error-large {\\n  color: var(--agnostic-input-error-color, var(--agnostic-error));\\n}\\n\\n.field-help,\\n.field-help-small,\\n.field-help-large {\\n  color: var(--agnostic-input-help-color, var(--agnostic-gray-dark));\\n}\\n\\n.field-help,\\n.field-help-small,\\n.field-help-large,\\n.field-error,\\n.field-error-small,\\n.field-error-large {\\n  display: inline-block;\\n  width: 100%;\\n  margin-block-start: calc(var(--agnostic-input-vertical-pad, 0.5rem) / 2);\\n}\\n\\n/**\\n  * Sizes\\n  */\\n.input-large {\\n  font-size: calc(var(--agnostic-font-size, 1rem) + 0.25rem);\\n  line-height: 1.6rem;\\n}\\n\\n.field-help-large,\\n.field-error-large {\\n  /* We initially remove -2px from font-size so setting to font-size essentially adds the 2px back */\\n  font-size: var(--agnostic-font-size, 1rem);\\n}\\n\\n.label-large {\\n  font-size: calc(var(--agnostic-font-size, 1rem) + 0.25rem);\\n}\\n\\n.input-small {\\n  font-size: calc(var(--agnostic-font-size, 1rem) - 0.25rem);\\n  line-height: 1rem;\\n}\\n\\n.field-help-small,\\n.field-error-small,\\n.label-small {\\n  font-size: calc(var(--agnostic-font-size, 1rem) - 0.25rem);\\n}\\n\\n.input:focus {\\n  box-shadow: 0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);\\n\\n  /* Needed for High Contrast mode */\\n  outline:\\n    var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style)\\n    var(--agnostic-focus-ring-outline-color);\\n  transition: box-shadow var(--agnostic-timing-fast) ease-out;\\n}\\n\\n/* Set the focus to transparent when there\'s an error since we use\\nborders that visually conflict. */\\n.input-error:focus {\\n  box-shadow: 0 0 0 3px transparent;\\n}\\n\\n/*\\n* Disabled State\\n*\\n* The disabled state uses the class .disabled,\\n* and the form attribute disabled=\\"disabled\\".\\n* The use of !important is only added because this is a state\\n* that must be applied to all inputs when in a disabled state.\\n*/\\n.input.disabled, /* DEPRECATED -- TODO remove class based disabled */\\n.input:disabled {\\n  background: var(--agnostic-input-disabled-bg, var(--agnostic-disabled-bg)) !important;\\n  color: var(--agnostic-input-disabled-color, var(--agnostic-disabled-color)) !important;\\n  appearance: none !important;\\n  box-shadow: none !important;\\n  cursor: not-allowed !important;\\n  opacity: 80% !important;\\n}\\n\\n@media screen and (-ms-high-contrast: active) {\\n  /* High contrast mode outline hacks */\\n\\n  /* styleint-disable-next-line no-descending-specificity  */\\n  .input:disabled {\\n    outline: 2px solid transparent;\\n    outline-offset: -2px;\\n  }\\n}\\n\\n/**\\n * Input \\"has addon\\"\\n */\\n\\n.input-addon-container {\\n  display: flex;\\n  position: relative;\\n  width: 100%;\\n  min-height: 100%;\\n}\\n\\n.input-has-left-addon {\\n  padding-left: calc(var(--agnostic-side-padding) * 3);\\n}\\n\\n.input-has-right-addon {\\n  padding-right: calc(var(--agnostic-side-padding) * 3);\\n}\\n\\n.input-addon-left {\\n  left: var(--agnostic-input-side-padding);\\n}\\n\\n.input-addon-right {\\n  right: var(--agnostic-input-side-padding);\\n}\\n\\n@media (prefers-reduced-motion), (update: slow) {\\n  /* stylelint-disable selector-no-vendor-prefix */\\n  .input-skin,\\n  .input,\\n  .input::placeholder,\\n  .input::-webkit-input-placeholder,\\n  .input::-ms-placeholder,\\n  .input:-ms-placeholder,\\n  .input:focus {\\n    transition-duration: 0.001ms !important;\\n  }\\n}\\n\\n</style>\\n  \\n  <script>\\n    // Looks like the way to propogate boilerplate events is to\\n    // just declare in template like on:blur on:focus and so on\\n    // https://github.com/sveltejs/svelte/issues/585\\n    // Looks like this is what smelte is doing:\\n    // https://github.com/matyunya/smelte/blob/master/src/components/TextField/TextField.svelte\\n    export let label = \\"\\";\\n    export let id = \\"\\";\\n    export let labelCss = \\"\\";\\n    export let isLabelHidden = false;\\n    export let helpText = \\"\\";\\n    export let invalidText = \\"\\";\\n    export let hasLeftAddon = false;\\n    export let hasRightAddon = false;\\n    export let isInvalid = false;\\n    export let isInline = false;\\n    export let isRounded = false;\\n    export let isDisabled = undefined;\\n    export let css = \\"\\";\\n    export let isSkinned = true;\\n    export let isUnderlinedWithBackground = false;\\n    export let isUnderlined = false;\\n    export let size = \\"\\";\\n    \\n    export let value = \\"\\";\\n    // Consumer can pass any valid html5 input type. Default is text\\n    export let type = \'text\';\\n  \\n    $: if (!value) value = \\"\\";\\n    $: inputType = type;\\n  \\n    $: labelClasses = [\\n        \\"label\\",\\n        isInvalid ? \\"label-error\\" : \\"\\",\\n        isInline ? \\"label-inline\\" : \\"\\",\\n        size ? `label-${size}` : \\"\\",\\n        isLabelHidden ? \\"screenreader-only\\" : \\"\\",\\n      labelCss ? labelCss : \\"\\",\\n    ].filter(c => c).join(\\" \\");\\n  \\n    $: inputClasses = [\\n      isSkinned ? \\"input\\" : \\"input-base\\",\\n      isRounded ? \\"input-rounded\\" : \\"\\",\\n      isUnderlined ? \\"input-underlined\\" : \\"\\",\\n      hasLeftAddon ? \\"input-has-left-addon\\" : \\"\\",\\n      hasRightAddon ? \\"input-has-right-addon\\" : \\"\\",\\n      isDisabled ? \\"disabled\\" : \\"\\",\\n      isInvalid ? \\"input-error\\" : \\"\\",\\n      isInline ? \\"input-inline\\" : \\"\\",\\n      isUnderlinedWithBackground ? \\"input-underlined-bg\\" : \\"\\",\\n      css ? css : \\"\\",\\n      size ? `input-${size}` : \\"\\",\\n    ].filter(c => c).join(\\" \\");\\n  \\n    $: invalidClasses = () => {\\n      return size ? `field-error-${size}` : \\"field-error\\";\\n    };\\n    \\n    $: helpClasses = () => {\\n      return size ? `field-help-${size}` : \\"field-help\\";\\n    };\\n    \\n    $: addonContainerClasses = () => \\"input-addon-container\\";\\n  <\/script>\\n  <div class=\\"w-100\\">\\n    <label class={labelClasses} for={id}>{label}</label>\\n    {#if type == \\"textarea\\"}\\n      <textarea\\n        id={id}\\n        class={inputClasses}\\n        on:blur\\n        on:change\\n        bind:value\\n        on:click\\n        on:focus\\n        {...$$restProps}></textarea>\\n    {:else if hasLeftAddon || hasRightAddon}\\n      <div class={addonContainerClasses()}>\\n        <slot name=\\"addonLeft\\" />\\n        <input\\n          id={id}\\n          type={inputType}\\n          value={value}\\n          class={inputClasses}\\n          disabled={isDisabled}\\n          on:blur\\n          on:change\\n          on:input={e => value = e.target.value}\\n          on:click\\n          on:focus\\n          {...$$restProps}\\n        />\\n        <slot name=\\"addonRight\\" />\\n      </div>\\n    {:else}\\n      <input\\n        id={id}\\n        type={inputType}\\n        value={value}\\n        class={inputClasses}\\n        disabled={isDisabled}\\n        on:blur\\n        on:change\\n        on:input={e => value = e.target.value}\\n        on:click\\n        on:focus\\n        {...$$restProps}\\n      />\\n    {/if}\\n    {#if isInvalid}\\n      <span role=\\"status\\" aria-live=\\"polite\\" class={invalidClasses()}>\\n        {invalidText}\\n      </span>\\n    {:else if helpText}<span class={helpClasses()}>{helpText}</span>{/if}\\n  </div>\\n  "],"names":[],"mappings":"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"}'
};
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputType;
  let labelClasses;
  let inputClasses;
  let invalidClasses;
  let helpClasses;
  let addonContainerClasses;
  let $$restProps = compute_rest_props($$props, [
    "label",
    "id",
    "labelCss",
    "isLabelHidden",
    "helpText",
    "invalidText",
    "hasLeftAddon",
    "hasRightAddon",
    "isInvalid",
    "isInline",
    "isRounded",
    "isDisabled",
    "css",
    "isSkinned",
    "isUnderlinedWithBackground",
    "isUnderlined",
    "size",
    "value",
    "type"
  ]);
  let { label = "" } = $$props;
  let { id = "" } = $$props;
  let { labelCss = "" } = $$props;
  let { isLabelHidden = false } = $$props;
  let { helpText = "" } = $$props;
  let { invalidText = "" } = $$props;
  let { hasLeftAddon = false } = $$props;
  let { hasRightAddon = false } = $$props;
  let { isInvalid = false } = $$props;
  let { isInline = false } = $$props;
  let { isRounded = false } = $$props;
  let { isDisabled = void 0 } = $$props;
  let { css: css2 = "" } = $$props;
  let { isSkinned = true } = $$props;
  let { isUnderlinedWithBackground = false } = $$props;
  let { isUnderlined = false } = $$props;
  let { size = "" } = $$props;
  let { value = "" } = $$props;
  let { type = "text" } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.labelCss === void 0 && $$bindings.labelCss && labelCss !== void 0) $$bindings.labelCss(labelCss);
  if ($$props.isLabelHidden === void 0 && $$bindings.isLabelHidden && isLabelHidden !== void 0) $$bindings.isLabelHidden(isLabelHidden);
  if ($$props.helpText === void 0 && $$bindings.helpText && helpText !== void 0) $$bindings.helpText(helpText);
  if ($$props.invalidText === void 0 && $$bindings.invalidText && invalidText !== void 0) $$bindings.invalidText(invalidText);
  if ($$props.hasLeftAddon === void 0 && $$bindings.hasLeftAddon && hasLeftAddon !== void 0) $$bindings.hasLeftAddon(hasLeftAddon);
  if ($$props.hasRightAddon === void 0 && $$bindings.hasRightAddon && hasRightAddon !== void 0) $$bindings.hasRightAddon(hasRightAddon);
  if ($$props.isInvalid === void 0 && $$bindings.isInvalid && isInvalid !== void 0) $$bindings.isInvalid(isInvalid);
  if ($$props.isInline === void 0 && $$bindings.isInline && isInline !== void 0) $$bindings.isInline(isInline);
  if ($$props.isRounded === void 0 && $$bindings.isRounded && isRounded !== void 0) $$bindings.isRounded(isRounded);
  if ($$props.isDisabled === void 0 && $$bindings.isDisabled && isDisabled !== void 0) $$bindings.isDisabled(isDisabled);
  if ($$props.css === void 0 && $$bindings.css && css2 !== void 0) $$bindings.css(css2);
  if ($$props.isSkinned === void 0 && $$bindings.isSkinned && isSkinned !== void 0) $$bindings.isSkinned(isSkinned);
  if ($$props.isUnderlinedWithBackground === void 0 && $$bindings.isUnderlinedWithBackground && isUnderlinedWithBackground !== void 0) $$bindings.isUnderlinedWithBackground(isUnderlinedWithBackground);
  if ($$props.isUnderlined === void 0 && $$bindings.isUnderlined && isUnderlined !== void 0) $$bindings.isUnderlined(isUnderlined);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  $$result.css.add(css$1$1);
  {
    if (!value) value = "";
  }
  inputType = type;
  labelClasses = [
    "label",
    isInvalid ? "label-error" : "",
    isInline ? "label-inline" : "",
    size ? `label-${size}` : "",
    isLabelHidden ? "screenreader-only" : "",
    labelCss ? labelCss : ""
  ].filter((c) => c).join(" ");
  inputClasses = [
    isSkinned ? "input" : "input-base",
    isRounded ? "input-rounded" : "",
    isUnderlined ? "input-underlined" : "",
    hasLeftAddon ? "input-has-left-addon" : "",
    hasRightAddon ? "input-has-right-addon" : "",
    isDisabled ? "disabled" : "",
    isInvalid ? "input-error" : "",
    isInline ? "input-inline" : "",
    isUnderlinedWithBackground ? "input-underlined-bg" : "",
    css2 ? css2 : "",
    size ? `input-${size}` : ""
  ].filter((c) => c).join(" ");
  invalidClasses = () => {
    return size ? `field-error-${size}` : "field-error";
  };
  helpClasses = () => {
    return size ? `field-help-${size}` : "field-help";
  };
  addonContainerClasses = () => "input-addon-container";
  return `<div class="w-100"><label class="${escape(null_to_empty(labelClasses), true) + " svelte-5ha1y2"}"${add_attribute("for", id, 0)}>${escape(label)}</label> ${type == "textarea" ? `<textarea${spread(
    [
      { id: escape_attribute_value(id) },
      {
        class: escape_attribute_value(inputClasses)
      },
      escape_object($$restProps)
    ],
    { classes: "svelte-5ha1y2" }
  )}>${escape(value || "")}</textarea>` : `${hasLeftAddon || hasRightAddon ? `<div class="${escape(null_to_empty(addonContainerClasses()), true) + " svelte-5ha1y2"}">${slots.addonLeft ? slots.addonLeft({}) : ``} <input${spread(
    [
      { id: escape_attribute_value(id) },
      { type: escape_attribute_value(inputType) },
      { value: escape_attribute_value(value) },
      {
        class: escape_attribute_value(inputClasses)
      },
      { disabled: isDisabled || null },
      escape_object($$restProps)
    ],
    { classes: "svelte-5ha1y2" }
  )}> ${slots.addonRight ? slots.addonRight({}) : ``}</div>` : `<input${spread(
    [
      { id: escape_attribute_value(id) },
      { type: escape_attribute_value(inputType) },
      { value: escape_attribute_value(value) },
      {
        class: escape_attribute_value(inputClasses)
      },
      { disabled: isDisabled || null },
      escape_object($$restProps)
    ],
    { classes: "svelte-5ha1y2" }
  )}>`}`} ${isInvalid ? `<span role="status" aria-live="polite" class="${escape(null_to_empty(invalidClasses()), true) + " svelte-5ha1y2"}">${escape(invalidText)}</span>` : `${helpText ? `<span class="${escape(null_to_empty(helpClasses()), true) + " svelte-5ha1y2"}">${escape(helpText)}</span>` : ``}`}</div>`;
});
const css$1 = {
  code: ".item.svelte-hdufir{display:flex;flex-direction:column}.list.svelte-hdufir{display:flex;flex-direction:column}.mixtext.svelte-hdufir{margin:auto}.mix.svelte-hdufir{display:inline-block;justify-content:center}.split.svelte-hdufir{display:inline-flex}.title.svelte-hdufir{font-size:20px}.tag.svelte-hdufir{font-size:18px}.hidden.svelte-hdufir{visibility:hidden}",
  map: `{"version":3,"file":"chem.svelte","sources":["chem.svelte"],"sourcesContent":["<script>\\r\\n    export let title;\\r\\n    export let reactants;\\r\\n    export let products;\\r\\n    export let minTemp;\\r\\n    let product;\\r\\n    let react = Object.entries(reactants);\\r\\n    if (products) {\\r\\n        product = Object.entries(products);\\r\\n    }\\r\\n\\r\\n\\r\\n    import { Card } from 'agnostic-svelte';\\r\\n<\/script>\\r\\n\\r\\n<div>\\r\\n    <Card isBorder=\\"{true}\\" isStacked=\\"{true}\\">\\r\\n        \\r\\n        <b>\\r\\n            <div class=\\"p16 title\\">{ title }</div>\\r\\n        </b>\\r\\n        <div class=\\"mix\\">\\r\\n            {#if !minTemp} \\r\\n            <p class=\\"mixtext\\">Mix</p>        \\r\\n            {/if}\\r\\n            {#if minTemp} \\r\\n            <p>Mix at {minTemp}K</p>        \\r\\n            {/if}\\r\\n        </div>\\r\\n  \\r\\n        <div class=\\"split\\">\\r\\n            <div class=\\"p16 list\\">\\r\\n                <b>\\r\\n                    <div class=\\"p16 tag\\">Reactants</div>\\r\\n                </b>\\r\\n                {#each react as reactant}\\r\\n                    <div class=\\"p16 item\\">\\r\\n                        {reactant[0]} [{reactant[1].amount}]\\r\\n                    </div>\\r\\n                {/each}\\r\\n            </div>\\r\\n            {#if products}\\r\\n                <div class=\\"p16 list\\">\\r\\n                    <b>\\r\\n                        <div class=\\"p16 item\\">Products</div>\\r\\n                    </b>\\r\\n                    {#each product as prod}\\r\\n                        <div class=\\"p16 item\\">\\r\\n                            {prod[0]} [{prod[1]}]\\r\\n                        </div>\\r\\n                    {/each}\\r\\n                </div> \\r\\n            {/if}\\r\\n\\r\\n            </div>\\r\\n        <div class=\\"p16 hidden\\">🧑‍🚀🧑‍🚀🧑‍🚀🧑‍🚀🧑‍🚀🧑‍🚀🧑‍🚀🧑‍🚀🧑‍🚀🧑‍🚀🧑‍🚀🧑‍🚀</div>\\r\\n    </Card>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n    .item {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n    }\\r\\n\\r\\n    .list {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n    }\\r\\n\\r\\n    .mixtext{\\r\\n        margin: auto;\\r\\n    }\\r\\n\\r\\n    .mix {\\r\\n        display: inline-block;\\r\\n        justify-content: center;\\r\\n\\r\\n    }\\r\\n        \\r\\n    .split {\\r\\n        display: inline-flex;\\r\\n    }\\r\\n\\r\\n\\r\\n    .title {\\r\\n        font-size: 20px;\\r\\n    }\\r\\n\\r\\n    .tag {\\r\\n        font-size: 18px;\\r\\n    }\\r\\n\\r\\n   .hidden {\\r\\n        visibility: hidden;\\r\\n   }\\r\\n</style>"],"names":[],"mappings":"AA4DI,mBAAM,CACF,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MACpB,CAEA,mBAAM,CACF,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MACpB,CAEA,sBAAQ,CACJ,MAAM,CAAE,IACZ,CAEA,kBAAK,CACD,OAAO,CAAE,YAAY,CACrB,eAAe,CAAE,MAErB,CAEA,oBAAO,CACH,OAAO,CAAE,WACb,CAGA,oBAAO,CACH,SAAS,CAAE,IACf,CAEA,kBAAK,CACD,SAAS,CAAE,IACf,CAED,qBAAQ,CACH,UAAU,CAAE,MACjB"}`
};
const Chem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { reactants } = $$props;
  let { products } = $$props;
  let { minTemp } = $$props;
  let product;
  let react = Object.entries(reactants);
  if (products) {
    product = Object.entries(products);
  }
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.reactants === void 0 && $$bindings.reactants && reactants !== void 0) $$bindings.reactants(reactants);
  if ($$props.products === void 0 && $$bindings.products && products !== void 0) $$bindings.products(products);
  if ($$props.minTemp === void 0 && $$bindings.minTemp && minTemp !== void 0) $$bindings.minTemp(minTemp);
  $$result.css.add(css$1);
  return `<div>${validate_component(Card, "Card").$$render($$result, { isBorder: true, isStacked: true }, {}, {
    default: () => {
      return `<b><div class="p16 title svelte-hdufir">${escape(title)}</div></b> <div class="mix svelte-hdufir">${!minTemp ? `<p class="mixtext svelte-hdufir" data-svelte-h="svelte-1jfzhr0">Mix</p>` : ``} ${minTemp ? `<p>Mix at ${escape(minTemp)}K</p>` : ``}</div> <div class="split svelte-hdufir"><div class="p16 list svelte-hdufir"><b data-svelte-h="svelte-n73bga"><div class="p16 tag svelte-hdufir">Reactants</div></b> ${each(react, (reactant) => {
        return `<div class="p16 item svelte-hdufir">${escape(reactant[0])} [${escape(reactant[1].amount)}]
                    </div>`;
      })}</div> ${products ? `<div class="p16 list svelte-hdufir"><b data-svelte-h="svelte-1q4z2mk"><div class="p16 item svelte-hdufir">Products</div></b> ${each(product, (prod) => {
        return `<div class="p16 item svelte-hdufir">${escape(prod[0])} [${escape(prod[1])}]
                        </div>`;
      })}</div>` : ``}</div> <div class="p16 hidden svelte-hdufir" data-svelte-h="svelte-4d2cty">🧑‍🚀🧑‍🚀🧑‍🚀🧑‍🚀🧑‍🚀🧑‍🚀🧑‍🚀🧑‍🚀🧑‍🚀🧑‍🚀🧑‍🚀🧑‍🚀</div>`;
    }
  })} </div>`;
});
const chemicalsf = [
  {
    type: "reaction",
    id: "Ammonia",
    reactants: {
      Hydrogen: {
        amount: 3
      },
      Nitrogen: {
        amount: 1
      }
    },
    products: {
      Ammonia: 4
    }
  },
  {
    type: "reaction",
    id: "CelluloseBreakdown",
    source: true,
    requiredMixerCategories: [
      "Electrolysis"
    ],
    reactants: {
      Cellulose: {
        amount: 3
      }
    },
    products: {
      Sugar: 2,
      Carbon: 1
    }
  },
  {
    type: "reaction",
    id: "Diethylamine",
    reactants: {
      Ammonia: {
        amount: 1
      },
      Ethanol: {
        amount: 1
      }
    },
    products: {
      Diethylamine: 2
    }
  },
  {
    type: "reaction",
    id: "Phenol",
    reactants: {
      Hydroxide: {
        amount: 1
      },
      Benzene: {
        amount: 1
      }
    },
    products: {
      Phenol: 2
    }
  },
  {
    type: "reaction",
    id: "Acetone",
    reactants: {
      Oil: {
        amount: 1
      },
      WeldingFuel: {
        amount: 1
      },
      Oxygen: {
        amount: 1
      }
    },
    products: {
      Acetone: 2
    }
  },
  {
    type: "reaction",
    id: "FoamingAgent",
    reactants: {
      Lithium: {
        amount: 1
      },
      Hydrogen: {
        amount: 1
      }
    },
    products: {
      FoamingAgent: 2
    }
  },
  {
    type: "reaction",
    id: "PolytrinicAcid",
    reactants: {
      SulfuricAcid: {
        amount: 1
      },
      Plasma: {
        amount: 1
      },
      Potassium: {
        amount: 1
      }
    },
    products: {
      PolytrinicAcid: 3
    }
  },
  {
    type: "reaction",
    id: "SulfuricAcid",
    reactants: {
      Hydrogen: {
        amount: 1
      },
      Sulfur: {
        amount: 1
      },
      Oxygen: {
        amount: 2
      }
    },
    products: {
      SulfuricAcid: 3
    }
  },
  {
    type: "reaction",
    id: "FluorosulfuricAcid",
    reactants: {
      Fluorine: {
        amount: 1
      },
      Hydrogen: {
        amount: 1
      },
      Potassium: {
        amount: 1
      },
      SulfuricAcid: {
        amount: 1
      }
    },
    products: {
      FluorosulfuricAcid: 4
    }
  },
  {
    type: "reaction",
    id: "PotassiumExplosion",
    impact: "High",
    priority: 20,
    reactants: {
      Water: {
        amount: 1
      },
      Potassium: {
        amount: 1
      }
    },
    effects: {
      explosionType: "Default",
      maxIntensity: 100,
      intensityPerUnit: 0.5,
      intensitySlope: 4,
      maxTotalIntensity: 100
    }
  },
  {
    type: "reaction",
    id: "Smoke",
    priority: 10,
    impact: "High",
    reactants: {
      Phosphorus: {
        amount: 1
      },
      Potassium: {
        amount: 1
      },
      Sugar: {
        amount: 1
      }
    },
    effects: {
      duration: 10,
      prototypeId: "Smoke",
      sound: {
        path: "/Audio/Effects/smoke.ogg"
      }
    }
  },
  {
    type: "reaction",
    id: "Foam",
    priority: 10,
    impact: "High",
    reactants: {
      Fluorosurfactant: {
        amount: 1
      },
      Water: {
        amount: 1
      }
    },
    effects: {
      duration: 10,
      prototypeId: "Foam",
      sound: {
        path: "/Audio/Effects/extinguish.ogg"
      }
    }
  },
  {
    type: "reaction",
    id: "IronMetalFoam",
    impact: "High",
    priority: 10,
    reactants: {
      Iron: {
        amount: 3
      },
      FoamingAgent: {
        amount: 1
      },
      FluorosulfuricAcid: {
        amount: 1
      }
    },
    effects: {
      duration: 10,
      prototypeId: "IronMetalFoam",
      sound: {
        path: "/Audio/Effects/extinguish.ogg"
      }
    }
  },
  {
    type: "reaction",
    id: "AluminiumMetalFoam",
    impact: "High",
    priority: 10,
    reactants: {
      Aluminium: {
        amount: 3
      },
      FoamingAgent: {
        amount: 1
      },
      FluorosulfuricAcid: {
        amount: 1
      }
    },
    effects: {
      duration: 10,
      prototypeId: "AluminiumMetalFoam",
      sound: {
        path: "/Audio/Effects/extinguish.ogg"
      }
    }
  },
  {
    type: "reaction",
    id: "UraniumEmpExplosion",
    impact: "High",
    priority: 20,
    reactants: {
      Iron: {
        amount: 1
      },
      Uranium: {
        amount: 1
      },
      Aluminium: {
        amount: 1
      }
    },
    effects: {
      rangePerUnit: 0.2,
      maxRange: 6,
      energyConsumption: 12500,
      duration: 15
    }
  },
  {
    type: "reaction",
    id: "TableSalt",
    minTemp: 370,
    reactants: {
      Chlorine: {
        amount: 1
      },
      Sodium: {
        amount: 1
      }
    },
    products: {
      TableSalt: 2
    }
  },
  {
    type: "reaction",
    id: "TableSaltBreakdown",
    source: true,
    requiredMixerCategories: [
      "Electrolysis"
    ],
    reactants: {
      TableSalt: {
        amount: 2
      }
    },
    products: {
      Chlorine: 1,
      Sodium: 1
    }
  },
  {
    type: "reaction",
    id: "Thermite",
    impact: "Medium",
    reactants: {
      Iron: {
        amount: 1
      },
      Aluminium: {
        amount: 1
      },
      Oxygen: {
        amount: 1
      }
    },
    products: {
      Thermite: 3
    }
  },
  {
    type: "reaction",
    id: "UnstableMutagen",
    reactants: {
      Radium: {
        amount: 1
      },
      Phosphorus: {
        amount: 1
      },
      Chlorine: {
        amount: 1
      }
    },
    products: {
      UnstableMutagen: 3
    }
  },
  {
    type: "reaction",
    id: "Oil",
    reactants: {
      WeldingFuel: {
        amount: 1
      },
      Hydrogen: {
        amount: 1
      },
      Carbon: {
        amount: 1
      }
    },
    products: {
      Oil: 3
    }
  },
  {
    type: "reaction",
    id: "Fluorosurfactant",
    impact: "Medium",
    reactants: {
      Carbon: {
        amount: 2
      },
      Fluorine: {
        amount: 2
      },
      SulfuricAcid: {
        amount: 1
      }
    },
    products: {
      Fluorosurfactant: 5
    }
  },
  {
    type: "reaction",
    id: "Desoxyephedrine",
    impact: "Medium",
    minTemp: 370,
    reactants: {
      Ephedrine: {
        amount: 1
      },
      Carbon: {
        amount: 1
      },
      Iodine: {
        amount: 1
      },
      Phosphorus: {
        amount: 1
      }
    },
    products: {
      Desoxyephedrine: 4
    }
  },
  {
    type: "reaction",
    id: "Stimulants",
    impact: "Medium",
    minTemp: 370,
    reactants: {
      Ephedrine: {
        amount: 1
      },
      Vestine: {
        amount: 1
      },
      Oxygen: {
        amount: 2
      }
    },
    products: {
      Stimulants: 2
    }
  },
  {
    type: "reaction",
    id: "Ephedrine",
    impact: "Medium",
    reactants: {
      Oil: {
        amount: 1
      },
      Hydrogen: {
        amount: 1
      },
      Sugar: {
        amount: 1
      },
      Diethylamine: {
        amount: 1
      }
    },
    products: {
      Ephedrine: 4
    }
  },
  {
    type: "reaction",
    id: "MuteToxin",
    impact: "Medium",
    minTemp: 370,
    reactants: {
      Uranium: {
        amount: 1
      },
      Vestine: {
        amount: 2
      },
      SpaceGlue: {
        amount: 2
      }
    },
    products: {
      MuteToxin: 2
    }
  },
  {
    type: "reaction",
    id: "ChloralHydrate",
    impact: "Medium",
    reactants: {
      Chlorine: {
        amount: 3
      },
      Ethanol: {
        amount: 1
      },
      Water: {
        amount: 1
      }
    },
    products: {
      ChloralHydrate: 1
    }
  },
  {
    type: "reaction",
    id: "Pax",
    impact: "Medium",
    reactants: {
      MindbreakerToxin: {
        amount: 1
      },
      Synaptizine: {
        amount: 1
      },
      Water: {
        amount: 1
      }
    },
    products: {
      Pax: 3
    }
  },
  {
    type: "reaction",
    id: "Charcoal",
    reactants: {
      Carbon: {
        amount: 1
      },
      Ash: {
        amount: 1
      }
    },
    products: {
      Charcoal: 1
    }
  },
  {
    type: "reaction",
    id: "NorepinephricAcid",
    impact: "Medium",
    reactants: {
      Uranium: {
        amount: 1
      },
      Epinephrine: {
        amount: 1
      }
    },
    products: {
      NorepinephricAcid: 2
    }
  },
  {
    type: "reaction",
    id: "Ethyloxyephedrine",
    impact: "Medium",
    reactants: {
      Desoxyephedrine: {
        amount: 1
      },
      Stellibinin: {
        amount: 1
      }
    },
    products: {
      Ethyloxyephedrine: 2
    }
  },
  {
    type: "reaction",
    id: "Diphenylmethylamine",
    impact: "Medium",
    reactants: {
      Ethyloxyephedrine: {
        amount: 1
      },
      SodiumCarbonate: {
        amount: 1
      },
      Coffee: {
        amount: 1
      }
    },
    products: {
      Diphenylmethylamine: 3
    }
  },
  {
    type: "reaction",
    id: "SodiumCarbonate",
    impact: "Medium",
    reactants: {
      Ammonia: {
        amount: 1
      },
      TableSalt: {
        amount: 1
      },
      Carbon: {
        amount: 1
      },
      Oxygen: {
        amount: 1
      }
    },
    products: {
      SodiumCarbonate: 4
    }
  },
  {
    type: "reaction",
    id: "Benzene",
    minTemp: 310,
    reactants: {
      Hydrogen: {
        amount: 1
      },
      Carbon: {
        amount: 1
      }
    },
    products: {
      Benzene: 1
    }
  },
  {
    type: "reaction",
    minTemp: 310,
    id: "Hydroxide",
    priority: -1,
    reactants: {
      Oxygen: {
        amount: 1
      },
      Hydrogen: {
        amount: 1
      }
    },
    products: {
      Hydroxide: 2
    }
  },
  {
    type: "reaction",
    id: "SodiumHydroxide",
    reactants: {
      Hydroxide: {
        amount: 1
      },
      Sodium: {
        amount: 1
      }
    },
    products: {
      SodiumHydroxide: 2
    }
  },
  {
    type: "reaction",
    minTemp: 310,
    id: "Fersilicite",
    reactants: {
      Iron: {
        amount: 1
      },
      Silicon: {
        amount: 1
      }
    },
    products: {
      Fersilicite: 2
    }
  },
  {
    type: "reaction",
    id: "SodiumPolyacrylate",
    impact: "Medium",
    reactants: {
      Oxygen: {
        amount: 2
      },
      Sodium: {
        amount: 1
      },
      Nitrogen: {
        amount: 1
      }
    },
    products: {
      SodiumPolyacrylate: 4
    }
  },
  {
    type: "reaction",
    id: "Nocturine",
    impact: "High",
    reactants: {
      Impedrezene: {
        amount: 2
      },
      Vestine: {
        amount: 1
      }
    },
    products: {
      Nocturine: 1
    }
  },
  {
    type: "reaction",
    id: "Tazinide",
    impact: "Medium",
    reactants: {
      Licoxide: {
        amount: 1
      },
      Vestine: {
        amount: 1
      }
    },
    products: {
      Tazinide: 1
    }
  }
];
const biological = [
  {
    type: "reaction",
    id: "BloodBreakdown",
    source: true,
    requiredMixerCategories: [
      "Centrifuge"
    ],
    reactants: {
      Blood: {
        amount: 20
      }
    },
    products: {
      Water: 11,
      Iron: 0.5,
      Sugar: 2,
      CarbonDioxide: 3,
      Protein: 4
    }
  },
  {
    type: "reaction",
    id: "SlimeBloodBreakdown",
    source: true,
    requiredMixerCategories: [
      "Centrifuge"
    ],
    reactants: {
      Slime: {
        amount: 5
      }
    },
    products: {
      Water: 4,
      Nitrogen: 1
    }
  },
  {
    type: "reaction",
    id: "SapBloodBreakdown",
    source: true,
    requiredMixerCategories: [
      "Centrifuge"
    ],
    reactants: {
      Sap: {
        amount: 10
      }
    },
    products: {
      Water: 9,
      Sugar: 1
    }
  },
  {
    type: "reaction",
    id: "CopperBloodBreakdown",
    source: true,
    requiredMixerCategories: [
      "Centrifuge"
    ],
    reactants: {
      CopperBlood: {
        amount: 20
      }
    },
    products: {
      Water: 11,
      Copper: 0.5,
      Sugar: 2,
      CarbonDioxide: 3,
      Protein: 4
    }
  },
  {
    type: "reaction",
    id: "ZombieBloodBreakdown",
    source: true,
    requiredMixerCategories: [
      "Centrifuge"
    ],
    reactants: {
      ZombieBlood: {
        amount: 4
      }
    },
    products: {
      Mold: 2,
      Protein: 1,
      Toxin: 1
    }
  }
];
const botany = [
  {
    type: "reaction",
    id: "EZNutrient",
    reactants: {
      Nitrogen: {
        amount: 1
      },
      Phosphorus: {
        amount: 1
      },
      Potassium: {
        amount: 1
      }
    },
    products: {
      EZNutrient: 3
    }
  },
  {
    type: "reaction",
    id: "RobustHarvest",
    reactants: {
      EZNutrient: {
        amount: 1
      },
      SulfuricAcid: {
        amount: 1,
        catalyst: true
      }
    },
    products: {
      RobustHarvest: 1
    }
  },
  {
    type: "reaction",
    id: "Sedin",
    reactants: {
      Cryoxadone: {
        amount: 1
      },
      RobustHarvest: {
        amount: 3
      },
      Diethylamine: {
        amount: 3
      }
    },
    products: {
      Sedin: 1
    }
  },
  {
    type: "reaction",
    id: "Left4Zed",
    reactants: {
      EZNutrient: {
        amount: 1
      },
      Radium: {
        amount: 1,
        catalyst: true
      }
    },
    products: {
      Left4Zed: 1
    }
  },
  {
    type: "reaction",
    id: "PlantBGone",
    reactants: {
      Toxin: {
        amount: 1
      },
      Water: {
        amount: 4
      }
    },
    products: {
      PlantBGone: 5
    }
  }
];
const cleaning = [
  {
    type: "reaction",
    id: "Bleach",
    reactants: {
      TableSalt: {
        amount: 2
      },
      SpaceCleaner: {
        amount: 2
      },
      SodiumHydroxide: {
        amount: 1
      }
    },
    products: {
      Bleach: 5
    }
  },
  {
    type: "reaction",
    id: "AmmoniaFromBlood",
    minTemp: 370,
    reactants: {
      AmmoniaBlood: {
        amount: 2
      }
    },
    products: {
      Ammonia: 1
    }
  },
  {
    type: "reaction",
    id: "SpaceCleaner",
    reactants: {
      Ammonia: {
        amount: 1
      },
      Water: {
        amount: 1
      }
    },
    products: {
      SpaceCleaner: 2
    }
  },
  {
    type: "reaction",
    id: "SpaceLube",
    impact: "Medium",
    reactants: {
      Water: {
        amount: 1
      },
      Fersilicite: {
        amount: 1
      },
      Oxygen: {
        amount: 1
      }
    },
    products: {
      SpaceLube: 5
    }
  }
];
const fun = [
  {
    type: "reaction",
    id: "Carpetium",
    reactants: {
      SpaceDrugs: {
        amount: 1
      },
      Fiber: {
        amount: 2
      }
    },
    products: {
      Carpetium: 3
    }
  },
  {
    type: "reaction",
    id: "BuzzochloricBees",
    reactants: {
      Saxoite: {
        amount: 1
      },
      Fiber: {
        amount: 1
      },
      GroundBee: {
        amount: 1
      },
      Chlorine: {
        amount: 1
      },
      UnstableMutagen: {
        amount: 1
      }
    },
    products: {
      BuzzochloricBees: 3
    }
  },
  {
    type: "reaction",
    id: "CreateSoap",
    impact: "Low",
    quantized: true,
    reactants: {
      Fat: {
        amount: 15
      },
      TableSalt: {
        amount: 10
      },
      Water: {
        amount: 10
      }
    },
    effects: {
      entity: "Soap"
    }
  },
  {
    type: "reaction",
    id: "CreateSoapHomemade",
    impact: "Low",
    quantized: true,
    reactants: {
      Fat: {
        amount: 15
      },
      TableSalt: {
        amount: 10
      },
      Blood: {
        amount: 10
      }
    },
    effects: {
      entity: "SoapHomemade"
    }
  },
  {
    type: "reaction",
    id: "Meatification",
    impact: "Low",
    quantized: true,
    reactants: {
      Fat: {
        amount: 25
      },
      Nutriment: {
        amount: 5
      },
      Blood: {
        amount: 10
      },
      Carbon: {
        amount: 10
      }
    },
    effects: {
      entity: "FoodMeat"
    }
  },
  {
    type: "reaction",
    id: "SpaceGlue",
    minTemp: 370,
    reactants: {
      SpaceLube: {
        amount: 1
      },
      Slime: {
        amount: 1
      }
    },
    products: {
      SpaceGlue: 2
    }
  },
  {
    type: "reaction",
    id: "Licoxide",
    reactants: {
      Lead: {
        amount: 1
      },
      Zinc: {
        amount: 1
      }
    },
    products: {
      Licoxide: 1
    }
  },
  {
    type: "reaction",
    id: "PlasticSheet",
    impact: "Low",
    quantized: true,
    minTemp: 374,
    reactants: {
      Oil: {
        amount: 5
      },
      Ash: {
        amount: 3
      },
      SulfuricAcid: {
        amount: 2
      }
    },
    effects: {
      entity: "SheetPlastic1"
    }
  },
  {
    type: "reaction",
    id: "FlashFreezeIce",
    quantized: true,
    reactants: {
      Fresium: {
        amount: 1
      },
      Water: {
        amount: 1
      }
    },
    effects: {
      gas: "Frezon"
    },
    products: {
      Ice: 5
    }
  },
  {
    type: "reaction",
    id: "Fresium",
    priority: 20,
    maxTemp: 300,
    reactants: {
      Frezon: {
        amount: 3
      },
      Plasma: {
        amount: 1,
        catalyst: true
      },
      Nitrogen: {
        amount: 2
      },
      Cryoxadone: {
        amount: 0.22
      },
      TableSalt: {
        amount: 0.08
      },
      Water: {
        amount: 1.5
      }
    },
    effects: {
      gas: "Nitrogen"
    },
    products: {
      Fresium: 5
    }
  },
  {
    type: "reaction",
    id: "FiberBreakdown",
    source: true,
    requiredMixerCategories: [
      "Centrifuge"
    ],
    reactants: {
      Fiber: {
        amount: 5
      },
      Water: {
        amount: 10,
        catalyst: true
      }
    },
    products: {
      Carbon: 3,
      Sugar: 2
    }
  },
  {
    type: "reaction",
    id: "Laughter",
    reactants: {
      JuiceBanana: {
        amount: 1
      },
      Sugar: {
        amount: 1
      }
    },
    products: {
      Laughter: 2
    }
  },
  {
    type: "reaction",
    id: "CreateCrystals",
    quantized: true,
    minTemp: 374,
    reactants: {
      Sugar: {
        amount: 15
      },
      Water: {
        amount: 15
      },
      Ethanol: {
        amount: 5
      }
    },
    effects: {
      entity: "ShardCrystalRandom"
    }
  },
  {
    type: "reaction",
    id: "Gunpowder",
    impact: "Low",
    quantized: true,
    minTemp: 374,
    reactants: {
      Potassium: {
        amount: 6
      },
      Sulfur: {
        amount: 2
      },
      Charcoal: {
        amount: 2
      }
    },
    effects: {
      entity: "MaterialGunpowder"
    }
  }
];
const medicine = [
  {
    type: "reaction",
    id: "Dylovene",
    reactants: {
      Silicon: {
        amount: 1
      },
      Nitrogen: {
        amount: 1
      },
      Potassium: {
        amount: 1
      }
    },
    products: {
      Dylovene: 3
    }
  },
  {
    type: "reaction",
    id: "Ethylredoxrazine",
    reactants: {
      Oxygen: {
        amount: 1
      },
      Dylovene: {
        amount: 1
      },
      Carbon: {
        amount: 1
      }
    },
    products: {
      Ethylredoxrazine: 3
    }
  },
  {
    type: "reaction",
    id: "Cryptobiolin",
    reactants: {
      Potassium: {
        amount: 1
      },
      Oxygen: {
        amount: 1
      },
      Sugar: {
        amount: 1
      }
    },
    products: {
      Cryptobiolin: 3
    }
  },
  {
    type: "reaction",
    id: "Arithrazine",
    reactants: {
      Hyronalin: {
        amount: 1
      },
      Hydrogen: {
        amount: 1
      }
    },
    products: {
      Arithrazine: 2
    }
  },
  {
    type: "reaction",
    id: "Bicaridine",
    reactants: {
      Inaprovaline: {
        amount: 1
      },
      Carbon: {
        amount: 1
      }
    },
    products: {
      Bicaridine: 2
    }
  },
  {
    type: "reaction",
    id: "Cryoxadone",
    reactants: {
      Dexalin: {
        amount: 1
      },
      Water: {
        amount: 1
      },
      Oxygen: {
        amount: 1
      }
    },
    products: {
      Cryoxadone: 3
    }
  },
  {
    type: "reaction",
    id: "Doxarubixadone",
    reactants: {
      Cryoxadone: {
        amount: 1
      },
      UnstableMutagen: {
        amount: 1
      }
    },
    products: {
      Doxarubixadone: 2
    }
  },
  {
    type: "reaction",
    id: "Epinephrine",
    reactants: {
      Phenol: {
        amount: 1
      },
      Acetone: {
        amount: 1
      },
      Chlorine: {
        amount: 1
      },
      Hydroxide: {
        amount: 1
      }
    },
    products: {
      Epinephrine: 4
    }
  },
  {
    type: "reaction",
    id: "Dermaline",
    reactants: {
      Kelotane: {
        amount: 1
      },
      Oxygen: {
        amount: 1
      },
      Phosphorus: {
        amount: 1
      }
    },
    products: {
      Dermaline: 3
    }
  },
  {
    type: "reaction",
    id: "Dexalin",
    reactants: {
      Oxygen: {
        amount: 2
      },
      Plasma: {
        amount: 1,
        catalyst: true
      }
    },
    products: {
      Dexalin: 3
    }
  },
  {
    type: "reaction",
    id: "DexalinPlus",
    reactants: {
      Dexalin: {
        amount: 1
      },
      Carbon: {
        amount: 1
      },
      Iron: {
        amount: 1
      }
    },
    products: {
      DexalinPlus: 3
    }
  },
  {
    type: "reaction",
    id: "Hyronalin",
    reactants: {
      Radium: {
        amount: 1
      },
      Dylovene: {
        amount: 1
      }
    },
    products: {
      Hyronalin: 2
    }
  },
  {
    type: "reaction",
    id: "Inaprovaline",
    reactants: {
      Oxygen: {
        amount: 1
      },
      Carbon: {
        amount: 1
      },
      Sugar: {
        amount: 1
      }
    },
    products: {
      Inaprovaline: 3
    }
  },
  {
    type: "reaction",
    id: "Ipecac",
    reactants: {
      Potassium: {
        amount: 1
      },
      Nitrogen: {
        amount: 1
      },
      Ammonia: {
        amount: 1
      }
    },
    products: {
      Ipecac: 2
    }
  },
  {
    type: "reaction",
    id: "TranexamicAcid",
    reactants: {
      Inaprovaline: {
        amount: 1
      },
      SulfuricAcid: {
        amount: 1
      },
      Sugar: {
        amount: 1
      }
    },
    products: {
      TranexamicAcid: 3
    }
  },
  {
    type: "reaction",
    id: "Kelotane",
    reactants: {
      Silicon: {
        amount: 1
      },
      Carbon: {
        amount: 1
      }
    },
    products: {
      Kelotane: 2
    }
  },
  {
    type: "reaction",
    id: "Leporazine",
    reactants: {
      Copper: {
        amount: 1
      },
      Fersilicite: {
        amount: 1
      },
      Plasma: {
        amount: 1,
        catalyst: true
      }
    },
    products: {
      Leporazine: 2
    }
  },
  {
    type: "reaction",
    id: "Phalanximine",
    reactants: {
      Hyronalin: {
        amount: 1
      },
      Ethanol: {
        amount: 1
      },
      UnstableMutagen: {
        amount: 1
      }
    },
    products: {
      Phalanximine: 3
    }
  },
  {
    type: "reaction",
    id: "Ambuzol",
    reactants: {
      Dylovene: {
        amount: 1
      },
      Ammonia: {
        amount: 1
      },
      ZombieBlood: {
        amount: 2
      }
    },
    products: {
      Ambuzol: 4
    }
  },
  {
    type: "reaction",
    id: "AmbuzolPlus",
    reactants: {
      Ambuzol: {
        amount: 5
      },
      Omnizine: {
        amount: 5
      }
    },
    products: {
      AmbuzolPlus: 10
    }
  },
  {
    type: "reaction",
    id: "Synaptizine",
    reactants: {
      Lithium: {
        amount: 1
      },
      Sugar: {
        amount: 1
      },
      Water: {
        amount: 1
      }
    },
    products: {
      Synaptizine: 3
    }
  },
  {
    type: "reaction",
    id: "Tricordrazine",
    reactants: {
      Inaprovaline: {
        amount: 1
      },
      Dylovene: {
        amount: 1
      }
    },
    products: {
      Tricordrazine: 2
    }
  },
  {
    type: "reaction",
    id: "HeartbreakerToxin",
    reactants: {
      DexalinPlus: {
        amount: 1
      },
      MindbreakerToxin: {
        amount: 1
      }
    },
    products: {
      HeartbreakerToxin: 2
    }
  },
  {
    type: "reaction",
    id: "Impedrezene",
    minTemp: 370,
    reactants: {
      Mercury: {
        amount: 1
      },
      Oxygen: {
        amount: 1
      },
      Water: {
        amount: 1
      }
    },
    products: {
      Impedrezene: 1
    }
  },
  {
    type: "reaction",
    id: "Lexorin",
    impact: "High",
    reactants: {
      HeartbreakerToxin: {
        amount: 1
      },
      Plasma: {
        amount: 1
      },
      Vestine: {
        amount: 1
      }
    },
    products: {
      Lexorin: 2
    }
  },
  {
    type: "reaction",
    id: "Lipozine",
    reactants: {
      TableSalt: {
        amount: 1
      },
      Ethanol: {
        amount: 1
      },
      Radium: {
        amount: 1
      }
    },
    products: {
      Lipozine: 3
    }
  },
  {
    type: "reaction",
    id: "Mannitol",
    reactants: {
      Hydrogen: {
        amount: 1
      },
      Water: {
        amount: 1
      },
      Sugar: {
        amount: 1
      }
    },
    products: {
      Mannitol: 3
    }
  },
  {
    type: "reaction",
    id: "MindbreakerToxin",
    minTemp: 370,
    reactants: {
      Silicon: {
        amount: 1
      },
      Hydrogen: {
        amount: 1
      },
      Dylovene: {
        amount: 1
      }
    },
    products: {
      MindbreakerToxin: 3
    }
  },
  {
    type: "reaction",
    id: "SpaceDrugs",
    reactants: {
      Mercury: {
        amount: 1
      },
      Sugar: {
        amount: 1
      },
      Lithium: {
        amount: 1
      }
    },
    products: {
      SpaceDrugs: 3
    }
  },
  {
    type: "reaction",
    id: "Ultravasculine",
    reactants: {
      Histamine: {
        amount: 2
      },
      Plasma: {
        amount: 1,
        catalyst: true
      }
    },
    products: {
      Ultravasculine: 2
    }
  },
  {
    type: "reaction",
    id: "Oculine",
    reactants: {
      TableSalt: {
        amount: 1
      },
      Blood: {
        amount: 1
      },
      Hydroxide: {
        amount: 2
      }
    },
    products: {
      Oculine: 4
    }
  },
  {
    type: "reaction",
    id: "Siderlac",
    reactants: {
      Aloe: {
        amount: 1
      },
      Stellibinin: {
        amount: 1
      }
    },
    products: {
      Siderlac: 2
    }
  },
  {
    type: "reaction",
    id: "Cognizine",
    reactants: {
      CarpoToxin: {
        amount: 1
      },
      Siderlac: {
        amount: 1
      },
      Acetone: {
        amount: 1
      }
    },
    products: {
      Cognizine: 1
    }
  },
  {
    type: "reaction",
    id: "Sigynate",
    impact: "Medium",
    minTemp: 370,
    reactants: {
      SodiumCarbonate: {
        amount: 1
      },
      SodiumHydroxide: {
        amount: 1
      },
      Kelotane: {
        amount: 1
      },
      Water: {
        amount: 1
      },
      Sugar: {
        amount: 1
      }
    },
    products: {
      Sigynate: 4
    }
  },
  {
    type: "reaction",
    id: "Saline",
    reactants: {
      Water: {
        amount: 4
      },
      TableSalt: {
        amount: 1
      }
    },
    products: {
      Saline: 5
    }
  },
  {
    type: "reaction",
    id: "Lacerinol",
    impact: "Medium",
    minTemp: 335,
    reactants: {
      Bicaridine: {
        amount: 1
      },
      Benzene: {
        amount: 1
      }
    },
    products: {
      Lacerinol: 2
    }
  },
  {
    type: "reaction",
    id: "Puncturase",
    impact: "Medium",
    minTemp: 325,
    reactants: {
      Bicaridine: {
        amount: 1
      },
      Hydroxide: {
        amount: 1
      }
    },
    products: {
      Puncturase: 2
    }
  },
  {
    type: "reaction",
    id: "Bruizine",
    impact: "Medium",
    reactants: {
      Bicaridine: {
        amount: 1
      },
      Lithium: {
        amount: 0.9
      },
      Sugar: {
        amount: 1
      }
    },
    products: {
      Bruizine: 2
    }
  },
  {
    type: "reaction",
    id: "BicarLacerinol",
    impact: "Medium",
    reactants: {
      Lacerinol: {
        amount: 1
      },
      Bicaridine: {
        amount: 1
      }
    },
    products: {
      Razorium: 1
    }
  },
  {
    type: "reaction",
    id: "BicarPuncturase",
    impact: "Medium",
    reactants: {
      Puncturase: {
        amount: 1
      },
      Bicaridine: {
        amount: 1
      }
    },
    products: {
      Razorium: 1
    }
  },
  {
    type: "reaction",
    id: "BicarBruizine",
    impact: "Medium",
    reactants: {
      Bruizine: {
        amount: 1
      },
      Bicaridine: {
        amount: 1
      }
    },
    products: {
      Razorium: 1
    }
  },
  {
    type: "reaction",
    id: "BruizineLacerinol",
    impact: "Medium",
    reactants: {
      Lacerinol: {
        amount: 1
      },
      Bruizine: {
        amount: 1
      }
    },
    products: {
      Razorium: 1
    }
  },
  {
    type: "reaction",
    id: "BruizinePuncturase",
    impact: "Medium",
    reactants: {
      Puncturase: {
        amount: 1
      },
      Bruizine: {
        amount: 1
      }
    },
    products: {
      Razorium: 1
    }
  },
  {
    type: "reaction",
    id: "PuncturaseLacerinol",
    impact: "Medium",
    reactants: {
      Lacerinol: {
        amount: 1
      },
      Puncturase: {
        amount: 1
      }
    },
    products: {
      Razorium: 1
    }
  },
  {
    type: "reaction",
    id: "Diphenhydramine",
    impact: "Medium",
    minTemp: 377.59,
    reactants: {
      Diethylamine: {
        amount: 1
      },
      Oil: {
        amount: 1
      },
      TableSalt: {
        amount: 1
      },
      Carbon: {
        amount: 1
      },
      Ethanol: {
        amount: 1
      }
    },
    products: {
      Diphenhydramine: 3
    }
  },
  {
    type: "reaction",
    id: "Pyrazine",
    impact: "Medium",
    minTemp: 540,
    reactants: {
      Leporazine: {
        amount: 1
      },
      Dermaline: {
        amount: 1
      },
      Carbon: {
        amount: 1
      }
    },
    products: {
      Pyrazine: 3
    }
  },
  {
    type: "reaction",
    id: "Insuzine",
    impact: "Medium",
    minTemp: 433,
    reactants: {
      Leporazine: {
        amount: 1
      },
      Kelotane: {
        amount: 1
      },
      Silicon: {
        amount: 1
      }
    },
    products: {
      Insuzine: 3
    }
  },
  {
    type: "reaction",
    id: "Opporozidone",
    minTemp: 400,
    reactants: {
      Cognizine: {
        amount: 1
      },
      Plasma: {
        amount: 2
      },
      Doxarubixadone: {
        amount: 1
      }
    },
    products: {
      Opporozidone: 3
    }
  },
  {
    type: "reaction",
    id: "Necrosol",
    impact: "Medium",
    minTemp: 370,
    reactants: {
      Blood: {
        amount: 3
      },
      Omnizine: {
        amount: 1
      },
      Cryoxadone: {
        amount: 2
      }
    },
    products: {
      Necrosol: 2
    }
  },
  {
    type: "reaction",
    id: "Aloxadone",
    impact: "Medium",
    reactants: {
      Cryoxadone: {
        amount: 1
      },
      Aloe: {
        amount: 2
      },
      Sigynate: {
        amount: 2
      }
    },
    products: {
      Aloxadone: 4
    }
  },
  {
    type: "reaction",
    id: "Psicodine",
    impact: "Medium",
    reactants: {
      Mannitol: {
        amount: 2
      },
      Impedrezene: {
        amount: 1
      },
      Water: {
        amount: 2
      }
    },
    products: {
      Psicodine: 4
    }
  },
  {
    type: "reaction",
    id: "Lipolicide",
    reactants: {
      Ephedrine: {
        amount: 1
      },
      Diethylamine: {
        amount: 1
      },
      Mercury: {
        amount: 1
      }
    },
    products: {
      Lipolicide: 3
    }
  },
  {
    type: "reaction",
    id: "Happiness",
    reactants: {
      Laughter: {
        amount: 2
      },
      Epinephrine: {
        amount: 1
      },
      Ethanol: {
        amount: 1
      },
      Plasma: {
        amount: 5,
        catalyst: true
      }
    },
    products: {
      Happiness: 4
    }
  },
  {
    type: "reaction",
    id: "PotassiumIodide",
    reactants: {
      Potassium: {
        amount: 1
      },
      Iodine: {
        amount: 1
      }
    },
    products: {
      PotassiumIodide: 2
    }
  },
  {
    type: "reaction",
    id: "Haloperidol",
    reactants: {
      Aluminium: {
        amount: 1
      },
      Chlorine: {
        amount: 1
      },
      Fluorine: {
        amount: 1
      },
      Oil: {
        amount: 1
      },
      PotassiumIodide: {
        amount: 1
      }
    },
    products: {
      Haloperidol: 5
    }
  }
];
const pyrotechnic = [
  {
    type: "reaction",
    id: "Napalm",
    reactants: {
      Oil: {
        amount: 1
      },
      WeldingFuel: {
        amount: 1
      },
      Ethanol: {
        amount: 1
      }
    },
    products: {
      Napalm: 3
    }
  },
  {
    type: "reaction",
    id: "Phlogiston",
    reactants: {
      Phosphorus: {
        amount: 1
      },
      SulfuricAcid: {
        amount: 1
      },
      Plasma: {
        amount: 1
      }
    },
    effects: {
      gas: "Plasma",
      visualType: "LargeCaution",
      messages: [
        "phlogiston-plasma-created"
      ],
      type: "Pvs"
    },
    products: {
      Phlogiston: 3
    }
  },
  {
    type: "reaction",
    id: "ChlorineTrifluoride",
    minTemp: 370,
    priority: 20,
    reactants: {
      Chlorine: {
        amount: 1
      },
      Fluorine: {
        amount: 3
      }
    },
    effects: {
      explosionType: "Default",
      maxIntensity: 200,
      intensityPerUnit: 5,
      intensitySlope: 5,
      maxTotalIntensity: 200,
      messages: [
        "clf3-explosion"
      ],
      type: "Pvs",
      visualType: "LargeCaution"
    },
    products: {
      ChlorineTrifluoride: 4
    }
  },
  {
    type: "reaction",
    id: "Ash",
    minTemp: 520,
    reactants: {
      Oil: {
        amount: 1
      }
    },
    products: {
      Ash: 1
    }
  },
  {
    type: "reaction",
    id: "WeldingFuelBreakdown",
    source: true,
    requiredMixerCategories: [
      "Centrifuge"
    ],
    reactants: {
      WeldingFuel: {
        amount: 10
      }
    },
    products: {
      Ethanol: 5,
      Hydrogen: 3,
      Sulfur: 2
    }
  }
];
const gas = [
  {
    type: "reaction",
    id: "CarbonDioxideBreakdown",
    source: true,
    requiredMixerCategories: [
      "Electrolysis"
    ],
    reactants: {
      CarbonDioxide: {
        amount: 3
      }
    },
    products: {
      Carbon: 1,
      Oxygen: 2
    }
  },
  {
    type: "reaction",
    id: "NitrousOxideBreakdown",
    source: true,
    requiredMixerCategories: [
      "Electrolysis"
    ],
    reactants: {
      NitrousOxide: {
        amount: 3
      }
    },
    products: {
      Nitrogen: 2,
      Oxygen: 1
    }
  }
];
const css = {
  code: ".root.svelte-k1h5dv{font-family:var(--agnostic-font-family-body);font-size:var(--agnostic-body);color:var(--agnostic-font-color);-webkit-font-smoothing:antialiased;line-height:1.5}.container.svelte-k1h5dv{margin:0 auto}.card-grid.svelte-k1h5dv{margin:auto;gap:1rem;padding-top:2rem;padding-left:5%;display:flex;flex-wrap:wrap}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["\\n<script>\\n    import { get } from 'svelte/store';\\n\\n    import 'agnostic-svelte/css/common.min.css';\\n    import { Header, Input,HeaderNav,HeaderNavItem} from 'agnostic-svelte';\\n    import Chem from '../components/chem.svelte';\\n    let filterPromise;\\n\\n    let searchTerm = ''\\n    $: {\\n        console.log(searchTerm)\\n        filterPromise = getFiltered()\\n    }\\n    // JSON\\n    import chemicalsf from '../reactions/chemicals.json'\\n    import biological from '../reactions/biological.json'\\n    import botany from '../reactions/botany.json'\\n    import cleaning from '../reactions/cleaning.json'\\n    import fun from '../reactions/fun.json'\\n    import medicine from '../reactions/medicine.json'\\n    import pyrotechnic from '../reactions/pyrotechnic.json'\\n    import gas from '../reactions/gas.json'\\n    import food from '../reactions/food.json'\\n    \\n    let chemicals = chemicalsf.concat(fun).concat(medicine).concat(pyrotechnic).concat(gas).concat(biological).concat(cleaning).concat(botany)\\n\\n    async function getFiltered() {\\n        if(searchTerm.length > 0) {\\n            let filter = await chemicals.filter(data => {\\n                return data.id.toLowerCase().includes(searchTerm.toLowerCase());\\n            });\\n            return filter\\n        } else {\\n            return chemicals\\n        }\\n    }\\n\\n    filterPromise = getFiltered();\\n\\n\\n\\n\\n    //console.log(chemicals)\\n\\n\\n\\n\\n\\t\\n<\/script>\\n\\n<div class=\\"root\\">\\n    <div class=\\"container\\">\\n        <Header isHeaderContentEnd=\\"{true}\\">\\n            <a class=\\"flex-fill\\" href=\\"https://web.dev/\\">SS14WebChem</a>\\n            <HeaderNav>\\n                <HeaderNavItem>\\n                    <!---<div><code>bind:value</code> = {searchTerm}</div> -->\\n                    <Input bind:value={searchTerm}  uniqueId=\\"2\\" isUnderlined isUnderlinedWithBackground isRounded placeholder=\\"Search\\"/>\\n                </HeaderNavItem>\\n            </HeaderNav>\\n        </Header>\\n        <div class=\\"container card-grid\\">\\n\\n                {#await filterPromise}\\n                    Loading...\\n                {:then chemicalz}\\n                    {#each chemicalz as chemical}\\n                        <Chem title={chemical.id} reactants={chemical.reactants} products={chemical.products} minTemp={chemical.minTemp}/>\\n                    {/each}\\n                {:catch someError}\\n                    System error: {someError.message}\\n                {/await}\\n            </div>\\n\\n    </div>\\n</div>\\n\\n<style>\\n    .root {\\n        font-family: var(--agnostic-font-family-body);\\n        font-size: var(--agnostic-body);\\n        color: var(--agnostic-font-color);\\n        -webkit-font-smoothing: antialiased;\\n        line-height: 1.5;\\n    }\\n\\n\\n    .container {\\n        margin: 0 auto;\\n    }   \\n\\n    .card-grid {\\n        margin: auto;\\n        gap: 1rem;\\n        padding-top: 2rem;\\n        padding-left: 5%;\\n        display: flex;\\n        flex-wrap: wrap;\\n   }\\n   \\n\\n   \\n</style>"],"names":[],"mappings":"AA+EI,mBAAM,CACF,WAAW,CAAE,IAAI,2BAA2B,CAAC,CAC7C,SAAS,CAAE,IAAI,eAAe,CAAC,CAC/B,KAAK,CAAE,IAAI,qBAAqB,CAAC,CACjC,sBAAsB,CAAE,WAAW,CACnC,WAAW,CAAE,GACjB,CAGA,wBAAW,CACP,MAAM,CAAE,CAAC,CAAC,IACd,CAEA,wBAAW,CACP,MAAM,CAAE,IAAI,CACZ,GAAG,CAAE,IAAI,CACT,WAAW,CAAE,IAAI,CACjB,YAAY,CAAE,EAAE,CAChB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAChB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filterPromise;
  let searchTerm = "";
  let chemicals = chemicalsf.concat(fun).concat(medicine).concat(pyrotechnic).concat(gas).concat(biological).concat(cleaning).concat(botany);
  async function getFiltered() {
    if (searchTerm.length > 0) {
      let filter = await chemicals.filter((data) => {
        return data.id.toLowerCase().includes(searchTerm.toLowerCase());
      });
      return filter;
    } else {
      return chemicals;
    }
  }
  filterPromise = getFiltered();
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        console.log(searchTerm);
        filterPromise = getFiltered();
      }
    }
    $$rendered = `<div class="root svelte-k1h5dv"><div class="container svelte-k1h5dv">${validate_component(Header, "Header").$$render($$result, { isHeaderContentEnd: true }, {}, {
      default: () => {
        return `<a class="flex-fill" href="https://web.dev/" data-svelte-h="svelte-wj4lh">SS14WebChem</a> ${validate_component(HeaderNav, "HeaderNav").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(HeaderNavItem, "HeaderNavItem").$$render($$result, {}, {}, {
              default: () => {
                return ` ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    uniqueId: "2",
                    isUnderlined: true,
                    isUnderlinedWithBackground: true,
                    isRounded: true,
                    placeholder: "Search",
                    value: searchTerm
                  },
                  {
                    value: ($$value) => {
                      searchTerm = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })}`;
          }
        })}`;
      }
    })} <div class="container card-grid svelte-k1h5dv">${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return `
                    Loading...
                `;
      }
      return function(chemicalz) {
        return ` ${each(chemicalz, (chemical) => {
          return `${validate_component(Chem, "Chem").$$render(
            $$result,
            {
              title: chemical.id,
              reactants: chemical.reactants,
              products: chemical.products,
              minTemp: chemical.minTemp
            },
            {},
            {}
          )}`;
        })} `;
      }(__value);
    }(filterPromise)}</div></div> </div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
