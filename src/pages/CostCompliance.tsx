import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  DollarSign, 
  CheckCircle, 
  AlertCircle, 
  TrendingUp,
  Shield,
  FileText,
  Calculator,
  Home,
  Wrench,
  Lightbulb,
  Trees,
  Zap
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const costBreakdown = [
  { category: "Foundation & Structure", amount: 85000, percentage: 17 },
  { category: "Framing & Roofing", amount: 120000, percentage: 24 },
  { category: "Electrical & Plumbing", amount: 75000, percentage: 15 },
  { category: "Interior Finishes", amount: 95000, percentage: 19 },
  { category: "Exterior & Landscaping", amount: 65000, percentage: 13 },
  { category: "HVAC & Insulation", amount: 35000, percentage: 7 },
  { category: "Permits & Fees", amount: 25000, percentage: 5 }
];

const complianceItems = [
  { item: "Building Codes", status: "passed", description: "Meets all local building regulations" },
  { item: "Zoning Requirements", status: "passed", description: "Compliant with residential zoning" },
  { item: "Fire Safety", status: "passed", description: "All fire safety standards met" },
  { item: "Electrical Standards", status: "passed", description: "NEC 2023 compliant" },
  { item: "Plumbing Codes", status: "passed", description: "IPC standards satisfied" },
  { item: "Energy Efficiency", status: "warning", description: "Consider solar panels for better rating" },
  { item: "Accessibility", status: "passed", description: "ADA compliant design" },
  { item: "Environmental Impact", status: "passed", description: "Green building standards met" }
];

const optimizationSuggestions = [
  { 
    icon: Lightbulb, 
    title: "Smart Home Integration", 
    savings: "$15,000", 
    description: "Add smart systems for long-term energy savings" 
  },
  { 
    icon: Trees, 
    title: "Sustainable Materials", 
    savings: "$8,000", 
    description: "Use eco-friendly materials for tax incentives" 
  },
  { 
    icon: Zap, 
    title: "Solar Panel Installation", 
    savings: "$25,000", 
    description: "Reduce energy costs by 70% over 10 years" 
  },
  { 
    icon: Wrench, 
    title: "Bulk Material Purchase", 
    savings: "$12,000", 
    description: "Order materials in bulk for better pricing" 
  }
];

export default function CostCompliance() {
  const { toast } = useToast();
  const totalCost = costBreakdown.reduce((sum, item) => sum + item.amount, 0);

  const handleOptimize = () => {
    toast({
      title: "Optimization Applied",
      description: "Cost-saving suggestions have been applied to your design.",
    });
  };

  const handleExportReport = () => {
    toast({
      title: "Report Exported",
      description: "Detailed cost & compliance report has been downloaded.",
    });
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-4">
            Cost & <span className="gradient-text">Compliance Analysis</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Detailed cost breakdown and regulatory compliance check for your design
          </p>
        </motion.div>

        {/* Summary Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Cost</p>
                  <p className="text-2xl font-bold">${totalCost.toLocaleString()}</p>
                </div>
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Cost per Sqft</p>
                  <p className="text-2xl font-bold">$250</p>
                </div>
                <Calculator className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Compliance</p>
                  <p className="text-2xl font-bold text-success">95%</p>
                </div>
                <Shield className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Savings</p>
                  <p className="text-2xl font-bold text-primary">$60k</p>
                </div>
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cost Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Cost Breakdown</CardTitle>
                <CardDescription>
                  Detailed breakdown of construction costs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {costBreakdown.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{item.category}</span>
                      <span className="text-muted-foreground">${item.amount.toLocaleString()}</span>
                    </div>
                    <Progress value={item.percentage} className="h-2" />
                  </div>
                ))}
                
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total Estimated Cost</span>
                    <span className="text-2xl font-bold text-primary">
                      ${totalCost.toLocaleString()}
                    </span>
                  </div>
                </div>
                
                <Button className="w-full mt-4" variant="outline" onClick={handleExportReport}>
                  <FileText className="mr-2 h-4 w-4" />
                  Export Detailed Report
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Compliance Check */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Compliance Check</CardTitle>
                <CardDescription>
                  Regulatory and building code compliance status
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {complianceItems.map((item, index) => (
                  <div key={index} className="flex items-start justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                    <div className="flex items-start gap-3">
                      {item.status === "passed" ? (
                        <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-warning mt-0.5" />
                      )}
                      <div>
                        <p className="font-medium text-sm">{item.item}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <Badge variant={item.status === "passed" ? "default" : "secondary"}>
                      {item.status === "passed" ? "Passed" : "Review"}
                    </Badge>
                  </div>
                ))}
                
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Overall Compliance Score</span>
                    <div className="flex items-center gap-2">
                      <Progress value={95} className="w-24 h-2" />
                      <span className="text-sm font-bold text-success">95%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Optimization Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Cost Optimization Suggestions</CardTitle>
                  <CardDescription>
                    AI-powered recommendations to reduce costs
                  </CardDescription>
                </div>
                <Button variant="gradient" onClick={handleOptimize}>
                  Apply All Suggestions
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {optimizationSuggestions.map((suggestion, index) => {
                  const Icon = suggestion.icon;
                  return (
                    <div key={index} className="flex gap-4 p-4 rounded-lg border hover:bg-secondary/50 transition-colors">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-semibold text-sm">{suggestion.title}</h4>
                          <Badge variant="secondary" className="text-xs">
                            Save {suggestion.savings}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">{suggestion.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}