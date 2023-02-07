const i = ({
  args: e,
  mode: t = "default"
}) => {
  if (f(e) !== "array" && !e.length)
    throw Error(
      'catchInvalidArguments requires "args" that must be an array of IArgToValidate objects'
    );
  if (t === "default")
    e.forEach((n) => {
      p(n);
    });
  else if (t === "atLeast" && !e.find((r) => !!r.value))
    throw Error(
      `must provide at least one of the following arguments: ${e.map((r) => r.name).join(", ")}`
    );
}, p = ({
  name: e,
  value: t,
  required: n,
  types: r,
  errorMode: o = "error"
}) => {
  if (f(e) !== "string")
    throw Error("'name', is required and must be of type string");
  let s = "";
  const c = f(t), a = `error validating argument named "${e}",`, u = `received value: ${t} - of type: <${c}>`;
  if (r && f(r) !== "array" && !r.length)
    throw Error(`${a} 'types' must be an array of strings`);
  const y = r ? `<${r.join(" | ")}>` : "";
  if (n && !r ? t || (s = `${a} is required, ${u}`) : r && !n ? t !== void 0 && !r.includes(c) && (s = `${a} must be of type(s) ${y}, ${u}`) : n && r && (!t || !r.includes(c)) && (s = `${a} is required and must be of type(s) ${y}, ${u}`), s.length) {
    if (o === "boolean")
      return !1;
    throw Error(s);
  }
  return !0;
}, T = (e) => f(e) === "error", G = (e) => {
  let t = "an unknown error occurred.";
  return T(e) ? e : (f(e) === "string" && (t = e), Error(t));
}, l = async (e) => (T(e) || (e = G(e)), Promise.reject(e)), f = (e) => {
  const t = Object.prototype.toString.call(e).toLowerCase();
  return t.slice(8, t.length - 1);
}, $ = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  J: 1,
  K: 2,
  L: 3,
  M: 4,
  N: 5,
  P: 7,
  R: 9,
  S: 2,
  T: 3,
  U: 4,
  V: 5,
  W: 6,
  X: 7,
  Y: 8,
  Z: 9
}, k = [
  8,
  7,
  6,
  5,
  4,
  3,
  2,
  10,
  0,
  9,
  8,
  7,
  6,
  5,
  4,
  3,
  2
];
function A(e) {
  if (typeof e != "string" || e.length != 17)
    return !1;
  e = e.toUpperCase();
  const t = e.split(""), n = t[8];
  if (isNaN(parseInt(n)) && n !== "X")
    return !1;
  const r = n === "X" ? 10 : parseInt(n);
  return t.map((s, c) => {
    let a;
    isNaN(parseInt(s)) ? a = $[s] : a = parseInt(s);
    const u = k[c];
    return a * u;
  }).reduce((s, c) => s + c, 0) % 11 === r;
}
const N = "https://vpic.nhtsa.dot.gov/api/vehicles", V = "json", j = (e = {}, t = !1) => {
  p({
    name: "params",
    value: e,
    types: ["object"]
  });
  const n = b({
    ...e,
    format: V
  });
  return "?" + Object.entries(n).map(([r, o], s, c) => o.length || t && o === "" ? `${r}=${o}${s < c.length - 1 ? "&" : ""}` : "").join("");
}, b = (e) => Object.entries(e).filter(
  ([n, r]) => p({
    name: n,
    types: ["string", "number", "boolean"],
    value: r,
    errorMode: "boolean"
  })
).reduce((n, [r, o]) => (n[r] = encodeURIComponent(o), n), {}), E = async (e, t, n = !0) => {
  const r = "DecodeVin";
  typeof t == "boolean" && (n = t, t = void 0);
  try {
    const o = [
      { name: "vin", value: e, required: !0, types: ["string"] },
      { name: "params", value: t, types: ["object"] },
      {
        name: "modelYear",
        value: t == null ? void 0 : t.modelYear,
        types: ["string", "number"]
      }
    ];
    i({ args: o });
    const { get: s, cacheUrl: c, getUrl: a } = g();
    return c({ endpointName: r, path: e, params: t }), n ? s() : a();
  } catch (o) {
    return l(o);
  }
}, I = async (e, t, n = !0) => {
  const r = "DecodeVinExtended";
  typeof t == "boolean" && (n = t, t = void 0);
  try {
    const o = [
      { name: "vin", value: e, required: !0, types: ["string"] },
      { name: "params", value: t, types: ["object"] },
      {
        name: "modelYear",
        value: t == null ? void 0 : t.modelYear,
        types: ["string", "number"]
      }
    ];
    i({ args: o });
    const { get: s, cacheUrl: c, getUrl: a } = g();
    return c({ endpointName: r, path: e, params: t }), n ? s() : a();
  } catch (o) {
    return l(o);
  }
}, S = async (e, t, n = !0) => {
  const r = "DecodeVinValues";
  typeof t == "boolean" && (n = t, t = void 0);
  try {
    const o = [
      { name: "vin", value: e, required: !0, types: ["string"] },
      { name: "params", value: t, types: ["object"] },
      {
        name: "modelYear",
        value: t == null ? void 0 : t.modelYear,
        types: ["string", "number"]
      }
    ];
    i({ args: o });
    const { get: s, cacheUrl: c, getUrl: a } = g();
    return c({ endpointName: r, path: e, params: t }), n ? s() : a();
  } catch (o) {
    return l(o);
  }
}, w = async (e, t = !0) => {
  const n = "DecodeVinValuesBatch";
  try {
    i({ args: [
      {
        name: "inputString",
        value: e,
        required: !0,
        types: ["string"]
      }
    ] });
    const { post: o, cacheUrl: s, getUrl: c } = g();
    return s({ endpointName: n, includeQueryString: !1 }), t ? o(c(), { body: e }) : c();
  } catch (r) {
    return l(r);
  }
}, Y = async (e, t, n = !0) => {
  const r = "DecodeVinValuesExtended";
  typeof t == "boolean" && (n = t, t = void 0);
  try {
    const o = [
      { name: "vin", value: e, required: !0, types: ["string"] },
      { name: "params", value: t, types: ["object"] },
      {
        name: "modelYear",
        value: t == null ? void 0 : t.modelYear,
        types: ["string", "number"]
      }
    ];
    i({ args: o });
    const { get: s, cacheUrl: c, getUrl: a } = g();
    return c({ endpointName: r, path: e, params: t }), n ? s() : a();
  } catch (o) {
    return l(o);
  }
}, D = async (e, t = !0) => {
  const n = "DecodeWMI";
  try {
    i({ args: [
      {
        name: "WMI",
        value: e,
        required: !0,
        types: ["string"]
      }
    ] });
    const { get: o, cacheUrl: s, getUrl: c } = g();
    return s({ endpointName: n, path: e }), t ? o() : c();
  } catch (r) {
    return l(r);
  }
}, L = async (e = !1) => {
  const t = "GetAllMakes";
  try {
    const { get: n, cacheUrl: r, getUrl: o } = g();
    return r({ endpointName: t }), e ? n() : o();
  } catch (n) {
    return l(n);
  }
}, P = async (e, t = !0) => {
  const n = "GetAllManufacturers";
  typeof e == "boolean" && (t = e, e = void 0);
  try {
    const r = [
      { name: "params", value: e, types: ["object"] },
      {
        name: "manufacturerType",
        value: e == null ? void 0 : e.manufacturerType,
        types: ["string"]
      },
      {
        name: "page",
        value: e == null ? void 0 : e.page,
        types: ["string", "number"]
      }
    ];
    i({ args: r });
    const { get: o, cacheUrl: s, getUrl: c } = g();
    return s({ endpointName: n, params: e }), t ? o() : c();
  } catch (r) {
    return l(r);
  }
}, F = async (e, t = !0) => {
  const n = "GetCanadianVehicleSpecifications";
  try {
    const r = [
      { name: "params", value: e, required: !0, types: ["object"] },
      {
        name: "year",
        value: e.year,
        required: !0,
        types: ["string", "number"]
      },
      { name: "make", value: e.make, types: ["string"] },
      { name: "model", value: e.model, types: ["string"] },
      { name: "units", value: e.units, types: ["string"] }
    ];
    i({ args: r });
    const { get: o, cacheUrl: s, getUrl: c } = g();
    return s({
      endpointName: n,
      params: {
        make: "",
        model: "",
        units: "",
        ...e
      },
      allowEmptyParams: !0
    }), t ? o() : c();
  } catch (r) {
    return l(r);
  }
}, R = async (e, t = !0) => {
  const n = "GetEquipmentPlantCodes";
  try {
    const r = [
      { name: "params", value: e, required: !0, types: ["object"] },
      {
        name: "year",
        value: e.year,
        required: !0,
        types: ["string", "number"]
      },
      {
        name: "equipmentType",
        value: e.equipmentType,
        required: !0,
        types: ["string", "number"]
      },
      {
        name: "reportType",
        value: e.reportType,
        required: !0,
        types: ["string"]
      }
    ];
    i({ args: r });
    const { get: o, cacheUrl: s, getUrl: c } = g();
    return s({ endpointName: n, params: e }), t ? o() : c();
  } catch (r) {
    return l(r);
  }
}, O = async (e, t = !0) => {
  const n = "GetMakeForManufacturer";
  try {
    i({ args: [
      {
        name: "manufacturer",
        value: e,
        required: !0,
        types: ["string", "number"]
      }
    ] });
    const { get: o, cacheUrl: s, getUrl: c } = g();
    return s({ endpointName: n, path: e.toString() }), t ? o() : c();
  } catch (r) {
    return l(r);
  }
}, _ = async (e, t, n = !0) => {
  const r = "GetMakesForManufacturerAndYear";
  try {
    const o = [
      {
        name: "manufacturer",
        value: e,
        required: !0,
        types: ["string", "number"]
      },
      { name: "params", value: t, required: !0, types: ["object"] },
      {
        name: "year",
        value: t.year,
        required: !0,
        types: ["string", "number"]
      }
    ];
    i({ args: o });
    const { get: s, cacheUrl: c, getUrl: a } = g();
    return c({
      endpointName: r,
      path: e.toString(),
      params: t
    }), n ? s() : a();
  } catch (o) {
    return l(o);
  }
}, C = async (e, t = !0) => {
  const n = "GetMakesForVehicleType";
  try {
    i({ args: [
      {
        name: "typeName",
        value: e,
        required: !0,
        types: ["string"]
      }
    ] });
    const { get: o, cacheUrl: s, getUrl: c } = g();
    return s({ endpointName: n, path: e }), t ? o() : c();
  } catch (r) {
    return l(r);
  }
}, x = async (e, t = !0) => {
  const n = "GetManufacturerDetails";
  try {
    i({ args: [
      {
        name: "manufacturer",
        value: e,
        required: !0,
        types: ["string", "number"]
      }
    ] });
    const { get: o, cacheUrl: s, getUrl: c } = g();
    return s({ endpointName: n, path: e.toString() }), t ? o() : c();
  } catch (r) {
    return l(r);
  }
}, W = async (e, t = !0) => {
  const n = "GetModelsForMake";
  try {
    i({ args: [
      {
        name: "makeName",
        value: e,
        required: !0,
        types: ["string"]
      }
    ] });
    const { get: o, cacheUrl: s, getUrl: c } = g();
    return s({ endpointName: n, path: e }), t ? o() : c();
  } catch (r) {
    return l(r);
  }
}, B = async (e, t = !0) => {
  const n = "GetModelsForMakeId";
  try {
    i({ args: [
      {
        name: "makeId",
        value: e,
        required: !0,
        types: ["string", "number"]
      }
    ] });
    const { get: o, cacheUrl: s, getUrl: c } = g();
    return s({ endpointName: n, path: e.toString() }), t ? o() : c();
  } catch (r) {
    return l(r);
  }
}, H = async (e, t = !0) => {
  const n = "GetModelsForMakeIdYear";
  try {
    const r = [
      {
        name: "modelYear",
        value: e.modelYear,
        types: ["string", "number"]
      },
      {
        name: "vehicleType",
        value: e.vehicleType,
        types: ["string"]
      }
    ], o = [
      { name: "params", value: e, required: !0, types: ["object"] },
      {
        name: "makeId",
        value: e.makeId,
        required: !0,
        types: ["string"]
      },
      ...r
    ];
    i({ args: o }), i({ args: r, mode: "atLeast" });
    const { makeId: s, modelYear: c, vehicleType: a } = b(e);
    let u = `/make/${s}/`;
    u += c ? `modelYear/${c}` : "", u += a ? `${c ? "/" : ""}vehicleType/${a}/` : "";
    const { get: y, cacheUrl: d, getUrl: h } = g();
    return d({ endpointName: n, path: u }), t ? y() : h();
  } catch (r) {
    return l(r);
  }
}, J = async (e, t = !0) => {
  const n = "GetModelsForMakeYear";
  try {
    const r = [
      {
        name: "modelYear",
        value: e.modelYear,
        types: ["string", "number"]
      },
      {
        name: "vehicleType",
        value: e.vehicleType,
        types: ["string"]
      }
    ], o = [
      { name: "params", value: e, required: !0, types: ["object"] },
      { name: "make", value: e.make, required: !0, types: ["string"] },
      ...r
    ];
    i({ args: o }), i({ args: r, mode: "atLeast" });
    const { make: s, modelYear: c, vehicleType: a } = b(e);
    let u = `/make/${s}/`;
    u += c ? `modelYear/${c}` : "", u += a ? `${c ? "/" : ""}vehicleType/${a}/` : "";
    const { get: y, cacheUrl: d, getUrl: h } = g();
    return d({ endpointName: n, path: u }), t ? y() : h();
  } catch (r) {
    return l(r);
  }
}, Q = async (e, t = !0) => {
  const n = "GetParts";
  typeof e == "boolean" && (t = e, e = void 0);
  try {
    const r = [
      { name: "params", value: e, types: ["object"] },
      { name: "type", value: e == null ? void 0 : e.type, types: ["string", "number"] },
      { name: "fromDate", value: e == null ? void 0 : e.fromDate, types: ["string"] },
      { name: "toDate", value: e == null ? void 0 : e.toDate, types: ["string"] },
      { name: "page", value: e == null ? void 0 : e.page, types: ["string", "number"] }
    ];
    i({ args: r });
    const { get: o, cacheUrl: s, getUrl: c } = g();
    return s({ endpointName: n, params: e }), t ? o() : c();
  } catch (r) {
    return l(r);
  }
}, X = async (e, t = !0) => {
  const n = "GetVehicleTypesForMake";
  try {
    i({ args: [
      {
        name: "makeName",
        value: e,
        required: !0,
        types: ["string"]
      }
    ] });
    const { get: o, cacheUrl: s, getUrl: c } = g();
    return s({ endpointName: n, path: e }), t ? o() : c();
  } catch (r) {
    return l(r);
  }
}, K = async (e, t = !0) => {
  const n = "GetVehicleTypesForMakeId";
  try {
    i({ args: [
      {
        name: "makeId",
        value: e,
        required: !0,
        types: ["string", "number"]
      }
    ] });
    const { get: o, cacheUrl: s, getUrl: c } = g();
    return s({ endpointName: n, path: e.toString() }), t ? o() : c();
  } catch (r) {
    return l(r);
  }
}, Z = async (e = !0) => {
  const t = "GetVehicleVariableList";
  try {
    const { get: n, cacheUrl: r, getUrl: o } = g();
    return r({ endpointName: t }), e ? n() : o();
  } catch (n) {
    return l(n);
  }
}, z = async (e, t = !0) => {
  const n = "GetVehicleVariableValuesList";
  try {
    i({ args: [
      {
        name: "variableValue",
        value: e,
        required: !0,
        types: ["string", "number"]
      }
    ] });
    const { get: o, cacheUrl: s, getUrl: c } = g();
    return s({ endpointName: n, path: e.toString() }), t ? o() : c();
  } catch (r) {
    return l(r);
  }
}, ee = async (e, t = !0) => {
  const n = "GetWMIsForManufacturer";
  try {
    const r = [
      {
        name: "manufacturer",
        value: e == null ? void 0 : e.manufacturer,
        types: ["string", "number"]
      },
      {
        name: "vehicleType",
        value: e == null ? void 0 : e.vehicleType,
        types: ["string", "number"]
      }
    ], o = [
      { name: "params", value: e, required: !0, types: ["object"] },
      ...r
    ];
    i({ args: o }), i({ args: r, mode: "atLeast" });
    const s = e != null && e.manufacturer ? encodeURIComponent(e.manufacturer) : "", c = (e == null ? void 0 : e.vehicleType) || "", { get: a, cacheUrl: u, getUrl: y } = g();
    return u({ endpointName: n, path: s, params: { vehicleType: c } }), t ? a() : y();
  } catch (r) {
    return l(r);
  }
}, g = () => {
  let e;
  const t = () => e, n = (a) => encodeURI(`DATA=${a}&format=${V}`), r = ({
    endpointName: a,
    allowEmptyParams: u = !1,
    includeQueryString: y = !0,
    path: d = "",
    params: h,
    saveUrl: v = !0
  }) => {
    if (!a)
      throw Error("Endpoint name is required to create URL string");
    const U = y ? j(h, u) : "", m = encodeURI(
      `${N}/${a}/${d}${U}`
    );
    return v && (e = m), m;
  }, o = (a) => r({ ...a, saveUrl: !1 }), s = async (a, u = { saveUrl: !0 }) => (a && f(a) === "object" && (a = r({ ...a, saveUrl: u.saveUrl })), a = f(a) === "string" ? a : t(), i({
    args: [
      {
        name: "url",
        value: a,
        required: !0,
        types: ["string"]
      },
      {
        name: "options",
        value: u,
        types: ["object"]
      }
    ]
  }), u.saveUrl && (e = a), await fetch(a, u).then(async (d) => {
    if (!d)
      throw Error(
        "APi responded with an error, no response object returned"
      );
    const h = d.headers.get("content-type"), v = `content-type: ${h},responseStatus: ${d.status},responseUrl: ${d.url}`;
    if (!d.ok)
      throw Error(`APi responded with an error, got ${v}`);
    if (!["application/json", "text/json"].some((q) => h == null ? void 0 : h.includes(q)))
      throw Error(
        `API response is not in JSON format, got ${v}`
      );
    const M = await d.json();
    if (M)
      return M;
    throw Error(
      `API response OK but returned no data, got ${v}`
    );
  }).catch((d) => (d.message = `There was an error fetching API data: ${d.message}`, l(d))));
  return {
    getUrl: t,
    cacheUrl: r,
    createUrl: o,
    createPostBody: n,
    get: s,
    post: async (a, u = { saveUrl: !0 }) => (a && f(a) === "object" && (a = r({
      ...a,
      saveUrl: u.saveUrl,
      includeQueryString: !1
    })), a = f(a) === "string" ? a : t(), i({
      args: [
        {
          name: "url",
          value: a,
          required: !0,
          types: ["string"]
        },
        {
          name: "options",
          value: u,
          types: ["object"]
        },
        {
          name: "options.body",
          value: u.body,
          types: ["string"]
        }
      ]
    }), await s(a, {
      ...u,
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: n(u.body)
    }))
  };
};
export {
  E as DecodeVin,
  I as DecodeVinExtended,
  S as DecodeVinValues,
  w as DecodeVinValuesBatch,
  Y as DecodeVinValuesExtended,
  D as DecodeWMI,
  L as GetAllMakes,
  P as GetAllManufacturers,
  F as GetCanadianVehicleSpecifications,
  R as GetEquipmentPlantCodes,
  O as GetMakeForManufacturer,
  _ as GetMakesForManufacturerAndYear,
  C as GetMakesForVehicleType,
  x as GetManufacturerDetails,
  W as GetModelsForMake,
  B as GetModelsForMakeId,
  H as GetModelsForMakeIdYear,
  J as GetModelsForMakeYear,
  Q as GetParts,
  X as GetVehicleTypesForMake,
  K as GetVehicleTypesForMakeId,
  Z as GetVehicleVariableList,
  z as GetVehicleVariableValuesList,
  ee as GetWMIsForManufacturer,
  A as isValidVin,
  g as useNHTSA
};
//# sourceMappingURL=nhtsa-api-wrapper.mjs.map
