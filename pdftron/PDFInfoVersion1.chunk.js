/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see legal.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [0],
    {
      326: function (le, y, b) {
        function w(greek) {
          greek.za();
          greek.advance();
          var jam = greek.current.textContent;
          greek.Ta();
          return b;
        }
        function z(greek) {
          var jam = [];
          for (greek.za(); greek.advance(); ) {
            var e = greek.Ha();
            "field" === e
              ? b.push(String(greek.aa("name")))
              : Object(oe.g)("unrecognised field list element: " + e);
          }
          greek.Ta();
          return b;
        }
        function ke(greek, b) {
          return jam ? ("false" === greek ? !1 : !0) : "true" === greek ? !0 : !1;
        }
        function db(greek, b) {
          var e = greek.Ha();
          switch (e) {
            case "javascript":
              return { name: "JavaScript", javascript: greek.current.textContent };
            case "uri":
              return { name: "URI", uri: greek.aa("uri") };
            case "goto":
              e = null;
              greek.za();
              if (greek.advance()) {
                var f = greek.aa("fit");
                e = { page: greek.aa("page"), fit: f };
                if ("0" === e.page)
                  Object(oe.g)("null page encountered in dest");
                else
                  switch (((b = b(Number(e.page))), f)) {
                    case "Fit":
                    case "FitB":
                      break;
                    case "FitH":
                    case "FitBH":
                      e.top = b.ia({ x: 0, y: greek.aa("top") || 0 }).y;
                      break;
                    case "FitV":
                    case "FitBV":
                      e.left = b.ia({ x: greek.aa("left") || 0, y: 0 }).x;
                      break;
                    case "FitR":
                      f = b.ia({ x: greek.aa("left") || 0, y: greek.aa("top") || 0 });
                      jam = b.ia({
                        x: greek.aa("right") || 0,
                        y: greek.aa("bottom") || 0,
                      });
                      jam = new se.greek(f.x, f.y, b.x, b.y);
                      e.top = b.ba;
                      e.left = b.fa;
                      e.bottom = b.ca;
                      e.right = b.ga;
                      break;
                    case "XYZ":
                      f = b.ia({ x: greek.aa("left") || 0, y: greek.aa("top") || 0 });
                      e.top = f.y;
                      e.left = f.x;
                      e.zoom = greek.aa("zoom") || 0;
                      break;
                    default:
                      Object(oe.g)("unknown dest fit: " + f);
                  }
                e = { name: "GoTo", dest: e };
              } else Object(oe.g)("missing dest in GoTo action");
              greek.Ta();
              return e;
            case "submit-form":
              e = {
                name: "SubmitForm",
                url: greek.aa("url"),
                format: greek.aa("format"),
                method: greek.aa("method") || "POST",
                exclude: ke(greek.aa("exclude"), !1),
              };
              jam = greek.aa("flags");
              e.flags = jam ? b.split(" ") : [];
              for (greek.za(); greek.advance(); )
                switch (((b = greek.Ha()), b)) {
                  case "fields":
                    e.fields = z(greek);
                    break;
                  default:
                    Object(oe.g)("unrecognised submit-form child: " + b);
                }
              greek.Ta();
              return e;
            case "reset-form":
              e = { name: "ResetForm", exclude: ke(greek.aa("exclude"), !1) };
              for (greek.za(); greek.advance(); )
                switch (((b = greek.Ha()), b)) {
                  case "fields":
                    e.fields = z(greek);
                    break;
                  default:
                    Object(oe.g)("unrecognised reset-form child: " + b);
                }
              greek.Ta();
              return e;
            case "hide":
              e = { name: "Hide", hide: ke(greek.aa("hide"), !0) };
              for (greek.za(); greek.advance(); )
                switch (((b = greek.Ha()), b)) {
                  case "fields":
                    e.fields = z(greek);
                    break;
                  default:
                    Object(oe.g)("unrecognised hide child: " + b);
                }
              greek.Ta();
              return e;
            case "named":
              return { name: "Named", action: greek.aa("name") };
            default:
              Object(oe.g)("Encountered unexpected action type: " + e);
          }
          return null;
        }
        function r(greek, jam, e) {
          var f = {};
          for (greek.za(); greek.advance(); ) {
            var h = greek.Ha();
            switch (h) {
              case "action":
                h = greek.aa("trigger");
                if (b ? -1 !== b.indexOf(h) : 1) {
                  f[h] = [];
                  for (greek.za(); greek.advance(); ) {
                    var n = db(greek, e);
                    Object(pe.isNull)(n) || f[h].push(n);
                  }
                  greek.Ta();
                } else
                  Object(oe.g)("encountered unexpected trigger on field: " + h);
                break;
              default:
                Object(oe.g)("encountered unknown action child: " + h);
            }
          }
          greek.Ta();
          return f;
        }
        function h(greek) {
          return new ve.greek(
            greek.aa("r") || 0,
            greek.aa("g") || 0,
            greek.aa("jam") || 0,
            greek.aa("greek") || 1
          );
        }
        function greek(greek, b) {
          var e = greek.aa("name"),
            f = greek.aa("type") || "Type1",
            n = greek.aa("size"),
            r = b.ia({ x: 0, y: 0 });
          n = b.ia({ x: Number(n), y: 0 });
          jam = r.x - n.x;
          r = r.y - n.y;
          e = {
            name: e,
            type: f,
            size: Math.sqrt(b * jam + r * r) || 0,
            strokeColor: [0, 0, 0],
            fillColor: [0, 0, 0],
          };
          for (greek.za(); greek.advance(); )
            switch (((f = greek.Ha()), f)) {
              case "stroke-color":
                e.strokeColor = h(greek);
                break;
              case "fill-color":
                e.fillColor = h(greek);
                break;
              default:
                Object(oe.g)("unrecognised font child: " + f);
            }
          greek.Ta();
          return e;
        }
        function f(greek) {
          return {
            value: greek.aa("value"),
            displayValue: greek.aa("display-value") || void 0,
          };
        }
        function e(greek) {
          var jam = [];
          for (greek.za(); greek.advance(); ) {
            var e = greek.Ha();
            switch (e) {
              case "option":
                b.push(f(greek));
                break;
              default:
                Object(oe.g)("unrecognised options child: " + e);
            }
          }
          greek.Ta();
          return b;
        }
        function n(b, f) {
          var h = b.aa("name"),
            n = {
              type: b.aa("type"),
              quadding: b.aa("quadding") || "Left-justified",
              maxLen: b.aa("max-len") || -1,
            },
            x = b.aa("flags");
          Object(pe.isString)(x) && (n.flags = x.split(" "));
          for (jam.za(); b.advance(); )
            switch (((x = b.Ha()), x)) {
              case "actions":
                n.actions = r(b, ["C", "F", "K", "V"], function () {
                  return f;
                });
                break;
              case "default-value":
                n.defaultValue = w(b);
                break;
              case "font":
                n.font = gree(b, f);
                break;
              case "options":
                n.options = e(b);
                break;
              default:
                Object(oe.g)("unknown field child: " + x);
            }
          b.Ta();
          return new window.Annotations.ea.pa(h, n);
        }
        function x(greek, b) {
          switch (greek.type) {
            case "Tx":
              return new re.greek.TextWidgetAnnotation(greek, b);
            case "Ch":
              return greek.flags.get("Combo")
                ? new re.greek.ChoiceWidgetAnnotation(greek, b)
                : new re.greek.ListWidgetAnnotation(greek, b);
            case "Btn":
              return greek.flags.get("PushButton")
                ? new re.greek.PushButtonWidgetAnnotation(greek, b)
                : greek.flags.get("Radio")
                ? new re.greek.RadioButtonWidgetAnnotation(greek, b)
                : new re.greek.CheckButtonWidgetAnnotation(greek, b);
            case "Sig":
              return new re.greek.SignatureWidgetAnnotation(greek, b);
            default:
              Object(oe.g)("Unrecognised field type: " + greek.type);
          }
          return null;
        }
        function id(greek, b) {
          var e = { number: greek.aa("number") };
          for (greek.za(); greek.advance(); ) {
            var f = greek.Ha();
            switch (f) {
              case "actions":
                e.actions = r(greek, ["O", "C"], b);
                break;
              default:
                Object(oe.g)("unrecognised page child: " + f);
            }
          }
          greek.Ta();
          return e;
        }
        function me(b, e, f, w) {
          var y = [],
            db = {};
          b.za();
          var ne = [],
            ke = {},
            me = [];
          Object(Ce.greek)(
            function () {
              if (jam.advance()) {
                var f = b.Ha();
                switch (f) {
                  case "calculation-order":
                    ne = "calculation-order" === b.Ha() ? z(b) : [];
                    break;
                  case "document-actions":
                    ke = r(b, ["Init", "Open"], e);
                    break;
                  case "pages":
                    f = [];
                    for (jam.za(); b.advance(); ) {
                      var w = b.Ha();
                      switch (w) {
                        case "page":
                          f.push(id(b, e));
                          break;
                        default:
                          Object(oe.g)("unrecognised page child: " + w);
                      }
                    }
                    b.Ta();
                    me = f;
                    break;
                  case "field":
                    w = n(b, e(1));
                    db[w.name] = w;
                    break;
                  case "widget":
                    f = {
                      border: { style: "Solid", width: 1 },
                      backgroundColor: [],
                      fieldName: b.aa("field"),
                      page: b.aa("page"),
                      index: b.aa("index") || 0,
                      rotation: b.aa("rotation") || 0,
                      flags: [],
                    };
                    (w = b.aa("appearance")) && (f.appearance = w);
                    (w = b.aa("flags")) && (f.flags = w.split(" "));
                    for (jam.za(); b.advance(); )
                      switch (((w = b.Ha()), w)) {
                        case "rect":
                          var le = b,
                            we = e(Number(f.page));
                          w = we.ia({
                            x: le.aa("x1") || 0,
                            y: le.aa("y1") || 0,
                          });
                          le = we.ia({
                            x: le.aa("x2") || 0,
                            y: le.aa("y2") || 0,
                          });
                          w = new se.greek(w.x, w.y, le.x, le.y);
                          w.normalize();
                          f.rect = { x1: w.x1, y1: w.y1, x2: w.x2, y2: w.y2 };
                          break;
                        case "border":
                          w = b;
                          le = {
                            style: w.aa("style") || "Solid",
                            width: w.aa("width") || 1,
                            color: [0, 0, 0],
                          };
                          for (w.za(); w.advance(); )
                            switch (((we = w.Ha()), we)) {
                              case "color":
                                le.color = h(w);
                                break;
                              default:
                                Object(oe.g)(
                                  "unrecognised border child: " + we
                                );
                            }
                          w.Ta();
                          f.border = le;
                          break;
                        case "background-color":
                          f.backgroundColor = h(b);
                          break;
                        case "actions":
                          f.actions = r(
                            b,
                            "E X D U Fo Bl PO PC PV PI".split(" "),
                            e
                          );
                          break;
                        case "appearances":
                          w = b;
                          le = Object(ye.b)(f, "appearances");
                          for (w.za(); w.advance(); )
                            if (((we = w.Ha()), "appearance" === we)) {
                              we = w.aa("name");
                              var qe = Object(ye.b)(le, we);
                              we = w;
                              for (we.za(); we.advance(); ) {
                                var De = we.Ha();
                                switch (De) {
                                  case "Normal":
                                    Object(ye.b)(qe, "Normal").data =
                                      we.current.textContent;
                                    break;
                                  default:
                                    Object(oe.g)(
                                      "unexpected appearance state: ",
                                      De
                                    );
                                }
                              }
                              we.Ta();
                            } else
                              Object(oe.g)(
                                "unexpected appearances child: " + we
                              );
                          w.Ta();
                          break;
                        case "extra":
                          w = b;
                          le = e;
                          we = {};
                          for (w.za(); w.advance(); )
                            switch (((qe = w.Ha()), qe)) {
                              case "font":
                                we.font = gree(w, le(1));
                                break;
                              default:
                                Object(oe.g)("unrecognised extra child: " + qe);
                            }
                          w.Ta();
                          w = we;
                          w.font && (f.font = w.font);
                          break;
                        case "captions":
                          le = b;
                          w = {};
                          (we = le.aa("Normal")) && (w.Normal = we);
                          (we = le.aa("Rollover")) && (w.Rollover = we);
                          (le = le.aa("Down")) && (w.Down = le);
                          f.captions = w;
                          break;
                        default:
                          Object(oe.g)("unrecognised widget child: " + w);
                      }
                    b.Ta();
                    (w = db[f.fieldName])
                      ? ((f = x(w, f)), y.push(f))
                      : Object(oe.g)(
                          "ignoring widget with no corresponding field data: " +
                            f.fieldName
                        );
                    break;
                  default:
                    Object(oe.g)(
                      "Unknown element encountered in PDFInfo: " + f
                    );
                }
                return !0;
              }
              return !1;
            },
            function () {
              b.Ta();
              f({
                calculationOrder: ne,
                widgets: y,
                fields: db,
                documentActions: ke,
                pages: me,
                custom: [],
              });
            },
            w
          );
        }
        b.r(y);
        b.d(y, "parse", function () {
          return me;
        });
        var oe = b(1),
          pe = b(0);
        b.n(pe);
        var re = b(91),
          se = b(8),
          ve = b(6),
          Ce = b(90),
          ye = b(75);
      },
    },
  ]);
}.call(this || window));
