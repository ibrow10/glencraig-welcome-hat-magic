
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
      <div className="min-h-screen bg-[#A7D9FF]">
        {/* SEO Metadata */}
        <Helmet>
          <title>Welcome to Glencraig Primary School</title>
          <meta name="description" content="A special welcome guide from our Year 6 leavers to help you start your exciting journey with Glencraig Primary School!" />
          <meta property="og:title" content="Welcome to Glencraig Primary School" />
          <meta property="og:description" content="A special welcome guide created by our Year 6 students" />
          <meta property="og:type" content="website" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#A7D9FF" />
        </Helmet>

        {/* Hero Section */}
        <section 
          className="relative py-12 sm:py-20 px-4 md:px-8"
          aria-labelledby="welcome-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border-4 border-[#4B3B72] max-w-4xl mx-auto">
                <h1 
                  id="welcome-heading"
                  className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[#4B3B72] ${isLoaded ? 'animate-fade-in' : ''}`}
                >
                  Welcome to Glencraig Primary School
                </h1>
                <p 
                  className={`text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-[#6A5E80] max-w-3xl mx-auto ${isLoaded ? 'animate-fade-in' : ''}`} 
                  style={{ animationDelay: "0.2s" }}
                >
                  A special welcome guide from our Year 6 leavers to help you start your exciting journey with us!
                </p>
                <div 
                  className={`flex flex-col sm:flex-row justify-center items-center gap-4 ${isLoaded ? 'animate-fade-in' : ''}`} 
                  style={{ animationDelay: "0.4s" }}
                >
                  <Button
                    size="lg"
                    className={`${HOUSES_ARRAY[0].color} ${HOUSES_ARRAY[0].hoverColor} text-white text-lg rounded-full px-8 w-full sm:w-auto`}
                    onClick={() => setShowSortingDog(true)}
                    aria-label="Open the sorting dog dialog"
                  >
                    Try the Sorting Dog!
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className={`border-[${THEME_COLORS.primary}] text-[${THEME_COLORS.primary}] hover:bg-[${THEME_COLORS.primary}]/10 text-lg rounded-full px-8 w-full sm:w-auto`}
                    onClick={() => scrollToSection("school-info")}
                    aria-label="Scroll to school information section"
                  >
                    Learn More About Our School
                  </Button>
                </div>
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
          <DialogContent className="sm:max-w-md rounded-3xl border-4 border-[#4B3B72]">
            <DialogHeader>
              <DialogTitle id="sorting-dog-title" className="text-[#4B3B72] text-2xl">The Glencraig Sorting Dog</DialogTitle>
              <DialogDescription id="sorting-dog-description" className="text-[#6A5E80]">
                Let our magical sorting dog assign you to one of our school houses!
              </DialogDescription>
            </DialogHeader>
            <HouseAssignment onClose={() => setShowSortingDog(false)} />
          </DialogContent>
        </Dialog>

        {/* School Information Section */}
        <section 
          id="school-info" 
          className="py-12 sm:py-16 px-4 md:px-8 bg-white"
          aria-labelledby="school-info-heading"
        >
          <div className="max-w-7xl mx-auto">
            <h2 
              id="school-info-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-[#4B3B72]"
            >
              Our School Through Our Eyes
            </h2>
            <SchoolInfo />
          </div>
        </section>

        {/* Testimonials Section */}
        <section 
          className="py-12 sm:py-16 px-4 md:px-8 bg-[#E5DEFF]/50"
          aria-labelledby="testimonials-heading"
        >
          <div className="max-w-7xl mx-auto">
            <h2 
              id="testimonials-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-[#4B3B72]"
            >
              What Year 6 Students Say
            </h2>
            <StudentTestimonials />
          </div>
        </section>

        {/* Footer */}
        <footer 
          className="bg-[#4B3B72] text-white py-8 px-4 md:px-8"
          role="contentinfo"
        >
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-2">Glencraig Primary School</h3>
            <address className="mb-4 not-italic">123 School Lane, Glencraig, GC1 2AB</address>
            <p className="text-sm">Created with 💖 by our Year 6 students (2025)</p>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
};

export default Index;
