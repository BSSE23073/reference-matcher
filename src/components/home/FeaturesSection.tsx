import { Zap, DollarSign, Headphones, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Speeds",
    description: "Get blazing-fast internet with speeds up to 1 Gbps for seamless streaming, gaming, and working from home.",
  },
  {
    icon: DollarSign,
    title: "Affordable Plans",
    description: "Find the perfect plan for your budget with competitive pricing starting as low as $39.99/month.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Our dedicated support team is available around the clock to help you with any questions or issues.",
  },
  {
    icon: Award,
    title: "Top-Rated Providers",
    description: "We partner with the most trusted internet and TV providers to bring you reliable, quality service.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Internet Network?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We make it easy to find and set up the best internet and TV service for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
