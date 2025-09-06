import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: boolean;
  className?: string;
}

export default function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  gradient = false,
  className 
}: FeatureCardProps) {
  return (
    <div className={cn(
      "group relative p-6 rounded-xl transition-all duration-300 hover-scale hover:shadow-xl",
      gradient ? "bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20" : "glass-card",
      className
    )}>
      <div className="mb-4">
        <div className={cn(
          "h-12 w-12 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110",
          gradient ? "bg-gradient-to-br from-primary to-accent" : "bg-primary/10"
        )}>
          <Icon className={cn("h-6 w-6", gradient ? "text-white" : "text-primary")} />
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}