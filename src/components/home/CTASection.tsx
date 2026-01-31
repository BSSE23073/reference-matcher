import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_NUMBER = "(515) 305-4012";
const PHONE_LINK = "tel:+15153054012";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 hero-gradient text-primary-foreground">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Connected?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Call us today to find the perfect internet and TV package for your home or business. 
            Our experts are standing by to help you get started.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg gap-2 px-8 py-6">
            <a href={PHONE_LINK}>
              <Phone className="h-5 w-5" />
              Call Now: {PHONE_NUMBER}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
