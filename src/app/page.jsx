import Banner from "@/components/home/Banner";
import CTABanner from "@/components/home/CTABanner";
import HowDoesWork from "@/components/home/HowDoesWork";
import PrivateAndSecure from "@/components/home/PrivateAndSecure";
import Stats from "@/components/home/Stats";
import TrendingIdeas from "@/components/home/TrendingIdeas";

export default function Home() {
  return (
    <div>
      <Banner />
      
      <Stats />

      <TrendingIdeas />

      <HowDoesWork />

      <PrivateAndSecure />

      <CTABanner />
    </div>
  );
}
