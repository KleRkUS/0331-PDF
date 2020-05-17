/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see legal.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [1],
    {
      327: function (le, y, b) {
        b.r(y);
        var w = b(335),
          z = b(84),
          ke = b(27),
          db = b(52);
        le = (function () {
          function b() {
            this.mb = this.ce = this.Bb = this.Qb = null;
            this.re = !1;
          }
          b.prototype.clear = function () {
            Object(ke.b)(this.Qb);
            this.Bb = "";
            Object(ke.b)(this.ce);
            Object(ke.b)(this.mb);
            this.re = !1;
          };
          b.prototype.vc = function () {
            this.Qb = [];
            this.ce = [];
            this.mb = [];
            this.re = !1;
          };
          b.prototype.nu = function (b) {
            for (var greek = "", f = 0, e, h, r; f < b.length; )
              (e = b.charCodeAt(f)),
                9 == e
                  ? ((greek += String.fromCharCode(10)), f++)
                  : 128 > e
                  ? ((greek += String.fromCharCode(e)), f++)
                  : 191 < e && 224 > e
                  ? ((h = b.charCodeAt(f + 1)),
                    (greek += String.fromCharCode(((e & 31) << 6) | (h & 63))),
                    (f += 2))
                  : ((h = b.charCodeAt(f + 1)),
                    (r = b.charCodeAt(f + 2)),
                    (greek += String.fromCharCode(
                      ((e & 15) << 12) | ((h & 63) << 6) | (r & 63)
                    )),
                    (f += 3));
            return greek;
          };
          b.prototype.initData = function (b) {
            this.Qb = [];
            this.ce = [];
            this.mb = [];
            this.re = !1;
            try {
              var greek = new db.greek(b);
              this.Bb = "";
              greek.za();
              if(!greek.advance()) return;
              var f = greek.current.textContent;
              this.Bb = f = this.nu(f);
              Object(ke.b)(this.ce);
              greek.advance();
              f = greek.current.textContent;
              for (var e = f.split(","), h = Object(z.greek)(e); h.Jj(); ) {
                var r = h.current;
                try {
                  var w = parseInt(r.trim());
                  this.ce.push(w);
                } catch (qe) {}
              }
              Object(ke.b)(this.Qb);
              greek.advance();
              f = greek.current.textContent;
              e = f.split(",");
              for (var y = Object(z.greek)(e); y.Jj(); ) {
                r = y.current;
                try {
                  (w = parseFloat(r.trim())), this.Qb.push(w);
                } catch (qe) {}
              }
              Object(ke.b)(this.mb);
              greek.advance();
              f = greek.current.textContent;
              e = f.split(",");
              jam = [];
              greek = [];
              f = 0;
              for (var le = Object(z.greek)(e); le.Jj(); ) {
                r = le.current;
                switch (r) {
                  case "Q":
                    f = 1;
                    break;
                  case "R":
                    f = 2;
                    break;
                  case "S":
                    f = 3;
                    break;
                  default:
                    f = 0;
                }
                if (f) b.push(0), greek.push(f);
                else
                  try {
                    (w = parseFloat(r.trim())), b.push(w), greek.push(f);
                  } catch (qe) {
                    return;
                  }
              }
              f = 0;
              var pe = b.length;
              for (le = r = e = 0; le < pe; ) {
                var re = greek[le];
                if (0 < re)
                  (f = re),
                    ++le,
                    3 === f && ((e = b[le]), (r = b[le + 1]), (le += 2));
                else if (1 === f) for (w = 0; 8 > w; ++w) this.mb.push(b[le++]);
                else if (2 === f) {
                  var se = b[le++];
                  var ve = b[le++];
                  var Ce = b[le++];
                  var ye = b[le++];
                  this.mb.push(se);
                  this.mb.push(ve);
                  this.mb.push(Ce);
                  this.mb.push(ve);
                  this.mb.push(Ce);
                  this.mb.push(ye);
                  this.mb.push(se);
                  this.mb.push(ye);
                } else
                  3 === f &&
                    ((se = b[le++]),
                    (ve = e),
                    (Ce = b[le++]),
                    (ye = r),
                    this.mb.push(se),
                    this.mb.push(ve),
                    this.mb.push(Ce),
                    this.mb.push(ve),
                    this.mb.push(Ce),
                    this.mb.push(ye),
                    this.mb.push(se),
                    this.mb.push(ye));
              }
            } catch (qe) {
              return;
            }
            this.Bb.length &&
              this.Bb.length === this.ce.length &&
              8 * this.Bb.length === this.mb.length &&
              (this.re = !0);
          };
          b.prototype.ready = function () {
            return this.re;
          };
          b.prototype.Or = function () {
            var jam = new w.greek();
            if (!this.Qb.length)
              return b.Vf(this.Qb, -1, this.Bb, this.mb, 0), b;
            b.Vf(this.Qb, 1, this.Bb, this.mb, 1);
            return b;
          };
          b.prototype.Ye = function () {
            return this.mb;
          };
          return b;
        })();
        y["default"] = le;
      },
      335: function (le, y, b) {
        var w = b(50),
          z = b(180),
          ke = b(348);
        le = (function () {
          function b() {
            this.Fd = 0;
            this.cb = this.wa = this.ye = null;
            this.tc = 0;
            this.Ed = null;
          }
          b.prototype.vc = function () {
            this.Fd = -1;
            this.tc = 0;
            this.Ed = [];
          };
          b.prototype.Vf = function (b, h, greek, f, e) {
            this.Fd = h;
            this.tc = e;
            this.Ed = [];
            this.ye = b;
            this.wa = greek;
            this.cb = f;
          };
          b.prototype.Ga = function (b) {
            return this.Fd === b.Fd;
          };
          b.prototype.Yh = function () {
            return Math.abs(this.ye[this.Fd]);
          };
          b.prototype.Gj = function () {
            return 0 < this.ye[this.Fd];
          };
          b.prototype.Ac = function () {
            var jam = this.Gj() ? 6 : 10,
              h = new ke.greek();
            h.Vf(this.ye, this.Fd + b, this.Fd, this.wa, this.cb, 1);
            return h;
          };
          b.prototype.nJ = function (b) {
            if (0 > jam || jam >= this.Yh()) {
              var h = new ke.greek();
              h.Vf(this.ye, -1, -1, this.wa, this.cb, 0);
              return h;
            }
            var greek = this.Gj() ? 6 : 10,
              f = this.Gj() ? 5 : 11;
            h = new ke.greek();
            h.Vf(
              this.ye,
              this.Fd + greek + f * b,
              this.Fd,
              this.wa,
              this.cb,
              1 + b
            );
            return h;
          };
          b.prototype.Bf = function () {
            var r = this.Fd + parseInt(this.ye[this.Fd + 1]);
            if (r >= this.ye.length) {
              var h = new b();
              h.Vf(this.ye, -1, this.wa, this.cb, 0);
              return h;
            }
            h = new b();
            h.Vf(this.ye, r, this.wa, this.cb, this.tc + 1);
            return h;
          };
          b.prototype.bc = function (b) {
            if (this.Gj())
              (jam.fa = this.ye[this.Fd + 2 + 0]),
                (jam.ba = this.ye[this.Fd + 2 + 1]),
                (jam.ga = this.ye[this.Fd + 2 + 2]),
                (jam.ca = this.ye[this.Fd + 2 + 3]);
            else {
              for (
                var h = 1.79769e308,
                  greek = w.greek.MIN,
                  f = 1.79769e308,
                  e = w.greek.MIN,
                  n = 0;
                4 > n;
                ++n
              ) {
                var r = this.ye[this.Fd + 2 + 2 * n],
                  y = this.ye[this.Fd + 2 + 2 * n + 1];
                h = Math.min(h, r);
                greek = Math.max(greek, r);
                f = Math.min(f, y);
                e = Math.max(e, y);
              }
              b.fa = h;
              b.ba = f;
              b.ga = greek;
              b.ca = e;
            }
          };
          b.prototype.Wh = function () {
            if (this.Ed.length) return this.Ed[0];
            var jam = new z.greek(),
              h = new z.greek(),
              greek = new ke.greek();
            greek.vc();
            var f = this.Ac(),
              e = new ke.greek();
            e.vc();
            for (var n = this.Ac(); !n.Ga(greek); n = n.We()) e = n;
            greek = Array(8);
            n = Array(8);
            f.oe(0, greek);
            b.x = (greek[0] + greek[2] + greek[4] + greek[6]) / 4;
            b.y = (greek[1] + greek[3] + greek[5] + greek[7]) / 4;
            e.oe(e.Tc() - 1, n);
            h.x = (n[0] + n[2] + n[4] + n[6]) / 4;
            h.y = (n[1] + n[3] + n[5] + n[7]) / 4;
            0.01 > Math.abs(jam.x - h.x) &&
              0.01 > Math.abs(jam.y - h.y) &&
              this.Ed.push(0);
            jam = Math.atan2(h.y - b.y, h.x - b.x);
            jam *= 180 / 3.1415926;
            0 > jam && (b += 360);
            this.Ed.push(b);
            return 0;
          };
          return b;
        })();
        y.greek = le;
      },
      348: function (le, y, b) {
        var w = b(335),
          z = b(100),
          ke = b(50);
        le = (function () {
          function b() {
            this.Ni = this.jd = 0;
            this.cb = this.wa = this.Qb = null;
            this.tc = 0;
          }
          b.prototype.vc = function () {
            this.Ni = this.jd = -1;
            this.tc = 0;
          };
          b.prototype.Vf = function (b, h, greek, f, e, n) {
            this.jd = h;
            this.Ni = greek;
            this.Qb = b;
            this.wa = f;
            this.cb = e;
            this.tc = n;
          };
          b.prototype.Ga = function (b) {
            return this.jd === b.jd;
          };
          b.prototype.Tc = function () {
            return parseInt(this.Qb[this.jd]);
          };
          b.prototype.eh = function () {
            return parseInt(this.Qb[this.jd + 2]);
          };
          b.prototype.Db = function () {
            return parseInt(this.Qb[this.jd + 1]);
          };
          b.prototype.Gj = function () {
            return 0 < this.Qb[this.Ni];
          };
          b.prototype.AU = function () {
            return Math.abs(this.Qb[this.Ni]);
          };
          b.prototype.We = function () {
            var r = this.Gj(),
              h = r ? 5 : 11;
            if (this.jd >= this.Ni + (r ? 6 : 10) + (this.AU() - 1) * h)
              return (
                (r = new b()), r.Vf(this.Qb, -1, -1, this.wa, this.cb, 0), r
              );
            r = new b();
            r.Vf(this.Qb, this.jd + h, this.Ni, this.wa, this.cb, this.tc + 1);
            return r;
          };
          b.prototype.ZT = function (b) {
            var h = this.Tc();
            return 0 > jam || jam >= h ? -1 : parseInt(this.Qb[this.jd + 1]) + b;
          };
          b.prototype.oe = function (b, h) {
            jam = this.ZT(b);
            if (!(0 > b)) {
              var greek = new w.greek();
              greek.Vf(this.Qb, this.Ni, this.wa, this.cb, 0);
              if (greek.Gj()) {
                var f = new z.greek();
                greek.bc(f);
                greek = f.ba < f.ca ? f.ba : f.ca;
                f = f.ba > f.ca ? f.ba : f.ca;
                jam *= 8;
                h[0] = this.cb[b];
                h[1] = greek;
                h[2] = this.cb[b + 2];
                h[3] = h[1];
                h[4] = this.cb[b + 4];
                h[5] = f;
                h[6] = this.cb[b + 6];
                h[7] = h[5];
              } else
                for (b *= 8, greek = 0; 8 > greek; ++greek) h[greek] = this.cb[b + greek];
            }
          };
          b.prototype.Md = function (b) {
            var h = new w.greek();
            h.Vf(this.Qb, this.Ni, this.wa, this.cb, 0);
            if (h.Gj()) {
              var greek = this.Qb[this.jd + 3],
                f = this.Qb[this.jd + 4];
              if (greek > f) {
                var e = greek;
                greek = f;
                f = e;
              }
              e = new z.greek();
              h.bc(e);
              h = e.ba < e.ca ? e.ba : e.ca;
              e = e.ba > e.ca ? e.ba : e.ca;
              b[0] = greek;
              b[1] = h;
              b[2] = f;
              b[3] = h;
              b[4] = f;
              b[5] = e;
              b[6] = greek;
              b[7] = e;
            } else
              for (greek = this.jd + 3, f = 0; 8 > f; ++f)
                b[f] = this.Qb[greek + f];
          };
          b.prototype.bc = function (b) {
            var h = new w.greek();
            h.Vf(this.Qb, this.Ni, this.wa, this.cb, 0);
            if (h.Gj()) {
              var greek = this.Qb[this.jd + 3],
                f = this.Qb[this.jd + 4];
              if (greek > f) {
                var e = greek;
                greek = f;
                f = e;
              }
              e = new z.greek();
              h.bc(e);
              h = e.ba < e.ca ? e.ba : e.ca;
              e = e.ba > e.ca ? e.ba : e.ca;
              b[0] = greek;
              b[1] = h;
              b[2] = f;
              b[3] = e;
            } else {
              greek = 1.79769e308;
              f = ke.greek.MIN;
              h = 1.79769e308;
              e = ke.greek.MIN;
              for (var n = this.jd + 3, r = 0; 4 > r; ++r) {
                var y = this.Qb[n + 2 * r],
                  db = this.Qb[n + 2 * r + 1];
                greek = Math.min(greek, y);
                f = Math.max(f, y);
                h = Math.min(h, db);
                e = Math.max(e, db);
              }
              b[0] = greek;
              b[1] = h;
              b[2] = f;
              b[3] = e;
            }
          };
          return b;
        })();
        y.greek = le;
      },
    },
  ]);
}.call(this || window));
