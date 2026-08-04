import { Seo } from "../components/SEO/Seo";

const PrivacyPolicy = () => {
  return (
    <>
      <Seo
        title="Privacy Policy | Movec Connect"
        description="Learn how Movec Connect collects, uses, and protects your personal information."
        path="/privacy-policy"
      />

      <section className="bg-white dark:bg-black transition-colors duration-300 py-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-orange-500 uppercase text-sm tracking-wider font-semibold">
              Privacy Policy
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Your Privacy
              <span className="text-[#10B982]"> Matters</span>
            </h1>
            <p className="mt-5 text-slate-600 dark:text-slate-400">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <div className="w-24 h-1 bg-orange-500 mx-auto my-6" />
          </div>

          {/* Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <div className="space-y-8 text-slate-700 dark:text-slate-300">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  1. Information We Collect
                </h2>
                <p className="leading-7">
                  We collect information you provide directly to us when you use our services, 
                  including your name, email address, phone number, and company information. 
                  We may also collect information about your use of our platform and services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="leading-7 mb-3">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Monitor and analyze trends and usage</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  3. Information Sharing
                </h2>
                <p className="leading-7">
                  We do not share your personal information with third parties except as 
                  described in this policy. We may share information with service providers 
                  who perform services on our behalf, and as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  4. Data Security
                </h2>
                <p className="leading-7">
                  We implement appropriate technical and organizational measures to protect 
                  your personal information against unauthorized access, alteration, disclosure, 
                  or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  5. Your Rights
                </h2>
                <p className="leading-7">
                  You have the right to access, update, or delete your personal information. 
                  You may also opt out of marketing communications at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  6. Contact Us
                </h2>
                <p className="leading-7">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a
                    href="mailto:sales@movecconnect.com"
                    className="text-orange-500 hover:underline">
                    sales@movecconnect.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
