(() => {
	'use strict';
	var r,
		e = {
			793: () => {
				const r = window.wp.blocks,
					e = window.wp.i18n,
					o = window.wp.blockEditor,
					i = window.ReactJSXRuntime,
					t = JSON.parse('{"UU":"example/dynamic"}');
				(0, r.registerBlockType)(t.UU, {
					edit: function () {
						return (0, i.jsx)('p', {
							...(0, o.useBlockProps)(),
							children: (0, e.__)(
								'News Feed (dynamic block) in the editor',
								'wp-multi-block-starter'
							),
						});
					},
				});
			},
		},
		o = {};
	function i(r) {
		var t = o[r];
		if (void 0 !== t) return t.exports;
		var n = (o[r] = { exports: {} });
		return e[r](n, n.exports, i), n.exports;
	}
	(i.m = e),
		(r = []),
		(i.O = (e, o, t, n) => {
			if (!o) {
				var l = 1 / 0;
				for (p = 0; p < r.length; p++) {
					for (var [o, t, n] = r[p], a = !0, c = 0; c < o.length; c++)
						(!1 & n || l >= n) &&
						Object.keys(i.O).every((r) => i.O[r](o[c]))
							? o.splice(c--, 1)
							: ((a = !1), n < l && (l = n));
					if (a) {
						r.splice(p--, 1);
						var s = t();
						void 0 !== s && (e = s);
					}
				}
				return e;
			}
			n = n || 0;
			for (var p = r.length; p > 0 && r[p - 1][2] > n; p--)
				r[p] = r[p - 1];
			r[p] = [o, t, n];
		}),
		(i.o = (r, e) => Object.prototype.hasOwnProperty.call(r, e)),
		(() => {
			var r = { 30: 0, 538: 0 };
			i.O.j = (e) => 0 === r[e];
			var e = (e, o) => {
					var t,
						n,
						[l, a, c] = o,
						s = 0;
					if (l.some((e) => 0 !== r[e])) {
						for (t in a) i.o(a, t) && (i.m[t] = a[t]);
						if (c) var p = c(i);
					}
					for (e && e(o); s < l.length; s++)
						(n = l[s]), i.o(r, n) && r[n] && r[n][0](), (r[n] = 0);
					return i.O(p);
				},
				o = (globalThis.webpackChunkmulti_block_mayhem =
					globalThis.webpackChunkmulti_block_mayhem || []);
			o.forEach(e.bind(null, 0)), (o.push = e.bind(null, o.push.bind(o)));
		})();
	var t = i.O(void 0, [538], () => i(793));
	t = i.O(t);
})();
