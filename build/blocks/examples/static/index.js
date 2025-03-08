(() => {
	'use strict';
	var e,
		r = {
			601: () => {
				const e = window.wp.blocks,
					r = window.wp.i18n,
					o = window.wp.blockEditor,
					t = window.ReactJSXRuntime,
					i = JSON.parse('{"UU":"example/static"}');
				(0, e.registerBlockType)(i.UU, {
					edit: function () {
						return (0, t.jsx)('p', {
							...(0, o.useBlockProps)(),
							children: (0, r.__)(
								'Custom Embed (static block) in the editor',
								'wp-multi-block-starter'
							),
						});
					},
					save: function () {
						return (0, t.jsx)('p', {
							...o.useBlockProps.save(),
							children:
								'Custom Embed (static block) on the frontend',
						});
					},
				});
			},
		},
		o = {};
	function t(e) {
		var i = o[e];
		if (void 0 !== i) return i.exports;
		var n = (o[e] = { exports: {} });
		return r[e](n, n.exports, t), n.exports;
	}
	(t.m = r),
		(e = []),
		(t.O = (r, o, i, n) => {
			if (!o) {
				var s = 1 / 0;
				for (p = 0; p < e.length; p++) {
					for (var [o, i, n] = e[p], l = !0, a = 0; a < o.length; a++)
						(!1 & n || s >= n) &&
						Object.keys(t.O).every((e) => t.O[e](o[a]))
							? o.splice(a--, 1)
							: ((l = !1), n < s && (s = n));
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
			e[p] = [o, i, n];
		}),
		(t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
		(() => {
			var e = { 759: 0, 167: 0 };
			t.O.j = (r) => 0 === e[r];
			var r = (r, o) => {
					var i,
						n,
						[s, l, a] = o,
						c = 0;
					if (s.some((r) => 0 !== e[r])) {
						for (i in l) t.o(l, i) && (t.m[i] = l[i]);
						if (a) var p = a(t);
					}
					for (r && r(o); c < s.length; c++)
						(n = s[c]), t.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
					return t.O(p);
				},
				o = (globalThis.webpackChunkmulti_block_mayhem =
					globalThis.webpackChunkmulti_block_mayhem || []);
			o.forEach(r.bind(null, 0)), (o.push = r.bind(null, o.push.bind(o)));
		})();
	var i = t.O(void 0, [167], () => t(601));
	i = t.O(i);
})();
