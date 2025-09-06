import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import { 
  Home, 
  Palette, 
  DollarSign, 
  FileText, 
  MessageCircle, 
  Zap,
  Shield,
  Cpu,
  ArrowRight,
  CheckCircle,
  Sparkles
} from "lucide-react";
import heroHouse from "@/assets/hero-house.jpg";
import floorPlan from "@/assets/floor-plan.jpg";

const features = [
  {
    icon: Palette,
    title: "AI-Powered Design",
    description: "Generate stunning 2D floor plans and 3D visualizations instantly with our advanced AI algorithms."
  },
  {
    icon: DollarSign,
    title: "Smart Cost Estimation",
    description: "Get accurate cost breakdowns and budget optimization suggestions in real-time."
  },
  {
    icon: Shield,
    title: "Compliance Check",
    description: "Ensure your design meets all local building codes and regulations automatically."
  },
  {
    icon: FileText,
    title: "Professional Reports",
    description: "Download comprehensive PDF and PPT reports with all design details and specifications."
  },
  {
    icon: MessageCircle,
    title: "AI Assistant",
    description: "Chat with our AI to explore design variations and get instant answers to your questions."
  },
  {
    icon: Cpu,
    title: "Smart Optimization",
    description: "AI optimizes space utilization, energy efficiency, and structural integrity."
  }
];

const benefits = [
  "Save 80% time on initial design phase",
  "Reduce design costs by up to 60%",
  "Instant visualization and modifications",
  "Professional-grade outputs",
  "No CAD experience required",
  "Cloud-based collaboration"
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroHouse}
            alt="Modern smart home"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered House Design Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Design Your <span className="gradient-text">Dream Home</span><br />
              in Minutes, Not Months
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your vision into reality with AI-powered floor plans, 3D visualizations, 
              cost estimates, and compliance checks - all in one intelligent platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/design">
                <Button size="lg" variant="gradient" className="group">
                  Start Designing Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {["10K+ Designs", "95% Accuracy", "5 Min Setup", "24/7 Support"].map((stat, index) => (
                <motion.div
                  key={stat}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-primary">{stat.split(" ")[0]}</div>
                  <div className="text-sm text-muted-foreground">{stat.split(" ").slice(1).join(" ")}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Powered by <span className="gradient-text">Advanced AI</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our cutting-edge AI technology revolutionizes the home design process,
              making professional architecture accessible to everyone.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <FeatureCard {...feature} gradient={index === 0} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                From <span className="gradient-text">Concept to Reality</span> in 3 Simple Steps
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Input Your Requirements</h3>
                    <p className="text-muted-foreground">
                      Tell us about your dream home - rooms, style, budget, and location preferences.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">AI Generates Your Design</h3>
                    <p className="text-muted-foreground">
                      Our AI creates detailed floor plans, 3D models, and ensures compliance with regulations.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Download & Build</h3>
                    <p className="text-muted-foreground">
                      Get professional reports, cost estimates, and start building your dream home.
                    </p>
                  </div>
                </div>
              </div>
              
              <Link to="/design">
                <Button variant="gradient" size="lg" className="mt-8 group">
                  Try It Now - It's Free
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src={floorPlan}
                alt="AI generated floor plan"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-primary to-accent text-white p-4 rounded-lg shadow-xl">
                <Zap className="h-6 w-6 mb-2" />
                <div className="text-sm font-semibold">Generated in 30 seconds</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">AI House Designer</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-lg bg-card hover:bg-card-hover transition-colors"
              >
                <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                <span className="text-sm font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto glass-card p-12 rounded-2xl"
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Design Your <span className="gradient-text">Dream Home?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of homeowners and architects who are already using AI to revolutionize their design process.
            </p>
            <Link to="/design">
              <Button size="lg" variant="gradient" className="group">
                Start Your Free Design
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}