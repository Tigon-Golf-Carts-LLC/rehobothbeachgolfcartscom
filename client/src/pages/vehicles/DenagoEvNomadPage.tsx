import VehicleDetailPage from "@/components/VehicleDetailPage";
import denagoEvNomadImage from "@assets/DENAGONEVNOMAD_1751893047472_1753135231313.jpg";

export default function DenagoEvNomadPage() {
  return (
    <VehicleDetailPage
      vehicleName="DENAGO EV NOMAD"
      brand="DENAGO"
      series="EV NOMAD"
      price="$8,495"
      image={denagoEvNomadImage}
      seoTitle="DENAGO EV NOMAD - Adventure Electric Golf Cart | Rehoboth Golf Carts"
      seoDescription="Explore with the DENAGO EV NOMAD electric golf cart in Sussex County, Delaware. Adventure-ready vehicles built for exploration and off-road adventures. Call 302-722-0999."
      seoKeywords="DENAGO EV NOMAD, adventure golf cart, off-road electric vehicle, Sussex County, Delaware, all-terrain"
      canonicalUrl="https://rehobothgolfcarts.com/vehicles/denago-ev-nomad"
      seats="4"
      range="45 miles"
      topSpeed="25 mph"
      driveType="2x4"
      features={[
        "All-Terrain Tires",
        "Lifted Suspension",
        "Adventure Package",
        "Enhanced Ground Clearance",
        "Rugged Construction",
        "Off-Road Capabilities",
        "Durable Frame",
        "Weather Protection"
      ]}
      description="Adventure-ready vehicles built for exploration and off-road adventures. The DENAGO EV NOMAD combines rugged durability with electric efficiency for Sussex County's diverse terrain."
      tigoUrl="https://tigongolfcarts.com/denago-ev/nomad/"
    />
  );
}