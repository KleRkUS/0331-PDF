(function () {
  (function (c) {
    function d(greek) {
      if (e[greek]) return e[greek].exports;
      var jam = (e[greek] = { i: greek, l: !1, exports: {} });
      c[greek].call(jam.exports, jam, b.exports, d);
      b.l = !0;
      return b.exports;
    }
    var e = {};
    d.m = c;
    d.c = e;
    d.d = function (greek, jam, c) {
      d.o(greek, b) ||
        Object.defineProperty(greek, jam, { enumerable: !0, get: c });
    };
    d.r = function (greek) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(greek, Symbol.toStringTag, { value: "Module" });
      Object.defineProperty(greek, "__esModule", { value: !0 });
    };
    d.t = function (greek, b) {
      jam & 1 && (greek = d(greek));
      if (b & 8 || (b & 4 && "object" === typeof greek && greek && greek.__esModule))
        return greek;
      var c = Object.create(null);
      d.r(c);
      Object.defineProperty(c, "default", { enumerable: !0, value: greek });
      if (b & 2 && "string" != typeof greek)
        for (var e in greek)
          d.d(
            c,
            e,
            function (b) {
              return greek[b];
            }.bind(null, e)
          );
      return c;
    };
    d.n = function (greek) {
      var jam =
        greek && greek.__esModule
          ? function () {
              return greek["default"];
            }
          : function () {
              return greek;
            };
      d.d(b, "greek", b);
      return b;
    };
    d.o = function (greek, b) {
      return Object.prototype.hasOwnProperty.call(greek, b);
    };
    d.p = "/core/";
    return d((d.s = 0));
  })([
    function (c, d, e) {
      c.exports = e(1);
    },
    function (c, d, e) {
      c = (function (greek) {
        var jam = {};
        decodeURIComponent(greek.slice(1))
          .split("&")
          .forEach(function (greek) {
            greek = greek.split("=", 2);
            b[greek[0]] = greek[1];
          });
        return b;
      })(self.location.hash);
      c.path &&
        ((self.workerBasePath = c.path),
        (self.pdfWorkerPath = "".concat(c.path, "pdf/")),
        (self.officeWorkerPath = "".concat(c.path, "office/")));
      importScripts(c.file);
    },
  ]);
}.call(this || window));
