(() => {
	'use strict';
	var e,
		r = {
			130: () => {
				const e = window.wp.blocks,
					r = window.wp.i18n,
					t = window.wp.blockEditor,
					o = window.ReactJSXRuntime,
					i = JSON.parse('{"UU":"example/interactive"}');
				(0, e.registerBlockType)(i.UU, {
					edit: function ({ attributes: e, setAttributes: i }) {
						const n = (0, t.useBlockProps)();
						return (0, o.jsx)('p', {
							...n,
							children: (0, r.__)(
								'Example Interactive – hello from the editor!',
								'interactivity'
							),
						});
					},
				});
			},
		},
		t = {};
	function o(e) {
		var i = t[e];
		if (void 0 !== i) return i.exports;
		var n = (t[e] = { exports: {} });
		return r[e](n, n.exports, o), n.exports;
	}
	(o.m = r),
		(e = []),
		(o.O = (r, t, i, n) => {
			if (!t) {
				var a = 1 / 0;
				for (p = 0; p < e.length; p++) {
					for (var [t, i, n] = e[p], l = !0, s = 0; s < t.length; s++)
						(!1 & n || a >= n) &&
						Object.keys(o.O).every((e) => o.O[e](t[s]))
							? t.splice(s--, 1)
							: ((l = !1), n < a && (a = n));
					if (l) {
						e.splice(p--, 1);
						var c = i();
						void 0 !== c && (r = c);
					}
				}
				return r;
			}
			n = n || 0;
			for (var p = e.length; p > 0 && e[p - 1][2] > n; p--)
				e[p] = e[p - 1];
			e[p] = [t, i, n];
		}),
		(o.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
		(() => {
			var e = { 849: 0, 397: 0 };
			o.O.j = (r) => 0 === e[r];
			var r = (r, t) => {
					var i,
						n,
						[a, l, s] = t,
						c = 0;
					if (a.some((r) => 0 !== e[r])) {
						for (i in l) o.o(l, i) && (o.m[i] = l[i]);
						if (s) var p = s(o);
					}
					for (r && r(t); c < a.length; c++)
						(n = a[c]), o.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
					return o.O(p);
				},
				t = (globalThis.webpackChunkmulti_block_mayhem =
					globalThis.webpackChunkmulti_block_mayhem || []);
			t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
		})();
	var i = o.O(void 0, [397], () => o(130));
	i = o.O(i);
})();
