import { Zap, DollarSign, Headphones, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Speeds",
    description: "Get blazing-fast internet with speeds up to 1 Gbps for seamless streaming, gaming, and working from home.",
    gradient: "from-primary to-accent",
  },
  {
    icon: DollarSign,
    title: "Affordable Plans",
    description: "Find the perfect plan for your budget with competitive pricing starting as low as $39.99/month.",
    gradient: "from-accent to-secondary",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Our dedicated support team is available around the clock to help you with any questions or issues.",
    gradient: "from-secondary to-primary",
  },
  {
    icon: Award,
    title: "Top-Rated Providers",
    description: "We partner with the most trusted internet and TV providers to bring you reliable, quality service.",
    gradient: "from-primary via-accent to-secondary",
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

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-gradient">Internet Network?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We make it easy to find and set up the best internet and TV service for your needs.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="border-0 shadow-lg h-full card-hover group">
                <CardContent className="pt-8 pb-8">
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:shadow-xl transition-shadow`}
                    >
                      <feature.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
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
