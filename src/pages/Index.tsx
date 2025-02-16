
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, BookOpen, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
            <Button asChild size="lg" className="animate-fade-up">
              <Link to="/book">Book Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="animate-fade-up"
            >
              <Link to="/events">View Calendar</Link>
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
    </div>
  );
};

export default Index;
