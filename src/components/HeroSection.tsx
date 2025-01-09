import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/90 to-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
            Your Next Big Deal is Just a Lead Away
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Join the platform trusted by real estate professionals to connect with pre-qualified investors who are ready to work with you.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-gray-100 transition-colors animate-fadeIn"
            style={{ animationDelay: "0.4s" }}
          >
            Start Generating Leads Today
          </Button>
        </div>
      </div>
    </section>
  );
};