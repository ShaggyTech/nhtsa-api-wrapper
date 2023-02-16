// #region type-results
type DecodeVinResults = {
  Value: string | null
  ValueId: string | null
  Variable: DecodeVinVariable | string
  VariableId: number
}
// #endregion type-results

// #region type-variable-name
type DecodeVinVariable =
  | string
  | 'Suggested VIN'
  | 'Error Code'
  | 'Possible Values'
  | 'Additional Error Text'
  | 'Error Text'
  | 'Vehicle Descriptor'
  | 'Destination Market'
  | 'Make'
  | 'Manufacturer Name'
  | 'Model'
  | 'Model Year'
  | 'Plant City'
  | 'Series'
  | 'Trim'
  | 'Vehicle Type'
  | 'Plant Country'
  | 'Plant Company Name'
  | 'Plant State'
  | 'Trim2'
  | 'Series2'
  | 'Note'
  | 'Base Price ($)'
  | 'Non-Land Use'
  | 'Body Class'
  | 'Doors'
  | 'Windows'
  | 'Wheel Base Type'
  | 'Track Width (inches)'
  | 'Gross Vehicle Weight Rating From'
  | 'Bed Length (inches)'
  | 'Curb Weight (pounds)'
  | 'Wheel Base (inches) From'
  | 'Wheel Base (inches) To'
  | 'Gross Combination Weight Rating From'
  | 'Gross Combination Weight Rating To'
  | 'Gross Vehicle Weight Rating To'
  | 'Bed Type'
  | 'Cab Type'
  | 'Trailer Type Connection'
  | 'Trailer Body Type'
  | 'Trailer Length (feet)'
  | 'Other Trailer Info'
  | 'Number of Wheels'
  | 'Wheel Size Front (inches)'
  | 'Wheel Size Rear (inches)'
  | 'Entertainment System'
  | 'Steering Location'
  | 'Number of Seats'
  | 'Number of Seat Rows'
  | 'Transmission Style'
  | 'Transmission Speeds'
  | 'Drive Type'
  | 'Axles'
  | 'Axle Configuration'
  | 'Brake System Type'
  | 'Brake System Description'
  | 'Other Battery Info'
  | 'Battery Type'
  | 'Number of Battery Cells per Module'
  | 'Battery Current (Amps) From'
  | 'Battery Voltage (Volts) From'
  | 'Battery Energy (kWh) From'
  | 'EV Drive Unit'
  | 'Battery Current (Amps) To'
  | 'Battery Voltage (Volts) To'
  | 'Battery Energy (kWh) To'
  | 'Number of Battery Modules per Pack'
  | 'Number of Battery Packs per Vehicle'
  | 'Charger Level'
  | 'Charger Power (kW)'
  | 'Engine Number of Cylinders'
  | 'Displacement (CC)'
  | 'Displacement (CI)'
  | 'Displacement (L)'
  | 'Engine Stroke Cycles'
  | 'Engine Model'
  | 'Engine Power (kW)'
  | 'Fuel Type - Primary'
  | 'Valve Train Design'
  | 'Engine Configuration'
  | 'Fuel Type - Secondary'
  | 'Fuel Delivery / Fuel Injection Type'
  | 'Engine Brake (hp) From'
  | 'Cooling Type'
  | 'Engine Brake (hp) To'
  | 'Electrification Level'
  | 'Other Engine Info'
  | 'Turbo'
  | 'Top Speed (MPH)'
  | 'Engine Manufacturer'
  | 'Pretensioner'
  | 'Seat Belt Type'
  | 'Other Restraint System Info'
  | 'Curtain Air Bag Locations'
  | 'Seat Cushion Air Bag Locations'
  | 'Front Air Bag Locations'
  | 'Knee Air Bag Locations'
  | 'Side Air Bag Locations'
  | 'Anti-lock Braking System (ABS)'
  | 'Electronic Stability Control (ESC)'
  | 'Traction Control'
  | 'Tire Pressure Monitoring System (TPMS) Type'
  | 'Active Safety System Note'
  | 'Auto-Reverse System for Windows and Sunroofs'
  | 'Automatic Pedestrian Alerting Sound (for Hybrid and EV only)'
  | 'Event Data Recorder (EDR)'
  | 'Keyless Ignition'
  | 'SAE Automation Level From'
  | 'SAE Automation Level To'
  | 'Adaptive Cruise Control (ACC)'
  | 'Crash Imminent Braking (CIB)'
  | 'Blind Spot Warning (BSW)'
  | 'Forward Collision Warning (FCW)'
  | 'Lane Departure Warning (LDW)'
  | 'Lane Keeping Assistance (LKA)'
  | 'Backup Camera'
  | 'Parking Assist'
  | 'Bus Length (feet)'
  | 'Bus Floor Configuration Type'
  | 'Bus Type'
  | 'Other Bus Info'
  | 'Custom Motorcycle Type'
  | 'Motorcycle Suspension Type'
  | 'Motorcycle Chassis Type'
  | 'Other Motorcycle Info'
  | 'Dynamic Brake Support (DBS)'
  | 'Pedestrian Automatic Emergency Braking (PAEB)'
  | 'Automatic Crash Notification (ACN) / Advanced Automatic Crash Notification (AACN)'
  | 'Daytime Running Light (DRL)'
  | 'Headlamp Light Source'
  | 'Semiautomatic Headlamp Beam Switching'
  | 'Adaptive Driving Beam (ADB)'
  | 'Rear Cross Traffic Alert'
  | 'Rear Automatic Emergency Braking'
  | 'Blind Spot Intervention (BSI)'
  | 'Lane Centering Assistance'
