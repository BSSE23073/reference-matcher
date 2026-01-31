import { Layout } from "@/components/layout/Layout";

const RefundPolicy = () => {
  return (
    <Layout>
      <section className="hero-gradient text-primary-foreground py-12 md:py-16">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold">Refund & Cancellation Policy</h1>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container max-w-3xl prose prose-gray">
          <p className="text-muted-foreground">Last updated: January 2025</p>
          
          <h2>1. Our Services</h2>
          <p>Internet Network provides free consultation services to help you find internet and TV providers. We do not charge for our advisory services.</p>

          <h2>2. Third-Party Service Providers</h2>
          <p>All internet and TV services are provided by third-party providers. Refund and cancellation policies are determined by these providers, not Internet Network.</p>

          <h2>3. Cancellation Process</h2>
          <p>If you wish to cancel services with your provider:</p>
          <ul>
            <li>Contact the service provider directly using their customer service number</li>
            <li>Review your service agreement for cancellation terms and any applicable fees</li>
            <li>Return any equipment as required by the provider</li>
          </ul>

          <h2>4. Satisfaction Guarantee</h2>
          <p>Many providers offer satisfaction guarantee periods (typically 30 days) during which you can cancel without penalty. Contact your provider for specific details.</p>

          <h2>5. Our Assistance</h2>
          <p>If you're having issues with your service or need help with cancellation, contact us at (515) 305-4012. While we cannot process cancellations directly, we can provide guidance and support.</p>

          <h2>6. Questions</h2>
          <p>For questions about this policy, contact us at support@internetnetwork.com.</p>
        </div>
      </section>
    </Layout>
  );
};

export default RefundPolicy;
