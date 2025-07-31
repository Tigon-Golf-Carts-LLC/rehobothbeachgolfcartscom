import VehicleDetailPage from "@/components/VehicleDetailPage";
import evolutionCarrier6PlusImage from "@assets/EVOLUTIONCARRIER6PLUS_1751893115778_1753135231314.jpg";

export default function EvolutionCarrier6PlusPage() {
  return (
    <VehicleDetailPage
      vehicleName="EVOLUTION CARRIER 6 PLUS"
      brand="EVOLUTION"
      series="CARRIER"
      price="$9,595"
      image={evolutionCarrier6PlusImage}
      seoTitle="EVOLUTION CARRIER 6 PLUS - Utility Golf Cart | Lackawanna County Golf Carts"
      seoDescription="Discover the EVOLUTION CARRIER 6 PLUS electric golf cart in Luzerne County, PA. 6-passenger utility vehicle with enhanced cargo capacity and work features."
      seoKeywords="EVOLUTION CARRIER 6 PLUS, utility golf cart, 6-passenger, cargo capacity, Lackawanna County, Pennsylvania"
      canonicalUrl="https://lackawannagolfcarts.com/vehicles/evolution-carrier-6-plus"
      seats="6"
      range="38 miles"
      topSpeed="25 mph"
      driveType="Rear-Wheel Drive"
      features={[
        "6-Passenger Utility Vehicle",
        "Enhanced Cargo Capacity",
        "Work-Ready Features",
        "Durable Construction",
        "Heavy-Duty Frame",
        "Versatile Configuration",
        "Commercial Grade",
        "Reliable Power"
      ]}
      description="6-passenger utility vehicle with enhanced cargo capacity and work features. The EVOLUTION CARRIER 6 PLUS is designed for both passenger transport and utility work in Luzerne County communities."
      tigoUrl="https://tigongolfcarts.com/evolution/carrier/6-plus/"
    />
  );
}