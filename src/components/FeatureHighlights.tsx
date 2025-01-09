import { Check, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Focus on Clients Who Matter",
    description: "Every lead is exclusive to you.",
  },
  {
    icon: Check,
    title: "Stop Wasting Time on Unqualified Leads",
    description: "We vet all investors for intent.",
  },
  {
    icon: Clock,
    title: "Count on Consistent Growth",
    description: "Get 2–4 exclusive leads every month.",
  },
];

export const FeatureHighlights = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Why Choose Mashvisor for Your Lead Generation?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};