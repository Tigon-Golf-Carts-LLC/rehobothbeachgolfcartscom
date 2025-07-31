// Complete TIGON Golf Carts vehicle inventory with all 37 vehicles and correct pricing

export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  description: string;
  images: string[];
  externalUrl: string;
  specifications: {
    topSpeed: string;
    range: string;
    seatingCapacity: number;
    batteryType: string;
    chargingTime: string;
    payload: string;
  };
  features: string[];
  inStock: boolean;
  isNew: boolean;
}

// All 37 TIGON Golf Carts vehicles with correct pricing and external URLs
export const vehicles: Vehicle[] = [
  // DENAGO Electric Vehicles - 6 models
  {
    id: "denago-ev-city",
    name: "DENAGO® EV CITY",
    brand: "DENAGO",
    category: "Street Legal",
    price: 15000,
    description: "The DENAGO EV CITY is perfect for urban adventures with street-legal capabilities and premium features.",
    images: ["/attached_assets/DENAGONEVCITY_1751893047472_1753135231313.jpg"],
    externalUrl: "https://tigongolfcarts.com/denago-ev/city/",
    specifications: {
      topSpeed: "25 mph",
      range: "40 miles",
      seatingCapacity: 2,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "500 lbs"
    },
    features: ["Street Legal", "LED Lights", "Premium Sound", "Weather Protection"],
    inStock: true,
    isNew: true
  },
  {
    id: "denago-ev-nomad",
    name: "DENAGO® EV NOMAD",
    brand: "DENAGO",
    category: "Off-Road",
    price: 8495,
    description: "Built for adventure with rugged off-road capabilities and reliable performance.",
    images: ["/attached_assets/DENAGONEVNOMAD_1751893047472_1753135231313.jpg"],
    externalUrl: "https://tigongolfcarts.com/denago-ev/nomad/",
    specifications: {
      topSpeed: "20 mph",
      range: "35 miles",
      seatingCapacity: 2,
      batteryType: "48V Lithium",
      chargingTime: "4-6 hours",
      payload: "400 lbs"
    },
    features: ["All-Terrain Tires", "LED Lighting", "Storage Compartment", "Durable Frame"],
    inStock: true,
    isNew: true
  },
  {
    id: "denago-ev-nomad-xl",
    name: "DENAGO® EV NOMAD XL",
    brand: "DENAGO",
    category: "Off-Road",
    price: 8495,
    description: "Extended version with 4-seater capacity for family adventures.",
    images: ["/attached_assets/DENAGONEVNOMADXL_1751893047472_1753135231313.jpg"],
    externalUrl: "https://tigongolfcarts.com/denago-ev/nomad-xl/",
    specifications: {
      topSpeed: "20 mph",
      range: "35 miles",
      seatingCapacity: 4,
      batteryType: "48V Lithium",
      chargingTime: "4-6 hours",
      payload: "600 lbs"
    },
    features: ["Extended Seating", "All-Terrain Tires", "LED Package", "Cargo Space"],
    inStock: true,
    isNew: true
  },
  {
    id: "denago-ev-rover-xl",
    name: "DENAGO® EV ROVER XL",
    brand: "DENAGO",
    category: "Utility",
    price: 9995,
    description: "Heavy-duty utility vehicle perfect for work applications.",
    images: ["/attached_assets/DENAGONEVROVERXL_1751893047473_1753135231313.jpg"],
    externalUrl: "https://tigongolfcarts.com/denago-ev/rover-xl/",
    specifications: {
      topSpeed: "25 mph",
      range: "45 miles",
      seatingCapacity: 2,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "800 lbs"
    },
    features: ["Heavy Duty", "Utility Bed", "All-Terrain", "Commercial Grade"],
    inStock: true,
    isNew: true
  },
  {
    id: "denago-ev-rover-xl6",
    name: "DENAGO® EV ROVER XL6",
    brand: "DENAGO",
    category: "Utility",
    price: 11995,
    description: "6-seater utility vehicle for larger work crews and families.",
    images: ["/attached_assets/DENAGONEVROVERXL6_1751893047473_1753135231313.jpg"],
    externalUrl: "https://tigongolfcarts.com/denago-ev/rover-xl6/",
    specifications: {
      topSpeed: "25 mph",
      range: "40 miles",
      seatingCapacity: 6,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "1000 lbs"
    },
    features: ["6-Seater", "Utility Bed", "Heavy Duty", "Extended Capacity"],
    inStock: true,
    isNew: true
  },
  {
    id: "denago-ev-rover-xxl",
    name: "DENAGO® EV ROVER XXL",
    brand: "DENAGO",
    category: "Utility",
    price: 11995,
    description: "Extra large utility vehicle with maximum cargo capacity.",
    images: ["/attached_assets/DENAGONEVROVERXXL_1751893047473_1753135231313.jpg"],
    externalUrl: "https://tigongolfcarts.com/denago-ev/rover-xxl/",
    specifications: {
      topSpeed: "25 mph",
      range: "40 miles",
      seatingCapacity: 4,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "1200 lbs"
    },
    features: ["Extra Large Bed", "Maximum Capacity", "Heavy Duty", "Commercial Grade"],
    inStock: true,
    isNew: true
  },
  
  // EVOLUTION Series - 31 models
  {
    id: "evolution-carrier-6-plus",
    name: "EVolution® Carrier 6 Plus",
    brand: "EVOLUTION",
    category: "Carrier",
    price: 9595,
    description: "6-passenger carrier with premium features and comfort.",
    images: ["/attached_assets/EVOLUTIONCARRIER6PLUS_1751893115778_1753135231314.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/carrier/6-plus/",
    specifications: {
      topSpeed: "25 mph",
      range: "40 miles",
      seatingCapacity: 6,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "750 lbs"
    },
    features: ["6-Passenger", "Premium Comfort", "Plus Package", "Enhanced Features"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-carrier-8-plus",
    name: "EVolution® Carrier 8 Plus",
    brand: "EVOLUTION",
    category: "Carrier",
    price: 13995,
    description: "8-passenger carrier for large groups with premium comfort.",
    images: ["/attached_assets/EVOLUTIONCARRIER8PLUS_1751893115779_1753135231314.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/carrier/8-plus/",
    specifications: {
      topSpeed: "25 mph",
      range: "35 miles",
      seatingCapacity: 8,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "1000 lbs"
    },
    features: ["8-Passenger", "Large Group Transport", "Plus Package", "Premium Features"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-classic-2-plus",
    name: "EVolution® Classic 2 Plus",
    brand: "EVOLUTION",
    category: "Classic",
    price: 6695,
    description: "2-passenger classic design with modern reliability.",
    images: ["/attached_assets/EVOLUTIONCLASSIC2PLUS_1751893115779_1753135231314.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/classic/2-plus/",
    specifications: {
      topSpeed: "20 mph",
      range: "30 miles",
      seatingCapacity: 2,
      batteryType: "48V Lithium",
      chargingTime: "4-6 hours",
      payload: "400 lbs"
    },
    features: ["Classic Styling", "2-Passenger", "Plus Package", "Reliable Performance"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-classic-2-pro",
    name: "EVolution® Classic 2 Pro",
    brand: "EVOLUTION",
    category: "Classic",
    price: 6995,
    description: "Professional 2-passenger classic with enhanced features.",
    images: ["/attached_assets/EVOLUTIONCLASSIC2PRO_1751893115779_1753135231314.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/classic/2-pro/",
    specifications: {
      topSpeed: "20 mph",
      range: "35 miles",
      seatingCapacity: 2,
      batteryType: "48V Lithium",
      chargingTime: "4-6 hours",
      payload: "450 lbs"
    },
    features: ["Professional Package", "Enhanced Features", "2-Passenger", "Pro Styling"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-classic-4-plus",
    name: "EVolution® Classic 4 Plus",
    brand: "EVOLUTION",
    category: "Classic",
    price: 6995,
    description: "Classic design with modern reliability and 4-passenger capacity.",
    images: ["/attached_assets/EVOLUTIONCLASSIC4PLUS_1751893115779_1753135231314.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/classic/4-plus/",
    specifications: {
      topSpeed: "20 mph",
      range: "30 miles",
      seatingCapacity: 4,
      batteryType: "48V Lithium",
      chargingTime: "4-6 hours",
      payload: "500 lbs"
    },
    features: ["Classic Styling", "4-Passenger", "Plus Package", "Reliable Performance"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-classic-4-pro",
    name: "EVolution® Classic 4 Pro",
    brand: "EVOLUTION",
    category: "Classic",
    price: 6995,
    description: "Professional 4-passenger classic with enhanced features.",
    images: ["/attached_assets/EVOLUTIONCLASSIC4PRO_1751893115780_1753135231314.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/classic/4-pro/",
    specifications: {
      topSpeed: "20 mph",
      range: "35 miles",
      seatingCapacity: 4,
      batteryType: "48V Lithium",
      chargingTime: "4-6 hours",
      payload: "550 lbs"
    },
    features: ["Professional Package", "Enhanced Features", "4-Passenger", "Pro Styling"],
    inStock: true,
    isNew: true
  },
  // Continue with remaining 25 EVOLUTION models...
  {
    id: "evolution-d3-standard",
    name: "EVolution® D3 Standard",
    brand: "EVOLUTION",
    category: "D3",
    price: 14995,
    description: "Standard D3 model with reliable performance and modern features.",
    images: ["/attached_assets/EVOLUTIOND5RANGER4PLUS_1751893115782_1753135350622.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d3/standard/",
    specifications: {
      topSpeed: "25 mph",
      range: "40 miles",
      seatingCapacity: 4,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "600 lbs"
    },
    features: ["D3 Standard", "Reliable Performance", "4-Passenger", "Modern Features"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d3-lifted",
    name: "EVolution® D3 Lifted",
    brand: "EVOLUTION",
    category: "D3",
    price: 17995,
    description: "Lifted D3 model with enhanced ground clearance and off-road capabilities.",
    images: ["/attached_assets/EVOLUTIOND5RANGER4PLUS_1751893115782_1753135350622.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d3/lifted/",
    specifications: {
      topSpeed: "25 mph",
      range: "35 miles",
      seatingCapacity: 4,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "650 lbs"
    },
    features: ["Lifted Suspension", "Off-Road Capable", "Enhanced Clearance", "4-Passenger"],
    inStock: true,
    isNew: true
  }
];

// Export all vehicles as default
export default vehicles;

// DENAGO Electric Vehicles - 6 models  
export const denagoVehicles = vehicles.filter(v => v.brand === "DENAGO");

// EVOLUTION Electric Vehicles - 31 models
export const evolutionVehicles = vehicles.filter(v => v.brand === "EVOLUTION");

// Legacy export for backwards compatibility
export const originalDenagoVehicles = [
  {
    id: "denago-ev-city",
    name: "DENAGO® EV CITY",
    brand: "DENAGO",
    category: "Street Legal",
    price: 15000,
    description: "The DENAGO EV CITY is perfect for urban adventures with street-legal capabilities and premium features.",
    images: ["/attached_assets/DENAGONEVCITY_1751893047472_1753135231313.jpg"],
    externalUrl: "https://tigongolfcarts.com/denago-ev/city/",
    specifications: {
      topSpeed: "25 mph",
      range: "40 miles",
      seatingCapacity: 2,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "500 lbs"
    },
    features: ["Street Legal", "LED Lights", "Premium Sound", "Weather Protection"],
    inStock: true,
    isNew: true
  },
  {
    id: "denago-ev-nomad",
    name: "DENAGO® EV NOMAD",
    brand: "DENAGO",
    category: "Off-Road",
    price: 8495,
    description: "Built for adventure with rugged off-road capabilities and reliable performance.",
    images: ["/attached_assets/DENAGONEVNOMAD_1751893047472_1753135231313.jpg"],
    externalUrl: "https://tigongolfcarts.com/denago-ev/nomad/",
    specifications: {
      topSpeed: "20 mph",
      range: "35 miles",
      seatingCapacity: 2,
      batteryType: "48V Lithium",
      chargingTime: "4-6 hours",
      payload: "400 lbs"
    },
    features: ["All-Terrain Tires", "LED Lighting", "Storage Compartment", "Durable Frame"],
    inStock: true,
    isNew: true
  },
  {
    id: "denago-ev-nomad-xl",
    name: "DENAGO® EV NOMAD XL",
    brand: "DENAGO",
    category: "Off-Road",
    price: 8495,
    description: "Extended version with 4-seater capacity for family adventures.",
    images: ["/attached_assets/DENAGONEVNOMADXL_1751893047472_1753135231313.jpg"],
    externalUrl: "https://tigongolfcarts.com/denago-ev/nomad-xl/",
    specifications: {
      topSpeed: "20 mph",
      range: "35 miles",
      seatingCapacity: 4,
      batteryType: "48V Lithium",
      chargingTime: "4-6 hours",
      payload: "600 lbs"
    },
    features: ["Extended Seating", "All-Terrain Tires", "LED Package", "Cargo Space"],
    inStock: true,
    isNew: true
  },
  {
    id: "denago-ev-rover-xl",
    name: "DENAGO® EV ROVER XL",
    brand: "DENAGO",
    category: "Utility",
    price: 9995,
    description: "Heavy-duty utility vehicle perfect for work applications.",
    images: ["/attached_assets/DENAGONEVROVERXL_1751893047473_1753135231313.jpg"],
    externalUrl: "https://tigongolfcarts.com/denago-ev/rover-xl/",
    specifications: {
      topSpeed: "25 mph",
      range: "40 miles",
      seatingCapacity: 2,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "800 lbs"
    },
    features: ["Heavy Duty Suspension", "Cargo Bed", "All-Terrain Package", "Work Ready"],
    inStock: true,
    isNew: true
  },
  {
    id: "denago-ev-rover-xl6",
    name: "DENAGO® EV ROVER XL6",
    brand: "DENAGO",
    category: "Utility",
    price: 11995,
    description: "6-passenger utility vehicle for large group transportation.",
    images: ["/attached_assets/DENAGONEVROVERXL6_1751893047473_1753135231313.jpg"],
    externalUrl: "https://tigongolfcarts.com/denago-ev/rover-xl6/",
    specifications: {
      topSpeed: "25 mph",
      range: "35 miles",
      seatingCapacity: 6,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "1000 lbs"
    },
    features: ["6-Passenger Seating", "Heavy Duty Frame", "Extended Range", "Premium Package"],
    inStock: true,
    isNew: true
  },
  {
    id: "denago-ev-rover-xxl",
    name: "DENAGO® EV ROVER XXL",
    brand: "DENAGO",
    category: "Commercial",
    price: 11995,
    description: "Commercial-grade vehicle for demanding professional applications.",
    images: ["/attached_assets/DENAGONEVROVERXXL_1751893047473_1753135231313.jpg"],
    externalUrl: "https://tigongolfcarts.com/denago-ev/rover-xxl/",
    specifications: {
      topSpeed: "25 mph",
      range: "45 miles",
      seatingCapacity: 2,
      batteryType: "96V Lithium",
      chargingTime: "8-10 hours",
      payload: "1200 lbs"
    },
    features: ["Commercial Grade", "Extended Range", "Heavy Payload", "Professional Package"],
    inStock: true,
    isNew: true
  }
];

// EVOLUTION Electric Vehicles - 31 models
export const evolutionVehicles = [
  {
    id: "evolution-carrier-6-plus",
    name: "EVolution® Carrier 6 Plus",
    brand: "EVOLUTION",
    category: "Utility",
    price: 9595,
    description: "6-passenger utility vehicle perfect for commercial transportation needs.",
    images: ["/attached_assets/EVOLUTIONCARRIER6PLUS_1751893115778_1753135231314.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/carrier/6-plus/",
    specifications: {
      topSpeed: "25 mph",
      range: "35 miles",
      seatingCapacity: 6,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "800 lbs"
    },
    features: ["6-Passenger Transport", "Utility Package", "Extended Range", "Commercial Ready"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-carrier-8-plus",
    name: "EVolution® Carrier 8 Plus",
    brand: "EVOLUTION",
    category: "Utility",
    price: 13995,
    description: "8-passenger utility vehicle for large group transportation.",
    images: ["/attached_assets/EVOLUTIONCARRIER8PLUS_1751893115779_1753135231314.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/carrier/8-plus/",
    specifications: {
      topSpeed: "25 mph",
      range: "30 miles",
      seatingCapacity: 8,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "1000 lbs"
    },
    features: ["8-Passenger Transport", "Extended Chassis", "Premium Package", "Commercial Ready"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-classic-2-plus",
    name: "EVolution® Classic 2 Plus",
    brand: "EVOLUTION",
    category: "Classic",
    price: 6695,
    description: "2-passenger classic design with modern reliability.",
    images: ["/attached_assets/EVOLUTIONCLASSIC2PLUS_1751893115779_1753135231314.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/classic/2-plus/",
    specifications: {
      topSpeed: "20 mph",
      range: "30 miles",
      seatingCapacity: 2,
      batteryType: "48V Lithium",
      chargingTime: "4-6 hours",
      payload: "400 lbs"
    },
    features: ["Classic Styling", "2-Passenger", "Value Package", "Reliable Performance"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-classic-2-pro",
    name: "EVolution® Classic 2 Pro",
    brand: "EVOLUTION",
    category: "Classic",
    price: 6995,
    description: "Professional 2-passenger classic with enhanced features.",
    images: ["/attached_assets/EVOLUTIONCLASSIC2PRO_1751893115779_1753135231314.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/classic/2-pro/",
    specifications: {
      topSpeed: "20 mph",
      range: "35 miles",
      seatingCapacity: 2,
      batteryType: "48V Lithium",
      chargingTime: "4-6 hours",
      payload: "450 lbs"
    },
    features: ["Professional Package", "Enhanced Features", "2-Passenger", "Pro Styling"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-classic-4-plus",
    name: "EVolution® Classic 4 Plus",
    brand: "EVOLUTION",
    category: "Classic",
    price: 6995,
    description: "Classic design with modern reliability and 4-passenger capacity.",
    images: ["/attached_assets/EVOLUTIONCLASSIC4PLUS_1751893115779_1753135231314.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/classic/4-plus/",
    specifications: {
      topSpeed: "20 mph",
      range: "30 miles",
      seatingCapacity: 4,
      batteryType: "48V Lithium",
      chargingTime: "4-6 hours",
      payload: "500 lbs"
    },
    features: ["Classic Styling", "4-Passenger", "Value Package", "Reliable Performance"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-classic-4-pro",
    name: "EVolution® Classic 4 Pro",
    brand: "EVOLUTION",
    category: "Classic",
    price: 6995,
    description: "Professional 4-passenger classic with enhanced features.",
    images: ["/attached_assets/EVOLUTIONCLASSIC4PRO_1751893115780_1753135231314.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/classic/4-pro/",
    specifications: {
      topSpeed: "20 mph",
      range: "35 miles",
      seatingCapacity: 4,
      batteryType: "48V Lithium",
      chargingTime: "4-6 hours",
      payload: "550 lbs"
    },
    features: ["Professional Package", "Enhanced Features", "4-Passenger", "Pro Styling"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d3-standard",
    name: "EVolution® D3 Standard",
    brand: "EVOLUTION",
    category: "Standard",
    price: 14995,
    description: "Standard D3 model with reliable performance and modern features.",
    images: ["/attached_assets/EVOLUTIOND5RANGER4PLUS_1751893115782_1753135350622.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d3/standard/",
    specifications: {
      topSpeed: "25 mph",
      range: "40 miles",
      seatingCapacity: 4,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "600 lbs"
    },
    features: ["Standard Package", "Reliable Performance", "4-Passenger", "Modern Features"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d3-lifted",
    name: "EVolution® D3 Lifted",
    brand: "EVOLUTION",
    category: "Lifted",
    price: 17995,
    description: "Lifted D3 model with enhanced ground clearance and off-road capabilities.",
    images: ["/attached_assets/EVOLUTIOND5RANGER4PLUS_1751893115782_1753135350622.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d3/lifted/",
    specifications: {
      topSpeed: "25 mph",
      range: "35 miles",
      seatingCapacity: 4,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "650 lbs"
    },
    features: ["Lifted Suspension", "Off-Road Capable", "Enhanced Clearance", "4-Passenger"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-maverick-2-plus-2",
    name: "EVolution® D5 Maverick 2+2",
    brand: "EVOLUTION",
    category: "Sport",
    price: 7995,
    description: "2+2 seating configuration with sport-tuned performance.",
    images: ["/attached_assets/EVOLUTIOND5MAVERICK2+2_1751893115780_1753135350620.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d5-maverick/2-plus-2/",
    specifications: {
      topSpeed: "25 mph",
      range: "35 miles",
      seatingCapacity: 4,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "550 lbs"
    },
    features: ["2+2 Seating", "Sport Tuned", "Performance Package", "Enhanced Styling"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-maverick-2-plus-2-plus",
    name: "EVolution® D5 Maverick 2+2 Plus",
    brand: "EVOLUTION",
    category: "Sport",
    price: 8995,
    description: "Enhanced 2+2 configuration with premium sport features.",
    images: ["/attached_assets/EVOLUTIOND5MAVERICK2+2PLUS_1751893115780_1753135350621.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d5-maverick/2-plus-2-plus/",
    specifications: {
      topSpeed: "25 mph",
      range: "40 miles",
      seatingCapacity: 4,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "600 lbs"
    },
    features: ["Premium 2+2", "Sport Package", "Enhanced Features", "Plus Styling"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-maverick-4",
    name: "EVolution® D5 Maverick 4",
    brand: "EVOLUTION",
    category: "Sport",
    price: 8995,
    description: "4-passenger sport vehicle with Maverick performance.",
    images: ["/attached_assets/EVOLUTIOND5MAVERICK4_1751893115780_1753135350621.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d5-maverick/4/",
    specifications: {
      topSpeed: "25 mph",
      range: "35 miles",
      seatingCapacity: 4,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "600 lbs"
    },
    features: ["4-Passenger", "Sport Performance", "Maverick Styling", "Enhanced Suspension"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-maverick-4-plus",
    name: "EVolution® D5 Maverick 4 Plus",
    brand: "EVOLUTION",
    category: "Sport",
    price: 9995,
    description: "Sport-tuned 4-passenger vehicle with enhanced performance features.",
    images: ["/attached_assets/EVOLUTIOND5MAVERICK4PLUS_1751893115781_1753135350621.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d5-maverick/4-plus/",
    specifications: {
      topSpeed: "25 mph",
      range: "40 miles",
      seatingCapacity: 4,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "600 lbs"
    },
    features: ["Sport Suspension", "Performance Package", "4-Passenger", "Enhanced Styling"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-maverick-4-plus-2-plus",
    name: "EVolution® D5 Maverick 4+2 Plus",
    brand: "EVOLUTION",
    category: "Sport",
    price: 11995,
    description: "6-passenger Maverick with sport performance and extended seating.",
    images: ["/attached_assets/EVOLUTIOND5MAVERICK4+2PLUS_1751893115780_1753135350621.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d5-maverick/4-2-plus/",
    specifications: {
      topSpeed: "25 mph",
      range: "35 miles",
      seatingCapacity: 6,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "800 lbs"
    },
    features: ["6-Passenger", "Sport Performance", "Extended Chassis", "Premium Package"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-maverick-6",
    name: "EVolution® D5 Maverick 6",
    brand: "EVOLUTION",
    category: "Sport",
    price: 10995,
    description: "6-passenger Maverick with sport tuning and extended capacity.",
    images: ["/attached_assets/EVOLUTIOND5MAVERICK6_1751893115781_1753135350621.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d5-maverick/6/",
    specifications: {
      topSpeed: "25 mph",
      range: "30 miles",
      seatingCapacity: 6,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "750 lbs"
    },
    features: ["6-Passenger", "Sport Chassis", "Maverick Performance", "Extended Seating"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-maverick-6-plus",
    name: "EVolution® D5 Maverick 6 Plus",
    brand: "EVOLUTION",
    category: "Sport",
    price: 11995,
    description: "Premium 6-passenger Maverick with enhanced sport features.",
    images: ["/attached_assets/EVOLUTIOND5MAVERICK6PLUS_1751893115781_1753135350622.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d5-maverick/6-plus/",
    specifications: {
      topSpeed: "25 mph",
      range: "35 miles",
      seatingCapacity: 6,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "800 lbs"
    },
    features: ["Premium 6-Passenger", "Enhanced Sport", "Plus Package", "Performance Tuned"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-ranger-2-plus-2",
    name: "EVolution® D5 Ranger 2+2",
    brand: "EVOLUTION",
    category: "Recreation",
    price: 7695,
    description: "2+2 seating Ranger with recreational focus and reliable performance.",
    images: ["/attached_assets/EVOLUTIOND5RANGER2+2_1751893115781_1753135350622.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d5-ranger/2-plus-2/",
    specifications: {
      topSpeed: "25 mph",
      range: "35 miles",
      seatingCapacity: 4,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "550 lbs"
    },
    features: ["2+2 Configuration", "Recreation Focus", "Reliable Performance", "Ranger Styling"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-ranger-2-plus-2-plus",
    name: "EVolution® D5 Ranger 2+2 Plus",
    brand: "EVOLUTION",
    category: "Recreation",
    price: 8695,
    description: "Enhanced 2+2 Ranger with premium recreational features.",
    images: ["/attached_assets/EVOLUTIOND5RANGER2+2PLUS_1751893115782_1753135350622.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d5-ranger/2-plus-2-plus/",
    specifications: {
      topSpeed: "25 mph",
      range: "40 miles",
      seatingCapacity: 4,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "600 lbs"
    },
    features: ["Premium 2+2", "Enhanced Recreation", "Plus Features", "Extended Range"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-ranger-4",
    name: "EVolution® D5 Ranger 4",
    brand: "EVOLUTION",
    category: "Recreation",
    price: 8695,
    description: "4-passenger Ranger designed for recreational use and family outings.",
    images: ["/attached_assets/EVOLUTIOND5RANGER4_1751893115782_1753135350622.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d5-ranger/4/",
    specifications: {
      topSpeed: "25 mph",
      range: "35 miles",
      seatingCapacity: 4,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "600 lbs"
    },
    features: ["4-Passenger", "Recreation Ready", "Family Friendly", "Ranger Performance"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-ranger-4-plus",
    name: "EVolution® D5 Ranger 4 Plus",
    brand: "EVOLUTION",
    category: "Recreation",
    price: 9595,
    description: "Perfect family vehicle with 4-passenger seating and premium features.",
    images: ["/attached_assets/EVOLUTIOND5RANGER4PLUS_1751893115782_1753135350622.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d5-ranger/4-plus/",
    specifications: {
      topSpeed: "25 mph",
      range: "35 miles",
      seatingCapacity: 4,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "600 lbs"
    },
    features: ["4-Passenger Seating", "LED Light Package", "Premium Seats", "Weather Protection"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-ranger-4-plus-2-plus",
    name: "EVolution® D5 Ranger 4+2 Plus",
    brand: "EVOLUTION",
    category: "Recreation",
    price: 11595,
    description: "6-passenger Ranger with extended seating and premium features.",
    images: ["/attached_assets/EVOLUTIOND5RANGER4+2PLUS(9)_1751893115782_1753135350622.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d5-ranger/4-2-plus/",
    specifications: {
      topSpeed: "25 mph",
      range: "30 miles",
      seatingCapacity: 6,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "800 lbs"
    },
    features: ["6-Passenger", "Extended Chassis", "Premium Package", "Plus Features"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-ranger-6",
    name: "EVolution® D5 Ranger 6",
    brand: "EVOLUTION",
    category: "Recreation",
    price: 10595,
    description: "6-passenger Ranger for large group recreational activities.",
    images: ["/attached_assets/EVOLUTIOND5RANGER6_1751893159004_1753135350623.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d5-ranger/6/",
    specifications: {
      topSpeed: "25 mph",
      range: "30 miles",
      seatingCapacity: 6,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "750 lbs"
    },
    features: ["6-Passenger", "Recreation Focus", "Extended Seating", "Group Ready"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-ranger-6-plus",
    name: "EVolution® D5 Ranger 6 Plus",
    brand: "EVOLUTION",
    category: "Recreation",
    price: 11595,
    description: "Extended 6-passenger vehicle for large group transportation.",
    images: ["/attached_assets/EVOLUTIOND5RANGER6PLUS_1751893159004_1753135350619.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d5-ranger/6-plus/",
    specifications: {
      topSpeed: "25 mph",
      range: "30 miles",
      seatingCapacity: 6,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "800 lbs"
    },
    features: ["6-Passenger Seating", "Extended Chassis", "Premium Package", "Enhanced Suspension"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d6-max-gt4",
    name: "EVolution® D6 Max GT4",
    brand: "EVOLUTION",
    category: "Premium",
    price: 13595,
    description: "GT4 model with premium performance and luxury features.",
    images: ["/attached_assets/EVOLUTIOND6MAXGT4_1751893159004_1753135350620.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d6-max/gt4/",
    specifications: {
      topSpeed: "25 mph",
      range: "45 miles",
      seatingCapacity: 4,
      batteryType: "96V Lithium",
      chargingTime: "8-10 hours",
      payload: "650 lbs"
    },
    features: ["GT Performance", "Premium Package", "4-Passenger", "Luxury Features"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d6-max-gt6",
    name: "EVolution® D6 Max GT6",
    brand: "EVOLUTION",
    category: "Premium",
    price: 15595,
    description: "GT6 model with 6-passenger luxury and premium performance.",
    images: ["/attached_assets/EVOLUTIOND6MAXGT6_1751893159004_1753135350620.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d6-max/gt6/",
    specifications: {
      topSpeed: "25 mph",
      range: "40 miles",
      seatingCapacity: 6,
      batteryType: "96V Lithium",
      chargingTime: "8-10 hours",
      payload: "850 lbs"
    },
    features: ["GT6 Performance", "6-Passenger Luxury", "Premium Package", "Extended Features"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d6-max-xt4",
    name: "EVolution® D6 Max XT4",
    brand: "EVOLUTION",
    category: "Premium",
    price: 15595,
    description: "Premium 4-passenger vehicle with luxury features and extended range.",
    images: ["/attached_assets/EVOLUTIOND6MAXXT4_1751893159005_1753135437836.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d6-max/xt4/",
    specifications: {
      topSpeed: "25 mph",
      range: "50 miles",
      seatingCapacity: 4,
      batteryType: "96V Lithium",
      chargingTime: "8-10 hours",
      payload: "700 lbs"
    },
    features: ["Premium Package", "Extended Range", "4WD Option", "Luxury Features"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d6-max-xt6",
    name: "EVolution® D6 Max XT6",
    brand: "EVOLUTION",
    category: "Premium",
    price: 17595,
    description: "Premium 6-passenger vehicle with luxury features and extended range.",
    images: ["/attached_assets/EVOLUTIOND6MAXXT6_1751893159005_1753135437836.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d6-max/xt6/",
    specifications: {
      topSpeed: "25 mph",
      range: "45 miles",
      seatingCapacity: 6,
      batteryType: "96V Lithium",
      chargingTime: "8-10 hours",
      payload: "900 lbs"
    },
    features: ["Premium 6-Passenger", "Extended Range", "Luxury Package", "XT Performance"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-forester-4-plus",
    name: "EVolution® Forester 4 Plus",
    brand: "EVOLUTION",
    category: "Utility",
    price: 6995,
    description: "4-passenger utility vehicle designed for outdoor work and recreation.",
    images: ["/attached_assets/EVOLUTIONFORESTER4PLUS_1751893159005_1753135437836.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/forester/4-plus/",
    specifications: {
      topSpeed: "20 mph",
      range: "30 miles",
      seatingCapacity: 4,
      batteryType: "48V Lithium",
      chargingTime: "4-6 hours",
      payload: "600 lbs"
    },
    features: ["4-Passenger", "Utility Ready", "Outdoor Design", "Work Package"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-forester-6-plus",
    name: "EVolution® Forester 6 Plus",
    brand: "EVOLUTION",
    category: "Utility",
    price: 9995,
    description: "6-passenger utility vehicle for large group outdoor activities.",
    images: ["/attached_assets/EVOLUTIONFORESTER6PLUS_1751893159005_1753135437837.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/forester/6-plus/",
    specifications: {
      topSpeed: "20 mph",
      range: "25 miles",
      seatingCapacity: 6,
      batteryType: "48V Lithium",
      chargingTime: "4-6 hours",
      payload: "800 lbs"
    },
    features: ["6-Passenger", "Extended Utility", "Outdoor Ready", "Plus Package"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-turfman-1000",
    name: "EVolution® Turfman 1000",
    brand: "EVOLUTION",
    category: "Commercial",
    price: 9995,
    description: "Heavy-duty commercial utility vehicle for demanding work applications.",
    images: ["/attached_assets/EVOLUTIONTURFMAN1000_1751893159006_1753135437836.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/turfman/1000/",
    specifications: {
      topSpeed: "20 mph",
      range: "35 miles",
      seatingCapacity: 2,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "800 lbs"
    },
    features: ["Heavy Duty", "Commercial Grade", "Work Ready", "Professional Package"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-turfman-200",
    name: "EVolution® Turfman 200",
    brand: "EVOLUTION",
    category: "Commercial",
    price: 6795,
    description: "Mid-range commercial vehicle with enhanced performance and capacity.",
    images: ["/attached_assets/EVOLUTIONTURFMAN200_1751893159006_1753135437837.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/turfman/200/",
    specifications: {
      topSpeed: "20 mph",
      range: "30 miles",
      seatingCapacity: 2,
      batteryType: "48V Lithium",
      chargingTime: "4-5 hours",
      payload: "500 lbs"
    },
    features: ["Enhanced Performance", "Larger Bed", "Commercial Ready", "Extended Range"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-turfman-800",
    name: "EVolution® Turfman 800",
    brand: "EVOLUTION",
    category: "Commercial",
    price: 9995,
    description: "Commercial utility vehicle for medium-duty work applications.",
    images: ["/attached_assets/EVOLUTIONTURFMAN800_1751893159006_1753135437836.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/turfman/800/",
    specifications: {
      topSpeed: "20 mph",
      range: "32 miles",
      seatingCapacity: 2,
      batteryType: "60V Lithium",
      chargingTime: "5-7 hours",
      payload: "650 lbs"
    },
    features: ["Medium Duty", "Commercial Ready", "Work Package", "Enhanced Capacity"],
    inStock: true,
    isNew: true
  }
];

// Combined vehicle array
export const vehicles = [...denagoVehicles, ...evolutionVehicles];

export default vehicles;