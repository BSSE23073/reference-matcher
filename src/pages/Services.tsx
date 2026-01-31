import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Check, Wifi, Tv, Package } from "lucide-react";

const PHONE_NUMBER = "(515) 305-4012";
const PHONE_LINK = "tel:+15153054012";

const internetPlans = [
  {
    name: "Basic Internet",
    price: "$39.99",
    speed: "Up to 100 Mbps",
    features: ["Great for browsing & email", "Connect up to 5 devices", "Standard WiFi router included"],
  },
  {
    name: "Plus Internet",
    price: "$59.99",
    speed: "Up to 300 Mbps",
    features: ["Perfect for streaming", "Connect up to 10 devices", "Enhanced WiFi router included", "No data caps"],
    popular: true,
  },
  {
    name: "Premium Internet",
    price: "$79.99",
    speed: "Up to 500 Mbps",
    features: ["Ideal for gaming & 4K streaming", "Unlimited device connections", "Premium WiFi 6 router", "No data caps", "Priority support"],
  },
  {
    name: "Ultra Internet",
    price: "$119.99",
    speed: "Up to 1 Gbps",
    features: ["Best for power users", "Whole-home mesh WiFi", "Unlimited everything", "Dedicated support line", "Professional installation"],
  },
];

const tvPackages = [
  {
    name: "Local Channels",
    price: "$30.00",
    channels: "30+ channels",
    features: ["Local broadcast networks", "Basic cable channels", "Cloud DVR (50 hours)"],
  },
  {
    name: "Entertainment",
    price: "$79.99",
    channels: "125+ channels",
    features: ["All local channels", "Popular entertainment networks", "Sports channels", "Cloud DVR (100 hours)"],
    popular: true,
  },
  {
    name: "Premium",
    price: "$149.99",
    channels: "200+ channels",
    features: ["All entertainment channels", "Premium movie channels", "International channels", "Cloud DVR (250 hours)"],
  },
  {
    name: "Ultimate",
    price: "$199.99",
    channels: "300+ channels",
    features: ["Every channel available", "All premium networks", "Unlimited DVR storage", "4 simultaneous streams"],
  },
];

const bundles = [
  {
    name: "Starter Bundle",
    price: "$69.99",
    features: ["Basic Internet (100 Mbps)", "Local Channels (30+)", "Standard equipment"],
  },
  {
    name: "Family Bundle",
    price: "$119.99",
    features: ["Plus Internet (300 Mbps)", "Entertainment TV (125+ ch)", "WiFi 6 router", "Cloud DVR included"],
    popular: true,
  },
  {
    name: "Premium Bundle",
    price: "$159.99",
    features: ["Premium Internet (500 Mbps)", "Premium TV (200+ ch)", "Whole-home WiFi", "250 hours DVR"],
  },
  {
    name: "Ultimate Bundle",
    price: "$199.99",
    features: ["Ultra Internet (1 Gbps)", "Ultimate TV (300+ ch)", "Mesh WiFi system", "Unlimited DVR", "Priority support"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-16 md:py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services & Plans</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Choose from our range of internet, TV, and bundle packages designed to fit every need and budget.
          </p>
        </div>
      </section>

      {/* Internet Plans */}
      <section id="internet" className="py-16 md:py-24">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Wifi className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Home Internet</h2>
              <p className="text-muted-foreground">High-speed internet for every household</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {internetPlans.map((plan) => (
              <Card key={plan.name} className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.speed}</CardDescription>
                  <div className="text-3xl font-bold text-primary">{plan.price}<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-6">
                    <a href={PHONE_LINK}>Get Started</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TV Packages */}
      <section id="tv" className="py-16 md:py-24 section-alt">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Tv className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Cable & TV Packages</h2>
              <p className="text-muted-foreground">Entertainment for the whole family</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tvPackages.map((plan) => (
              <Card key={plan.name} className={`relative bg-card ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.channels}</CardDescription>
                  <div className="text-3xl font-bold text-primary">{plan.price}<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-6">
                    <a href={PHONE_LINK}>Get Started</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bundles */}
      <section id="bundles" className="py-16 md:py-24">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Internet + TV Bundles</h2>
              <p className="text-muted-foreground">Save more when you bundle services</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bundles.map((plan) => (
              <Card key={plan.name} className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Best Value
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{plan.price}<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-6">
                    <a href={PHONE_LINK}>Get Started</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 border-t">
        <div className="container">
          <p className="text-sm text-muted-foreground text-center">
            * Prices shown are starting prices and may vary based on location and availability. 
            Equipment fees, taxes, and other charges may apply. Contact us for complete pricing details.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Plan is Right for You?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">Call our experts and we'll help you find the perfect solution.</p>
          <Button asChild size="lg" variant="secondary" className="gap-2">
            <a href={PHONE_LINK}>
              <Phone className="h-5 w-5" />
              Call {PHONE_NUMBER}
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
