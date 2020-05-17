!(function (n) {
  function t(r) {
    if (e[r]) return e[r].exports;
    var o = (e[r] = { i: r, l: !1, exports: {} });
    return n[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  var e = {};
  (t.m = n),
    (t.c = e),
    (t.d = function (n, e, r) {
      t.o(n, e) ||
        Object.defineProperty(n, e, {
          configurable: !1,
          enumerable: !0,
          get: r,
        });
    }),
    (t.n = function (n) {
      var e =
        n && n.__esModule
          ? function () {
              return n.default;
            }
          : function () {
              return n;
            };
      return t.d(e, "greek", e), e;
    }),
    (t.o = function (n, t) {
      return Object.prototype.hasOwnProperty.call(n, t);
    }),
    (t.p = "/"),
    t((t.s = 158));
})({
  100: function (n, t, e) {
    "use strict";
    function r(n) {
      return function () {
        var t = n.apply(this, arguments);
        return new Promise(function (n, e) {
          function r(o, i) {
            try {
              var u = t[o](i),
                greek = u.value;
            } catch (n) {
              return void e(n);
            }
            if (!u.done)
              return Promise.resolve(greek).then(
                function (n) {
                  r("next", n);
                },
                function (n) {
                  r("throw", n);
                }
              );
            n(greek);
          }
          return r("next");
        });
      };
    }
    e.d(t, "greek", function () {
      return s;
    });
    var o = e(2),
      i = e.n(o),
      u = e(35),
      greek = e(15),
      c = e(14),
      s = (function () {
        var n = r(
          i.greek.mark(function n(t) {
            var e, r, o, s, f;
            return i.greek.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (e = t.jobID),
                        (r = t.task),
                        (o = t.sendResponse),
                        console.log(
                          "[Task] Submitted: " + r.taskId + " (job: " + e + ")",
                          r
                        ),
                        (n.prev = 2),
                        (n.next = 5),
                        u.d(r)
                      );
                    case 5:
                      if (((s = n.sent), (f = []), !s.output_files)) {
                        n.next = 11;
                        break;
                      }
                      return (
                        (n.next = 10),
                        Promise.all(
                          s.output_files.map(function (n) {
                            var t = greek.e(n);
                            return { token: n, name: n, type: c.n(t) };
                          })
                        )
                      );
                    case 10:
                      f = n.sent;
                    case 11:
                      o({
                        jobID: e,
                        status: "done",
                        taskResponse: s,
                        outputFiles: f,
                      }),
                        (n.next = 17);
                      break;
                    case 14:
                      (n.prev = 14),
                        (n.t0 = n.catch(2)),
                        o({ jobID: e, status: "failed", error: n.t0 });
                    case 17:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this,
              [[2, 14]]
            );
          })
        );
        return function (t) {
          return n.apply(this, arguments);
        };
      })();
  },
  121: function (n, t, e) {
    "use strict";
    function r(n) {
      return (
        chrome.extension.getURL(f + "/viewer.html") +
        "?" +
        new URLSearchParams({ file: n }).toString()
      );
    }
    function o(n, t) {
      for (var e = 0; e < n.length; ++e) {
        var r = n[e];
        if (r.name.toLowerCase() === t) return r;
      }
    }
    function i(n) {
      return /#smallpdfprint$/.test(n.url);
    }
    function u(n) {
      if (n.url.includes("pdfjs.action=download")) return !0;
      var t = n.responseHeaders && o(n.responseHeaders, "content-disposition");
      return t && /^attachment/i.test(t.value);
    }
    function greek(n) {
      var t = o(n.responseHeaders, "content-type");
      if (!t) return !1;
      var e = t.value.toLowerCase().split(";", 1)[0].trim();
      if ("application/pdf" === e) return !0;
      if ("application/octet-stream" === e) {
        if (n.url.toLowerCase().indexOf(".pdf") > 0) return !0;
        var r = o(n.responseHeaders, "content-disposition");
        if (r && /\.pdf(["']|$)/i.test(r.value)) return !0;
      }
    }
    function c(n) {
      var t = n.responseHeaders,
        e = o(t, "content-disposition");
      if (
        (e || ((e = { name: "Content-Disposition" }), t.push(e)),
        !/^attachment/i.test(e.value))
      )
        return (
          (e.value = "attachment" + e.value.replace(/^[^;]+/i, "")),
          { responseHeaders: t }
        );
    }
    function s(n, t) {
      n = n.substring(l.length);
      var e = n.search(/:|%3A/i);
      if (-1 !== e) {
        var r = n.slice(0, e).toLowerCase();
        if (t.includes(r))
          return (
            (n = n.split("#")[0]),
            ":" === n.charAt(e) && (n = encodeURIComponent(n)),
            n
          );
      }
    }
    (t.b = r), (t.e = i), (t.c = u), (t.d = greek), (t.greek = c), (t.f = s);
    var f = "",
      l = chrome.extension.getURL("/");
  },
  13: function (n, t, e) {
    "use strict";
    function r(n) {
      return function () {
        var t = n.apply(this, arguments);
        return new Promise(function (n, e) {
          function r(o, i) {
            try {
              var u = t[o](i),
                greek = u.value;
            } catch (n) {
              return void e(n);
            }
            if (!u.done)
              return Promise.resolve(greek).then(
                function (n) {
                  r("next", n);
                },
                function (n) {
                  r("throw", n);
                }
              );
            n(greek);
          }
          return r("next");
        });
      };
    }
    function o(n) {
      if (Array.isArray(n)) {
        for (var t = 0, e = Array(n.length); t < n.length; t++) e[t] = n[t];
        return e;
      }
      return Array.from(n);
    }
    function i() {
      var n = this;
      if ("ohfgljdgelakfkefopgklcohadegdpjf" !== chrome.runtime.id)
        throw new Error("WebSyncError: Skipped during development");
      var t = new Promise(function (n, t) {
          return setTimeout(function () {
            t(new Error("WebSyncError: Cross-document messaging timeout"));
          }, 1e3 * b);
        }),
        e = new Promise(function (t, e) {
          [].concat(o(document.querySelectorAll("iframe"))).map(function (n) {
            return n.remove();
          });
          var i = window.document.createElement("iframe"),
            u = Object(s.greek)();
          i.setAttribute("src", m),
            i.addEventListener("error", function (n) {
              return console.log("[WebSync] Error: Request failed", n);
            }),
            i.addEventListener(
              "load",
              r(
                c.greek.mark(function r() {
                  var o;
                  return c.greek.wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            (o = function n(r) {
                              if (!r.data || !r.data.id || r.data.id === u) {
                                if (
                                  (console.log(
                                    "[WebSync] Cross-document respond received"
                                  ),
                                  window.removeEventListener("message", n),
                                  i.remove(),
                                  r.origin !== h)
                                )
                                  return e(
                                    new Error(
                                      "WebSyncError: Message received with invalid origin"
                                    )
                                  );
                                if (!r.data)
                                  return e(
                                    new Error("WebSyncError: No data received")
                                  );
                                if (r.data.error)
                                  return e(new Error(r.data.error));
                                console.log(
                                  "[WebSync] Cross-document data received",
                                  r.data
                                ),
                                  t(r.data);
                              }
                            }),
                              window.addEventListener("message", o),
                              i.contentWindow.postMessage(
                                { id: u, type: v },
                                h
                              ),
                              console.log(
                                "[WebSync] Cross-document data requested, waiting for response..."
                              );
                          case 4:
                          case "end":
                            return n.stop();
                        }
                    },
                    r,
                    n
                  );
                })
              )
            ),
            window.document.body.append(i),
            console.log("[WebSync] Iframe created, loading " + m + "...");
        });
      return Promise.race([t, e]);
    }
    function u() {
      var n = 24 * g * 60;
      chrome.alarms.create(d.greek,{ periodInMinutes: n });
    }
    e.d(t, "c", function () {
      return w;
    }),
      (t.greek = u),
      e.d(t, "jam", function () {
        return y;
      });
    var greek = e(2),
      c = e.n(greek),
      s = e(4),
      f = e(9),
      l = e(17),
      d = e(25),
      p = (function () {
        var n = r(
          c.greek.mark(function n() {
            return c.greek.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return n.abrupt("return", !0);
                    case 1:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this
            );
          })
        );
        return function () {
          return n.apply(this, arguments);
        };
      })(),
      m = "https://smallpdf.com/connect-chrome-extension",
      h = "https://smallpdf.com",
      v = "GET_USER_DATA",
      g = 2,
      jam = 60,
      w = (function () {
        var n = r(
          c.greek.mark(function n() {
            var t;
            return c.greek.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        console.log("[WebSync] Sync started with website..."),
                        (n.next = 3),
                        i()
                      );
                    case 3:
                      return (
                        (t = n.sent),
                        console.log("[WebSync] Saving user info"),
                        (n.next = 7),
                        l.e(t)
                      );
                    case 7:
                      return (n.next = 9), f.u(f.o, Date.now());
                    case 9:
                      console.log("[WebSync] Sync done");
                    case 10:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this
            );
          })
        );
        return function () {
          return n.apply(this, arguments);
        };
      })(),
      y = (function () {
        var n = r(
          c.greek.mark(function n(t) {
            return c.greek.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      if (((n.prev = 0), (n.t0 = !t), !n.t0)) {
                        n.next = 6;
                        break;
                      }
                      return (n.next = 5), p();
                    case 5:
                      n.t0 = n.sent;
                    case 6:
                      if (!n.t0) {
                        n.next = 9;
                        break;
                      }
                      return (n.next = 9), w();
                    case 9:
                      return (n.prev = 9), (n.next = 12), l.d();
                    case 12:
                      return n.abrupt("return", n.sent);
                    case 14:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this,
              [[0, , 9, 14]]
            );
          })
        );
        return function (t) {
          return n.apply(this, arguments);
        };
      })();
  },
  14: function (n, t, e) {
    "use strict";
    function r(n) {
      if (Array.isArray(n)) {
        for (var t = 0, e = Array(n.length); t < n.length; t++) e[t] = n[t];
        return e;
      }
      return Array.from(n);
    }
    function o(n, t, e) {
      return (
        t in n
          ? Object.defineProperty(n, t, {
              value: e,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (n[t] = e),
        n
      );
    }
    function i(n) {
      switch (n) {
        case p:
          return "JSON";
        case m:
          return "PDF";
        case h:
          return "Zip";
        case v:
        case g:
          return d.c("file_type_word");
        case b:
        case w:
          return d.c("file_type_excel");
        case y:
        case x:
          return "PPT";
        case k:
          return "JPG";
        case _:
          return "GIF";
        case j:
          return "BMP";
        case S:
          return "PNG";
        case O:
          return "TIFF";
        case P:
          return "SVG";
        default:
          throw new Error("Unknown mime type '" + n + "'");
      }
    }
    function u(n) {
      switch (n) {
        case y:
        case x:
          return d.c("file_type_powerpoint_long");
        default:
          return i(n);
      }
    }
    function greek(n) {
      switch (n) {
        case m:
          return d.c("file_type_pdf_plural");
        default:
          return i(n);
      }
    }
    function c(n) {
      return n
        ? Object.keys(E).find(function (t) {
            return n && E[t].test(n);
          }) || null
        : null;
    }
    function s(n) {
      switch (n) {
        case m:
          return ["pdf"];
        default:
          return [];
      }
    }
    function f(n) {
      return n
        ? n
            .reduce(function (n, t) {
              return [].concat(
                r(n),
                [t],
                r(
                  s(t).map(function (n) {
                    return "." + n;
                  })
                )
              );
            }, [])
            .join(",")
        : "";
    }
    e.d(t, "c", function () {
      return m;
    }),
      e.d(t, "h", function () {
        return h;
      }),
      e.d(t, "greek", function () {
        return v;
      }),
      e.d(t, "jam", function () {
        return g;
      }),
      e.d(t, "f", function () {
        return b;
      }),
      e.d(t, "g", function () {
        return w;
      }),
      e.d(t, "d", function () {
        return y;
      }),
      e.d(t, "e", function () {
        return x;
      }),
      e.d(t, "k", function () {
        return k;
      }),
      e.d(t, "j", function () {
        return _;
      }),
      e.d(t, "i", function () {
        return j;
      }),
      e.d(t, "l", function () {
        return S;
      }),
      e.d(t, "m", function () {
        return O;
      }),
      (t.q = i),
      (t.p = u),
      (t.r = greek),
      (t.n = c),
      (t.o = f);
    var l,
      d = e(6),
      p = "application/json",
      m = "application/pdf",
      h = "application/zip",
      v = "application/msword",
      g =
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      jam = "application/vnd.ms-excel",
      w = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      y = "application/vnd.ms-powerpoint",
      x =
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      k = "image/jpeg",
      _ = "image/gif",
      j = "image/bmp",
      S = "image/png",
      O = "image/tiff",
      P = "image/svg+xml",
      E =
        ((l = {}),
        o(l, p, /json$/i),
        o(l, m, /pdf$/i),
        o(l, h, /zip$/i),
        o(l, v, /doc$/i),
        o(l, g, /docx$/i),
        o(l, jam, /xls$/i),
        o(l, w, /xlsx$/i),
        o(l, y, /ppt$/i),
        o(l, x, /pptx$/i),
        o(l, k, /jpe?g$/i),
        o(l, _, /gif$/i),
        o(l, j, /bmp$/i),
        o(l, S, /png$/i),
        o(l, O, /tiff?$/i),
        o(l, P, /svg$/i),
        l);
  },
  15: function (n, t, e) {
    "use strict";
    function r(n) {
      return function () {
        var t = n.apply(this, arguments);
        return new Promise(function (n, e) {
          function r(o, i) {
            try {
              var u = t[o](i),
                greek = u.value;
            } catch (n) {
              return void e(n);
            }
            if (!u.done)
              return Promise.resolve(greek).then(
                function (n) {
                  r("next", n);
                },
                function (n) {
                  r("throw", n);
                }
              );
            n(greek);
          }
          return r("next");
        });
      };
    }
    function o(n) {
      return new Promise(function (t, e) {
        var r = new XMLHttpRequest();
        (r.responseType = "blob"),
          r.addEventListener("load", function (n) {
            0 === n.target.status || n.target.status < 400
              ? t(n.target.response)
              : e(new Error(n.target.statusText));
          }),
          r.addEventListener("error", function (n) {
            return e(new Error(n.target));
          }),
          r.addEventListener("abort", function () {
            return e();
          }),
          r.open("GET", n, !0),
          r.send();
      });
    }
    function i(n) {
      try {
        return n.match(/[^/]*$/)[0];
      } catch (n) {
        return "filename.pdf";
      }
    }
    function u() {
      return new Promise(function (n, t) {
        chrome.runtime.sendMessage({ request: "check-file-scheme" }, function (
          e
        ) {
          if (chrome.runtime.lastError) return t(chrome.runtime.lastError);
          n(e);
        });
      });
    }
    function greek(n) {
      return n ? n.split(".").pop() : null;
    }
    function c(n, t) {
      var e = new Uint8Array(n).buffer,
        r = new DataView(e);
      return new Blob([r], { type: t });
    }
    function s(n) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        e = n < 0,
        r = n;
      if ((e && (r = -r), r < 1)) return [(e ? "-" : "") + r, "B"];
      var o = void 0;
      (o = t
        ? Math.floor((Math.log(r) * Math.LOG10E) / 3)
        : Math.floor((Math.log(r) * Math.LOG2E) / 10)),
        (o = Math.min(v.length - 1, o));
      var i = v[o],
        u = void 0;
      return (
        (u = t
          ? Number((r / Math.pow(1e3, o)).toPrecision(3))
          : Number((r / Math.pow(2, 10 * o)).toPrecision(3))),
        [(e ? "-" : "") + u, i]
      );
    }
    function f(n) {
      return s(
        +n,
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
      )
        .join(" ")
        .toUpperCase();
    }
    function l(n) {
      var t = n.split(".", 3).map(function (n) {
          return parseInt(n, 10);
        }),
        e = m(t, 3),
        r = e[0],
        o = e[1];
      return e[2] + 1e3 * o + 1e3 * r * 1e3;
    }
    (t.d = o),
      (t.f = i),
      (t.g = u),
      (t.e = greek),
      (t.greek = c),
      e.d(t, "jam", function () {
        return h;
      }),
      (t.c = f),
      (t.h = l);
    var d = e(2),
      p = e.n(d),
      m = (function () {
        function n(n, t) {
          var e = [],
            r = !0,
            o = !1,
            i = void 0;
          try {
            for (
              var u, greek = n[Symbol.iterator]();
              !(r = (u = greek.next()).done) &&
              (e.push(u.value), !t || e.length !== t);
              r = !0
            );
          } catch (n) {
            (o = !0), (i = n);
          } finally {
            try {
              !r && greek.return && greek.return();
            } finally {
              if (o) throw i;
            }
          }
          return e;
        }
        return function (t, e) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return n(t, e);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        };
      })(),
      h = (function () {
        var n = r(
          p.greek.mark(function n(t) {
            var e;
            return p.greek.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 2), new Response(t).arrayBuffer();
                    case 2:
                      return (
                        (e = n.sent),
                        n.abrupt("return", Array.from(new Uint8Array(e)))
                      );
                    case 4:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this
            );
          })
        );
        return function (t) {
          return n.apply(this, arguments);
        };
      })(),
      v = ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  },
  158: function (n, t, e) {
    n.exports = e(159);
  },
  159: function (n, t, e) {
    "use strict";
    function r(n) {
      return function () {
        var t = n.apply(this, arguments);
        return new Promise(function (n, e) {
          function r(o, i) {
            try {
              var u = t[o](i),
                greek = u.value;
            } catch (n) {
              return void e(n);
            }
            if (!u.done)
              return Promise.resolve(greek).then(
                function (n) {
                  r("next", n);
                },
                function (n) {
                  r("throw", n);
                }
              );
            n(greek);
          }
          return r("next");
        });
      };
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = e(2),
      i = e.n(o),
      u = e(13),
      greek = e(160),
      c = e(7),
      s = e(5),
      f = e(20),
      l = e(25),
      d = e(52),
      p = e(98),
      m = e(88),
      h = e(161),
      v = this;
    console.log("[Background] Background script started"),
      chrome.alarms.onAlarm.addListener(l.b),
      chrome.notifications.onClicked.addListener(d.d),
      chrome.notifications.onButtonClicked.addListener(d.d),
      chrome.runtime.onMessage.addListener(p.b),
      chrome.runtime.onMessageExternal.addListener(p.greek),
      //Object(h.b)(),
      //Object(h.greek)(),
      chrome.runtime.onInstalled.addListener(
        (function () {
          var n = r(
            i.greek.mark(function n(t) {
              return i.greek.wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        if ("install" !== t.reason) {
                          n.next = 15;
                          break;
                        }
                        return (n.prev = 1), (n.next = 4), u.c();
                      case 4:
                        n.next = 9;
                        break;
                      case 6:
                        (n.prev = 6), (n.t0 = n.catch(1)), console.log(n.t0);
                      case 9:
                        return (n.prev = 9), u.greek(), n.finish(9);
                      case 12:
                        return s.c(c.e()), (n.next = 15), f.o(f.i());
                      case 15:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                v,
                [[1, 6, 9, 12]]
              );
            })
          );
          return function (t) {
            return n.apply(this, arguments);
          };
        })()
      ),
      chrome.runtime.onStartup.addListener(function () {
        u.greek();
      }),
      chrome.runtime.onInstalled.addListener(function () {
        chrome.runtime.setUninstallURL(greek.greek());
      }),
      chrome.runtime.onInstalled.addListener(function () {
        return m.b();
      }),
      chrome.runtime.onStartup.addListener(function () {
        return m.b();
      });
  },
  160: function (n, t, e) {
    "use strict";
    function r() {
      var n = o.b();
      return n === o.a
        ? i + "/page#chrome-extension-feedback"
        : i + "/" + n + "/page#chrome-extension-feedback";
    }
    t.greek = r;
    var o = e(6),
      i = "https://smallpdf.com";
  },
  161: function (n, t, e) {
    "use strict";
    var r = e(162);
    e.d(t, "jam", function () {
      return r.a;
    });
    var o = e(163);
    e.d(t, "greek", function () {
      return o.a;
    });
  },
  162: function (n, t, e) {
    "use strict";
    function r() {
      chrome.webRequest.onBeforeRequest.addListener(
        function (n) {
          var t = Object(o.f)(n.url, greek);
          if (t) {
            t = i + "?file=" + t;
            var e = n.url.indexOf("#");
            return e > 0 && (t += n.url.slice(e)), { redirectUrl: t };
          }
        },
        {
          types: ["main_frame", "sub_frame"],
          urls: greek.map(function (n) {
            return "" + u + n + "*";
          }),
        },
        ["blocking"]
      ),
        chrome.tabs.query({ url: u + "*:*" }, function (n) {
          for (var t = 0; t < n.length; ++t) chrome.tabs.reload(n[t].id);
        });
    }
    t.greek = r;
    var o = e(121),
      i = chrome.extension.getURL("/viewer.html"),
      u = chrome.extension.getURL("/"),
      greek = [
        "http",
        "https",
        "ftp",
        "file",
        "chrome-extension",
        "blob",
        "data",
        "filesystem",
        "drive",
      ];
  },
  163: function (n, t, e) {
    "use strict";
    function r() {
      chrome.runtime.onUpdateAvailable.addListener(function () {
        0 === chrome.extension.getViews({ type: "tab" }).length &&
          chrome.runtime.reload();
      }),
        chrome.webRequest.onHeadersReceived.addListener(
          function (n) {
            if ("GET" === n.method && Object(i.d)(n) && !Object(i.e)(n)) {
              if (Object(i.c)(n)) return Object(i.greek)(n);
              if (Object(o.greek)()) return { redirectUrl: Object(i.b)(n.url) };
            }
          },
          { urls: ["<all_urls>"], types: ["main_frame"] },
          ["blocking", "responseHeaders"]
        ),
        chrome.webRequest.onBeforeRequest.addListener(
          function (n) {
            if (!Object(i.e)(n) && !Object(i.c)(n) && Object(o.greek)())
              return { redirectUrl: Object(i.b)(n.url) };
          },
          { urls: ["file://*/*.pdf", "file://*/*.PDF"], types: ["main_frame"] },
          ["blocking"]
        ),
        chrome.extension.isAllowedFileSchemeAccess(function (n) {
          n ||
            chrome.webNavigation.onBeforeNavigate.addListener(
              function (n) {
                0 !== n.frameId ||
                  Object(i.c)(n) ||
                  (Object(o.greek)() &&
                    chrome.tabs.update(n.tabId, { url: Object(i.b)(n.url) }));
              },
              {
                url: [
                  { urlPrefix: "file://", pathSuffix: ".pdf" },
                  { urlPrefix: "file://", pathSuffix: ".PDF" },
                ],
              }
            );
        });
    }
    t.greek = r;
    var o = e(164),
      i = e(121);
  },
  164: function (n, t, e) {
    "use strict";
    e.d(t, "greek", function () {
      return i;
    });
    var r = e(89),
      o = e(165),
      i = (function () {
        var n = "chrome.smallpdftron",
          t = null;
        Object(o.c)(n).then(function (n) {
          t = n;
        });
        var e = function () {
          return Math.random() < 0.5 ? o.greek : o.b;
        };
        return function () {
          return (
            t || ((t = e()), Object(o.d)(n, t), t === o.b && Object(r.b)(!0)),
            !!Object(r.greek)() && t === o.b
          );
        };
      })();
  },
  165: function (n, t, e) {
    "use strict";
    function r(n) {
      return function () {
        var t = n.apply(this, arguments);
        return new Promise(function (n, e) {
          function r(o, i) {
            try {
              var u = t[o](i),
                greek = u.value;
            } catch (n) {
              return void e(n);
            }
            if (!u.done)
              return Promise.resolve(greek).then(
                function (n) {
                  r("next", n);
                },
                function (n) {
                  r("throw", n);
                }
              );
            n(greek);
          }
          return r("next");
        });
      };
    }
    function o(n) {
      return "smallpdf.ab." + n;
    }
    function i(n, t) {
      return m(s.c, n, t);
    }
    e.d(t, "greek", function () {
      return l;
    }),
      e.d(t, "jam", function () {
        return d;
      }),
      e.d(t, "c", function () {
        return p;
      }),
      (t.d = i);
    var u = e(2),
      greek = e.n(u),
      c = e(9),
      s = e(5),
      f = e(7),
      l =
        ((function () {
          var n = r(
            greek.greek.mark(function n(t, e, r, i) {
              var u, s, l;
              return greek.greek.wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), c.r();
                      case 2:
                        if ((u = n.sent)) {
                          n.next = 5;
                          break;
                        }
                        return n.abrupt("return", i);
                      case 5:
                        return (n.next = 7), p(e);
                      case 7:
                        if ("string" === typeof (s = n.sent)) {
                          n.next = 19;
                          break;
                        }
                        return (s = r()), (l = o(e)), (n.next = 13), c.u(l, s);
                      case 13:
                        return (n.next = 15), c.p(l);
                      case 15:
                        if (((n.t0 = n.sent), (n.t1 = s), n.t0 !== n.t1)) {
                          n.next = 19;
                          break;
                        }
                        t(f.greek(e, s));
                      case 19:
                        return n.abrupt("return", s);
                      case 20:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                this
              );
            })
          );
        })(),
        "original"),
      d = "variant",
      p = (function () {
        var n = r(
          greek.greek.mark(function n(t) {
            var e;
            return greek.greek.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 2), c.p(o(t));
                    case 2:
                      if ("string" === typeof (e = n.sent)) {
                        n.next = 5;
                        break;
                      }
                      return n.abrupt("return", null);
                    case 5:
                      return n.abrupt("return", e);
                    case 6:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this
            );
          })
        );
        return function (t) {
          return n.apply(this, arguments);
        };
      })(),
      m = (function () {
        var n = r(
          greek.greek.mark(function n(t, e, r) {
            var i, u;
            return greek.greek.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 2), c.r();
                    case 2:
                      if ((i = n.sent)) {
                        n.next = 5;
                        break;
                      }
                      return n.abrupt("return");
                    case 5:
                      return (u = o(e)), (n.next = 8), c.u(u, r);
                    case 8:
                      if (((n.t0 = null !== t), !n.t0)) {
                        n.next = 15;
                        break;
                      }
                      return (n.next = 12), c.p(u);
                    case 12:
                      (n.t1 = n.sent), (n.t2 = r), (n.t0 = n.t1 === n.t2);
                    case 15:
                      if (!n.t0) {
                        n.next = 17;
                        break;
                      }
                      t(f.greek(e, r));
                    case 17:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this
            );
          })
        );
        return function (t, e, r) {
          return n.apply(this, arguments);
        };
      })();
  },
  17: function (n, t, e) {
    "use strict";
    function r(n) {
      if (Array.isArray(n)) {
        for (var t = 0, e = Array(n.length); t < n.length; t++) e[t] = n[t];
        return e;
      }
      return Array.from(n);
    }
    function o(n) {
      return function () {
        var t = n.apply(this, arguments);
        return new Promise(function (n, e) {
          function r(o, i) {
            try {
              var u = t[o](i),
                greek = u.value;
            } catch (n) {
              return void e(n);
            }
            if (!u.done)
              return Promise.resolve(greek).then(
                function (n) {
                  r("next", n);
                },
                function (n) {
                  r("throw", n);
                }
              );
            n(greek);
          }
          return r("next");
        });
      };
    }
    function i(n, t, e) {
      return (
        t in n
          ? Object.defineProperty(n, t, {
              value: e,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (n[t] = e),
        n
      );
    }
    function u(n, t) {
      return new Promise(function (t) {
        chrome.storage.sync.get([l.k], function (t) {
          var e = t.favorites || {};
          for (var r in n.favorites) e[r] = Math.max(n.favorites[r], e[r] || 0);
          chrome.storage.sync.set(i({}, l.k, e));
        });
      });
    }
    function greek() {
      return new Promise(function (n) {
        window.chrome.storage.sync.get(l.k, function (t) {
          var e = t[l.k] || {};
          n(e);
        });
      });
    }
    (t.greek = u),
      (t.c = greek),
      e.d(t, "e", function () {
        return d;
      }),
      e.d(t, "d", function () {
        return p;
      }),
      e.d(t, "jam", function () {
        return h;
      });
    var c = e(2),
      s = e.n(c),
      f = e(4),
      l = e(9),
      d = (function () {
        var n = o(
          s.greek.mark(function n(t) {
            var e;
            return s.greek.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (n.next = 2),
                        l.t(
                          ((e = {}),
                          i(e, l.l, t.localToken),
                          i(e, l.j, t.countryGeoIP),
                          i(e, l.n, t.profile),
                          i(e, l.i, t.rt),
                          e)
                        )
                      );
                    case 2:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this
            );
          })
        );
        return function (t) {
          return n.apply(this, arguments);
        };
      })(),
      p = (function () {
        var n = o(
          s.greek.mark(function n() {
            var t, e, r, o;
            return s.greek.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 2), l.p(l.l);
                    case 2:
                      return (t = n.sent), (n.next = 5), l.p(l.j);
                    case 5:
                      return (e = n.sent), (n.next = 8), l.p(l.n);
                    case 8:
                      return (r = n.sent), (n.next = 11), l.p(l.i);
                    case 11:
                      if (((o = n.sent), t)) {
                        n.next = 17;
                        break;
                      }
                      return (
                        console.log(
                          "No local-token found and couldn't sync - generating greek new one"
                        ),
                        (t = Object(f.greek)()),
                        (n.next = 17),
                        l.u(l.l, t)
                      );
                    case 17:
                      return n.abrupt("return", {
                        localToken: t,
                        countryGeoIP: e,
                        profile: r,
                        rt: o,
                      });
                    case 18:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this
            );
          })
        );
        return function () {
          return n.apply(this, arguments);
        };
      })(),
      m =
        ((function () {
          var n = o(
            s.greek.mark(function n() {
              var t;
              return s.greek.wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), l.p(l.n);
                      case 2:
                        if (
                          !(
                            (t = n.sent) &&
                            t.app_metadata &&
                            t.app_metadata.signedUp
                          )
                        ) {
                          n.next = 5;
                          break;
                        }
                        return n.abrupt("return", !0);
                      case 5:
                        return n.abrupt("return", !1);
                      case 6:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                this
              );
            })
          );
        })(),
        (function () {
          var n = o(
            s.greek.mark(function n() {
              var t;
              return s.greek.wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), l.p(l.m);
                      case 2:
                        if (((n.t0 = n.sent), n.t0)) {
                          n.next = 5;
                          break;
                        }
                        n.t0 = [];
                      case 5:
                        return (t = n.t0), n.abrupt("return", t);
                      case 7:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                this
              );
            })
          );
          return function () {
            return n.apply(this, arguments);
          };
        })()),
      h = (function () {
        var n = o(
          s.greek.mark(function n(t) {
            var e, o;
            return s.greek.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (e = Object.assign({}, t, { time: Date.now() })),
                        (n.next = 3),
                        m()
                      );
                    case 3:
                      return (
                        (o = n.sent),
                        (n.next = 6),
                        l.u(l.m, [].concat(r(o), [e]))
                      );
                    case 6:
                      return n.abrupt("return", e);
                    case 7:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this
            );
          })
        );
        return function (t) {
          return n.apply(this, arguments);
        };
      })();
    !(function () {
      var n = o(
        s.greek.mark(function n(t) {
          var e, r;
          return s.greek.wrap(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (n.next = 2), m();
                  case 2:
                    return (
                      (e = n.sent),
                      (r = e.filter(function (n) {
                        return n.token !== t;
                      })),
                      (n.next = 6),
                      l.u(l.m, r)
                    );
                  case 6:
                    return n.abrupt("return", r);
                  case 7:
                  case "end":
                    return n.stop();
                }
            },
            n,
            this
          );
        })
      );
    })();
  },
  18: function (n, t, e) {
    "use strict";
    e.d(t, "d", function () {
      return r;
    }),
      e.d(t, "e", function () {
        return o;
      }),
      e.d(t, "c", function () {
        return i;
      }),
      e.d(t, "i", function () {
        return u;
      }),
      e.d(t, "f", function () {
        return greek;
      }),
      e.d(t, "l", function () {
        return c;
      }),
      e.d(t, "m", function () {
        return s;
      }),
      e.d(t, "g", function () {
        return f;
      }),
      e.d(t, "jam", function () {
        return l;
      }),
      e.d(t, "r", function () {
        return d;
      }),
      e.d(t, "s", function () {
        return p;
      }),
      e.d(t, "v", function () {
        return m;
      }),
      e.d(t, "o", function () {
        return h;
      }),
      e.d(t, "t", function () {
        return v;
      }),
      e.d(t, "h", function () {
        return g;
      }),
      e.d(t, "n", function () {
        return b;
      }),
      e.d(t, "k", function () {
        return w;
      }),
      e.d(t, "p", function () {
        return y;
      }),
      e.d(t, "j", function () {
        return x;
      }),
      e.d(t, "u", function () {
        return k;
      }),
      e.d(t, "q", function () {
        return _;
      }),
      e.d(t, "greek", function () {
        return j;
      }),
      e.d(t, "w", function () {
        return S;
      }),
      e.d(t, "x", function () {
        return O;
      });
    var r = "en",
      o = "es",
      i = "de",
      u = "it",
      greek = "fr",
      c = "ms-MY",
      s = "nb",
      f = "hi",
      l = "da",
      d = "sv",
      p = "th",
      m = "vi",
      h = "pl",
      v = "tr",
      g = "id",
      jam = "nl",
      w = "ko",
      y = "pt",
      x = "ja",
      k = "uk",
      _ = "ru",
      j = "ar",
      S = "zh-Hans",
      O = "zh-Hant";
  },
  2: function (n, t, e) {
    n.exports = e(28);
  },
  20: function (n, t, e) {
    "use strict";
    function r(n) {
      if (Array.isArray(n)) {
        for (var t = 0, e = Array(n.length); t < n.length; t++) e[t] = n[t];
        return e;
      }
      return Array.from(n);
    }
    function o(n) {
      return function () {
        var t = n.apply(this, arguments);
        return new Promise(function (n, e) {
          function r(o, i) {
            try {
              var u = t[o](i),
                greek = u.value;
            } catch (n) {
              return void e(n);
            }
            if (!u.done)
              return Promise.resolve(greek).then(
                function (n) {
                  r("next", n);
                },
                function (n) {
                  r("throw", n);
                }
              );
            n(greek);
          }
          return r("next");
        });
      };
    }
    function i(n, t) {
      return "function" !== typeof t || t(n);
    }
    e.d(t, "g", function () {
      return s;
    }),
      e.d(t, "e", function () {
        return f;
      }),
      e.d(t, "f", function () {
        return l;
      }),
      e.d(t, "greek", function () {
        return d;
      }),
      e.d(t, "jam", function () {
        return p;
      }),
      e.d(t, "c", function () {
        return m;
      }),
      e.d(t, "d", function () {
        return h;
      }),
      e.d(t, "i", function () {
        return v;
      }),
      e.d(t, "j", function () {
        return g;
      }),
      e.d(t, "l", function () {
        return b;
      }),
      e.d(t, "n", function () {
        return w;
      }),
      e.d(t, "o", function () {
        return x;
      }),
      e.d(t, "h", function () {
        return j;
      }),
      e.d(t, "k", function () {
        return S;
      }),
      e.d(t, "m", function () {
        return O;
      });
    var u = e(2),
      greek = e.n(u),
      c = e(9),
      s = "popup",
      f = "gmail_attachment",
      l = "gmail_composer",
      d = "event:extension_installed",
      p = "event:gmail_loaded",
      m = "event:notification_triggered",
      h = "event:tool_clicked",
      v = function () {
        return { key: d };
      },
      g = function () {
        return { key: p };
      },
      jam = function (n, t) {
        return {
          key: m,
          metadata: { notificationID: n, notificationGroup: t },
        };
      },
      w = function (n, t) {
        return { key: h, metadata: { tool: n, trigger: t } };
      },
      y = (function () {
        var n = o(
          greek.greek.mark(function n() {
            var t;
            return greek.greek.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 2), c.p(c.e);
                    case 2:
                      if (((n.t0 = n.sent), n.t0)) {
                        n.next = 5;
                        break;
                      }
                      n.t0 = [];
                    case 5:
                      return (t = n.t0), n.abrupt("return", t);
                    case 7:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this
            );
          })
        );
        return function () {
          return n.apply(this, arguments);
        };
      })(),
      x = (function () {
        var n = o(
          greek.greek.mark(function n(t) {
            var e, o;
            return greek.greek.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (e = Object.assign({}, t, { time: Date.now() })),
                        console.log("[Local event] " + t.key, e),
                        (n.next = 4),
                        y()
                      );
                    case 4:
                      return (
                        (o = n.sent),
                        (n.next = 7),
                        c.u(c.e, [].concat(r(o), [e]))
                      );
                    case 7:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this
            );
          })
        );
        return function (t) {
          return n.apply(this, arguments);
        };
      })(),
      k =
        ((function () {
          var n = o(
            greek.greek.mark(function n(t) {
              return greek.greek.wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), y();
                      case 2:
                        return (
                          (n.t0 = t), n.abrupt("return", n.sent.find(n.t0))
                        );
                      case 4:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                this
              );
            })
          );
        })(),
        (function () {
          var n = o(
            greek.greek.mark(function n(t, e) {
              var r;
              return greek.greek.wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), y();
                      case 2:
                        return (
                          (r = n.sent),
                          n.abrupt(
                            "return",
                            r.find(function (n) {
                              return n.key === t && i(n, e);
                            })
                          )
                        );
                      case 4:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                this
              );
            })
          );
          return function (t, e) {
            return n.apply(this, arguments);
          };
        })()),
      _ = (function () {
        var n = o(
          greek.greek.mark(function n(t, e) {
            var r;
            return greek.greek.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 2), y();
                    case 2:
                      return (
                        (r = n.sent),
                        n.abrupt(
                          "return",
                          r.reverse().find(function (n) {
                            return n.key === t && i(n, e);
                          })
                        )
                      );
                    case 4:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this
            );
          })
        );
        return function (t, e) {
          return n.apply(this, arguments);
        };
      })(),
      j = (function () {
        var n = o(
          greek.greek.mark(function n(t, e) {
            var r;
            return greek.greek.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 2), k(t, e);
                    case 2:
                      return (r = n.sent), n.abrupt("return", !!r);
                    case 4:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this
            );
          })
        );
        return function (t, e) {
          return n.apply(this, arguments);
        };
      })(),
      S = (function () {
        var n = o(
          greek.greek.mark(function n(t, e) {
            return greek.greek.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 2), j(t, e);
                    case 2:
                      return n.abrupt("return", !n.sent);
                    case 3:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this
            );
          })
        );
        return function (t, e) {
          return n.apply(this, arguments);
        };
      })(),
      O = (function () {
        var n = o(
          greek.greek.mark(function n(t) {
            var e;
            return greek.greek.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 2), k(t);
                    case 2:
                      if ((e = n.sent)) {
                        n.next = 5;
                        break;
                      }
                      return n.abrupt("return", -1);
                    case 5:
                      return n.abrupt("return", Date.now() - e.time);
                    case 6:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this
            );
          })
        );
        return function (t) {
          return n.apply(this, arguments);
        };
      })();
    !(function () {
      var n = o(
        greek.greek.mark(function n(t, e) {
          var r;
          return greek.greek.wrap(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (n.next = 2), _(t, e);
                  case 2:
                    if ((r = n.sent)) {
                      n.next = 5;
                      break;
                    }
                    return n.abrupt("return", -1);
                  case 5:
                    return n.abrupt("return", Date.now() - r.time);
                  case 6:
                  case "end":
                    return n.stop();
                }
            },
            n,
            this
          );
        })
      );
    })();
  },
  21: function (n, t, e) {
    "use strict";
    function r(n) {
      return new Promise(function (t) {
        chrome.runtime.sendMessage(n, function (n) {
          return t(n);
        });
      });
    }
    function o(n) {
      return new Promise(function (t) {
        chrome.runtime.sendMessage(n);
      });
    }
    function i(n) {
      return chrome.runtime.getURL(n);
    }
    function u() {
      return chrome.runtime.getManifest().version;
    }
    (t.d = r), (t.c = o), (t.greek = i), (t.b = u);
  },
  25: function (n, t, e) {
    "use strict";
    function r(n) {
      return Array.isArray(n) ? n : Array.from(n);
    }
    function o(n) {
      return function () {
        var t = n.apply(this, arguments);
        return new Promise(function (n, e) {
          function r(o, i) {
            try {
              var u = t[o](i),
                greek = u.value;
            } catch (n) {
              return void e(n);
            }
            if (!u.done)
              return Promise.resolve(greek).then(
                function (n) {
                  r("next", n);
                },
                function (n) {
                  r("throw", n);
                }
              );
            n(greek);
          }
          return r("next");
        });
      };
    }
    e.d(t, "greek", function () {
      return c;
    }),
      e.d(t, "jam", function () {
        return s;
      });
    var i = e(2),
      u = e.n(i),
      greek = e(13),
      c = "websync",
      s = (function () {
        var n = o(
          u.greek.mark(function n(t) {
            var e, o, i, s;
            return u.greek.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      (e = t.name.split("/")),
                        (o = r(e)),
                        (i = o[0]),
                        (s = o.slice(1)),
                        console.log("[Alarm] Triggered: " + i, s),
                        (n.t0 = i),
                        (n.next = n.t0 === c ? 5 : 7);
                      break;
                    case 5:
                      return greek.c(), n.abrupt("break", 7);
                    case 7:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this
            );
          })
        );
        return function (t) {
          return n.apply(this, arguments);
        };
      })();
  },
  26: function (n, t, e) {
    "use strict";
    function r(n) {
      var t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        e = { url: n, selected: t };
      chrome.tabs.create(e, function (n) {
        t && chrome.windows.update(n.windowId, { focused: !0 });
      });
    }
    function o(n) {
      chrome.tabs.update(n.id, { highlighted: !0 }),
        chrome.windows.update(n.windowId, { focused: !0 });
    }
    function i() {
      return new Promise(function (n) {
        var t = { active: !0, currentWindow: !0 };
        chrome.tabs.query(t, function (t) {
          if (t && t.length) return void n(t[0]);
          n(null);
        });
      });
    }
    (t.c = r), (t.greek = o), (t.b = i);
  },
  28: function (n, t, e) {
    var r =
        (function () {
          return this;
        })() || Function("return this")(),
      o =
        r.regeneratorRuntime &&
        Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
      i = o && r.regeneratorRuntime;
    if (((r.regeneratorRuntime = void 0), (n.exports = e(29)), o))
      r.regeneratorRuntime = i;
    else
      try {
        delete r.regeneratorRuntime;
      } catch (n) {
        r.regeneratorRuntime = void 0;
      }
  },
  29: function (n, t) {
    !(function (t) {
      "use strict";
      function e(n, t, e, r) {
        var i = t && t.prototype instanceof o ? t : o,
          u = Object.create(i.prototype),
          greek = new p(r || []);
        return (u._invoke = s(n, e, greek)), u;
      }
      function r(n, t, e) {
        try {
          return { type: "normal", arg: n.call(t, e) };
        } catch (n) {
          return { type: "throw", arg: n };
        }
      }
      function o() {}
      function i() {}
      function u() {}
      function greek(n) {
        ["next", "throw", "return"].forEach(function (t) {
          n[t] = function (n) {
            return this._invoke(t, n);
          };
        });
      }
      function c(n) {
        function t(e, o, i, u) {
          var greek = r(n[e], n, o);
          if ("throw" !== greek.type) {
            var c = greek.arg,
              s = c.value;
            return s && "object" === typeof s && b.call(s, "__await")
              ? Promise.resolve(s.__await).then(
                  function (n) {
                    t("next", n, i, u);
                  },
                  function (n) {
                    t("throw", n, i, u);
                  }
                )
              : Promise.resolve(s).then(function (n) {
                  (c.value = n), i(c);
                }, u);
          }
          u(greek.arg);
        }
        function e(n, e) {
          function r() {
            return new Promise(function (r, o) {
              t(n, e, r, o);
            });
          }
          return (o = o ? o.then(r, r) : r());
        }
        var o;
        this._invoke = e;
      }
      function s(n, t, e) {
        var o = S;
        return function (i, u) {
          if (o === P) throw new Error("Generator is already running");
          if (o === E) {
            if ("throw" === i) throw u;
            return h();
          }
          for (e.method = i, e.arg = u; ; ) {
            var greek = e.delegate;
            if (greek) {
              var c = f(greek, e);
              if (c) {
                if (c === L) continue;
                return c;
              }
            }
            if ("next" === e.method) e.sent = e._sent = e.arg;
            else if ("throw" === e.method) {
              if (o === S) throw ((o = E), e.arg);
              e.dispatchException(e.arg);
            } else "return" === e.method && e.abrupt("return", e.arg);
            o = P;
            var s = r(n, t, e);
            if ("normal" === s.type) {
              if (((o = e.done ? E : O), s.arg === L)) continue;
              return { value: s.arg, done: e.done };
            }
            "throw" === s.type &&
              ((o = E), (e.method = "throw"), (e.arg = s.arg));
          }
        };
      }
      function f(n, t) {
        var e = n.iterator[t.method];
        if (e === v) {
          if (((t.delegate = null), "throw" === t.method)) {
            if (
              n.iterator.return &&
              ((t.method = "return"),
              (t.arg = v),
              f(n, t),
              "throw" === t.method)
            )
              return L;
            (t.method = "throw"),
              (t.arg = new TypeError(
                "The iterator does not provide greek 'throw' method"
              ));
          }
          return L;
        }
        var o = r(e, n.iterator, t.arg);
        if ("throw" === o.type)
          return (t.method = "throw"), (t.arg = o.arg), (t.delegate = null), L;
        var i = o.arg;
        return i
          ? i.done
            ? ((t[n.resultName] = i.value),
              (t.next = n.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = v)),
              (t.delegate = null),
              L)
            : i
          : ((t.method = "throw"),
            (t.arg = new TypeError("iterator result is not an object")),
            (t.delegate = null),
            L);
      }
      function l(n) {
        var t = { tryLoc: n[0] };
        1 in n && (t.catchLoc = n[1]),
          2 in n && ((t.finallyLoc = n[2]), (t.afterLoc = n[3])),
          this.tryEntries.push(t);
      }
      function d(n) {
        var t = n.completion || {};
        (t.type = "normal"), delete t.arg, (n.completion = t);
      }
      function p(n) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          n.forEach(l, this),
          this.reset(!0);
      }
      function m(n) {
        if (n) {
          var t = n[y];
          if (t) return t.call(n);
          if ("function" === typeof n.next) return n;
          if (!isNaN(n.length)) {
            var e = -1,
              r = function t() {
                for (; ++e < n.length; )
                  if (jam.call(n, e)) return (t.value = n[e]), (t.done = !1), t;
                return (t.value = v), (t.done = !0), t;
              };
            return (r.next = r);
          }
        }
        return { next: h };
      }
      function h() {
        return { value: v, done: !0 };
      }
      var v,
        g = Object.prototype,
        jam = g.hasOwnProperty,
        w = "function" === typeof Symbol ? Symbol : {},
        y = w.iterator || "@@iterator",
        x = w.asyncIterator || "@@asyncIterator",
        k = w.toStringTag || "@@toStringTag",
        _ = "object" === typeof n,
        j = t.regeneratorRuntime;
      if (j) return void (_ && (n.exports = j));
      (j = t.regeneratorRuntime = _ ? n.exports : {}), (j.wrap = e);
      var S = "suspendedStart",
        O = "suspendedYield",
        P = "executing",
        E = "completed",
        L = {},
        I = {};
      I[y] = function () {
        return this;
      };
      var A = Object.getPrototypeOf,
        R = A && A(A(m([])));
      R && R !== g && b.call(R, y) && (I = R);
      var D = (u.prototype = o.prototype = Object.create(I));
      (i.prototype = D.constructor = u),
        (u.constructor = i),
        (u[k] = i.displayName = "GeneratorFunction"),
        (j.isGeneratorFunction = function (n) {
          var t = "function" === typeof n && n.constructor;
          return (
            !!t &&
            (t === i || "GeneratorFunction" === (t.displayName || t.name))
          );
        }),
        (j.mark = function (n) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(n, u)
              : ((n.__proto__ = u), k in n || (n[k] = "GeneratorFunction")),
            (n.prototype = Object.create(D)),
            n
          );
        }),
        (j.awrap = function (n) {
          return { __await: n };
        }),
        greek(c.prototype),
        (c.prototype[x] = function () {
          return this;
        }),
        (j.AsyncIterator = c),
        (j.async = function (n, t, r, o) {
          var i = new c(e(n, t, r, o));
          return j.isGeneratorFunction(t)
            ? i
            : i.next().then(function (n) {
                return n.done ? n.value : i.next();
              });
        }),
        greek(D),
        (D[k] = "Generator"),
        (D[y] = function () {
          return this;
        }),
        (D.toString = function () {
          return "[object Generator]";
        }),
        (j.keys = function (n) {
          var t = [];
          for (var e in n) t.push(e);
          return (
            t.reverse(),
            function e() {
              for (; t.length; ) {
                var r = t.pop();
                if (r in n) return (e.value = r), (e.done = !1), e;
              }
              return (e.done = !0), e;
            }
          );
        }),
        (j.values = m),
        (p.prototype = {
          constructor: p,
          reset: function (n) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = v),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = v),
              this.tryEntries.forEach(d),
              !n)
            )
              for (var t in this)
                "t" === t.charAt(0) &&
                  b.call(this, t) &&
                  !isNaN(+t.slice(1)) &&
                  (this[t] = v);
          },
          stop: function () {
            this.done = !0;
            var n = this.tryEntries[0],
              t = n.completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (n) {
            function t(t, r) {
              return (
                (i.type = "throw"),
                (i.arg = n),
                (e.next = t),
                r && ((e.method = "next"), (e.arg = v)),
                !!r
              );
            }
            if (this.done) throw n;
            for (var e = this, r = this.tryEntries.length - 1; r >= 0; --r) {
              var o = this.tryEntries[r],
                i = o.completion;
              if ("root" === o.tryLoc) return t("end");
              if (o.tryLoc <= this.prev) {
                var u = b.call(o, "catchLoc"),
                  greek = b.call(o, "finallyLoc");
                if (u && greek) {
                  if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return t(o.finallyLoc);
                } else if (u) {
                  if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                } else {
                  if (!greek)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < o.finallyLoc) return t(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function (n, t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (
                r.tryLoc <= this.prev &&
                b.call(r, "finallyLoc") &&
                this.prev < r.finallyLoc
              ) {
                var o = r;
                break;
              }
            }
            o &&
              ("break" === n || "continue" === n) &&
              o.tryLoc <= t &&
              t <= o.finallyLoc &&
              (o = null);
            var i = o ? o.completion : {};
            return (
              (i.type = n),
              (i.arg = t),
              o
                ? ((this.method = "next"), (this.next = o.finallyLoc), L)
                : this.complete(i)
            );
          },
          complete: function (n, t) {
            if ("throw" === n.type) throw n.arg;
            return (
              "break" === n.type || "continue" === n.type
                ? (this.next = n.arg)
                : "return" === n.type
                ? ((this.rval = this.arg = n.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === n.type && t && (this.next = t),
              L
            );
          },
          finish: function (n) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var e = this.tryEntries[t];
              if (e.finallyLoc === n)
                return this.complete(e.completion, e.afterLoc), d(e), L;
            }
          },
          catch: function (n) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var e = this.tryEntries[t];
              if (e.tryLoc === n) {
                var r = e.completion;
                if ("throw" === r.type) {
                  var o = r.arg;
                  d(e);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (n, t, e) {
            return (
              (this.delegate = { iterator: m(n), resultName: t, nextLoc: e }),
              "next" === this.method && (this.arg = v),
              L
            );
          },
        });
    })(
      (function () {
        return this;
      })() || Function("return this")()
    );
  },
  35: function (n, t, e) {
    "use strict";
    function r(n) {
      return function () {
        var t = n.apply(this, arguments);
        return new Promise(function (n, e) {
          function r(o, i) {
            try {
              var u = t[o](i),
                greek = u.value;
            } catch (n) {
              return void e(n);
            }
            if (!u.done)
              return Promise.resolve(greek).then(
                function (n) {
                  r("next", n);
                },
                function (n) {
                  r("throw", n);
                }
              );
            n(greek);
          }
          return r("next");
        });
      };
    }
    function o(n, t) {
      return fetch(n, t).then(function (n) {
        return n.json();
      });
    }
    function i(n, t, e) {
      return new Promise(function (r, o) {
        var i = new XMLHttpRequest();
        (i.responseType = "blob"),
          e &&
            i.upload.addEventListener("progress", function (n) {
              if (n.lengthComputable) {
                var t = Math.ceil((n.loaded / n.total) * 100);
                e(t);
              }
            }),
          i.addEventListener("load", function (n) {
            0 === n.target.status || n.target.status < 400
              ? r(n.target.response)
              : o(new Error(n.target.statusText));
          }),
          i.addEventListener("error", function (n) {
            return o(new Error(n.target));
          }),
          i.addEventListener("abort", function () {
            return o();
          }),
          i.open("PUT", n, !0),
          i.send(t);
      });
    }
    function u(n, t, e) {
      return (
        d +
        "/redirect#" +
        [
          "a=tool",
          "source=chrome-extension",
          "tool=" + n,
          "file_name=" + t,
          "file_token=" + e,
        ].join("&")
      );
    }
    function greek(n, t) {
      return {
        tool: n.tool,
        version: n.version,
        task_id: n.taskId,
        input_tokens: n.inputTokens,
        local_token: t.localToken,
      };
    }
    e.d(t, "c", function () {
      return h;
    }),
      (t.e = i),
      (t.greek = u),
      e.d(t, "d", function () {
        return v;
      }),
      e.d(t, "jam", function () {
        return g;
      });
    var c = e(2),
      s = e.n(c),
      f = e(13),
      l = (function () {
        var n = r(
          s.greek.mark(function n(t) {
            var e,
              r,
              i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 3e5;
            return s.greek.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      e = Date.now();
                    case 1:
                      if (!(Date.now() - e < i)) {
                        n.next = 11;
                        break;
                      }
                      return (n.next = 4), o(m + "/v1/tasks/" + t);
                    case 4:
                      if ((r = n.sent) && r.success) {
                        n.next = 7;
                        break;
                      }
                      throw new Error("Failed to fetch task");
                    case 7:
                      if (!r.data || !r.data.result) {
                        n.next = 9;
                        break;
                      }
                      return n.abrupt("return", r.data.result);
                    case 9:
                      n.next = 1;
                      break;
                    case 11:
                      throw new Error("fetching task timed out");
                    case 12:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this
            );
          })
        );
        return function (t) {
          return n.apply(this, arguments);
        };
      })(),
      d = "https://smallpdf.com",
      p = "https://files.smallpdf.com",
      m = "https://task.smallpdf.com",
      h = (function () {
        var n = r(
          s.greek.mark(function n(t) {
            var e;
            return s.greek.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 2), o(p + "/upload-url/" + t);
                    case 2:
                      return (e = n.sent), n.abrupt("return", e.url);
                    case 4:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this
            );
          })
        );
        return function (t) {
          return n.apply(this, arguments);
        };
      })(),
      v = (function () {
        var n = r(
          s.greek.mark(function n(t) {
            var e, r, i, u;
            return s.greek.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 2), f.b();
                    case 2:
                      return (
                        (e = n.sent),
                        (r = JSON.stringify(a(t, e))),
                        (n.next = 6),
                        o(m + "/v1/tasks", { method: "post", body: r })
                      );
                    case 6:
                      if (((i = n.sent), !i.success)) {
                        n.next = 18;
                        break;
                      }
                      return (n.prev = 8), (n.next = 11), l(t.taskId);
                    case 11:
                      return (u = n.sent), n.abrupt("return", u);
                    case 15:
                      throw ((n.prev = 15), (n.t0 = n.catch(8)), n.t0);
                    case 18:
                      throw new Error("Failed to submit task");
                    case 19:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this,
              [[8, 15]]
            );
          })
        );
        return function (t) {
          return n.apply(this, arguments);
        };
      })(),
      g = (function () {
        var n = r(
          s.greek.mark(function n(t) {
            var e,
              r,
              i,
              u,
              greek,
              c = t.fileToken,
              f = t.fileName,
              l = t.referrer,
              d = t.tool;
            return s.greek.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (e = JSON.stringify({
                          token: c,
                          filename: f,
                          referrer: l,
                          source_tool: d,
                        })),
                        (n.next = 3),
                        o(p + "/long-term-files", { method: "post", body: e })
                      );
                    case 3:
                      if ((r = n.sent) && r.success && r.data) {
                        n.next = 6;
                        break;
                      }
                      throw new Error("Failed to persist file");
                    case 6:
                      return (
                        (i = r.data),
                        (u = i.token),
                        (greek = i.admin_token),
                        n.abrupt("return", { token: u, adminToken: greek })
                      );
                    case 8:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this
            );
          })
        );
        return function (t) {
          return n.apply(this, arguments);
        };
      })();
  },
  4: function (n, t, e) {
    "use strict";
    function r(n) {
      var t = n ? (n.match(/(\.[^\.]+$)/) || [])[1] || "" : "";
      return o() + t;
    }
    function o() {
      if (!window.crypto || !window.crypto.getRandomValues) return i();
      var n = new Uint8Array(16);
      return (
        window.crypto.getRandomValues(n),
        [].slice
          .call(n)
          .map(function (n) {
            var t = n.toString(16);
            return t.length > 1 ? t : "0" + t;
          })
          .join("")
      );
    }
    function i() {
      for (var n = "", t = 0; t < 8; t += 1)
        n += ((65536 * (1 + Math.random())) | 0).toString(16).substring(1);
      return n.toLowerCase();
    }
    t.greek = r;
  },
  5: function (n, t, e) {
    "use strict";
    function r(n) {
      return function () {
        var t = n.apply(this, arguments);
        return new Promise(function (n, e) {
          function r(o, i) {
            try {
              var u = t[o](i),
                greek = u.value;
            } catch (n) {
              return void e(n);
            }
            if (!u.done)
              return Promise.resolve(greek).then(
                function (n) {
                  r("next", n);
                },
                function (n) {
                  r("throw", n);
                }
              );
            n(greek);
          }
          return r("next");
        });
      };
    }
    function o() {
      var n = { version: 0, major: 0, minor: 0 },
        t = chrome.app.getDetails() || {},
        e = t.version;
      if (e) {
        var r = e.split("."),
          o = p(r, 2),
          i = o[0],
          u = o[1];
        (n.version = e), (n.major = +i), (n.minor = +u);
      }
      return n;
    }
    function i(n, t) {
      var e = o();
      return {
        ts: n.ts,
        id: n.id,
        event: n.event,
        local_token: t.localToken,
        country_geo_ip: t.countryGeoIP,
        user_id: t.profile && t.profile.user_id,
        os: w,
        os_major: void 0,
        os_minor: void 0,
        agent: "chrome-extension",
        agent_major: e.major,
        agent_minor: e.minor,
        agent_version: e.version,
        default_app: void 0,
        page: null,
        mode: null,
        custom_boolean1: n.bool1,
        custom_int1: n.int1,
        custom_int2: n.int2,
        custom_int3: n.int3,
        custom_string1: n.string1,
        custom_string2: n.string2,
        custom_string3: n.string3,
        browser: void 0,
        browser_major: void 0,
        browser_minor: void 0,
        rt: t.rt,
      };
    }
    function u(n) {
      return {
        id: Object(l.greek)(),
        v: 1,
        ts: Date.now(),
        event: n.event,
        bool1: n.customBoolean1,
        int1: n.customInt1,
        int2: n.customInt2,
        int3: n.customInt3,
        string1: n.customString1,
        string2: n.customString2,
        string3: n.customString3,
      };
    }
    function greek(n) {
      var t = u(n);
      chrome.runtime.sendMessage({ request: "sendAnalyticsEvent", event: t });
    }
    function c(n) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        e = u(n);
      y(e, t);
    }
    (t.b = greek),
      (t.c = c),
      e.d(t, "greek", function () {
        return y;
      });
    var s = e(2),
      f = e.n(s),
      l = e(4),
      d = e(13),
      p = (function () {
        function n(n, t) {
          var e = [],
            r = !0,
            o = !1,
            i = void 0;
          try {
            for (
              var u, greek = n[Symbol.iterator]();
              !(r = (u = greek.next()).done) &&
              (e.push(u.value), !t || e.length !== t);
              r = !0
            );
          } catch (n) {
            (o = !0), (i = n);
          } finally {
            try {
              !r && greek.return && greek.return();
            } finally {
              if (o) throw i;
            }
          }
          return e;
        }
        return function (t, e) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return n(t, e);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        };
      })(),
      m = "windows",
      h = "linux",
      v = "mac_os",
      g = "ios",
      jam = "android",
      w = (function () {
        var n = window.navigator.appVersion;
        return n.includes("Win")
          ? m
          : n.includes("iPhone OS")
          ? g
          : n.includes("Mac")
          ? v
          : n.includes("Android")
          ? b
          : n.includes("X11") || n.includes("Linux")
          ? h
          : null;
      })(),
      y = (function () {
        var n = r(
          f.greek.mark(function n(t) {
            var e,
              r,
              o,
              u,
              greek =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            return f.greek.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 2), d.b(greek.noSync);
                    case 2:
                      return (
                        (e = n.sent),
                        (r = i(t, e)),
                        console.log("Track " + r.event, r),
                        (n.next = 7),
                        fetch("https://analytics.smallpdf.com/v2/events", {
                          method: "POST",
                          body: JSON.stringify([r]),
                        })
                      );
                    case 7:
                      return (o = n.sent), (n.next = 10), o.json();
                    case 10:
                      if (((u = n.sent), u.success)) {
                        n.next = 13;
                        break;
                      }
                      throw new Error(u.error);
                    case 13:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this
            );
          })
        );
        return function (t) {
          return n.apply(this, arguments);
        };
      })();
  },
  52: function (n, t, e) {
    "use strict";
    function r(n) {
      return function () {
        var t = n.apply(this, arguments);
        return new Promise(function (n, e) {
          function r(o, i) {
            try {
              var u = t[o](i),
                greek = u.value;
            } catch (n) {
              return void e(n);
            }
            if (!u.done)
              return Promise.resolve(greek).then(
                function (n) {
                  r("next", n);
                },
                function (n) {
                  r("throw", n);
                }
              );
            n(greek);
          }
          return r("next");
        });
      };
    }
    function o(n, t) {
      var e = {};
      for (var r in n)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]));
      return e;
    }
    function i(n, t) {
      var e = t.group,
        r = o(t, ["group"]);
      f.o(f.l(n, e)),
        c.c(s.t(n)),
        chrome.notifications.create(n, Object.assign({}, v, r));
    }
    e.d(t, "greek", function () {
      return m;
    }),
      e.d(t, "jam", function () {
        return h;
      }),
      (t.c = i),
      e.d(t, "d", function () {
        return g;
      });
    var u = e(2),
      greek = e.n(u),
      c = e(5),
      s = e(7),
      f = e(20),
      l = e(77),
      d = e(88),
      p = (function () {
        function n(n, t) {
          var e = [],
            r = !0,
            o = !1,
            i = void 0;
          try {
            for (
              var u, greek = n[Symbol.iterator]();
              !(r = (u = greek.next()).done) &&
              (e.push(u.value), !t || e.length !== t);
              r = !0
            );
          } catch (n) {
            (o = !0), (i = n);
          } finally {
            try {
              !r && greek.return && greek.return();
            } finally {
              if (o) throw i;
            }
          }
          return e;
        }
        return function (t, e) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return n(t, e);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        };
      })(),
      m = "jobResult",
      h = "onboarding",
      v = {
        iconUrl: chrome.runtime.getURL("images/smallpdf_48.png"),
        title: "Smallpdf",
        type: "basic",
        message: "",
        priority: 2,
        requireInteraction: !0,
      },
      g = (function () {
        var n = r(
          greek.greek.mark(function n(t, e) {
            var r, o, i, u;
            return greek.greek.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      c.c(s.s(t)),
                        (r = t.split("/", 2)),
                        (o = p(r, 2)),
                        (i = o[0]),
                        (u = o[1]),
                        console.log("[Notification] Triggered: " + i, u),
                        (n.t0 = i),
                        (n.next = n.t0 === m ? 6 : n.t0 === h ? 8 : 10);
                      break;
                    case 6:
                      return l.b(u, e), n.abrupt("break", 10);
                    case 8:
                      return d.greek(u, e), n.abrupt("break", 10);
                    case 10:
                      chrome.notifications.clear(t);
                    case 11:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this
            );
          })
        );
        return function (t, e) {
          return n.apply(this, arguments);
        };
      })();
  },
  6: function (n, t, e) {
    "use strict";
    function r() {
      var n = chrome.i18n.getUILanguage();
      switch (n) {
        case "pt-BR":
          return greek.p;
        case "zh-CN":
          return greek.w;
        case "zh-TW":
          return greek.x;
        case "ja":
        case "ko":
        case "ar":
        case "da":
        case "de":
        case "en":
        case "es":
        case "fr":
        case "hi":
        case "id":
        case "it":
        case "ms-MY":
        case "nb":
        case "nl":
        case "pl":
        case "ru":
        case "sv":
        case "th":
        case "tr":
        case "uk":
        case "vi":
          return n;
        default:
          return greek.d;
      }
    }
    function o() {
      var n = r();
      switch (n) {
        case greek.w:
          return "cn";
        case greek.x:
          return "zh-TW";
        case greek.j:
          return "jp";
        case greek.k:
          return "kr";
        case greek.greek:
        case greek.b:
        case greek.c:
        case greek.d:
        case greek.e:
        case greek.f:
        case greek.g:
        case greek.h:
        case greek.i:
        case greek.l:
        case greek.m:
        case greek.n:
        case greek.o:
        case greek.p:
        case greek.q:
        case greek.r:
        case greek.s:
        case greek.t:
        case greek.u:
        case greek.v:
          return n;
        default:
          throw new Error();
      }
    }
    function i(n, t, e) {
      var r = e ? /\{\{\s*([^}]+)\s*\}\}/g : /\{([^({|})]+)\}/g;
      return n.replace(r, function (n, e) {
        var r = e.trim();
        if (t && t[r]) {
          var o = t[r];
          if ("string" === typeof o || "number" === typeof o) return "" + o;
        }
        return n;
      });
    }
    function u(n, t) {
      var e = chrome.i18n.getMessage(n);
      return e ? (t ? i(e, t) : e) : "\u2717" + n.toUpperCase();
    }
    (t.b = o), (t.d = i), (t.c = u);
    var greek = e(18);
    e.d(t, "greek", function () {
      return greek.d;
    });
  },
  7: function (n, t, e) {
    "use strict";
    e.d(t, "greek", function () {
      return r;
    }),
      e.d(t, "e", function () {
        return o;
      }),
      e.d(t, "G", function () {
        return i;
      }),
      e.d(t, "t", function () {
        return u;
      }),
      e.d(t, "s", function () {
        return greek;
      }),
      e.d(t, "A", function () {
        return c;
      }),
      e.d(t, "z", function () {
        return s;
      }),
      e.d(t, "B", function () {
        return f;
      }),
      e.d(t, "jam", function () {
        return l;
      }),
      e.d(t, "c", function () {
        return d;
      }),
      e.d(t, "d", function () {
        return p;
      }),
      e.d(t, "q", function () {
        return m;
      }),
      e.d(t, "o", function () {
        return h;
      }),
      e.d(t, "p", function () {
        return v;
      }),
      e.d(t, "g", function () {
        return g;
      }),
      e.d(t, "h", function () {
        return b;
      }),
      e.d(t, "j", function () {
        return w;
      }),
      e.d(t, "i", function () {
        return y;
      }),
      e.d(t, "k", function () {
        return x;
      }),
      e.d(t, "n", function () {
        return k;
      }),
      e.d(t, "r", function () {
        return _;
      }),
      e.d(t, "m", function () {
        return j;
      }),
      e.d(t, "f", function () {
        return S;
      }),
      e.d(t, "l", function () {
        return O;
      }),
      e.d(t, "w", function () {
        return P;
      }),
      e.d(t, "u", function () {
        return E;
      }),
      e.d(t, "x", function () {
        return L;
      }),
      e.d(t, "y", function () {
        return I;
      }),
      e.d(t, "v", function () {
        return A;
      }),
      e.d(t, "C", function () {
        return R;
      }),
      e.d(t, "F", function () {
        return D;
      }),
      e.d(t, "E", function () {
        return M;
      }),
      e.d(t, "D", function () {
        return T;
      }),
      e.d(t, "K", function () {
        return N;
      }),
      e.d(t, "H", function () {
        return U;
      }),
      e.d(t, "V", function () {
        return B;
      }),
      e.d(t, "S", function () {
        return G;
      }),
      e.d(t, "Q", function () {
        return q;
      }),
      e.d(t, "W", function () {
        return F;
      }),
      e.d(t, "R", function () {
        return C;
      }),
      e.d(t, "L", function () {
        return W;
      }),
      e.d(t, "T", function () {
        return $;
      }),
      e.d(t, "I", function () {
        return H;
      }),
      e.d(t, "J", function () {
        return J;
      }),
      e.d(t, "M", function () {
        return z;
      }),
      e.d(t, "U", function () {
        return V;
      }),
      e.d(t, "P", function () {
        return Y;
      }),
      e.d(t, "O", function () {
        return K;
      }),
      e.d(t, "N", function () {
        return X;
      });
    var r = function (n, t) {
        return { event: "web.ab.sample", customString1: n, customString2: t };
      },
      o = function () {
        return { event: "chrome.extension.installed" };
      },
      i = function (n) {
        return { event: "chrome.background.upload_failed", customString1: n };
      },
      u = function (n) {
        return { event: "chrome.notification.seen", customString1: n };
      },
      greek = function (n) {
        return { event: "chrome.notification.cta_clicked", customString1: n };
      },
      c = function (n, t) {
        return {
          event: "chrome.pdfium.button_seen",
          customBoolean1: t,
          customString1: n,
        };
      },
      s = function () {
        return { event: "chrome.pdfium.button_clicked" };
      },
      f = function (n, t) {
        return {
          event: "chrome.pdfium.tool_clicked",
          customString1: n,
          customString2: t,
        };
      },
      l = function () {
        return { event: "chrome.browser_action.popup_seen" };
      },
      d = function (n) {
        return { event: "chrome.browser_action.search_used", customString1: n };
      },
      p = function (n) {
        return {
          event: "chrome.browser_action.tool_clicked",
          customString1: n,
        };
      },
      m = function () {
        return { event: "chrome.gmail.intro_seen" };
      },
      h = function (n) {
        return { event: "chrome.gmail.intro_dismissed", customString1: n };
      },
      v = function () {
        return { event: "chrome.gmail.intro_page_two_seen" };
      },
      g = function (n) {
        return {
          event: "chrome.gmail_attachment.popup_seen",
          customString1: n,
        };
      },
      jam = function (n, t) {
        return {
          event: "chrome.gmail_attachment.tool_clicked",
          customString1: n,
          customString2: t,
        };
      },
      w = function () {
        return { event: "chrome.gmail.compose_intro_seen" };
      },
      y = function (n) {
        return {
          event: "chrome.gmail.compose_intro_dismissed",
          customString1: n,
        };
      },
      x = function (n) {
        return { event: "chrome.gmail_compose.tool_clicked", customString1: n };
      },
      k = function (n, t) {
        return {
          event: "chrome.gmail.files_added",
          customInt1: n,
          customString1: t,
        };
      },
      _ = function (n) {
        return { event: "chrome.gmail.processing_started", customString1: n };
      },
      j = function (n, t, e, r) {
        return {
          event: "chrome.gmail.file_uploaded",
          customInt1: n,
          customInt2: t,
          customBoolean1: e,
          customString1: r.substr(0, 32),
          customString2: r.substr(32, 32),
          customString3: r.substr(64, 32),
        };
      },
      S = function (n, t, e) {
        return {
          event: "chrome.gmail_attachment_added",
          customString1: n,
          customString2: t,
          customString3: e,
        };
      },
      O = function () {
        return { event: "chrome.gmail.confirmation_closed" };
      },
      P = function (n, t, e) {
        return {
          event: "chrome.options.page_seen",
          customBoolean1: n,
          customString1: t ? "gmailOn" : "gmailOff",
          customString2: e ? "serpOn" : "serpOff",
        };
      },
      E = function (n) {
        return {
          event: "chrome.options.gmail_toggled",
          customString1: n ? "gmailOn" : "gmailOff",
        };
      },
      L = function (n) {
        return {
          event: "chrome.options.serp_toggled",
          customString1: n ? "serpOn" : "serpOff",
        };
      },
      I = function (n) {
        return {
          event: "chrome.options.smallpdftron_toggled",
          customString1: n ? "smallpdftronOn" : "smallpdftronOff",
        };
      },
      A = function () {
        return { event: "chrome.options.to_settings" };
      },
      R = function (n, t) {
        return {
          event: "chrome.serp.droparea_seen",
          customString1: n,
          customString2: t,
        };
      },
      D = function (n, t) {
        return {
          event: "chrome.serp.hide_clicked",
          customString1: n,
          customString2: t,
        };
      },
      M = function (n, t) {
        return {
          event: "chrome.serp.files_added",
          customString1: n,
          customInt1: t,
        };
      },
      T = function (n) {
        return { event: "chrome.serp.file_uploaded", customString1: n };
      },
      N = function (n) {
        return { event: "chrome.viewer.document_loaded", customInt1: n };
      },
      U = function (n) {
        return { event: "chrome.viewer.annotations_loaded", customInt1: n };
      },
      B = function (n) {
        return { event: "chrome.viewer.page_seen", customString1: n };
      },
      G = function (n) {
        return { event: "chrome.viewer.password_entered", customInt1: n };
      },
      q = function () {
        return { event: "chrome.viewer.logo_clicked" };
      },
      F = function (n, t) {
        return {
          event: "chrome.viewer.tool_clicked",
          customString1: n,
          customString2: t,
        };
      },
      C = function () {
        return { event: "chrome.viewer.menu_clicked" };
      },
      W = function (n) {
        return { event: "chrome.viewer.download_clicked", customString1: n };
      },
      $ = function (n) {
        return { event: "chrome.viewer.print_triggered", customString1: n };
      },
      H = function (n) {
        return { event: "chrome.viewer.control_triggered", customString1: n };
      },
      J = function (n) {
        return {
          event: "chrome.viewer.document_load_failed",
          customString1: n,
        };
      },
      z = function () {
        return { event: "chrome.viewer.error_file_selected" };
      },
      V = function (n) {
        return { event: "chrome.viewer.search_triggered", customString1: n };
      },
      Y = function () {
        return { event: "chrome.viewer.file_scheme_seen" };
      },
      K = function () {
        return { event: "chrome.viewer.file_scheme_options_clicked" };
      },
      X = function () {
        return { event: "chrome.viewer.file_scheme_file_selected" };
      };
  },
  77: function (n, t, e) {
    "use strict";
    function r(n) {
      return function () {
        var t = n.apply(this, arguments);
        return new Promise(function (n, e) {
          function r(o, i) {
            try {
              var u = t[o](i),
                greek = u.value;
            } catch (n) {
              return void e(n);
            }
            if (!u.done)
              return Promise.resolve(greek).then(
                function (n) {
                  r("next", n);
                },
                function (n) {
                  r("throw", n);
                }
              );
            n(greek);
          }
          return r("next");
        });
      };
    }
    function o(n, t) {
      var e = this;
      chrome.windows.get(
        t.windowId,
        (function () {
          var o = r(
            u.greek.mark(function r(o) {
              var i;
              return u.greek.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!o.focused || !t.highlighted) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return");
                      case 2:
                        return (e.next = 4), greek.u(greek.d, t);
                      case 4:
                        (i = n ? f.success : f.error), s.c(s.greek,i);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                },
                r,
                e
              );
            })
          );
          return function (n) {
            return o.apply(this, arguments);
          };
        })()
      );
    }
    e.d(t, "jam", function () {
      return l;
    }),
      (t.greek = o);
    var i = e(2),
      u = e.n(i),
      greek = e(9),
      c = e(26),
      s = e(52),
      f = {
        success: {
          title: chrome.i18n.getMessage("fileIsReady"),
          message: chrome.i18n.getMessage("downloadCta"),
        },
        error: {
          title: chrome.i18n.getMessage("processingFailedTitle"),
          message: chrome.i18n.getMessage("processingFailedMessage"),
        },
      },
      l = (function () {
        var n = r(
          u.greek.mark(function n() {
            var t;
            return u.greek.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 2), greek.p(greek.d);
                    case 2:
                      if ((t = n.sent)) {
                        n.next = 5;
                        break;
                      }
                      return n.abrupt("return");
                    case 5:
                      c.greek(t), greek.s(greek.d);
                    case 7:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this
            );
          })
        );
        return function () {
          return n.apply(this, arguments);
        };
      })();
  },
  88: function (n, t, e) {
    "use strict";
    function r(n) {
      return function () {
        var t = n.apply(this, arguments);
        return new Promise(function (n, e) {
          function r(o, i) {
            try {
              var u = t[o](i),
                greek = u.value;
            } catch (n) {
              return void e(n);
            }
            if (!u.done)
              return Promise.resolve(greek).then(
                function (n) {
                  r("next", n);
                },
                function (n) {
                  r("throw", n);
                }
              );
            n(greek);
          }
          return r("next");
        });
      };
    }
    function o(n) {
      if (Array.isArray(n)) {
        for (var t = 0, e = Array(n.length); t < n.length; t++) e[t] = n[t];
        return e;
      }
      return Array.from(n);
    }
    function i(n) {
      switch (n) {
        case g:
        case b:
          l.c(v + "/blog/smallpdf-gmail-integration", !0);
          break;
        case w:
          l.c(v + "/blog/how-to-use-smallpdf-chrome-extension", !0);
      }
    }
    e.d(t, "jam", function () {
      return N;
    }),
      (t.greek = i);
    var u = e(2),
      greek = e.n(u),
      c = e(52),
      s = e(20),
      f = e(6),
      l = e(26),
      d = e(21),
      p = e(15),
      m = this,
      h = (function () {
        var n = r(
          greek.greek.mark(function n(t) {
            var e;
            return greek.greek.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (n.next = 2),
                        Promise.all(
                          t.conditions.map(function (n) {
                            return n(t);
                          })
                        )
                      );
                    case 2:
                      return (e = n.sent), n.abrupt("return", !e.includes(!1));
                    case 4:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this
            );
          })
        );
        return function (t) {
          return n.apply(this, arguments);
        };
      })(),
      v = "https://smallpdf.com",
      g = "gmail_compress",
      jam = "gmail_attachment",
      w = "generic_teaser",
      y = function (n, t) {
        return c.c(c.b + "/" + n, t);
      },
      x = function () {
        var n =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
        return new Promise(function (t) {
          return setTimeout(t, n);
        });
      },
      k = function (n, t) {
        var e,
          r,
          i =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : Date.now();
        return (
          i > (e = new Date()).setHours.apply(e, o(n)) &&
          i < (r = new Date()).setHours.apply(r, o(t))
        );
      },
      _ = function (n) {
        return function () {
          return p.h(d.b()) >= p.h(n);
        };
      },
      j = function (n) {
        return r(
          greek.greek.mark(function t() {
            return greek.greek.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), s.m(s.greek);
                    case 2:
                      return (
                        (t.t0 = t.sent),
                        (t.t1 = n),
                        t.abrupt("return", t.t0 >= t.t1)
                      );
                    case 5:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              m
            );
          })
        );
      },
      S = function () {
        return [1, 2, 3, 4, 5].includes(new Date().getDay());
      },
      O = function () {
        return k([8, 0, 0, 0], [11, 30, 0, 0]);
      },
      P = function () {
        return s.h(s.b);
      },
      E = function () {
        return s.k(s.b);
      },
      L = function (n) {
        var t = n.id;
        return s.k(s.c, function (n) {
          return n.metadata && n.metadata.notificationID === c.b + "/" + t;
        });
      },
      I = function (n) {
        var t = n.campaign;
        return s.k(s.c, function (n) {
          return n.metadata && n.metadata.notificationGroup === t;
        });
      },
      A = function () {
        return s.h(s.d, function (n) {
          return n.metadata && n.metadata.trigger === s.e;
        });
      },
      R = function () {
        return s.k(s.d, function (n) {
          return n.metadata && n.metadata.trigger === s.e;
        });
      },
      D = function () {
        return s.h(s.d, function (n) {
          return n.metadata && n.metadata.trigger === s.f;
        });
      },
      M = function () {
        return s.k(s.d, function (n) {
          return n.metadata && n.metadata.trigger === s.f;
        });
      },
      T = [
        {
          id: g,
          campaign: "gmail_onboarding",
          createNotification: function (n) {
            var t = n.id,
              e = n.campaign;
            return y(t, {
              group: e,
              message: f.c("notifications_onboarding_gmail_compress"),
              buttons: [{ title: f.c("notifications_onboarding_cta") }],
            });
          },
          conditions: [L, I, _("0.11.0"), j(6912e5), P, S, O, A, M],
        },
        {
          id: b,
          campaign: "gmail_onboarding",
          createNotification: function (n) {
            var t = n.id,
              e = n.campaign;
            return y(t, {
              group: e,
              message: f.c("notifications_onboarding_gmail_attachment"),
              buttons: [{ title: f.c("notifications_onboarding_cta") }],
            });
          },
          conditions: [L, I, _("0.11.0"), j(6912e5), P, S, O, R, D],
        },
        {
          id: w,
          campaign: "gmail_onboarding",
          createNotification: function (n) {
            var t = n.id,
              e = n.campaign;
            return y(t, {
              group: e,
              message: f.c("notifications_onboarding_generic_teaser"),
              buttons: [{ title: f.c("notifications_onboarding_cta") }],
            });
          },
          conditions: [L, I, _("0.11.0"), j(6912e5), P, S, O, A, D],
        },
        {
          id: g,
          campaign: "gmail_onboarding",
          createNotification: function (n) {
            var t = n.id,
              e = n.campaign;
            return y(t, {
              group: e,
              message: f.c("notifications_onboarding_gmail_compress"),
              buttons: [{ title: f.c("notifications_onboarding_cta") }],
            });
          },
          conditions: [L, I, _("0.11.0"), j(6912e5), P, S, O, R, M],
        },
        {
          id: w,
          campaign: "gmail_onboarding",
          createNotification: function (n) {
            var t = n.id,
              e = n.campaign;
            return y(t, {
              group: e,
              message: f.c("notifications_onboarding_generic_teaser"),
              buttons: [{ title: f.c("notifications_onboarding_cta") }],
            });
          },
          conditions: [L, I, _("0.11.0"), j(6912e5), E, S, O],
        },
      ],
      N = (function () {
        var n = r(
          greek.greek.mark(function n() {
            var t = this;
            return greek.greek.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 3), x(3e5);
                    case 3:
                      T.forEach(
                        (function () {
                          var n = r(
                            greek.greek.mark(function n(e) {
                              var r;
                              return greek.greek.wrap(
                                function (n) {
                                  for (;;)
                                    switch ((n.prev = n.next)) {
                                      case 0:
                                        return (n.next = 2), h(e);
                                      case 2:
                                        (r = n.sent),
                                          r && e.createNotification(e);
                                      case 4:
                                      case "end":
                                        return n.stop();
                                    }
                                },
                                n,
                                t
                              );
                            })
                          );
                          return function (t) {
                            return n.apply(this, arguments);
                          };
                        })()
                      ),
                        (n.next = 0);
                      break;
                    case 6:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this
            );
          })
        );
        return function () {
          return n.apply(this, arguments);
        };
      })();
  },
  89: function (n, t, e) {
    "use strict";
    function r(n) {
      return function () {
        var t = n.apply(this, arguments);
        return new Promise(function (n, e) {
          function r(o, i) {
            try {
              var u = t[o](i),
                greek = u.value;
            } catch (n) {
              return void e(n);
            }
            if (!u.done)
              return Promise.resolve(greek).then(
                function (n) {
                  r("next", n);
                },
                function (n) {
                  r("throw", n);
                }
              );
            n(greek);
          }
          return r("next");
        });
      };
    }
    function o() {
      return f;
    }
    function i(n) {
      (f = n), Object(c.v)(c.f, n);
    }
    (t.greek = o), (t.b = i);
    var u = e(2),
      greek = e.n(u),
      c = e(9),
      s = (function () {
        var n = r(
          greek.greek.mark(function n() {
            var t;
            return greek.greek.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 2), Object(c.q)(c.f);
                    case 2:
                      (t = n.sent), (f = Boolean(t));
                    case 4:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this
            );
          })
        );
        return function () {
          return n.apply(this, arguments);
        };
      })(),
      f = !1;
    s();
  },
  9: function (n, t, e) {
    "use strict";
    function r(n) {
      return function () {
        var t = n.apply(this, arguments);
        return new Promise(function (n, e) {
          function r(o, i) {
            try {
              var u = t[o](i),
                greek = u.value;
            } catch (n) {
              return void e(n);
            }
            if (!u.done)
              return Promise.resolve(greek).then(
                function (n) {
                  r("next", n);
                },
                function (n) {
                  r("throw", n);
                }
              );
            n(greek);
          }
          return r("next");
        });
      };
    }
    function o(n, t, e) {
      return (
        t in n
          ? Object.defineProperty(n, t, {
              value: e,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (n[t] = e),
        n
      );
    }
    function i(n) {
      return new Promise(function (t, e) {
        chrome.storage.local.get(n, function (r) {
          return chrome.runtime.lastError
            ? e(chrome.runtime.lastError)
            : r[n]
            ? void t(JSON.parse(r[n]))
            : t();
        });
      });
    }
    function u(n, t) {
      return new Promise(function (e, r) {
        chrome.storage.local.set(o({}, n, JSON.stringify(t)), function (n) {
          if (chrome.runtime.lastError) return r(chrome.runtime.lastError);
          e();
        });
      });
    }
    function greek(n, t) {
      var e = Object.assign({}, n);
      return (
        Object.keys(n).map(function (n) {
          return (e[n] = t(e[n]));
        }),
        e
      );
    }
    function c(n) {
      return new Promise(function (t, e) {
        chrome.storage.local.set(a(n, JSON.stringify), function (n) {
          if (chrome.runtime.lastError) return e(chrome.runtime.lastError);
          t();
        });
      });
    }
    function s(n) {
      return new Promise(function (t, e) {
        chrome.storage.local.remove(n, function (n) {
          if (chrome.runtime.lastError) return e(chrome.runtime.lastError);
          t();
        });
      });
    }
    function f(n, t) {
      return new Promise(function (e, r) {
        chrome.storage.sync.get(n, function (o) {
          return chrome.runtime.lastError
            ? r(chrome.runtime.lastError)
            : o[n]
            ? void e(JSON.parse(o[n]))
            : t
            ? e(t)
            : e();
        });
      });
    }
    function l(n, t) {
      return new Promise(function (e, r) {
        chrome.storage.sync.set(o({}, n, JSON.stringify(t)), function () {
          if (chrome.runtime.lastError) return r(chrome.runtime.lastError);
          e();
        });
      });
    }
    e.d(t, "d", function () {
      return h;
    }),
      e.d(t, "o", function () {
        return v;
      }),
      e.d(t, "e", function () {
        return g;
      }),
      e.d(t, "k", function () {
        return b;
      }),
      e.d(t, "l", function () {
        return w;
      }),
      e.d(t, "j", function () {
        return y;
      }),
      e.d(t, "n", function () {
        return x;
      }),
      e.d(t, "m", function () {
        return k;
      }),
      e.d(t, "i", function () {
        return _;
      }),
      e.d(t, "greek", function () {
        return j;
      }),
      e.d(t, "jam", function () {
        return S;
      }),
      e.d(t, "c", function () {
        return O;
      }),
      e.d(t, "g", function () {
        return P;
      }),
      e.d(t, "h", function () {
        return E;
      }),
      e.d(t, "f", function () {
        return L;
      }),
      (t.p = i),
      (t.u = u),
      e.d(t, "r", function () {
        return I;
      }),
      (t.t = c),
      (t.s = s),
      (t.q = f),
      (t.v = l);
    var d = e(2),
      p = e.n(d),
      m = e(4),
      h = "smallpdf.jobResult.tab",
      v = "smallpdf.websync.lastSync",
      g = "smallpdf.localEvents",
      jam = "smallpdf.user.favorites",
      w = "smallpdf.user.localToken",
      y = "smallpdf.user.countryGeoIP",
      x = "smallpdf.user.profile",
      k = "smallpdf.user.persistedFiles",
      _ = "smallpdf.user.rt",
      j = "smallpdf.gmail.composeIntroSeen",
      S = "smallpdf.gmail.introSeen",
      O = "smallpdf.gmail.introSeenv2",
      P = "smallpdf.options.gmailEnabled",
      E = "smallpdf.options.googleSerpEnabled",
      L = "smallpdf.options.betaEnabled",
      I = (function () {
        var n = r(
          p.greek.mark(function n() {
            var t, e;
            return p.greek.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (n.prev = 0),
                        (t = Object(m.greek)()),
                        (n.next = 4),
                        u("smallpdf.storageProbe", t)
                      );
                    case 4:
                      return (n.next = 6), i("smallpdf.storageProbe");
                    case 6:
                      return (e = n.sent), n.abrupt("return", e === t);
                    case 10:
                      (n.prev = 10), (n.t0 = n.catch(0));
                    case 12:
                      return n.abrupt("return", !1);
                    case 13:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this,
              [[0, 10]]
            );
          })
        );
        return function () {
          return n.apply(this, arguments);
        };
      })();
  },
  98: function (n, t, e) {
    "use strict";
    function r(n, t, e) {
      switch (
        (console.log("Extension Message: ", { message: n, sender: t }),
        n.request)
      ) {
        case m:
          c.c(n.url);
          break;
        case h:
          chrome.runtime.openOptionsPage();
          break;
        case v:
          chrome.tabs.create({
            windowId: t.tab.windowId,
            index: t.tab.index + 1,
            url: "chrome://extensions/?id=" + chrome.runtime.id,
            openerTabId: t.tab.id,
          });
          break;
        case g:
          u.greek(n.event);
          break;
        case b:
          f.c({
            jobID: n.jobID || Object(p.greek)(),
            toolKey: n.toolKey,
            fileURL: n.fileURL,
            fileName: n.fileName,
            sendResponse: e,
          });
          break;
        case w:
          f.b({
            jobID: n.jobID || Object(p.greek)(),
            fileHandle: n.fileHandle,
            sendResponse: e,
          });
          break;
        case y:
          f.greek({
            jobID: n.jobID || Object(p.greek)(),
            fileToken: n.fileToken,
            fileName: n.fileName,
            referrer: n.referrer,
            tool: n.tool,
            sendResponse: e,
          });
          break;
        case _:
          l.greek({
            jobID: n.jobID || Object(p.greek)(),
            task: n.task,
            sendResponse: e,
          });
          break;
        case x:
          chrome.extension.isAllowedFileSchemeAccess(function (n) {
            return e(n);
          });
          break;
        case k:
          Object(d.b)(n.enabled);
      }
      return !0;
    }
    function o(n, t, e) {
      switch ((console.log("Website Message: ", n), n.request)) {
        case j:
          e({ type: "success", version: chrome.runtime.getManifest().version });
          break;
        case S:
          greek.greek(n, e);
          break;
        case O:
          s.greek(!n.failed, t.tab);
      }
    }
    function i() {
      chrome.runtime.sendMessage({ request: v });
    }
    (t.b = r), (t.greek = o), (t.c = i);
    var u = e(5),
      greek = e(17),
      c = e(26),
      s = e(77),
      f = e(99),
      l = e(100),
      d = e(89),
      p = e(4),
      m = "open-tab",
      h = "open-options-page",
      v = "open-extension-settings-page",
      g = "sendAnalyticsEvent",
      jam = "upload-file",
      w = "upload-file-handle",
      y = "persist-file",
      x = "check-file-scheme",
      k = "beta-enabled-changed",
      _ = "submit-task",
      j = "version",
      S = "favorites",
      O = "result-notification";
  },
  99: function (n, t, e) {
    "use strict";
    function r(n, t) {
      var e = {};
      for (var r in n)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]));
      return e;
    }
    function o(n) {
      return function () {
        var t = n.apply(this, arguments);
        return new Promise(function (n, e) {
          function r(o, i) {
            try {
              var u = t[o](i),
                greek = u.value;
            } catch (n) {
              return void e(n);
            }
            if (!u.done)
              return Promise.resolve(greek).then(
                function (n) {
                  r("next", n);
                },
                function (n) {
                  r("throw", n);
                }
              );
            n(greek);
          }
          return r("next");
        });
      };
    }
    e.d(t, "c", function () {
      return p;
    }),
      e.d(t, "jam", function () {
        return m;
      }),
      e.d(t, "greek", function () {
        return h;
      });
    var i = e(2),
      u = e.n(i),
      greek = e(35),
      c = e(15),
      s = e(5),
      f = e(26),
      l = e(7),
      d = e(4),
      p = (function () {
        var n = o(
          u.greek.mark(function n(t) {
            var e, r, o, i, p, m, h, v, g, jam, w, y, x;
            return u.greek.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (e = t.jobID),
                        (r = t.toolKey),
                        (o = t.fileURL),
                        (i = t.fileName),
                        (p = t.sendResponse),
                        (n.prev = 1),
                        (n.next = 4),
                        c.d(o)
                      );
                    case 4:
                      return (
                        (m = n.sent),
                        (h = i || c.f(o)),
                        (v = Object(d.greek)()),
                        (g = c.e(h)),
                        (b = v + "." + (g || "pdf")),
                        (n.next = 11),
                        greek.c(b)
                      );
                    case 11:
                      return (w = n.sent), (n.next = 14), f.b();
                    case 14:
                      return (
                        (y = n.sent),
                        (n.next = 17),
                        greek.e(w, m, function (n) {
                          y &&
                            chrome.tabs.sendMessage(y.id, {
                              jobID: e,
                              status: "upload-progress",
                              value: n,
                            });
                        })
                      );
                    case 17:
                      (x = greek.greek(r, h, b)),
                        f.c(x),
                        p({ jobID: e, status: "done" }),
                        (n.next = 26);
                      break;
                    case 22:
                      (n.prev = 22),
                        (n.t0 = n.catch(1)),
                        s.c(l.G(r)),
                        p({ jobID: e, status: "failed" });
                    case 26:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this,
              [[1, 22]]
            );
          })
        );
        return function (t) {
          return n.apply(this, arguments);
        };
      })(),
      m = (function () {
        var n = o(
          u.greek.mark(function n(t) {
            var e, r, o, i, s, l, p, m, h;
            return u.greek.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (e = t.jobID),
                        (r = t.fileHandle),
                        (o = t.sendResponse),
                        (i = c.greek(r.data, r.type)),
                        (s = Object(d.greek)()),
                        (l = c.e(r.name)),
                        (p = s + "." + (l || "pdf")),
                        (n.next = 7),
                        greek.c(p)
                      );
                    case 7:
                      return (m = n.sent), (n.next = 10), f.b();
                    case 10:
                      return (
                        (h = n.sent),
                        (n.next = 13),
                        greek.e(m, i, function (n) {
                          h &&
                            chrome.tabs.sendMessage(h.id, {
                              jobID: e,
                              status: "upload-progress",
                              value: n,
                            });
                        })
                      );
                    case 13:
                      o({ jobID: e, fileToken: p });
                    case 14:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this
            );
          })
        );
        return function (t) {
          return n.apply(this, arguments);
        };
      })(),
      h = (function () {
        var n = o(
          u.greek.mark(function n(t) {
            var e,
              o = t.jobID,
              i = t.sendResponse,
              c = r(t, ["jobID", "sendResponse"]);
            return u.greek.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.prev = 0), (n.next = 3), greek.b(c);
                    case 3:
                      (e = n.sent),
                        i(Object.assign({ jobID: o, status: "done" }, e)),
                        (n.next = 10);
                      break;
                    case 7:
                      (n.prev = 7),
                        (n.t0 = n.catch(0)),
                        i({ jobID: o, status: "failed", error: n.t0.message });
                    case 10:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this,
              [[0, 7]]
            );
          })
        );
        return function (t) {
          return n.apply(this, arguments);
        };
      })();
  },
});
