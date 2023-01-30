const w = ({
  args: t,
  mode: e = "default"
}) => {
  if (e === "default")
    t.forEach((n) => {
      S(n);
    });
  else if (e === "atLeast" && !t.find((o) => o.value !== void 0))
    throw Error(
      `must provide at least one of the following arguments: ${t.map((o) => o.name).join(", ")}`
    );
}, S = ({
  name: t,
  value: e,
  required: n,
  types: o
}) => {
  if (!t)
    throw Error("error validating argument, 'name' arg is required");
  if (!n && !o)
    throw Error(
      `error validating argument ${t}, either 'required' or 'types' args are required`
    );
  if (u(o) !== "array")
    throw Error(
      `error validating argument ${t}, 'types' must be an array of strings`
    );
  const c = u(e), r = o ? `<${o.join(" | ")}>` : "", s = `error validating argument, "${t}"`, g = `received value: ${e} - of type: <${c}>`;
  if (n && !o && !e)
    throw Error(`${s} is required; ${g}`);
  if (o && !n && e && !o.includes(c))
    throw Error(
      `${s} must be of type(s) ${r}, ${g}`
    );
  if (n && o && (!e || !o.includes(c)))
    throw Error(
      `${s} is required and must be of type(s) ${r}, ${g}`
    );
}, y = "https://vpic.nhtsa.dot.gov/api/vehicles", M = "json", u = (t) => {
  const e = Object.prototype.toString.call(t).toLowerCase();
  return e.slice(8, e.length - 1);
}, T = (t, e = !1) => {
  const n = { format: M }, o = u(t) === "object" ? { ...t, ...n } : n, c = "?" + Object.entries(o).map(([r, s], g, $) => {
    const a = u(s);
    return a !== "string" && a !== "number" ? "" : (a === "number" && (s = s.toString()), s.length || e && s === "" ? `${r}=${s}${g < $.length - 1 ? "&" : ""}` : "");
  }).join("");
  return p(c);
}, p = (t) => {
  if (t = encodeURI(t), /[^0-9A-Z?&=%]/gi.test(t))
    throw Error(
      "Invalid characters found in query string. Only characters a-z, 0-9, and ?,&,=,% are allowed."
    );
  return t;
}, V = (t) => u(t) === "error", k = (t) => {
  let e, n;
  V(t) ? (e = t.message, n = t.stack) : u(t) === "string" ? e = t : e = "an unknown error occurred.";
  const o = new Error(e);
  return o.stack = n || "unknown stack", o;
}, i = async (t) => ((!V(t) || !t.message || !t.stack) && (t = k(t)), Promise.reject(t)), Y = {
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
}, j = [
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
function G(t) {
  if (typeof t != "string" || t.length != 17)
    return !1;
  t = t.toUpperCase();
  const e = t.split(""), n = e[8];
  if (isNaN(parseInt(n)) && n !== "X")
    return !1;
  const o = n === "X" ? 10 : parseInt(n);
  return e.map((r, s) => {
    let g;
    isNaN(parseInt(r)) ? g = Y[r] : g = parseInt(r);
    const $ = j[s];
    return g * $;
  }).reduce((r, s) => r + s, 0) % 11 === o;
}
function d(t, e = !1) {
  const n = { format: M };
  let o = {};
  !t || u(t) !== "object" ? o = { ...n } : o = { ...t, ...n };
  const c = Object.entries(o), r = c.length;
  if (r < 1)
    return Promise.resolve("");
  let s = !1;
  const g = c.map(([$, a], l) => {
    let q = "", h = "";
    const b = u(a);
    if (a && b === "number" && (a = a.toString()), (a || e) && (b === "string" || b === "number"))
      return s || (q = "?", s = !0), l < r - 1 && (h = "&"), `${q}${$}=${a}${h}`;
  });
  return Promise.resolve(encodeURI(g.join("")));
}
const f = () => ({
  get: async (e, n = {}) => await fetch(e, n).then(async (c) => {
    if (!c.ok)
      throw Error(c.statusText);
    const r = ["application/json", "text/json"], s = c.headers.get("content-type");
    if (!r.some((a) => s == null ? void 0 : s.includes(a)))
      throw Error(
        `response is not in JSON format; got content-type: ${s}`
      );
    const $ = await c.json();
    if (!$)
      throw Error(
        `response is empty; got content-type: ${s}, responseStatusText: ${c.statusText}}`
      );
    return $;
  }).catch((c) => (c.message = `error fetching data; ${c.message}`, i(c)))
}), E = async (t, e) => {
  const n = "DecodeVin", o = e == null ? void 0 : e.modelYear;
  try {
    w({ args: [
      { name: "vin", required: !0, types: ["string"], value: t },
      { name: "params", types: ["object"], value: e },
      {
        name: "params.modelYear",
        types: ["number", "string"],
        value: o
      }
    ] });
    const r = T(e), s = `${y}/${n}/${t}${r}`;
    return await f().get(s).then((g) => g);
  } catch (c) {
    return i(c);
  }
}, I = async (t, e) => {
  const n = "DecodeVinExtended", o = u(t);
  if (!t || o !== "string")
    return i(
      `${n}, "vin" argument is required and must be of type string, got: <${o}> ${t}`
    );
  const c = u(e);
  if (e && c !== "object")
    return i(
      `${n}, "params" argument must be of type object, got: <${c}> ${e}`
    );
  const r = u(e == null ? void 0 : e.modelYear);
  if (e != null && e.modelYear && r !== "number")
    return i(
      `${n}, "params.modelYear" must be of type number or string, got: <${r}> ${e.modelYear}`
    );
  const s = await d(e).catch(
    ($) => i(`${n}, error building query string: ${$}`)
  ), g = `${y}/${n}/${t}${s}`;
  return await f().get(g).then(($) => $).catch(($) => i(`${n}, error fetching data: ${$}`));
}, A = async (t, e) => {
  const n = "DecodeVinValues", o = u(t);
  if (!t || o !== "string")
    return i(
      `${n}, "vin" argument is required and must be of type string, got: <${o}> ${t}`
    );
  const c = u(e);
  if (e && c !== "object")
    return i(
      `${n}, "params" argument must be of type object, got: <${c}> ${e}`
    );
  const r = u(e == null ? void 0 : e.modelYear);
  if (e != null && e.modelYear && r !== "number")
    return i(
      `${n}, "params.modelYear" must be of type number or string, got: <${r}> ${e.modelYear}`
    );
  const s = await d(e).catch(
    ($) => i(`${n}, error building query string: ${$}`)
  ), g = `${y}/${n}/${t}${s}`;
  return await f().get(g).then(($) => $).catch(($) => i(`${n}, error fetching data: ${$}`));
}, P = async (t) => {
  const e = "DecodeVinValuesBatch", n = u(t);
  if (!t || n !== "string")
    return i(
      `${e}, "inputString" argument is required and must be of type string, got: <${n}> ${t}`
    );
  const o = `${y}/${e}/`, c = encodeURI(`DATA=${t}&format=${M}`);
  return await f().get(o, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: c
  }).then((r) => r).catch((r) => i(`${e}, error fetching data: ${r}`));
}, D = async (t, e) => {
  const n = "DecodeVinValuesExtended", o = u(t);
  if (!t || o !== "string")
    return i(
      `${n}, "vin" argument is required and must be of type string, got: <${o}> ${t}`
    );
  const c = u(e);
  if (e && c !== "object")
    return i(
      `${n}, "params" argument must be of type object, got: <${c}> ${e}`
    );
  const r = u(e == null ? void 0 : e.modelYear);
  if (e != null && e.modelYear && r !== "number")
    return i(
      `${n}, "params.modelYear" must be of type number or string, got: <${r}> ${e.modelYear}`
    );
  const s = await d(e).catch(
    ($) => i(`${n}, error building query string: ${$}`)
  ), g = `${y}/${n}/${t}${s}`;
  return await f().get(g).then(($) => $).catch(($) => i(`${n}, error fetching data: ${$}`));
}, F = async (t) => {
  const e = "DecodeWMI", n = u(t);
  if (n !== "string")
    return i(
      `${e}, "WMI" argument is required and must be of type string, got <${n}> ${t}`
    );
  const o = await d().catch(
    (r) => i(`${e}, error building query string: ${r}`)
  ), c = `${y}/${e}/${t}${o}`;
  return await f().get(c).then((r) => r).catch((r) => i(`${e}, error fetching data: ${r}`));
}, v = async () => {
  const t = "GetAllMakes", e = await d().catch(
    (o) => i(`${t}, error building query string: ${o}`)
  ), n = `${y}/${t}${e}`;
  return await f().get(n).then((o) => o).catch((o) => i(`${t}, error fetching data: ${o}`));
}, R = async (t) => {
  const e = "GetAllManufacturers", n = u(t);
  if (t && n !== "object")
    return i(
      `${e}, "params" argument must be of type object, got: <${n}> ${t}`
    );
  const o = u(t == null ? void 0 : t.manufacturerType);
  if (t != null && t.manufacturerType && o !== "string")
    return i(
      `${e}, params.manufacturerType" argument must be of type string, got: <${o}> ${t.manufacturerType}`
    );
  const c = u(t == null ? void 0 : t.page);
  if (t != null && t.page && c !== "number | string")
    return i(
      `${e}, "params.page" argument must be of type number or string, got: <${c}> ${t.page}`
    );
  const r = await d(t).catch(
    (g) => i(`${e}, error building query string: ${g}`)
  ), s = `${y}/${e}${r}`;
  return await f().get(s).then((g) => g).catch((g) => i(`${e}, error fetching data: ${g}`));
}, L = async (t) => {
  const e = "GetCanadianVehicleSpecifications", n = u(t);
  if (!t || t && n !== "object")
    return i(
      `${e}, "params" argument is required and must be of type object, got: <${n}> ${t}`
    );
  const o = u(t == null ? void 0 : t.year);
  if (!(t != null && t.year) || o !== "number")
    return i(
      `${e}, "params.year" argument is required and must be of type number or string, got: <${o}> ${t.year}`
    );
  const c = u(t.make);
  if (t != null && t.make && c !== "string")
    return i(
      `${e}, "params.make" argument must be of type string, got: <${c}> ${t.make}`
    );
  const r = u(t.model);
  if (t.model && r !== "string")
    return i(
      `${e}, "params.model" argument must be of type string, got: <${r}> ${t.model}`
    );
  const s = u(t.units);
  if (t.units && s !== "string")
    return i(
      `${e}, "params.units" argument must be of type string, got: <${s}> ${t.units}`
    );
  const g = t.make || "", $ = t.model || "", a = t.units || "", l = {
    year: t.year,
    make: g,
    model: $,
    units: a
  }, q = await d(l, !0).catch(
    (m) => i(`${e}, error building query string: ${m}`)
  ), h = `${y}/${e}/${q}`;
  return await f().get(h).then((m) => m).catch((m) => i(`${e}, error fetching data: ${m}`));
}, x = async (t) => {
  const e = "GetEquipmentPlantCodes", n = u(t);
  if (!t || n !== "object")
    return i(
      `${e}, "params" argument must be of type object, got: <${n}> ${t}`
    );
  const o = u(t.year);
  if (o !== "number")
    return i(
      `${e}, "params.year" argument is required and must be of type number or string, got: <${o}> ${t.year}`
    );
  const c = u(t.equipmentType);
  if (c !== "number")
    return i(
      `${e}, "params.equipmentType" argument is required and must be of type number or string, got: <${c}> ${t.equipmentType}`
    );
  const r = u(t.reportType);
  if (r !== "string")
    return i(
      `${e}, "params.reportType" argument is required and must be of type string, got: <${r}> ${t.reportType}`
    );
  const s = await d(t).catch(
    ($) => i(`${e}, error building query string: ${$}`)
  ), g = `${y}/${e}${s}`;
  return await f().get(g).then(($) => $).catch(($) => i(`${e}, error fetching data: ${$}`));
}, N = async (t) => {
  const e = "GetMakeForManufacturer", n = u(t);
  if (!t || n !== "number")
    return i(
      `${e}, "manufacturer" argument is required and must be of type number or string, got <${n}> ${t}`
    );
  const o = await d().catch(
    (r) => i(`${e}, error building query string: ${r}`)
  ), c = `${y}/${e}/${t}${o}`;
  return await f().get(c).then((r) => r).catch((r) => i(`${e}, error fetching data: ${r}`));
}, O = async (t, e) => {
  const n = "GetMakesForManufacturerAndYear", o = u(t);
  if (!t || o !== "number")
    return i(
      `${n}, "manufacturer" argument is required and must be of type number or string, got <${o}> ${t}`
    );
  const c = u(e);
  if (!e || e && c !== "object")
    return i(
      `${n}, "params" argument is required and must be of type object, got: <${c}> ${e}`
    );
  const r = u(e.year);
  if (!e.year || r !== "number")
    return i(
      `${n}, "params.year" is required and must be of type number or string, got: <${r}> ${e.year}`
    );
  const s = await d(e).catch(
    ($) => i(`${n}, error building query string: ${$}`)
  ), g = `${y}/${n}/${t}${s}`;
  return await f().get(g).then(($) => $).catch(($) => i(`${n}, error fetching data: ${$}`));
}, U = async (t) => {
  const e = "GetMakesForVehicleType", n = u(t);
  if (n !== "string")
    return i(
      `${e}, "typeName" argument is required and must be of type string, got <${n}> ${t}`
    );
  const o = await d().catch(
    (r) => i(`${e}, error building query string: ${r}`)
  ), c = `${y}/${e}/${t}${o}`;
  return await f().get(c).then((r) => r).catch((r) => i(`${e}, error fetching data: ${r}`));
}, C = async (t) => {
  const e = "GetManufacturerDetails", n = u(t);
  if (!t || n !== "number")
    return i(
      `${e}, "manufacturer" argument is required and must be of type number or string, got <${n}> ${t}`
    );
  const o = await d().catch(
    (r) => i(`${e}, error building query string: ${r}`)
  ), c = `${y}/${e}/${t}${o}`;
  return await f().get(c).then((r) => r).catch((r) => i(`${e}, error fetching data: ${r}`));
}, _ = async (t) => {
  const e = "GetModelsForMake", n = u(t);
  if (n !== "string")
    return i(
      `${e}, "makeName" argument is required and must be of type string, got <${n}> ${t}`
    );
  const o = await d().catch(
    (r) => i(`${e}, error building query string: ${r}`)
  ), c = `${y}/${e}/${t}${o}`;
  return await f().get(c).then((r) => r).catch((r) => i(`${e}, error fetching data: ${r}`));
}, W = async (t) => {
  const e = "GetModelsForMakeId", n = u(t);
  if (!t || n !== "number")
    return i(
      `${e}, "makeId" argument is required and must be of type number or string, got <${n}> ${t}`
    );
  const o = await d().catch(
    (r) => i(`${e}, error building query string: ${r}`)
  ), c = `${y}/${e}/${t}${o}`;
  return await f().get(c).then((r) => r).catch((r) => i(`${e}, error fetching data: ${r}`));
}, B = async (t) => {
  const e = "GetModelsForMakeIdYear", n = t == null ? void 0 : t.makeId, o = t == null ? void 0 : t.modelYear, c = t == null ? void 0 : t.vehicleType, r = u(t);
  if (!t || t && r !== "object")
    return i(
      `${e}, "params" argument is required and must be of type object, got: <${r}> ${t}`
    );
  const s = u(n);
  if (!n || s !== "number")
    return i(
      `${e}, "params.makeId" is required and must be of type number or string, got: <${s}> ${n}`
    );
  if (!o && !c)
    return i(
      `${e}, must provide either "params.modelYear" or "params.vehicleType", got: { modelYear: ${o}, vehicleType: ${c} }`
    );
  const g = u(o);
  if (t != null && t.modelYear && g !== "number")
    return i(
      `${e}, "params.modelYear" must be of type number or string, got: <${g}> ${o}`
    );
  const $ = u(c);
  if (c && $ !== "string")
    return i(
      `${e}, "params.vehicleType" must be of type string, got: <${$}> ${c}`
    );
  let a = `${e}/makeId/${n}/`;
  o && c ? a += `modelYear/${o}/vehicleType/${c}` : o ? a += `modelYear/${o}` : a += `vehicleType/${c}`;
  const l = await d().catch(
    (h) => i(`${e}, error building query string: ${h}`)
  ), q = `${y}/${a}${l}`;
  return await f().get(q).then((h) => h).catch((h) => i(`${e}, error fetching data: ${h}`));
}, H = async (t, e) => {
  const n = "GetModelsForMakeYear", o = e == null ? void 0 : e.modelYear, c = e == null ? void 0 : e.vehicleType;
  try {
    const r = [
      {
        name: "params.modelYear",
        types: ["number", "string"],
        value: o
      },
      { name: "params.vehicleType", types: ["string"], value: c }
    ], s = [
      { name: "make", required: !0, types: ["string"], value: t },
      { name: "params", required: !0, types: ["object"], value: e },
      ...r
    ];
    w({ args: s }), w({ args: r, mode: "atLeast" }), s.forEach((l) => {
      u(l.value) === "string" && (l.value = p(l.value));
    });
    let g = `${n}/make/${t}/`;
    o && (g += `modelYear/${o}`), c && (g += `${o ? "/" : ""}vehicleType/${c}`);
    const $ = T(), a = `${y}/${g}${$}`;
    return await f().get(a).then((l) => l);
  } catch (r) {
    return i(r);
  }
}, J = async (t) => {
  const e = "GetParts", n = t == null ? void 0 : t.type, o = t == null ? void 0 : t.fromDate, c = t == null ? void 0 : t.toDate, r = t == null ? void 0 : t.page, s = u(t);
  if (t && s !== "object")
    return i(
      `${e}, "params" argument must be of type object, got: <${s}> ${t}`
    );
  const g = u(n);
  if (n && g !== "number")
    return i(
      `${e}, "params.type" argument must be of type number or string, got: <${g}> ${n}`
    );
  const $ = u(o);
  if (o && $ !== "string")
    return i(
      `${e}, "params.fromDate" argument must be of type string, got: <${$}> ${o}`
    );
  const a = u(c);
  if (c && a !== "string")
    return i(
      `${e}, "params.toDate" argument must be of type string, got: <${a}> ${c}`
    );
  const l = u(r);
  if (r && l !== "number")
    return i(
      `${e}, "params.page" argument must be of type number or string, got: <${l}> ${r}`
    );
  const q = await d(t).catch(
    (b) => i(`${e}, error building query string: ${b}`)
  ), h = `${y}/${e}${q}`;
  return await f().get(h).then((b) => b).catch((b) => i(`${e}, error fetching data: ${b}`));
}, X = async (t) => {
  const e = "GetVehicleTypesForMake", n = u(t);
  if (!t || n !== "string")
    return i(
      `${e}, "makeName" argument is required and must be of type string, got <${n}> ${t}`
    );
  const o = await d().catch(
    (r) => i(`${e}, error building query string: ${r}`)
  ), c = `${y}/${e}/${t}${o}`;
  return await f().get(c).then((r) => r).catch((r) => i(`${e}, error fetching data: ${r}`));
}, Q = async (t) => {
  const e = "GetVehicleTypesForMakeId", n = u(t);
  if (!t || n !== "number")
    return i(
      `${e}, "makeId" argument is required and must be of type number or string, got <${n}> ${t}`
    );
  const o = await d().catch(
    (r) => i(`${e}, error building query string: ${r}`)
  ), c = `${y}/${e}/${t}${o}`;
  return await f().get(c).then((r) => r).catch((r) => i(`${e}, error fetching data: ${r}`));
}, Z = async () => {
  const t = "GetVehicleVariableList", e = await d().catch(
    (o) => i(`${t}, error building query string: ${o}`)
  ), n = `${y}/${t}${e}`;
  return await f().get(n).then((o) => o).catch((o) => i(`${t}, error fetching data: ${o}`));
}, z = async (t) => {
  const e = "GetVehicleVariableValuesList", n = u(t);
  if (!t || !["number", "string"].includes(n))
    return i(
      `${e}, "variableValue" argument is required and must be of type number or string, got <${n}> ${t}`
    );
  t = encodeURI(String(t));
  const o = await d().catch(
    (r) => i(`${e}, error building query string: ${r}`)
  ), c = `${y}/${e}/${t}${o}`;
  return await f().get(c).then((r) => r).catch((r) => i(`${e}, error fetching data: ${r}`));
}, K = async (t, e) => {
  const n = "GetWMIsForManufacturer", o = e == null ? void 0 : e.vehicleType;
  if (!t && !o)
    return i(
      `${n}, "manufacturer" and "params.vehicleType" arguments are optional but at least 1 is required, got: manufacturer: ${t} and vehicleType: ${o}`
    );
  const c = u(t);
  if (t && !["number", "string"].includes(c))
    return i(
      `${n}, "manufacturer" must be of type number or string, got <${c}> ${t}`
    );
  const r = u(e);
  if (e && r !== "object")
    return i(
      `${n}, "params" must be of type object, got: <${r}> ${e}`
    );
  const s = u(e == null ? void 0 : e.vehicleType);
  if (e != null && e.vehicleType && !["number", "string"].includes(s))
    return i(
      `${n}, "params.vehicleType" must be of type number or string, got: <${s}> ${e.vehicleType}`
    );
  const g = await d(e).catch(
    (a) => i(`${n}, error building query string: ${a}`)
  ), $ = `${y}/${n}/${t || ""}${g}`;
  return await f().get($).then((a) => a).catch((a) => i(`${n}, error fetching data: ${a}`));
};
export {
  E as DecodeVin,
  I as DecodeVinExtended,
  A as DecodeVinValues,
  P as DecodeVinValuesBatch,
  D as DecodeVinValuesExtended,
  F as DecodeWMI,
  v as GetAllMakes,
  R as GetAllManufacturers,
  L as GetCanadianVehicleSpecifications,
  x as GetEquipmentPlantCodes,
  N as GetMakeForManufacturer,
  O as GetMakesForManufacturerAndYear,
  U as GetMakesForVehicleType,
  C as GetManufacturerDetails,
  _ as GetModelsForMake,
  W as GetModelsForMakeId,
  B as GetModelsForMakeIdYear,
  H as GetModelsForMakeYear,
  J as GetParts,
  X as GetVehicleTypesForMake,
  Q as GetVehicleTypesForMakeId,
  Z as GetVehicleVariableList,
  z as GetVehicleVariableValuesList,
  K as GetWMIsForManufacturer,
  G as isValidVin
};
//# sourceMappingURL=nhtsa-api-wrapper.mjs.map
