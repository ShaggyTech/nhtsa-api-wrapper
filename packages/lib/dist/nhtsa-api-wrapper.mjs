const w = ({
  args: e,
  mode: t = "default"
}) => {
  if (!e || u(e) !== "array")
    throw Error(
      'catchInvalidArguments requires "args", must be an array of objects'
    );
  if (t === "default")
    e.forEach((n) => {
      k(n);
    });
  else if (t === "atLeast" && !e.find((o) => o.value !== void 0))
    throw Error(
      `must provide at least one of the following arguments: ${e.map((o) => o.name).join(", ")}`
    );
}, k = ({
  name: e,
  value: t,
  required: n,
  types: o
}) => {
  if (!e)
    throw Error("error validating argument, 'name' arg is required");
  if (o && u(o) !== "array")
    throw Error(
      `error validating argument named "${e}", 'types' must be an array of strings`
    );
  const c = u(t), r = o ? `<${o.join(" | ")}>` : "", s = `error validating argument named "${e}",`, g = `received value: ${t} - of type: <${c}>`;
  if (n && !o && !t)
    throw Error(`${s} is required; ${g}`);
  if (o && !n && (console.log("checking only types"), t && !o.includes(c)))
    throw Error(
      `${s} must be of type(s) ${r}, ${g}`
    );
  if (n && o && (!t || !o.includes(c)))
    throw Error(
      `${s} is required and must be of type(s) ${r}, ${g}`
    );
}, y = "https://vpic.nhtsa.dot.gov/api/vehicles", M = "json", u = (e) => {
  const t = Object.prototype.toString.call(e).toLowerCase();
  return t.slice(8, t.length - 1);
}, T = (e, t = !1) => {
  const n = { format: M }, o = u(e) === "object" ? { ...e, ...n } : n, c = "?" + Object.entries(o).map(([r, s], g, $) => {
    const a = u(s);
    return a !== "string" && a !== "number" ? "" : (a === "number" && (s = s.toString()), s.length || t && s === "" ? `${r}=${s}${g < $.length - 1 ? "&" : ""}` : "");
  }).join("");
  return p(c);
}, p = (e) => {
  if (e = encodeURI(e), /[^0-9A-Z?&=%]/gi.test(e))
    throw Error(
      "Invalid characters found in query string. Only characters a-z, 0-9, and ?,&,=,% are allowed."
    );
  return e;
}, V = (e) => u(e) === "error", S = (e) => {
  let t, n;
  V(e) ? (t = e.message, n = e.stack) : u(e) === "string" ? t = e : t = "an unknown error occurred.";
  const o = new Error(t);
  return o.stack = n || "unknown stack", o;
}, i = async (e) => ((!V(e) || !e.message || !e.stack) && (e = S(e)), Promise.reject(e)), Y = {
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
function G(e) {
  if (typeof e != "string" || e.length != 17)
    return !1;
  e = e.toUpperCase();
  const t = e.split(""), n = t[8];
  if (isNaN(parseInt(n)) && n !== "X")
    return !1;
  const o = n === "X" ? 10 : parseInt(n);
  return t.map((r, s) => {
    let g;
    isNaN(parseInt(r)) ? g = Y[r] : g = parseInt(r);
    const $ = j[s];
    return g * $;
  }).reduce((r, s) => r + s, 0) % 11 === o;
}
function d(e, t = !1) {
  const n = { format: M };
  let o = {};
  !e || u(e) !== "object" ? o = { ...n } : o = { ...e, ...n };
  const c = Object.entries(o), r = c.length;
  if (r < 1)
    return Promise.resolve("");
  let s = !1;
  const g = c.map(([$, a], l) => {
    let q = "", h = "";
    const b = u(a);
    if (a && b === "number" && (a = a.toString()), (a || t) && (b === "string" || b === "number"))
      return s || (q = "?", s = !0), l < r - 1 && (h = "&"), `${q}${$}=${a}${h}`;
  });
  return Promise.resolve(encodeURI(g.join("")));
}
const f = () => ({
  get: async (t, n = {}) => await fetch(t, n).then(async (c) => {
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
}), E = async (e, t) => {
  const n = "DecodeVin", o = t == null ? void 0 : t.modelYear;
  try {
    w({ args: [
      { name: "vin", required: !0, types: ["string"], value: e },
      { name: "params", types: ["object"], value: t },
      {
        name: "params.modelYear",
        types: ["number", "string"],
        value: o
      }
    ] });
    const r = T(t), s = `${y}/${n}/${e}${r}`;
    return await f().get(s).then((g) => g);
  } catch (c) {
    return i(c);
  }
}, I = async (e, t) => {
  const n = "DecodeVinExtended", o = u(e);
  if (!e || o !== "string")
    return i(
      `${n}, "vin" argument is required and must be of type string, got: <${o}> ${e}`
    );
  const c = u(t);
  if (t && c !== "object")
    return i(
      `${n}, "params" argument must be of type object, got: <${c}> ${t}`
    );
  const r = u(t == null ? void 0 : t.modelYear);
  if (t != null && t.modelYear && r !== "number")
    return i(
      `${n}, "params.modelYear" must be of type number or string, got: <${r}> ${t.modelYear}`
    );
  const s = await d(t).catch(
    ($) => i(`${n}, error building query string: ${$}`)
  ), g = `${y}/${n}/${e}${s}`;
  return await f().get(g).then(($) => $).catch(($) => i(`${n}, error fetching data: ${$}`));
}, A = async (e, t) => {
  const n = "DecodeVinValues", o = u(e);
  if (!e || o !== "string")
    return i(
      `${n}, "vin" argument is required and must be of type string, got: <${o}> ${e}`
    );
  const c = u(t);
  if (t && c !== "object")
    return i(
      `${n}, "params" argument must be of type object, got: <${c}> ${t}`
    );
  const r = u(t == null ? void 0 : t.modelYear);
  if (t != null && t.modelYear && r !== "number")
    return i(
      `${n}, "params.modelYear" must be of type number or string, got: <${r}> ${t.modelYear}`
    );
  const s = await d(t).catch(
    ($) => i(`${n}, error building query string: ${$}`)
  ), g = `${y}/${n}/${e}${s}`;
  return await f().get(g).then(($) => $).catch(($) => i(`${n}, error fetching data: ${$}`));
}, P = async (e) => {
  const t = "DecodeVinValuesBatch", n = u(e);
  if (!e || n !== "string")
    return i(
      `${t}, "inputString" argument is required and must be of type string, got: <${n}> ${e}`
    );
  const o = `${y}/${t}/`, c = encodeURI(`DATA=${e}&format=${M}`);
  return await f().get(o, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: c
  }).then((r) => r).catch((r) => i(`${t}, error fetching data: ${r}`));
}, D = async (e, t) => {
  const n = "DecodeVinValuesExtended", o = u(e);
  if (!e || o !== "string")
    return i(
      `${n}, "vin" argument is required and must be of type string, got: <${o}> ${e}`
    );
  const c = u(t);
  if (t && c !== "object")
    return i(
      `${n}, "params" argument must be of type object, got: <${c}> ${t}`
    );
  const r = u(t == null ? void 0 : t.modelYear);
  if (t != null && t.modelYear && r !== "number")
    return i(
      `${n}, "params.modelYear" must be of type number or string, got: <${r}> ${t.modelYear}`
    );
  const s = await d(t).catch(
    ($) => i(`${n}, error building query string: ${$}`)
  ), g = `${y}/${n}/${e}${s}`;
  return await f().get(g).then(($) => $).catch(($) => i(`${n}, error fetching data: ${$}`));
}, F = async (e) => {
  const t = "DecodeWMI", n = u(e);
  if (n !== "string")
    return i(
      `${t}, "WMI" argument is required and must be of type string, got <${n}> ${e}`
    );
  const o = await d().catch(
    (r) => i(`${t}, error building query string: ${r}`)
  ), c = `${y}/${t}/${e}${o}`;
  return await f().get(c).then((r) => r).catch((r) => i(`${t}, error fetching data: ${r}`));
}, v = async () => {
  const e = "GetAllMakes", t = await d().catch(
    (o) => i(`${e}, error building query string: ${o}`)
  ), n = `${y}/${e}${t}`;
  return await f().get(n).then((o) => o).catch((o) => i(`${e}, error fetching data: ${o}`));
}, R = async (e) => {
  const t = "GetAllManufacturers", n = u(e);
  if (e && n !== "object")
    return i(
      `${t}, "params" argument must be of type object, got: <${n}> ${e}`
    );
  const o = u(e == null ? void 0 : e.manufacturerType);
  if (e != null && e.manufacturerType && o !== "string")
    return i(
      `${t}, params.manufacturerType" argument must be of type string, got: <${o}> ${e.manufacturerType}`
    );
  const c = u(e == null ? void 0 : e.page);
  if (e != null && e.page && c !== "number | string")
    return i(
      `${t}, "params.page" argument must be of type number or string, got: <${c}> ${e.page}`
    );
  const r = await d(e).catch(
    (g) => i(`${t}, error building query string: ${g}`)
  ), s = `${y}/${t}${r}`;
  return await f().get(s).then((g) => g).catch((g) => i(`${t}, error fetching data: ${g}`));
}, L = async (e) => {
  const t = "GetCanadianVehicleSpecifications", n = u(e);
  if (!e || e && n !== "object")
    return i(
      `${t}, "params" argument is required and must be of type object, got: <${n}> ${e}`
    );
  const o = u(e == null ? void 0 : e.year);
  if (!(e != null && e.year) || o !== "number")
    return i(
      `${t}, "params.year" argument is required and must be of type number or string, got: <${o}> ${e.year}`
    );
  const c = u(e.make);
  if (e != null && e.make && c !== "string")
    return i(
      `${t}, "params.make" argument must be of type string, got: <${c}> ${e.make}`
    );
  const r = u(e.model);
  if (e.model && r !== "string")
    return i(
      `${t}, "params.model" argument must be of type string, got: <${r}> ${e.model}`
    );
  const s = u(e.units);
  if (e.units && s !== "string")
    return i(
      `${t}, "params.units" argument must be of type string, got: <${s}> ${e.units}`
    );
  const g = e.make || "", $ = e.model || "", a = e.units || "", l = {
    year: e.year,
    make: g,
    model: $,
    units: a
  }, q = await d(l, !0).catch(
    (m) => i(`${t}, error building query string: ${m}`)
  ), h = `${y}/${t}/${q}`;
  return await f().get(h).then((m) => m).catch((m) => i(`${t}, error fetching data: ${m}`));
}, N = async (e) => {
  const t = "GetEquipmentPlantCodes", n = u(e);
  if (!e || n !== "object")
    return i(
      `${t}, "params" argument must be of type object, got: <${n}> ${e}`
    );
  const o = u(e.year);
  if (o !== "number")
    return i(
      `${t}, "params.year" argument is required and must be of type number or string, got: <${o}> ${e.year}`
    );
  const c = u(e.equipmentType);
  if (c !== "number")
    return i(
      `${t}, "params.equipmentType" argument is required and must be of type number or string, got: <${c}> ${e.equipmentType}`
    );
  const r = u(e.reportType);
  if (r !== "string")
    return i(
      `${t}, "params.reportType" argument is required and must be of type string, got: <${r}> ${e.reportType}`
    );
  const s = await d(e).catch(
    ($) => i(`${t}, error building query string: ${$}`)
  ), g = `${y}/${t}${s}`;
  return await f().get(g).then(($) => $).catch(($) => i(`${t}, error fetching data: ${$}`));
}, x = async (e) => {
  const t = "GetMakeForManufacturer", n = u(e);
  if (!e || n !== "number")
    return i(
      `${t}, "manufacturer" argument is required and must be of type number or string, got <${n}> ${e}`
    );
  const o = await d().catch(
    (r) => i(`${t}, error building query string: ${r}`)
  ), c = `${y}/${t}/${e}${o}`;
  return await f().get(c).then((r) => r).catch((r) => i(`${t}, error fetching data: ${r}`));
}, O = async (e, t) => {
  const n = "GetMakesForManufacturerAndYear", o = u(e);
  if (!e || o !== "number")
    return i(
      `${n}, "manufacturer" argument is required and must be of type number or string, got <${o}> ${e}`
    );
  const c = u(t);
  if (!t || t && c !== "object")
    return i(
      `${n}, "params" argument is required and must be of type object, got: <${c}> ${t}`
    );
  const r = u(t.year);
  if (!t.year || r !== "number")
    return i(
      `${n}, "params.year" is required and must be of type number or string, got: <${r}> ${t.year}`
    );
  const s = await d(t).catch(
    ($) => i(`${n}, error building query string: ${$}`)
  ), g = `${y}/${n}/${e}${s}`;
  return await f().get(g).then(($) => $).catch(($) => i(`${n}, error fetching data: ${$}`));
}, U = async (e) => {
  const t = "GetMakesForVehicleType", n = u(e);
  if (n !== "string")
    return i(
      `${t}, "typeName" argument is required and must be of type string, got <${n}> ${e}`
    );
  const o = await d().catch(
    (r) => i(`${t}, error building query string: ${r}`)
  ), c = `${y}/${t}/${e}${o}`;
  return await f().get(c).then((r) => r).catch((r) => i(`${t}, error fetching data: ${r}`));
}, C = async (e) => {
  const t = "GetManufacturerDetails", n = u(e);
  if (!e || n !== "number")
    return i(
      `${t}, "manufacturer" argument is required and must be of type number or string, got <${n}> ${e}`
    );
  const o = await d().catch(
    (r) => i(`${t}, error building query string: ${r}`)
  ), c = `${y}/${t}/${e}${o}`;
  return await f().get(c).then((r) => r).catch((r) => i(`${t}, error fetching data: ${r}`));
}, _ = async (e) => {
  const t = "GetModelsForMake", n = u(e);
  if (n !== "string")
    return i(
      `${t}, "makeName" argument is required and must be of type string, got <${n}> ${e}`
    );
  const o = await d().catch(
    (r) => i(`${t}, error building query string: ${r}`)
  ), c = `${y}/${t}/${e}${o}`;
  return await f().get(c).then((r) => r).catch((r) => i(`${t}, error fetching data: ${r}`));
}, W = async (e) => {
  const t = "GetModelsForMakeId", n = u(e);
  if (!e || n !== "number")
    return i(
      `${t}, "makeId" argument is required and must be of type number or string, got <${n}> ${e}`
    );
  const o = await d().catch(
    (r) => i(`${t}, error building query string: ${r}`)
  ), c = `${y}/${t}/${e}${o}`;
  return await f().get(c).then((r) => r).catch((r) => i(`${t}, error fetching data: ${r}`));
}, B = async (e) => {
  const t = "GetModelsForMakeIdYear", n = e == null ? void 0 : e.makeId, o = e == null ? void 0 : e.modelYear, c = e == null ? void 0 : e.vehicleType, r = u(e);
  if (!e || e && r !== "object")
    return i(
      `${t}, "params" argument is required and must be of type object, got: <${r}> ${e}`
    );
  const s = u(n);
  if (!n || s !== "number")
    return i(
      `${t}, "params.makeId" is required and must be of type number or string, got: <${s}> ${n}`
    );
  if (!o && !c)
    return i(
      `${t}, must provide either "params.modelYear" or "params.vehicleType", got: { modelYear: ${o}, vehicleType: ${c} }`
    );
  const g = u(o);
  if (e != null && e.modelYear && g !== "number")
    return i(
      `${t}, "params.modelYear" must be of type number or string, got: <${g}> ${o}`
    );
  const $ = u(c);
  if (c && $ !== "string")
    return i(
      `${t}, "params.vehicleType" must be of type string, got: <${$}> ${c}`
    );
  let a = `${t}/makeId/${n}/`;
  o && c ? a += `modelYear/${o}/vehicleType/${c}` : o ? a += `modelYear/${o}` : a += `vehicleType/${c}`;
  const l = await d().catch(
    (h) => i(`${t}, error building query string: ${h}`)
  ), q = `${y}/${a}${l}`;
  return await f().get(q).then((h) => h).catch((h) => i(`${t}, error fetching data: ${h}`));
}, H = async (e, t) => {
  const n = "GetModelsForMakeYear", o = t == null ? void 0 : t.modelYear, c = t == null ? void 0 : t.vehicleType;
  try {
    const r = [
      {
        name: "params.modelYear",
        types: ["number", "string"],
        value: o
      },
      { name: "params.vehicleType", types: ["string"], value: c }
    ], s = [
      { name: "make", required: !0, types: ["string"], value: e },
      { name: "params", required: !0, types: ["object"], value: t },
      ...r
    ];
    w({ args: s }), w({ args: r, mode: "atLeast" }), s.forEach((l) => {
      u(l.value) === "string" && (l.value = p(l.value));
    });
    let g = `${n}/make/${e}/`;
    o && (g += `modelYear/${o}`), c && (g += `${o ? "/" : ""}vehicleType/${c}`);
    const $ = T(), a = `${y}/${g}${$}`;
    return await f().get(a).then((l) => l);
  } catch (r) {
    return i(r);
  }
}, J = async (e) => {
  const t = "GetParts", n = e == null ? void 0 : e.type, o = e == null ? void 0 : e.fromDate, c = e == null ? void 0 : e.toDate, r = e == null ? void 0 : e.page, s = u(e);
  if (e && s !== "object")
    return i(
      `${t}, "params" argument must be of type object, got: <${s}> ${e}`
    );
  const g = u(n);
  if (n && g !== "number")
    return i(
      `${t}, "params.type" argument must be of type number or string, got: <${g}> ${n}`
    );
  const $ = u(o);
  if (o && $ !== "string")
    return i(
      `${t}, "params.fromDate" argument must be of type string, got: <${$}> ${o}`
    );
  const a = u(c);
  if (c && a !== "string")
    return i(
      `${t}, "params.toDate" argument must be of type string, got: <${a}> ${c}`
    );
  const l = u(r);
  if (r && l !== "number")
    return i(
      `${t}, "params.page" argument must be of type number or string, got: <${l}> ${r}`
    );
  const q = await d(e).catch(
    (b) => i(`${t}, error building query string: ${b}`)
  ), h = `${y}/${t}${q}`;
  return await f().get(h).then((b) => b).catch((b) => i(`${t}, error fetching data: ${b}`));
}, X = async (e) => {
  const t = "GetVehicleTypesForMake", n = u(e);
  if (!e || n !== "string")
    return i(
      `${t}, "makeName" argument is required and must be of type string, got <${n}> ${e}`
    );
  const o = await d().catch(
    (r) => i(`${t}, error building query string: ${r}`)
  ), c = `${y}/${t}/${e}${o}`;
  return await f().get(c).then((r) => r).catch((r) => i(`${t}, error fetching data: ${r}`));
}, Q = async (e) => {
  const t = "GetVehicleTypesForMakeId", n = u(e);
  if (!e || n !== "number")
    return i(
      `${t}, "makeId" argument is required and must be of type number or string, got <${n}> ${e}`
    );
  const o = await d().catch(
    (r) => i(`${t}, error building query string: ${r}`)
  ), c = `${y}/${t}/${e}${o}`;
  return await f().get(c).then((r) => r).catch((r) => i(`${t}, error fetching data: ${r}`));
}, Z = async () => {
  const e = "GetVehicleVariableList", t = await d().catch(
    (o) => i(`${e}, error building query string: ${o}`)
  ), n = `${y}/${e}${t}`;
  return await f().get(n).then((o) => o).catch((o) => i(`${e}, error fetching data: ${o}`));
}, z = async (e) => {
  const t = "GetVehicleVariableValuesList", n = u(e);
  if (!e || !["number", "string"].includes(n))
    return i(
      `${t}, "variableValue" argument is required and must be of type number or string, got <${n}> ${e}`
    );
  e = encodeURI(String(e));
  const o = await d().catch(
    (r) => i(`${t}, error building query string: ${r}`)
  ), c = `${y}/${t}/${e}${o}`;
  return await f().get(c).then((r) => r).catch((r) => i(`${t}, error fetching data: ${r}`));
}, K = async (e, t) => {
  const n = "GetWMIsForManufacturer", o = t == null ? void 0 : t.vehicleType;
  if (!e && !o)
    return i(
      `${n}, "manufacturer" and "params.vehicleType" arguments are optional but at least 1 is required, got: manufacturer: ${e} and vehicleType: ${o}`
    );
  const c = u(e);
  if (e && !["number", "string"].includes(c))
    return i(
      `${n}, "manufacturer" must be of type number or string, got <${c}> ${e}`
    );
  const r = u(t);
  if (t && r !== "object")
    return i(
      `${n}, "params" must be of type object, got: <${r}> ${t}`
    );
  const s = u(t == null ? void 0 : t.vehicleType);
  if (t != null && t.vehicleType && !["number", "string"].includes(s))
    return i(
      `${n}, "params.vehicleType" must be of type number or string, got: <${s}> ${t.vehicleType}`
    );
  const g = await d(t).catch(
    (a) => i(`${n}, error building query string: ${a}`)
  ), $ = `${y}/${n}/${e || ""}${g}`;
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
  N as GetEquipmentPlantCodes,
  x as GetMakeForManufacturer,
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
  w as catchInvalidArguments,
  G as isValidVin,
  k as validateArgument
};
//# sourceMappingURL=nhtsa-api-wrapper.mjs.map
