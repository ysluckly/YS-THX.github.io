/*!
 * Valine v1.3.4
 * (c) 2017-2018 xCss
 * Released under the GPL-2.0 License.
 */

!
function(e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Valine = t() : e.Valine = t()
}(this, function() {
	return function(e) {
		function t(r) {
			if (n[r]) return n[r].exports;
			var i = n[r] = {
				i: r,
				l: !1,
				exports: {}
			};
			return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
		}
		var n = {};
		return t.m = e, t.c = n, t.i = function(e) {
			return e
		}, t.d = function(e, n, r) {
			t.o(e, n) || Object.defineProperty(e, n, {
				configurable: !1,
				enumerable: !0,
				get: r
			})
		}, t.n = function(e) {
			var n = e && e.__esModule ?
			function() {
				return e.default
			} : function() {
				return e
			};
			return t.d(n, "a", n), n
		}, t.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, t.p = "", t(t.s = 17)
	}([function(e, t, n) {
		var r, i, o;
/*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/
		!
		function(n, a) {
			i = [e, t], r = a, void 0 !== (o = "function" == typeof r ? r.apply(t, i) : r) && (e.exports = o)
		}(0, function(e, t) {
			"use strict";

			function n(e) {
				function t(t) {
					var n = e.style.width;
					e.style.width = "0px", e.offsetWidth, e.style.width = n, e.style.overflowY = t
				}
				function n(e) {
					for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({
						node: e.parentNode,
						scrollTop: e.parentNode.scrollTop
					}), e = e.parentNode;
					return t
				}
				function r() {
					if (0 !== e.scrollHeight) {
						var t = n(e),
							r = document.documentElement && document.documentElement.scrollTop;
						e.style.height = "", e.style.height = e.scrollHeight + s + "px", l = e.clientWidth, t.forEach(function(e) {
							e.node.scrollTop = e.scrollTop
						}), r && (document.documentElement.scrollTop = r)
					}
				}
				function i() {
					r();
					var n = Math.round(parseFloat(e.style.height)),
						i = window.getComputedStyle(e, null),
						o = "content-box" === i.boxSizing ? Math.round(parseFloat(i.height)) : e.offsetHeight;
					if (o < n ? "hidden" === i.overflowY && (t("scroll"), r(), o = "content-box" === i.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== i.overflowY && (t("hidden"), r(), o = "content-box" === i.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), c !== o) {
						c = o;
						var s = a("autosize:resized");
						try {
							e.dispatchEvent(s)
						} catch (e) {}
					}
				}
				if (e && e.nodeName && "TEXTAREA" === e.nodeName && !o.has(e)) {
					var s = null,
						l = null,
						c = null,
						d = function() {
							e.clientWidth !== l && i()
						},
						u = function(t) {
							window.removeEventListener("resize", d, !1), e.removeEventListener("input", i, !1), e.removeEventListener("keyup", i, !1), e.removeEventListener("autosize:destroy", u, !1), e.removeEventListener("autosize:update", i, !1), Object.keys(t).forEach(function(n) {
								e.style[n] = t[n]
							}), o.delete(e)
						}.bind(e, {
							height: e.style.height,
							resize: e.style.resize,
							overflowY: e.style.overflowY,
							overflowX: e.style.overflowX,
							wordWrap: e.style.wordWrap
						});
					e.addEventListener("autosize:destroy", u, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", i, !1), window.addEventListener("resize", d, !1), e.addEventListener("input", i, !1), e.addEventListener("autosize:update", i, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", o.set(e, {
						destroy: u,
						update: i
					}), function() {
						var t = window.getComputedStyle(e, null);
						"vertical" === t.resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), s = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(s) && (s = 0), i()
					}()
				}
			}
			function r(e) {
				var t = o.get(e);
				t && t.destroy()
			}
			function i(e) {
				var t = o.get(e);
				t && t.update()
			}
			var o = "function" == typeof Map ? new Map : function() {
					var e = [],
						t = [];
					return {
						has: function(t) {
							return e.indexOf(t) > -1
						},
						get: function(n) {
							return t[e.indexOf(n)]
						},
						set: function(n, r) {
							-1 === e.indexOf(n) && (e.push(n), t.push(r))
						},
						delete: function(n) {
							var r = e.indexOf(n);
							r > -1 && (e.splice(r, 1), t.splice(r, 1))
						}
					}
				}(),
				a = function(e) {
					return new Event(e, {
						bubbles: !0
					})
				};
			try {
				new Event("test")
			} catch (e) {
				a = function(e) {
					var t = document.createEvent("Event");
					return t.initEvent(e, !0, !1), t
				}
			}
			var s = null;
			"undefined" == typeof window || "function" != typeof window.getComputedStyle ? (s = function(e) {
				return e
			}, s.destroy = function(e) {
				return e
			}, s.update = function(e) {
				return e
			}) : (s = function(e, t) {
				return e && Array.prototype.forEach.call(e.length ? e : [e], function(e) {
					return n(e)
				}), e
			}, s.destroy = function(e) {
				return e && Array.prototype.forEach.call(e.length ? e : [e], r), e
			}, s.update = function(e) {
				return e && Array.prototype.forEach.call(e.length ? e : [e], i), e
			}), t.
		default = s, e.exports = t.
		default
		})
	}, function(e, t, n) {
		"use strict";

		function r(e) {
			var t = this;
			return !!e && t.init(e), t
		}
		function i(e) {
			return new r(e)
		}
		var o = n(9).version,
			a = n(6),
			s = n(8),
			l = n(0),
			c = n(5),
			d = n(3),
			u = n(4),
			p = n(2),
			f = n(7),
			h = {
				comment: "",
				nick: "匿名",
				mail: "",
				link: "",
				ua: navigator.userAgent,
				url: ""
			},
			v = {
				"zh-cn": {
					head: {
						nick: "昵称（必填）",
						mail: "邮箱（必填）",
						link: "链接"
					},
					tips: {
						comments: "评论",
						sofa: "快来做第一个评论的人吧~",
						busy: "还在提交中，请稍候...",
						again: "这么简单也能错，也是没谁了."
					},
					ctrl: {
						emoji: "表情",
						preview: "预览",
						reply: "回复",
						ok: "好的",
						sure: "确认",
						cancel: "取消",
						confirm: "确认",
						continue :"继续",
						more: "查看更多...",
						try :"再试试?"
					},
					error: {
						99: "初始化失败，请检查init中的`el`元素.",
						100: "初始化失败，请检查你的AppId和AppKey.",
						401: "未经授权的操作，请检查你的AppId和AppKey.",
						403: "访问被api域名白名单拒绝，请检查你的安全域名设置."
					},
					timeago: {
						seconds: "秒前",
						minutes: "分钟前",
						hours: "小时前",
						days: "天前",
						now: "刚刚"
					}
				},
				en: {
					head: {
						nick: "NickName",
						mail: "E-Mail",
						link: "Website(http://)"
					},
					tips: {
						comments: "Comments",
						sofa: "No comments yet.",
						busy: "Submit is busy, please wait...",
						again: "Sorry, this is a wrong calculation."
					},
					ctrl: {
            emoji: "Emoji",
						preview: "Preview",
						reply: "Reply",
						ok: "Ok",
						sure: "Sure",
						cancel: "Cancel",
						confirm: "Confirm",
						continue :"Continue",
						more: "Load More...",
						try :"Once More?"
					},
					error: {
						99: "Initialization failed, Please check the `el` element in the init method.",
						100: "Initialization failed, Please check your appId and appKey.",
						401: "Unauthorized operation, Please check your appId and appKey.",
						403: "Access denied by api domain white list, Please check your security domain."
					},
					timeago: {
						seconds: "seconds ago",
						minutes: "minutes ago",
						hours: "hours ago",
						days: "days ago",
						now: "just now"
					}
				}
			},
			g = {
				cdn: "https://gravatar.loli.net/avatar/",
				ds: ["mp", "identicon", "monsterid", "wavatar", "robohash", "retro", ""],
				params: "",
				hide: !1
			},
			m = ["nick", "mail", "link"],
			b = Storage && localStorage && localStorage instanceof Storage && localStorage,
			x = location.pathname.replace(/index\.html?$/, "");
		r.prototype.init = function(e) {
			if ("undefined" == typeof document) return void console;
			var t = this;
			try {
				var n = e.lang || "",
					r = e.langMode || "",
					i = g.ds,
					a = e.avatar,
					l = e.avatarForce,
					c = e.avatar_cdn || "";
				n && r && t.installLocale(n, r), t.locale = t.locale || v[e.lang || "zh-cn"], t.notify = e.notify || !1, t.verify = e.verify || !1;
				var d = l ? "&q=" + Math.random().toString(32).substring(2) : "";
				g.params = "?d=" + (i.indexOf(a) > -1 ? a : "mp") + "&v=" + o + d, g.hide = "hide" === a, g.cdn = !! c && c || g.cdn, x = e.path || x;
				var p = Number(e.pageSize || 10);
				if (e.pageSize = isNaN(p) ? 10 : p < 1 ? 10 : p, s.setOptions({
					renderer: new s.Renderer,
					highlight: !1 === e.highlight ? null : f,
					gfm: !0,
					tables: !0,
					breaks: !0,
					pedantic: !1,
					sanitize: !1,
					smartLists: !0,
					smartypants: !0
				}), !AV) return void setTimeout(function() {
					t.init(e)
				}, 20);
				var h = e.app_id || e.appId,
					b = e.app_key || e.appKey,
					y = (e.region || "cn").toLowerCase(),
					k = ["cn", "us"];
				if (y = k.indexOf(y) > -1 ? y : k[0], !h || !b) throw 99;
				AV.applicationId && delete AV._config.applicationId || (AV.applicationId = null), AV.applicationKey && delete AV._config.applicationKey || (AV.applicationKey = null), AV.init({
					appId: h,
					appKey: b,
					region: y
				});
				for (var _ = u.findAll(document, ".valine-comment-count"), A = 0, O = _.length; A < O; A++)!
				function(e, n) {
					var r = _[e];
					if (r) {
						var i = u.attr(r, "data-xid");
						i && t.Q(i).count().then(function(e) {
							r.innerText = e
						}).
						catch (function(e) {
							r.innerText = 0
						})
					}
				}(A);
				e.visitor && w.add(AV.Object.extend("Counter"));
				var S = e.el || null,
					$ = u.findAll(document, S);
				if (!(S = S instanceof HTMLElement ? S : $[$.length - 1] || null)) return;
				t.el = S, t.el.classList.add("v"), g.hide && t.el.classList.add("hide-avatar"), e.meta = (e.guest_info || e.meta || m).filter(function(e) {
					return m.indexOf(e) > -1
				});
				var E = (0 == e.meta.length ? m : e.meta).map(function(e) {
					var n = "mail" == e ? "email" : "text";
					return m.indexOf(e) > -1 ? '<input name="' + e + '" placeholder="' + t.locale.head[e] + '" class="v' + e + ' vinput" type="' + n + '">' : ""
				});
				t.placeholder = e.placeholder || "Just Go Go", t.el.innerHTML = '<div class="vwrap"><div class="vheader item' + E.length + '">' + E.join("") + '</div><div class="vedit"><textarea id="veditor" class="veditor vinput" placeholder="' + t.placeholder + '"></textarea><div class="vctrl"><span class="vemoji-btn">' + t.locale.ctrl.emoji + '</span> | <span class="vpreview-btn">' + t.locale.ctrl.preview + '</span></div><div class="vemojis" style="display:none;"></div><div class="vinput vpreview" style="display:none;"></div></div><div class="vcontrol"><div class="col col-20" title="Markdown is supported"><a href="https://segmentfault.com/markdown" target="_blank"><svg class="markdown" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z"></path></svg></a></div><div class="col col-80 text-right"><button type="button" title="Cmd|Ctrl+Enter" class="vsubmit vbtn">' + t.locale.ctrl.reply + '</button></div></div><div style="display:none;" class="vmark"></div></div><div class="vinfo" style="display:none;"><div class="vcount col"></div></div><div class="vlist"></div><div class="vempty" style="display:none;"></div><div class="vpage txt-center"></div><div class="info"><div class="power txt-right">Powered By <a href="https://valine.js.org" target="_blank">Valine</a><br>v' + o + "</div></div>";
				var C = u.find(t.el, ".vempty");
				t.nodata = {
					show: function(e) {
						return C.innerHTML = e || t.locale.tips.sofa, u.attr(C, "style", "display:block;"), t
					},
					hide: function() {
						return u.attr(C, "style", "display:none;"), t
					}
				};
				var M = u.create("div", "class", "vloading"),
					L = u.find(t.el, ".vlist");
				t.loading = {
					show: function(e) {
						var n = u.findAll(L, ".vcard");
						return e ? L.insertBefore(M, n[0]) : L.appendChild(M), t.nodata.hide(), t
					},
					hide: function() {
						var e = u.find(L, ".vloading");
						return e && u.remove(L, e), 0 === u.findAll(L, ".vcard").length && t.nodata.show(), t
					}
				};
				var T = u.find(t.el, ".vmark");
				t.alert = {
					show: function(e) {
						T.innerHTML = '<div class="valert txt-center"><div class="vtext">' + (e && e.text || 1) + '</div><div class="vbtns"></div></div>';
						var n = u.find(T, ".vbtns"),
							r = '<button class="vcancel vbtn">' + (e && e.ctxt || t.locale.ctrl.cancel) + "</button>",
							i = '<button class="vsure vbtn">' + (e && e.otxt || t.locale.ctrl.sure) + "</button>";
						if (n.innerHTML = "" + r + (e && e.type && i), u.on("click", u.find(T, ".vcancel"), function(e) {
							t.alert.hide()
						}), u.attr(T, "style", "display:block;"), e && e.type) {
							var o = u.find(T, ".vsure");
							u.on("click", o, function(n) {
								t.alert.hide(), e.cb && e.cb()
							})
						}
						return t
					},
					hide: function() {
						return u.attr(T, "style", "display:none;"), t
					}
				}, t.bind(e)
			} catch (e) {
				t.ErrorHandler(e)
			}
			return t
		};
		var y = function(e, t) {
				var n = new e,
					r = new AV.ACL;
				r.setPublicReadAccess(!0), r.setPublicWriteAccess(!0), n.setACL(r), n.set("url", t.url), n.set("xid", t.xid), n.set("title", t.title), n.set("time", 1), n.save().then(function(e) {
					u.find(t.el, ".leancloud-visitors-count").innerText = 1
				}).
				catch (function(e) {})
			},
			w = {
				add: function(e) {
					var t = u.findAll(document, ".leancloud_visitors,.leancloud-visitors");
					if (t.length) {
						var n = t[0],
							r = u.attr(n, "id"),
							i = u.attr(n, "data-flag-title"),
							o = encodeURI(r),
							a = {
								el: n,
								url: r,
								xid: o,
								title: i
							};
						if (decodeURI(r) === decodeURI(x)) {
							var s = new AV.Query(e);
							s.equalTo("url", r), s.find().then(function(t) {
								if (t.length > 0) {
									var r = t[0];
									r.increment("time"), r.save().then(function(e) {
										u.find(n, ".leancloud-visitors-count").innerText = e.get("time")
									}).
									catch (function(e) {})
								} else y(e, a)
							}).
							catch (function(t) {
								101 == t.code && y(e, a)
							})
						} else w.show(e, t)
					}
				},
				show: function(e, t) {
					u.each(t, function(e, t) {
						var n = u.find(t, ".leancloud-visitors-count");
						n && (n.innerText = 0)
					});
					var n = [];
					for (var r in t) t.hasOwnProperty(r) && n.push(u.attr(t[r], "id"));
					if (n.length) {
						var i = new AV.Query(e);
						i.containedIn("url", n), i.find().then(function(e) {
							e.length > 0 && u.each(e, function(e, t) {
								var n = t.get("url"),
									r = t.get("time"),
									i = u.find(document, '.leancloud_visitors[id="' + n + '"]') || u.find(document, '.leancloud-visitors[id="' + n + '"]'),
									o = u.find(i, ".leancloud-visitors-count");
								o && (o.innerText = r)
							})
						}).
						catch (function(e) {})
					}
				}
			};
		r.prototype.Q = function(e) {
			if (1 == arguments.length) {
				var t = new AV.Query("Comment");
				t.doesNotExist("rid");
				var n = new AV.Query("Comment");
				n.equalTo("rid", "");
				var r = AV.Query.or(t, n);
				return r.equalTo("url", decodeURI(e)), r.addDescending("createdAt"), r.addDescending("insertedAt"), r
			}
			var i = JSON.stringify(arguments[1]).replace(/(\[|\])/g, ""),
				o = "select * from Comment where rid in (" + i + ") order by -createdAt,-createdAt";
			return AV.Query.doCloudQuery(o)
		}, r.prototype.ErrorHandler = function(e) {
			var t = this;
			if (t.el && t.loading.hide().nodata.hide(), "[object Error]" === {}.toString.call(e)) {
				var n = e.code || "",
					r = t.locale.error[n],
					i = r || e.message || e.error || "";
				101 == n ? t.nodata.show() : t.el && t.nodata.show('<pre style="text-align:left;">Code ' + n + ": " + i + "</pre>") || console
			} else t.el && t.nodata.show('<pre style="text-align:left;">' + JSON.stringify(e) + "</pre>") || console
		}, r.prototype.installLocale = function(e, t) {
			var n = this;
			return t = t || {}, e && (v[e] = t, n.locale = v[e] || v["zh-cn"]), n
		}, r.prototype.setPath = function(e) {
			return x = e || x, this
		}, r.prototype.bind = function(e) {
			var t = this,
				n = u.find(t.el, ".vemojis"),
				r = u.find(t.el, ".vpreview"),
				i = u.find(t.el, ".vemoji-btn"),
				o = u.find(t.el, ".vpreview-btn"),
				f = p.data;
			for (var v in f) f.hasOwnProperty(v) &&
			function(e, r) {
				var i = u.create("i", {
					name: e,
					title: e
				});
				i.innerHTML = r, n.appendChild(i), u.on("click", i, function(e) {
					var n = u.find(t.el, ".veditor");
					E(n, r), y(n)
				})
			}(v, f[v]);
			t.emoji = {
				show: function() {
					return t.preview.hide(), u.attr(i, "v", 1), u.removeAttr(o, "v"), u.attr(n, "style", "display:block"), t.emoji
				},
				hide: function() {
					return u.removeAttr(i, "v"), u.attr(n, "style", "display:hide"), t.emoji
				}
			}, t.preview = {
				show: function() {
					return t.emoji.hide(), u.attr(o, "v", 1), u.removeAttr(i, "v"), r.innerHTML = h.comment, u.attr(r, "style", "display:block"), T(), t.preview
				},
				hide: function() {
					return u.removeAttr(o, "v"), u.attr(r, "style", "display:none"), t.preview
				},
				empty: function() {
					return r.innerHtml = "", t.preview
				}
			};
			var m = function(e) {
					var t = u.create("div");
					t.insertAdjacentHTML("afterbegin", e);
					var n = u.findAll(t, "*"),
						r = ["INPUT", "STYLE", "SCRIPT", "IFRAME", "FRAME", "AUDIO", "VIDEO", "EMBED", "META", "TITLE", "LINK"],
						i = function(e, t) {
							var n = u.attr(e, t);
							n && u.attr(e, t, n.replace(/(javascript|eval)/gi, ""))
						};
					return u.each(n, function(e, n) {
						1 === n.nodeType && (r.indexOf(n.nodeName) > -1 && ("INPUT" === n.nodeName && "checkbox" === u.attr(n, "type") ? u.attr(n, "disabled", "disabled") : u.remove(t, n)), "A" === n.nodeName && i(n, "href"), u.clearAttr(n))
					}), t.innerHTML
				},
				y = function(e) {
					var t = e.value || "";
					t = p.parse(t), e.value = t;
					var n = m(s(t));
					h.comment = n, r.innerHTML = n, t ? l(e) : l.destroy(e)
				};
			u.on("click", i, function(e) {
				u.attr(i, "v") ? t.emoji.hide() : t.emoji.show()
			}), u.on("click", o, function(e) {
				u.attr(o, "v") ? t.preview.hide() : t.preview.show()
			});
			for (var w = e.meta, _ = {}, A = {
				veditor: "comment"
			}, O = 0, S = w.length; O < S; O++) A["v" + w[O]] = w[O];
			for (var $ in A) A.hasOwnProperty($) &&
			function() {
				var e = A[$],
					n = u.find(t.el, "." + $);
				_[e] = n, n && u.on("input change blur", n, function(t) {
					"comment" === e ? y(n) : h[e] = u.escape(n.value.replace(/(^\s*)|(\s*$)/g, ""))
				})
			}();
			var E = function(e, t) {
					if (document.selection) {
						e.focus();
						document.selection.createRange().text = t, e.focus()
					} else if (e.selectionStart || "0" == e.selectionStart) {
						var n = e.selectionStart,
							r = e.selectionEnd,
							i = e.scrollTop;
						e.value = e.value.substring(0, n) + t + e.value.substring(r, e.value.length), e.focus(), e.selectionStart = n + t.length, e.selectionEnd = n + t.length, e.scrollTop = i
					} else e.focus(), e.value += t
				},
				C = function(e) {
					var n = u.find(t.el, ".vh[rootid='" + e + "']"),
						r = u.find(n, ".vquote");
					return r || (r = u.create("div", "class", "vquote"), n.appendChild(r)), r
				},
				M = function n() {
					var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
						i = e.pageSize,
						o = Number(u.find(t.el, ".vnum").innerText);
					t.loading.show();
					var a = t.Q(x);
					a.limit(i), a.skip((r - 1) * i), a.find().then(function(e) {
						for (var a = e.length, s = [], l = 0; l < a; l++) {
							var c = e[l];
							s.push(c.id), L(c, u.find(t.el, ".vlist"), !0)
						}
						t.Q(x, s).then(function(e) {
							for (var t = e && e.results || [], n = 0; n < t.length; n++) {
								var r = t[n];
								L(r, C(r.get("rid")))
							}
						});
						var d = u.find(t.el, ".vpage");
						d.innerHTML = i * r < o ? '<button type="button" class="vmore vbtn">' + t.locale.ctrl.more + "</button>" : "";
						var p = u.find(d, ".vmore");
						p && u.on("click", p, function(e) {
							d.innerHTML = "", n(++r)
						}), t.loading.hide()
					}).
					catch (function(e) {
						t.loading.hide().ErrorHandler(e)
					})
				};
			t.Q(x).count().then(function(e) {
				e > 0 ? (u.attr(u.find(t.el, ".vinfo"), "style", "display:block;"), u.find(t.el, ".vcount").innerHTML = '<span class="vnum">' + e + "</span> " + t.locale.tips.comments, M()) : t.loading.hide()
			}).
			catch (function(e) {
				t.ErrorHandler(e)
			});
			var L = function(e, n, r) {
					var i = u.create("div", {
						class: "vcard",
						id: e.id
					}),
						o = g.hide ? "" : '<img class="vimg" src="' + (g.cdn + a(e.get("mail")) + g.params) + '">',
						s = e.get("ua") || "",
						l = "";
					if (s) {
						s = d(s);
						l = '<span class="vsys">' + s.browser + " " + s.version + "</span>" + " " + ('<span class="vsys">' + s.os + " " + s.osVersion + "</span>")
					}
					var p = "",
						f = e.get("link") || "";
					p = f ? '<a class="vnick" rel="nofollow" href="' + f + '" target="_blank" >' + e.get("nick") + "</a>" : '<span class="vnick">' + e.get("nick") + "</span>", i.innerHTML = o + '\n            <div class="vh" rootid=' + (e.get("rid") || e.id) + '>\n                <div class="vhead">' + p + " " + l + '</div>\n                <div class="vmeta">\n                    <span class="vtime">' + c(e.get("insertedAt") || e.createdAt, t.locale) + '</span>\n                    <span rid="' + (e.get("rid") || e.id) + '" cid="' + e.id + '" at="@' + u.escape(e.get("nick")) + '" mail="' + e.get("mail") + '" class="vat">' + t.locale.ctrl.reply + '</span>\n                </div>\n                <div class="vcontent">\n                    ' + m(e.get("comment")) + "\n                </div>\n            </div>";
					for (var h = u.find(i, ".vat"), v = u.findAll(i, "a"), b = 0, x = v.length; b < x; b++) {
						var y = v[b];
						y && -1 == (u.attr(y, "class") || "").indexOf("at") && u.attr(y, {
							target: "_blank",
							rel: "nofollow"
						})
					}
					var w = u.findAll(n, ".vcard");
					r ? n.appendChild(i) : n.insertBefore(i, w[0]);
					var k = u.find(i, ".vcontent");
					k && z(k), h && B(h), T()
				},
				T = function() {
					setTimeout(function() {
						var e = e || "";
						e && e.Hub.Queue(["Typeset", e.Hub])
					}, 20)
				},
				z = function(e) {
					setTimeout(function() {
						e.offsetHeight > 180 && (e.classList.add("expand"), u.on("click", e, function(t) {
							u.attr(e, "class", "vcontent")
						}))
					})
				},
				R = {},
				B = function(e) {
					u.on("click", e, function(t) {
						var n = u.attr(e, "at"),
							r = u.attr(e, "rid"),
							i = u.attr(e, "cid"),
							o = u.attr(e, "mail");
						R = {
							at: u.escape(n) + " ",
							rid: r,
							pid: i,
							rmail: o
						}, u.attr(_.comment, "placeholder", n), _.comment.focus()
					})
				};
			!
			function() {
				var e = b && b.ValineCache;
				if (e) {
					e = JSON.parse(e);
					var n = w;
					for (var r in n) {
						var i = n[r];
						u.find(t.el, ".v" + i).value = u.unescape(e[i]), h[i] = e[i]
					}
				}
			}();
			var j = function() {
					h.comment = "", _.comment.value = "", y(_.comment), u.attr(_.comment, "placeholder", t.placeholder), R = {}, t.preview.empty().hide()
				},
				I = u.find(t.el, ".vsubmit"),
				P = function(e) {
					if (u.attr(I, "disabled")) return void t.alert.show({
						type: 0,
						text: t.locale.tips.busy + 'ヾ(๑╹◡╹)ﾉ"',
						ctxt: t.locale.ctrl.ok
					});
					if (h.nick == "" || h.nick == "匿名") {
						alert('请输入昵称！');
						return void _.nick.focus();
					}
					if (h.mail == "") {
						alert('请输入邮箱！');
						return void _.mail.focus();
					}
					if ("" == h.comment) {
						alert('请输入内容！');
						return void _.comment.focus();
					}
					h.nick = h.nick || "匿名";
					var n = k.mail(h.mail),
						r = k.link(h.link);
					h.mail = n.k ? n.v : "", h.link = r.k ? r.v : "", t.notify || t.verify ? V(Q) : Q();
          _.comment.emojiParse({
              basePath: '/blog/images/emoji',
              icons: emojiLists   // 注：详见 js/emoji.list.js
          });
				},
				U = function() {
					var e = new AV.ACL;
					return e.setPublicReadAccess(!0), e.setPublicWriteAccess(!1), e
				},
				Q = function() {
					u.attr(I, "disabled", !0), t.loading.show(!0);
					var e = AV.Object.extend("Comment"),
						n = new e;
					if (h.url = decodeURI(x), h.insertedAt = new Date, R.rid) {
						var r = R.pid || R.rid;
						n.set("rid", R.rid), n.set("pid", r), h.comment = '<a class="at" href="#' + r + '">' + R.at + "</a>" + h.comment
					}
					for (var i in h) if (h.hasOwnProperty(i)) {
						var o = h[i];
						n.set(i, o)
					}
					n.setACL(U()), n.save().then(function(e) {
						"匿名" != h.nick && b && b.setItem("ValineCache", JSON.stringify({
							nick: h.nick,
							link: h.link,
							mail: h.mail
						}));
						var n = u.find(t.el, ".vnum"),
							r = 1;
						try {
							if (R.rid) {
								var i = u.find(t.el, '.vquote[rid="' + R.rid + '"]') || C(R.rid);
								L(e, i, !0)
							} else n ? (r = Number(n.innerText) + 1, n.innerText = r) : u.find(t.el, ".vcount").innerHTML = '<span class="num">1</span> ' + t.locale.tips.comments, L(e, u.find(t.el, ".vlist"));
							h.mail && N({
								username: h.nick,
								mail: h.mail
							}), R.at && R.rmail && t.notify && F({
								username: R.at.replace("@", ""),
								mail: R.rmail
							}), u.removeAttr(I, "disabled"), t.loading.hide(), j()
						} catch (e) {
							t.ErrorHandler(e)
						}
					}).
					catch (function(e) {
						t.ErrorHandler(e)
					})
				},
				V = function e(n) {
					var r = Math.floor(10 * Math.random() + 1),
						i = Math.floor(10 * Math.random() + 1),
						o = Math.floor(10 * Math.random() + 1),
						a = ["+", "-", "x"],
						s = a[Math.floor(3 * Math.random())],
						l = a[Math.floor(3 * Math.random())],
						c = "" + r + s + i + l + o,
						d = c + " = <input class='vcode vinput' >";
					t.alert.show({
						type: 1,
						text: d,
						ctxt: t.locale.ctrl.cancel,
						otxt: t.locale.ctrl.ok,
						cb: function() {
							var r = +u.find(t.el, ".vcode").value;
							new Function("return " + c.replace(/x/g, "*"))() === r ? n && n() : t.alert.show({
								type: 1,
								text: "(T＿T)" + t.locale.tips.again,
								ctxt: t.locale.ctrl.cancel,
								otxt: t.locale.ctrl.
								try,
								cb: function() {
									e(n)
								}
							})
						}
					})
				},
				N = function(e) {
					var t = new AV.User;
					return t.setUsername(e.username), t.setPassword(e.mail), t.setEmail(e.mail), t.setACL(U()), t.signUp()
				},
				F = function e(n) {
					AV.User.requestPasswordReset(n.mail).then(function(e) {}).
					catch (function(r) {
						1 == r.code ? t.alert.show({
							type: 0,
							text: "ヾ(ｏ･ω･)ﾉ At太频繁啦，提醒功能暂时宕机。<br>" + r.error,
							ctxt: t.locale.ctrl.ok
						}) : N(n).then(function(t) {
							e(n)
						}).
						catch (function(e) {})
					})
				};
			u.on("click", I, P), u.on("keydown", document, function(e) {
				e = event || e;
				var n = e.keyCode || e.which || e.charCode;
				if (((e.ctrlKey || e.metaKey) && 13 === n && P(), 9 === n) && "veditor" == (document.activeElement.id || "")) {
					e.preventDefault();
					var r = u.find(t.el, ".veditor");
					E(r, "    ")
				}
			})
		};
		var k = {
			mail: function(e) {
				return {
					k: /[\w-\.]+@([\w-]+\.)+[a-z]{2,3}/.test(e),
					v: e
				}
			},
			link: function(e) {
				return e = e.length > 0 && (/^https?/.test(e) ? e : "http://" + e), {
					k: /^https?:\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:\/~\+#]*[\w\-\@?^=%&amp;\/~\+#])?/.test(e),
					v: e
				}
			}
		};
		e.exports = i, e.exports.
	default = i
	}, function(e, t, n) {
		"use strict";
		var r = {
			data: n(11),
			parse: function(e) {
				return String(e).replace(/:(.+?):/g, function(e, t) {
					return r.data[t] || e
				})
			}
		};
		e.exports = r
	}, function(e, t, n) {
		"use strict";

		function r(e) {
			var t = this,
				n = {
					Trident: e.indexOf("Trident") > -1 || e.indexOf("NET CLR") > -1,
					Presto: e.indexOf("Presto") > -1,
					WebKit: e.indexOf("AppleWebKit") > -1,
					Gecko: e.indexOf("Gecko/") > -1,
					Safari: e.indexOf("Safari") > -1,
					Chrome: e.indexOf("Chrome") > -1 || e.indexOf("CriOS") > -1,
					IE: e.indexOf("MSIE") > -1 || e.indexOf("Trident") > -1,
					Edge: e.indexOf("Edge") > -1,
					Firefox: e.indexOf("Firefox") > -1 || e.indexOf("FxiOS") > -1,
					"Firefox Focus": e.indexOf("Focus") > -1,
					Chromium: e.indexOf("Chromium") > -1,
					Opera: e.indexOf("Opera") > -1 || e.indexOf("OPR") > -1,
					Vivaldi: e.indexOf("Vivaldi") > -1,
					Yandex: e.indexOf("YaBrowser") > -1,
					Kindle: e.indexOf("Kindle") > -1 || e.indexOf("Silk/") > -1,
					360: e.indexOf("360EE") > -1 || e.indexOf("360SE") > -1,
					UC: e.indexOf("UC") > -1 || e.indexOf(" UBrowser") > -1,
					QQBrowser: e.indexOf("QQBrowser") > -1,
					QQ: e.indexOf("QQ/") > -1,
					Baidu: e.indexOf("Baidu") > -1 || e.indexOf("BIDUBrowser") > -1,
					Maxthon: e.indexOf("Maxthon") > -1,
					Sogou: e.indexOf("MetaSr") > -1 || e.indexOf("Sogou") > -1,
					LBBROWSER: e.indexOf("LBBROWSER") > -1,
					"2345Explorer": e.indexOf("2345Explorer") > -1,
					TheWorld: e.indexOf("TheWorld") > -1,
					XiaoMi: e.indexOf("MiuiBrowser") > -1,
					Quark: e.indexOf("Quark") > -1,
					Qiyu: e.indexOf("Qiyu") > -1,
					Wechat: e.indexOf("MicroMessenger") > -1,
					Taobao: e.indexOf("AliApp(TB") > -1,
					Alipay: e.indexOf("AliApp(AP") > -1,
					Weibo: e.indexOf("Weibo") > -1,
					Douban: e.indexOf("com.douban.frodo") > -1,
					Suning: e.indexOf("SNEBUY-APP") > -1,
					iQiYi: e.indexOf("IqiyiApp") > -1,
					Windows: e.indexOf("Windows") > -1,
					Linux: e.indexOf("Linux") > -1 || e.indexOf("X11") > -1,
					"Mac OS": e.indexOf("Macintosh") > -1,
					Android: e.indexOf("Android") > -1 || e.indexOf("Adr") > -1,
					Ubuntu: e.indexOf("Ubuntu") > -1,
					FreeBSD: e.indexOf("FreeBSD") > -1,
					Debian: e.indexOf("Debian") > -1,
					"Windows Phone": e.indexOf("IEMobile") > -1 || e.indexOf("Windows Phone") > -1,
					BlackBerry: e.indexOf("BlackBerry") > -1 || e.indexOf("RIM") > -1,
					MeeGo: e.indexOf("MeeGo") > -1,
					Symbian: e.indexOf("Symbian") > -1,
					iOS: e.indexOf("like Mac OS X") > -1,
					"Chrome OS": e.indexOf("CrOS") > -1,
					WebOS: e.indexOf("hpwOS") > -1,
					Mobile: e.indexOf("Mobi") > -1 || e.indexOf("iPh") > -1 || e.indexOf("480") > -1,
					Tablet: e.indexOf("Tablet") > -1 || e.indexOf("Pad") > -1 || e.indexOf("Nexus 7") > -1
				};
			n.Mobile && (n.Mobile = !(e.indexOf("iPad") > -1));
			var r = {
				engine: ["WebKit", "Trident", "Gecko", "Presto"],
				browser: ["Safari", "Chrome", "Edge", "IE", "Firefox", "Firefox Focus", "Chromium", "Opera", "Vivaldi", "Yandex", "Kindle", "360", "UC", "QQBrowser", "QQ", "Baidu", "Maxthon", "Sogou", "LBBROWSER", "2345Explorer", "TheWorld", "XiaoMi", "Quark", "Qiyu", "Wechat", "Taobao", "Alipay", "Weibo", "Douban", "Suning", "iQiYi"],
				os: ["Windows", "Linux", "Mac OS", "Android", "Ubuntu", "FreeBSD", "Debian", "iOS", "Windows Phone", "BlackBerry", "MeeGo", "Symbian", "Chrome OS", "WebOS"],
				device: ["Mobile", "Tablet"]
			};
			t.device = "PC";
			for (var i in r) for (var o = 0; o < r[i].length; o++) {
				var a = r[i][o];
				n[a] && (t[i] = a)
			}
			var s = {
				Windows: function() {
					var t = e.replace(/^.*Windows NT ([\d.]+);.*$/, "$1");
					return {
						6.4: "10",
						6.3: "8.1",
						6.2: "8",
						6.1: "7",
						"6.0": "Vista",
						5.2: "XP",
						5.1: "XP",
						"5.0": "2000"
					}[t] || t
				},
				Android: function() {
					return e.replace(/^.*Android ([\d.]+);.*$/, "$1")
				},
				iOS: function() {
					return e.replace(/^.*OS ([\d_]+) like.*$/, "$1").replace(/_/g, ".")
				},
				Debian: function() {
					return e.replace(/^.*Debian\/([\d.]+).*$/, "$1")
				},
				"Windows Phone": function() {
					return e.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, "$2")
				},
				"Mac OS": function() {
					return e.replace(/^.*Mac OS X ([\d_]+).*$/, "$1").replace(/_/g, ".")
				},
				WebOS: function() {
					return e.replace(/^.*hpwOS\/([\d.]+);.*$/, "$1")
				}
			};
			t.osVersion = "", s[t.os] && (t.osVersion = s[t.os](), t.osVersion == e && (t.osVersion = ""));
			var l = {
				Safari: function() {
					return e.replace(/^.*Version\/([\d.]+).*$/, "$1")
				},
				Chrome: function() {
					return e.replace(/^.*Chrome\/([\d.]+).*$/, "$1").replace(/^.*CriOS\/([\d.]+).*$/, "$1")
				},
				IE: function() {
					return e.replace(/^.*MSIE ([\d.]+).*$/, "$1").replace(/^.*rv:([\d.]+).*$/, "$1")
				},
				Edge: function() {
					return e.replace(/^.*Edge\/([\d.]+).*$/, "$1")
				},
				Firefox: function() {
					return e.replace(/^.*Firefox\/([\d.]+).*$/, "$1").replace(/^.*FxiOS\/([\d.]+).*$/, "$1")
				},
				"Firefox Focus": function() {
					return e.replace(/^.*Focus\/([\d.]+).*$/, "$1")
				},
				Chromium: function() {
					return e.replace(/^.*Chromium\/([\d.]+).*$/, "$1")
				},
				Opera: function() {
					return e.replace(/^.*Opera\/([\d.]+).*$/, "$1").replace(/^.*OPR\/([\d.]+).*$/, "$1")
				},
				Vivaldi: function() {
					return e.replace(/^.*Vivaldi\/([\d.]+).*$/, "$1")
				},
				Yandex: function() {
					return e.replace(/^.*YaBrowser\/([\d.]+).*$/, "$1")
				},
				Kindle: function() {
					return e.replace(/^.*Version\/([\d.]+).*$/, "$1")
				},
				Maxthon: function() {
					return e.replace(/^.*Maxthon\/([\d.]+).*$/, "$1")
				},
				QQBrowser: function() {
					return e.replace(/^.*QQBrowser\/([\d.]+).*$/, "$1")
				},
				QQ: function() {
					return e.replace(/^.*QQ\/([\d.]+).*$/, "$1")
				},
				Baidu: function() {
					return e.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, "$1")
				},
				UC: function() {
					return e.replace(/^.*UC?Browser\/([\d.]+).*$/, "$1")
				},
				Sogou: function() {
					return e.replace(/^.*SE ([\d.X]+).*$/, "$1").replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, "$1")
				},
				"2345Explorer": function() {
					return e.replace(/^.*2345Explorer\/([\d.]+).*$/, "$1")
				},
				TheWorld: function() {
					return e.replace(/^.*TheWorld ([\d.]+).*$/, "$1")
				},
				XiaoMi: function() {
					return e.replace(/^.*MiuiBrowser\/([\d.]+).*$/, "$1")
				},
				Quark: function() {
					return e.replace(/^.*Quark\/([\d.]+).*$/, "$1")
				},
				Qiyu: function() {
					return e.replace(/^.*Qiyu\/([\d.]+).*$/, "$1")
				},
				Wechat: function() {
					return e.replace(/^.*MicroMessenger\/([\d.]+).*$/, "$1")
				},
				Taobao: function() {
					return e.replace(/^.*AliApp\(TB\/([\d.]+).*$/, "$1")
				},
				Alipay: function() {
					return e.replace(/^.*AliApp\(AP\/([\d.]+).*$/, "$1")
				},
				Weibo: function() {
					return e.replace(/^.*weibo__([\d.]+).*$/, "$1")
				},
				Douban: function() {
					return e.replace(/^.*com.douban.frodo\/([\d.]+).*$/, "$1")
				},
				Suning: function() {
					return e.replace(/^.*SNEBUY-APP([\d.]+).*$/, "$1")
				},
				iQiYi: function() {
					return e.replace(/^.*IqiyiVersion\/([\d.]+).*$/, "$1")
				}
			};
			t.version = "", l[t.browser] && (t.version = l[t.browser](), t.version == e && (t.version = "")), "Edge" == t.browser ? t.engine = "EdgeHTML" : "Chrome" == t.browser && parseInt(t.version) > 27 ? t.engine = "Blink" : "Opera" == t.browser && parseInt(t.version) > 12 ? t.engine = "Blink" : "Yandex" == t.browser ? t.engine = "Blink" : void 0 == t.browser && (t.browser = "Unknow App")
		}
		function i(e) {
			return new r(e)
		}
		e.exports = i
	}, function(e, t, n) {
		"use strict";
		var r = {},
			i = {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#39;",
				"`": "&#x60;",
				"\\": "&#x5c;"
			};
		for (var o in i) r[i[o]] = o;
		var a = /[&<>"'`\\]/g,
			s = RegExp(a.source),
			l = /&(?:amp|lt|gt|quot|#39|#x60|#x5c);/g,
			c = RegExp(l.source),
			d = {
				on: function(e, t, n, r) {
					e = e.split(" ");
					for (var i = 0, o = e.length; i < o; i++) d.off(e[i], t, n, r), t.addEventListener ? t.addEventListener(e[i], n, r || !1) : t.attachEvent ? t.attachEvent("on" + e[i], n) : t["on" + e[i]] = n
				},
				off: function(e, t, n, r) {
					t.removeEventListener ? t.removeEventListener(e, n, r || !1) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = null
				},
				escape: function(e) {
					return e && s.test(e) ? e.replace(a, function(e) {
						return i[e]
					}) : e
				},
				unescape: function(e) {
					return e && c.test(e) ? e.replace(l, function(e) {
						return r[e]
					}) : e
				},
				create: function(e, t, n) {
					var r = document.createElement(e);
					return d.attr(r, t, n), r
				},
				find: function(e, t) {
					return e.querySelector(t)
				},
				findAll: function(e, t) {
					return e.querySelectorAll(t)
				},
				attr: function(e, t, n) {
					if (void 0 === e.getAttribute) return d.prop(e, t, n);
					if (void 0 !== n) null === n ? d.removeAttr(e, t) : e.setAttribute(t, n);
					else {
						if ("[object Object]" !== {}.toString.call(t)) return e.getAttribute(t);
						d.each(t, function(t, n) {
							e.setAttribute(t, n)
						})
					}
				},
				prop: function(e, t, n) {
					return void 0 !== n ? e[t] = n : "[object Object]" !== {}.toString.call(t) ? e[t] : void d.each(t, function(t, n) {
						e[t] = n
					})
				},
				removeAttr: function(e, t) {
					var n = void 0,
						r = 0,
						i = t && t.match(/[^\x20\t\r\n\f\*\/\\]+/g);
					if (i && 1 === e.nodeType) for (; n = i[r++];) e.removeAttribute(n);
					return e
				},
				clearAttr: function(e) {
					var t = e.attributes,
						n = ["align", "alt", "class", "disabled", "href", "id", "target", "title", "type", "style", "src"];
					return d.each(t, function(t, r) {
						var i = r.name;
						if ("style" === i) {
							var o = r.value;
							d.each(o.split(";"), function(t, n) {
								if (n.indexOf("color") > -1) return d.attr(e, "style", n), !1;
								d.removeAttr(e, "style")
							})
						}
						n.indexOf(i) > -1 || d.removeAttr(e, i)
					}), e
				},
				remove: function(e, t) {
					try {
						t.parentNode && t.parentNode.removeChild(t)
					} catch (e) {}
				},
				each: function(e, t) {
					var n = 0,
						r = e.length,
						i = ["[object Array]", "[object NodeList]"],
						o = {}.toString.call(e);
					if (i.indexOf(o) > -1) for (; n < r && !1 !== (t && t.call(e[n], n, e[n])); n++);
					else for (n in e) if (e.hasOwnProperty(n) && !1 === (t && t.call(e[n], n, e[n]))) break;
					return e
				}
			};
		e.exports = d
	}, function(e, t, n) {
		"use strict";
		var r = function(e, t) {
				if (e) try {
					var n = e.getTime(),
						r = (new Date).getTime(),
						o = r - n,
						a = Math.floor(o / 864e5);
					if (0 === a) {
						var s = o % 864e5,
							l = Math.floor(s / 36e5);
						if (0 === l) {
							var c = s % 36e5,
								d = Math.floor(c / 6e4);
							if (0 === d) {
								var u = c % 6e4;
								return Math.round(u / 1e3) + " " + t.timeago.seconds
							}
							return d + " " + t.timeago.minutes
						}
						return l + " " + t.timeago.hours
					}
					return a < 0 ? t.timeago.now : a < 8 ? a + " " + t.timeago.days : i(e)
				} catch (e) {}
			},
			i = function(e) {
				var t = o(e.getDate(), 2),
					n = o(e.getMonth() + 1, 2);
				return o(e.getFullYear(), 2) + "-" + n + "-" + t
			},
			o = function(e, t) {
				for (var n = e.toString(); n.length < t;) n = "0" + n;
				return n
			};
		e.exports = r
	}, function(e, t, n) {
		var r;
		!
		function(i) {
			"use strict";

			function o(e, t) {
				var n = (65535 & e) + (65535 & t);
				return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
			}
			function a(e, t) {
				return e << t | e >>> 32 - t
			}
			function s(e, t, n, r, i, s) {
				return o(a(o(o(t, e), o(r, s)), i), n)
			}
			function l(e, t, n, r, i, o, a) {
				return s(t & n | ~t & r, e, t, i, o, a)
			}
			function c(e, t, n, r, i, o, a) {
				return s(t & r | n & ~r, e, t, i, o, a)
			}
			function d(e, t, n, r, i, o, a) {
				return s(t ^ n ^ r, e, t, i, o, a)
			}
			function u(e, t, n, r, i, o, a) {
				return s(n ^ (t | ~r), e, t, i, o, a)
			}
			function p(e, t) {
				e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
				var n, r, i, a, s, p = 1732584193,
					f = -271733879,
					h = -1732584194,
					v = 271733878;
				for (n = 0; n < e.length; n += 16) r = p, i = f, a = h, s = v, p = l(p, f, h, v, e[n], 7, -680876936), v = l(v, p, f, h, e[n + 1], 12, -389564586), h = l(h, v, p, f, e[n + 2], 17, 606105819), f = l(f, h, v, p, e[n + 3], 22, -1044525330), p = l(p, f, h, v, e[n + 4], 7, -176418897), v = l(v, p, f, h, e[n + 5], 12, 1200080426), h = l(h, v, p, f, e[n + 6], 17, -1473231341), f = l(f, h, v, p, e[n + 7], 22, -45705983), p = l(p, f, h, v, e[n + 8], 7, 1770035416), v = l(v, p, f, h, e[n + 9], 12, -1958414417), h = l(h, v, p, f, e[n + 10], 17, -42063), f = l(f, h, v, p, e[n + 11], 22, -1990404162), p = l(p, f, h, v, e[n + 12], 7, 1804603682), v = l(v, p, f, h, e[n + 13], 12, -40341101), h = l(h, v, p, f, e[n + 14], 17, -1502002290), f = l(f, h, v, p, e[n + 15], 22, 1236535329), p = c(p, f, h, v, e[n + 1], 5, -165796510), v = c(v, p, f, h, e[n + 6], 9, -1069501632), h = c(h, v, p, f, e[n + 11], 14, 643717713), f = c(f, h, v, p, e[n], 20, -373897302), p = c(p, f, h, v, e[n + 5], 5, -701558691), v = c(v, p, f, h, e[n + 10], 9, 38016083), h = c(h, v, p, f, e[n + 15], 14, -660478335), f = c(f, h, v, p, e[n + 4], 20, -405537848), p = c(p, f, h, v, e[n + 9], 5, 568446438), v = c(v, p, f, h, e[n + 14], 9, -1019803690), h = c(h, v, p, f, e[n + 3], 14, -187363961), f = c(f, h, v, p, e[n + 8], 20, 1163531501), p = c(p, f, h, v, e[n + 13], 5, -1444681467), v = c(v, p, f, h, e[n + 2], 9, -51403784), h = c(h, v, p, f, e[n + 7], 14, 1735328473), f = c(f, h, v, p, e[n + 12], 20, -1926607734), p = d(p, f, h, v, e[n + 5], 4, -378558), v = d(v, p, f, h, e[n + 8], 11, -2022574463), h = d(h, v, p, f, e[n + 11], 16, 1839030562), f = d(f, h, v, p, e[n + 14], 23, -35309556), p = d(p, f, h, v, e[n + 1], 4, -1530992060), v = d(v, p, f, h, e[n + 4], 11, 1272893353), h = d(h, v, p, f, e[n + 7], 16, -155497632), f = d(f, h, v, p, e[n + 10], 23, -1094730640), p = d(p, f, h, v, e[n + 13], 4, 681279174), v = d(v, p, f, h, e[n], 11, -358537222), h = d(h, v, p, f, e[n + 3], 16, -722521979), f = d(f, h, v, p, e[n + 6], 23, 76029189), p = d(p, f, h, v, e[n + 9], 4, -640364487), v = d(v, p, f, h, e[n + 12], 11, -421815835), h = d(h, v, p, f, e[n + 15], 16, 530742520), f = d(f, h, v, p, e[n + 2], 23, -995338651), p = u(p, f, h, v, e[n], 6, -198630844), v = u(v, p, f, h, e[n + 7], 10, 1126891415), h = u(h, v, p, f, e[n + 14], 15, -1416354905), f = u(f, h, v, p, e[n + 5], 21, -57434055), p = u(p, f, h, v, e[n + 12], 6, 1700485571), v = u(v, p, f, h, e[n + 3], 10, -1894986606), h = u(h, v, p, f, e[n + 10], 15, -1051523), f = u(f, h, v, p, e[n + 1], 21, -2054922799), p = u(p, f, h, v, e[n + 8], 6, 1873313359), v = u(v, p, f, h, e[n + 15], 10, -30611744), h = u(h, v, p, f, e[n + 6], 15, -1560198380), f = u(f, h, v, p, e[n + 13], 21, 1309151649), p = u(p, f, h, v, e[n + 4], 6, -145523070), v = u(v, p, f, h, e[n + 11], 10, -1120210379), h = u(h, v, p, f, e[n + 2], 15, 718787259), f = u(f, h, v, p, e[n + 9], 21, -343485551), p = o(p, r), f = o(f, i), h = o(h, a), v = o(v, s);
				return [p, f, h, v]
			}
			function f(e) {
				var t, n = "",
					r = 32 * e.length;
				for (t = 0; t < r; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
				return n
			}
			function h(e) {
				var t, n = [];
				for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
				var r = 8 * e.length;
				for (t = 0; t < r; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
				return n
			}
			function v(e) {
				return f(p(h(e), 8 * e.length))
			}
			function g(e, t) {
				var n, r, i = h(e),
					o = [],
					a = [];
				for (o[15] = a[15] = void 0, i.length > 16 && (i = p(i, 8 * e.length)), n = 0; n < 16; n += 1) o[n] = 909522486 ^ i[n], a[n] = 1549556828 ^ i[n];
				return r = p(o.concat(h(t)), 512 + 8 * t.length), f(p(a.concat(r), 640))
			}
			function m(e) {
				var t, n, r = "0123456789abcdef",
					i = "";
				for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), i += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
				return i
			}
			function b(e) {
				return unescape(encodeURIComponent(e))
			}
			function x(e) {
				return v(b(e))
			}
			function y(e) {
				return m(x(e))
			}
			function w(e, t) {
				return g(b(e), b(t))
			}
			function k(e, t) {
				return m(w(e, t))
			}
			function _(e, t, n) {
				return t ? n ? w(t, e) : k(t, e) : n ? x(e) : y(e)
			}
			void 0 !== (r = function() {
				return _
			}.call(t, n, t, e)) && (e.exports = r)
		}()
	}, function(e, t, n) {
		!
		function(t, n) {
			e.exports = n()
		}(0, function() {
			"use strict";

			function e(e) {
				return '<span style="color: slategray">' + e + "</span>"
			}
			var t = function(e, t) {
					return t = {
						exports: {}
					}, e(t, t.exports), t.exports
				}(function(e) {
					var t = e.exports = function() {
							return new RegExp("(?:" + t.line().source + ")|(?:" + t.block().source + ")", "gm")
						};
					t.line = function() {
						return /(?:^|\s)\/\/(.+?)$/gm
					}, t.block = function() {
						return /\/\*([\S\s]*?)\*\//gm
					}
				}),
				n = ["23AC69", "91C132", "F19726", "E8552D", "1AAB8E", "E1147F", "2980C1", "1BA1E6", "9FA0A0", "F19726", "E30B20", "E30B20", "A3338B"];
			return function(r, i) {
				void 0 === i && (i = {});
				var o = i.colors;
				void 0 === o && (o = n);
				var a = 0,
					s = {},
					l = /[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/,
					c = /</,
					d = new RegExp("(" + l.source + "|" + c.source + ")|(" + t().source + ")", "gmi");
				return r.replace(d, function(t, n, r) {
					if (r) return e(r);
					if ("<" === n) return "&lt;";
					var i;
					s[n] ? i = s[n] : (i = o[a], s[n] = i);
					var l = '<span style="color: #' + i + '">' + n + "</span>";
					return a = ++a % o.length, l
				})
			}
		})
	}, function(e, t, n) {
		(function(t) {
			!
			function(t) {
				"use strict";

				function n(e) {
					this.tokens = [], this.tokens.links = {}, this.options = e || h.defaults, this.rules = v.normal, this.options.pedantic ? this.rules = v.pedantic : this.options.gfm && (this.options.tables ? this.rules = v.tables : this.rules = v.gfm)
				}
				function r(e, t) {
					if (this.options = t || h.defaults, this.links = e, this.rules = g.normal, this.renderer = this.options.renderer || new i, this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
					this.options.pedantic ? this.rules = g.pedantic : this.options.gfm && (this.options.breaks ? this.rules = g.breaks : this.rules = g.gfm)
				}
				function i(e) {
					this.options = e || h.defaults
				}
				function o() {}
				function a(e) {
					this.tokens = [], this.token = null, this.options = e || h.defaults, this.options.renderer = this.options.renderer || new i, this.renderer = this.options.renderer, this.renderer.options = this.options
				}
				function s(e, t) {
					return e.replace(t ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
				}
				function l(e) {
					return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, function(e, t) {
						return t = t.toLowerCase(), "colon" === t ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""
					})
				}
				function c(e, t) {
					return e = e.sour