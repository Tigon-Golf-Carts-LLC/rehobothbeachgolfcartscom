import VehicleDetailPage from "@/components/VehicleDetailPage";
import evolutionD6MaxXT4Image from "@assets/EVOLUTIOND6MAXXT4_1751893159005_1753135437836.jpg";

export default function EvolutionD6MaxXt4Page() {
  return (
    <VehicleDetailPage
      vehicleName="EVOLUTION D6 MAX XT4"
      brand="EVOLUTION"
      series="D6 MAX"
      price="$15,595"
      image={evolutionD6MaxXT4Image}
      seoTitle="EVOLUTION D6 MAX XT4 - High-Performance Golf Cart | Atlantic County Golf Carts"
      seoDescription="Experience the EVOLUTION D6 MAX XT4 electric golf cart in Atlantic County, NJ. High-performance 4-passenger vehicle with advanced technology and premium features."
      seoKeywords="EVOLUTION D6 MAX XT4, high-performance golf cart, advanced technology, Atlantic County, New Jersey"
      canonicalUrl="https://lackawannagolfcarts.com/vehicles/evolution-d6-max-xt4"
      seats="4"
      range="50 miles"
      topSpeed="25 mph"
      driveType="All-Wheel Drive"
      features={[
        "High Performance",
        "Advanced Technology",
        "Premium Features",
        "Superior Power System",
        "Enhanced Suspension",
        "Sport-Tuned Handling",
        "Premium Interior",
        "All-Wheel Drive"
      ]}
      description="High-performance 4-passenger vehicle with advanced technology and premium features. The EVOLUTION D6 MAX XT4 represents the pinnacle of electric golf cart performance for Atlantic County enthusiasts."
      tigoUrl="https://tigongolfcarts.com/evolution/d6-max/xt4/"
    />
  );
}