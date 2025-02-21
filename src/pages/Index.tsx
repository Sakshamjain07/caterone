
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
              We provide exceptional catering services across these regions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="primary" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="primary">Primary Areas</TabsTrigger>
                <TabsTrigger value="secondary">Secondary Areas</TabsTrigger>
                <TabsTrigger value="special">Special Arrangements</TabsTrigger>
              </TabsList>
              
              <TabsContent value="primary" className="mt-8">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Core Service Region</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Downtown Metro Area
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      North County
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      South Bay
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      East Valley
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-500">
                    No additional travel fees for these locations
                  </p>
                </Card>
              </TabsContent>

              <TabsContent value="secondary" className="mt-8">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Extended Coverage</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      West Coast Region
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Mountain Communities
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Coastal Areas
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Wine Country
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-500">
                    Small travel fee may apply for these locations
                  </p>
                </Card>
              </TabsContent>

              <TabsContent value="special" className="mt-8">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Custom Arrangements</h3>
                  <p className="text-gray-600 mb-4">
                    We're happy to discuss catering services for locations outside our regular service areas. Special arrangements can be made for:
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Destination Weddings
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Corporate Retreats
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      International Events
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
                        <h4 className="font-semibold">Sarah & Michael</h4>
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
                      "The team went above and beyond for our wedding. The food was exceptional and the service impeccable. Our guests are still talking about it!"
                    </p>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <User className="w-10 h-10 text-primary" />
                      <div>
                        <h4 className="font-semibold">Emily & James</h4>
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
                      "Perfect execution from start to finish. They took care of everything, allowing us to truly enjoy our special day."
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
                        <h4 className="font-semibold">John Smith</h4>
                        <p className="text-sm text-gray-500">Tech Solutions Inc.</p>
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
                      "Professional service for our annual conference. The variety of options and attention to dietary requirements was impressive."
                    </p>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <User className="w-10 h-10 text-primary" />
                      <div>
                        <h4 className="font-semibold">Lisa Johnson</h4>
                        <p className="text-sm text-gray-500">Marketing Director</p>
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
                      "Consistently excellent service for our quarterly events. The team is always professional and the food presentation is outstanding."
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
                        <h4 className="font-semibold">Amanda Peters</h4>
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
                      "Made my daughter's sweet 16 absolutely perfect! The menu was creative and the staff was so friendly."
                    </p>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <User className="w-10 h-10 text-primary" />
                      <div>
                        <h4 className="font-semibold">Robert Chen</h4>
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
                      "Exceptional service for our family reunion. They handled everything with care and the food was delicious!"
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
