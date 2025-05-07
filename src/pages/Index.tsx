
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { HouseAssignment } from "@/components/HouseAssignment";
import { SchoolInfo } from "@/components/SchoolInfo";
import { StudentTestimonials } from "@/components/StudentTestimonials";

const Index = () => {
  const [showSortingHat, setShowSortingHat] = useState(false);

  return (
    <div className="min-h-screen bg-[#A7D9FF]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-[#4B3B72] max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#4B3B72] animate-fade-in">
                Welcome to Glencraig Primary School
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-[#6A5E80] max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
                A special welcome guide from our Year 6 leavers to help you start your exciting journey with us!
              </p>
              <div className="space-y-4 md:space-y-0 md:space-x-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Button
                  size="lg"
                  className="bg-[#33C3F0] hover:bg-[#33C3F0]/90 text-white text-lg rounded-full px-8"
                  onClick={() => setShowSortingHat(true)}
                >
                  Try the Sorting Hat!
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#4B3B72] text-[#4B3B72] hover:bg-[#4B3B72]/10 text-lg ml-0 md:ml-4 mt-4 md:mt-0 rounded-full px-8"
                  onClick={() => {
                    const element = document.getElementById("school-info");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Learn More About Our School
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sorting Hat Dialog */}
      <Dialog open={showSortingHat} onOpenChange={setShowSortingHat}>
        <DialogContent className="sm:max-w-md rounded-3xl border-4 border-[#4B3B72]">
          <DialogHeader>
            <DialogTitle className="text-[#4B3B72] text-2xl">The Glencraig Sorting Hat</DialogTitle>
            <DialogDescription className="text-[#6A5E80]">
              Let our magical sorting hat assign you to one of our school houses!
            </DialogDescription>
          </DialogHeader>
          <HouseAssignment onClose={() => setShowSortingHat(false)} />
        </DialogContent>
      </Dialog>

      {/* School Information Section */}
      <section id="school-info" className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#4B3B72]">Our School Through Our Eyes</h2>
          <SchoolInfo />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-8 bg-[#E5DEFF]/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#4B3B72]">What Year 6 Students Say</h2>
          <StudentTestimonials />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4B3B72] text-white py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-2">Glencraig Primary School</h3>
          <p className="mb-4">123 School Lane, Glencraig, GC1 2AB</p>
          <p className="text-sm">Created with 💖 by our Year 6 students (2025)</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
