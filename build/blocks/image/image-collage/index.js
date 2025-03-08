(() => {
	'use strict';
	var e,
		o = {
			881: () => {
				const e = window.wp.blocks,
					o = window.wp.primitives,
					r = window.ReactJSXRuntime,
					i = (0, r.jsx)(o.SVG, {
						xmlns: 'http://www.w3.org/2000/svg',
						viewBox: '0 0 24 24',
						children: (0, r.jsx)(o.Path, {
							d: 'm3 5c0-1.10457.89543-2 2-2h13.5c1.1046 0 2 .89543 2 2v13.5c0 1.1046-.8954 2-2 2h-13.5c-1.10457 0-2-.8954-2-2zm2-.5h6v6.5h-6.5v-6c0-.27614.22386-.5.5-.5zm-.5 8v6c0 .2761.22386.5.5.5h6v-6.5zm8 0v6.5h6c.2761 0 .5-.2239.5-.5v-6zm0-8v6.5h6.5v-6c0-.27614-.2239-.5-.5-.5z',
							fillRule: 'evenodd',
							clipRule: 'evenodd',
						}),
					}),
					t = window.wp.i18n,
					l = window.wp.blockEditor,
					c = window.wp.hooks,
					n = window.wp.data;
				(0, c.addFilter)(
					'blockEditor.useSetting.before',
					'multi-block-mayhem/image-collage-innerblock-image-settings',
					function (e, o, r, i) {
						if ('core/image' !== i) return e;
						const { getBlockParents: t, getBlockName: l } = (0,
						n.select)('core/block-editor');
						if (
							t(r, !0).some(
								(e) =>
									'multi-block-mayhem/image-collage' === l(e)
							)
						) {
							const e = {
								'border.color': !1,
								'border.radius': !1,
								'border.width': !1,
								shadow: !1,
								'color.customDuotone': !1,
								'spacing.margin': !1,
							};
							if (e.hasOwnProperty(o)) return e[o];
						}
						return e;
					}
				);
				const a = (0, window.wp.compose.createHigherOrderComponent)(
					(o) => (i) => {
						if ('core/image' === i.name) {
							const { getBlockParents: o, getBlockName: r } = (0,
							n.select)('core/block-editor');
							o(i.clientId, !0).some(
								(e) =>
									'multi-block-mayhem/image-collage' === r(e)
							) &&
								((0, e.unregisterBlockStyle)(
									'core/image',
									'default'
								),
								(0, e.unregisterBlockStyle)(
									'core/image',
									'rounded'
								));
						}
						return (0, r.jsx)(o, { ...i });
					},
					'ImageCollageInnerblockImageStyles'
				);
				(0, c.addFilter)(
					'editor.BlockEdit',
					'multi-block-mayhem/image-collage-innerblock-image-styles',
					a
				);
				const m = JSON.parse(
					'{"UU":"multi-block-mayhem/image-collage"}'
				);
				(0, e.registerBlockType)(m.UU, {
					icon: i,
					edit: function () {
						return (0, r.jsx)('p', {
							...(0, l.useBlockProps)(),
							children: (0, t.__)(
								'Image Collage in the editor!',
								'multi-block-mayhem'
							),
						});
					},
				});
			},
		},
		r = {};
	function i(e) {
		var t = r[e];
		if (void 0 !== t) return t.exports;
		var l = (r[e] = { exports: {} });
		return o[e](l, l.exports, i), l.exports;
	}
	(i.m = o),
		(e = []),
		(i.O = (o, r, t, l) => {
			if (!r) {
				var c = 1 / 0;
				for (s = 0; s < e.length; s++) {
					for (var [r, t, l] = e[s], n = !0, a = 0; a < r.length; a++)
						(!1 & l || c >= l) &&
						Object.keys(i.O).every((e) => i.O[e](r[a]))
							? r.splice(a--, 1)
							: ((n = !1), l < c && (c = l));
					if (n) {
						e.splice(s--, 1);
						var m = t();
						void 0 !== m && (o = m);
					}
				}
				return o;
			}
			l = l || 0;
			for (var s = e.length; s > 0 && e[s - 1][2] > l; s--)
				e[s] = e[s - 1];
			e[s] = [r, t, l];
		}),
		(i.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o)),
		(() => {
			var e = { 48: 0, 808: 0 };
			i.O.j = (o) => 0 === e[o];
			var o = (o, r) => {
					var t,
						l,
						[c, n, a] = r,
						m = 0;
					if (c.some((o) => 0 !== e[o])) {
						for (t in n) i.o(n, t) && (i.m[t] = n[t]);
						if (a) var s = a(i);
					}
					for (o && o(r); m < c.length; m++)
						(l = c[m]), i.o(e, l) && e[l] && e[l][0](), (e[l] = 0);
					return i.O(s);
				},
				r = (globalThis.webpackChunkmulti_block_mayhem =
					globalThis.webpackChunkmulti_block_mayhem || []);
			r.forEach(o.bind(null, 0)), (r.push = o.bind(null, r.push.bind(r)));
		})();
	var t = i.O(void 0, [808], () => i(881));
	t = i.O(t);
})();
