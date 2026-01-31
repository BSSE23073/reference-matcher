import { Home, Briefcase, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sections = [
  {
    icon: Home,
    title: "Ideal for Every Home",
    description: "Whether you're a family of streamers, remote workers, or casual browsers, we have plans that fit your lifestyle. Enjoy uninterrupted entertainment, smooth video calls, and fast downloads.",
    features: ["Multiple device support", "Whole-home WiFi coverage", "Parental controls available"],
  },
  {
    icon: Briefcase,
    title: "Power Your Business Forward",
    description: "Keep your business running smoothly with enterprise-grade internet solutions. From small offices to large operations, we have the bandwidth to support your growth.",
    features: ["Dedicated business lines", "Priority customer support", "Scalable bandwidth options"],
  },
  {
    icon: Smartphone,
    title: "Ready for the Future",
    description: "Connect all your smart devices seamlessly. From smart thermostats to security cameras, our reliable network keeps your smart home running without a hitch.",
    features: ["IoT device optimization", "Low latency connections", "Future-proof technology"],
  },
];

export function UseCasesSection() {
  return (
    <section className="py-16 md:py-24 section-alt">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Solutions for Every Need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From homes to businesses, we provide tailored solutions for all your connectivity needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sections.map((section) => (
            <Card key={section.title} className="bg-card border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <section.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{section.description}</p>
                <ul className="space-y-2">
                  {section.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
