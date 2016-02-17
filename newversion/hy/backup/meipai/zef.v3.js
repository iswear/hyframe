// zepto.v3.min.js ejs.v3.min.js flipsnap.v3.min.js fastclick.min.js
!
	function(a) {
		String.prototype.trim === a && (String.prototype.trim = function() {
			return this.replace(/^\s+|\s+$/g, "")
		}),
		Array.prototype.reduce === a && (Array.prototype.reduce = function(b) {
			if (void 0 === this || null === this) throw new TypeError;
			var c, d = Object(this),
				e = d.length >>> 0,
				f = 0;
			if ("function" != typeof b) throw new TypeError;
			if (0 == e && 1 == arguments.length) throw new TypeError;
			if (arguments.length >= 2) c = arguments[1];
			else for (;;) {
				if (f in d) {
					c = d[f++];
					break
				}
				if (++f >= e) throw new TypeError
			}
			for (; e > f;) f in d && (c = b.call(a, c, d[f], f, d)),
				f++;
			return c
		})
	} ();
var Zepto = function() {
	function a(a) {
		return null == a ? String(a) : W[X.call(a)] || "object"
	}
	function b(b) {
		return "function" == a(b)
	}
	function c(a) {
		return null != a && a == a.window
	}
	function d(a) {
		return null != a && a.nodeType == a.DOCUMENT_NODE
	}
	function e(b) {
		return "object" == a(b)
	}
	function f(a) {
		return e(a) && !c(a) && a.__proto__ == Object.prototype
	}
	function g(a) {
		return a instanceof Array
	}
	function h(a) {
		return "number" == typeof a.length
	}
	function i(a) {
		return E.call(a,
			function(a) {
				return null != a
			})
	}
	function j(a) {
		return a.length > 0 ? y.fn.concat.apply([], a) : a
	}
	function k(a) {
		return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
	}
	function l(a) {
		return a in H ? H[a] : H[a] = new RegExp("(^|\\s)" + a + "(\\s|$)")
	}
	function m(a, b) {
		return "number" != typeof b || J[k(a)] ? b: b + "px"
	}
	function n(a) {
		var b, c;
		return G[a] || (b = F.createElement(a), F.body.appendChild(b), c = I(b, "").getPropertyValue("display"), b.parentNode.removeChild(b), "none" == c && (c = "block"), G[a] = c),
			G[a]
	}
	function o(a) {
		return "children" in a ? D.call(a.children) : y.map(a.childNodes,
			function(a) {
				return 1 == a.nodeType ? a: void 0
			})
	}
	function p(a, b, c) {
		for (x in b) c && (f(b[x]) || g(b[x])) ? (f(b[x]) && !f(a[x]) && (a[x] = {}), g(b[x]) && !g(a[x]) && (a[x] = []), p(a[x], b[x], c)) : b[x] !== w && (a[x] = b[x])
	}
	function q(a, b) {
		return b === w ? y(a) : y(a).filter(b)
	}
	function r(a, c, d, e) {
		return b(c) ? c.call(a, d, e) : c
	}
	function s(a, b, c) {
		null == c ? a.removeAttribute(b) : a.setAttribute(b, c)
	}
	function t(a, b) {
		var c = a.className,
			d = c && c.baseVal !== w;
		return b === w ? d ? c.baseVal: c: void(d ? c.baseVal = b: a.className = b)
	}
	function u(a) {
		var b;
		try {
			return a ? "true" == a || ("false" == a ? !1 : "null" == a ? null: isNaN(b = Number(a)) ? /^[\[\{]/.test(a) ? y.parseJSON(a) : a: b) : a
		} catch(c) {
			return a
		}
	}
	function v(a, b) {
		b(a);
		for (var c in a.childNodes) v(a.childNodes[c], b)
	}
	var w, x, y, z, A, B, C = [],
		D = C.slice,
		E = C.filter,
		F = window.document,
		G = {},
		H = {},
		I = F.defaultView.getComputedStyle,
		J = {
			"column-count": 1,
			columns: 1,
			"font-weight": 1,
			"line-height": 1,
			opacity: 1,
			"z-index": 1,
			zoom: 1
		},
		K = /^\s*<(\w+|!)[^>]*>/,
		L = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		M = /^(?:body|html)$/i,
		N = ["val", "css", "html", "text", "data", "width", "height", "offset"],
		O = ["after", "prepend", "before", "append"],
		P = F.createElement("table"),
		Q = F.createElement("tr"),
		R = {
			tr: F.createElement("tbody"),
			tbody: P,
			thead: P,
			tfoot: P,
			td: Q,
			th: Q,
			"*": F.createElement("div")
		},
		S = /complete|loaded|interactive/,
		T = /^\.([\w-]+)$/,
		U = /^#([\w-]*)$/,
		V = /^[\w-]+$/,
		W = {},
		X = W.toString,
		Y = {},
		Z = F.createElement("div");
	return Y.matches = function(a, b) {
		if (!a || 1 !== a.nodeType) return ! 1;
		var c = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.matchesSelector;
		if (c) return c.call(a, b);
		var d, e = a.parentNode,
			f = !e;
		return f && (e = Z).appendChild(a),
			d = ~Y.qsa(e, b).indexOf(a),
		f && Z.removeChild(a),
			d
	},
		A = function(a) {
			return a.replace(/-+(.)?/g,
				function(a, b) {
					return b ? b.toUpperCase() : ""
				})
		},
		B = function(a) {
			return E.call(a,
				function(b, c) {
					return a.indexOf(b) == c
				})
		},
		Y.fragment = function(a, b, c) {
			a.replace && (a = a.replace(L, "<$1></$2>")),
			b === w && (b = K.test(a) && RegExp.$1),
			b in R || (b = "*");
			var d, e, g = R[b];
			return g.innerHTML = "" + a,
				e = y.each(D.call(g.childNodes),
					function() {
						g.removeChild(this)
					}),
			f(c) && (d = y(e), y.each(c,
				function(a, b) {
					N.indexOf(a) > -1 ? d[a](b) : d.attr(a, b)
				})),
				e
		},
		Y.Z = function(a, b) {
			return a = a || [],
				a.__proto__ = y.fn,
				a.selector = b || "",
				a
		},
		Y.isZ = function(a) {
			return a instanceof Y.Z
		},
		Y.init = function(a, c) {
			if (a) {
				if (b(a)) return y(F).ready(a);
				if (Y.isZ(a)) return a;
				var d;
				if (g(a)) d = i(a);
				else if (e(a)) d = [f(a) ? y.extend({},
					a) : a],
					a = null;
				else if (K.test(a)) d = Y.fragment(a.trim(), RegExp.$1, c),
					a = null;
				else {
					if (c !== w) return y(c).find(a);
					d = Y.qsa(F, a)
				}
				return Y.Z(d, a)
			}
			return Y.Z()
		},
		y = function(a, b) {
			return Y.init(a, b)
		},
		y.extend = function(a) {
			var b, c = D.call(arguments, 1);
			return "boolean" == typeof a && (b = a, a = c.shift()),
				c.forEach(function(c) {
					p(a, c, b)
				}),
				a
		},
		Y.qsa = function(a, b) {
			var c;
			return d(a) && U.test(b) ? (c = a.getElementById(RegExp.$1)) ? [c] : [] : 1 !== a.nodeType && 9 !== a.nodeType ? [] : D.call(T.test(b) ? a.getElementsByClassName(RegExp.$1) : V.test(b) ? a.getElementsByTagName(b) : a.querySelectorAll(b))
		},
		y.contains = function(a, b) {
			return a !== b && a.contains(b)
		},
		y.type = a,
		y.isFunction = b,
		y.isWindow = c,
		y.isArray = g,
		y.isPlainObject = f,
		y.isEmptyObject = function(a) {
			var b;
			for (b in a) return ! 1;
			return ! 0
		},
		y.inArray = function(a, b, c) {
			return C.indexOf.call(b, a, c)
		},
		y.camelCase = A,
		y.trim = function(a) {
			return a.trim()
		},
		y.uuid = 0,
		y.support = {},
		y.expr = {},
		y.map = function(a, b) {
			var c, d, e, f = [];
			if (h(a)) for (d = 0; d < a.length; d++) c = b(a[d], d),
			null != c && f.push(c);
			else for (e in a) c = b(a[e], e),
			null != c && f.push(c);
			return j(f)
		},
		y.each = function(a, b) {
			var c, d;
			if (h(a)) {
				for (c = 0; c < a.length; c++) if (b.call(a[c], c, a[c]) === !1) return a
			} else for (d in a) if (b.call(a[d], d, a[d]) === !1) return a;
			return a
		},
		y.grep = function(a, b) {
			return E.call(a, b)
		},
	window.JSON && (y.parseJSON = JSON.parse),
		y.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
			function(a, b) {
				W["[object " + b + "]"] = b.toLowerCase()
			}),
		y.fn = {
			forEach: C.forEach,
			reduce: C.reduce,
			push: C.push,
			sort: C.sort,
			indexOf: C.indexOf,
			concat: C.concat,
			map: function(a) {
				return y(y.map(this,
					function(b, c) {
						return a.call(b, c, b)
					}))
			},
			slice: function() {
				return y(D.apply(this, arguments))
			},
			ready: function(a) {
				return S.test(F.readyState) ? a(y) : F.addEventListener("DOMContentLoaded",
					function() {
						a(y)
					},
					!1),
					this
			},
			get: function(a) {
				return a === w ? D.call(this) : this[a >= 0 ? a: a + this.length]
			},
			toArray: function() {
				return this.get()
			},
			size: function() {
				return this.length
			},
			remove: function() {
				return this.each(function() {
					null != this.parentNode && this.parentNode.removeChild(this)
				})
			},
			each: function(a) {
				return C.every.call(this,
					function(b, c) {
						return a.call(b, c, b) !== !1
					}),
					this
			},
			filter: function(a) {
				return b(a) ? this.not(this.not(a)) : y(E.call(this,
					function(b) {
						return Y.matches(b, a)
					}))
			},
			add: function(a, b) {
				return y(B(this.concat(y(a, b))))
			},
			is: function(a) {
				return this.length > 0 && Y.matches(this[0], a)
			},
			not: function(a) {
				var c = [];
				if (b(a) && a.call !== w) this.each(function(b) {
					a.call(this, b) || c.push(this)
				});
				else {
					var d = "string" == typeof a ? this.filter(a) : h(a) && b(a.item) ? D.call(a) : y(a);
					this.forEach(function(a) {
						d.indexOf(a) < 0 && c.push(a)
					})
				}
				return y(c)
			},
			has: function(a) {
				return this.filter(function() {
					return e(a) ? y.contains(this, a) : y(this).find(a).size()
				})
			},
			eq: function(a) {
				return - 1 === a ? this.slice(a) : this.slice(a, +a + 1)
			},
			first: function() {
				var a = this[0];
				return a && !e(a) ? a: y(a)
			},
			last: function() {
				var a = this[this.length - 1];
				return a && !e(a) ? a: y(a)
			},
			find: function(a) {
				var b, c = this;
				return b = "object" == typeof a ? y(a).filter(function() {
					var a = this;
					return C.some.call(c,
						function(b) {
							return y.contains(b, a)
						})
				}) : 1 == this.length ? y(Y.qsa(this[0], a)) : this.map(function() {
					return Y.qsa(this, a)
				})
			},
			closest: function(a, b) {
				var c = this[0],
					e = !1;
				for ("object" == typeof a && (e = y(a)); c && !(e ? e.indexOf(c) >= 0 : Y.matches(c, a));) c = c !== b && !d(c) && c.parentNode;
				return y(c)
			},
			parents: function(a) {
				for (var b = [], c = this; c.length > 0;) c = y.map(c,
					function(a) {
						return (a = a.parentNode) && !d(a) && b.indexOf(a) < 0 ? (b.push(a), a) : void 0
					});
				return q(b, a)
			},
			parent: function(a) {
				return q(B(this.pluck("parentNode")), a)
			},
			children: function(a) {
				return q(this.map(function() {
					return o(this)
				}), a)
			},
			contents: function() {
				return this.map(function() {
					return D.call(this.childNodes)
				})
			},
			siblings: function(a) {
				return q(this.map(function(a, b) {
					return E.call(o(b.parentNode),
						function(a) {
							return a !== b
						})
				}), a)
			},
			empty: function() {
				return this.each(function() {
					this.innerHTML = ""
				})
			},
			pluck: function(a) {
				return y.map(this,
					function(b) {
						return b[a]
					})
			},
			show: function() {
				return this.each(function() {
					"none" == this.style.display && (this.style.display = null),
					"none" == I(this, "").getPropertyValue("display") && (this.style.display = n(this.nodeName))
				})
			},
			replaceWith: function(a) {
				return this.before(a).remove()
			},
			wrap: function(a) {
				var c = b(a);
				if (this[0] && !c) var d = y(a).get(0),
									   e = d.parentNode || this.length > 1;
				return this.each(function(b) {
					y(this).wrapAll(c ? a.call(this, b) : e ? d.cloneNode(!0) : d)
				})
			},
			wrapAll: function(a) {
				if (this[0]) {
					y(this[0]).before(a = y(a));
					for (var b; (b = a.children()).length;) a = b.first();
					y(a).append(this)
				}
				return this
			},
			wrapInner: function(a) {
				var c = b(a);
				return this.each(function(b) {
					var d = y(this),
						e = d.contents(),
						f = c ? a.call(this, b) : a;
					e.length ? e.wrapAll(f) : d.append(f)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					y(this).replaceWith(y(this).children())
				}),
					this
			},
			clone: function() {
				return this.map(function() {
					return this.cloneNode(!0)
				})
			},
			hide: function() {
				return this.css("display", "none")
			},
			toggle: function(a) {
				return this.each(function() {
					var b = y(this); (a === w ? "none" == b.css("display") : a) ? b.show() : b.hide()
				})
			},
			prev: function(a) {
				return y(this.pluck("previousElementSibling")).filter(a || "*")
			},
			next: function(a) {
				return y(this.pluck("nextElementSibling")).filter(a || "*")
			},
			html: function(a) {
				return a === w ? this.length > 0 ? this[0].innerHTML: null: this.each(function(b) {
					var c = this.innerHTML;
					y(this).empty().append(r(this, a, b, c))
				})
			},
			text: function(a) {
				return a === w ? this.length > 0 ? this[0].textContent: null: this.each(function() {
					this.textContent = a
				})
			},
			attr: function(a, b) {
				var c;
				return "string" == typeof a && b === w ? 0 == this.length || 1 !== this[0].nodeType ? w: "value" == a && "INPUT" == this[0].nodeName ? this.val() : !(c = this[0].getAttribute(a)) && a in this[0] ? this[0][a] : c: this.each(function(c) {
					if (1 === this.nodeType) if (e(a)) for (x in a) s(this, x, a[x]);
					else s(this, a, r(this, b, c, this.getAttribute(a)))
				})
			},
			removeAttr: function(a) {
				return this.each(function() {
					1 === this.nodeType && s(this, a)
				})
			},
			prop: function(a, b) {
				return b === w ? this[0] && this[0][a] : this.each(function(c) {
					this[a] = r(this, b, c, this[a])
				})
			},
			data: function(a, b) {
				var c = this.attr("data-" + k(a), b);
				return null !== c ? u(c) : w
			},
			val: function(a) {
				return a === w ? this[0] && (this[0].multiple ? y(this[0]).find("option").filter(function() {
					return this.selected
				}).pluck("value") : this[0].value) : this.each(function(b) {
					this.value = r(this, a, b, this.value)
				})
			},
			offset: function(a) {
				if (a) return this.each(function(b) {
					var c = y(this),
						d = r(this, a, b, c.offset()),
						e = c.offsetParent().offset(),
						f = {
							top: d.top - e.top,
							left: d.left - e.left
						};
					"static" == c.css("position") && (f.position = "relative"),
						c.css(f)
				});
				if (0 == this.length) return null;
				var b = this[0].getBoundingClientRect();
				return {
					left: b.left + window.pageXOffset,
					top: b.top + window.pageYOffset,
					width: Math.round(b.width),
					height: Math.round(b.height)
				}
			},
			css: function(b, c) {
				if (arguments.length < 2 && "string" == typeof b) return this[0] && (this[0].style[A(b)] || I(this[0], "").getPropertyValue(b));
				var d = "";
				if ("string" == a(b)) c || 0 === c ? d = k(b) + ":" + m(b, c) : this.each(function() {
					this.style.removeProperty(k(b))
				});
				else for (x in b) b[x] || 0 === b[x] ? d += k(x) + ":" + m(x, b[x]) + ";": this.each(function() {
					this.style.removeProperty(k(x))
				});
				return this.each(function() {
					this.style.cssText += ";" + d
				})
			},
			index: function(a) {
				return a ? this.indexOf(y(a)[0]) : this.parent().children().indexOf(this[0])
			},
			hasClass: function(a) {
				return C.some.call(this,
					function(a) {
						return this.test(t(a))
					},
					l(a))
			},
			addClass: function(a) {
				return this.each(function(b) {
					z = [];
					var c = t(this),
						d = r(this, a, b, c);
					d.split(/\s+/g).forEach(function(a) {
							y(this).hasClass(a) || z.push(a)
						},
						this),
					z.length && t(this, c + (c ? " ": "") + z.join(" "))
				})
			},
			removeClass: function(a) {
				return this.each(function(b) {
					return a === w ? t(this, "") : (z = t(this), r(this, a, b, z).split(/\s+/g).forEach(function(a) {
						z = z.replace(l(a), " ")
					}), void t(this, z.trim()))
				})
			},
			toggleClass: function(a, b) {
				return this.each(function(c) {
					var d = y(this),
						e = r(this, a, c, t(this));
					e.split(/\s+/g).forEach(function(a) { (b === w ? !d.hasClass(a) : b) ? d.addClass(a) : d.removeClass(a)
					})
				})
			},
			scrollTop: function() {
				return this.length ? "scrollTop" in this[0] ? this[0].scrollTop: this[0].scrollY: void 0
			},
			position: function() {
				if (this.length) {
					var a = this[0],
						b = this.offsetParent(),
						c = this.offset(),
						d = M.test(b[0].nodeName) ? {
							top: 0,
							left: 0
						}: b.offset();
					return c.top -= parseFloat(y(a).css("margin-top")) || 0,
						c.left -= parseFloat(y(a).css("margin-left")) || 0,
						d.top += parseFloat(y(b[0]).css("border-top-width")) || 0,
						d.left += parseFloat(y(b[0]).css("border-left-width")) || 0,
					{
						top: c.top - d.top,
						left: c.left - d.left
					}
				}
			},
			offsetParent: function() {
				return this.map(function() {
					for (var a = this.offsetParent || F.body; a && !M.test(a.nodeName) && "static" == y(a).css("position");) a = a.offsetParent;
					return a
				})
			}
		},
		y.fn.detach = y.fn.remove,
		["width", "height"].forEach(function(a) {
			y.fn[a] = function(b) {
				var e, f = this[0],
					g = a.replace(/./,
						function(a) {
							return a[0].toUpperCase()
						});
				return b === w ? c(f) ? f["inner" + g] : d(f) ? f.documentElement["offset" + g] : (e = this.offset()) && e[a] : this.each(function(c) {
					f = y(this),
						f.css(a, r(this, b, c, f[a]()))
				})
			}
		}),
		O.forEach(function(b, c) {
			var d = c % 2;
			y.fn[b] = function() {
				var b, e, f = y.map(arguments,
						function(c) {
							return b = a(c),
								"object" == b || "array" == b || null == c ? c: Y.fragment(c)
						}),
					g = this.length > 1;
				return f.length < 1 ? this: this.each(function(a, b) {
					e = d ? b: b.parentNode,
						b = 0 == c ? b.nextSibling: 1 == c ? b.firstChild: 2 == c ? b: null,
						f.forEach(function(a) {
							if (g) a = a.cloneNode(!0);
							else if (!e) return y(a).remove();
							v(e.insertBefore(a, b),
								function(a) {
									null == a.nodeName || "SCRIPT" !== a.nodeName.toUpperCase() || a.type && "text/javascript" !== a.type || a.src || window.eval.call(window, a.innerHTML)
								})
						})
				})
			},
				y.fn[d ? b + "To": "insert" + (c ? "Before": "After")] = function(a) {
					return y(a)[b](this),
						this
				}
		}),
		Y.Z.prototype = y.fn,
		Y.uniq = B,
		Y.deserializeValue = u,
		y.zepto = Y,
		y
} ();
window.Zepto = Zepto,
"$" in window || (window.$ = Zepto),
	function(a) {
		function b(a) {
			var b = this.os = {},
				c = this.browser = {},
				d = a.match(/WebKit\/([\d.]+)/),
				e = a.match(/(Android)\s+([\d.]+)/),
				f = a.match(/(iPad).*OS\s([\d_]+)/),
				g = !f && a.match(/(iPhone\sOS)\s([\d_]+)/),
				h = a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
				i = h && a.match(/TouchPad/),
				j = a.match(/Kindle\/([\d.]+)/),
				k = a.match(/Silk\/([\d._]+)/),
				l = a.match(/(BlackBerry).*Version\/([\d.]+)/),
				m = a.match(/(BB10).*Version\/([\d.]+)/),
				n = a.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
				o = a.match(/PlayBook/),
				p = a.match(/Chrome\/([\d.]+)/) || a.match(/CriOS\/([\d.]+)/),
				q = a.match(/Firefox\/([\d.]+)/); (c.webkit = !!d) && (c.version = d[1]),
			e && (b.android = !0, b.version = e[2]),
			g && (b.ios = b.iphone = !0, b.version = g[2].replace(/_/g, ".")),
			f && (b.ios = b.ipad = !0, b.version = f[2].replace(/_/g, ".")),
			h && (b.webos = !0, b.version = h[2]),
			i && (b.touchpad = !0),
			l && (b.blackberry = !0, b.version = l[2]),
			m && (b.bb10 = !0, b.version = m[2]),
			n && (b.rimtabletos = !0, b.version = n[2]),
			o && (c.playbook = !0),
			j && (b.kindle = !0, b.version = j[1]),
			k && (c.silk = !0, c.version = k[1]),
			!k && b.android && a.match(/Kindle Fire/) && (c.silk = !0),
			p && (c.chrome = !0, c.version = p[1]),
			q && (c.firefox = !0, c.version = q[1]),
				b.tablet = !!(f || o || e && !a.match(/Mobile/) || q && a.match(/Tablet/)),
				b.phone = !(b.tablet || !(e || g || h || l || m || p && a.match(/Android/) || p && a.match(/CriOS\/([\d.]+)/) || q && a.match(/Mobile/)))
		}
		b.call(a, navigator.userAgent),
			a.__detect = b
	} (Zepto),
	function(a) {
		function b(a) {
			return a._zid || (a._zid = n++)
		}
		function c(a, c, f, g) {
			if (c = d(c), c.ns) var h = e(c.ns);
			return (m[b(a)] || []).filter(function(a) {
				return ! (!a || c.e && a.e != c.e || c.ns && !h.test(a.ns) || f && b(a.fn) !== b(f) || g && a.sel != g)
			})
		}
		function d(a) {
			var b = ("" + a).split(".");
			return {
				e: b[0],
				ns: b.slice(1).sort().join(" ")
			}
		}
		function e(a) {
			return new RegExp("(?:^| )" + a.replace(" ", " .* ?") + "(?: |$)")
		}
		function f(b, c, d) {
			"string" != a.type(b) ? a.each(b, d) : b.split(/\s/).forEach(function(a) {
				d(a, c)
			})
		}
		function g(a, b) {
			return a.del && ("focus" == a.e || "blur" == a.e) || !!b
		}
		function h(a) {
			return p[a] || a
		}
		function i(c, e, i, j, k, l) {
			var n = b(c),
				o = m[n] || (m[n] = []);
			f(e, i,
				function(b, e) {
					var f = d(b);
					f.fn = e,
						f.sel = j,
					f.e in p && (e = function(b) {
						var c = b.relatedTarget;
						return ! c || c !== this && !a.contains(this, c) ? f.fn.apply(this, arguments) : void 0
					}),
						f.del = k && k(e, b);
					var i = f.del || e;
					f.proxy = function(a) {
						var b = i.apply(c, [a].concat(a.data));
						return b === !1 && (a.preventDefault(), a.stopPropagation()),
							b
					},
						f.i = o.length,
						o.push(f),
						c.addEventListener(h(f.e), f.proxy, g(f, l))
				})
		}
		function j(a, d, e, i, j) {
			var k = b(a);
			f(d || "", e,
				function(b, d) {
					c(a, b, d, i).forEach(function(b) {
						delete m[k][b.i],
							a.removeEventListener(h(b.e), b.proxy, g(b, j))
					})
				})
		}
		function k(b) {
			var c, d = {
				originalEvent: b
			};
			for (c in b) s.test(c) || void 0 === b[c] || (d[c] = b[c]);
			return a.each(t,
				function(a, c) {
					d[a] = function() {
						return this[c] = q,
							b[a].apply(b, arguments)
					},
						d[c] = r
				}),
				d
		}
		function l(a) {
			if (! ("defaultPrevented" in a)) {
				a.defaultPrevented = !1;
				var b = a.preventDefault;
				a.preventDefault = function() {
					this.defaultPrevented = !0,
						b.call(this)
				}
			}
		}
		var m = (a.zepto.qsa, {}),
			n = 1,
			o = {},
			p = {
				mouseenter: "mouseover",
				mouseleave: "mouseout"
			};
		o.click = o.mousedown = o.mouseup = o.mousemove = "MouseEvents",
			a.event = {
				add: i,
				remove: j
			},
			a.proxy = function(c, d) {
				if (a.isFunction(c)) {
					var e = function() {
						return c.apply(d, arguments)
					};
					return e._zid = b(c),
						e
				}
				if ("string" == typeof d) return a.proxy(c[d], c);
				throw new TypeError("expected function")
			},
			a.fn.bind = function(a, b) {
				return this.each(function() {
					i(this, a, b)
				})
			},
			a.fn.unbind = function(a, b) {
				return this.each(function() {
					j(this, a, b)
				})
			},
			a.fn.one = function(a, b) {
				return this.each(function(c, d) {
					i(this, a, b, null,
						function(a, b) {
							return function() {
								var c = a.apply(d, arguments);
								return j(d, b, a),
									c
							}
						})
				})
			};
		var q = function() {
				return ! 0
			},
			r = function() {
				return ! 1
			},
			s = /^([A-Z]|layer[XY]$)/,
			t = {
				preventDefault: "isDefaultPrevented",
				stopImmediatePropagation: "isImmediatePropagationStopped",
				stopPropagation: "isPropagationStopped"
			};
		a.fn.delegate = function(b, c, d) {
			return this.each(function(e, f) {
				i(f, c, d, b,
					function(c) {
						return function(d) {
							var e, g = a(d.target).closest(b, f).get(0);
							return g ? (e = a.extend(k(d), {
								currentTarget: g,
								liveFired: f
							}), c.apply(g, [e].concat([].slice.call(arguments, 1)))) : void 0
						}
					})
			})
		},
			a.fn.undelegate = function(a, b, c) {
				return this.each(function() {
					j(this, b, c, a)
				})
			},
			a.fn.live = function(b, c) {
				return a(document.body).delegate(this.selector, b, c),
					this
			},
			a.fn.die = function(b, c) {
				return a(document.body).undelegate(this.selector, b, c),
					this
			},
			a.fn.on = function(b, c, d) {
				return ! c || a.isFunction(c) ? this.bind(b, c || d) : this.delegate(c, b, d)
			},
			a.fn.off = function(b, c, d) {
				return ! c || a.isFunction(c) ? this.unbind(b, c || d) : this.undelegate(c, b, d)
			},
			a.fn.trigger = function(b, c) {
				return ("string" == typeof b || a.isPlainObject(b)) && (b = a.Event(b)),
					l(b),
					b.data = c,
					this.each(function() {
						"dispatchEvent" in this && this.dispatchEvent(b)
					})
			},
			a.fn.triggerHandler = function(b, d) {
				var e, f;
				return this.each(function(g, h) {
					e = k("string" == typeof b ? a.Event(b) : b),
						e.data = d,
						e.target = h,
						a.each(c(h, b.type || b),
							function(a, b) {
								return f = b.proxy(e),
									e.isImmediatePropagationStopped() ? !1 : void 0
							})
				}),
					f
			},
			"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b) {
				a.fn[b] = function(a) {
					return a ? this.bind(b, a) : this.trigger(b)
				}
			}),
			["focus", "blur"].forEach(function(b) {
				a.fn[b] = function(a) {
					return a ? this.bind(b, a) : this.each(function() {
						try {
							this[b]()
						} catch(a) {}
					}),
						this
				}
			}),
			a.Event = function(a, b) {
				"string" != typeof a && (b = a, a = b.type);
				var c = document.createEvent(o[a] || "Events"),
					d = !0;
				if (b) for (var e in b)"bubbles" == e ? d = !!b[e] : c[e] = b[e];
				return c.initEvent(a, d, !0, null, null, null, null, null, null, null, null, null, null, null, null),
					c.isDefaultPrevented = function() {
						return this.defaultPrevented
					},
					c
			}
	} (Zepto),
	function(a) {
		function b(b, c, d) {
			var e = a.Event(c);
			return a(b).trigger(e, d),
				!e.defaultPrevented
		}
		function c(a, c, d, e) {
			return a.global ? b(c || s, d, e) : void 0
		}
		function d(b) {
			b.global && 0 === a.active++&&c(b, null, "ajaxStart")
		}
		function e(b) {
			b.global && !--a.active && c(b, null, "ajaxStop")
		}
		function f(a, b) {
			var d = b.context;
			return b.beforeSend.call(d, a, b) === !1 || c(b, d, "ajaxBeforeSend", [a, b]) === !1 ? !1 : void c(b, d, "ajaxSend", [a, b])
		}
		function g(a, b, d) {
			var e = d.context,
				f = "success";
			d.success.call(e, a, f, b),
				c(d, e, "ajaxSuccess", [b, d, a]),
				i(f, b, d)
		}
		function h(a, b, d, e) {
			var f = e.context;
			e.error.call(f, d, b, a),
				c(e, f, "ajaxError", [d, e, a]),
				i(b, d, e)
		}
		function i(a, b, d) {
			var f = d.context;
			d.complete.call(f, b, a),
				c(d, f, "ajaxComplete", [b, d]),
				e(d)
		}
		function j() {}
		function k(a) {
			return a && (a = a.split(";", 2)[0]),
			a && (a == x ? "html": a == w ? "json": u.test(a) ? "script": v.test(a) && "xml") || "text"
		}
		function l(a, b) {
			return (a + "&" + b).replace(/[&?]{1,2}/, "?")
		}
		function m(b) {
			b.processData && b.data && "string" != a.type(b.data) && (b.data = a.param(b.data, b.traditional)),
			!b.data || b.type && "GET" != b.type.toUpperCase() || (b.url = l(b.url, b.data))
		}
		function n(b, c, d, e) {
			var f = !a.isFunction(c);
			return {
				url: b,
				data: f ? c: void 0,
				success: f ? a.isFunction(d) ? d: void 0 : c,
				dataType: f ? e || d: d
			}
		}
		function o(b, c, d, e) {
			var f, g = a.isArray(c);
			a.each(c,
				function(c, h) {
					f = a.type(h),
					e && (c = d ? e: e + "[" + (g ? "": c) + "]"),
						!e && g ? b.add(h.name, h.value) : "array" == f || !d && "object" == f ? o(b, h, d, c) : b.add(c, h)
				})
		}
		var p, q, r = 0,
			s = window.document,
			t = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
			u = /^(?:text|application)\/javascript/i,
			v = /^(?:text|application)\/xml/i,
			w = "application/json",
			x = "text/html",
			y = /^\s*$/;
		a.active = 0,
			a.ajaxJSONP = function(b) {
				if (! ("type" in b)) return a.ajax(b);
				var c, d = "jsonp" + ++r,
					e = s.createElement("script"),
					i = function() {
						clearTimeout(c),
							a(e).remove(),
							delete window[d]
					},
					k = function(a) {
						i(),
						a && "timeout" != a || (window[d] = j),
							h(null, a || "abort", l, b)
					},
					l = {
						abort: k
					};
				return f(l, b) === !1 ? (k("abort"), !1) : (window[d] = function(a) {
					i(),
						g(a, l, b)
				},
					e.onerror = function() {
						k("error")
					},
					e.src = b.url.replace(/=\?/, "=" + d), a("head").append(e), b.timeout > 0 && (c = setTimeout(function() {
						k("timeout")
					},
					b.timeout)), l)
			},
			a.ajaxSettings = {
				type: "GET",
				beforeSend: j,
				success: j,
				error: j,
				complete: j,
				context: null,
				global: !0,
				xhr: function() {
					return new window.XMLHttpRequest
				},
				accepts: {
					script: "text/javascript, application/javascript",
					json: w,
					xml: "application/xml, text/xml",
					html: x,
					text: "text/plain"
				},
				crossDomain: !1,
				timeout: 0,
				processData: !0,
				cache: !0
			},
			a.ajax = function(b) {
				var c = a.extend({},
					b || {});
				for (p in a.ajaxSettings) void 0 === c[p] && (c[p] = a.ajaxSettings[p]);
				d(c),
				c.crossDomain || (c.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(c.url) && RegExp.$2 != window.location.host),
				c.url || (c.url = window.location.toString()),
					m(c),
				c.cache === !1 && (c.url = l(c.url, "_=" + Date.now()));
				var e = c.dataType,
					i = /=\?/.test(c.url);
				if ("jsonp" == e || i) return i || (c.url = l(c.url, "callback=?")),
					a.ajaxJSONP(c);
				var n, o = c.accepts[e],
					r = {},
					s = /^([\w-]+:)\/\//.test(c.url) ? RegExp.$1: window.location.protocol,
					t = c.xhr();
				c.crossDomain || (r["X-Requested-With"] = "XMLHttpRequest"),
				o && (r.Accept = o, o.indexOf(",") > -1 && (o = o.split(",", 2)[0]), t.overrideMimeType && t.overrideMimeType(o)),
				(c.contentType || c.contentType !== !1 && c.data && "GET" != c.type.toUpperCase()) && (r["Content-Type"] = c.contentType || "application/x-www-form-urlencoded"),
					c.headers = a.extend(r, c.headers || {}),
					t.onreadystatechange = function() {
						if (4 == t.readyState) {
							t.onreadystatechange = j,
								clearTimeout(n);
							var b, d = !1;
							if (t.status >= 200 && t.status < 300 || 304 == t.status || 0 == t.status && "file:" == s) {
								e = e || k(t.getResponseHeader("content-type")),
									b = t.responseText;
								try {
									"script" == e ? (1, eval)(b) : "xml" == e ? b = t.responseXML: "json" == e && (b = y.test(b) ? null: a.parseJSON(b))
								} catch(f) {
									d = f
								}
								d ? h(d, "parsererror", t, c) : g(b, t, c)
							} else h(null, t.status ? "error": "abort", t, c)
						}
					};
				var u = "async" in c ? c.async: !0;
				t.open(c.type, c.url, u);
				for (q in c.headers) t.setRequestHeader(q, c.headers[q]);
				return f(t, c) === !1 ? (t.abort(), !1) : (c.timeout > 0 && (n = setTimeout(function() {
						t.onreadystatechange = j,
							t.abort(),
							h(null, "timeout", t, c)
					},
					c.timeout)), t.send(c.data ? c.data: null), t)
			},
			a.get = function() {
				return a.ajax(n.apply(null, arguments))
			},
			a.post = function() {
				var b = n.apply(null, arguments);
				return b.type = "POST",
					a.ajax(b)
			},
			a.getJSON = function() {
				var b = n.apply(null, arguments);
				return b.dataType = "json",
					a.ajax(b)
			},
			a.fn.load = function(b, c, d) {
				if (!this.length) return this;
				var e, f = this,
					g = b.split(/\s/),
					h = n(b, c, d),
					i = h.success;
				return g.length > 1 && (h.url = g[0], e = g[1]),
					h.success = function(b) {
						f.html(e ? a("<div>").html(b.replace(t, "")).find(e) : b),
						i && i.apply(f, arguments)
					},
					a.ajax(h),
					this
			};
		var z = encodeURIComponent;
		a.param = function(a, b) {
			var c = [];
			return c.add = function(a, b) {
				this.push(z(a) + "=" + z(b))
			},
				o(c, a, b),
				c.join("&").replace(/%20/g, "+")
		}
	} (Zepto),
	function(a) {
		a.fn.serializeArray = function() {
			var b, c = [];
			return a(Array.prototype.slice.call(this.get(0).elements)).each(function() {
				b = a(this);
				var d = b.attr("type");
				"fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != d && "reset" != d && "button" != d && ("radio" != d && "checkbox" != d || this.checked) && c.push({
					name: b.attr("name"),
					value: b.val()
				})
			}),
				c
		},
			a.fn.serialize = function() {
				var a = [];
				return this.serializeArray().forEach(function(b) {
					a.push(encodeURIComponent(b.name) + "=" + encodeURIComponent(b.value))
				}),
					a.join("&")
			},
			a.fn.submit = function(b) {
				if (b) this.bind("submit", b);
				else if (this.length) {
					var c = a.Event("submit");
					this.eq(0).trigger(c),
					c.defaultPrevented || this.get(0).submit()
				}
				return this
			}
	} (Zepto),
	function(a, b) {
		function c(a) {
			return d(a.replace(/([a-z])([A-Z])/, "$1-$2"))
		}
		function d(a) {
			return a.toLowerCase()
		}
		function e(a) {
			return f ? f + a: d(a)
		}
		var f, g, h, i, j, k, l, m, n = "",
			o = {
				Webkit: "webkit",
				Moz: "",
				O: "o",
				ms: "MS"
			},
			p = window.document,
			q = p.createElement("div"),
			r = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
			s = {};
		a.each(o,
			function(a, c) {
				return q.style[a + "TransitionProperty"] !== b ? (n = "-" + d(a) + "-", f = c, !1) : void 0
			}),
			g = n + "transform",
			s[h = n + "transition-property"] = s[i = n + "transition-duration"] = s[j = n + "transition-timing-function"] = s[k = n + "animation-name"] = s[l = n + "animation-duration"] = s[m = n + "animation-timing-function"] = "",
			a.fx = {
				off: f === b && q.style.transitionProperty === b,
				speeds: {
					_default: 400,
					fast: 200,
					slow: 600
				},
				cssPrefix: n,
				transitionEnd: e("TransitionEnd"),
				animationEnd: e("AnimationEnd")
			},
			a.fn.animate = function(b, c, d, e) {
				return a.isPlainObject(c) && (d = c.easing, e = c.complete, c = c.duration),
				c && (c = ("number" == typeof c ? c: a.fx.speeds[c] || a.fx.speeds._default) / 1e3),
					this.anim(b, c, d, e)
			},
			a.fn.anim = function(d, e, f, n) {
				var o, p, q, t = {},
					u = "",
					v = this,
					w = a.fx.transitionEnd;
				if (e === b && (e = .4), a.fx.off && (e = 0), "string" == typeof d) t[k] = d,
					t[l] = e + "s",
					t[m] = f || "linear",
					w = a.fx.animationEnd;
				else {
					p = [];
					for (o in d) r.test(o) ? u += o + "(" + d[o] + ") ": (t[o] = d[o], p.push(c(o)));
					u && (t[g] = u, p.push(g)),
					e > 0 && "object" == typeof d && (t[h] = p.join(", "), t[i] = e + "s", t[j] = f || "linear")
				}
				return q = function(b) {
					if ("undefined" != typeof b) {
						if (b.target !== b.currentTarget) return;
						a(b.target).unbind(w, q)
					}
					a(this).css(s),
					n && n.call(this)
				},
				e > 0 && this.bind(w, q),
				this.size() && this.get(0).clientLeft,
					this.css(t),
				0 >= e && setTimeout(function() {
						v.each(function() {
							q.call(this)
						})
					},
					0),
					this
			},
			q = null
	} (Zepto),
	function(a) {
		function b(a) {
			return "tagName" in a ? a: a.parentNode
		}
		function c(a, b, c, d) {
			var e = Math.abs(a - b),
				f = Math.abs(c - d);
			return e >= f ? a - b > 0 ? "Left": "Right": c - d > 0 ? "Up": "Down"
		}
		function d() {
			j = null,
			k.last && (k.el.trigger("longTap"), k = {})
		}
		function e() {
			j && clearTimeout(j),
				j = null
		}
		function f() {
			g && clearTimeout(g),
			h && clearTimeout(h),
			i && clearTimeout(i),
			j && clearTimeout(j),
				g = h = i = j = null,
				k = {}
		}
		var g, h, i, j, k = {},
			l = 750;
		a(document).ready(function() {
			var m, n;
			a(document.body).bind("touchstart",
				function(c) {
					m = Date.now(),
						n = m - (k.last || m),
						k.el = a(b(c.touches[0].target)),
					g && clearTimeout(g),
						k.x1 = c.touches[0].pageX,
						k.y1 = c.touches[0].pageY,
					n > 0 && 250 >= n && (k.isDoubleTap = !0),
						k.last = m,
						j = setTimeout(d, l)
				}).bind("touchmove",
				function(a) {
					e(),
						k.x2 = a.touches[0].pageX,
						k.y2 = a.touches[0].pageY,
					Math.abs(k.x1 - k.x2) > 10 && a.preventDefault()
				}).bind("touchend",
				function() {
					e(),
						k.x2 && Math.abs(k.x1 - k.x2) > 30 || k.y2 && Math.abs(k.y1 - k.y2) > 30 ? i = setTimeout(function() {
								k.el.trigger("swipe"),
									k.el.trigger("swipe" + c(k.x1, k.x2, k.y1, k.y2)),
									k = {}
							},
							0) : "last" in k && (h = setTimeout(function() {
								var b = a.Event("tap");
								b.cancelTouch = f,
									k.el.trigger(b),
									k.isDoubleTap ? (k.el.trigger("doubleTap"), k = {}) : g = setTimeout(function() {
											g = null,
												k.el.trigger("singleTap"),
												k = {}
										},
										250)
							},
							0))
				}).bind("touchcancel", f),
				a(window).bind("scroll", f)
		}),
			["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(b) {
				a.fn[b] = function(a) {
					return this.bind(b, a)
				}
			}),
			a(document).delegate(".js-btn", "touchstart",
				function() {
					a(this).addClass("active")
				}).delegate(".js-btn", "touchend",
				function() {
					a(this).removeClass("active")
				})
	} (Zepto),
	function(a, b) {
		function c(c, d, e, f, g) {
			"function" != typeof d || g || (g = d, d = b);
			var h = {
				opacity: e
			};
			return f && (h.scale = f, c.css(a.fx.cssPrefix + "transform-origin", "0 0")),
				c.animate(h, d, null, g)
		}
		function d(b, d, e, f) {
			return c(b, d, 0, e,
				function() {
					g.call(a(this)),
					f && f.call(this)
				})
		} {
			var e = window.document,
				f = (e.documentElement, a.fn.show),
				g = a.fn.hide;
			a.fn.toggle
		}
		a.fn.fadeTo = function(a, b, d) {
			return c(this, a, b, null, d)
		},
			a.fn.fadeIn = function(a, b) {
				var c = this.css("opacity");
				return c > 0 ? this.css("opacity", 0) : c = 1,
					f.call(this).fadeTo(a, c, b)
			},
			a.fn.fadeOut = function(a, b) {
				return d(this, a, null, b)
			},
			a.fn.fadeToggle = function(b, c) {
				return this.each(function() {
					var d = a(this);
					d[0 == d.css("opacity") || "none" == d.css("display") ? "fadeIn": "fadeOut"](b, c)
				})
			}
	} (Zepto);

