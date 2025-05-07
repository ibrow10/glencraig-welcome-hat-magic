
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { HouseAssignment } from "@/components/HouseAssignment";
import { SchoolInfo } from "@/components/SchoolInfo";
import { StudentTestimonials } from "@/components/StudentTestimonials";

const Index = () => {
  const [showSortingHat, setShowSortingHat] = useState(false);

  return (
    <div className="min-h-screen bg-[#F2FCE2]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary animate-fade-in">
              Welcome to Glencraig Primary School
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              A special welcome guide from our Year 6 leavers to help you start your exciting journey with us!
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button
                size="lg"
                className="bg-[#FEC6A1] hover:bg-[#FEC6A1]/90 text-black text-lg"
                onClick={() => setShowSortingHat(true)}
              >
                Try the Sorting Hat!
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#D3E4FD] bg-[#D3E4FD] hover:bg-[#D3E4FD]/80 text-black text-lg ml-0 md:ml-4 mt-4 md:mt-0"
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
      </section>

      {/* Sorting Hat Dialog */}
      <Dialog open={showSortingHat} onOpenChange={setShowSortingHat}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>The Glencraig Sorting Hat</DialogTitle>
            <DialogDescription>
              Let our magical sorting hat assign you to one of our school houses!
            </DialogDescription>
          </DialogHeader>
          <HouseAssignment onClose={() => setShowSortingHat(false)} />
        </DialogContent>
      </Dialog>

      {/* School Information Section */}
      <section id="school-info" className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our School Through Our Eyes</h2>
          <SchoolInfo />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-8 bg-[#E5DEFF]/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Year 6 Students Say</h2>
          <StudentTestimonials />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4 md:px-8">
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
