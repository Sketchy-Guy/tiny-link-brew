import { motion } from "framer-motion";
import { PageLayout } from "@/components/page-layout";
import { ContentWithImage } from "@/components/content-with-image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Lightbulb, Award, CheckCircle, ExternalLink, TrendingUp, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const SIRO = () => {
  const { data: siroInfo } = useQuery({
    queryKey: ['siro-recognition'],
    queryFn: async () => {
      const { data } = await supabase
        .from('accreditation_info')
        .select('*')
        .eq('accreditation_type', 'siro')
        .eq('is_active', true)
        .single();
      return data;
    }
  });

  const researchAreas = [
    {
      title: "Advanced Materials",
      icon: <Lightbulb className="h-6 w-6" />,
      description: "Cutting-edge research in nanotechnology and smart materials"
    },
    {
      title: "Sustainable Technology",
      icon: <Globe className="h-6 w-6" />,
      description: "Green energy solutions and environmental technologies"
    },
    {
      title: "AI & Machine Learning",
      icon: <TrendingUp className="h-6 w-6" />,
      description: "Innovative applications in artificial intelligence"
    },
    {
      title: "Industry Collaboration",
      icon: <Users className="h-6 w-6" />,
      description: "Strategic partnerships with leading industries"
    }
  ];

  const benefits = [
    "Access to government funding for research projects",
    "Tax incentives for research and development",
    "Enhanced credibility with industry partners",
    "Priority in national research programs",
    "International collaboration opportunities",
    "Simplified approval processes for projects"
  ];

  return (
    <PageLayout
      heroTitle="SIRO Recognition"
      heroSubtitle="Scientific and Industrial Research Organization"
      heroDescription="Recognized by DSIR, Government of India for excellence in scientific research and industrial innovation"
      heroImage="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      heroBadge="Research Excellence"
      heroHeight="large"
      heroChildren={
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link to="/about/accreditation">
              <Shield className="mr-2 h-4 w-4" />
              All Accreditations
            </Link>
          </Button>
          {siroInfo?.certificate_url && (
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20" asChild>
              <a href={siroInfo.certificate_url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Certificate
              </a>
            </Button>
          )}
        </div>
      }
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Introduction */}
        <ContentWithImage
          title="Research Excellence Recognition"
          content={siroInfo?.description || `
            The Department of Scientific and Industrial Research (DSIR), Ministry of Science and Technology, 
            Government of India has recognized NIT Nalanda as a Scientific and Industrial Research Organization (SIRO). 
            This prestigious recognition validates our commitment to advancing scientific knowledge and fostering 
            innovation that addresses real-world industrial challenges.
          `}
          imageUrl="https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          imagePosition="right"
        />

        {/* Key Benefits Grid */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Benefits of SIRO Recognition</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              SIRO status brings numerous advantages for research and innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-foreground">{benefit}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Research Focus Areas */}
        <Card className="shadow-card">
          <CardContent className="p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Research Focus Areas</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our cutting-edge research spans multiple domains of science and technology
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-primary">{area.icon}</div>
                  </div>
                  <h3 className="font-bold mb-2">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recognition Details */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center shadow-card hover:shadow-elegant transition-shadow">
            <CardContent className="p-8">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-primary">DSIR</h3>
              <p className="text-muted-foreground">
                Recognized by Department of Scientific & Industrial Research
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card hover:shadow-elegant transition-shadow">
            <CardContent className="p-8">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-primary">Excellence</h3>
              <p className="text-muted-foreground">
                Validated research excellence and innovation capabilities
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card hover:shadow-elegant transition-shadow">
            <CardContent className="p-8">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-primary">Impact</h3>
              <p className="text-muted-foreground">
                Contributing to national innovation and industrial growth
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="shadow-card bg-gradient-to-r from-primary/5 to-primary/10">
          <CardContent className="p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Lightbulb className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6">Research with Impact</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                SIRO recognition enables us to pursue groundbreaking research that bridges 
                academic excellence with industrial innovation, creating solutions for tomorrow's challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/about/governance">
                    <Users className="mr-2 h-4 w-4" />
                    Research Governance
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/about">
                    <Shield className="mr-2 h-4 w-4" />
                    About NIT Nalanda
                  </Link>
                </Button>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default SIRO;