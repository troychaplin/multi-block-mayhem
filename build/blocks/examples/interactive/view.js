import * as t from '@wordpress/interactivity';
var e = {
	d: (t, o) => {
		for (var r in o)
			e.o(o, r) &&
				!e.o(t, r) &&
				Object.defineProperty(t, r, { enumerable: !0, get: o[r] });
	},
	o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
};
const o =
		((s = { getContext: () => t.getContext, store: () => t.store }),
		(n = {}),
		e.d(n, s),
		n),
	{ state: r } = (0, o.store)('interactivity', {
		state: {
			get themeText() {
				return r.isDark ? r.darkText : r.lightText;
			},
		},
		actions: {
			toggleOpen() {
				const t = (0, o.getContext)();
				t.isOpen = !t.isOpen;
			},
			toggleTheme() {
				r.isDark = !r.isDark;
			},
		},
		callbacks: {
			logIsOpen: () => {
				const { isOpen: t } = (0, o.getContext)();
				console.log(`Is open: ${t}`);
			},
		},
	});
var s, n;
