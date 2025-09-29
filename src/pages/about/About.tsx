import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const About = () => {
  const { data: aboutContent } = useQuery({
    queryKey: ['about-page'],
    queryFn: async () => {
      const { data } = await supabase
        .from('about_pages')
        .select('*')
        .eq('page_type', 'about')
        .eq('is_active', true)
        .single();
      return data;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {aboutContent?.title || "About NIT Nalanda"}
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Excellence in Technical Education and Research
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Institution</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {aboutContent?.content || `
                    National Institute of Technology Nalanda stands as a beacon of excellence in technical education and research. 
                    Established with the vision to nurture innovative engineers and entrepreneurs, we have been committed to 
                    providing world-class education and fostering research that addresses real-world challenges.
                  `}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Key Highlights */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be a globally recognized institute of excellence in technical education, research, and innovation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide quality technical education, promote research and innovation, and develop competent professionals.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">At a Glance</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">17+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">A+</div>
                  <div className="text-sm text-muted-foreground">NAAC Grade</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">NBA</div>
                  <div className="text-sm text-muted-foreground">Accredited</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">SIRO</div>
                  <div className="text-sm text-muted-foreground">Recognized</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;