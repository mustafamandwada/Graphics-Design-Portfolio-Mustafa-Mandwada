import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PORTFOLIO_CATEGORIES } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple intersection observer logic for active section
      const sections = ["about", "portfolio", "contact"];
      const current = sections.find(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
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
            Mustafa<span className="text-primary"> Mandwada</span>
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection("about")} 
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors relative py-1",
              activeSection === "about" && "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
            )}
          >
            About Me
          </button>
          <div className="relative group">
            <button 
              onClick={() => scrollToSection("portfolio")}
              className={cn(
                "text-sm font-medium hover:text-primary transition-colors flex items-center gap-1 relative py-1",
                (activeSection === "portfolio" || PORTFOLIO_CATEGORIES.some(c => activeSection === c.id)) && "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
              )}
            >
              Portfolio
            </button>
            <div className="absolute top-full right-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2">
              {PORTFOLIO_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToSection(cat.id)}
                  className="block w-full text-left px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors"
                >
                  {cat.title}
                </button>
              ))}
              <div className="h-px bg-border my-1" />
              <button onClick={() => scrollToSection("portfolio")} className="block w-full text-left px-3 py-2 text-sm font-semibold hover:bg-muted rounded-md transition-colors">
                View All
              </button>
            </div>
          </div>
          <button 
            onClick={() => scrollToSection("contact")} 
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors relative py-1",
              activeSection === "contact" && "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
            )}
          >
            Contact
          </button>
          <Button onClick={() => scrollToSection("contact")} variant="default" size="sm" className="font-semibold">
            Hire Me
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
            <button onClick={() => scrollToSection("about")} className="text-xl font-display font-medium text-left">
              About Me
            </button>
            <div className="space-y-3">
              <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Portfolio</div>
              {PORTFOLIO_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToSection(cat.id)}
                  className="block text-lg w-full text-left"
                >
                  {cat.title}
                </button>
              ))}
            </div>
            <button onClick={() => scrollToSection("contact")} className="text-xl font-display font-medium text-left">
              Contact
            </button>
            <Button onClick={() => scrollToSection("contact")} className="w-full mt-4 font-semibold">
              Hire Me
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
