(() => {
	'use strict';
	var e,
		l = {
			289: () => {
				const e = window.wp.blocks,
					l = window.wp.primitives,
					a = window.ReactJSXRuntime,
					o = (0, a.jsx)(l.SVG, {
						xmlns: 'http://www.w3.org/2000/svg',
						viewBox: '0 0 24 24',
						children: (0, a.jsx)(l.Path, {
							d: 'm3 5c0-1.10457.89543-2 2-2h13.5c1.1046 0 2 .89543 2 2v13.5c0 1.1046-.8954 2-2 2h-13.5c-1.10457 0-2-.8954-2-2zm2-.5h6v6.5h-6.5v-6c0-.27614.22386-.5.5-.5zm-.5 8v6c0 .2761.22386.5.5.5h6v-6.5zm8 0v6.5h6c.2761 0 .5-.2239.5-.5v-6zm0-8v6.5h6.5v-6c0-.27614-.2239-.5-.5-.5z',
							fillRule: 'evenodd',
							clipRule: 'evenodd',
						}),
					}),
					t = window.wp.i18n,
					i = window.wp.blockEditor,
					r = window.wp.components,
					n = JSON.parse('{"UU":"multi-block-mayhem/image-collage"}');
				(0, e.registerBlockType)(n.UU, {
					icon: o,
					edit: function ({ attributes: e, setAttributes: l, style: o }) {
						const { columns: n, gap: m, radius: s, aspectRatio: c } = e,
							u = (0, i.useBlockProps)({
								className: 'mbm-editor',
								style: {
									...o,
									'--mbm-image-collage-cols': String(n),
									'--mbm-image-collage-gap': `${m}px`,
									'--mbm-image-collage-radius': `${s}px`,
									'--mbm-image-collage-aspect-ratio': c,
								},
							}),
							g = Array(6).fill(['multi-block-mayhem/image-collage-item', {}]);
						return (0, a.jsxs)(a.Fragment, {
							children: [
								(0, a.jsx)(i.InspectorControls, {
									children: (0, a.jsxs)(r.PanelBody, {
										title: (0, t.__)('Collage Settings', 'multi-block-mayhem'),
										children: [
											(0, a.jsx)(r.RangeControl, {
												label: (0, t.__)(
													'Number of Columns',
													'multi-block-mayhem'
												),
												min: 1,
												max: 6,
												value: n,
												onChange: e => l({ columns: e }),
											}),
											(0, a.jsx)(r.RangeControl, {
												label: (0, t.__)(
													'Gallery Gap',
													'multi-block-mayhem'
												),
												min: 0,
												max: 50,
												value: m,
												onChange: e => l({ gap: e }),
											}),
											(0, a.jsx)(r.RangeControl, {
												label: (0, t.__)(
													'Border Radius',
													'multi-block-mayhem'
												),
												min: 0,
												max: 50,
												value: s,
												onChange: e => l({ radius: e }),
											}),
											(0, a.jsx)(r.SelectControl, {
												label: 'Aspect Ratio',
												value: c,
												options: [
													{ label: 'Square - 1:1', value: '1/1' },
													{ label: 'Standard - 4:3', value: '4/3' },
													{ label: 'Portrait - 3:4', value: '3/4' },
													{ label: 'Classic - 3:2', value: '3/2' },
													{
														label: 'Classic Portrait - 2:3',
														value: '2/3',
													},
													{ label: 'Wide - 16:9', value: '16/9' },
													{ label: 'Tall - 9:16', value: '9/16' },
												],
												onChange: e => l({ aspectRatio: e }),
											}),
										],
									}),
								}),
								(0, a.jsx)('div', {
									...u,
									children: (0, a.jsx)(i.InnerBlocks, {
										allowedBlocks: ['multi-block-mayhem/image-collage-item'],
										template: g,
										orientation: 'horizontal',
										templateLock: !1,
									}),
								}),
							],
						});
					},
					save: function ({ attributes: e }) {
						const { columns: l, gap: o, radius: t, aspectRatio: r } = e,
							n = i.useBlockProps.save({
								style: {
									'--mbm-image-collage-cols': String(l),
									'--mbm-image-collage-gap': `${o}px`,
									'--mbm-image-collage-radius': `${t}px`,
									'--mbm-image-collage-aspect-ratio': r,
								},
							});
						return (0, a.jsx)('div', {
							...n,
							children: (0, a.jsx)(i.InnerBlocks.Content, {}),
						});
					},
				});
			},
		},
		a = {};
	function o(e) {
		var t = a[e];
		if (void 0 !== t) return t.exports;
		var i = (a[e] = { exports: {} });
		return l[e](i, i.exports, o), i.exports;
	}
	(o.m = l),
		(e = []),
		(o.O = (l, a, t, i) => {
			if (!a) {
				var r = 1 / 0;
				for (c = 0; c < e.length; c++) {
					for (var [a, t, i] = e[c], n = !0, m = 0; m < a.length; m++)
						(!1 & i || r >= i) && Object.keys(o.O).every(e => o.O[e](a[m]))
							? a.splice(m--, 1)
							: ((n = !1), i < r && (r = i));
					if (n) {
						e.splice(c--, 1);
						var s = t();
						void 0 !== s && (l = s);
					}
				}
				return l;
			}
			i = i || 0;
			for (var c = e.length; c > 0 && e[c - 1][2] > i; c--) e[c] = e[c - 1];
			e[c] = [a, t, i];
		}),
		(o.o = (e, l) => Object.prototype.hasOwnProperty.call(e, l)),
		(() => {
			var e = { 48: 0, 808: 0 };
			o.O.j = l => 0 === e[l];
			var l = (l, a) => {
					var t,
						i,
						[r, n, m] = a,
						s = 0;
					if (r.some(l => 0 !== e[l])) {
						for (t in n) o.o(n, t) && (o.m[t] = n[t]);
						if (m) var c = m(o);
					}
					for (l && l(a); s < r.length; s++)
						(i = r[s]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
					return o.O(c);
				},
				a = (globalThis.webpackChunkmulti_block_mayhem =
					globalThis.webpackChunkmulti_block_mayhem || []);
			a.forEach(l.bind(null, 0)), (a.push = l.bind(null, a.push.bind(a)));
		})();
	var t = o.O(void 0, [808], () => o(289));
	t = o.O(t);
})();
