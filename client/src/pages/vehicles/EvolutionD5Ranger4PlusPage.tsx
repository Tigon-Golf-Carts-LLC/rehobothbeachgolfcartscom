import VehicleDetailPage from "@/components/VehicleDetailPage";
import evolutionD5Ranger4PlusImage from "@assets/EVOLUTIOND5RANGER4PLUS_1751893115782_1753135350622.jpg";

export default function EvolutionD5Ranger4PlusPage() {
  return (
    <VehicleDetailPage
      vehicleName="EVOLUTION D5 RANGER 4 PLUS"
      brand="EVOLUTION"
      series="D5 RANGER"
      price="$9,595"
      image={evolutionD5Ranger4PlusImage}
      seoTitle="EVOLUTION D5 RANGER 4 PLUS - Premium 4-Seat Golf Cart | Lackawanna County Golf Carts"
      seoDescription="Discover the EVOLUTION D5 RANGER 4 PLUS electric golf cart in Luzerne County, PA. Premium 4-passenger vehicle with enhanced comfort and performance features."
      seoKeywords="EVOLUTION D5 RANGER 4 PLUS, 4-seat golf cart, premium electric vehicle, Lackawanna County, Pennsylvania"
      canonicalUrl="https://lackawannagolfcarts.com/vehicles/evolution-d5-ranger-4-plus"
      seats="4"
      range="45 miles"
      topSpeed="25 mph"
      driveType="Rear-Wheel Drive"
      features={[
        "Premium Comfort Package",
        "Enhanced Performance",
        "Durable Construction",
        "Advanced Suspension",
        "LED Lighting",
        "Digital Display",
        "Weather Protection",
        "Quality Materials"
      ]}
      description="Premium 4-passenger golf cart with enhanced comfort and performance features. The EVOLUTION D5 RANGER 4 PLUS delivers reliable performance with premium appointments for Luzerne County families."
      tigoUrl="https://tigongolfcarts.com/evolution/d5-ranger/4-plus/"
    />
  );
}