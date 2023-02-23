// #region type-results
type GetVehicleVariableListResults = {
  DataType: 'string' | 'int' | 'decimal' | 'lookup'
  Description: string
  GroupName: string | null
  ID: number
  Name: string
}
// #endregion type-results

// #region example-response
// Using GetVehicleVariableList() - results truncated for brevity
const exampleResponse = {
  Count: 140,
  Message: 'Results returned successfully',
  Results: [
    {
      DataType: 'string',
      Description:
        '<p>This field stores any other battery information that does not belong to any of the other battery related fields.</p>',
      GroupName: 'Mechanical / Battery',
      ID: 1,
      Name: 'Other Battery Info',
    },
    {
      DataType: 'lookup',
      Description:
        '<p>Battery type field stores the battery chemistry type for anode, cathode.</p>',
      GroupName: 'Mechanical / Battery',
      ID: 2,
      Name: 'Battery Type',
    },
    {
      DataType: 'lookup',
      Description:
        '<p>Bed type is the type of bed (the open back) used for pickup trucks. The common values are standard, short, long, extended.</p>',
      GroupName: 'Exterior / Truck',
      ID: 3,
      Name: 'Bed Type',
    },
    {
      DataType: 'lookup',
      Description:
        '<p>Cab type applies to both pickup truck and other medium- and heavy-duty trucks. The cab or cabin of a truck is the inside space in a truck where the driver is seated. For pickup trucks, the cab type is categorized by the combination number of doors and number of rows for seating. For medium- and heavy-duty trucks (MDHD), the cab type is categorized by the relative location of engine and cab.</p><p>For pickup trucks, there are four cab types.</p><ul><li>Regular: 2 door, 1 row of seats</li><li>Extra/Super/Quad/Double/King/Extended: 2 doors, 2 rows of seats</li><li>Crew/Super Crew/Crew Max: 4 doors, 2 rows of seats</li><li>Mega: 4 doors, 2 rows of seats (with a bigger cabin than crew cab type)</li></ul><p>For medium- and heavy-duty (MDHD) trucks, there are several categories as listed below.</p><ul><li>Cab Beside Engine</li><li>CAE: Cab Above Engine</li><li>CBE: Cab Behind Engine</li><li>COE: Cab Over Engine or Flat Nose: Driver sits on top of the front axle and engine</li><li>LCF: Low Cab Forward</li><li>Conventional: Driver sits behind the engine</li><li>Non-Tilt</li><li>Tilt</li></ul>',
      GroupName: 'Exterior / Truck',
      ID: 4,
      Name: 'Cab Type',
    },
    {
      DataType: 'lookup',
      Description:
        '<p>Body Class presents the body type based on 49 CFR 565.12(b): "Body type means the general configuration or shape of a vehicle distinguished by such characteristics as the number of doors or windows, cargo-carrying features and the roofline (e.g., sedan, fastback, hatchback)." Definitions are not provided for individual body types in the regulation.</p>',
      GroupName: 'Exterior / Body',
      ID: 5,
      Name: 'Body Class',
    },
    {
      DataType: 'int',
      Description:
        '<p>This is a numerical field to store the number of cylinders in an engine. Common values for passenger cars are 4 or 6.</p>',
      GroupName: 'Engine',
      ID: 9,
      Name: 'Engine Number of Cylinders',
    },
    {
      DataType: 'lookup',
      Description:
        '<p>Destination Market is the market where the vehicle is intended to be sold.</p>',
      GroupName: 'General',
      ID: 10,
      Name: 'Destination Market',
    },
    {
      DataType: 'decimal',
      Description:
        '<p>Engine displacement (in cubic centimeters) is the volume swept by all the pistons inside the cylinders of a reciprocating engine in a single movement from top dead center to bottom dead center.</p>',
      GroupName: 'Engine',
      ID: 11,
      Name: 'Displacement (CC)',
    },
    {
      DataType: 'decimal',
      Description:
        '<p>Engine displacement (in cubic inches) is the volume swept by all the pistons inside the cylinders of a reciprocating engine in a single movement from top dead center to bottom dead center.</p>',
      GroupName: 'Engine',
      ID: 12,
      Name: 'Displacement (CI)',
    },
    {
      DataType: 'decimal',
      Description:
        '<p>Engine displacement (in liters) is the volume swept by all the pistons inside the cylinders of a reciprocating engine in a single movement from top dead center to bottom dead center.</p>',
      GroupName: 'Engine',
      ID: 13,
      Name: 'Displacement (L)',
    },
    {
      DataType: 'int',
      Description:
        '<p>This is a numerical field to store the number of doors on a vehicle.</p>',
      GroupName: 'Exterior / Body',
      ID: 14,
      Name: 'Doors',
    },
    {
      DataType: 'lookup',
      Description:
        '<p>Drive type stores information about vehicle drivetrain configuration. The most common drive types for passenger cars, crossover vehicles, and pickup trucks are front-wheel drive (FWD), rear-wheel drive (RWD), all-wheel drive (AWD), and 4-wheel drive (4WD).</p>',
      GroupName: 'Mechanical / Drivetrain',
      ID: 15,
      Name: 'Drive Type',
    },
    {
      DataType: 'int',
      Description:
        '<p>Engine stroke cycle is a numerical field for the number of strokes used by an internal combustion engine to complete a power cycle.</p>',
      GroupName: 'Engine',
      ID: 17,
      Name: 'Engine Stroke Cycles',
    },
    {
      DataType: 'string',
      Description:
        '<p>Engine model is a name that a manufacturer applies to a family of engine.</p>',
      GroupName: 'Engine',
      ID: 18,
      Name: 'Engine Model',
    },
    {
      DataType: 'decimal',
      Description: '<p>This field stores engine power in kilowatts (kW).</p>',
      GroupName: 'Engine',
      ID: 21,
      Name: 'Engine Power (kW)',
    },
    {
      DataType: 'lookup',
      Description:
        '<p>This field defines the type of different entertainment systems in vehicles.</p>',
      GroupName: 'Interior',
      ID: 23,
      Name: 'Entertainment System',
    },
    {
      DataType: 'lookup',
      Description:
        '<p>Fuel type defines the fuel used to power the vehicle. For vehicles that have two power sources, such as plug-in hybrid vehicle, both primary fuel type and secondary fuel type will be provided.</p>',
      GroupName: 'Engine',
      ID: 24,
      Name: 'Fuel Type - Primary',
    },
    {
      DataType: 'lookup',
      Description:
        "<p>Gross vehicle weight rating (GVWR) is the maximum operating weight of a vehicle including the vehicle's chassis, body, engine, engine fluids, fuel, accessories, driver, passengers and cargo, but excluding that of the trailers. Per 49 CFR 565.15, Class 1 is further broken down to Class A-D; Class 2 is further broken down to Class E-H. This field captures the lower bound of GVWR range for the vehicle.</p>",
      GroupName: 'Exterior / Dimension',
      ID: 25,
      Name: 'Gross Vehicle Weight Rating From',
    },
    {
      DataType: 'lookup',
      Description:
        '<p>Per 49 CFR 565, Make is a name that a manufacturer applies to a group of vehicles or engines.</p>',
      GroupName: 'General',
      ID: 26,
      Name: 'Make',
    },
    {
      DataType: 'lookup',
      Description: 'Name of the vehicle manufacturer.',
      GroupName: 'General',
      ID: 27,
      Name: 'Manufacturer Name',
    },
    {
      DataType: 'lookup',
      Description:
        '<p>Per 49 CFR 565, Model means a name that a manufacturer applies to a family of vehicles of the same type, make, line, series and body type.</p>',
      GroupName: 'General',
      ID: 28,
      Name: 'Model',
    },
    {
      DataType: 'int',
      Description:
        '<p>If the model year (MY) is supplied when the VIN is decoded, such as from a crash report or a vehicle registration record, the MY value will be the supplied MY, even if the MY decoded from the VIN differs from the supplied MY. If the MY is not supplied when the VIN is decoded, the MY value will be decoded from the 10th character in the VIN.</p>',
      GroupName: 'General',
      ID: 29,
      Name: 'Model Year',
    },
    {
      DataType: 'string',
      Description:
        '<p>This data element captures the city of the manufacturing plant where the manufacturer affixes the VIN.</p>',
      GroupName: 'General',
      ID: 31,
      Name: 'Plant City',
    },
    {
      DataType: 'int',
      Description:
        '<p>This data element is a numeric field to store the number of seats in a vehicle.</p>',
      GroupName: 'Interior / Seat',
      ID: 33,
      Name: 'Number of Seats',
    },
    {
      DataType: 'string',
      Description:
        '<p>Per 49 CFR 565, Series means a name that a manufacturer applies to a subdivision of a "line" denoting price, size or weight identification and that is used by the manufacturer for marketing purposes.</p>',
      GroupName: 'General',
      ID: 34,
      Name: 'Series',
    },
    {
      DataType: 'lookup',
      Description:
        '<p>This data element captures the location of steering column, either on left- (LHD) or right-hand side (RHD).</p>',
      GroupName: 'Interior',
      ID: 36,
      Name: 'Steering Location',
    },
    {
      DataType: 'lookup',
      Description:
        '<p>Transmission style provides information about the type of transmissions. The major types of transmissions are manual transmission, automatic transmission, continuously variable transmission (CVT), and dual-clutch transmission (DCT).</p> ',
      GroupName: 'Mechanical / Transmission',
      ID: 37,
      Name: 'Transmission Style',
    },
    {
      DataType: 'string',
      Description:
        '<p>Trim levels further identify a vehicle by a particular set of special features. Higher trim levels either will add to the features of the base (entry-level model), or replace them with something else.</p>',
      GroupName: null,
      ID: 38,
      Name: 'Trim',
    },
    // ... more results
  ],
  SearchCriteria: null,
}
// #endregion example-response

export type { GetVehicleVariableListResults }
export { exampleResponse }
