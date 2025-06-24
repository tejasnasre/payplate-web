import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
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
            Terms of Service
          </h1>
          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using PayPlate ("the Service"), you accept and
                agree to be bound by the terms and provision of this agreement.
                These Terms of Service ("Terms") govern your use of our
                restaurant invoice management platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Description of Service
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PayPlate provides a comprehensive restaurant invoice management
                solution that includes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Invoice creation and management</li>
                <li>Payment tracking and transaction history</li>
                <li>Menu management and categorization</li>
                <li>PDF invoice generation and WhatsApp sharing</li>
                <li>Business analytics and reporting</li>
                <li>Business profile management</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. User Accounts
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To use PayPlate, you must create an account by providing
                accurate, complete, and current information. You are responsible
                for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Maintaining the confidentiality of your account credentials
                </li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized access</li>
                <li>
                  Ensuring your account information remains accurate and
                  up-to-date
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Acceptable Use
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to use PayPlate only for lawful purposes and in
                accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Use the service for any illegal or unauthorized purpose</li>
                <li>Violate any applicable laws or regulations</li>
                <li>
                  Transmit any harmful, offensive, or objectionable content
                </li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the service or servers</li>
                <li>
                  Use the service to send spam or unsolicited communications
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Payment Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PayPlate offers both free and paid subscription plans:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Free plan includes basic features with usage limitations
                </li>
                <li>
                  Paid plans provide additional features and unlimited usage
                </li>
                <li>
                  Subscription fees are billed monthly or annually in advance
                </li>
                <li>All fees are non-refundable unless otherwise stated</li>
                <li>
                  We reserve the right to modify pricing with 30 days notice
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Data and Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Your privacy is important to us. We collect, use, and protect
                your information as described in our Privacy Policy. By using
                PayPlate, you consent to the collection and use of your
                information in accordance with our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed">
                PayPlate and its original content, features, and functionality
                are owned by us and are protected by international copyright,
                trademark, patent, trade secret, and other intellectual property
                laws. You retain ownership of your business data and content
                uploaded to the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Service Availability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We strive to maintain high service availability but do not
                guarantee uninterrupted access. We may temporarily suspend
                service for maintenance, updates, or other operational reasons.
                We will provide advance notice when possible for planned
                maintenance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                To the maximum extent permitted by law, PayPlate shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, including but not limited to loss of profits,
                data, or business interruption, arising from your use of the
                service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Termination
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Either party may terminate this agreement at any time. Upon
                termination, your right to use the service will cease
                immediately. We may suspend or terminate your account if you
                violate these Terms. You may export your data before termination
                subject to our data export policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. Changes to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will
                notify users of significant changes via email or through the
                service. Continued use of PayPlate after changes constitutes
                acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                12. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="text-gray-700">
                  <strong>Email:</strong> tejasnasre.dev@gmail.com
                  <br />
                  <br />
                  <strong>Address:</strong> Nagpur, Maharashtra, India
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

export default Terms;
