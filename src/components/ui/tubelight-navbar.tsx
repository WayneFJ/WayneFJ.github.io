
import React, { useState, useEffect } from "react";
import { Home, User, Music } from 'lucide-react';

const navigation = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Music", href: "#music", icon: Music },
];

export function TubelightNavbarDemo() {
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(nav => nav.name.toLowerCase());
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(navigation[i].name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40">
      <div className="flex items-center justify-center bg-gray-900/95 backdrop-blur-md rounded-full px-6 py-3 shadow-2xl border border-gray-700">
        <nav className="flex space-x-1">
          {navigation.map((item) => {
            const isActive = activeSection === item.name;
            const Icon = item.icon;
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`
                  relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-2
                  ${isActive 
                    ? "text-white bg-blue-600 shadow-lg" 
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }
                `}
              >
                <Icon className="h-4 w-4" />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
