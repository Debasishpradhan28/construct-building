import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Download, 
  Share2, 
  Printer,
  Eye,
  FileImage,
  BarChart3,
  Home,
  DollarSign,
  Shield,
  Calendar,
  User
} from "lucide-react";
import floorPlan from "@/assets/floor-plan.jpg";
import { useToast } from "@/hooks/use-toast";

const reportSections = [
  { id: "summary", title: "Executive Summary", icon: FileText, pages: 2 },
  { id: "design", title: "Design Specifications", icon: Home, pages: 5 },
  { id: "floorplans", title: "Floor Plans", icon: FileImage, pages: 3 },
  { id: "cost", title: "Cost Analysis", icon: DollarSign, pages: 4 },
  { id: "compliance", title: "Compliance Report", icon: Shield, pages: 2 },
  { id: "timeline", title: "Construction Timeline", icon: Calendar, pages: 1 },
];

export default function Report() {
  const { toast } = useToast();

  const handleDownload = (format: string) => {
    toast({
      title: `${format.toUpperCase()} Downloaded`,
      description: `Your report has been downloaded as ${format.toUpperCase()}.`,
    });
  };

  const handleShare = () => {
    toast({
      title: "Report Shared",
      description: "A shareable link has been copied to your clipboard.",
    });
  };

  const handlePrint = () => {
    window.print();
    toast({
      title: "Print Dialog Opened",
      description: "Your report is ready to print.",
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
            Professional <span className="gradient-text">Design Report</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive documentation of your AI-generated house design
          </p>
        </motion.div>

        {/* Report Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  <div>
                    <h3 className="font-semibold">Modern House Design Report</h3>
                    <p className="text-sm text-muted-foreground">
                      Generated on {new Date().toLocaleDateString()} • 17 pages
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={handlePrint}>
                    <Printer className="mr-2 h-4 w-4" />
                    Print
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleShare}>
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                  <Button variant="gradient" size="sm" onClick={() => handleDownload('pdf')}>
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Report Sections */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card>
              <CardHeader>
                <CardTitle>Report Contents</CardTitle>
                <CardDescription>
                  Navigate through report sections
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {reportSections.map((section, index) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{section.title}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {section.pages} {section.pages === 1 ? 'page' : 'pages'}
                      </Badge>
                    </button>
                  );
                })}
              </CardContent>
            </Card>

            {/* Export Options */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Export Options</CardTitle>
                <CardDescription>
                  Download in different formats
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-start" variant="outline" onClick={() => handleDownload('pdf')}>
                  <FileText className="mr-2 h-4 w-4" />
                  PDF Document
                </Button>
                <Button className="w-full justify-start" variant="outline" onClick={() => handleDownload('ppt')}>
                  <BarChart3 className="mr-2 h-4 w-4" />
                  PowerPoint Presentation
                </Button>
                <Button className="w-full justify-start" variant="outline" onClick={() => handleDownload('dwg')}>
                  <FileImage className="mr-2 h-4 w-4" />
                  CAD Files (DWG)
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Report Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Report Preview</CardTitle>
                    <CardDescription>
                      Interactive preview of your design report
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Eye className="mr-2 h-4 w-4" />
                    Full Screen
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="summary" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="summary">Summary</TabsTrigger>
                    <TabsTrigger value="design">Design</TabsTrigger>
                    <TabsTrigger value="cost">Cost</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="summary" className="mt-4">
                    <div className="space-y-6 p-6 bg-white rounded-lg border">
                      <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold mb-2">Modern Family Residence</h2>
                        <p className="text-muted-foreground">AI-Generated House Design Report</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h3 className="font-semibold text-sm text-muted-foreground">Project Details</h3>
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>Location:</span>
                              <span className="font-medium">San Francisco, CA</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Style:</span>
                              <span className="font-medium">Modern</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Total Area:</span>
                              <span className="font-medium">2,000 sqft</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <h3 className="font-semibold text-sm text-muted-foreground">Specifications</h3>
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>Bedrooms:</span>
                              <span className="font-medium">3</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Bathrooms:</span>
                              <span className="font-medium">2</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Floors:</span>
                              <span className="font-medium">2</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <h3 className="font-semibold mb-2">Executive Summary</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          This AI-generated design presents a modern two-story family residence optimized for 
                          comfort, functionality, and energy efficiency. The 2,000 square foot layout includes 
                          3 bedrooms, 2 bathrooms, an open-concept living area, and an attached two-car garage. 
                          The design incorporates sustainable materials, smart home technology, and complies with 
                          all local building codes and regulations.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="design" className="mt-4">
                    <div className="space-y-4 p-6 bg-white rounded-lg border">
                      <h3 className="font-semibold mb-4">Floor Plan Overview</h3>
                      <img 
                        src={floorPlan}
                        alt="Floor plan"
                        className="w-full rounded-lg"
                      />
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                          <h4 className="font-medium text-sm mb-2">First Floor</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Living Room: 350 sqft</li>
                            <li>• Kitchen: 200 sqft</li>
                            <li>• Dining: 150 sqft</li>
                            <li>• Garage: 400 sqft</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-2">Second Floor</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Master Bedroom: 300 sqft</li>
                            <li>• Bedroom 2: 200 sqft</li>
                            <li>• Bedroom 3: 180 sqft</li>
                            <li>• Bathrooms: 120 sqft</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="cost" className="mt-4">
                    <div className="space-y-4 p-6 bg-white rounded-lg border">
                      <h3 className="font-semibold mb-4">Cost Breakdown Summary</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                          <span className="font-medium">Foundation & Structure</span>
                          <span className="font-bold">$85,000</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                          <span className="font-medium">Framing & Roofing</span>
                          <span className="font-bold">$120,000</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                          <span className="font-medium">Interior Finishes</span>
                          <span className="font-bold">$95,000</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                          <span className="font-medium">Systems & Utilities</span>
                          <span className="font-bold">$110,000</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                          <span className="font-medium">Exterior & Landscaping</span>
                          <span className="font-bold">$65,000</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg border border-primary/20">
                          <span className="font-bold text-lg">Total Estimated Cost</span>
                          <span className="font-bold text-lg text-primary">$500,000</span>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}