
import React from "react";
import { Mail } from "lucide-react";

export function Footerdemo() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-3xl font-bold text-white mb-8">
            Wayne Johnson
          </div>
          
          <div className="flex justify-center mb-8">
            <a 
              href="mailto:wjohns65@asu.edu" 
              className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300"
            >
              <div className="p-4 rounded-full border border-gray-700 group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all duration-300">
                <Mail className="h-6 w-6" />
              </div>
              <span className="text-lg font-medium">wjohns65@asu.edu</span>
            </a>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Wayne Johnson. All rights reserved.</p>
            <p className="mt-2 text-sm">Computer Science Student | Aspiring Software Engineer</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
