import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Trophy, Heart, BookOpen, MapPin, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Overview = () => {
  const highlights = [
    {
      icon: Users,
      title: "50+ Active Clubs",
      description: "Technical, Cultural, and Sports societies",
      link: "/campus-life/clubs"
    },
    {
      icon: Calendar,
      title: "Year-round Events",
      description: "Festivals, competitions, and workshops",
      link: "/campus-life/festivals"
    },
    {
      icon: Trophy,
      title: "Sports Excellence",
      description: "State-of-the-art facilities and tournaments",
      link: "/campus-life/sports"
    },
    {
      icon: Heart,
      title: "Wellness Center",
      description: "Health, fitness, and mental wellness programs",
      link: "/campus-life/wellness"
    }
  ];

  const quickLinks = [
    { title: "Hostel Life", description: "Comfortable accommodation with modern facilities", link: "/campus-life/hostel", badge: "Accommodation" },
    { title: "Student Governance", description: "Student council and democratic representation", link: "/campus-life/governance", badge: "Leadership" },
    { title: "Campus Publications", description: "Newsletters, magazines, and journals", link: "/campus-life/publications", badge: "Media" },
    { title: "Campus Amenities", description: "Library, cafeteria, and recreational facilities", link: "/campus-life/amenities", badge: "Facilities" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4">Campus Life</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Life Beyond Classrooms
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover a vibrant campus community where academic excellence meets personal growth, 
              cultural diversity, and lifelong friendships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/campus-life/clubs">
                  <Users className="mr-2 h-4 w-4" />
                  Explore Clubs
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/campus-life/events">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Events
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Campus Life Highlights</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the best of student life with our diverse range of activities and opportunities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <Link to={highlight.link}>
                    <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
                      <CardHeader className="text-center">
                        <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{highlight.title}</CardTitle>
                        <CardDescription>{highlight.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Access Links */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Quick Access</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Navigate to different aspects of campus life quickly
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Link to={link.link}>
                  <Card className="group hover:shadow-lg transition-all hover:border-primary/20">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-lg group-hover:text-primary transition-colors">
                              {link.title}
                            </CardTitle>
                            <Badge variant="secondary">{link.badge}</Badge>
                          </div>
                          <CardDescription>{link.description}</CardDescription>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Star className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Join Our Campus Community</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of a diverse, inclusive community that supports your academic journey 
              and personal development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/campus-life/activities">
                  <Calendar className="mr-2 h-4 w-4" />
                  Student Activities
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/campus-life/governance">
                  <Users className="mr-2 h-4 w-4" />
                  Student Leadership
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Overview;