import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PORTFOLIO_CATEGORIES } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/80 backdrop-blur-md border-border py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-display font-bold tracking-tighter">
            Creative<span className="text-primary/60">Vision</span>
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary/60 transition-colors">
            About
          </button>
          <div className="relative group">
            <button className="text-sm font-medium hover:text-primary/60 transition-colors flex items-center gap-1">
              Work
            </button>
            <div className="absolute top-full right-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2">
              {PORTFOLIO_CATEGORIES.slice(0, 5).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToSection(cat.id)}
                  className="block w-full text-left px-3 py-2 text-sm hover:bg-muted rounded-md"
                >
                  {cat.title}
                </button>
              ))}
              <div className="h-px bg-border my-1" />
              <button onClick={() => scrollToSection("portfolio")} className="block w-full text-left px-3 py-2 text-sm font-semibold hover:bg-muted rounded-md">
                View All
              </button>
            </div>
          </div>
          <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-primary/60 transition-colors">
            Contact
          </button>
          <Button onClick={() => scrollToSection("contact")} variant="default" size="sm">
            Hire Us
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] bg-background z-40 md:hidden p-6 overflow-y-auto border-t border-border">
          <div className="flex flex-col gap-6">
            <button onClick={() => scrollToSection("about")} className="text-xl font-display font-medium">
              About
            </button>
            <div className="space-y-3">
              <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Portfolio</div>
              {PORTFOLIO_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToSection(cat.id)}
                  className="block text-lg"
                >
                  {cat.title}
                </button>
              ))}
            </div>
            <button onClick={() => scrollToSection("contact")} className="text-xl font-display font-medium">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
