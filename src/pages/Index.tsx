
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { HouseAssignment } from "@/components/HouseAssignment";
import { SchoolInfo } from "@/components/SchoolInfo";
import { StudentTestimonials } from "@/components/StudentTestimonials";
import { HOUSES_ARRAY, THEME_COLORS } from "@/lib/constants";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Helmet } from "react-helmet";

const Index = () => {
  const [showSortingDog, setShowSortingDog] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Set isLoaded to true after initial render to trigger animations
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-900">
        {/* SEO Metadata */}
        <Helmet>
          <title>Welcome to Glencraig Primary School</title>
          <meta name="description" content="A special welcome guide from our Year 6 leavers to help you start your exciting journey with Glencraig Primary School!" />
          <meta property="og:title" content="Welcome to Glencraig Primary School" />
          <meta property="og:description" content="A special welcome guide created by our Year 6 students" />
          <meta property="og:type" content="website" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#1f2937" />
        </Helmet>

        {/* Hero Section with Video Background */}
        <section 
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          aria-labelledby="welcome-heading"
        >
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <iframe
              className="absolute top-1/2 left-1/2 w-[177.77777778vh] h-[56.25vw] min-h-full min-w-full transform -translate-x-1/2 -translate-y-1/2"
              src="https://www.youtube.com/embed/CC-Td_d3PT4?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playlist=CC-Td_d3PT4&start=2"
              title="Glencraig School Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
              <h1 
                id="welcome-heading"
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl ${isLoaded ? 'animate-fade-in' : ''}`}
              >
                Welcome to Glencraig Primary School
              </h1>
              <p 
                className={`text-xl sm:text-2xl md:text-3xl mb-8 text-gray-200 max-w-4xl mx-auto drop-shadow-lg ${isLoaded ? 'animate-fade-in' : ''}`} 
                style={{ animationDelay: "0.2s" }}
              >
                A special welcome guide from our P7 leavers to help you start your exciting journey with us!
              </p>
              <div 
                className={`flex flex-col sm:flex-row justify-center items-center gap-6 ${isLoaded ? 'animate-fade-in' : ''}`} 
                style={{ animationDelay: "0.4s" }}
              >
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xl rounded-xl px-10 py-4 w-full sm:w-auto shadow-2xl border-2 border-emerald-500/30"
                  onClick={() => setShowSortingDog(true)}
                  aria-label="Open the sorting dog dialog"
                >
                  Try the Sorting Dog!
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white text-xl rounded-xl px-10 py-4 w-full sm:w-auto shadow-2xl"
                  onClick={() => scrollToSection("school-info")}
                  aria-label="Scroll to school information section"
                >
                  Learn More About Our School
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Sorting Dog Dialog */}
        <Dialog 
          open={showSortingDog} 
          onOpenChange={setShowSortingDog}
          aria-labelledby="sorting-dog-title"
          aria-describedby="sorting-dog-description"
        >
          <DialogContent className="sm:max-w-md rounded-2xl border border-gray-700 bg-gray-800">
            <DialogHeader>
              <DialogTitle id="sorting-dog-title" className="text-white text-2xl">The Glencraig Sorting Dog</DialogTitle>
              <DialogDescription id="sorting-dog-description" className="text-gray-300">
                Let our magical sorting dog assign you to one of our school houses!
              </DialogDescription>
            </DialogHeader>
            <HouseAssignment onClose={() => setShowSortingDog(false)} />
          </DialogContent>
        </Dialog>

        {/* School Information Section */}
        <section 
          id="school-info" 
          className="py-16 sm:py-24 px-4 md:px-8 bg-gray-800"
          aria-labelledby="school-info-heading"
        >
          <div className="max-w-7xl mx-auto">
            <h2 
              id="school-info-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-center text-white"
            >
              Our School Through Our Eyes
            </h2>
            <SchoolInfo />
          </div>
        </section>

        {/* Testimonials Section */}
        <section 
          className="py-16 sm:py-24 px-4 md:px-8 bg-gray-700"
          aria-labelledby="testimonials-heading"
        >
          <div className="max-w-7xl mx-auto">
            <h2 
              id="testimonials-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-center text-white"
            >
              What P7 Students Say
            </h2>
            <StudentTestimonials />
          </div>
        </section>

        {/* Footer */}
        <footer 
          className="bg-gray-900 text-white py-12 px-4 md:px-8 border-t border-gray-700"
          role="contentinfo"
        >
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Glencraig Primary School</h3>
            <address className="mb-6 not-italic text-gray-300">
              Seahill
            </address>
            <p className="text-gray-400">Created with 💖 by our P7 students (2025)</p>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
};

export default Index;
