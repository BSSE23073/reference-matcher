import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Des Moines, IA",
    rating: 5,
    text: "Internet Network made switching providers so easy! The team was knowledgeable and helped me find a plan that saved me $30/month.",
    avatar: "S",
  },
  {
    name: "James L.",
    location: "West Des Moines, IA",
    rating: 5,
    text: "Finally found reliable internet for my home office. The speeds are fantastic and I haven't had a single dropped connection in months.",
    avatar: "J",
  },
  {
    name: "Michelle K.",
    location: "Ankeny, IA",
    rating: 5,
    text: "Great customer service! They answered all my questions and followed up after installation to make sure everything was working perfectly.",
    avatar: "M",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 section-alt">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real customers have to say about their experience.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.name} variants={itemVariants}>
              <Card className="bg-card border-0 shadow-xl h-full card-hover relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
                <CardContent className="pt-8 pb-8 relative">
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
                  <div className="flex gap-1 mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
