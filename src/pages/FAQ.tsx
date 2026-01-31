import { Layout } from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const PHONE_NUMBER = "(515) 305-4012";
const PHONE_LINK = "tel:+15153054012";

const faqs = [
  {
    question: "What services does Internet Network offer?",
    answer: "Internet Network helps you find and set up home internet, cable TV, and bundled services from top providers. We compare options to find the best fit for your needs and budget.",
  },
  {
    question: "How does Internet Network work?",
    answer: "Simply call us at (515) 305-4012, tell us about your needs, and our experts will recommend the best plans available in your area. We handle the coordination with providers and help schedule your installation.",
  },
  {
    question: "Is there a fee for using Internet Network's services?",
    answer: "No, our consultation service is completely free. We're compensated by providers when you sign up through us, so there's no additional cost to you.",
  },
  {
    question: "What internet speeds are available?",
    answer: "Speeds vary by location and provider, ranging from 100 Mbps for basic plans up to 1 Gbps (1000 Mbps) for premium plans. Our team will help you determine what speed is right for your household's needs.",
  },
  {
    question: "Do I need to sign a contract?",
    answer: "Contract requirements vary by provider and plan. Some offer month-to-month options while others may require a 1-2 year commitment. We'll clearly explain all terms before you make a decision.",
  },
  {
    question: "How long does installation take?",
    answer: "Most installations can be scheduled within a few days to a week. The installation itself typically takes 1-3 hours depending on the services and equipment involved.",
  },
  {
    question: "What if I'm not satisfied with my service?",
    answer: "Most providers offer a satisfaction guarantee period during which you can cancel without penalty. Contact us if you're having issues and we'll help you explore your options.",
  },
  {
    question: "Can I bundle internet and TV together?",
    answer: "Yes! Bundling is often the most cost-effective option. Our bundle packages combine internet and TV services at a discounted rate compared to purchasing them separately.",
  },
  {
    question: "What equipment do I need?",
    answer: "Basic equipment (router, modem, TV box) is typically included with your plan. Premium equipment options are available for enhanced performance. Our team will explain all equipment options during your consultation.",
  },
  {
    question: "Is my personal information secure?",
    answer: "Yes, we take privacy seriously. Your information is only used to help set up your services and is never sold to third parties. Please review our Privacy Policy for complete details.",
  },
  {
    question: "What areas do you service?",
    answer: "We help customers find services across many areas. Call us to check availability in your specific location – we'll let you know what options are available at your address.",
  },
  {
    question: "How do I contact customer support?",
    answer: "You can reach our support team by calling (515) 305-4012 or by filling out our online contact form. We're available to help with questions, concerns, or service changes.",
  },
  {
    question: "Can I upgrade or downgrade my plan later?",
    answer: "Yes, most providers allow plan changes. Some changes may affect your contract terms or pricing. Contact us to discuss your options if you need to modify your service.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "Payment is made directly to your service provider. Most accept credit/debit cards, bank transfers, and automatic payment options. Specific payment methods vary by provider.",
  },
  {
    question: "Are there any hidden fees?",
    answer: "We believe in transparency. While the base prices are as advertised, there may be additional fees for equipment, taxes, or installation depending on the provider. We'll clearly explain all costs before you commit.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-16 md:py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Find answers to common questions about our services, plans, and process.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Our team is ready to help. Give us a call and we'll answer all your questions.
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

export default FAQ;
