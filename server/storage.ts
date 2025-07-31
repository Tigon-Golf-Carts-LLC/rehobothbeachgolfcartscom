import type { Vehicle, InsertVehicle, ContactForm } from "@shared/schema";
import vehicleData from "./data/vehicles";

export interface IStorage {
  // Vehicle operations
  getVehicles(): Promise<Vehicle[]>;
  getVehicleById(id: string): Promise<Vehicle | null>;
  getVehiclesByBrand(brand: string): Promise<Vehicle[]>;
  createVehicle(vehicle: InsertVehicle): Promise<Vehicle>;
  updateVehicle(id: string, updates: Partial<InsertVehicle>): Promise<Vehicle | null>;
  deleteVehicle(id: string): Promise<boolean>;
  
  // Contact form operations
  submitContactForm(form: ContactForm): Promise<boolean>;
}

class MemStorage implements IStorage {
  private vehicles: Vehicle[] = vehicleData;

  constructor() {
    // Data loaded from vehicleData import
  }

  async getVehicles(): Promise<Vehicle[]> {
    return this.vehicles;
  }

  async getVehicleById(id: string): Promise<Vehicle | null> {
    return this.vehicles.find(v => v.id === id) || null;
  }

  async getVehiclesByBrand(brand: string): Promise<Vehicle[]> {
    return this.vehicles.filter(v => v.brand.toLowerCase() === brand.toLowerCase());
  }

  async createVehicle(vehicle: InsertVehicle): Promise<Vehicle> {
    const newVehicle: Vehicle = {
      ...vehicle,
      id: `vehicle-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    };
    this.vehicles.push(newVehicle);
    return newVehicle;
  }

  async updateVehicle(id: string, updates: Partial<InsertVehicle>): Promise<Vehicle | null> {
    const index = this.vehicles.findIndex(v => v.id === id);
    if (index === -1) return null;

    this.vehicles[index] = { ...this.vehicles[index], ...updates };
    return this.vehicles[index];
  }

  async deleteVehicle(id: string): Promise<boolean> {
    const index = this.vehicles.findIndex(v => v.id === id);
    if (index === -1) return false;

    this.vehicles.splice(index, 1);
    return true;
  }

  async submitContactForm(form: ContactForm): Promise<boolean> {
    // In a real implementation, this would save to database
    console.log("Contact form submitted:", form);
    return true;
  }
}

const storage = new MemStorage();
export default storage;