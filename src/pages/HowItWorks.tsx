import { Layout } from "@/components/layout/Layout";
import { Phone, MessageSquare, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PHONE_NUMBER = "(515) 305-4012";
const PHONE_LINK = "tel:+15153054012";

const steps = [
  {
    icon: Phone,
    step: "1",
    title: "Give Us a Call",
    description: "Contact our friendly team at (515) 305-4012. We're available to help you find the best internet and TV solutions for your home or business.",
    details: [
      "No obligation consultation",
      "Speak with real experts",
      "Get personalized recommendations",
    ],
  },
  {
    icon: MessageSquare,
    step: "2",
    title: "Share Your Needs",
    description: "Tell us about your usage habits, household size, and budget. We'll use this information to match you with the perfect plan.",
    details: [
      "How many people use the internet?",
      "What do you mainly use it for?",
      "Do you need TV service too?",
    ],
  },
  {
    icon: Calendar,
    step: "3",
    title: "Schedule Installation",
    description: "Once you've chosen your plan, we'll coordinate with the provider to schedule installation at a time that works for you.",
    details: [
      "Flexible scheduling options",
      "Professional installation",
      "Same-week appointments often available",
    ],
  },
  {
    icon: CheckCircle,
    step: "4",
    title: "Get Connected & Enjoy",
    description: "After installation, you're ready to enjoy fast, reliable internet and entertainment. Our support team is always here if you need help.",
    details: [
      "Start streaming immediately",
      "24/7 customer support",
      "Satisfaction guaranteed",
    ],
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-16 md:py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Getting connected with Internet Network is simple. Follow these four easy steps to enjoy fast, reliable service.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="flex items-start gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <step.icon className="h-8 w-8 text-primary" />
                        </div>
                        <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                          {step.step}
                        </div>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold mb-2">{step.title}</h2>
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <Card className="bg-muted/50">
                      <CardContent className="pt-6">
                        <ul className="space-y-3">
                          {step.details.map((detail) => (
                            <li key={detail} className="flex items-center gap-3">
                              <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-full h-12 w-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Call us now and take the first step toward better internet and TV service.
          </p>
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

export default HowItWorks;
