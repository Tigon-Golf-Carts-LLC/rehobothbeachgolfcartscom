import VehicleDetailPage from "@/components/VehicleDetailPage";
import denagoEvRoverXXLImage from "@assets/DENAGONEVROVERXXL_1751893047473_1753135231313.jpg";

export default function DenagoEvRoverXxlPage() {
  return (
    <VehicleDetailPage
      vehicleName="DENAGO EV ROVER XXL"
      brand="DENAGO"
      series="EV ROVER"
      price="$11,995"
      image={denagoEvRoverXXLImage}
      seoTitle="DENAGO EV ROVER XXL - Maximum Capacity Golf Cart | Atlantic County Golf Carts"
      seoDescription="Discover the DENAGO EV ROVER XXL electric golf cart in Atlantic County, NJ. Maximum capacity with ultra-premium interior and advanced technology suite."
      seoKeywords="DENAGO EV ROVER XXL, maximum capacity, ultra-premium, Atlantic County, New Jersey, 8-passenger"
      canonicalUrl="https://lackawannagolfcarts.com/vehicles/denago-ev-rover-xxl"
      seats="8"
      range="60 miles"
      topSpeed="25 mph"
      driveType="2x4"
      features={[
        "Maximum Capacity",
        "Ultra-Premium Interior",
        "Advanced Technology Suite",
        "Superior Performance",
        "Extended Range Battery",
        "Premium Entertainment",
        "Luxury Seating",
        "State-of-Art Features"
      ]}
      description="Maximum capacity with ultra-premium interior and advanced technology suite. The DENAGO EV ROVER XXL is the ultimate in electric vehicle luxury, accommodating 8 passengers with superior performance in Atlantic County."
      tigoUrl="https://tigongolfcarts.com/denago-ev/rover-xxl/"
    />
  );
}