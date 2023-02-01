const a = ({
  args: e,
  mode: r = "default"
}) => {
  if ($(e) !== "array" && !e.length)
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
  mode: o = "error"
}) => {
  if ($(e) !== "string")
    throw Error("'name', is required and must be of type string");
  const s = $(r);
  let y = "";
  const c = `error validating argument named "${e}",`, d = `received value: ${r} - of type: <${s}>`;
  if (n && $(n) !== "array" && !n.length)
    throw Error(`${c} 'types' must be an array of strings`);
  const m = n ? `<${n.join(" | ")}>` : "";
  if (t && !n ? r || (y = `${c} is required, ${d}`) : n && !t ? r && !n.includes(s) && (y = `${c} must be of type(s) ${m}, ${d}`) : t && n && (!r || !n.includes(s)) && (y = `${c} is required and must be of type(s) ${m}, ${d}`), y.length) {
    if (o === "boolean")
      return !1;
    if (o === "error")
      throw Error(y);
  }
  return !0;
}, i = "https://vpic.nhtsa.dot.gov/api/vehicles", v = "json", g = (e, r = !1) => {
  const t = { format: v }, n = $(e) === "object" ? { ...e, ...t } : t;
  return "?" + Object.entries(h(n)).map(([s, y], c, d) => y.length || r && y === "" ? `${s}=${y}${c < d.length - 1 ? "&" : ""}` : "").join("");
}, h = (e) => Object.entries(e).filter(
  ([r, t]) => f({
    name: r,
    types: ["string", "number", "boolean"],
    value: t,
    mode: "boolean"
  })
).reduce((r, [t, n]) => (r[t] = encodeURIComponent(n), r), {}), p = (e) => $(e) === "error", b = (e) => {
  let r = "an unknown error occurred.";
  return p(e) ? e : ($(e) === "string" && (r = e), Error(r));
}, u = async (e) => (p(e) || (e = b(e)), Promise.reject(e)), $ = (e) => {
  const r = Object.prototype.toString.call(e).toLowerCase();
  return r.slice(8, r.length - 1);
}, M = {
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
}, w = [
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
function S(e) {
  if (typeof e != "string" || e.length != 17)
    return !1;
  e = e.toUpperCase();
  const r = e.split(""), t = r[8];
  if (isNaN(parseInt(t)) && t !== "X")
    return !1;
  const n = t === "X" ? 10 : parseInt(t);
  return r.map((s, y) => {
    let c;
    isNaN(parseInt(s)) ? c = M[s] : c = parseInt(s);
    const d = w[y];
    return c * d;
  }).reduce((s, y) => s + y, 0) % 11 === n;
}
const l = () => {
  const e = async (t, n = {}) => await fetch(t, n).then(async (s) => {
    if (!s.ok)
      throw Error(`${s.status} ${s.url}`);
    const y = ["application/json", "text/json"], c = s.headers.get("content-type");
    if (!y.some((q) => c == null ? void 0 : c.includes(q)))
      throw Error(
        `API response is not in JSON format; got content-type: ${c}, responseStatus: ${s.status}}, responseUrl: ${s.url}`
      );
    const m = await s.json();
    if (!m)
      throw Error(
        `API responded but returned no data; got content-type: ${c}, responseStatus: ${s.status}}, responseUrl: ${s.url}`
      );
    return m;
  }).catch((s) => (s.message = `API error fetching data: ${s.message}`, u(s)));
  return {
    get: e,
    post: async (t, n = {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" }
    }) => await e(t, n)
  };
}, V = async (e, r) => {
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
    a({ args: n });
    const o = g(r), s = `${i}/${t}/${e}${o}`;
    return await l().get(s);
  } catch (n) {
    return u(n);
  }
}, G = async (e, r) => {
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
    a({ args: n });
    const o = g(r), s = `${i}/${t}/${e}${o}`;
    return await l().get(s);
  } catch (n) {
    return u(n);
  }
}, T = async (e, r) => {
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
    a({ args: n });
    const o = g(r), s = `${i}/${t}/${e}${o}`;
    return await l().get(s);
  } catch (n) {
    return u(n);
  }
}, k = async (e) => {
  const r = "DecodeVinValuesBatch";
  try {
    a({ args: [
      {
        name: "inputString",
        value: e,
        required: !0,
        types: ["string"]
      }
    ] });
    const n = `${i}/${r}/`, o = encodeURI(
      `DATA=${e}&format=${v}`
    );
    return await l().post(n, {
      body: o
    });
  } catch (t) {
    return u(t);
  }
}, N = async (e, r) => {
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
    a({ args: n });
    const o = g(r), s = `${i}/${t}/${e}${o}`;
    return await l().get(s);
  } catch (n) {
    return u(n);
  }
}, A = async (e) => {
  const r = "DecodeWMI";
  try {
    a({ args: [
      {
        name: "WMI",
        value: e,
        required: !0,
        types: ["string"]
      }
    ] });
    const n = g(), o = `${i}/${r}/${e}${n}`;
    return await l().get(o);
  } catch (t) {
    return u(t);
  }
}, I = async () => {
  const e = "GetAllMakes";
  try {
    const r = g(), t = `${i}/${e}${r}`;
    return await l().get(t);
  } catch (r) {
    return u(r);
  }
}, j = async (e) => {
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
    a({ args: t });
    const n = g(e), o = `${i}/${r}${n}`;
    return await l().get(o);
  } catch (t) {
    return u(t);
  }
}, E = async (e) => {
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
    a({ args: t });
    const n = g(
      {
        make: "",
        model: "",
        units: "",
        ...e
      },
      !0
    ), o = `${i}/${r}/${n}`;
    return await l().get(o);
  } catch (t) {
    return u(t);
  }
}, Y = async (e) => {
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
    a({ args: t });
    const n = g(e), o = `${i}/${r}${n}`;
    return await l().get(o);
  } catch (t) {
    return u(t);
  }
}, F = async (e) => {
  const r = "GetMakeForManufacturer";
  try {
    a({ args: [
      {
        name: "manufacturer",
        value: e,
        required: !0,
        types: ["string", "number"]
      }
    ] });
    const n = g(), o = `${i}/${r}/${e}${n}`;
    return await l().get(o);
  } catch (t) {
    return u(t);
  }
}, D = async (e, r) => {
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
    a({ args: n });
    const o = g(r), s = `${i}/${t}/${e}${o}`;
    return await l().get(s);
  } catch (n) {
    return u(n);
  }
}, L = async (e) => {
  const r = "GetMakesForVehicleType";
  try {
    a({ args: [
      {
        name: "typeName",
        value: e,
        required: !0,
        types: ["string"]
      }
    ] });
    const n = g(), o = `${i}/${r}/${e}${n}`;
    return await l().get(o);
  } catch (t) {
    return u(t);
  }
}, P = async (e) => {
  const r = "GetManufacturerDetails";
  try {
    a({ args: [
      {
        name: "manufacturer",
        value: e,
        required: !0,
        types: ["string", "number"]
      }
    ] });
    const n = g(), o = `${i}/${r}/${e}${n}`;
    return await l().get(o);
  } catch (t) {
    return u(t);
  }
}, R = async (e) => {
  const r = "GetModelsForMake";
  try {
    a({ args: [
      {
        name: "makeName",
        value: e,
        required: !0,
        types: ["string"]
      }
    ] });
    const n = g(), o = `${i}/${r}/${e}${n}`;
    return await l().get(o);
  } catch (t) {
    return u(t);
  }
}, O = async (e) => {
  const r = "GetModelsForMakeId";
  try {
    a({ args: [
      {
        name: "makeId",
        value: e,
        required: !0,
        types: ["string", "number"]
      }
    ] });
    const n = g(), o = `${i}/${r}/${e}${n}`;
    return await l().get(o);
  } catch (t) {
    return u(t);
  }
}, C = async (e) => {
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
    a({ args: n }), a({ args: t, mode: "atLeast" });
    const { makeId: o, modelYear: s, vehicleType: y } = h(e);
    let c = `${i}/${r}/make/${o}/`;
    return s && (c += `modelYear/${s}`), y && (c += `${s ? "/" : ""}vehicleType/${y}`), c += g(), await l().get(c);
  } catch (t) {
    return u(t);
  }
}, U = async (e) => {
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
    a({ args: n }), a({ args: t, mode: "atLeast" });
    const { make: o, modelYear: s, vehicleType: y } = h(e);
    let c = `${i}/${r}/make/${o}/`;
    return s && (c += `modelYear/${s}`), y && (c += `${s ? "/" : ""}vehicleType/${y}`), c += g(), await l().get(c);
  } catch (t) {
    return u(t);
  }
}, x = async (e) => {
  const r = "GetParts";
  try {
    const t = [
      { name: "params", value: e, types: ["object"] },
      { name: "type", value: e == null ? void 0 : e.type, types: ["string", "number"] },
      { name: "fromDate", value: e == null ? void 0 : e.fromDate, types: ["string"] },
      { name: "toDate", value: e == null ? void 0 : e.toDate, types: ["string"] },
      { name: "page", value: e == null ? void 0 : e.page, types: ["string", "number"] }
    ];
    a({ args: t });
    const n = g(e), o = `${i}/${r}${n}`;
    return await l().get(o);
  } catch (t) {
    return u(t);
  }
}, W = async (e) => {
  const r = "GetVehicleTypesForMake";
  try {
    a({ args: [
      {
        name: "makeName",
        value: e,
        required: !0,
        types: ["string"]
      }
    ] });
    const n = g(), o = `${i}/${r}/${e}${n}`;
    return await l().get(o);
  } catch (t) {
    return u(t);
  }
}, _ = async (e) => {
  const r = "GetVehicleTypesForMakeId";
  try {
    a({ args: [
      {
        name: "makeId",
        value: e,
        required: !0,
        types: ["string", "number"]
      }
    ] });
    const n = g(), o = `${i}/${r}/${e}${n}`;
    return await l().get(o);
  } catch (t) {
    return u(t);
  }
}, B = async () => {
  const e = "GetVehicleVariableList";
  try {
    const r = g(), t = `${i}/${e}${r}`;
    return await l().get(t);
  } catch (r) {
    return u(r);
  }
}, H = async (e) => {
  const r = "GetVehicleVariableValuesList";
  try {
    a({ args: [
      {
        name: "variableValue",
        value: e,
        required: !0,
        types: ["string", "number"]
      }
    ] });
    const n = g(), o = `${i}/${r}/${e}${n}`;
    return await l().get(o);
  } catch (t) {
    return u(t);
  }
}, J = async (e) => {
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
      { name: "params", value: e, types: ["object"] },
      ...t
    ];
    a({ args: n }), a({ args: t, mode: "atLeast" });
    const o = e != null && e.manufacturer ? encodeURIComponent(e.manufacturer) : "", s = (e == null ? void 0 : e.vehicleType) || "", y = g({ vehicleType: s }), c = `${i}/${r}/${o}${y}`;
    return await l().get(c);
  } catch (t) {
    return u(t);
  }
};
export {
  V as DecodeVin,
  G as DecodeVinExtended,
  T as DecodeVinValues,
  k as DecodeVinValuesBatch,
  N as DecodeVinValuesExtended,
  A as DecodeWMI,
  I as GetAllMakes,
  j as GetAllManufacturers,
  E as GetCanadianVehicleSpecifications,
  Y as GetEquipmentPlantCodes,
  F as GetMakeForManufacturer,
  D as GetMakesForManufacturerAndYear,
  L as GetMakesForVehicleType,
  P as GetManufacturerDetails,
  R as GetModelsForMake,
  O as GetModelsForMakeId,
  C as GetModelsForMakeIdYear,
  U as GetModelsForMakeYear,
  x as GetParts,
  W as GetVehicleTypesForMake,
  _ as GetVehicleTypesForMakeId,
  B as GetVehicleVariableList,
  H as GetVehicleVariableValuesList,
  J as GetWMIsForManufacturer,
  S as isValidVin
};
//# sourceMappingURL=nhtsa-api-wrapper.mjs.map
