import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Star, Facebook, ExternalLink, Youtube } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";
import { SUSSEX_COUNTY_MUNICIPALITIES } from "@/data/sussexCountyMunicipalities";

export default function ShowroomPage() {
  const locations = [
    {
      name: "TIGON Golf Carts",
      address: "5158 N Dupont Hwy, Dover, DE 19901",
      phone: "302-546-0010",
      coordinates: "39.22044318468275, -75.57452048907642",
      googleMapsUrl: "https://www.google.com/maps?cid=12843447677705895190",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsDover/",
      youtubeUrl: "https://www.youtube.com/@TIGONGolfCartsDoverDE",
      websiteUrl: "https://tigongolfcarts.com/dover/",
      reviewUrl: "https://g.page/r/CRa9-YidFz2yEBM/review",
      city: "Dover",
      type: "physical"
    },
    {
      name: "TIGON Golf Carts Delaware",
      address: "Delaware",
      phone: "(302) 200-3151",
      coordinates: "39.145324,-75.386594",
      googleMapsUrl: "https://www.google.com/maps?cid=11044789483047204293",
      youtubeUrl: "https://www.youtube.com/@TIGONGolfCartsDelaware",
      websiteUrl: "https://tigongolfcarts.com/delaware/",
      reviewUrl: "https://g.page/r/CcW1_1uE-UaZEBM/review",
      city: "Delaware",
      type: "online"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Rehoboth Beach Golf Carts Showroom | Premier Delaware Golf Cart Dealer"
        description="Visit Rehoboth Beach Golf Carts, Delaware's premier golf cart showroom. Complete DENAGO and EVOLUTION lineup serving all Sussex County municipalities from Rehoboth Beach to Seaford."
        keywords="Rehoboth golf carts showroom, golf cart dealership Delaware, DENAGO EVOLUTION Sussex County, Delaware golf cart sales, Rehoboth Beach"
        canonicalUrl="https://rehobothbeachgolfcarts.com/showroom"
        ogImage="/attached_assets/a-photograph-of-a-modern-golf-cart-deale_7zUe5Lu4Q5y7tCLWthTNUg_X4G12-7lSBK0VDHDYkTBEA_1753809417448.png"
        ogType="website"
      />
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" style={getHeroBackgroundStyle("showroom")}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Rehoboth Beach Golf Carts Delaware Showroom
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Visit our premier Delaware showroom featuring the complete lineup of DENAGO and EVOLUTION electric vehicles. 
            Serving all Sussex County municipalities from Rehoboth Beach to Seaford.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
              <Phone className="w-5 h-5 mr-2" />
              Call Us Today
            </Button>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-theme-primary">Our Locations</h2>
            <p className="text-xl text-gray-600">Serving all of Delaware with expert golf cart sales and service</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border border-gray-200 hover:border-theme-orange h-full">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg font-bold text-theme-primary mb-2 leading-tight">
                        <a href={location.websiteUrl} target="_blank" rel="noopener noreferrer" 
                           className="hover:text-theme-orange transition-colors cursor-pointer">
                          {location.name}
                        </a>
                      </CardTitle>
                      <Badge className="bg-theme-orange text-white text-xs px-2 py-1">
                        {location.city} Location
                      </Badge>
                    </div>
                    <div className="flex gap-1 flex-shrink-0">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    {/* Address */}
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-theme-orange mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{location.address}</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-theme-orange flex-shrink-0" />
                      <a href={`tel:${location.phone}`} className="text-sm font-medium text-theme-primary hover:text-theme-orange transition-colors">
                        {location.phone}
                      </a>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-theme-orange mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Business Hours</p>
                        <p className="text-gray-600 text-xs">Mon-Fri: 9:00 AM - 5:00 PM</p>
                        <p className="text-gray-600 text-xs">Sat: 9:00 AM - 5:00 PM</p>
                        <p className="text-gray-600 text-xs">Sun: CLOSED</p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-3">
                      <a href={location.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="w-full bg-theme-orange hover:bg-orange-600 text-white text-xs">
                          <MapPin className="w-3 h-3 mr-1" />
                          Directions
                        </Button>
                      </a>
                      <a href={`tel:${location.phone}`}>
                        <Button size="sm" variant="outline" className="w-full border-theme-orange text-theme-orange hover:bg-orange-50 text-xs">
                          <Phone className="w-3 h-3 mr-1" />
                          Call Now
                        </Button>
                      </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-2 pt-2 justify-center">
                      <a href={location.websiteUrl} target="_blank" rel="noopener noreferrer"
                         className="text-gray-500 hover:text-theme-orange transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      {location.facebookUrl && (
                        <a href={location.facebookUrl} target="_blank" rel="noopener noreferrer"
                           className="text-gray-500 hover:text-blue-600 transition-colors">
                          <Facebook className="w-4 h-4" />
                        </a>
                      )}
                      {location.youtubeUrl && (
                        <a href={location.youtubeUrl} target="_blank" rel="noopener noreferrer"
                           className="text-gray-500 hover:text-red-600 transition-colors">
                          <Youtube className="w-4 h-4" />
                        </a>
                      )}
                      <a href={location.reviewUrl} target="_blank" rel="noopener noreferrer"
                         className="text-gray-500 hover:text-yellow-500 transition-colors">
                        <Star className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-theme-primary">Showroom Services</h2>
            <p className="text-xl text-gray-600">Everything you need for your golf cart experience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-theme-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-theme-primary">Test Drives</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Experience our golf carts firsthand with comprehensive test drives on our demonstration courses.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-theme-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-theme-primary">Expert Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our knowledgeable staff will help you choose the perfect golf cart for your specific needs and budget.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-theme-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-theme-primary">Financing Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Flexible financing solutions to make your golf cart purchase affordable and convenient.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Areas We Serve</h2>
          <p className="text-xl text-gray-600 mb-8">
            We proudly serve customers throughout all Sussex County municipalities and surrounding Delaware areas
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-700">
            {SUSSEX_COUNTY_MUNICIPALITIES.map((municipality, index) => (
              <Link key={index} href={municipality.url}>
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200 hover:border-theme-orange">
                  <div className="font-medium text-theme-primary hover:text-theme-orange transition-colors">
                    {municipality.name}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {municipality.type}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Serving all of Sussex County including towns, cities, and surrounding Delaware communities
            </p>
            <Link href="/contact">
              <Button className="bg-theme-orange hover:bg-orange-600 text-white">
                Contact Us for Service in Your Area
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-theme-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Visit Our Showroom?
          </h2>
          <p className="text-xl mb-8">
            Visit our TIGON Golf Carts showroom in Dover, DE, or call us to see our full inventory of DENAGO and EVOLUTION golf carts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                Schedule Visit
              </Button>
            </Link>
            <a href="tel:(302) 200-3151">
              <Button size="lg" variant="outline" className="text-gray-900 bg-white border-white hover:bg-gray-100">
                <Phone className="w-5 h-5 mr-2" />
                Call Today
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}