import { Phone, Shield, Clock, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_NUMBER = "(515) 305-4012";
const PHONE_LINK = "tel:+15153054012";

const trustBadges = [
  { icon: Shield, label: "Secure & Private" },
  { icon: CheckCircle, label: "Verified Providers" },
  { icon: Clock, label: "24/7 Support" },
  { icon: Users, label: "Millions Served" },
];

export function HeroSection() {
  return (
    <section className="hero-gradient text-primary-foreground py-20 md:py-28 lg:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Fast, Reliable Internet & TV for Your Home
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
            Compare top providers and find the perfect plan for your household. 
            Stream, work, and stay connected with lightning-fast speeds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" variant="secondary" className="text-lg gap-2 px-8 py-6">
              <a href={PHONE_LINK}>
                <Phone className="h-5 w-5" />
                Call Now: {PHONE_NUMBER}
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-primary-foreground/10 backdrop-blur-sm"
              >
                <badge.icon className="h-6 w-6" />
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
