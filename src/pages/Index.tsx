import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BibleVerseSection from "@/components/BibleVerseSection";
import AboutSection from "@/components/AboutSection";
import HistorySection from "@/components/HistorySection";
import EventsSection from "@/components/EventsSection";
import LeadershipSection from "@/components/LeadershipSection";
import GallerySection from "@/components/GallerySection";
import PostsSection from "@/components/PostsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BibleVerseSection />
      <AboutSection />
      <HistorySection />
      <EventsSection />
      <PostsSection />
      <LeadershipSection />
      <GallerySection />
      <FooterSection />
    </div>
  );
};

export default Index;
