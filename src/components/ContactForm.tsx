import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { X } from "lucide-react";

export const ContactForm = () => {
  const [locations, setLocations] = useState<string[]>([]);
  const [currentLocation, setCurrentLocation] = useState("");

  const addLocation = () => {
    if (currentLocation && !locations.includes(currentLocation)) {
      setLocations([...locations, currentLocation]);
      setCurrentLocation("");
    }
  };

  const removeLocation = (location: string) => {
    setLocations(locations.filter((l) => l !== location));
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            Take the First Step Toward Exclusive Real Estate Leads
          </h2>
          <p className="text-xl text-center mb-8 text-gray-600">
            Fill out the form below to get started today!
          </p>
          <form className="space-y-6 bg-white p-8 rounded-xl shadow-sm">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your full name" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Your email" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" placeholder="Your phone number" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="location">Preferred Locations</Label>
              <div className="flex gap-2 mt-1">
                <Input
                  id="location"
                  value={currentLocation}
                  onChange={(e) => setCurrentLocation(e.target.value)}
                  placeholder="Add a city"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addLocation();
                    }
                  }}
                />
                <Button type="button" onClick={addLocation}>
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {locations.map((location) => (
                  <span
                    key={location}
                    className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-2"
                  >
                    {location}
                    <button
                      type="button"
                      onClick={() => removeLocation(location)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
            <Button type="submit" className="w-full">
              Submit & Start Generating Leads
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};