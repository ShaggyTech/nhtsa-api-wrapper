const w = ({
  args: e,
  mode: t = "default"
}) => {
  if (!e || s(e) !== "array")
    throw Error(
      'catchInvalidArguments requires "args" that must be an array of IArgToValidate objects'
    );
  if (t === "default")
    e.forEach((r) => {
      T(r);
    });
  else if (t === "atLeast" && !e.find((o) => !!o.value))
    throw Error(
      `must provide at least one of the following arguments: ${e.map((o) => o.name).join(", ")}`
    );
}, T = ({
  name: e,
  value: t,
  required: r,
  types: o,
  mode: c = "error"
}) => {
  if (s(e) !== "string")
    throw Error(
      "error validating argument named 'name', is required and must be a string"
    );
  if (o && s(o) !== "array")
    throw Error(
      `error validating argument named "${e}", 'types' must be an array of strings`
    );
  const n = s(t), $ = o ? `<${o.join(" | ")}>` : "";
  let g = "";
  const u = `error validating argument named "${e}",`, a = `received value: ${t} - of type: <${n}>`;
  if (r && !o ? t || (g = `${u} is required, ${a}`) : o && !r ? t && !o.includes(n) && (g = `${u} must be of type(s) ${$}, ${a}`) : r && o && (!t || !o.includes(n)) && (g = `${u} is required and must be of type(s) ${$}, ${a}`), g.length) {
    if (c === "boolean")
      return !1;
    if (c === "error")
      throw Error(g);
  }
  return !0;
}, y = "https://vpic.nhtsa.dot.gov/api/vehicles", M = "json", s = (e) => {
  const t = Object.prototype.toString.call(e).toLowerCase();
  return t.slice(8, t.length - 1);
}, p = (e, t = !1) => {
  const r = { format: M }, o = s(e) === "object" ? { ...e, ...r } : r, c = "?" + Object.entries(o).map(([n, $], g, u) => {
    const a = s($);
    return a !== "string" && a !== "number" ? "" : (a === "number" && ($ = $.toString()), $.length || t && $ === "" ? `${n}=${$}${g < u.length - 1 ? "&" : ""}` : "");
  }).join("");
  return S(c);
}, S = (e) => {
  if (e = encodeURI(e), /[^0-9A-Z?&=%]/gi.test(e))
    throw Error(
      "Invalid characters found in query string. Only characters a-z, 0-9, and ?,&,=,% are allowed."
    );
  return e;
}, V = (e) => s(e) === "error", Y = (e) => {
  let t = "an unknown error occurred.";
  return V(e) ? e : (s(e) === "string" && (t = e), Error(t));
}, i = async (e) => (V(e) || (e = Y(e)), Promise.reject(e)), j = {
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
function G(e) {
  if (typeof e != "string" || e.length != 17)
    return !1;
  e = e.toUpperCase();
  const t = e.split(""), r = t[8];
  if (isNaN(parseInt(r)) && r !== "X")
    return !1;
  const o = r === "X" ? 10 : parseInt(r);
  return t.map((n, $) => {
    let g;
    isNaN(parseInt(n)) ? g = j[n] : g = parseInt(n);
    const u = k[$];
    return g * u;
  }).reduce((n, $) => n + $, 0) % 11 === o;
}
function d(e, t = !1) {
  const r = { format: M };
  let o = {};
  !e || s(e) !== "object" ? o = { ...r } : o = { ...e, ...r };
  const c = Object.entries(o), n = c.length;
  if (n < 1)
    return Promise.resolve("");
  let $ = !1;
  const g = c.map(([u, a], h) => {
    let b = "", l = "";
    const m = s(a);
    if (a && m === "number" && (a = a.toString()), (a || t) && (m === "string" || m === "number"))
      return $ || (b = "?", $ = !0), h < n - 1 && (l = "&"), `${b}${u}=${a}${l}`;
  });
  return Promise.resolve(encodeURI(g.join("")));
}
const f = () => ({
  get: async (t, r = {}) => await fetch(t, r).then(async (c) => {
    if (!c.ok)
      throw Error(`${c.status} ${c.url}`);
    const n = ["application/json", "text/json"], $ = c.headers.get("content-type");
    if (!n.some((a) => $ == null ? void 0 : $.includes(a)))
      throw Error(
        `API response is not in JSON format; got content-type: ${$}, responseStatus: ${c.status}}, responseUrl: ${c.url}`
      );
    const u = await c.json();
    if (!u)
      throw Error(
        `API responded but returned no data; got content-type: ${$}, responseStatus: ${c.status}}, responseUrl: ${c.url}`
      );
    return u;
  }).catch((c) => (c.message = `API error fetching data: ${c.message}`, i(c)))
}), I = async (e, t) => {
  const r = "DecodeVin", o = t == null ? void 0 : t.modelYear;
  try {
    w({ args: [
      { name: "vin", required: !0, types: ["string"], value: e },
      { name: "params", types: ["object"], value: t },
      {
        name: "modelYear",
        types: ["number", "string"],
        value: o
      }
    ] });
    const n = p(t), $ = `${y}/${r}/${e}${n}`;
    return await f().get($);
  } catch (c) {
    return i(c);
  }
}, A = async (e, t) => {
  const r = "DecodeVinExtended", o = s(e);
  if (!e || o !== "string")
    return i(
      `${r}, "vin" argument is required and must be of type string, got: <${o}> ${e}`
    );
  const c = s(t);
  if (t && c !== "object")
    return i(
      `${r}, "params" argument must be of type object, got: <${c}> ${t}`
    );
  const n = s(t == null ? void 0 : t.modelYear);
  if (t != null && t.modelYear && n !== "number")
    return i(
      `${r}, "params.modelYear" must be of type number or string, got: <${n}> ${t.modelYear}`
    );
  const $ = await d(t).catch(
    (u) => i(`${r}, error building query string: ${u}`)
  ), g = `${y}/${r}/${e}${$}`;
  return await f().get(g).then((u) => u).catch((u) => i(`${r}, error fetching data: ${u}`));
}, P = async (e, t) => {
  const r = "DecodeVinValues", o = s(e);
  if (!e || o !== "string")
    return i(
      `${r}, "vin" argument is required and must be of type string, got: <${o}> ${e}`
    );
  const c = s(t);
  if (t && c !== "object")
    return i(
      `${r}, "params" argument must be of type object, got: <${c}> ${t}`
    );
  const n = s(t == null ? void 0 : t.modelYear);
  if (t != null && t.modelYear && n !== "number")
    return i(
      `${r}, "params.modelYear" must be of type number or string, got: <${n}> ${t.modelYear}`
    );
  const $ = await d(t).catch(
    (u) => i(`${r}, error building query string: ${u}`)
  ), g = `${y}/${r}/${e}${$}`;
  return await f().get(g).then((u) => u).catch((u) => i(`${r}, error fetching data: ${u}`));
}, E = async (e) => {
  const t = "DecodeVinValuesBatch", r = s(e);
  if (!e || r !== "string")
    return i(
      `${t}, "inputString" argument is required and must be of type string, got: <${r}> ${e}`
    );
  const o = `${y}/${t}/`, c = encodeURI(`DATA=${e}&format=${M}`);
  return await f().get(o, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: c
  }).then((n) => n).catch((n) => i(`${t}, error fetching data: ${n}`));
}, D = async (e, t) => {
  const r = "DecodeVinValuesExtended", o = s(e);
  if (!e || o !== "string")
    return i(
      `${r}, "vin" argument is required and must be of type string, got: <${o}> ${e}`
    );
  const c = s(t);
  if (t && c !== "object")
    return i(
      `${r}, "params" argument must be of type object, got: <${c}> ${t}`
    );
  const n = s(t == null ? void 0 : t.modelYear);
  if (t != null && t.modelYear && n !== "number")
    return i(
      `${r}, "params.modelYear" must be of type number or string, got: <${n}> ${t.modelYear}`
    );
  const $ = await d(t).catch(
    (u) => i(`${r}, error building query string: ${u}`)
  ), g = `${y}/${r}/${e}${$}`;
  return await f().get(g).then((u) => u).catch((u) => i(`${r}, error fetching data: ${u}`));
}, F = async (e) => {
  const t = "DecodeWMI", r = s(e);
  if (r !== "string")
    return i(
      `${t}, "WMI" argument is required and must be of type string, got <${r}> ${e}`
    );
  const o = await d().catch(
    (n) => i(`${t}, error building query string: ${n}`)
  ), c = `${y}/${t}/${e}${o}`;
  return await f().get(c).then((n) => n).catch((n) => i(`${t}, error fetching data: ${n}`));
}, v = async () => {
  const e = "GetAllMakes", t = await d().catch(
    (o) => i(`${e}, error building query string: ${o}`)
  ), r = `${y}/${e}${t}`;
  return await f().get(r).then((o) => o).catch((o) => i(`${e}, error fetching data: ${o}`));
}, R = async (e) => {
  const t = "GetAllManufacturers", r = s(e);
  if (e && r !== "object")
    return i(
      `${t}, "params" argument must be of type object, got: <${r}> ${e}`
    );
  const o = s(e == null ? void 0 : e.manufacturerType);
  if (e != null && e.manufacturerType && o !== "string")
    return i(
      `${t}, params.manufacturerType" argument must be of type string, got: <${o}> ${e.manufacturerType}`
    );
  const c = s(e == null ? void 0 : e.page);
  if (e != null && e.page && c !== "number | string")
    return i(
      `${t}, "params.page" argument must be of type number or string, got: <${c}> ${e.page}`
    );
  const n = await d(e).catch(
    (g) => i(`${t}, error building query string: ${g}`)
  ), $ = `${y}/${t}${n}`;
  return await f().get($).then((g) => g).catch((g) => i(`${t}, error fetching data: ${g}`));
}, L = async (e) => {
  const t = "GetCanadianVehicleSpecifications", r = s(e);
  if (!e || e && r !== "object")
    return i(
      `${t}, "params" argument is required and must be of type object, got: <${r}> ${e}`
    );
  const o = s(e == null ? void 0 : e.year);
  if (!(e != null && e.year) || o !== "number")
    return i(
      `${t}, "params.year" argument is required and must be of type number or string, got: <${o}> ${e.year}`
    );
  const c = s(e.make);
  if (e != null && e.make && c !== "string")
    return i(
      `${t}, "params.make" argument must be of type string, got: <${c}> ${e.make}`
    );
  const n = s(e.model);
  if (e.model && n !== "string")
    return i(
      `${t}, "params.model" argument must be of type string, got: <${n}> ${e.model}`
    );
  const $ = s(e.units);
  if (e.units && $ !== "string")
    return i(
      `${t}, "params.units" argument must be of type string, got: <${$}> ${e.units}`
    );
  const g = e.make || "", u = e.model || "", a = e.units || "", h = {
    year: e.year,
    make: g,
    model: u,
    units: a
  }, b = await d(h, !0).catch(
    (q) => i(`${t}, error building query string: ${q}`)
  ), l = `${y}/${t}/${b}`;
  return await f().get(l).then((q) => q).catch((q) => i(`${t}, error fetching data: ${q}`));
}, U = async (e) => {
  const t = "GetEquipmentPlantCodes", r = s(e);
  if (!e || r !== "object")
    return i(
      `${t}, "params" argument must be of type object, got: <${r}> ${e}`
    );
  const o = s(e.year);
  if (o !== "number")
    return i(
      `${t}, "params.year" argument is required and must be of type number or string, got: <${o}> ${e.year}`
    );
  const c = s(e.equipmentType);
  if (c !== "number")
    return i(
      `${t}, "params.equipmentType" argument is required and must be of type number or string, got: <${c}> ${e.equipmentType}`
    );
  const n = s(e.reportType);
  if (n !== "string")
    return i(
      `${t}, "params.reportType" argument is required and must be of type string, got: <${n}> ${e.reportType}`
    );
  const $ = await d(e).catch(
    (u) => i(`${t}, error building query string: ${u}`)
  ), g = `${y}/${t}${$}`;
  return await f().get(g).then((u) => u).catch((u) => i(`${t}, error fetching data: ${u}`));
}, N = async (e) => {
  const t = "GetMakeForManufacturer", r = s(e);
  if (!e || r !== "number")
    return i(
      `${t}, "manufacturer" argument is required and must be of type number or string, got <${r}> ${e}`
    );
  const o = await d().catch(
    (n) => i(`${t}, error building query string: ${n}`)
  ), c = `${y}/${t}/${e}${o}`;
  return await f().get(c).then((n) => n).catch((n) => i(`${t}, error fetching data: ${n}`));
}, C = async (e, t) => {
  const r = "GetMakesForManufacturerAndYear", o = s(e);
  if (!e || o !== "number")
    return i(
      `${r}, "manufacturer" argument is required and must be of type number or string, got <${o}> ${e}`
    );
  const c = s(t);
  if (!t || t && c !== "object")
    return i(
      `${r}, "params" argument is required and must be of type object, got: <${c}> ${t}`
    );
  const n = s(t.year);
  if (!t.year || n !== "number")
    return i(
      `${r}, "params.year" is required and must be of type number or string, got: <${n}> ${t.year}`
    );
  const $ = await d(t).catch(
    (u) => i(`${r}, error building query string: ${u}`)
  ), g = `${y}/${r}/${e}${$}`;
  return await f().get(g).then((u) => u).catch((u) => i(`${r}, error fetching data: ${u}`));
}, O = async (e) => {
  const t = "GetMakesForVehicleType", r = s(e);
  if (r !== "string")
    return i(
      `${t}, "typeName" argument is required and must be of type string, got <${r}> ${e}`
    );
  const o = await d().catch(
    (n) => i(`${t}, error building query string: ${n}`)
  ), c = `${y}/${t}/${e}${o}`;
  return await f().get(c).then((n) => n).catch((n) => i(`${t}, error fetching data: ${n}`));
}, _ = async (e) => {
  const t = "GetManufacturerDetails", r = s(e);
  if (!e || r !== "number")
    return i(
      `${t}, "manufacturer" argument is required and must be of type number or string, got <${r}> ${e}`
    );
  const o = await d().catch(
    (n) => i(`${t}, error building query string: ${n}`)
  ), c = `${y}/${t}/${e}${o}`;
  return await f().get(c).then((n) => n).catch((n) => i(`${t}, error fetching data: ${n}`));
}, x = async (e) => {
  const t = "GetModelsForMake", r = s(e);
  if (r !== "string")
    return i(
      `${t}, "makeName" argument is required and must be of type string, got <${r}> ${e}`
    );
  const o = await d().catch(
    (n) => i(`${t}, error building query string: ${n}`)
  ), c = `${y}/${t}/${e}${o}`;
  return await f().get(c).then((n) => n).catch((n) => i(`${t}, error fetching data: ${n}`));
}, W = async (e) => {
  const t = "GetModelsForMakeId", r = s(e);
  if (!e || r !== "number")
    return i(
      `${t}, "makeId" argument is required and must be of type number or string, got <${r}> ${e}`
    );
  const o = await d().catch(
    (n) => i(`${t}, error building query string: ${n}`)
  ), c = `${y}/${t}/${e}${o}`;
  return await f().get(c).then((n) => n).catch((n) => i(`${t}, error fetching data: ${n}`));
}, B = async (e) => {
  const t = "GetModelsForMakeIdYear", r = e == null ? void 0 : e.makeId, o = e == null ? void 0 : e.modelYear, c = e == null ? void 0 : e.vehicleType, n = s(e);
  if (!e || e && n !== "object")
    return i(
      `${t}, "params" argument is required and must be of type object, got: <${n}> ${e}`
    );
  const $ = s(r);
  if (!r || $ !== "number")
    return i(
      `${t}, "params.makeId" is required and must be of type number or string, got: <${$}> ${r}`
    );
  if (!o && !c)
    return i(
      `${t}, must provide either "params.modelYear" or "params.vehicleType", got: { modelYear: ${o}, vehicleType: ${c} }`
    );
  const g = s(o);
  if (e != null && e.modelYear && g !== "number")
    return i(
      `${t}, "params.modelYear" must be of type number or string, got: <${g}> ${o}`
    );
  const u = s(c);
  if (c && u !== "string")
    return i(
      `${t}, "params.vehicleType" must be of type string, got: <${u}> ${c}`
    );
  let a = `${t}/makeId/${r}/`;
  o && c ? a += `modelYear/${o}/vehicleType/${c}` : o ? a += `modelYear/${o}` : a += `vehicleType/${c}`;
  const h = await d().catch(
    (l) => i(`${t}, error building query string: ${l}`)
  ), b = `${y}/${a}${h}`;
  return await f().get(b).then((l) => l).catch((l) => i(`${t}, error fetching data: ${l}`));
}, H = async (e) => {
  const t = "GetModelsForMakeYear";
  try {
    const r = [
      {
        name: "modelYear",
        types: ["number", "string"],
        value: e.modelYear
      },
      {
        name: "vehicleType",
        types: ["string"],
        value: e.vehicleType
      }
    ], o = [
      { name: "params", required: !0, types: ["object"], value: e },
      { name: "make", required: !0, types: ["string"], value: e.make },
      ...r
    ];
    w({ args: o }), w({ args: r, mode: "atLeast" });
    const c = Object.entries(e).filter(
      ([, a]) => T({
        name: "",
        types: ["string", "number", "boolean"],
        value: a,
        mode: "boolean"
      })
    ).reduce((a, [h, b]) => (a[h] = encodeURIComponent(b), a), {}), { make: n, modelYear: $, vehicleType: g } = c;
    let u = `${y}/${t}/make/${n}/`;
    return $ && (u += `modelYear/${$}`), g && (u += `${$ ? "/" : ""}vehicleType/${g}`), u += p(), await f().get(u);
  } catch (r) {
    return i(r);
  }
}, J = async (e) => {
  const t = "GetParts", r = e == null ? void 0 : e.type, o = e == null ? void 0 : e.fromDate, c = e == null ? void 0 : e.toDate, n = e == null ? void 0 : e.page, $ = s(e);
  if (e && $ !== "object")
    return i(
      `${t}, "params" argument must be of type object, got: <${$}> ${e}`
    );
  const g = s(r);
  if (r && g !== "number")
    return i(
      `${t}, "params.type" argument must be of type number or string, got: <${g}> ${r}`
    );
  const u = s(o);
  if (o && u !== "string")
    return i(
      `${t}, "params.fromDate" argument must be of type string, got: <${u}> ${o}`
    );
  const a = s(c);
  if (c && a !== "string")
    return i(
      `${t}, "params.toDate" argument must be of type string, got: <${a}> ${c}`
    );
  const h = s(n);
  if (n && h !== "number")
    return i(
      `${t}, "params.page" argument must be of type number or string, got: <${h}> ${n}`
    );
  const b = await d(e).catch(
    (m) => i(`${t}, error building query string: ${m}`)
  ), l = `${y}/${t}${b}`;
  return await f().get(l).then((m) => m).catch((m) => i(`${t}, error fetching data: ${m}`));
}, X = async (e) => {
  const t = "GetVehicleTypesForMake", r = s(e);
  if (!e || r !== "string")
    return i(
      `${t}, "makeName" argument is required and must be of type string, got <${r}> ${e}`
    );
  const o = await d().catch(
    (n) => i(`${t}, error building query string: ${n}`)
  ), c = `${y}/${t}/${e}${o}`;
  return await f().get(c).then((n) => n).catch((n) => i(`${t}, error fetching data: ${n}`));
}, Q = async (e) => {
  const t = "GetVehicleTypesForMakeId", r = s(e);
  if (!e || r !== "number")
    return i(
      `${t}, "makeId" argument is required and must be of type number or string, got <${r}> ${e}`
    );
  const o = await d().catch(
    (n) => i(`${t}, error building query string: ${n}`)
  ), c = `${y}/${t}/${e}${o}`;
  return await f().get(c).then((n) => n).catch((n) => i(`${t}, error fetching data: ${n}`));
}, Z = async () => {
  const e = "GetVehicleVariableList", t = await d().catch(
    (o) => i(`${e}, error building query string: ${o}`)
  ), r = `${y}/${e}${t}`;
  return await f().get(r).then((o) => o).catch((o) => i(`${e}, error fetching data: ${o}`));
}, z = async (e) => {
  const t = "GetVehicleVariableValuesList", r = s(e);
  if (!e || !["number", "string"].includes(r))
    return i(
      `${t}, "variableValue" argument is required and must be of type number or string, got <${r}> ${e}`
    );
  e = encodeURI(String(e));
  const o = await d().catch(
    (n) => i(`${t}, error building query string: ${n}`)
  ), c = `${y}/${t}/${e}${o}`;
  return await f().get(c).then((n) => n).catch((n) => i(`${t}, error fetching data: ${n}`));
}, K = async (e, t) => {
  const r = "GetWMIsForManufacturer", o = t == null ? void 0 : t.vehicleType;
  if (!e && !o)
    return i(
      `${r}, "manufacturer" and "params.vehicleType" arguments are optional but at least 1 is required, got: manufacturer: ${e} and vehicleType: ${o}`
    );
  const c = s(e);
  if (e && !["number", "string"].includes(c))
    return i(
      `${r}, "manufacturer" must be of type number or string, got <${c}> ${e}`
    );
  const n = s(t);
  if (t && n !== "object")
    return i(
      `${r}, "params" must be of type object, got: <${n}> ${t}`
    );
  const $ = s(t == null ? void 0 : t.vehicleType);
  if (t != null && t.vehicleType && !["number", "string"].includes($))
    return i(
      `${r}, "params.vehicleType" must be of type number or string, got: <${$}> ${t.vehicleType}`
    );
  const g = await d(t).catch(
    (a) => i(`${r}, error building query string: ${a}`)
  ), u = `${y}/${r}/${e || ""}${g}`;
  return await f().get(u).then((a) => a).catch((a) => i(`${r}, error fetching data: ${a}`));
};
export {
  I as DecodeVin,
  A as DecodeVinExtended,
  P as DecodeVinValues,
  E as DecodeVinValuesBatch,
  D as DecodeVinValuesExtended,
  F as DecodeWMI,
  v as GetAllMakes,
  R as GetAllManufacturers,
  L as GetCanadianVehicleSpecifications,
  U as GetEquipmentPlantCodes,
  N as GetMakeForManufacturer,
  C as GetMakesForManufacturerAndYear,
  O as GetMakesForVehicleType,
  _ as GetManufacturerDetails,
  x as GetModelsForMake,
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
