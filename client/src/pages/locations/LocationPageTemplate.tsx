import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Star, Shield, Truck, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";
import type { Municipality } from "@/data/sussexCountyMunicipalities";

interface LocationPageProps {
  municipality: Municipality;
}

export default function LocationPageTemplate({ municipality }: LocationPageProps) {
  const { name, type, slug } = municipality;
  
  const servicesOffered = [
    "DENAGO Electric Golf Cart Sales",
    "EVOLUTION Golf Cart Sales", 
    "Golf Cart Rentals & Leasing",
    "Professional Maintenance & Repair",
    "Battery Service & Replacement",
    "Custom Modifications & Accessories",
    "Delivery & Pickup Service",
    "Trade-In & Financing Options"
  ];

  const locationFeatures = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Free Local Delivery",
      description: `Complimentary delivery service throughout ${name} and surrounding areas`
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Comprehensive Warranty",
      description: "Full manufacturer warranties on all new DENAGO and EVOLUTION vehicles"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Expert Service Team",
      description: "Certified technicians specializing in electric golf cart maintenance"
    }
  ];

  return (
    <>
      <SEOHead 
        title={`${name} Golf Carts | DENAGO & EVOLUTION Sales & Rentals Delaware`}
        description={`Professional golf cart sales, rentals, and service in ${name}, Delaware. DENAGO and EVOLUTION electric vehicles with expert service throughout Sussex County.`}
        keywords={`${name} golf carts, ${slug} golf cart sales, Delaware golf cart rentals, DENAGO ${name}, EVOLUTION ${name}, Sussex County golf carts`}
        canonicalUrl={`https://rehobothgolfcarts.com${municipality.url}`}
        ogImage="/attached_assets/a-photograph-of-a-modern-golf-cart-deale_ZIJgnM0qSLqCnmqzAiha0w_Tcds7ckvRe6FNLFDKo_aDg_1755541056710.jpeg"
        ogType="website"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section 
          className="relative py-20 px-4 text-white overflow-hidden"
          style={getHeroBackgroundStyle(`location-${slug}`)}
        >
          <div className="relative max-w-7xl mx-auto text-center z-10">
            <Badge className="bg-theme-orange text-white px-6 py-2 text-lg font-bold mb-6">
              SERVING {name.toUpperCase()}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {name} Golf Carts
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Premium DENAGO and EVOLUTION electric golf cart sales, rentals, and service 
              in {name}, Delaware. Your trusted Sussex County golf cart specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:1-844-844-6638">
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 1-844-844-6638
                </Button>
              </a>
              <Link href="/inventory">
                <Button size="lg" variant="outline" className="bg-white text-gray-900 border-white hover:bg-gray-100">
                  View Available Golf Carts
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Location Services */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Golf Cart Services in {name}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive golf cart solutions for residents and businesses in {name}, Delaware. 
                From sales to service, we're your local Sussex County experts.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {locationFeatures.map((feature, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto bg-theme-orange/10 rounded-full flex items-center justify-center mb-4">
                      <div className="text-theme-orange">
                        {feature.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Services We Offer in {name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {servicesOffered.map((service, index) => (
                      <div key={index} className="flex items-center">
                        <ArrowRight className="w-5 h-5 text-theme-orange mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-theme-orange mr-3" />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-gray-600">1-844-844-6638</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-theme-orange mr-3" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-gray-600">info@rehobothgolfcarts.com</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-theme-orange mr-3" />
                      <div>
                        <p className="font-semibold">Hours</p>
                        <p className="text-gray-600">Mon-Sat: 9AM-6PM</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-theme-orange mr-3" />
                      <div>
                        <p className="font-semibold">Service Area</p>
                        <p className="text-gray-600">{name} & Sussex County, DE</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-theme-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Started in {name}?
            </h2>
            <p className="text-xl mb-8">
              Contact Rehoboth Golf Carts today for expert golf cart sales, rentals, and service 
              throughout {name} and Sussex County, Delaware.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:1-844-844-6638">
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 1-844-844-6638
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-white text-theme-primary border-white hover:bg-gray-100">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us Online
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}