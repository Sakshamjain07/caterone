
import React from "react";
import { Card } from "@/components/ui/card";
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

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Book an Event</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Event Type
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="corporate">Corporate Event</SelectItem>
                    <SelectItem value="party">Party</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Date</label>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Customization Options</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="menu">
                <AccordionTrigger>Menu Selection</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                    {/* Placeholder for menu items */}
                    <div className="animate-pulse space-y-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="space-y-2">
                          <div className="h-4 bg-muted rounded w-3/4"></div>
                          <div className="h-3 bg-muted rounded w-1/2"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="beverages">
                <AccordionTrigger>Beverages & Desserts</AccordionTrigger>
                <AccordionContent>
                  {/* Placeholder for beverages & desserts */}
                  <div className="p-4">Coming soon</div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="dietary">
                <AccordionTrigger>Dietary Restrictions</AccordionTrigger>
                <AccordionContent>
                  {/* Placeholder for dietary restrictions */}
                  <div className="p-4">Coming soon</div>
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
              <span className="font-medium">Not selected</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Date</span>
              <span className="font-medium">
                {date?.toLocaleDateString() || "Not selected"}
              </span>
            </div>
            <div className="border-t border-gray-200 my-4 pt-4">
              <div className="flex justify-between items-center font-semibold">
                <span>Estimated Total</span>
                <span>$0.00</span>
              </div>
            </div>
            <Button className="w-full">Request Quote</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Book;
