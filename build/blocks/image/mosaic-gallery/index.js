(() => {
	'use strict';
	var e,
		o = {
			23: () => {
				const e = window.wp.blocks,
					o = window.wp.primitives,
					a = window.ReactJSXRuntime,
					r = (0, a.jsx)(o.SVG, {
						viewBox: '0 0 24 24',
						xmlns: 'http://www.w3.org/2000/svg',
						children: (0, a.jsx)(o.Path, {
							d: 'M6 5.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM4 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm11-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM13 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V6zm5 8.5h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zM15 13a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3zm-9 1.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM4 15a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3z',
							fillRule: 'evenodd',
							clipRule: 'evenodd',
						}),
					}),
					l = window.wp.i18n,
					t = window.wp.blockEditor,
					i = window.wp.components,
					n = window.wp.hooks,
					s = window.wp.data;
				(0, n.addFilter)(
					'blockEditor.useSetting.before',
					'multi-block-mayhem/filter-mosaic-gallery-image-settings',
					function (e, o, a, r) {
						if ('core/image' !== r) return e;
						const { getBlockParents: l, getBlockName: t } = (0,
						s.select)('core/block-editor');
						if (
							l(a, !0).some(
								(e) =>
									'multi-block-mayhem/mosaic-gallery' === t(e)
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
				const c = (0, window.wp.compose.createHigherOrderComponent)(
					(o) => (r) => {
						if ('core/image' === r.name) {
							const { getBlockParents: o, getBlockName: a } = (0,
							s.select)('core/block-editor');
							o(r.clientId, !0).some(
								(e) =>
									'multi-block-mayhem/mosaic-gallery' === a(e)
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
						return (0, a.jsx)(o, { ...r });
					},
					'MosaicGalleryInnerblockImageStyles'
				);
				(0, n.addFilter)(
					'editor.BlockEdit',
					'multi-block-mayhem/filter-mosaic-gallery-image-styles',
					c
				);
				const m = JSON.parse(
					'{"UU":"multi-block-mayhem/mosaic-gallery"}'
				);
				(0, e.registerBlockType)(m.UU, {
					icon: r,
					edit: function ({
						attributes: e,
						setAttributes: o,
						style: r,
					}) {
						const { columns: n, gap: s, radius: c } = e,
							m = (0, t.useBlockProps)({
								className: 'multi-block-mayhem-editor',
								style: {
									...r,
									'--mosaic-cols': String(n),
									'--mosaic-gap': `${s}px`,
									'--mosaic-radius': `${c}px`,
								},
							}),
							u = Array(6).fill(['core/image', {}]);
						return (0, a.jsxs)(a.Fragment, {
							children: [
								(0, a.jsx)(t.InspectorControls, {
									children: (0, a.jsxs)(i.PanelBody, {
										title: (0, l.__)(
											'Mosaic Settings',
											'multi-block-mayhem'
										),
										children: [
											(0, a.jsx)(i.RangeControl, {
												label: (0, l.__)(
													'Number of Columns',
													'multi-block-mayhem'
												),
												min: 1,
												max: 6,
												value: n,
												onChange: (e) =>
													o({ columns: e }),
											}),
											(0, a.jsx)(i.RangeControl, {
												label: (0, l.__)(
													'Gallery Gap',
													'multi-block-mayhem'
												),
												min: 0,
												max: 50,
												value: s,
												onChange: (e) => o({ gap: e }),
											}),
											(0, a.jsx)(i.RangeControl, {
												label: (0, l.__)(
													'Border Radius',
													'multi-block-mayhem'
												),
												min: 0,
												max: 50,
												value: c,
												onChange: (e) =>
													o({ radius: e }),
											}),
										],
									}),
								}),
								(0, a.jsx)('div', {
									...m,
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
						const { columns: o, gap: r, radius: l } = e,
							i = t.useBlockProps.save({
								style: {
									'--mosaic-cols': String(o),
									'--mosaic-gap': `${r}px`,
									'--mosaic-radius': `${l}px`,
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
	function r(e) {
		var l = a[e];
		if (void 0 !== l) return l.exports;
		var t = (a[e] = { exports: {} });
		return o[e](t, t.exports, r), t.exports;
	}
	(r.m = o),
		(e = []),
		(r.O = (o, a, l, t) => {
			if (!a) {
				var i = 1 / 0;
				for (m = 0; m < e.length; m++) {
					for (var [a, l, t] = e[m], n = !0, s = 0; s < a.length; s++)
						(!1 & t || i >= t) &&
						Object.keys(r.O).every((e) => r.O[e](a[s]))
							? a.splice(s--, 1)
							: ((n = !1), t < i && (i = t));
					if (n) {
						e.splice(m--, 1);
						var c = l();
						void 0 !== c && (o = c);
					}
				}
				return o;
			}
			t = t || 0;
			for (var m = e.length; m > 0 && e[m - 1][2] > t; m--)
				e[m] = e[m - 1];
			e[m] = [a, l, t];
		}),
		(r.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o)),
		(() => {
			var e = { 738: 0, 718: 0 };
			r.O.j = (o) => 0 === e[o];
			var o = (o, a) => {
					var l,
						t,
						[i, n, s] = a,
						c = 0;
					if (i.some((o) => 0 !== e[o])) {
						for (l in n) r.o(n, l) && (r.m[l] = n[l]);
						if (s) var m = s(r);
					}
					for (o && o(a); c < i.length; c++)
						(t = i[c]), r.o(e, t) && e[t] && e[t][0](), (e[t] = 0);
					return r.O(m);
				},
				a = (globalThis.webpackChunkmulti_block_mayhem =
					globalThis.webpackChunkmulti_block_mayhem || []);
			a.forEach(o.bind(null, 0)), (a.push = o.bind(null, a.push.bind(a)));
		})();
	var l = r.O(void 0, [718], () => r(23));
	l = r.O(l);
})();
