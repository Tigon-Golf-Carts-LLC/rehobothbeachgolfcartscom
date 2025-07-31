import VehicleDetailPage from "@/components/VehicleDetailPage";
import denagoEvNomadXLImage from "@assets/DENAGONEVNOMADXL_1751893047472_1753135231313.jpg";

export default function DenagoEvNomadXlPage() {
  return (
    <VehicleDetailPage
      vehicleName="DENAGO EV NOMAD XL"
      brand="DENAGO"
      series="EV NOMAD"
      price="$8,495"
      image={denagoEvNomadXLImage}
      seoTitle="DENAGO EV NOMAD XL - Extended Adventure Golf Cart | Atlantic County Golf Carts"
      seoDescription="Experience the DENAGO EV NOMAD XL electric golf cart in Atlantic County, NJ. Extended range premium off-road package with enhanced cargo space."
      seoKeywords="DENAGO EV NOMAD XL, extended range golf cart, premium off-road, Atlantic County, New Jersey"
      canonicalUrl="https://lackawannagolfcarts.com/vehicles/denago-ev-nomad-xl"
      seats="4"
      range="55 miles"
      topSpeed="25 mph"
      driveType="2x4"
      features={[
        "Extended Range",
        "Premium Off-Road Package",
        "Enhanced Cargo Space",
        "All-Weather Protection",
        "Superior Suspension",
        "Heavy-Duty Construction",
        "Advanced Battery System",
        "Premium Interior"
      ]}
      description="Extended range and premium off-road capabilities for serious adventurers. The DENAGO EV NOMAD XL offers enhanced cargo space and all-weather protection for Atlantic County expeditions."
      tigoUrl="https://tigongolfcarts.com/denago-ev/nomad-xl/"
    />
  );
}