export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "ss14webchem.github.io/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.B3OHP1xm.js","app":"_app/immutable/entry/app.BMYFkY4G.js","imports":["_app/immutable/entry/start.B3OHP1xm.js","_app/immutable/chunks/entry.CSzB1aAY.js","_app/immutable/chunks/scheduler.ClYQhJMz.js","_app/immutable/entry/app.BMYFkY4G.js","_app/immutable/chunks/scheduler.ClYQhJMz.js","_app/immutable/chunks/index.Wh2IFfSo.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
