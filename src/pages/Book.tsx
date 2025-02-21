
import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const Book = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [eventType, setEventType] = React.useState<string>("");
  const [guestCount, setGuestCount] = React.useState<string>("");
  const [specialRequests, setSpecialRequests] = React.useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !eventType || !guestCount) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Here we would typically send this to a backend
    toast.success("Booking request submitted successfully! We'll contact you soon.");
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Book an Event</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="eventType">Event Type</Label>
                <Select value={eventType} onValueChange={setEventType}>
                  <SelectTrigger id="eventType">
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="corporate">Corporate Event</SelectItem>
                    <SelectItem value="birthday">Birthday Party</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="date">Date</Label>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  disabled={(date) => date < new Date()}
                />
              </div>

              <div>
                <Label htmlFor="guestCount">Number of Guests</Label>
                <Input
                  id="guestCount"
                  type="number"
                  min="1"
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  placeholder="Enter number of guests"
                />
              </div>

              <div>
                <Label htmlFor="specialRequests">Special Requests</Label>
                <Input
                  id="specialRequests"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="Any dietary restrictions or special requirements?"
                />
              </div>
            </form>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Customization Options</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="menu">
                <AccordionTrigger>Menu Selection</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                    <div className="space-y-4">
                      <h4 className="font-medium">Starter Options</h4>
                      <ul className="list-disc pl-4 space-y-2">
                        <li>Classic Caesar Salad</li>
                        <li>Bruschetta</li>
                        <li>Soup of the Day</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium">Main Course Options</h4>
                      <ul className="list-disc pl-4 space-y-2">
                        <li>Grilled Chicken</li>
                        <li>Vegetarian Pasta</li>
                        <li>Beef Tenderloin</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="beverages">
                <AccordionTrigger>Beverages & Desserts</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                    <div className="space-y-4">
                      <h4 className="font-medium">Beverages</h4>
                      <ul className="list-disc pl-4 space-y-2">
                        <li>Soft Drinks</li>
                        <li>Coffee & Tea</li>
                        <li>Juice Selection</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium">Desserts</h4>
                      <ul className="list-disc pl-4 space-y-2">
                        <li>Chocolate Cake</li>
                        <li>Fresh Fruit Tart</li>
                        <li>Ice Cream Selection</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="dietary">
                <AccordionTrigger>Dietary Restrictions</AccordionTrigger>
                <AccordionContent>
                  <div className="p-4 space-y-4">
                    <p>We accommodate the following dietary restrictions:</p>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Vegetarian</li>
                      <li>Vegan</li>
                      <li>Gluten-Free</li>
                      <li>Dairy-Free</li>
                      <li>Nut-Free</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </div>

        <Card className="p-6 h-fit sticky top-24">
          <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Event Type</span>
              <span className="font-medium">{eventType || "Not selected"}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Date</span>
              <span className="font-medium">
                {date?.toLocaleDateString() || "Not selected"}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Guests</span>
              <span className="font-medium">{guestCount || "Not specified"}</span>
            </div>
            <div className="border-t border-gray-200 my-4 pt-4">
              <div className="flex justify-between items-center font-semibold">
                <span>Estimated Total</span>
                <span>Request for Quote</span>
              </div>
            </div>
            <Button onClick={handleSubmit} className="w-full">
              Submit Booking Request
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Book;
