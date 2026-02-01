import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { RotateCcw, Briefcase, Users, XCircle, CheckCircle, HeadphonesIcon, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PHONE_NUMBER = "1(515)-305-4012";
const EMAIL = "support@internetnetwork.com";

const refundContent = [
  {
    id: "services",
    icon: Briefcase,
    title: "Our Services",
    content: "Internet Network provides free consultation services to help you find internet and TV providers. We do not charge for our advisory services, so there are no fees to refund from our end."
  },
  {
    id: "third-party",
    icon: Users,
    title: "Third-Party Service Providers",
    content: "All internet and TV services are provided by third-party providers. Refund and cancellation policies are determined by these providers, not Internet Network. Each provider has their own terms regarding refunds."
  },
  {
    id: "cancellation",
    icon: XCircle,
    title: "Cancellation Process",
    content: "If you wish to cancel services with your provider: Contact the service provider directly using their customer service number, review your service agreement for cancellation terms and any applicable fees, and return any equipment as required by the provider."
  },
  {
    id: "satisfaction",
    icon: CheckCircle,
    title: "Satisfaction Guarantee",
    content: "Many providers offer satisfaction guarantee periods (typically 30 days) during which you can cancel without penalty. Contact your provider for specific details about their guarantee period and terms."
  },
  {
    id: "assistance",
    icon: HeadphonesIcon,
    title: "Our Assistance",
    content: `If you're having issues with your service or need help with cancellation, contact us at ${PHONE_NUMBER}. While we cannot process cancellations directly, we can provide guidance and support throughout the process.`
  },
  {
    id: "questions",
    icon: HelpCircle,
    title: "Questions",
    content: `For questions about this policy, contact us at ${EMAIL}. We're here to help clarify any concerns you may have about refunds and cancellations.`
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const RefundPolicy = () => {
  return (
    <Layout>
      <section className="hero-gradient text-primary-foreground py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6">
              <RotateCcw className="h-8 w-8" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Refund & Cancellation Policy</h1>
            <p className="text-lg text-primary-foreground/80">
              Understand our refund and cancellation guidelines
            </p>
            <p className="text-sm text-primary-foreground/60 mt-4">Last updated: January 2025</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {refundContent.map((item, index) => (
              <motion.div key={item.id} variants={itemVariants}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-semibold mb-3 text-foreground">
                          {index + 1}. {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 text-center text-sm text-muted-foreground"
          >
            <p>We're here to help you navigate any service-related concerns with your provider.</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default RefundPolicy;
