const M = ({
  name: e,
  value: t,
  caller: r,
  required: i,
  types: c
}) => {
  if (!e || !r)
    throw new Error(
      "Error validating argument: 'name' and 'caller' must be provided to validateArgument()"
    );
  if (!i && !c)
    throw new Error(
      `${r}, error validating argument: ${e}, either 'required' or 'types' must be provided to validateArgument()`
    );
  const n = $(t), g = c ? `<${c.join(" | ")}>` : "", s = `${r}, error validating argument, "${e}" argument`, u = `received value: ${t} - of type: <${n}>`;
  if (i && !c && !t)
    throw new Error(`${s} is required, ${u}`);
  if (c && !i && !c.includes(n))
    throw new Error(
      `${s} must be of type(s) ${g}, ${u}`
    );
  if (i && c && (!t || !c.includes(n)))
    throw new Error(
      `${s} is required and must be of type(s) ${g}, ${u}`
    );
}, o = async (e) => Promise.reject(Error(e)), $ = (e) => {
  const t = Object.prototype.toString.call(e).toLowerCase();
  return t.slice(8, t.length - 1);
}, m = {
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
}, Y = [
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
function V(e) {
  if (typeof e != "string" || e.length != 17)
    return !1;
  e = e.toUpperCase();
  const t = e.split(""), r = t[8];
  if (isNaN(parseInt(r)) && r !== "X")
    return !1;
  const i = r === "X" ? 10 : parseInt(r);
  return t.map((n, g) => {
    let s;
    isNaN(parseInt(n)) ? s = m[n] : s = parseInt(n);
    const u = Y[g];
    return s * u;
  }).reduce((n, g) => n + g, 0) % 11 === i;
}
const f = "https://vpic.nhtsa.dot.gov/api/vehicles", T = "json";
function a(e, t = !1) {
  const r = { format: T };
  let i = {};
  !e || $(e) !== "object" ? i = { ...r } : i = { ...e, ...r };
  const c = Object.entries(i), n = c.length;
  if (n < 1)
    return Promise.resolve("");
  let g = !1;
  const s = c.map(([u, y], l) => {
    let q = "", h = "";
    const b = $(y);
    if (y && b === "number" && (y = y.toString()), (y || t) && (b === "string" || b === "number"))
      return g || (q = "?", g = !0), l < n - 1 && (h = "&"), `${q}${u}=${y}${h}`;
  });
  return Promise.resolve(encodeURI(s.join("")));
}
const d = () => ({
  get: async (t, r = {}) => await fetch(t, r).then(async (c) => {
    var s;
    const g = ((s = c.headers.get("content-type")) == null ? void 0 : s.includes("application/json")) ? await c.json() : null;
    if (!c.ok) {
      const u = g && g.Message || c.status;
      return Promise.reject(u);
    }
    return g;
  }).catch(
    (c) => Promise.reject(Error(`Error fetching data: ${c}`))
  )
}), k = async (e, t) => {
  const r = "DecodeVin", i = $(e);
  if (!e || i !== "string")
    return o(
      `${r}, "vin" argument is required and must be of type string, got: <${i}> ${e}`
    );
  const c = $(t);
  if (t && c !== "object")
    return o(
      `${r}, "params" argument must be of type object, got: <${c}> ${t}`
    );
  const n = $(t == null ? void 0 : t.modelYear);
  if (t != null && t.modelYear && n !== "number")
    return o(
      `${r}, "params.modelYear" must be of type string or number, got: <${n}> ${t.modelYear}`
    );
  const g = await a(t).catch(
    (u) => o(`${r}, error building query string: ${u}`)
  ), s = `${f}/${r}/${e}${g}`;
  return await d().get(s).then((u) => u).catch((u) => o(`${r}, error fetching data: ${u}`));
}, S = async (e, t) => {
  const r = "DecodeVinExtended", i = $(e);
  if (!e || i !== "string")
    return o(
      `${r}, "vin" argument is required and must be of type string, got: <${i}> ${e}`
    );
  const c = $(t);
  if (t && c !== "object")
    return o(
      `${r}, "params" argument must be of type object, got: <${c}> ${t}`
    );
  const n = $(t == null ? void 0 : t.modelYear);
  if (t != null && t.modelYear && n !== "number")
    return o(
      `${r}, "params.modelYear" must be of type number or string, got: <${n}> ${t.modelYear}`
    );
  const g = await a(t).catch(
    (u) => o(`${r}, error building query string: ${u}`)
  ), s = `${f}/${r}/${e}${g}`;
  return await d().get(s).then((u) => u).catch((u) => o(`${r}, error fetching data: ${u}`));
}, G = async (e, t) => {
  const r = "DecodeVinValues", i = $(e);
  if (!e || i !== "string")
    return o(
      `${r}, "vin" argument is required and must be of type string, got: <${i}> ${e}`
    );
  const c = $(t);
  if (t && c !== "object")
    return o(
      `${r}, "params" argument must be of type object, got: <${c}> ${t}`
    );
  const n = $(t == null ? void 0 : t.modelYear);
  if (t != null && t.modelYear && n !== "number")
    return o(
      `${r}, "params.modelYear" must be of type number or string, got: <${n}> ${t.modelYear}`
    );
  const g = await a(t).catch(
    (u) => o(`${r}, error building query string: ${u}`)
  ), s = `${f}/${r}/${e}${g}`;
  return await d().get(s).then((u) => u).catch((u) => o(`${r}, error fetching data: ${u}`));
}, p = async (e) => {
  const t = "DecodeVinValuesBatch", r = $(e);
  if (!e || r !== "string")
    return o(
      `${t}, "inputString" argument is required and must be of type string, got: <${r}> ${e}`
    );
  const i = `${f}/${t}/`, c = encodeURI(`DATA=${e}&format=${T}`);
  return await d().get(i, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: c
  }).then((n) => n).catch((n) => o(`${t}, error fetching data: ${n}`));
}, j = async (e, t) => {
  const r = "DecodeVinValuesExtended", i = $(e);
  if (!e || i !== "string")
    return o(
      `${r}, "vin" argument is required and must be of type string, got: <${i}> ${e}`
    );
  const c = $(t);
  if (t && c !== "object")
    return o(
      `${r}, "params" argument must be of type object, got: <${c}> ${t}`
    );
  const n = $(t == null ? void 0 : t.modelYear);
  if (t != null && t.modelYear && n !== "number")
    return o(
      `${r}, "params.modelYear" must be of type number or string, got: <${n}> ${t.modelYear}`
    );
  const g = await a(t).catch(
    (u) => o(`${r}, error building query string: ${u}`)
  ), s = `${f}/${r}/${e}${g}`;
  return await d().get(s).then((u) => u).catch((u) => o(`${r}, error fetching data: ${u}`));
}, P = async (e) => {
  const t = "DecodeWMI", r = $(e);
  if (r !== "string")
    return o(
      `${t}, "WMI" argument is required and must be of type string, got <${r}> ${e}`
    );
  const i = await a().catch(
    (n) => o(`${t}, error building query string: ${n}`)
  ), c = `${f}/${t}/${e}${i}`;
  return await d().get(c).then((n) => n).catch((n) => o(`${t}, error fetching data: ${n}`));
}, A = async () => {
  const e = "GetAllMakes", t = await a().catch(
    (i) => o(`${e}, error building query string: ${i}`)
  ), r = `${f}/${e}${t}`;
  return await d().get(r).then((i) => i).catch((i) => o(`${e}, error fetching data: ${i}`));
}, D = async (e) => {
  const t = "GetAllManufacturers", r = $(e);
  if (e && r !== "object")
    return o(
      `${t}, "params" argument must be of type object, got: <${r}> ${e}`
    );
  const i = $(e == null ? void 0 : e.manufacturerType);
  if (e != null && e.manufacturerType && i !== "string")
    return o(
      `${t}, params.manufacturerType" argument must be of type string, got: <${i}> ${e.manufacturerType}`
    );
  const c = $(e == null ? void 0 : e.page);
  if (e != null && e.page && c !== "number | string")
    return o(
      `${t}, "params.page" argument must be of type number or string, got: <${c}> ${e.page}`
    );
  const n = await a(e).catch(
    (s) => o(`${t}, error building query string: ${s}`)
  ), g = `${f}/${t}${n}`;
  return await d().get(g).then((s) => s).catch((s) => o(`${t}, error fetching data: ${s}`));
}, I = async (e) => {
  const t = "GetCanadianVehicleSpecifications", r = $(e);
  if (!e || e && r !== "object")
    return o(
      `${t}, "params" argument is required and must be of type object, got: <${r}> ${e}`
    );
  const i = $(e == null ? void 0 : e.year);
  if (!(e != null && e.year) || i !== "number")
    return o(
      `${t}, "params.year" argument is required and must be of type number or string, got: <${i}> ${e.year}`
    );
  const c = $(e.make);
  if (e != null && e.make && c !== "string")
    return o(
      `${t}, "params.make" argument must be of type string, got: <${c}> ${e.make}`
    );
  const n = $(e.model);
  if (e.model && n !== "string")
    return o(
      `${t}, "params.model" argument must be of type string, got: <${n}> ${e.model}`
    );
  const g = $(e.units);
  if (e.units && g !== "string")
    return o(
      `${t}, "params.units" argument must be of type string, got: <${g}> ${e.units}`
    );
  const s = e.make || "", u = e.model || "", y = e.units || "", l = {
    year: e.year,
    make: s,
    model: u,
    units: y
  }, q = await a(l, !0).catch(
    (w) => o(`${t}, error building query string: ${w}`)
  ), h = `${f}/${t}/${q}`;
  return await d().get(h).then((w) => w).catch((w) => o(`${t}, error fetching data: ${w}`));
}, E = async (e) => {
  const t = "GetEquipmentPlantCodes", r = $(e);
  if (!e || r !== "object")
    return o(
      `${t}, "params" argument must be of type object, got: <${r}> ${e}`
    );
  const i = $(e.year);
  if (i !== "number")
    return o(
      `${t}, "params.year" argument is required and must be of type number or string, got: <${i}> ${e.year}`
    );
  const c = $(e.equipmentType);
  if (c !== "number")
    return o(
      `${t}, "params.equipmentType" argument is required and must be of type number or string, got: <${c}> ${e.equipmentType}`
    );
  const n = $(e.reportType);
  if (n !== "string")
    return o(
      `${t}, "params.reportType" argument is required and must be of type string, got: <${n}> ${e.reportType}`
    );
  const g = await a(e).catch(
    (u) => o(`${t}, error building query string: ${u}`)
  ), s = `${f}/${t}${g}`;
  return await d().get(s).then((u) => u).catch((u) => o(`${t}, error fetching data: ${u}`));
}, F = async (e) => {
  const t = "GetMakeForManufacturer", r = $(e);
  if (!e || r !== "number")
    return o(
      `${t}, "manufacturer" argument is required and must be of type number or string, got <${r}> ${e}`
    );
  const i = await a().catch(
    (n) => o(`${t}, error building query string: ${n}`)
  ), c = `${f}/${t}/${e}${i}`;
  return await d().get(c).then((n) => n).catch((n) => o(`${t}, error fetching data: ${n}`));
}, v = async (e, t) => {
  const r = "GetMakesForManufacturerAndYear", i = $(e);
  if (!e || i !== "number")
    return o(
      `${r}, "manufacturer" argument is required and must be of type number or string, got <${i}> ${e}`
    );
  const c = $(t);
  if (!t || t && c !== "object")
    return o(
      `${r}, "params" argument is required and must be of type object, got: <${c}> ${t}`
    );
  const n = $(t.year);
  if (!t.year || n !== "number")
    return o(
      `${r}, "params.year" is required and must be of type number or string, got: <${n}> ${t.year}`
    );
  const g = await a(t).catch(
    (u) => o(`${r}, error building query string: ${u}`)
  ), s = `${f}/${r}/${e}${g}`;
  return await d().get(s).then((u) => u).catch((u) => o(`${r}, error fetching data: ${u}`));
}, R = async (e) => {
  const t = "GetMakesForVehicleType", r = $(e);
  if (r !== "string")
    return o(
      `${t}, "typeName" argument is required and must be of type string, got <${r}> ${e}`
    );
  const i = await a().catch(
    (n) => o(`${t}, error building query string: ${n}`)
  ), c = `${f}/${t}/${e}${i}`;
  return await d().get(c).then((n) => n).catch((n) => o(`${t}, error fetching data: ${n}`));
}, L = async (e) => {
  const t = "GetManufacturerDetails", r = $(e);
  if (!e || r !== "number")
    return o(
      `${t}, "manufacturer" argument is required and must be of type number or string, got <${r}> ${e}`
    );
  const i = await a().catch(
    (n) => o(`${t}, error building query string: ${n}`)
  ), c = `${f}/${t}/${e}${i}`;
  return await d().get(c).then((n) => n).catch((n) => o(`${t}, error fetching data: ${n}`));
}, N = async (e) => {
  const t = "GetModelsForMake", r = $(e);
  if (r !== "string")
    return o(
      `${t}, "makeName" argument is required and must be of type string, got <${r}> ${e}`
    );
  const i = await a().catch(
    (n) => o(`${t}, error building query string: ${n}`)
  ), c = `${f}/${t}/${e}${i}`;
  return await d().get(c).then((n) => n).catch((n) => o(`${t}, error fetching data: ${n}`));
}, U = async (e) => {
  const t = "GetModelsForMakeId", r = $(e);
  if (!e || r !== "number")
    return o(
      `${t}, "makeId" argument is required and must be of type number or string, got <${r}> ${e}`
    );
  const i = await a().catch(
    (n) => o(`${t}, error building query string: ${n}`)
  ), c = `${f}/${t}/${e}${i}`;
  return await d().get(c).then((n) => n).catch((n) => o(`${t}, error fetching data: ${n}`));
}, _ = async (e) => {
  const t = "GetModelsForMakeIdYear", r = e == null ? void 0 : e.makeId, i = e == null ? void 0 : e.modelYear, c = e == null ? void 0 : e.vehicleType, n = $(e);
  if (!e || e && n !== "object")
    return o(
      `${t}, "params" argument is required and must be of type object, got: <${n}> ${e}`
    );
  const g = $(r);
  if (!r || g !== "number")
    return o(
      `${t}, "params.makeId" is required and must be of type number or string, got: <${g}> ${r}`
    );
  if (!i && !c)
    return o(
      `${t}, must provide either "params.modelYear" or "params.vehicleType", got: { modelYear: ${i}, vehicleType: ${c} }`
    );
  const s = $(i);
  if (e != null && e.modelYear && s !== "number")
    return o(
      `${t}, "params.modelYear" must be of type number or string, got: <${s}> ${i}`
    );
  const u = $(c);
  if (c && u !== "string")
    return o(
      `${t}, "params.vehicleType" must be of type string, got: <${u}> ${c}`
    );
  let y = `${t}/makeId/${r}/`;
  i && c ? y += `modelYear/${i}/vehicleType/${c}` : i ? y += `modelYear/${i}` : y += `vehicleType/${c}`;
  const l = await a().catch(
    (h) => o(`${t}, error building query string: ${h}`)
  ), q = `${f}/${y}${l}`;
  return await d().get(q).then((h) => h).catch((h) => o(`${t}, error fetching data: ${h}`));
}, C = async (e) => {
  const t = "GetModelsForMakeYear", r = e == null ? void 0 : e.make, i = e == null ? void 0 : e.modelYear, c = e == null ? void 0 : e.vehicleType;
  try {
    M({
      caller: t,
      name: "params",
      required: !0,
      types: ["object"],
      value: e
    }), M({
      caller: t,
      name: "params.make",
      required: !0,
      types: ["string"],
      value: e.make
    });
  } catch (l) {
    return o(l.message);
  }
  if (!i && !c)
    return o(
      `${t}, must provide either "params.modelYear" or "params.vehicleType" or both, got: { modelYear: ${i}, vehicleType: ${c} }`
    );
  const n = $(i);
  if (e != null && e.modelYear && n !== "number")
    return o(
      `${t}, "params.modelYear" must be of type number or string, got: <${n}> ${i}`
    );
  const g = $(c);
  if (c && g !== "string")
    return o(
      `${t}, "params.vehicleType" must be of type string, got: <${g}> ${c}`
    );
  let s = `${t}/make/${r}/`;
  i && c ? s += `modelYear/${i}/vehicleType/${c}` : i ? s += `modelYear/${i}` : s += `vehicleType/${c}`;
  const u = await a().catch(
    (l) => o(`${t}, error building query string: ${l}`)
  ), y = `${f}/${s}${u}`;
  return await d().get(y).then((l) => l).catch((l) => o(`${t}, error fetching data: ${l}`));
}, W = async (e) => {
  const t = "GetParts", r = e == null ? void 0 : e.type, i = e == null ? void 0 : e.fromDate, c = e == null ? void 0 : e.toDate, n = e == null ? void 0 : e.page, g = $(e);
  if (e && g !== "object")
    return o(
      `${t}, "params" argument must be of type object, got: <${g}> ${e}`
    );
  const s = $(r);
  if (r && s !== "number")
    return o(
      `${t}, "params.type" argument must be of type number or string, got: <${s}> ${r}`
    );
  const u = $(i);
  if (i && u !== "string")
    return o(
      `${t}, "params.fromDate" argument must be of type string, got: <${u}> ${i}`
    );
  const y = $(c);
  if (c && y !== "string")
    return o(
      `${t}, "params.toDate" argument must be of type string, got: <${y}> ${c}`
    );
  const l = $(n);
  if (n && l !== "number")
    return o(
      `${t}, "params.page" argument must be of type number or string, got: <${l}> ${n}`
    );
  const q = await a(e).catch(
    (b) => o(`${t}, error building query string: ${b}`)
  ), h = `${f}/${t}${q}`;
  return await d().get(h).then((b) => b).catch((b) => o(`${t}, error fetching data: ${b}`));
}, x = async (e) => {
  const t = "GetVehicleTypesForMake", r = $(e);
  if (!e || r !== "string")
    return o(
      `${t}, "makeName" argument is required and must be of type string, got <${r}> ${e}`
    );
  const i = await a().catch(
    (n) => o(`${t}, error building query string: ${n}`)
  ), c = `${f}/${t}/${e}${i}`;
  return await d().get(c).then((n) => n).catch((n) => o(`${t}, error fetching data: ${n}`));
}, O = async (e) => {
  const t = "GetVehicleTypesForMakeId", r = $(e);
  if (!e || r !== "number")
    return o(
      `${t}, "makeId" argument is required and must be of type number or string, got <${r}> ${e}`
    );
  const i = await a().catch(
    (n) => o(`${t}, error building query string: ${n}`)
  ), c = `${f}/${t}/${e}${i}`;
  return await d().get(c).then((n) => n).catch((n) => o(`${t}, error fetching data: ${n}`));
}, B = async () => {
  const e = "GetVehicleVariableList", t = await a().catch(
    (i) => o(`${e}, error building query string: ${i}`)
  ), r = `${f}/${e}${t}`;
  return await d().get(r).then((i) => i).catch((i) => o(`${e}, error fetching data: ${i}`));
}, H = async (e) => {
  const t = "GetVehicleVariableValuesList", r = $(e);
  if (!e || !["number", "string"].includes(r))
    return o(
      `${t}, "variableValue" argument is required and must be of type number or string, got <${r}> ${e}`
    );
  e = encodeURI(String(e));
  const i = await a().catch(
    (n) => o(`${t}, error building query string: ${n}`)
  ), c = `${f}/${t}/${e}${i}`;
  return await d().get(c).then((n) => n).catch((n) => o(`${t}, error fetching data: ${n}`));
}, J = async (e, t) => {
  const r = "GetWMIsForManufacturer", i = t == null ? void 0 : t.vehicleType;
  if (!e && !i)
    return o(
      `${r}, "manufacturer" and "params.vehicleType" arguments are optional but at least 1 is required, got: manufacturer: ${e} and vehicleType: ${i}`
    );
  const c = $(e);
  if (e && !["number", "string"].includes(c))
    return o(
      `${r}, "manufacturer" must be of type number or string, got <${c}> ${e}`
    );
  const n = $(t);
  if (t && n !== "object")
    return o(
      `${r}, "params" must be of type object, got: <${n}> ${t}`
    );
  const g = $(t == null ? void 0 : t.vehicleType);
  if (t != null && t.vehicleType && !["number", "string"].includes(g))
    return o(
      `${r}, "params.vehicleType" must be of type number or string, got: <${g}> ${t.vehicleType}`
    );
  const s = await a(t).catch(
    (y) => o(`${r}, error building query string: ${y}`)
  ), u = `${f}/${r}/${e || ""}${s}`;
  return await d().get(u).then((y) => y).catch((y) => o(`${r}, error fetching data: ${y}`));
};
export {
  k as DecodeVin,
  S as DecodeVinExtended,
  G as DecodeVinValues,
  p as DecodeVinValuesBatch,
  j as DecodeVinValuesExtended,
  P as DecodeWMI,
  A as GetAllMakes,
  D as GetAllManufacturers,
  I as GetCanadianVehicleSpecifications,
  E as GetEquipmentPlantCodes,
  F as GetMakeForManufacturer,
  v as GetMakesForManufacturerAndYear,
  R as GetMakesForVehicleType,
  L as GetManufacturerDetails,
  N as GetModelsForMake,
  U as GetModelsForMakeId,
  _ as GetModelsForMakeIdYear,
  C as GetModelsForMakeYear,
  W as GetParts,
  x as GetVehicleTypesForMake,
  O as GetVehicleTypesForMakeId,
  B as GetVehicleVariableList,
  H as GetVehicleVariableValuesList,
  J as GetWMIsForManufacturer,
  V as isValidVin
};
//# sourceMappingURL=nhtsa-api-wrapper.mjs.map
