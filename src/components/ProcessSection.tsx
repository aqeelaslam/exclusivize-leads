import { Search, CheckCircle, Send } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Investors Search for Agents",
    description: "Investors tell us they're ready to buy or sell.",
  },
  {
    icon: CheckCircle,
    title: "We Qualify Leads",
    description: "Mashvisor ensures each lead matches your criteria.",
  },
  {
    icon: Send,
    title: "Exclusive Delivery",
    description: "Lead details are sent to you directly.",
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          How Our Service Delivers Leads to You
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-200" />
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className="relative flex flex-col md:flex-row items-center mb-12 last:mb-0 animate-fadeIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-1 md:text-right md:pr-8">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                <div className="my-4 md:my-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center relative z-10">
                    <step.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex-1 md:pl-8 md:text-left" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};