(() => {
	'use strict';
	var e,
		o = {
			23: () => {
				const e = window.wp.blocks,
					o = window.wp.primitives,
					a = window.ReactJSXRuntime,
					l = (0, a.jsx)(o.SVG, {
						viewBox: '0 0 24 24',
						xmlns: 'http://www.w3.org/2000/svg',
						children: (0, a.jsx)(o.Path, {
							d: 'M6 5.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM4 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm11-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM13 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V6zm5 8.5h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zM15 13a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3zm-9 1.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM4 15a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3z',
							fillRule: 'evenodd',
							clipRule: 'evenodd',
						}),
					}),
					r = window.wp.i18n,
					t = window.wp.blockEditor,
					i = window.wp.components,
					n = window.wp.hooks,
					s = window.wp.data;
				(0, n.addFilter)(
					'blockEditor.useSetting.before',
					'multi-block-mayhem/filter-mosaic-gallery-image-settings',
					function (e, o, a, l) {
						if ('core/image' !== l) return e;
						const { getBlockParents: r, getBlockName: t } = (0, s.select)(
							'core/block-editor'
						);
						if (r(a, !0).some(e => 'multi-block-mayhem/mosaic-gallery' === t(e))) {
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
				const m = (0, window.wp.compose.createHigherOrderComponent)(
					o => l => {
						if ('core/image' === l.name) {
							const { getBlockParents: o, getBlockName: a } = (0, s.select)(
								'core/block-editor'
							);
							o(l.clientId, !0).some(
								e => 'multi-block-mayhem/mosaic-gallery' === a(e)
							) &&
								((0, e.unregisterBlockStyle)('core/image', 'default'),
								(0, e.unregisterBlockStyle)('core/image', 'rounded'));
						}
						return (0, a.jsx)(o, { ...l });
					},
					'MosaicGalleryInnerblockImageStyles'
				);
				(0, n.addFilter)(
					'editor.BlockEdit',
					'multi-block-mayhem/filter-mosaic-gallery-image-styles',
					m
				);
				const c = JSON.parse('{"UU":"multi-block-mayhem/mosaic-gallery"}');
				(0, e.registerBlockType)(c.UU, {
					icon: l,
					edit: function ({ attributes: e, setAttributes: o, style: l }) {
						const { columns: n, gap: s, radius: m } = e,
							c = (0, t.useBlockProps)({
								className: 'mbm-editor',
								style: {
									...l,
									'--mbm-mosaic-gallery-cols': String(n),
									'--mbm-mosaic-gallery-gap': `${s}px`,
									'--mbm-mosaic-gallery-radius': `${m}px`,
								},
							}),
							u = Array(6).fill(['core/image', {}]);
						return (0, a.jsxs)(a.Fragment, {
							children: [
								(0, a.jsx)(t.InspectorControls, {
									children: (0, a.jsxs)(i.PanelBody, {
										title: (0, r.__)('Mosaic Settings', 'multi-block-mayhem'),
										children: [
											(0, a.jsx)(i.RangeControl, {
												label: (0, r.__)(
													'Number of Columns',
													'multi-block-mayhem'
												),
												min: 1,
												max: 6,
												value: n,
												onChange: e => o({ columns: e }),
											}),
											(0, a.jsx)(i.RangeControl, {
												label: (0, r.__)(
													'Gallery Gap',
													'multi-block-mayhem'
												),
												min: 0,
												max: 50,
												value: s,
												onChange: e => o({ gap: e }),
											}),
											(0, a.jsx)(i.RangeControl, {
												label: (0, r.__)(
													'Border Radius',
													'multi-block-mayhem'
												),
												min: 0,
												max: 50,
												value: m,
												onChange: e => o({ radius: e }),
											}),
										],
									}),
								}),
								(0, a.jsx)('div', {
									...c,
									children: (0, a.jsx)(t.InnerBlocks, {
										allowedBlocks: ['core/image'],
										template: u,
										orientation: 'horizontal',
										templateLock: !1,
									}),
								}),
							],
						});
					},
					save: function ({ attributes: e }) {
						const { columns: o, gap: l, radius: r } = e,
							i = t.useBlockProps.save({
								style: {
									'--mbm-mosaic-gallery-cols': String(o),
									'--mbm-mosaic-gallery-gap': `${l}px`,
									'--mbm-mosaic-gallery-radius': `${r}px`,
								},
							});
						return (0, a.jsx)('div', {
							...i,
							children: (0, a.jsx)(t.InnerBlocks.Content, {}),
						});
					},
				});
			},
		},
		a = {};
	function l(e) {
		var r = a[e];
		if (void 0 !== r) return r.exports;
		var t = (a[e] = { exports: {} });
		return o[e](t, t.exports, l), t.exports;
	}
	(l.m = o),
		(e = []),
		(l.O = (o, a, r, t) => {
			if (!a) {
				var i = 1 / 0;
				for (c = 0; c < e.length; c++) {
					for (var [a, r, t] = e[c], n = !0, s = 0; s < a.length; s++)
						(!1 & t || i >= t) && Object.keys(l.O).every(e => l.O[e](a[s]))
							? a.splice(s--, 1)
							: ((n = !1), t < i && (i = t));
					if (n) {
						e.splice(c--, 1);
						var m = r();
						void 0 !== m && (o = m);
					}
				}
				return o;
			}
			t = t || 0;
			for (var c = e.length; c > 0 && e[c - 1][2] > t; c--) e[c] = e[c - 1];
			e[c] = [a, r, t];
		}),
		(l.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o)),
		(() => {
			var e = { 738: 0, 718: 0 };
			l.O.j = o => 0 === e[o];
			var o = (o, a) => {
					var r,
						t,
						[i, n, s] = a,
						m = 0;
					if (i.some(o => 0 !== e[o])) {
						for (r in n) l.o(n, r) && (l.m[r] = n[r]);
						if (s) var c = s(l);
					}
					for (o && o(a); m < i.length; m++)
						(t = i[m]), l.o(e, t) && e[t] && e[t][0](), (e[t] = 0);
					return l.O(c);
				},
				a = (globalThis.webpackChunkmulti_block_mayhem =
					globalThis.webpackChunkmulti_block_mayhem || []);
			a.forEach(o.bind(null, 0)), (a.push = o.bind(null, a.push.bind(a)));
		})();
	var r = l.O(void 0, [718], () => l(23));
	r = l.O(r);
})();
