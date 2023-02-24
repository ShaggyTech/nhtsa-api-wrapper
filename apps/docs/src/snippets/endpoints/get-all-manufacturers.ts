// #region type-results
type GetAllManufacturersResults = {
  Country: string
  Mfr_CommonName: string | null
  Mfr_ID: number
  Mfr_Name: string
  VehicleTypes: Array<{ IsPrimary?: boolean; Name?: string }>
}
// #endregion type-results

// #region example-response
// Using GetAllManufacturers({ page: 2 })
const exampleResponse = {
  Count: 83,
  Message: 'Response returned successfully',
  Results: [
    {
      Country: 'UNITED KINGDOM (UK)',
      Mfr_CommonName: 'Jaguar Land Rover',
      Mfr_ID: 1079,
      Mfr_Name: 'JAGUAR LAND ROVER LIMITED',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Passenger Car',
        },
        {
          IsPrimary: false,
          Name: 'Multipurpose Passenger Vehicle (MPV)',
        },
      ],
    },
    {
      Country: 'CHINA',
      Mfr_CommonName: null,
      Mfr_ID: 1080,
      Mfr_Name: 'GEELY GROUP ZHEJIANG MOTORCYCLE CO., LTD.',
      VehicleTypes: [
        {
          IsPrimary: false,
          Name: 'Motorcycle',
        },
      ],
    },
    {
      Country: 'JAPAN',
      Mfr_CommonName: 'Mitsubishi Fuso Truck',
      Mfr_ID: 1081,
      Mfr_Name: 'MITSUBISHI FUSO TRUCK & BUS CORPORATION',
      VehicleTypes: [],
    },
    {
      Country: 'MEXICO',
      Mfr_CommonName: 'Mazda',
      Mfr_ID: 1083,
      Mfr_Name: 'MAZDA MOTOR MANUFACTURING DE MEXICO S.A. DE C.V.',
      VehicleTypes: [],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: null,
      Mfr_ID: 1084,
      Mfr_Name: 'FOREST RIVER, INC.',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Truck ',
        },
        {
          IsPrimary: false,
          Name: 'Bus',
        },
        {
          IsPrimary: false,
          Name: 'Trailer',
        },
        {
          IsPrimary: false,
          Name: 'Multipurpose Passenger Vehicle (MPV)',
        },
      ],
    },
    {
      Country: 'CANADA',
      Mfr_CommonName: 'Toyota',
      Mfr_ID: 1085,
      Mfr_Name: 'TOYOTA MOTOR MANUFACTURING CANADA',
      VehicleTypes: [],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Thomas Built',
      Mfr_ID: 1086,
      Mfr_Name: 'Thomas Built Buses, Inc',
      VehicleTypes: [],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Toyota',
      Mfr_ID: 1087,
      Mfr_Name: 'TOYOTA MOTOR MANUFACTURING, INDIANA, INC.',
      VehicleTypes: [],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Toyota',
      Mfr_ID: 1088,
      Mfr_Name: 'TOYOTA MOTOR MANUFACTURING, KENTUCKY, INC.',
      VehicleTypes: [],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: null,
      Mfr_ID: 1089,
      Mfr_Name: 'JOHN THOMAS, INC',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Trailer',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Toyota',
      Mfr_ID: 1090,
      Mfr_Name: 'TOYOTA MOTOR MANUFACTURING, TEXAS, INC.',
      VehicleTypes: [],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Toyota',
      Mfr_ID: 1091,
      Mfr_Name: 'TOYOTA MOTOR MANUFACTURING, NORTHERN KENTUCKY, INC.',
      VehicleTypes: [],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Thomas Grinding',
      Mfr_ID: 1092,
      Mfr_Name: 'THOMAS GRINDING INC.',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Trailer',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'AM GENERAL',
      Mfr_ID: 1093,
      Mfr_Name: 'AM GENERAL CORPORATION ',
      VehicleTypes: [
        {
          IsPrimary: false,
          Name: 'Multipurpose Passenger Vehicle (MPV)',
        },
      ],
    },
    {
      Country: 'ENGLAND',
      Mfr_CommonName: 'Morgan Motor',
      Mfr_ID: 1094,
      Mfr_Name: 'Morgan Motor Company Ltd',
      VehicleTypes: [],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Morgan Trailers',
      Mfr_ID: 1095,
      Mfr_Name: 'MORGAN TRAILERS, INC',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Trailer',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Altec',
      Mfr_ID: 1096,
      Mfr_Name: 'Altec Environmental Products, LLC',
      VehicleTypes: [],
    },
    {
      Country: 'ENGLAND',
      Mfr_CommonName: 'Morgan 3 Wheeler',
      Mfr_ID: 1097,
      Mfr_Name: 'The Morgan 3 Wheeler Limited',
      VehicleTypes: [],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Isuzu',
      Mfr_ID: 1098,
      Mfr_Name: 'ISUZU MANUFACTURING SERVICES OF AMERICA, INC.',
      VehicleTypes: [],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Central Ohio Fabrication',
      Mfr_ID: 1099,
      Mfr_Name: 'CENTRAL OHIO FABRICATION LLC',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Trailer',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Thor Motor Coach',
      Mfr_ID: 1100,
      Mfr_Name: 'THOR MOTOR COACH INC.',
      VehicleTypes: [],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: null,
      Mfr_ID: 1101,
      Mfr_Name: 'THOR INDUSTRIES',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Trailer',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Breckenridge',
      Mfr_ID: 1102,
      Mfr_Name: 'BRECKENRIDGE',
      VehicleTypes: [],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Cruiser RV',
      Mfr_ID: 1104,
      Mfr_Name: 'CRUISER RV',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Trailer',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: null,
      Mfr_ID: 1106,
      Mfr_Name: 'MVP RV INC. (THOR CALIFORNIA, INC.)',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Trailer',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Thor Manufacturing',
      Mfr_ID: 1107,
      Mfr_Name: 'THOR MANUFACTURING LLC',
      VehicleTypes: [
        {
          IsPrimary: false,
          Name: 'Trailer',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Winnebago Of Indiana',
      Mfr_ID: 1108,
      Mfr_Name: 'WINNEBAGO OF INDIANA, LLC',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Trailer',
        },
      ],
    },
    {
      Country: 'JAPAN',
      Mfr_CommonName: 'HINO TRUCKS',
      Mfr_ID: 1109,
      Mfr_Name: 'HINO MOTORS, LTD.',
      VehicleTypes: [
        {
          IsPrimary: false,
          Name: 'Truck ',
        },
        {
          IsPrimary: false,
          Name: 'Incomplete Vehicle',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Supreme Corp.',
      Mfr_ID: 1110,
      Mfr_Name: 'SUPREME CORPORATION',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Truck ',
        },
        {
          IsPrimary: false,
          Name: 'Trailer',
        },
        {
          IsPrimary: false,
          Name: 'Incomplete Vehicle',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'KNAPHEIDE Truck',
      Mfr_ID: 1115,
      Mfr_Name: 'KNAPHEIDE TRUCK EQUIPMENT COMPANY SOUTHWEST',
      VehicleTypes: [
        {
          IsPrimary: false,
          Name: 'Truck ',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Collins Welding',
      Mfr_ID: 1116,
      Mfr_Name: 'COLLINS WELDING, INC.',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Trailer',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Gillig',
      Mfr_ID: 1118,
      Mfr_Name: 'GILLIG LLC',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Bus',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Champion Trike',
      Mfr_ID: 1119,
      Mfr_Name: 'CHAMPION TRIKE MANUFACTURING INC.',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Motorcycle',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: null,
      Mfr_ID: 1120,
      Mfr_Name: 'CHAMPION TELECOM, INC.',
      VehicleTypes: [
        {
          IsPrimary: false,
          Name: 'Trailer',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: null,
      Mfr_ID: 1121,
      Mfr_Name: 'CHAMPION BRIDGE CO., INC.',
      VehicleTypes: [
        {
          IsPrimary: false,
          Name: 'Trailer',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: null,
      Mfr_ID: 1122,
      Mfr_Name: 'Champion Trailers, Inc.',
      VehicleTypes: [
        {
          IsPrimary: false,
          Name: 'Trailer',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Micro-Lite Trailer',
      Mfr_ID: 1123,
      Mfr_Name: 'MICRO-LITE TRAILER MFG. LLC',
      VehicleTypes: [],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'PIERCE MANUFACTURING',
      Mfr_ID: 1124,
      Mfr_Name: 'PIERCE MANUFACTURING INC.',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Truck ',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'MCI',
      Mfr_ID: 1126,
      Mfr_Name: 'MOTOR COACH INDUSTRIES, INC.',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Bus',
        },
        {
          IsPrimary: false,
          Name: 'Incomplete Vehicle',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: null,
      Mfr_ID: 1127,
      Mfr_Name: 'TURTLEBACK TRAILERS LLC',
      VehicleTypes: [
        {
          IsPrimary: false,
          Name: 'Trailer',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Prevost',
      Mfr_ID: 1128,
      Mfr_Name:
        'PREVOST A DIVISION OF PREVOST CAR (US) INC. (NOVA BUS, INCORPORATED)',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Bus',
        },
      ],
    },
    {
      Country: 'TURKEY',
      Mfr_CommonName: 'TEMSA',
      Mfr_ID: 1129,
      Mfr_Name: 'TEMSA SKODA SABANCI ULASIM ARACLARI A.S.',
      VehicleTypes: [
        {
          IsPrimary: false,
          Name: 'Bus',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Yamaha',
      Mfr_ID: 1130,
      Mfr_Name: 'YAMAHA MOTOR CORPORATION',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Motorcycle',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Triumph Motorcycles',
      Mfr_ID: 1131,
      Mfr_Name: 'TRIUMPH MOTORCYCLES LIMITED',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Motorcycle',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Polaris',
      Mfr_ID: 1132,
      Mfr_Name: 'POLARIS INDUSTRIES INC.',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Motorcycle',
        },
        {
          IsPrimary: false,
          Name: 'Low Speed Vehicle (LSV)',
        },
      ],
    },
    {
      Country: 'ITALY',
      Mfr_CommonName: 'Ducati',
      Mfr_ID: 1133,
      Mfr_Name: 'DUCATI MOTOR HOLDING S.p.A. ',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Motorcycle',
        },
      ],
    },
    {
      Country: 'CANADA',
      Mfr_CommonName: 'BRP',
      Mfr_ID: 1134,
      Mfr_Name: 'BOMBARDIER RECREATIONAL PRODUCTS INC ',
      VehicleTypes: [
        {
          IsPrimary: false,
          Name: 'Motorcycle',
        },
        {
          IsPrimary: false,
          Name: 'Trailer',
        },
        {
          IsPrimary: true,
          Name: 'Low Speed Vehicle (LSV)',
        },
        {
          IsPrimary: false,
          Name: 'Off Road Vehicle',
        },
      ],
    },
    {
      Country: 'TAIWAN',
      Mfr_CommonName: 'Genuine Scooters',
      Mfr_ID: 1135,
      Mfr_Name: 'MOTIVE POWER INDUSTRY CO. LTD.',
      VehicleTypes: [
        {
          IsPrimary: false,
          Name: 'Motorcycle',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: null,
      Mfr_ID: 1136,
      Mfr_Name: 'GENUINE JACKS MANUFACTURING INC',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Trailer',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'SAAB',
      Mfr_ID: 1137,
      Mfr_Name: 'SAAB CARS NORTH AMERICA, INC.',
      VehicleTypes: [],
    },
    {
      Country: 'ITALY',
      Mfr_CommonName: 'Moto Guzzi',
      Mfr_ID: 1139,
      Mfr_Name: 'MOTO GUZZI S.P.A',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Motorcycle',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: null,
      Mfr_ID: 1140,
      Mfr_Name: 'VICTORY SWEEPERS INC',
      VehicleTypes: [],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: null,
      Mfr_ID: 1141,
      Mfr_Name: 'VICTORY INDUSTRIAL PRODUCTS',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Trailer',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: null,
      Mfr_ID: 1142,
      Mfr_Name: 'KTLL Group LLC dBa VICTORY TRAILERS',
      VehicleTypes: [
        {
          IsPrimary: false,
          Name: 'Trailer',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: null,
      Mfr_ID: 1144,
      Mfr_Name: 'ROCKET ROGERS VICTORY OLD 97 CHOPPERS INC',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Motorcycle',
        },
      ],
    },
    {
      Country: '',
      Mfr_CommonName: 'Toyota',
      Mfr_ID: 1145,
      Mfr_Name: 'TOYOTA MOTOR MANUFACTURING, MISSISSIPPI, INC.',
      VehicleTypes: [],
    },
    {
      Country: 'GERMANY',
      Mfr_CommonName: 'Daimler Chrysler',
      Mfr_ID: 1146,
      Mfr_Name: 'DAIMLER CHRYSLER AG',
      VehicleTypes: [],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Volkswagen',
      Mfr_ID: 1147,
      Mfr_Name: 'VOLKSWAGEN GROUP OF AMERICA, INC.',
      VehicleTypes: [
        {
          IsPrimary: false,
          Name: 'Passenger Car',
        },
        {
          IsPrimary: true,
          Name: 'Multipurpose Passenger Vehicle (MPV)',
        },
      ],
    },
    {
      Country: 'GERMANY',
      Mfr_CommonName: 'Volkswagen',
      Mfr_ID: 1148,
      Mfr_Name: 'VOLKSWAGEN AG',
      VehicleTypes: [
        {
          IsPrimary: false,
          Name: 'Passenger Car',
        },
        {
          IsPrimary: false,
          Name: 'Multipurpose Passenger Vehicle (MPV)',
        },
      ],
    },
    {
      Country: 'GERMANY',
      Mfr_CommonName: 'Audi',
      Mfr_ID: 1149,
      Mfr_Name: 'AUDI AG',
      VehicleTypes: [
        {
          IsPrimary: false,
          Name: 'Passenger Car',
        },
        {
          IsPrimary: false,
          Name: 'Multipurpose Passenger Vehicle (MPV)',
        },
      ],
    },
    {
      Country: 'GERMANY',
      Mfr_CommonName: null,
      Mfr_ID: 1150,
      Mfr_Name: 'Audi Sport GmbH',
      VehicleTypes: [
        {
          IsPrimary: false,
          Name: 'Passenger Car',
        },
        {
          IsPrimary: false,
          Name: 'Multipurpose Passenger Vehicle (MPV)',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Google Auto',
      Mfr_ID: 1151,
      Mfr_Name: 'GOOGLE AUTO LLC',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Low Speed Vehicle (LSV)',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Kawasaki',
      Mfr_ID: 1152,
      Mfr_Name: 'KAWASAKI MOTORS, LTD',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Motorcycle',
        },
      ],
    },
    {
      Country: 'TAIWAN',
      Mfr_CommonName: 'Yamaha',
      Mfr_ID: 1153,
      Mfr_Name: 'YAMAHA MOTOR TAIWAN CO., LTD.',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Motorcycle',
        },
      ],
    },
    {
      Country: 'FRANCE',
      Mfr_CommonName: 'Toyota',
      Mfr_ID: 1155,
      Mfr_Name: 'TOYOTA MOTOR MANUFACTURING, FRANCE, S.A.S.',
      VehicleTypes: [],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Workhorse Manufacturing Inc',
      Mfr_ID: 1156,
      Mfr_Name: 'Workhorse Manufacturing, Inc',
      VehicleTypes: [],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Workhorse Water Trailer',
      Mfr_ID: 1157,
      Mfr_Name: 'WATERTRAILERS.NET, INC.',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Trailer',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: null,
      Mfr_ID: 1158,
      Mfr_Name: 'WORKHORSE INDUSTRIES OF TEXAS',
      VehicleTypes: [],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Shasta',
      Mfr_ID: 1159,
      Mfr_Name: 'Shasta Industries LLC',
      VehicleTypes: [],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Buell',
      Mfr_ID: 1162,
      Mfr_Name: 'BUELL MOTORCYCLE COMPANY',
      VehicleTypes: [],
    },
    {
      Country: 'BELGIUM',
      Mfr_CommonName: 'Van Hool',
      Mfr_ID: 1163,
      Mfr_Name: 'VAN HOOL N.V.',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Bus',
        },
        {
          IsPrimary: false,
          Name: 'Incomplete Vehicle',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Volvo Bus (Mexico)',
      Mfr_ID: 1164,
      Mfr_Name: 'VOLVO INDUSTRIAL DE MEXICO, S.A. DE C.V.',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Bus',
        },
      ],
    },
    {
      Country: 'BRAZIL',
      Mfr_CommonName: 'Busscar',
      Mfr_ID: 1166,
      Mfr_Name: 'BUSSCAR ONIBUS S.A.',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Bus',
        },
      ],
    },
    {
      Country: 'CHINA',
      Mfr_CommonName: 'ZheJiang LingYun',
      Mfr_ID: 1167,
      Mfr_Name: 'ZheJiang LingYun Motorcycle Co., Ltd.',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Motorcycle',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'KTMMEX ',
      Mfr_ID: 1168,
      Mfr_Name: 'KTMMEX SA. DE CV.',
      VehicleTypes: [],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Ferrari',
      Mfr_ID: 1169,
      Mfr_Name: 'FERRARI NORTH AMERICA, INC.',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Passenger Car',
        },
      ],
    },
    {
      Country: 'JAPAN',
      Mfr_CommonName: 'Isuzu',
      Mfr_ID: 1171,
      Mfr_Name: 'ISUZU MOTORS LIMITED, JAPAN',
      VehicleTypes: [
        {
          IsPrimary: false,
          Name: 'Passenger Car',
        },
        {
          IsPrimary: false,
          Name: 'Truck ',
        },
        {
          IsPrimary: false,
          Name: 'Multipurpose Passenger Vehicle (MPV)',
        },
        {
          IsPrimary: false,
          Name: 'Incomplete Vehicle',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'BRECKENRIDGE PARK',
      Mfr_ID: 1173,
      Mfr_Name: 'DAMON CORPORATION',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Multipurpose Passenger Vehicle (MPV)',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'MOBILITY VENTURES',
      Mfr_ID: 1174,
      Mfr_Name: 'AM GENERAL LLC',
      VehicleTypes: [
        {
          IsPrimary: false,
          Name: 'Multipurpose Passenger Vehicle (MPV)',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: 'Q3',
      Mfr_ID: 1175,
      Mfr_Name: 'O3 INDUSTRIES LLC',
      VehicleTypes: [
        {
          IsPrimary: false,
          Name: 'Trailer',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: '280 Trailers',
      Mfr_ID: 1176,
      Mfr_Name: '280 TRAILERS LLC',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Trailer',
        },
      ],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: '3D Custom Aluminum',
      Mfr_ID: 1177,
      Mfr_Name: '3D CUSTOM ALUMINUM, LLC',
      VehicleTypes: [],
    },
    {
      Country: 'UNITED STATES (USA)',
      Mfr_CommonName: null,
      Mfr_ID: 1178,
      Mfr_Name: '3T MFG.',
      VehicleTypes: [
        {
          IsPrimary: false,
          Name: 'Trailer',
        },
        {
          IsPrimary: false,
          Name: 'Incomplete Vehicle',
        },
      ],
    },
  ],
  SearchCriteria: null,
}
// #endregion example-response

export type { GetAllManufacturersResults }
export { exampleResponse }
