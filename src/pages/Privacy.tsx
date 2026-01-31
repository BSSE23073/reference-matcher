import { Layout } from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="hero-gradient text-primary-foreground py-12 md:py-16">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container max-w-3xl prose prose-gray">
          <p className="text-muted-foreground">Last updated: January 2025</p>
          
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly, including:</p>
          <ul>
            <li>Name and contact information</li>
            <li>Phone number and email address</li>
            <li>Service address</li>
            <li>Service preferences and requirements</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Help you find suitable internet and TV services</li>
            <li>Connect you with service providers</li>
            <li>Respond to your inquiries</li>
            <li>Improve our services</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>Internet and TV service providers to fulfill your service requests</li>
            <li>Service partners who assist in our operations</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>

          <h2>4. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>

          <h2>5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <h2>6. Cookies</h2>
          <p>Our website may use cookies to enhance your experience. You can control cookie settings through your browser.</p>

          <h2>7. Contact Us</h2>
          <p>For privacy-related questions, contact us at (515) 305-4012 or support@internetnetwork.com.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
