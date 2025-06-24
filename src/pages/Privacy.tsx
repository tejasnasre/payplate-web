import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white font-share-tech">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          to="/"
          className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                PayPlate ("we," "our," or "us") is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our
                restaurant invoice management platform. Please read this policy
                carefully to understand our practices regarding your
                information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Personal Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect personal information that you voluntarily provide
                when using PayPlate:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Email address for account creation and authentication</li>
                <li>Restaurant name and business details</li>
                <li>Payment information (UPI ID, bank details)</li>
                <li>Contact information for customer invoices</li>
                <li>Menu items and pricing information</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Usage Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We automatically collect certain information about your use of
                PayPlate:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Device information (IP address, browser type, operating
                  system)
                </li>
                <li>Usage patterns and feature utilization</li>
                <li>Login times and session duration</li>
                <li>Performance and error logs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Providing and maintaining the PayPlate service</li>
                <li>Processing transactions and generating invoices</li>
                <li>User authentication and account security</li>
                <li>Sending service-related communications</li>
                <li>Improving our platform and developing new features</li>
                <li>Providing customer support and technical assistance</li>
                <li>Generating analytics and business insights</li>
                <li>Complying with legal obligations and preventing fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information in the following
                circumstances:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Service Providers
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share information with trusted third-party service
                providers who assist us in operating PayPlate, such as:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Cloud hosting and infrastructure providers</li>
                <li>Payment processing services</li>
                <li>Email and communication services</li>
                <li>Analytics and monitoring tools</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Legal Requirements
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We may disclose your information if required by law, legal
                process, or government request, or to protect the rights,
                property, or safety of PayPlate, our users, or others.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures
                to protect your information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure authentication methods (Email OTP)</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and employee training</li>
                <li>Secure data centers and infrastructure</li>
                <li>Regular backups and disaster recovery procedures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Data Retention
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your information for as long as necessary to provide
                PayPlate services and fulfill the purposes outlined in this
                policy. Account data may be retained for a reasonable period
                after account closure for legal compliance and business
                purposes. You may request data deletion subject to applicable
                legal requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Your Privacy Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your jurisdiction, you may have the following
                rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>
                  Deletion of your information (subject to legal requirements)
                </li>
                <li>Data portability and export</li>
                <li>Withdrawal of consent where applicable</li>
                <li>Objection to certain processing activities</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise these rights, please contact us using the
                information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Cookies and Tracking
              </h2>
              <p className="text-gray-700 leading-relaxed">
                PayPlate uses cookies and similar technologies to enhance your
                experience, provide security, and analyze usage patterns. You
                can control cookie settings through your browser preferences,
                though disabling certain cookies may affect service
                functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Third-Party Integrations
              </h2>
              <p className="text-gray-700 leading-relaxed">
                PayPlate integrates with third-party services like WhatsApp for
                invoice sharing. These integrations are subject to the privacy
                policies of the respective third-party providers. We encourage
                you to review their policies when using these features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Children's Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                PayPlate is not intended for use by children under 13 years of
                age. We do not knowingly collect personal information from
                children under 13. If we become aware that a child under 13 has
                provided us with personal information, we will take steps to
                delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. International Data Transfers
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Your information may be transferred to and processed in
                countries other than your own. We ensure that such transfers
                comply with applicable data protection laws and implement
                appropriate safeguards to protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                12. Changes to This Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or applicable laws. We will notify you
                of significant changes via email or through the PayPlate
                platform. Your continued use of the service after such
                modifications constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                13. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="text-gray-700">
                  <strong>Email:</strong> tejasnasre.dev@gmail.com
                  <br />
                  <br />
                  <strong>Address:</strong> Nagpur, Maharashtra, India
                  <br />
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
