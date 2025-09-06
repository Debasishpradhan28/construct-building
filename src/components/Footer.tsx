import { Link } from "react-router-dom";
import { Home, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Home className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl gradient-text">AI House Designer</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Revolutionizing home design with AI-powered tools for architects and homeowners.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 rounded-lg hover:bg-accent/10 transition-colors">
                <Linkedin className="h-4 w-4 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-accent/10 transition-colors">
                <Twitter className="h-4 w-4 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-accent/10 transition-colors">
                <Github className="h-4 w-4 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/design" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Design Tool
                </Link>
              </li>
              <li>
                <Link to="/cost-compliance" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Cost Calculator
                </Link>
              </li>
              <li>
                <Link to="/report" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Reports
                </Link>
              </li>
              <li>
                <Link to="/assistant" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  AI Assistant
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                contact@aihouse.design
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2024 AI House Designer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}