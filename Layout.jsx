import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Music, Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose } from
"@/components/ui/sheet";

const navigationItems = [
{ title: "Home", path: "Home" },
{ title: "About", path: "About" },
{ title: "Services", path: "Services" },
{ title: "Media", path: "Media" },
{ title: "Contact", path: "Contact" }];


export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-amber-50">
      {/* Skip link for keyboard users */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-white text-purple-900 px-3 py-2 rounded shadow">Skip to main content</a>
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ?
        'bg-white/95 backdrop-blur-md shadow-lg border-b border-purple-100' :
        'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Music className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-amber-600 bg-clip-text text-transparent">
                  Ana Kastro
                </h1>
                <p className="text-xs text-gray-600 font-medium">Viola Artist</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={createPageUrl(item.path)}
                  aria-current={currentPageName === item.path ? 'page' : undefined}
                  className={`relative font-medium transition-colors duration-300 group ${
                  currentPageName === item.path ?
                  'text-purple-600' :
                  'text-gray-700 hover:text-purple-600'}`
                  }>
                    {item.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-amber-500 transition-all duration-300 group-hover:w-full" aria-hidden="true"></span>
                    {currentPageName === item.path &&
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-amber-500" aria-hidden="true"></span>
                    }
                  </Link>
              ))}
              <Link to={createPageUrl("Contact")}>
                <Button className="bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  Book Now
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between py-4 border-b">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-amber-500 rounded-full flex items-center justify-center">
                        <Music className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h1 className="font-bold text-purple-600">Ana Kastro</h1>
                        <p className="text-xs text-gray-600">Viola Artist</p>
                      </div>
                    </div>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="w-5 h-5" />
                      </Button>
                    </SheetClose>
                  </div>
                  
                  <nav className="flex flex-col space-y-4 mt-8">
                    {navigationItems.map((item) =>
                    <SheetClose asChild key={item.title}>
                        <Link
                        to={createPageUrl(item.path)}
                        className={`text-lg font-medium transition-colors ${
                        currentPageName === item.path ?
                        'text-purple-600' :
                        'text-gray-700 hover:text-purple-600'}`
                        }>

                          {item.title}
                        </Link>
                      </SheetClose>
                    )}
                  </nav>
                  
                  <div className="mt-auto pb-6">
                    <SheetClose asChild>
                      <Link to={createPageUrl("Contact")}>
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700 text-white">
                          Book Now
                        </Button>
                      </Link>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full flex items-center justify-center">
                  <Music className="w-5 h-5 text-purple-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Ana Kastro</h3>
                  <p className="text-purple-200">Professional Viola Artist</p>
                </div>
              </div>
              <p className="text-purple-200 leading-relaxed">
                Bringing beautiful viola music to your special moments. Available for weddings, 
                corporate events, and private performances.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navigationItems.map((item) =>
                <Link
                  key={item.title}
                  to={createPageUrl(item.path)}
                  className="block text-purple-200 hover:text-white transition-colors">

                    {item.title}
                  </Link>
                )}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-purple-200">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-purple-200">
                  <Mail className="w-4 h-4" />
                  <span>ana@anakastro.com</span>
                </div>
                <div className="flex items-center space-x-3 text-purple-200">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  <span>Amsterdam, NL</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-purple-700 mt-8 pt-8 text-center">
            <p className="text-purple-200">
              © 2024 Ana Kastro. All rights reserved. | Professional Viola Artist
            </p>
          </div>
        </div>
      </footer>
    </div>);

}