const s = ({
  args: e,
  mode: r = "default"
}) => {
  if (g(e) !== "array" && !e.length)
    throw Error(
      'catchInvalidArguments requires "args" that must be an array of IArgToValidate objects'
    );
  if (r === "default")
    e.forEach((t) => {
      f(t);
    });
  else if (r === "atLeast" && !e.find((n) => !!n.value))
    throw Error(
      `must provide at least one of the following arguments: ${e.map((n) => n.name).join(", ")}`
    );
}, f = ({
  name: e,
  value: r,
  required: t,
  types: n,
  errorMode: l = "error"
}) => {
  if (g(e) !== "string")
    throw Error("'name', is required and must be of type string");
  let a = "";
  const d = g(r), o = `error validating argument named "${e}",`, i = `received value: ${r} - of type: <${d}>`;
  if (n && g(n) !== "array" && !n.length)
    throw Error(`${o} 'types' must be an array of strings`);
  const m = n ? `<${n.join(" | ")}>` : "";
  if (t && !n ? r || (a = `${o} is required, ${i}`) : n && !t ? r !== void 0 && !n.includes(d) && (a = `${o} must be of type(s) ${m}, ${i}`) : t && n && (!r || !n.includes(d)) && (a = `${o} is required and must be of type(s) ${m}, ${i}`), a.length) {
    if (l === "boolean")
      return !1;
    throw Error(a);
  }
  return !0;
}, V = (e) => g(e) === "error", $ = (e) => {
  let r = "an unknown error occurred.";
  return V(e) ? e : (g(e) === "string" && (r = e), Error(r));
}, c = async (e) => (V(e) || (e = $(e)), Promise.reject(e)), g = (e) => {
  const r = Object.prototype.toString.call(e).toLowerCase();
  return r.slice(8, r.length - 1);
}, k = {
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
}, N = [
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
function E(e) {
  if (typeof e != "string" || e.length != 17)
    return !1;
  e = e.toUpperCase();
  const r = e.split(""), t = r[8];
  if (isNaN(parseInt(t)) && t !== "X")
    return !1;
  const n = t === "X" ? 10 : parseInt(t);
  return r.map((a, d) => {
    let o;
    isNaN(parseInt(a)) ? o = k[a] : o = parseInt(a);
    const i = N[d];
    return o * i;
  }).reduce((a, d) => a + d, 0) % 11 === n;
}
const j = "https://vpic.nhtsa.dot.gov/api/vehicles", q = "json", A = (e = {}, r = !1) => {
  f({
    name: "params",
    value: e,
    types: ["object"]
  });
  const t = b({
    ...e,
    format: q
  });
  return "?" + Object.entries(t).map(([n, l], a, d) => l.length || r && l === "" ? `${n}=${l}${a < d.length - 1 ? "&" : ""}` : "").join("");
}, b = (e) => Object.entries(e).filter(
  ([t, n]) => f({
    name: t,
    types: ["string", "number", "boolean"],
    value: n,
    errorMode: "boolean"
  })
).reduce((t, [n, l]) => (t[n] = encodeURIComponent(l), t), {}), I = async (e, r) => {
  const t = "DecodeVin";
  try {
    const n = [
      { name: "vin", value: e, required: !0, types: ["string"] },
      { name: "params", value: r, types: ["object"] },
      {
        name: "modelYear",
        value: r == null ? void 0 : r.modelYear,
        types: ["string", "number"]
      }
    ];
    return s({ args: n }), u().get({ endpointName: t, path: e, params: r });
  } catch (n) {
    return c(n);
  }
}, S = async (e, r) => {
  const t = "DecodeVinExtended";
  try {
    const n = [
      { name: "vin", value: e, required: !0, types: ["string"] },
      { name: "params", value: r, types: ["object"] },
      {
        name: "modelYear",
        value: r == null ? void 0 : r.modelYear,
        types: ["string", "number"]
      }
    ];
    return s({ args: n }), u().get({ endpointName: t, path: e, params: r });
  } catch (n) {
    return c(n);
  }
}, w = async (e, r) => {
  const t = "DecodeVinValues";
  try {
    const n = [
      { name: "vin", value: e, required: !0, types: ["string"] },
      { name: "params", value: r, types: ["object"] },
      {
        name: "modelYear",
        value: r == null ? void 0 : r.modelYear,
        types: ["string", "number"]
      }
    ];
    return s({ args: n }), u().get({ endpointName: t, path: e, params: r });
  } catch (n) {
    return c(n);
  }
}, Y = async (e) => {
  const r = "DecodeVinValuesBatch";
  try {
    return s({ args: [
      {
        name: "inputString",
        value: e,
        required: !0,
        types: ["string"]
      }
    ] }), u().post({ endpointName: r }, { body: e });
  } catch (t) {
    return c(t);
  }
}, D = async (e, r) => {
  const t = "DecodeVinValuesExtended";
  try {
    const n = [
      { name: "vin", value: e, required: !0, types: ["string"] },
      { name: "params", value: r, types: ["object"] },
      {
        name: "modelYear",
        value: r == null ? void 0 : r.modelYear,
        types: ["string", "number"]
      }
    ];
    return s({ args: n }), u().get({ endpointName: t, path: e, params: r });
  } catch (n) {
    return c(n);
  }
}, F = async (e) => {
  const r = "DecodeWMI";
  try {
    return s({ args: [
      {
        name: "WMI",
        value: e,
        required: !0,
        types: ["string"]
      }
    ] }), u().get({ endpointName: r, path: e });
  } catch (t) {
    return c(t);
  }
}, U = async () => {
  const e = "GetAllMakes";
  try {
    return u().get({ endpointName: e });
  } catch (r) {
    return c(r);
  }
}, L = async (e) => {
  const r = "GetAllManufacturers";
  try {
    const t = [
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
    return s({ args: t }), u().get({ endpointName: r, params: e });
  } catch (t) {
    return c(t);
  }
}, P = async (e) => {
  const r = "GetCanadianVehicleSpecifications";
  try {
    const t = [
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
    return s({ args: t }), u().get({
      endpointName: r,
      params: {
        make: "",
        model: "",
        units: "",
        ...e
      },
      allowEmptyParams: !0
    });
  } catch (t) {
    return c(t);
  }
}, R = async (e) => {
  const r = "GetEquipmentPlantCodes";
  try {
    const t = [
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
    return s({ args: t }), u().get({ endpointName: r, params: e });
  } catch (t) {
    return c(t);
  }
}, O = async (e) => {
  const r = "GetMakeForManufacturer";
  try {
    return s({ args: [
      {
        name: "manufacturer",
        value: e,
        required: !0,
        types: ["string", "number"]
      }
    ] }), u().get({ endpointName: r, path: e.toString() });
  } catch (t) {
    return c(t);
  }
}, _ = async (e, r) => {
  const t = "GetMakesForManufacturerAndYear";
  try {
    const n = [
      {
        name: "manufacturer",
        value: e,
        required: !0,
        types: ["string", "number"]
      },
      { name: "params", value: r, required: !0, types: ["object"] },
      {
        name: "year",
        value: r.year,
        required: !0,
        types: ["string", "number"]
      }
    ];
    return s({ args: n }), u().get({
      endpointName: t,
      path: e.toString(),
      params: r
    });
  } catch (n) {
    return c(n);
  }
}, C = async (e) => {
  const r = "GetMakesForVehicleType";
  try {
    return s({ args: [
      {
        name: "typeName",
        value: e,
        required: !0,
        types: ["string"]
      }
    ] }), u().get({ endpointName: r, path: e });
  } catch (t) {
    return c(t);
  }
}, x = async (e) => {
  const r = "GetManufacturerDetails";
  try {
    return s({ args: [
      {
        name: "manufacturer",
        value: e,
        required: !0,
        types: ["string", "number"]
      }
    ] }), u().get({ endpointName: r, path: e.toString() });
  } catch (t) {
    return c(t);
  }
}, W = async (e) => {
  const r = "GetModelsForMake";
  try {
    return s({ args: [
      {
        name: "makeName",
        value: e,
        required: !0,
        types: ["string"]
      }
    ] }), u().get({ endpointName: r, path: e });
  } catch (t) {
    return c(t);
  }
}, B = async (e) => {
  const r = "GetModelsForMakeId";
  try {
    return s({ args: [
      {
        name: "makeId",
        value: e,
        required: !0,
        types: ["string", "number"]
      }
    ] }), u().get({ endpointName: r, path: e.toString() });
  } catch (t) {
    return c(t);
  }
}, H = async (e) => {
  const r = "GetModelsForMakeIdYear";
  try {
    const t = [
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
    ], n = [
      { name: "params", value: e, required: !0, types: ["object"] },
      {
        name: "makeId",
        value: e.makeId,
        required: !0,
        types: ["string"]
      },
      ...t
    ];
    s({ args: n }), s({ args: t, mode: "atLeast" });
    const { makeId: l, modelYear: a, vehicleType: d } = b(e);
    let o = `/make/${l}/`;
    return o += a ? `modelYear/${a}` : "", o += d ? `${a ? "/" : ""}vehicleType/${d}/` : "", u().get({ endpointName: r, path: o });
  } catch (t) {
    return c(t);
  }
}, J = async (e) => {
  const r = "GetModelsForMakeYear";
  try {
    const t = [
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
    ], n = [
      { name: "params", value: e, required: !0, types: ["object"] },
      { name: "make", value: e.make, required: !0, types: ["string"] },
      ...t
    ];
    s({ args: n }), s({ args: t, mode: "atLeast" });
    const { make: l, modelYear: a, vehicleType: d } = b(e);
    let o = `/make/${l}/`;
    return o += a ? `modelYear/${a}` : "", o += d ? `${a ? "/" : ""}vehicleType/${d}/` : "", u().get({ endpointName: r, path: o });
  } catch (t) {
    return c(t);
  }
}, Q = async (e) => {
  const r = "GetParts";
  try {
    const t = [
      { name: "params", value: e, types: ["object"] },
      { name: "type", value: e == null ? void 0 : e.type, types: ["string", "number"] },
      { name: "fromDate", value: e == null ? void 0 : e.fromDate, types: ["string"] },
      { name: "toDate", value: e == null ? void 0 : e.toDate, types: ["string"] },
      { name: "page", value: e == null ? void 0 : e.page, types: ["string", "number"] }
    ];
    return s({ args: t }), u().get({ endpointName: r, params: e });
  } catch (t) {
    return c(t);
  }
}, X = async (e) => {
  const r = "GetVehicleTypesForMake";
  try {
    return s({ args: [
      {
        name: "makeName",
        value: e,
        required: !0,
        types: ["string"]
      }
    ] }), u().get({ endpointName: r, path: e });
  } catch (t) {
    return c(t);
  }
}, K = async (e) => {
  const r = "GetVehicleTypesForMakeId";
  try {
    return s({ args: [
      {
        name: "makeId",
        value: e,
        required: !0,
        types: ["string", "number"]
      }
    ] }), u().get({ endpointName: r, path: e.toString() });
  } catch (t) {
    return c(t);
  }
}, Z = async () => {
  const e = "GetVehicleVariableList";
  try {
    return u().get({ endpointName: e });
  } catch (r) {
    return c(r);
  }
}, z = async (e) => {
  const r = "GetVehicleVariableValuesList";
  try {
    return s({ args: [
      {
        name: "variableValue",
        value: e,
        required: !0,
        types: ["string", "number"]
      }
    ] }), u().get({ endpointName: r, path: e.toString() });
  } catch (t) {
    return c(t);
  }
}, ee = async (e) => {
  const r = "GetWMIsForManufacturer";
  try {
    const t = [
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
    ], n = [
      { name: "params", value: e, required: !0, types: ["object"] },
      ...t
    ];
    s({ args: n }), s({ args: t, mode: "atLeast" });
    const l = e != null && e.manufacturer ? encodeURIComponent(e.manufacturer) : "", a = (e == null ? void 0 : e.vehicleType) || "";
    return u().get({
      endpointName: r,
      path: l,
      params: { vehicleType: a }
    });
  } catch (t) {
    return c(t);
  }
}, u = () => {
  let e;
  const r = () => e, t = (o) => encodeURI(`DATA=${o}&format=${q}`), n = ({
    endpointName: o,
    allowEmptyParams: i = !1,
    includeQueryString: m = !0,
    path: y = "",
    params: h,
    saveUrl: p = !0
  }) => {
    if (!o)
      throw Error("Endpoint name is required to create URL string");
    const M = m ? A(h, i) : "", v = encodeURI(
      `${j}/${o}/${y}${M}`
    );
    return p && (e = v), v;
  }, l = (o) => n({ ...o, saveUrl: !1 }), a = async (o, i = { saveUrl: !0 }) => (o && g(o) === "object" && (o = n({ ...o, saveUrl: i.saveUrl })), o = g(o) === "string" ? o : r(), s({
    args: [
      {
        name: "url",
        value: o,
        required: !0,
        types: ["string"]
      },
      {
        name: "options",
        value: i,
        types: ["object"]
      }
    ]
  }), i.saveUrl && (e = o), await fetch(o, i).then(async (y) => {
    if (!y)
      throw Error(
        "APi responded with an error, no response object returned"
      );
    const h = y.headers.get("content-type"), p = `content-type: ${h},responseStatus: ${y.status},responseUrl: ${y.url}`;
    if (!y.ok)
      throw Error(`APi responded with an error, got ${p}`);
    if (!["application/json", "text/json"].some((G) => h == null ? void 0 : h.includes(G)))
      throw Error(
        `API response is not in JSON format, got ${p}`
      );
    const T = await y.json();
    if (T)
      return T;
    throw Error(
      `API response OK but returned no data, got ${p}`
    );
  }).catch((y) => (y.message = `There was an error fetching API data: ${y.message}`, c(y))));
  return {
    getUrl: r,
    cacheUrl: n,
    createUrl: l,
    createPostBody: t,
    get: a,
    post: async (o, i = { saveUrl: !0 }) => (o && g(o) === "object" && (o = n({
      ...o,
      saveUrl: i.saveUrl,
      includeQueryString: !1
    })), o = g(o) === "string" ? o : r(), s({
      args: [
        {
          name: "url",
          value: o,
          required: !0,
          types: ["string"]
        },
        {
          name: "options",
          value: i,
          types: ["object"]
        },
        {
          name: "options.body",
          value: i.body,
          types: ["string"]
        }
      ]
    }), await a(o, {
      ...i,
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: t(i.body)
    }))
  };
};
export {
  I as DecodeVin,
  S as DecodeVinExtended,
  w as DecodeVinValues,
  Y as DecodeVinValuesBatch,
  D as DecodeVinValuesExtended,
  F as DecodeWMI,
  U as GetAllMakes,
  L as GetAllManufacturers,
  P as GetCanadianVehicleSpecifications,
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
  E as isValidVin,
  u as useNHTSA
};
//# sourceMappingURL=nhtsa-api-wrapper.mjs.map
