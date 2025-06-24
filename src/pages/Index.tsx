import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { WhiteLabel } from "@/components/WhiteLabel";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-share-tech">
      <Navigation />
      <Hero />
      <Features />
      <WhiteLabel />
      <Pricing />

      {/* CTA Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-amber-500 to-orange-500"
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Launch Your Restaurant App?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Get your own branded restaurant invoice management app delivered in
            days, not months
          </p>
          <a href="https://tejasnasre.is-a.dev/">
            <Button className="bg-white hover:bg-gray-100 text-amber-600 border border-amber-200 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              Contact Us Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
