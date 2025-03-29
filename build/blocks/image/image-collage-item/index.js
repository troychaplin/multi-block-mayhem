(() => {
	'use strict';
	var e,
		i = {
			190: () => {
				const e = window.wp.blocks,
					i = window.wp.primitives,
					t = window.ReactJSXRuntime,
					a = (0, t.jsx)(i.SVG, {
						xmlns: 'http://www.w3.org/2000/svg',
						viewBox: '0 0 24 24',
						children: (0, t.jsx)(i.Path, {
							d: 'm3 5c0-1.10457.89543-2 2-2h13.5c1.1046 0 2 .89543 2 2v13.5c0 1.1046-.8954 2-2 2h-13.5c-1.10457 0-2-.8954-2-2zm2-.5h6v6.5h-6.5v-6c0-.27614.22386-.5.5-.5zm-.5 8v6c0 .2761.22386.5.5.5h6v-6.5zm8 0v6.5h6c.2761 0 .5-.2239.5-.5v-6zm0-8v6.5h6.5v-6c0-.27614-.2239-.5-.5-.5z',
							fillRule: 'evenodd',
							clipRule: 'evenodd',
						}),
					}),
					l = window.wp.i18n,
					n = window.wp.element,
					o = window.wp.blockEditor,
					s = window.wp.components,
					r = window.wp.data,
					m = ({
						imageUrl: e,
						setAttributes: i,
						imageSize: a,
						minWidth: l,
						minHeight: m,
						attributes: d,
						force: c,
					}) => {
						const [g, u] = (0, n.useState)(d?.imageId || null),
							h = (0, n.useMemo)(() => ['large', 'medium', 'thumbnail'], []),
							p = (0, n.useCallback)(
								e => {
									if (!e) return null;
									if (a && e.media_details?.sizes?.[a])
										return {
											url: e.media_details.sizes[a].source_url,
											width: e.media_details.sizes[a].width,
											height: e.media_details.sizes[a].height,
										};
									for (const i of h)
										if (e.media_details?.sizes?.[i])
											return {
												url: e.media_details.sizes[i].source_url,
												width: e.media_details.sizes[i].width,
												height: e.media_details.sizes[i].height,
											};
									return {
										url: e.source_url,
										width: e.media_details?.width,
										height: e.media_details?.height,
									};
								},
								[a, h]
							),
							x = (0, r.useSelect)(
								e => {
									if (!g) return null;
									const i = e('core').getMedia(g);
									if (!i) return null;
									const t = p(i);
									return t ? { ...t, id: i.id } : null;
								},
								[g, p]
							);
						(0, n.useEffect)(() => {
							x &&
								((e && x.url !== e) ||
									i({
										imageUrl: x.url,
										imageId: x.id,
										imageWidth: x.width,
										imageHeight: x.height,
									}));
						}, [x, i, e]);
						const w =
								!d?.imageWidth ||
								((!l || d.imageWidth >= l) && (!m || d.imageHeight >= m)),
							b = () => {
								u(null),
									i({
										imageUrl: '',
										imageId: null,
										imageWidth: null,
										imageHeight: null,
									});
							},
							v = Boolean(e && d?.imageWidth && !w);
						return (
							(0, n.useEffect)(() => {
								e && d?.imageId && u(d.imageId);
							}, [e, d?.imageId]),
							(0, t.jsxs)('div', {
								className: 'mbm-image-uploader',
								style: { display: 'flex', gap: '16px', flexDirection: 'column' },
								children: [
									v &&
										(0, t.jsxs)(s.Notice, {
											status: 'warning',
											isDismissible: !1,
											className: 'mbm-image-warning',
											children: [
												'Current image size (',
												d.imageWidth,
												'px ×',
												' ',
												d.imageHeight,
												'px) is smaller than recommended',
												' ',
												l && m
													? `width of ${l}px and height of ${m}px`
													: l
														? `width of ${l}px`
														: m
															? `height of ${m}px`
															: '',
											],
										}),
									(l || m) &&
										!e &&
										(0, t.jsxs)('div', {
											className: 'mbm-size-notice',
											style: {
												backgroundColor: '#fef8ee',
												borderLeft: '4px solid #f0b849',
												padding: '8px 12px',
												color: '#1e1e1e',
											},
											children: [
												c ? 'Required' : 'Recommended',
												' image size:',
												' ',
												l && `${l}px wide`,
												l && m && ' × ',
												m && `${m}px high`,
											],
										}),
									(0, t.jsx)(o.MediaUpload, {
										onSelect: e => {
											if (!e || !e.id)
												return (
													u(null),
													void i({
														imageUrl: '',
														imageId: null,
														imageWidth: null,
														imageHeight: null,
													})
												);
											const t = p(e);
											if (!t) return;
											const a = (!l || t.width >= l) && (!m || t.height >= m);
											(c && !a) ||
												(u(e.id),
												i({
													imageUrl: t.url,
													imageId: e.id,
													imageWidth: t.width,
													imageHeight: t.height,
												}));
										},
										allowedTypes: ['image'],
										value: g,
										render: ({ open: i }) =>
											(0, t.jsxs)(s.ButtonGroup, {
												className: 'mbm-image-controls',
												children: [
													(0, t.jsx)(s.Button, {
														onClick: i,
														variant: 'primary',
														children: e
															? 'Replace Image'
															: 'Select Image',
													}),
													e &&
														(0, t.jsx)(s.Button, {
															onClick: b,
															variant: 'secondary',
															style: { marginLeft: '8px' },
															children: 'Remove',
														}),
												],
											}),
									}),
								],
							})
						);
					},
					d = JSON.parse('{"UU":"multi-block-mayhem/image-collage-item"}');
				(0, e.registerBlockType)(d.UU, {
					icon: a,
					edit: function ({ attributes: e, setAttributes: i, context: a, style: r }) {
						const [d, c] = (0, n.useState)(e.focalPoint || { x: 0.5, y: 0.5 }),
							{ imageUrl: g, columnSpan: u, columns: h, zoom: p, aspectRatio: x } = e,
							w = g ? 'mbm-editor' : 'mbm-placeholder',
							b = (0, o.useBlockProps)({
								className: w,
								style: {
									...r,
									'--mbm-image-collage-col-span': u,
									'--mbm-image-collage-aspect-ratio': x,
								},
							});
						i({
							columns: a['multi-block-mayhem/image-collage-columns'],
							aspectRatio: a['multi-block-mayhem/image-collage-aspect-ratio'],
						});
						const v = (0, n.useCallback)(
								e => {
									c(e), i({ focalPoint: e });
								},
								[i]
							),
							f = {
								backgroundImage: `url(${g})`,
								backgroundPosition: `${100 * d.x}% ${100 * d.y}%`,
								transform: `scale(1.${String(p).padStart(2, '0')})`,
							};
						return (0, t.jsxs)(t.Fragment, {
							children: [
								(0, t.jsx)(o.InspectorControls, {
									children: (0, t.jsxs)(s.PanelBody, {
										title: (0, l.__)('Image Settings', 'multi-block-mayhem'),
										children: [
											(0, t.jsx)(s.RangeControl, {
												label: (0, l.__)(
													'Column Span',
													'multi-block-mayhem'
												),
												min: 1,
												max: h,
												value: u,
												onChange: e => i({ columnSpan: e }),
											}),
											g &&
												(0, t.jsxs)(t.Fragment, {
													children: [
														(0, t.jsx)(s.FocalPointPicker, {
															url: g,
															value: d,
															onDragStart: c,
															onDrag: v,
															onChange: v,
														}),
														(0, t.jsx)(s.RangeControl, {
															label: (0, l.__)(
																'Image Zoom',
																'multi-block-mayhem'
															),
															min: 0,
															max: 50,
															value: p,
															onChange: e => i({ zoom: e }),
														}),
													],
												}),
											(0, t.jsx)(m, {
												imageUrl: g,
												setAttributes: i,
												imageSize: 1 === u ? 'medium' : 'large',
												minWidth: 1 === u ? 600 : 1024,
												minHeight: 1 === u ? 450 : 768,
												attributes: e,
											}),
										],
									}),
								}),
								g
									? (0, t.jsx)('div', {
											...b,
											style: { ...b.style },
											children: (0, t.jsx)('div', { style: { ...f } }),
										})
									: (0, t.jsx)('div', { ...b, children: 'Add Image' }),
							],
						});
					},
					save: function () {
						return (0, t.jsx)(o.InnerBlocks.Content, {});
					},
				});
			},
		},
		t = {};
	function a(e) {
		var l = t[e];
		if (void 0 !== l) return l.exports;
		var n = (t[e] = { exports: {} });
		return i[e](n, n.exports, a), n.exports;
	}
	(a.m = i),
		(e = []),
		(a.O = (i, t, l, n) => {
			if (!t) {
				var o = 1 / 0;
				for (d = 0; d < e.length; d++) {
					for (var [t, l, n] = e[d], s = !0, r = 0; r < t.length; r++)
						(!1 & n || o >= n) && Object.keys(a.O).every(e => a.O[e](t[r]))
							? t.splice(r--, 1)
							: ((s = !1), n < o && (o = n));
					if (s) {
						e.splice(d--, 1);
						var m = l();
						void 0 !== m && (i = m);
					}
				}
				return i;
			}
			n = n || 0;
			for (var d = e.length; d > 0 && e[d - 1][2] > n; d--) e[d] = e[d - 1];
			e[d] = [t, l, n];
		}),
		(a.o = (e, i) => Object.prototype.hasOwnProperty.call(e, i)),
		(() => {
			var e = { 634: 0, 46: 0 };
			a.O.j = i => 0 === e[i];
			var i = (i, t) => {
					var l,
						n,
						[o, s, r] = t,
						m = 0;
					if (o.some(i => 0 !== e[i])) {
						for (l in s) a.o(s, l) && (a.m[l] = s[l]);
						if (r) var d = r(a);
					}
					for (i && i(t); m < o.length; m++)
						(n = o[m]), a.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
					return a.O(d);
				},
				t = (globalThis.webpackChunkmulti_block_mayhem =
					globalThis.webpackChunkmulti_block_mayhem || []);
			t.forEach(i.bind(null, 0)), (t.push = i.bind(null, t.push.bind(t)));
		})();
	var l = a.O(void 0, [46], () => a(190));
	l = a.O(l);
})();
