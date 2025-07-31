import VehicleDetailPage from "@/components/VehicleDetailPage";
import evolutionD5Maverick4PlusImage from "@assets/EVOLUTIOND5MAVERICK4PLUS_1751893115781_1753135350621.jpg";

export default function EvolutionD5Maverick4PlusPage() {
  return (
    <VehicleDetailPage
      vehicleName="EVOLUTION D5 MAVERICK 4 PLUS"
      brand="EVOLUTION"
      series="D5 MAVERICK"
      price="$9,995"
      image={evolutionD5Maverick4PlusImage}
      seoTitle="EVOLUTION D5 MAVERICK 4 PLUS - Sport Golf Cart | Lackawanna County Golf Carts"
      seoDescription="Discover the EVOLUTION D5 MAVERICK 4 PLUS electric golf cart in Luzerne County, PA. Sport-oriented 4-passenger vehicle with enhanced performance and agility."
      seoKeywords="EVOLUTION D5 MAVERICK 4 PLUS, sport golf cart, performance vehicle, Lackawanna County, Pennsylvania"
      canonicalUrl="https://lackawannagolfcarts.com/vehicles/evolution-d5-maverick-4-plus"
      seats="4"
      range="42 miles"
      topSpeed="25 mph"
      driveType="Rear-Wheel Drive"
      features={[
        "Sport-Oriented Design",
        "Enhanced Performance",
        "Agile Handling",
        "Premium Features",
        "Durable Construction",
        "Advanced Technology",
        "Comfortable Seating",
        "Reliable Power"
      ]}
      description="Sport-oriented 4-passenger vehicle with enhanced performance and agility. The EVOLUTION D5 MAVERICK 4 PLUS combines sporty design with practical functionality for Luzerne County enthusiasts."
      tigoUrl="https://tigongolfcarts.com/evolution/d5-maverick/4-plus/"
    />
  );
}