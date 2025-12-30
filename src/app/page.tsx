import FAQ from '@/components/FAQ';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import WhoIsThisFor from '@/components/WhoIsThisFor';

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <Hero />
      <WhoIsThisFor />
      <Features />
      <HowItWorks />
      <FAQ />
      <Footer />
    </main>
  );
}
