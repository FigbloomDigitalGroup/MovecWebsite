import { Seo } from "../components/SEO/Seo";

const TermsOfService = () => {
  return (
    <>
      <Seo
        title="Terms of Service | Movec Connect"
        description="Read the terms and conditions for using Movec Connect services."
        path="/terms-of-service"
      />

      <section className="bg-white dark:bg-black transition-colors duration-300 py-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-orange-500 uppercase text-sm tracking-wider font-semibold">
              Terms of Service
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Terms &
              <span className="text-[#10B982]"> Conditions</span>
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
                  1. Acceptance of Terms
                </h2>
                <p className="leading-7">
                  By accessing and using Movec Connect services, you accept and agree to be 
                  bound by the terms and provisions of this agreement. If you do not agree 
                  to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  2. Services Description
                </h2>
                <p className="leading-7">
                  Movec Connect provides technology solutions including custom software development, 
                  billing systems, Starlink installation, CCTV security systems, GPS fleet tracking, 
                  and IT support services. Service specifications and deliverables will be defined 
                  in individual service agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  3. User Responsibilities
                </h2>
                <p className="leading-7 mb-3">
                  You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use our services in compliance with applicable laws</li>
                  <li>Not misuse or attempt to gain unauthorized access to our systems</li>
                  <li>Pay for services as agreed in your service contract</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  4. Payment Terms
                </h2>
                <p className="leading-7">
                  Payment terms will be specified in individual service agreements. All fees 
                  are exclusive of applicable taxes unless otherwise stated. Late payments may 
                  result in service suspension or termination.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  5. Intellectual Property
                </h2>
                <p className="leading-7">
                  All content, software, and materials provided by Movec Connect remain our 
                  property or the property of our licensors. Custom work product ownership 
                  will be defined in individual service agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  6. Limitation of Liability
                </h2>
                <p className="leading-7">
                  Movec Connect shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages arising from your use of our services. 
                  Our total liability shall not exceed the amount paid by you for the services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  7. Service Modifications
                </h2>
                <p className="leading-7">
                  We reserve the right to modify or discontinue services with reasonable notice. 
                  We will notify you of any material changes to these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  8. Termination
                </h2>
                <p className="leading-7">
                  Either party may terminate services as specified in the service agreement. 
                  We reserve the right to terminate access immediately for violation of these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  9. Governing Law
                </h2>
                <p className="leading-7">
                  These terms shall be governed by and construed in accordance with the laws 
                  of Kenya. Any disputes shall be resolved in the courts of Nairobi.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  10. Contact Information
                </h2>
                <p className="leading-7">
                  For questions about these Terms of Service, please contact us at{" "}
                  <a
                    href="mailto:sales@movecconnect.com"
                    className="text-orange-500 hover:underline">
                    sales@movecconnect.com
                  </a>{" "}
                  or call{" "}
                  <a
                    href="tel:+254796287392"
                    className="text-orange-500 hover:underline">
                    +254 796 287 392
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

export default TermsOfService;
