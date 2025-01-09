import { Star, Repeat, Users } from "lucide-react";

const benefits = [
  {
    icon: Star,
    title: "Exclusive Leads",
    description: "Leads exclusive to your account—no competition.",
  },
  {
    icon: Repeat,
    title: "Reliable Flow",
    description: "Reliable monthly lead flow: 2–4 pre-qualified contacts.",
  },
  {
    icon: Users,
    title: "High Intent",
    description: "Connections with motivated, high-intent investors.",
  },
];

export const KeyBenefits = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Here's What You'll Gain from Our Service
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <benefit.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};