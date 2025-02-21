import React from "react";
import { Link } from "react-router-dom";
import { Calendar, BookOpen, ChefHat, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
