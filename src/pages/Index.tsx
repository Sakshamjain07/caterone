
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, BookOpen, ChefHat, HelpCircle, Star, User, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Exceptional Catering
            <br />
            for Every Occasion
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create unforgettable moments with CaterOne's premium catering services.
            From intimate gatherings to grand celebrations, we bring your vision to
            life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/book">Book Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
            >
              <Link to="/events">View Calendar</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
            >
              <Link to="/auth">Login / Sign Up</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <Calendar className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Event Planning</h3>
              <p className="text-gray-600">
                Seamlessly plan and manage your events with our intuitive calendar
                system.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <BookOpen className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-600">
                Book your perfect catering experience in just a few clicks.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <ChefHat className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Custom Menus</h3>
              <p className="text-gray-600">
                Customize your menu to perfectly match your event's needs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-semibold mb-4">Our Service Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide exceptional catering services across major Indian cities and regions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="primary" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="primary">Metro Cities</TabsTrigger>
                <TabsTrigger value="secondary">Regional Hubs</TabsTrigger>
                <TabsTrigger value="special">Special Locations</TabsTrigger>
              </TabsList>
              
              <TabsContent value="primary" className="mt-8">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Major Metropolitan Areas</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Delhi NCR
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Mumbai
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Bangalore
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Chennai
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-500">
                    No additional travel charges within these cities
                  </p>
                </Card>
              </TabsContent>

              <TabsContent value="secondary" className="mt-8">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Regional Coverage</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Pune
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Hyderabad
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Kolkata
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Ahmedabad
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-500">
                    Minimal travel charges may apply for these locations
                  </p>
                </Card>
              </TabsContent>

              <TabsContent value="special" className="mt-8">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Destination Events</h3>
                  <p className="text-gray-600 mb-4">
                    We cater to special events at premium destinations across India:
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Rajasthan Palace Weddings
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Goa Beach Celebrations
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Kerala Backwater Events
                    </li>
                  </ul>
                  <Button className="mt-6" variant="outline" asChild>
                    <Link to="/contact">Contact for Details</Link>
                  </Button>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Star className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-semibold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read about experiences from our satisfied customers
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="weddings" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="weddings">Weddings</TabsTrigger>
                <TabsTrigger value="corporate">Corporate</TabsTrigger>
                <TabsTrigger value="private">Private Events</TabsTrigger>
              </TabsList>
              
              <TabsContent value="weddings" className="space-y-8 mt-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <User className="w-10 h-10 text-primary" />
                      <div>
                        <h4 className="font-semibold">Priya & Arjun Sharma</h4>
                        <div className="flex text-primary">
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      "They perfectly executed our grand Indian wedding with a blend of traditional and modern cuisine. The live stations were a huge hit!"
                    </p>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <User className="w-10 h-10 text-primary" />
                      <div>
                        <h4 className="font-semibold">Aditya & Meera Patel</h4>
                        <div className="flex text-primary">
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      "From mehendi to reception, every function was catered perfectly. The food presentation and taste were exceptional!"
                    </p>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="corporate" className="space-y-8 mt-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <User className="w-10 h-10 text-primary" />
                      <div>
                        <h4 className="font-semibold">Rajesh Mehta</h4>
                        <p className="text-sm text-gray-500">TechServe India Ltd.</p>
                        <div className="flex text-primary">
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      "Excellent service for our company's annual Diwali celebration. The variety of regional cuisines impressed all our employees."
                    </p>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <User className="w-10 h-10 text-primary" />
                      <div>
                        <h4 className="font-semibold">Anita Desai</h4>
                        <p className="text-sm text-gray-500">Marketing Head, GlobalTech</p>
                        <div className="flex text-primary">
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      "Their corporate lunch packages are fantastic. Great mix of healthy and delicious options that cater to all dietary preferences."
                    </p>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="private" className="space-y-8 mt-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <User className="w-10 h-10 text-primary" />
                      <div>
                        <h4 className="font-semibold">Kavita Singhania</h4>
                        <div className="flex text-primary">
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      "Made my son's thread ceremony truly special. The traditional South Indian breakfast spread was outstanding!"
                    </p>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <User className="w-10 h-10 text-primary" />
                      <div>
                        <h4 className="font-semibold">Rahul Khanna</h4>
                        <div className="flex text-primary">
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      "Perfect arrangements for our house warming ceremony. The live chaat counter was the highlight of the evening!"
                    </p>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our catering services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How far in advance should I book?</AccordionTrigger>
                <AccordionContent>
                  We recommend booking at least 4-6 weeks in advance for most events, and 3-6 months ahead for weddings or large corporate events to ensure availability and allow adequate planning time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>What is your minimum guest count?</AccordionTrigger>
                <AccordionContent>
                  Our minimum guest count varies by event type. For most events, we require a minimum of 20 guests. For intimate gatherings, please contact us to discuss your specific needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Do you accommodate dietary restrictions?</AccordionTrigger>
                <AccordionContent>
                  Yes, we accommodate various dietary requirements including vegetarian, vegan, gluten-free, and allergy-specific meals. Please inform us of any dietary restrictions during the booking process.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>What is included in your catering service?</AccordionTrigger>
                <AccordionContent>
                  Our standard service includes food preparation, delivery, setup, serving staff, cleanup, and all necessary serving equipment. We can customize our service package based on your specific needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>What is your cancellation policy?</AccordionTrigger>
                <AccordionContent>
                  Our cancellation policy varies depending on the event size and timing. Generally, full refunds are available for cancellations made 30+ days before the event, with partial refunds available for earlier notices.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
