!(function (o) {
  var e = {};
  function t(n) {
    if (e[n]) return e[n].exports;
    var r = (e[n] = { i: n, l: !1, exports: {} });
    return o[n].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
  }
  (t.m = o),
    (t.c = e),
    (t.d = function (o, e, n) {
      t.o(o, e) || Object.defineProperty(o, e, { enumerable: !0, get: n });
    }),
    (t.r = function (o) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(o, "__esModule", { value: !0 });
    }),
    (t.t = function (o, e) {
      if ((1 & e && (o = t(o)), 8 & e)) return o;
      if (4 & e && "object" == typeof o && o && o.__esModule) return o;
      var n = Object.create(null);
      if (
        (t.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: o }),
        2 & e && "string" != typeof o)
      )
        for (var r in o)
          t.d(
            n,
            r,
            function (e) {
              return o[e];
            }.bind(null, r)
          );
      return n;
    }),
    (t.n = function (o) {
      var e =
        o && o.__esModule
          ? function () {
              return o.default;
            }
          : function () {
              return o;
            };
      return t.d(e, "a", e), e;
    }),
    (t.o = function (o, e) {
      return Object.prototype.hasOwnProperty.call(o, e);
    }),
    (t.p = ""),
    t((t.s = 0));
})([
  function (o, e, t) {
    "use strict";
    t.r(e),
      (window.$docsify = window.$docsify || {}),
      (window.$docsify.plugins = (window.$docsify.plugins || []).concat(
        function (o, e) {
          e.config.footer;
          let t =
              e.config.footer && e.config.footer.copy
                ? e.config.footer.copy
                : "<span>&copy; 2022.</span>",
            n =
              e.config.footer && e.config.footer.auth
                ? e.config.footer.auth
                : '<span>Published with <a href="https://github.com/docsifyjs/docsify" target="_blank">docsify</a>.</span>',
            m =
              e.config.footer && e.config.footer.content
                ? e.config.footer.content
                : '',
            r =
              e.config.footer && e.config.footer.style
                ? `style="${e.config.footer.style}"`
                : "",
            f =
              e.config.footer && e.config.footer.class
                ? `class="${e.config.footer.class}"`
                : "";
          var i = `${
            e.config.footer && e.config.footer.pre
              ? `${e.config.footer.pre}`
              : ""
          }<footer ${r} ${f}>${t} ${n} ${m}</footer>`;
          o.afterEach(function (o) {
            return o + i;
          });
        }
      ));
  },
]);
