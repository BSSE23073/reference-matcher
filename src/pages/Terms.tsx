import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { FileText, Users, Shield, AlertTriangle, RefreshCw, Phone, Scale, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PHONE_NUMBER = "1(515)-305-4012";
const EMAIL = "support@internetnetwork.com";

const termsContent = [
  {
    id: "acceptance",
    icon: Handshake,
    title: "Acceptance of Terms",
    content: "By accessing and using the Internet Network website, you accept and agree to be bound by the terms and conditions of this agreement. If you do not agree with any part of these terms, please do not use our services."
  },
  {
    id: "description",
    icon: FileText,
    title: "Description of Service",
    content: "Internet Network is an independent marketing partner that helps consumers find internet and television service providers. We do not directly provide internet or TV services. All services are provided by third-party providers who maintain their own terms and conditions."
  },
  {
    id: "responsibilities",
    icon: Users,
    title: "User Responsibilities",
    content: "You agree to provide accurate and complete information when using our services. You are responsible for maintaining the confidentiality of any account information and for all activities that occur under your account."
  },
  {
    id: "third-party",
    icon: Shield,
    title: "Third-Party Services",
    content: "We connect you with third-party service providers. Your use of their services is subject to their respective terms and conditions. Internet Network is not responsible for the services, content, or practices of these third parties."
  },
  {
    id: "warranties",
    icon: AlertTriangle,
    title: "No Warranties",
    content: "Our services are provided \"as is\" without warranties of any kind, either express or implied. We do not guarantee the availability, accuracy, or reliability of any third-party services or information provided on our website."
  },
  {
    id: "liability",
    icon: Scale,
    title: "Limitation of Liability",
    content: "Internet Network shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services or any third-party services. Our total liability shall not exceed the amount paid by you, if any, for using our services."
  },
  {
    id: "changes",
    icon: RefreshCw,
    title: "Changes to Terms",
    content: "We reserve the right to modify these terms at any time without prior notice. Continued use of our services after changes constitutes acceptance of the new terms. We encourage you to review these terms periodically."
  },
  {
    id: "contact",
    icon: Phone,
    title: "Contact Information",
    content: `For questions about these Terms & Conditions, please contact us at ${PHONE_NUMBER} or ${EMAIL}. We are committed to addressing your concerns promptly.`
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

const Terms = () => {
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
              <FileText className="h-8 w-8" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-lg text-primary-foreground/80">
              Please read these terms carefully before using our services
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
            {termsContent.map((item, index) => (
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
            <p>By using Internet Network, you acknowledge that you have read and understood these terms.</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