ejs = function() {
	function a(b) {
		if ("fs" == b) return {};
		if ("path" == b) return {};
		var c = a.resolve(b),
			d = a.modules[c];
		if (!d) throw new Error('failed to require "' + b + '"');
		return d.exports || (d.exports = {},
			d.call(d.exports, d, d.exports, a.relative(c))),
			d.exports
	}
	return a.modules = {},
		a.resolve = function(b) {
			var c = b,
				d = b + ".js",
				e = b + "/index.js";
			return a.modules[d] && d || a.modules[e] && e || c
		},
		a.register = function(b, c) {
			a.modules[b] = c
		},
		a.relative = function(b) {
			return function(c) {
				if ("." != c.substr(0, 1)) return a(c);
				var d = b.split("/"),
					e = c.split("/");
				d.pop();
				for (var f = 0; f < e.length; f++) {
					var g = e[f];
					".." == g ? d.pop() : "." != g && d.push(g)
				}
				return a(d.join("/"))
			}
		},
		a.register("ejs.js",
			function(a, b, c) {
				function d(a) {
					return a.substr(1).split("|").reduce(function(a, b) {
						var c = b.split(":"),
							d = c.shift(),
							e = c.join(":") || "";
						return e && (e = ", " + e),
						"filters." + d + "(" + a + e + ")"
					})
				}
				function e(a, b, c, d) {
					var e = b.split("\n"),
						f = Math.max(d - 3, 0),
						g = Math.min(e.length, d + 3),
						h = e.slice(f, g).map(function(a, b) {
							var c = b + f + 1;
							return (c == d ? " >> ": "    ") + c + "| " + a
						}).join("\n");
					throw a.path = c,
						a.message = (c || "ejs") + ":" + d + "\n" + h + "\n\n" + a.message,
						a
				}
				function f(a, b) {
					var c = k(i(b), a),
						d = j(a);
					return d || (c += ".ejs"),
						c
				}
				var g = c("./utils"),
					h = c("path"),
					i = h.dirname,
					j = h.extname,
					k = h.join,
					l = c("fs"),
					m = l.readFileSync,
					n = b.filters = c("./filters"),
					o = {};
				b.clearCache = function() {
					o = {}
				};
				var p = (b.parse = function(a, c) {
					var c = c || {},
						e = c.open || b.open || "<%",
						g = c.close || b.close || "%>",
						h = c.filename,
						i = c.compileDebug !== !1,
						j = "";
					j += "var buf = [];",
					!1 !== c._with && (j += "\nwith (locals || {}) { (function(){ "),
						j += "\n buf.push('";
					for (var k = 1,
							 l = !1,
							 n = 0,
							 o = a.length; o > n; ++n) {
						var p = a[n];
						if (a.slice(n, e.length + n) == e) {
							n += e.length;
							var q, r, s = (i ? "__stack.lineno=": "") + k;
							switch (a[n]) {
								case "=":
									q = "', escape((" + s + ", ",
										r = ")), '",
										++n;
									break;
								case "-":
									q = "', (" + s + ", ",
										r = "), '",
										++n;
									break;
								default:
									q = "');" + s + ";",
										r = "; buf.push('"
							}
							var t = a.indexOf(g, n),
								u = a.substring(n, t),
								v = n,
								w = null,
								x = 0;
							if ("-" == u[u.length - 1] && (u = u.substring(0, u.length - 2), l = !0), 0 == u.trim().indexOf("include")) {
								var y = u.trim().slice(7).trim();
								if (!h) throw new Error("filename option is required for includes");
								var z = f(y, h);
								w = m(z, "utf8"),
									w = b.parse(w, {
										filename: z,
										_with: !1,
										open: e,
										close: g,
										compileDebug: i
									}),
									j += "' + (function(){" + w + "})() + '",
									u = ""
							}
							for (;~ (x = u.indexOf("\n", x));) x++,
								k++;
							":" == u.substr(0, 1) && (u = d(u)),
							u && (u.lastIndexOf("//") > u.lastIndexOf("\n") && (u += "\n"), j += q, j += u, j += r),
								n += t - v + g.length - 1
						} else "\\" == p ? j += "\\\\": "'" == p ? j += "\\'": "\r" == p || ("\n" == p ? l ? l = !1 : (j += "\\n", k++) : j += p)
					}
					return j += !1 !== c._with ? "'); })();\n} \nreturn buf.join('');": "');\nreturn buf.join('');"
				},
					b.compile = function(a, c) {
						c = c || {};
						var d = c.escape || g.escape,
							f = JSON.stringify(a),
							h = c.compileDebug !== !1,
							i = c.client,
							j = c.filename ? JSON.stringify(c.filename) : "undefined";
						a = h ? ["var __stack = { lineno: 1, input: " + f + ", filename: " + j + " };", e.toString(), "try {", b.parse(a, c), "} catch (err) {", "  rethrow(err, __stack.input, __stack.filename, __stack.lineno);", "}"].join("\n") : b.parse(a, c),
						c.debug && console.log(a),
						i && (a = "escape = escape || " + d.toString() + ";\n" + a);
						try {
							var k = new Function("locals, filters, escape, rethrow", a)
						} catch(l) {
							throw "SyntaxError" == l.name && (l.message += c.filename ? " in " + j: " while compiling ejs"),
								l
						}
						return i ? k: function(a) {
							return k.call(this, a, n, d, e)
						}
					});
				b.render = function(a, b) {
					var c, b = b || {};
					if (b.cache) {
						if (!b.filename) throw new Error('"cache" option requires "filename".');
						c = o[b.filename] || (o[b.filename] = p(a, b))
					} else c = p(a, b);
					return b.__proto__ = b.locals,
						c.call(b.scope, b)
				},
					b.renderFile = function(a, c, d) {
						var e = a + ":string";
						"function" == typeof c && (d = c, c = {}),
							c.filename = a;
						var f;
						try {
							f = c.cache ? o[e] || (o[e] = m(a, "utf8")) : m(a, "utf8")
						} catch(g) {
							return void d(g)
						}
						d(null, b.render(f, c))
					},
					b.__express = b.renderFile,
					c.extensions ? c.extensions[".ejs"] = function(a, b) {
						b = b || a.filename;
						var c = {
								filename: b,
								client: !0
							},
							d = l.readFileSync(b).toString(),
							e = p(d, c);
						a._compile("module.exports = " + e.toString() + ";", b)
					}: c.registerExtension && c.registerExtension(".ejs",
						function(a) {
							return p(a, {})
						})
			}),
		a.register("filters.js",
			function(a, b) {
				b.first = function(a) {
					return a[0]
				},
					b.last = function(a) {
						return a[a.length - 1]
					},
					b.capitalize = function(a) {
						return a = String(a),
						a[0].toUpperCase() + a.substr(1, a.length)
					},
					b.downcase = function(a) {
						return String(a).toLowerCase()
					},
					b.upcase = function(a) {
						return String(a).toUpperCase()
					},
					b.sort = function(a) {
						return Object.create(a).sort()
					},
					b.sort_by = function(a, b) {
						return Object.create(a).sort(function(a, c) {
							return a = a[b],
								c = c[b],
								a > c ? 1 : c > a ? -1 : 0
						})
					},
					b.size = b.length = function(a) {
						return a.length
					},
					b.plus = function(a, b) {
						return Number(a) + Number(b)
					},
					b.minus = function(a, b) {
						return Number(a) - Number(b)
					},
					b.times = function(a, b) {
						return Number(a) * Number(b)
					},
					b.divided_by = function(a, b) {
						return Number(a) / Number(b)
					},
					b.join = function(a, b) {
						return a.join(b || ", ")
					},
					b.truncate = function(a, b, c) {
						return a = String(a),
						a.length > b && (a = a.slice(0, b), c && (a += c)),
							a
					},
					b.truncate_words = function(a, b) {
						var a = String(a),
							c = a.split(/ +/);
						return c.slice(0, b).join(" ")
					},
					b.replace = function(a, b, c) {
						return String(a).replace(b, c || "")
					},
					b.prepend = function(a, b) {
						return Array.isArray(a) ? [b].concat(a) : b + a
					},
					b.append = function(a, b) {
						return Array.isArray(a) ? a.concat(b) : a + b
					},
					b.map = function(a, b) {
						return a.map(function(a) {
							return a[b]
						})
					},
					b.reverse = function(a) {
						return Array.isArray(a) ? a.reverse() : String(a).split("").reverse().join("")
					},
					b.get = function(a, b) {
						return a[b]
					},
					b.json = function(a) {
						return JSON.stringify(a)
					}
			}),
		a.register("utils.js",
			function(a, b) {
				b.escape = function(a) {
					return String(a).replace(/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;")
				}
			}),
		a("ejs")
} ();

!
	function(a, b, c) {
		function d(a, b) {
			return this instanceof d ? this.init(a, b) : new d(a, b)
		}
		function e(a, b) {
			return a.changedTouches ? a.changedTouches[0][b] : a[b]
		}
		function f(a) {
			return j(a,
				function(a) {
					return k.style[a] !== c
				})
		}
		function g(a, b, d) {
			var e = m[b];
			e ? a[e] = d: a[b] !== c ? (m[b] = b, a[b] = d) : j(l,
				function(e) {
					var f = i(e) + i(b);
					return a[f] !== c ? (m[b] = f, a[f] = d, !0) : void 0
				})
		}
		function h(a) {
			if (k.style[a] !== c) return a;
			var b;
			return j(l,
				function(d) {
					var e = i(d) + i(a);
					return k.style[e] !== c ? (b = "-" + d + "-" + a, !0) : void 0
				}),
				b
		}
		function i(a) {
			return a.charAt(0).toUpperCase() + a.substr(1)
		}
		function j(a, b) {
			for (var c = 0,
					 d = a.length; d > c; c++) if (b(a[c], c)) return ! 0;
			return ! 1
		}
		var k = b.createElement("div"),
			l = ["webkit", "moz", "o", "ms"],
			m = {},
			n = d.support = {},
			o = !1;
		n.transform3d = f(["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]),
			n.transform = f(["transformProperty", "WebkitTransform", "MozTransform", "OTransform", "msTransform"]),
			n.transition = f(["transitionProperty", "WebkitTransitionProperty", "MozTransitionProperty", "OTransitionProperty", "msTransitionProperty"]),
			n.addEventListener = "addEventListener" in a,
			n.mspointer = a.navigator.msPointerEnabled,
			n.cssAnimation = (n.transform3d || n.transform) && n.transition;
		var p = ["touch", "mouse"],
			q = {
				start: {
					touch: "touchstart",
					mouse: "mousedown"
				},
				move: {
					touch: "touchmove",
					mouse: "mousemove"
				},
				end: {
					touch: "touchend",
					mouse: "mouseup"
				}
			};
		n.addEventListener && (b.addEventListener("gesturestart",
			function() {
				o = !0
			}), b.addEventListener("gestureend",
			function() {
				o = !1
			})),
			d.prototype.init = function(a, d) {
				var e = this;
				if (e.element = a, "string" == typeof a && (e.element = b.querySelector(a)), !e.element) throw new Error("element not found");
				return n.mspointer && (e.element.style.msTouchAction = "none"),
					d = d || {},
					e.distance = d.distance,
					e.maxPoint = d.maxPoint,
					e.disableTouch = d.disableTouch === c ? !1 : d.disableTouch,
					e.disable3d = d.disable3d === c ? !1 : d.disable3d,
					e.transitionDuration = d.transitionDuration === c ? "350ms": d.transitionDuration + "ms",
					e.currentPoint = 0,
					e.currentX = 0,
					e.animation = !1,
					e.use3d = n.transform3d,
				e.disable3d === !0 && (e.use3d = !1),
					e._setStyle(n.cssAnimation ? {
						transitionProperty: h("transform"),
						transitionTimingFunction: "cubic-bezier(0,0,0.25,1)",
						transitionDuration: "0ms",
						transform: e._getTranslate(0)
					}: {
						position: "relative",
						left: "0px"
					}),
					e.refresh(),
					p.forEach(function(a) {
						e.element.addEventListener(q.start[a], e, !1)
					}),
					e
			},
			d.prototype.handleEvent = function(a) {
				var b = this;
				switch (a.type) {
					case q.start.touch:
					case q.start.mouse:
						b._touchStart(a);
						break;
					case q.move.touch:
					case q.move.mouse:
						b._touchMove(a);
						break;
					case q.end.touch:
					case q.end.mouse:
						b._touchEnd(a);
						break;
					case "click":
						b._click(a)
				}
			},
			d.prototype.refresh = function() {
				var a = this;
				a._maxPoint = a.maxPoint === c ?
					function() {
						for (var b, c = a.element.childNodes,
								 d = -1,
								 e = 0,
								 f = c.length; f > e; e++) b = c[e],
						1 === b.nodeType && d++;
						return d
					} () : a.maxPoint,
					a._distance = a.distance === c ? a._maxPoint < 0 ? 0 : a.element.scrollWidth / (a._maxPoint + 1) : a.distance,
					a._maxX = -a._distance * a._maxPoint,
					a.moveToPoint()
			},
			d.prototype.hasNext = function() {
				var a = this;
				return a.currentPoint < a._maxPoint
			},
			d.prototype.hasPrev = function() {
				var a = this;
				return a.currentPoint > 0
			},
			d.prototype.toNext = function(a) {
				var b = this;
				b.hasNext() && b.moveToPoint(b.currentPoint + 1, a)
			},
			d.prototype.toPrev = function(a) {
				var b = this;
				b.hasPrev() && b.moveToPoint(b.currentPoint - 1, a)
			},
			d.prototype.moveToPoint = function(a, b) {
				var d = this;
				b = b === c ? d.transitionDuration: b + "ms";
				var e = d.currentPoint;
				a === c && (a = d.currentPoint),
					d.currentPoint = 0 > a ? 0 : a > d._maxPoint ? d._maxPoint: parseInt(a, 10),
					n.cssAnimation ? d._setStyle({
						transitionDuration: b
					}) : d.animation = !0,
					d._setX( - d.currentPoint * d._distance, b),
				e !== d.currentPoint && (d._triggerEvent("fsmoveend", !0, !1), d._triggerEvent("fspointmove", !0, !1))
			},
			d.prototype._setX = function(a, b) {
				var c = this;
				c.currentX = a,
					n.cssAnimation ? c.element.style[m.transform] = c._getTranslate(a) : c.animation ? c._animate(a, b || c.transitionDuration) : c.element.style.left = a + "px"
			},
			d.prototype._touchStart = function(a) {
				var c = this;
				c.disableTouch || c._eventType || o || (j(p,
					function(b) {
						return a.type === q.start[b] ? (c._eventType = b, !0) : void 0
					}), c.element.addEventListener(q.move[c._eventType], c, !1), b.addEventListener(q.end[c._eventType], c, !1), "mouse" === c._eventType && a.preventDefault(), n.cssAnimation ? c._setStyle({
					transitionDuration: "0ms"
				}) : c.animation = !1, c.scrolling = !0, c.moveReady = !1, c.startPageX = e(a, "pageX"), c.startPageY = e(a, "pageY"), c.basePageX = c.startPageX, c.directionX = 0, c.startTime = a.timeStamp, c._triggerEvent("fstouchstart", !0, !1))
			},
			d.prototype._touchMove = function(a) {
				var b = this;
				if (b.scrolling && !o) {
					var c, d, f, g, h = e(a, "pageX"),
						i = e(a, "pageY");
					if (b.moveReady) {
						a.preventDefault(),
							a.stopPropagation(),
							c = h - b.basePageX,
							d = b.currentX + c,
						(d >= 0 || d < b._maxX) && (d = Math.round(b.currentX + c / 3)),
							b.directionX = 0 === c ? b.directionX: c > 0 ? -1 : 1;
						var j = !b._triggerEvent("fstouchmove", !0, !0, {
							delta: c,
							direction: b.directionX
						});
						j ? b._touchAfter({
							moved: !1,
							originalPoint: b.currentPoint,
							newPoint: b.currentPoint,
							cancelled: !0
						}) : b._setX(d)
					} else f = Math.abs(h - b.startPageX),
						g = Math.abs(i - b.startPageY),
						f > 5 ? (a.preventDefault(), a.stopPropagation(), b.moveReady = !0, b.element.addEventListener("click", b, !0)) : g > 5 && (b.scrolling = !1);
					b.basePageX = h
				}
			},
			d.prototype._touchEnd = function() {
				var a = this;
				if (a.element.removeEventListener(q.move[a._eventType], a, !1), b.removeEventListener(q.end[a._eventType], a, !1), a._eventType = null, a.scrolling) {
					var c = -a.currentX / a._distance;
					c = a.directionX > 0 ? Math.ceil(c) : a.directionX < 0 ? Math.floor(c) : Math.round(c),
						0 > c ? c = 0 : c > a._maxPoint && (c = a._maxPoint),
						a._touchAfter({
							moved: c !== a.currentPoint,
							originalPoint: a.currentPoint,
							newPoint: c,
							cancelled: !1
						}),
						a.moveToPoint(c)
				}
			},
			d.prototype._click = function(a) {
				a.stopPropagation(),
					a.preventDefault()
			},
			d.prototype._touchAfter = function(a) {
				var b = this;
				b.scrolling = !1,
					b.moveReady = !1,
					setTimeout(function() {
							b.element.removeEventListener("click", b, !0)
						},
						200),
					b._triggerEvent("fstouchend", !0, !1, a)
			},
			d.prototype._setStyle = function(a) {
				var b = this,
					c = b.element.style;
				for (var d in a) g(c, d, a[d])
			},
			d.prototype._animate = function(a, b) {
				var c = this,
					d = c.element,
					e = +new Date,
					f = parseInt(d.style.left, 10),
					g = a,
					h = parseInt(b, 10),
					i = function(a, b) {
						return - (a /= b) * (a - 2)
					},
					j = setInterval(function() {
							var a, b, c = new Date - e;
							c > h ? (clearInterval(j), b = g) : (a = i(c, h), b = a * (g - f) + f),
								d.style.left = b + "px"
						},
						10)
			},
			d.prototype.destroy = function() {
				var a = this;
				p.forEach(function(b) {
					a.element.removeEventListener(q.start[b], a, !1)
				})
			},
			d.prototype._getTranslate = function(a) {
				var b = this;
				return b.use3d ? "translate3d(" + a + "px, 0, 0)": "translate(" + a + "px, 0)"
			},
			d.prototype._triggerEvent = function(a, c, d, e) {
				var f = this,
					g = b.createEvent("Event");
				if (g.initEvent(a, c, d), e) for (var h in e) e.hasOwnProperty(h) && (g[h] = e[h]);
				return f.element.dispatchEvent(g)
			},
			a.Flipsnap = d
	} (window, window.document);

!
	function() {
		"use strict";
		function a(b, d) {
			function e(a, b) {
				return function() {
					return a.apply(b, arguments)
				}
			}
			var f;
			if (d = d || {},
					this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = d.touchBoundary || 10, this.layer = b, this.tapDelay = d.tapDelay || 200, this.tapTimeout = d.tapTimeout || 700, !a.notNeeded(b)) {
				for (var g = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], h = this, i = 0, j = g.length; j > i; i++) h[g[i]] = e(h[g[i]], h);
				c && (b.addEventListener("mouseover", this.onMouse, !0), b.addEventListener("mousedown", this.onMouse, !0), b.addEventListener("mouseup", this.onMouse, !0)),
					b.addEventListener("click", this.onClick, !0),
					b.addEventListener("touchstart", this.onTouchStart, !1),
					b.addEventListener("touchmove", this.onTouchMove, !1),
					b.addEventListener("touchend", this.onTouchEnd, !1),
					b.addEventListener("touchcancel", this.onTouchCancel, !1),
				Event.prototype.stopImmediatePropagation || (b.removeEventListener = function(a, c, d) {
					var e = Node.prototype.removeEventListener;
					"click" === a ? e.call(b, a, c.hijacked || c, d) : e.call(b, a, c, d)
				},
					b.addEventListener = function(a, c, d) {
						var e = Node.prototype.addEventListener;
						"click" === a ? e.call(b, a, c.hijacked || (c.hijacked = function(a) {
							a.propagationStopped || c(a)
						}), d) : e.call(b, a, c, d)
					}),
				"function" == typeof b.onclick && (f = b.onclick, b.addEventListener("click",
					function(a) {
						f(a)
					},
					!1), b.onclick = null)
			}
		}
		var b = navigator.userAgent.indexOf("Windows Phone") >= 0,
			c = navigator.userAgent.indexOf("Android") > 0 && !b,
			d = /iP(ad|hone|od)/.test(navigator.userAgent) && !b,
			e = d && /OS 4_\d(_\d)?/.test(navigator.userAgent),
			f = d && /OS [6-7]_\d/.test(navigator.userAgent),
			g = navigator.userAgent.indexOf("BB10") > 0;
		a.prototype.needsClick = function(a) {
			switch (a.nodeName.toLowerCase()) {
				case "button":
				case "select":
				case "textarea":
					if (a.disabled) return ! 0;
					break;
				case "input":
					if (d && "file" === a.type || a.disabled) return ! 0;
					break;
				case "label":
				case "iframe":
				case "video":
					return ! 0
			}
			return /\bneedsclick\b/.test(a.className)
		},
			a.prototype.needsFocus = function(a) {
				switch (a.nodeName.toLowerCase()) {
					case "textarea":
						return ! 0;
					case "select":
						return ! c;
					case "input":
						switch (a.type) {
							case "button":
							case "checkbox":
							case "file":
							case "image":
							case "radio":
							case "submit":
								return ! 1
						}
						return ! a.disabled && !a.readOnly;
					default:
						return /\bneedsfocus\b/.test(a.className)
				}
			},
			a.prototype.sendClick = function(a, b) {
				var c, d;
				document.activeElement && document.activeElement !== a && document.activeElement.blur(),
					d = b.changedTouches[0],
					c = document.createEvent("MouseEvents"),
					c.initMouseEvent(this.determineEventType(a), !0, !0, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null),
					c.forwardedTouchEvent = !0,
					a.dispatchEvent(c)
			},
			a.prototype.determineEventType = function(a) {
				return c && "select" === a.tagName.toLowerCase() ? "mousedown": "click"
			},
			a.prototype.focus = function(a) {
				var b;
				d && a.setSelectionRange && 0 !== a.type.indexOf("date") && "time" !== a.type && "month" !== a.type ? (b = a.value.length, a.setSelectionRange(b, b)) : a.focus()
			},
			a.prototype.updateScrollParent = function(a) {
				var b, c;
				if (b = a.fastClickScrollParent, !b || !b.contains(a)) {
					c = a;
					do {
						if (c.scrollHeight > c.offsetHeight) {
							b = c,
								a.fastClickScrollParent = c;
							break
						}
						c = c.parentElement
					} while ( c )
				}
				b && (b.fastClickLastScrollTop = b.scrollTop)
			},
			a.prototype.getTargetElementFromEventTarget = function(a) {
				return a.nodeType === Node.TEXT_NODE ? a.parentNode: a
			},
			a.prototype.onTouchStart = function(a) {
				var b, c, f;
				if (a.targetTouches.length > 1) return ! 0;
				if (b = this.getTargetElementFromEventTarget(a.target), c = a.targetTouches[0], d) {
					if (f = window.getSelection(), f.rangeCount && !f.isCollapsed) return ! 0;
					if (!e) {
						if (c.identifier && c.identifier === this.lastTouchIdentifier) return a.preventDefault(),
							!1;
						this.lastTouchIdentifier = c.identifier,
							this.updateScrollParent(b)
					}
				}
				return this.trackingClick = !0,
					this.trackingClickStart = a.timeStamp,
					this.targetElement = b,
					this.touchStartX = c.pageX,
					this.touchStartY = c.pageY,
				a.timeStamp - this.lastClickTime < this.tapDelay && a.preventDefault(),
					!0
			},
			a.prototype.touchHasMoved = function(a) {
				var b = a.changedTouches[0],
					c = this.touchBoundary;
				return Math.abs(b.pageX - this.touchStartX) > c || Math.abs(b.pageY - this.touchStartY) > c ? !0 : !1
			},
			a.prototype.onTouchMove = function(a) {
				return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(a.target) || this.touchHasMoved(a)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
			},
			a.prototype.findControl = function(a) {
				return void 0 !== a.control ? a.control: a.htmlFor ? document.getElementById(a.htmlFor) : a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
			},
			a.prototype.onTouchEnd = function(a) {
				var b, g, h, i, j, k = this.targetElement;
				if (!this.trackingClick) return ! 0;
				if (a.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0,
					!0;
				if (a.timeStamp - this.trackingClickStart > this.tapTimeout) return ! 0;
				if (this.cancelNextClick = !1, this.lastClickTime = a.timeStamp, g = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, f && (j = a.changedTouches[0], k = document.elementFromPoint(j.pageX - window.pageXOffset, j.pageY - window.pageYOffset) || k, k.fastClickScrollParent = this.targetElement.fastClickScrollParent), h = k.tagName.toLowerCase(), "label" === h) {
					if (b = this.findControl(k)) {
						if (this.focus(k), c) return ! 1;
						k = b
					}
				} else if (this.needsFocus(k)) return a.timeStamp - g > 100 || d && window.top !== window && "input" === h ? (this.targetElement = null, !1) : (this.focus(k), this.sendClick(k, a), d && "select" === h || (this.targetElement = null, a.preventDefault()), !1);
				return d && !e && (i = k.fastClickScrollParent, i && i.fastClickLastScrollTop !== i.scrollTop) ? !0 : (this.needsClick(k) || (a.preventDefault(), this.sendClick(k, a)), !1)
			},
			a.prototype.onTouchCancel = function() {
				this.trackingClick = !1,
					this.targetElement = null
			},
			a.prototype.onMouse = function(a) {
				return this.targetElement ? a.forwardedTouchEvent ? !0 : a.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.propagationStopped = !0, a.stopPropagation(), a.preventDefault(), !1) : !0 : !0
			},
			a.prototype.onClick = function(a) {
				var b;
				return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === a.target.type && 0 === a.detail ? !0 : (b = this.onMouse(a), b || (this.targetElement = null), b)
			},
			a.prototype.destroy = function() {
				var a = this.layer;
				c && (a.removeEventListener("mouseover", this.onMouse, !0), a.removeEventListener("mousedown", this.onMouse, !0), a.removeEventListener("mouseup", this.onMouse, !0)),
					a.removeEventListener("click", this.onClick, !0),
					a.removeEventListener("touchstart", this.onTouchStart, !1),
					a.removeEventListener("touchmove", this.onTouchMove, !1),
					a.removeEventListener("touchend", this.onTouchEnd, !1),
					a.removeEventListener("touchcancel", this.onTouchCancel, !1)
			},
			a.notNeeded = function(a) {
				var b, d, e, f;
				if ("undefined" == typeof window.ontouchstart) return ! 0;
				if (d = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
					if (!c) return ! 0;
					if (b = document.querySelector("meta[name=viewport]")) {
						if ( - 1 !== b.content.indexOf("user-scalable=no")) return ! 0;
						if (d > 31 && document.documentElement.scrollWidth <= window.outerWidth) return ! 0
					}
				}
				if (g && (e = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), e[1] >= 10 && e[2] >= 3 && (b = document.querySelector("meta[name=viewport]")))) {
					if ( - 1 !== b.content.indexOf("user-scalable=no")) return ! 0;
					if (document.documentElement.scrollWidth <= window.outerWidth) return ! 0
				}
				return "none" === a.style.msTouchAction || "manipulation" === a.style.touchAction ? !0 : (f = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], f >= 27 && (b = document.querySelector("meta[name=viewport]"), b && ( - 1 !== b.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === a.style.touchAction || "manipulation" === a.style.touchAction ? !0 : !1)
			},
			a.attach = function(b, c) {
				return new a(b, c)
			},
			"function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
				return a
			}) : "undefined" != typeof module && module.exports ? (module.exports = a.attach, module.exports.FastClick = a) : window.FastClick = a
	} ();