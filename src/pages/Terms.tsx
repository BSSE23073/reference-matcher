import { Layout } from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <section className="hero-gradient text-primary-foreground py-12 md:py-16">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold">Terms & Conditions</h1>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container max-w-3xl prose prose-gray">
          <p className="text-muted-foreground">Last updated: January 2025</p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using the Internet Network website, you accept and agree to be bound by the terms and conditions of this agreement.</p>

          <h2>2. Description of Service</h2>
          <p>Internet Network is an independent marketing partner that helps consumers find internet and television service providers. We do not directly provide internet or TV services. All services are provided by third-party providers.</p>

          <h2>3. User Responsibilities</h2>
          <p>You agree to provide accurate and complete information when using our services. You are responsible for maintaining the confidentiality of any account information.</p>

          <h2>4. Third-Party Services</h2>
          <p>We connect you with third-party service providers. Your use of their services is subject to their respective terms and conditions. Internet Network is not responsible for the services, content, or practices of these third parties.</p>

          <h2>5. No Warranties</h2>
          <p>Our services are provided "as is" without warranties of any kind. We do not guarantee the availability, accuracy, or reliability of any third-party services.</p>

          <h2>6. Limitation of Liability</h2>
          <p>Internet Network shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services or any third-party services.</p>

          <h2>7. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.</p>

          <h2>8. Contact Information</h2>
          <p>For questions about these Terms & Conditions, please contact us at (515) 305-4012 or support@internetnetwork.com.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
