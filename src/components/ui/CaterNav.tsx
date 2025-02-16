
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Calendar, BookOpen } from "lucide-react";

const CaterNav = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-semibold text-primary">
            CaterOne
          </Link>
          <div className="flex items-center space-x-8">
            <Link
              to="/events"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive("/events")
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`}
            >
              <Calendar className="w-5 h-5" />
              <span>My Events</span>
            </Link>
            <Link
              to="/book"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive("/book")
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span>Book an Event</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CaterNav;