// #endregion type-variable-names

// #region example-response
const exampleResponse = {
  Count: 136,
  Message: 'Results returned successfully ...',
  Results: [
    {
      Value: '',
      ValueId: '',
      Variable: 'Suggested VIN',
      VariableId: 142,
    },
    {
      Value: '0',
      ValueId: '0',
      Variable: 'Error Code',
      VariableId: 143,
    },
    {
      Value: '',
      ValueId: '',
      Variable: 'Possible Values',
      VariableId: 144,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Additional Error Text',
      VariableId: 156,
    },
    {
      Value: '0 - VIN decoded clean. Check Digit (9th position) is correct',
      ValueId: '',
      Variable: 'Error Text',
      VariableId: 191,
    },
    {
      Value: 'WA1A4AFY*J2',
      ValueId: '',
      Variable: 'Vehicle Descriptor',
      VariableId: 196,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Destination Market',
      VariableId: 10,
    },
    {
      Value: 'AUDI',
      ValueId: '582',
      Variable: 'Make',
      VariableId: 26,
    },
    {
      Value: 'AUDI AG',
      ValueId: '1149',
      Variable: 'Manufacturer Name',
      VariableId: 27,
    },
    {
      Value: 'SQ5',
      ValueId: '4052',
      Variable: 'Model',
      VariableId: 28,
    },
    {
      Value: '2018',
      ValueId: '',
      Variable: 'Model Year',
      VariableId: 29,
    },
    {
      Value: 'SAN JOSE',
      ValueId: '',
      Variable: 'Plant City',
      VariableId: 31,
    },
    {
      Value: 'SQ5 quattro Premium Plus',
      ValueId: '',
      Variable: 'Series',
      VariableId: 34,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Trim',
      VariableId: 38,
    },
    {
      Value: 'MULTIPURPOSE PASSENGER VEHICLE (MPV)',
      ValueId: '7',
      Variable: 'Vehicle Type',
      VariableId: 39,
    },
    {
      Value: 'MEXICO',
      ValueId: '12',
      Variable: 'Plant Country',
      VariableId: 75,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Plant Company Name',
      VariableId: 76,
    },
    {
      Value: 'CHIAPAS',
      ValueId: '',
      Variable: 'Plant State',
      VariableId: 77,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Trim2',
      VariableId: 109,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Series2',
      VariableId: 110,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Note',
      VariableId: 114,
    },
    {
      Value: '54300',
      ValueId: '',
      Variable: 'Base Price ($)',
      VariableId: 136,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Non-Land Use',
      VariableId: 195,
    },
    {
      Value: 'Sport Utility Vehicle (SUV)/Multi-Purpose Vehicle (MPV)',
      ValueId: '7',
      Variable: 'Body Class',
      VariableId: 5,
    },
    {
      Value: '4',
      ValueId: '',
      Variable: 'Doors',
      VariableId: 14,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Windows',
      VariableId: 40,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Wheel Base Type',
      VariableId: 60,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Track Width (inches)',
      VariableId: 159,
    },
    {
      Value: 'Class 1D: 5,001 - 6,000 lb (2,268 - 2,722 kg)',
      ValueId: '13',
      Variable: 'Gross Vehicle Weight Rating From',
      VariableId: 25,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Bed Length (inches)',
      VariableId: 49,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Curb Weight (pounds)',
      VariableId: 54,
    },
    {
      Value: '111.2',
      ValueId: '',
      Variable: 'Wheel Base (inches) From',
      VariableId: 111,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Wheel Base (inches) To',
      VariableId: 112,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Gross Combination Weight Rating From',
      VariableId: 184,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Gross Combination Weight Rating To',
      VariableId: 185,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Gross Vehicle Weight Rating To',
      VariableId: 190,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Bed Type',
      VariableId: 3,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Cab Type',
      VariableId: 4,
    },
    {
      Value: 'Not Applicable',
      ValueId: '0',
      Variable: 'Trailer Type Connection',
      VariableId: 116,
    },
    {
      Value: 'Not Applicable',
      ValueId: '0',
      Variable: 'Trailer Body Type',
      VariableId: 117,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Trailer Length (feet)',
      VariableId: 118,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Other Trailer Info',
      VariableId: 155,
    },
    {
      Value: '4',
      ValueId: '',
      Variable: 'Number of Wheels',
      VariableId: 115,
    },
    {
      Value: '20',
      ValueId: '',
      Variable: 'Wheel Size Front (inches)',
      VariableId: 119,
    },
    {
      Value: '20',
      ValueId: '',
      Variable: 'Wheel Size Rear (inches)',
      VariableId: 120,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Entertainment System',
      VariableId: 23,
    },
    {
      Value: 'Left-Hand Drive (LHD)',
      ValueId: '1',
      Variable: 'Steering Location',
      VariableId: 36,
    },
    {
      Value: '5',
      ValueId: '',
      Variable: 'Number of Seats',
      VariableId: 33,
    },
    {
      Value: '2',
      ValueId: '',
      Variable: 'Number of Seat Rows',
      VariableId: 61,
    },
    {
      Value: 'Automatic',
      ValueId: '2',
      Variable: 'Transmission Style',
      VariableId: 37,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Transmission Speeds',
      VariableId: 63,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Drive Type',
      VariableId: 15,
    },
    {
      Value: '2',
      ValueId: '',
      Variable: 'Axles',
      VariableId: 41,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Axle Configuration',
      VariableId: 145,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Brake System Type',
      VariableId: 42,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Brake System Description',
      VariableId: 52,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Other Battery Info',
      VariableId: 1,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Battery Type',
      VariableId: 2,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Number of Battery Cells per Module',
      VariableId: 48,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Battery Current (Amps) From',
      VariableId: 57,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Battery Voltage (Volts) From',
      VariableId: 58,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Battery Energy (kWh) From',
      VariableId: 59,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'EV Drive Unit',
      VariableId: 72,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Battery Current (Amps) To',
      VariableId: 132,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Battery Voltage (Volts) To',
      VariableId: 133,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Battery Energy (kWh) To',
      VariableId: 134,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Number of Battery Modules per Pack',
      VariableId: 137,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Number of Battery Packs per Vehicle',
      VariableId: 138,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Charger Level',
      VariableId: 127,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Charger Power (kW)',
      VariableId: 128,
    },
    {
      Value: '6',
      ValueId: '',
      Variable: 'Engine Number of Cylinders',
      VariableId: 9,
    },
    {
      Value: '3000',
      ValueId: '',
      Variable: 'Displacement (CC)',
      VariableId: 11,
    },
    {
      Value: '183.0712322841',
      ValueId: '',
      Variable: 'Displacement (CI)',
      VariableId: 12,
    },
    {
      Value: '3',
      ValueId: '',
      Variable: 'Displacement (L)',
      VariableId: 13,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Engine Stroke Cycles',
      VariableId: 17,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Engine Model',
      VariableId: 18,
    },
    {
      Value: '263.9778',
      ValueId: '',
      Variable: 'Engine Power (kW)',
      VariableId: 21,
    },
    {
      Value: 'Gasoline',
      ValueId: '4',
      Variable: 'Fuel Type - Primary',
      VariableId: 24,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Valve Train Design',
      VariableId: 62,
    },
    {
      Value: 'V-Shaped',
      ValueId: '2',
      Variable: 'Engine Configuration',
      VariableId: 64,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Fuel Type - Secondary',
      VariableId: 66,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Fuel Delivery / Fuel Injection Type',
      VariableId: 67,
    },
    {
      Value: '354',
      ValueId: '',
      Variable: 'Engine Brake (hp) From',
      VariableId: 71,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Cooling Type',
      VariableId: 122,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Engine Brake (hp) To',
      VariableId: 125,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Electrification Level',
      VariableId: 126,
    },
    {
      Value:
        'Fuel: GASOLINE(50-st.); T.G.: JVGAJ03.0N7F; Emis. std:Bin 70/LEV III ULEV 70',
      ValueId: '',
      Variable: 'Other Engine Info',
      VariableId: 129,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Turbo',
      VariableId: 135,
    },
    {
      Value: '130',
      ValueId: '',
      Variable: 'Top Speed (MPH)',
      VariableId: 139,
    },
    {
      Value: 'Audi',
      ValueId: '',
      Variable: 'Engine Manufacturer',
      VariableId: 146,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Pretensioner',
      VariableId: 78,
    },
    {
      Value: 'Manual',
      ValueId: '1',
      Variable: 'Seat Belt Type',
      VariableId: 79,
    },
    {
      Value: 'Advanced Front Airbags.',
      ValueId: '',
      Variable: 'Other Restraint System Info',
      VariableId: 121,
    },
    {
      Value: 'All Rows',
      ValueId: '6',
      Variable: 'Curtain Air Bag Locations',
      VariableId: 55,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Seat Cushion Air Bag Locations',
      VariableId: 56,
    },
    {
      Value: '1st Row (Driver and Passenger)',
      ValueId: '3',
      Variable: 'Front Air Bag Locations',
      VariableId: 65,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Knee Air Bag Locations',
      VariableId: 69,
    },
    {
      Value: '1st Row (Driver and Passenger)',
      ValueId: '3',
      Variable: 'Side Air Bag Locations',
      VariableId: 107,
    },
    {
      Value: 'Standard',
      ValueId: '1',
      Variable: 'Anti-lock Braking System (ABS)',
      VariableId: 86,
    },
    {
      Value: 'Standard',
      ValueId: '1',
      Variable: 'Electronic Stability Control (ESC)',
      VariableId: 99,
    },
    {
      Value: 'Standard',
      ValueId: '1',
      Variable: 'Traction Control',
      VariableId: 100,
    },
    {
      Value: 'Indirect',
      ValueId: '2',
      Variable: 'Tire Pressure Monitoring System (TPMS) Type',
      VariableId: 168,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Active Safety System Note',
      VariableId: 169,
    },
    {
      Value: 'Standard',
      ValueId: '1',
      Variable: 'Auto-Reverse System for Windows and Sunroofs',
      VariableId: 172,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Automatic Pedestrian Alerting Sound (for Hybrid and EV only)',
      VariableId: 173,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Event Data Recorder (EDR)',
      VariableId: 175,
    },
    {
      Value: 'Standard',
      ValueId: '1',
      Variable: 'Keyless Ignition',
      VariableId: 176,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'SAE Automation Level From',
      VariableId: 181,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'SAE Automation Level To',
      VariableId: 182,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Adaptive Cruise Control (ACC)',
      VariableId: 81,
    },
    {
      Value: 'Standard',
      ValueId: '1',
      Variable: 'Crash Imminent Braking (CIB)',
      VariableId: 87,
    },
    {
      Value: 'Standard',
      ValueId: '1',
      Variable: 'Blind Spot Warning (BSW)',
      VariableId: 88,
    },
    {
      Value: 'Standard',
      ValueId: '1',
      Variable: 'Forward Collision Warning (FCW)',
      VariableId: 101,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Lane Departure Warning (LDW)',
      VariableId: 102,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Lane Keeping Assistance (LKA)',
      VariableId: 103,
    },
    {
      Value: 'Standard',
      ValueId: '1',
      Variable: 'Backup Camera',
      VariableId: 104,
    },
    {
      Value: 'Standard',
      ValueId: '1',
      Variable: 'Parking Assist',
      VariableId: 105,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Bus Length (feet)',
      VariableId: 147,
    },
    {
      Value: 'Not Applicable',
      ValueId: '0',
      Variable: 'Bus Floor Configuration Type',
      VariableId: 148,
    },
    {
      Value: 'Not Applicable',
      ValueId: '0',
      Variable: 'Bus Type',
      VariableId: 149,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Other Bus Info',
      VariableId: 150,
    },
    {
      Value: 'Not Applicable',
      ValueId: '0',
      Variable: 'Custom Motorcycle Type',
      VariableId: 151,
    },
    {
      Value: 'Not Applicable',
      ValueId: '0',
      Variable: 'Motorcycle Suspension Type',
      VariableId: 152,
    },
    {
      Value: 'Not Applicable',
      ValueId: '0',
      Variable: 'Motorcycle Chassis Type',
      VariableId: 153,
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Other Motorcycle Info',
      VariableId: 154,
    },
    {
      Value: 'Standard',
      ValueId: '1',
      Variable: 'Dynamic Brake Support (DBS)',
      VariableId: 170,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Pedestrian Automatic Emergency Braking (PAEB)',
      VariableId: 171,
    },
    {
      Value: 'Standard',
      ValueId: '1',
      Variable:
        'Automatic Crash Notification (ACN) / Advanced Automatic Crash Notification (AACN)',
      VariableId: 174,
    },
    {
      Value: 'Standard',
      ValueId: '1',
      Variable: 'Daytime Running Light (DRL)',
      VariableId: 177,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Headlamp Light Source',
      VariableId: 178,
    },
    {
      Value: 'Standard',
      ValueId: '1',
      Variable: 'Semiautomatic Headlamp Beam Switching',
      VariableId: 179,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Adaptive Driving Beam (ADB)',
      VariableId: 180,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Rear Cross Traffic Alert',
      VariableId: 183,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Rear Automatic Emergency Braking',
      VariableId: 192,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Blind Spot Intervention (BSI)',
      VariableId: 193,
    },
    {
      Value: null,
      ValueId: null,
      Variable: 'Lane Centering Assistance',
      VariableId: 194,
    },
  ],
  SearchCriteria: 'VIN:WA1A4AFY2J2008189',
}
// #endregion example-response

export type { DecodeVinResults, DecodeVinVariable }
export { exampleResponse }
