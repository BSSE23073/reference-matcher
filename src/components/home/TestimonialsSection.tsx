import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Des Moines, IA",
    rating: 5,
    text: "Internet Network made switching providers so easy! The team was knowledgeable and helped me find a plan that saved me $30/month.",
  },
  {
    name: "James L.",
    location: "West Des Moines, IA",
    rating: 5,
    text: "Finally found reliable internet for my home office. The speeds are fantastic and I haven't had a single dropped connection in months.",
  },
  {
    name: "Michelle K.",
    location: "Ankeny, IA",
    rating: 5,
    text: "Great customer service! They answered all my questions and followed up after installation to make sure everything was working perfectly.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 section-alt">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real customers have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-card border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
