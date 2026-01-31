import { Layout } from "@/components/layout/Layout";

const Disclaimer = () => {
  return (
    <Layout>
      <section className="hero-gradient text-primary-foreground py-12 md:py-16">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold">Disclaimer</h1>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container max-w-3xl prose prose-gray">
          <p className="text-muted-foreground">Last updated: January 2025</p>
          
          <h2>Independent Marketing Partner</h2>
          <p>Internet Network operates as an independent marketing partner. We are <strong>not</strong> directly affiliated with, employed by, or agents of any specific internet, cable, or television service provider.</p>

          <h2>Service Availability</h2>
          <p>Service availability, pricing, and features vary by location and are subject to change without notice. The information provided on this website is for general informational purposes only and may not reflect current offerings in your specific area.</p>

          <h2>Pricing Information</h2>
          <p>Prices shown are approximate and may vary based on:</p>
          <ul>
            <li>Geographic location</li>
            <li>Current promotions and offers</li>
            <li>Equipment selections</li>
            <li>Additional fees, taxes, and surcharges</li>
          </ul>
          <p>Contact us for accurate pricing information for your specific address.</p>

          <h2>No Guarantee</h2>
          <p>While we strive to provide accurate information, we make no guarantees regarding:</p>
          <ul>
            <li>Service availability at your location</li>
            <li>Specific speeds, channels, or features</li>
            <li>Promotional pricing or offers</li>
            <li>Installation timeframes</li>
          </ul>

          <h2>Third-Party Responsibility</h2>
          <p>All services are provided directly by third-party service providers. Internet Network is not responsible for the quality, performance, or reliability of these services.</p>

          <h2>Contact</h2>
          <p>For questions about this disclaimer, contact us at (515) 305-4012 or support@internetnetwork.com.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Disclaimer;
