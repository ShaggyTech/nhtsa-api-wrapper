const a = ({
  args: e,
  mode: t = "default"
}) => {
  if (g(e) !== "array" && !e.length)
    throw Error(
      'catchInvalidArguments requires "args" that must be an array of IArgToValidate objects'
    );
  if (t === "default")
    e.forEach((r) => {
      f(r);
    });
  else if (t === "atLeast" && !e.find((n) => !!n.value))
    throw Error(
      `must provide at least one of the following arguments: ${e.map((n) => n.name).join(", ")}`
    );
}, f = ({
  name: e,
  value: t,
  required: r,
  types: n,
  errorMode: o = "error"
}) => {
  if (g(e) !== "string")
    throw Error("'name', is required and must be of type string");
  let c = "";
  const l = g(t), s = `error validating argument named "${e}",`, d = `received value: ${t} - of type: <${l}>`;
  if (n && g(n) !== "array" && !n.length)
    throw Error(`${s} 'types' must be an array of strings`);
  const y = n ? `<${n.join(" | ")}>` : "";
  if (r && !n ? t || (c = `${s} is required, ${d}`) : n && !r ? t !== void 0 && !n.includes(l) && (c = `${s} must be of type(s) ${y}, ${d}`) : r && n && (!t || !n.includes(l)) && (c = `${s} is required and must be of type(s) ${y}, ${d}`), c.length) {
    if (o === "boolean")
      return !1;
    throw Error(c);
  }
  return !0;
}, b = (e) => g(e) === "error", q = (e) => {
  let t = "an unknown error occurred.";
  return b(e) ? e : (g(e) === "string" && (t = e), Error(t));
}, u = async (e) => (b(e) || (e = q(e)), Promise.reject(e)), g = (e) => {
  const t = Object.prototype.toString.call(e).toLowerCase();
  return t.slice(8, t.length - 1);
}, T = {
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
}, $ = [
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
function U(e) {
  if (typeof e != "string" || e.length != 17)
    return !1;
  e = e.toUpperCase();
  const t = e.split(""), r = t[8];
  if (isNaN(parseInt(r)) && r !== "X")
    return !1;
  const n = r === "X" ? 10 : parseInt(r);
  return t.map((c, l) => {
    let s;
    isNaN(parseInt(c)) ? s = T[c] : s = parseInt(c);
    const d = $[l];
    return s * d;
  }).reduce((c, l) => c + l, 0) % 11 === n;
}
const G = "https://vpic.nhtsa.dot.gov/api/vehicles", M = "json", i = () => {
  let e;
  const t = ({
    endpointName: o,
    allowEmptyParams: c = !1,
    includeQueryString: l = !0,
    path: s = "",
    params: d,
    saveUrl: y = !0
  }) => {
    if (!o)
      throw Error("Endpoint name is required to create URL string");
    const m = l ? k(d, c) : "", h = encodeURI(
      `${G}/${o}/${s}${m}`
    );
    return y && (e = h), h;
  }, r = async (o, c = { saveUrl: !0 }) => (o = o ?? e, a({
    args: [
      {
        name: "url",
        value: o,
        required: !0,
        types: ["string"]
      },
      {
        name: "options",
        value: c,
        types: ["object"]
      }
    ]
  }), c.saveUrl && (e = o), await fetch(o, c).then(async (s) => {
    if (!s.ok)
      throw Error(`${s.status} ${s.url}`);
    const d = s.headers.get("content-type"), m = ["application/json", "text/json"].some((V) => d == null ? void 0 : d.includes(V)), h = `content-type: ${d},responseStatus: ${s.status},responseUrl: ${s.url}`;
    if (!m)
      throw Error(
        `API response is not in JSON format, got ${h}`
      );
    const v = await s.json();
    if (!v)
      throw Error(
        `API responded but returned no data, got ${h}`
      );
    return v;
  }).catch((s) => (s.message = `There was an error fetching API data: ${s.message}`, u(s))));
  return {
    createUrl: t,
    get: r,
    post: async (o, c = { saveUrl: !0 }) => (o = o ?? e, a({
      args: [
        {
          name: "url",
          value: o,
          required: !0,
          types: ["string"]
        },
        {
          name: "options",
          value: c,
          types: ["object"]
        },
        {
          name: "options.body",
          value: c,
          types: ["string"]
        }
      ]
    }), await r(o, {
      ...c,
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: encodeURI(`${c == null ? void 0 : c.body}&format=${M}`)
    }))
  };
}, k = (e, t = !1) => {
  const r = { format: M }, n = g(e) === "object" ? { ...e, ...r } : r;
  return "?" + Object.entries(p(n)).map(([c, l], s, d) => l.length || t && l === "" ? `${c}=${l}${s < d.length - 1 ? "&" : ""}` : "").join("");
}, p = (e) => Object.entries(e).filter(
  ([t, r]) => f({
    name: t,
    types: ["string", "number", "boolean"],
    value: r,
    errorMode: "boolean"
  })
).reduce((t, [r, n]) => (t[r] = encodeURIComponent(n), t), {}), N = async (e, t) => {
  const r = "DecodeVin";
  try {
    const n = [
      { name: "vin", value: e, required: !0, types: ["string"] },
      { name: "params", value: t, types: ["object"] },
      {
        name: "modelYear",
        value: t == null ? void 0 : t.modelYear,
        types: ["string", "number"]
      }
    ];
    a({ args: n });
    const { createUrl: o, get: c } = i();
    return o({ endpointName: r, path: e, params: t }), c();
  } catch (n) {
    return u(n);
  }
}, j = async (e, t) => {
  const r = "DecodeVinExtended";
  try {
    const n = [
      { name: "vin", value: e, required: !0, types: ["string"] },
      { name: "params", value: t, types: ["object"] },
      {
        name: "modelYear",
        value: t == null ? void 0 : t.modelYear,
        types: ["string", "number"]
      }
    ];
    a({ args: n });
    const { createUrl: o, get: c } = i();
    return o({ endpointName: r, path: e, params: t }), c();
  } catch (n) {
    return u(n);
  }
}, I = async (e, t) => {
  const r = "DecodeVinValues";
  try {
    const n = [
      { name: "vin", value: e, required: !0, types: ["string"] },
      { name: "params", value: t, types: ["object"] },
      {
        name: "modelYear",
        value: t == null ? void 0 : t.modelYear,
        types: ["string", "number"]
      }
    ];
    a({ args: n });
    const { createUrl: o, get: c } = i();
    return o({ endpointName: r, path: e, params: t }), await c();
  } catch (n) {
    return u(n);
  }
}, A = async (e) => {
  const t = "DecodeVinValuesBatch";
  try {
    a({ args: [
      {
        name: "inputString",
        value: e,
        required: !0,
        types: ["string"]
      }
    ] });
    const n = `DATA=${e}`, { createUrl: o, post: c } = i();
    return o({ endpointName: t, includeQueryString: !1 }), c(void 0, { body: n });
  } catch (r) {
    return u(r);
  }
}, E = async (e, t) => {
  const r = "DecodeVinValuesExtended";
  try {
    const n = [
      { name: "vin", value: e, required: !0, types: ["string"] },
      { name: "params", value: t, types: ["object"] },
      {
        name: "modelYear",
        value: t == null ? void 0 : t.modelYear,
        types: ["string", "number"]
      }
    ];
    a({ args: n });
    const { createUrl: o, get: c } = i();
    return o({ endpointName: r, path: e, params: t }), await c();
  } catch (n) {
    return u(n);
  }
}, S = async (e) => {
  const t = "DecodeWMI";
  try {
    a({ args: [
      {
        name: "WMI",
        value: e,
        required: !0,
        types: ["string"]
      }
    ] });
    const { createUrl: n, get: o } = i();
    return n({ endpointName: t, path: e }), o();
  } catch (r) {
    return u(r);
  }
}, Y = async () => {
  const e = "GetAllMakes";
  try {
    const { createUrl: t, get: r } = i();
    return t({ endpointName: e }), r();
  } catch (t) {
    return u(t);
  }
}, w = async (e) => {
  const t = "GetAllManufacturers";
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
    a({ args: r });
    const { createUrl: n, get: o } = i();
    return n({ endpointName: t, params: e }), o();
  } catch (r) {
    return u(r);
  }
}, F = async (e) => {
  const t = "GetCanadianVehicleSpecifications";
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
    a({ args: r });
    const { createUrl: n, get: o } = i();
    return n({
      endpointName: t,
      params: {
        make: "",
        model: "",
        units: "",
        ...e
      },
      allowEmptyParams: !0
    }), o();
  } catch (r) {
    return u(r);
  }
}, D = async (e) => {
  const t = "GetEquipmentPlantCodes";
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
    a({ args: r });
    const { createUrl: n, get: o } = i();
    return n({
      endpointName: t,
      params: e
    }), o();
  } catch (r) {
    return u(r);
  }
}, L = async (e) => {
  const t = "GetMakeForManufacturer";
  try {
    a({ args: [
      {
        name: "manufacturer",
        value: e,
        required: !0,
        types: ["string", "number"]
      }
    ] });
    const { createUrl: n, get: o } = i();
    return n({
      endpointName: t,
      path: e.toString()
    }), o();
  } catch (r) {
    return u(r);
  }
}, P = async (e, t) => {
  const r = "GetMakesForManufacturerAndYear";
  try {
    const n = [
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
    a({ args: n });
    const { createUrl: o, get: c } = i();
    return o({
      endpointName: r,
      path: e.toString(),
      params: t
    }), c();
  } catch (n) {
    return u(n);
  }
}, R = async (e) => {
  const t = "GetMakesForVehicleType";
  try {
    a({ args: [
      {
        name: "typeName",
        value: e,
        required: !0,
        types: ["string"]
      }
    ] });
    const { createUrl: n, get: o } = i();
    return n({
      endpointName: t,
      path: e
    }), o();
  } catch (r) {
    return u(r);
  }
}, O = async (e) => {
  const t = "GetManufacturerDetails";
  try {
    a({ args: [
      {
        name: "manufacturer",
        value: e,
        required: !0,
        types: ["string", "number"]
      }
    ] });
    const { createUrl: n, get: o } = i();
    return n({
      endpointName: t,
      path: e.toString()
    }), o();
  } catch (r) {
    return u(r);
  }
}, C = async (e) => {
  const t = "GetModelsForMake";
  try {
    a({ args: [
      {
        name: "makeName",
        value: e,
        required: !0,
        types: ["string"]
      }
    ] });
    const { createUrl: n, get: o } = i();
    return n({
      endpointName: t,
      path: e
    }), o();
  } catch (r) {
    return u(r);
  }
}, _ = async (e) => {
  const t = "GetModelsForMakeId";
  try {
    a({ args: [
      {
        name: "makeId",
        value: e,
        required: !0,
        types: ["string", "number"]
      }
    ] });
    const { createUrl: n, get: o } = i();
    return n({
      endpointName: t,
      path: e.toString()
    }), o();
  } catch (r) {
    return u(r);
  }
}, x = async (e) => {
  const t = "GetModelsForMakeIdYear";
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
    ], n = [
      { name: "params", value: e, required: !0, types: ["object"] },
      {
        name: "makeId",
        value: e.makeId,
        required: !0,
        types: ["string"]
      },
      ...r
    ];
    a({ args: n }), a({ args: r, mode: "atLeast" });
    const { makeId: o, modelYear: c, vehicleType: l } = p(e);
    let s = `/make/${o}/`;
    s += c ? `modelYear/${c}` : "", s += l ? `${c ? "/" : ""}vehicleType/${l}/` : "";
    const { createUrl: d, get: y } = i();
    return d({
      endpointName: t,
      path: s
    }), y();
  } catch (r) {
    return u(r);
  }
}, W = async (e) => {
  const t = "GetModelsForMakeYear";
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
    ], n = [
      { name: "params", value: e, required: !0, types: ["object"] },
      { name: "make", value: e.make, required: !0, types: ["string"] },
      ...r
    ];
    a({ args: n }), a({ args: r, mode: "atLeast" });
    const { make: o, modelYear: c, vehicleType: l } = p(e);
    let s = `/make/${o}/`;
    s += c ? `modelYear/${c}` : "", s += l ? `${c ? "/" : ""}vehicleType/${l}/` : "";
    const { createUrl: d, get: y } = i();
    return d({
      endpointName: t,
      path: s
    }), y();
  } catch (r) {
    return u(r);
  }
}, B = async (e) => {
  const t = "GetParts";
  try {
    const r = [
      { name: "params", value: e, types: ["object"] },
      { name: "type", value: e == null ? void 0 : e.type, types: ["string", "number"] },
      { name: "fromDate", value: e == null ? void 0 : e.fromDate, types: ["string"] },
      { name: "toDate", value: e == null ? void 0 : e.toDate, types: ["string"] },
      { name: "page", value: e == null ? void 0 : e.page, types: ["string", "number"] }
    ];
    a({ args: r });
    const { createUrl: n, get: o } = i();
    return n({
      endpointName: t,
      params: e
    }), o();
  } catch (r) {
    return u(r);
  }
}, H = async (e) => {
  const t = "GetVehicleTypesForMake";
  try {
    a({ args: [
      {
        name: "makeName",
        value: e,
        required: !0,
        types: ["string"]
      }
    ] });
    const { createUrl: n, get: o } = i();
    return n({
      endpointName: t,
      path: e
    }), o();
  } catch (r) {
    return u(r);
  }
}, J = async (e) => {
  const t = "GetVehicleTypesForMakeId";
  try {
    a({ args: [
      {
        name: "makeId",
        value: e,
        required: !0,
        types: ["string", "number"]
      }
    ] });
    const { createUrl: n, get: o } = i();
    return n({
      endpointName: t,
      path: e.toString()
    }), o();
  } catch (r) {
    return u(r);
  }
}, Q = async () => {
  const e = "GetVehicleVariableList";
  try {
    const { createUrl: t, get: r } = i();
    return t({
      endpointName: e
    }), r();
  } catch (t) {
    return u(t);
  }
}, X = async (e) => {
  const t = "GetVehicleVariableValuesList";
  try {
    a({ args: [
      {
        name: "variableValue",
        value: e,
        required: !0,
        types: ["string", "number"]
      }
    ] });
    const { createUrl: n, get: o } = i();
    return n({
      endpointName: t,
      path: e.toString()
    }), o();
  } catch (r) {
    return u(r);
  }
}, K = async (e) => {
  const t = "GetWMIsForManufacturer";
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
    ], n = [
      { name: "params", value: e, required: !0, types: ["object"] },
      ...r
    ];
    a({ args: n }), a({ args: r, mode: "atLeast" });
    const o = e != null && e.manufacturer ? encodeURIComponent(e.manufacturer) : "", c = (e == null ? void 0 : e.vehicleType) || "", { createUrl: l, get: s } = i();
    return l({
      endpointName: t,
      path: o,
      params: { vehicleType: c }
    }), s();
  } catch (r) {
    return u(r);
  }
};
export {
  N as DecodeVin,
  j as DecodeVinExtended,
  I as DecodeVinValues,
  A as DecodeVinValuesBatch,
  E as DecodeVinValuesExtended,
  S as DecodeWMI,
  Y as GetAllMakes,
  w as GetAllManufacturers,
  F as GetCanadianVehicleSpecifications,
  D as GetEquipmentPlantCodes,
  L as GetMakeForManufacturer,
  P as GetMakesForManufacturerAndYear,
  R as GetMakesForVehicleType,
  O as GetManufacturerDetails,
  C as GetModelsForMake,
  _ as GetModelsForMakeId,
  x as GetModelsForMakeIdYear,
  W as GetModelsForMakeYear,
  B as GetParts,
  H as GetVehicleTypesForMake,
  J as GetVehicleTypesForMakeId,
  Q as GetVehicleVariableList,
  X as GetVehicleVariableValuesList,
  K as GetWMIsForManufacturer,
  U as isValidVin
};
//# sourceMappingURL=nhtsa-api-wrapper.mjs.map
