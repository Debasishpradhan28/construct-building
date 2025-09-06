import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import HouseViewer3D from "@/components/HouseViewer3D";
import { 
  Home, 
  DollarSign, 
  MapPin, 
  Bed, 
  Bath,
  Car,
  Maximize,
  Palette,
  Download,
  Loader2,
  CheckCircle
} from "lucide-react";
import floorPlan from "@/assets/floor-plan.jpg";
import { useToast } from "@/hooks/use-toast";

interface HouseRequirements {
  rooms: number;
  bathrooms: number;
  floors: number;
  style: string;
  budget: number;
  location: string;
  sqft: number;
  garage: boolean;
}

export default function DesignTool() {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [designGenerated, setDesignGenerated] = useState(false);
  const [requirements, setRequirements] = useState<HouseRequirements>({
    rooms: 3,
    bathrooms: 2,
    floors: 1,
    style: "modern",
    budget: 500000,
    location: "San Francisco, CA",
    sqft: 2000,
    garage: true
  });

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      setDesignGenerated(true);
      toast({
        title: "Design Generated Successfully!",
        description: "Your AI-powered house design is ready.",
      });
    }, 3000);
  };

  const handleDownload = () => {
    toast({
      title: "Report Downloaded",
      description: "Your design report has been downloaded successfully.",
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
            AI <span className="gradient-text">Design Tool</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Input your requirements and let our AI generate the perfect house design for you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Requirements Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <Card>
              <CardHeader>
                <CardTitle>House Requirements</CardTitle>
                <CardDescription>
                  Customize your dream home specifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Location */}
                <div className="space-y-2">
                  <Label htmlFor="location">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    Location
                  </Label>
                  <Input
                    id="location"
                    value={requirements.location}
                    onChange={(e) => setRequirements({...requirements, location: e.target.value})}
                    placeholder="Enter city or zip code"
                  />
                </div>

                {/* Style */}
                <div className="space-y-2">
                  <Label htmlFor="style">
                    <Palette className="inline h-4 w-4 mr-1" />
                    Architectural Style
                  </Label>
                  <Select
                    value={requirements.style}
                    onValueChange={(value) => setRequirements({...requirements, style: value})}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="modern">Modern</SelectItem>
                      <SelectItem value="traditional">Traditional</SelectItem>
                      <SelectItem value="contemporary">Contemporary</SelectItem>
                      <SelectItem value="colonial">Colonial</SelectItem>
                      <SelectItem value="minimalist">Minimalist</SelectItem>
                      <SelectItem value="mediterranean">Mediterranean</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Rooms */}
                <div className="space-y-2">
                  <Label>
                    <Bed className="inline h-4 w-4 mr-1" />
                    Bedrooms: {requirements.rooms}
                  </Label>
                  <Slider
                    value={[requirements.rooms]}
                    onValueChange={([value]) => setRequirements({...requirements, rooms: value})}
                    min={1}
                    max={6}
                    step={1}
                  />
                </div>

                {/* Bathrooms */}
                <div className="space-y-2">
                  <Label>
                    <Bath className="inline h-4 w-4 mr-1" />
                    Bathrooms: {requirements.bathrooms}
                  </Label>
                  <Slider
                    value={[requirements.bathrooms]}
                    onValueChange={([value]) => setRequirements({...requirements, bathrooms: value})}
                    min={1}
                    max={4}
                    step={0.5}
                  />
                </div>

                {/* Floors */}
                <div className="space-y-2">
                  <Label>
                    <Home className="inline h-4 w-4 mr-1" />
                    Floors: {requirements.floors}
                  </Label>
                  <Slider
                    value={[requirements.floors]}
                    onValueChange={([value]) => setRequirements({...requirements, floors: value})}
                    min={1}
                    max={3}
                    step={1}
                  />
                </div>

                {/* Square Feet */}
                <div className="space-y-2">
                  <Label>
                    <Maximize className="inline h-4 w-4 mr-1" />
                    Square Feet: {requirements.sqft.toLocaleString()}
                  </Label>
                  <Slider
                    value={[requirements.sqft]}
                    onValueChange={([value]) => setRequirements({...requirements, sqft: value})}
                    min={1000}
                    max={5000}
                    step={100}
                  />
                </div>

                {/* Budget */}
                <div className="space-y-2">
                  <Label>
                    <DollarSign className="inline h-4 w-4 mr-1" />
                    Budget: ${requirements.budget.toLocaleString()}
                  </Label>
                  <Slider
                    value={[requirements.budget]}
                    onValueChange={([value]) => setRequirements({...requirements, budget: value})}
                    min={200000}
                    max={2000000}
                    step={50000}
                  />
                </div>

                {/* Garage */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="garage"
                    checked={requirements.garage}
                    onChange={(e) => setRequirements({...requirements, garage: e.target.checked})}
                    className="rounded border-input"
                  />
                  <Label htmlFor="garage" className="cursor-pointer">
                    <Car className="inline h-4 w-4 mr-1" />
                    Include Garage
                  </Label>
                </div>

                <Button 
                  className="w-full" 
                  variant="gradient"
                  onClick={handleGenerate}
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating Design...
                    </>
                  ) : (
                    <>Generate AI Design</>
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Visualization Area */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Design Visualization</CardTitle>
                    <CardDescription>
                      2D floor plans and 3D model of your house
                    </CardDescription>
                  </div>
                  {designGenerated && (
                    <Button variant="outline" size="sm" onClick={handleDownload}>
                      <Download className="mr-2 h-4 w-4" />
                      Download Report
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {!designGenerated ? (
                  <div className="h-[600px] flex items-center justify-center border-2 border-dashed border-border rounded-lg bg-secondary/10">
                    <div className="text-center">
                      <Home className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Configure your requirements and click "Generate AI Design" to visualize your dream home
                      </p>
                    </div>
                  </div>
                ) : (
                  <Tabs defaultValue="floorplan" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="floorplan">2D Floor Plan</TabsTrigger>
                      <TabsTrigger value="3d">3D Visualization</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="floorplan" className="mt-4">
                      <div className="h-[600px] rounded-lg overflow-hidden">
                        <img 
                          src={floorPlan}
                          alt="Generated floor plan"
                          className="w-full h-full object-contain bg-white"
                        />
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="3d" className="mt-4">
                      <div className="h-[600px]">
                        <HouseViewer3D houseData={requirements} />
                      </div>
                    </TabsContent>
                  </Tabs>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Generated Design Info */}
        {designGenerated && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            {[
              { label: "Total Area", value: `${requirements.sqft.toLocaleString()} sqft`, icon: Maximize },
              { label: "Estimated Cost", value: `$${requirements.budget.toLocaleString()}`, icon: DollarSign },
              { label: "Compliance", value: "Approved", icon: CheckCircle, color: "text-success" },
              { label: "Energy Rating", value: "A+", icon: Home, color: "text-primary" }
            ].map((stat, index) => (
              <Card key={index}>
                <CardContent className="flex items-center justify-between p-6">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className={`text-2xl font-bold ${stat.color || ""}`}>{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color || "text-muted-foreground"}`} />
                </CardContent>
              </Card>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}