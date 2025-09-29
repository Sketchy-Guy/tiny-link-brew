import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Users, Award, BookOpen } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { DepartmentHero } from './department-hero';
import { FacultyCard } from './faculty-card';
import { PhotoGallery } from './photo-gallery';

interface Department {
  id: string;
  name: string;
  code: string;
  description: string;
  head_name: string;
  contact_email: string;
  hero_image_url: string;
  gallery_images: string[];
  mission: string;
  vision: string;
  facilities: string[];
  programs_offered: string[];
  achievements: string[];
  location_details: string;
}

interface Faculty {
  id: string;
  full_name: string;
  email: string;
  designation: string;
  qualifications: string;
  research_areas: string[];
  photo_url: string;
}

interface DepartmentTemplateProps {
  departmentCode: string;
  fallbackData?: Partial<Department>;
}

export function DepartmentTemplate({ departmentCode, fallbackData }: DepartmentTemplateProps) {
  const [department, setDepartment] = useState<Department | null>(null);
  const [faculty, setFaculty] = useState<Faculty[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDepartmentData = async () => {
      try {
        // Fetch department data
        const { data: deptData } = await supabase
          .from('departments')
          .select('*')
          .eq('code', departmentCode.toUpperCase())
          .single();

        if (deptData) {
          setDepartment(deptData);
        } else if (fallbackData) {
          setDepartment({
            id: '',
            code: departmentCode.toUpperCase(),
            name: fallbackData.name || departmentCode,
            description: fallbackData.description || '',
            head_name: fallbackData.head_name || '',
            contact_email: fallbackData.contact_email || '',
            hero_image_url: fallbackData.hero_image_url || '',
            gallery_images: fallbackData.gallery_images || [],
            mission: fallbackData.mission || '',
            vision: fallbackData.vision || '',
            facilities: fallbackData.facilities || [],
            programs_offered: fallbackData.programs_offered || [],
            achievements: fallbackData.achievements || [],
            location_details: fallbackData.location_details || ''
          });
        }

        // Fetch faculty data
        const { data: facultyData } = await supabase
          .from('profiles')
          .select(`
            id, full_name, email, designation, qualifications, research_areas, photo_url,
            faculty_departments!inner(department_id, is_hod)
          `)
          .eq('role_type', 'faculty')
          .eq('faculty_departments.department_id', deptData?.id);

        if (facultyData) {
          setFaculty(facultyData);
        }
      } catch (error) {
        console.error('Error fetching department data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDepartmentData();
  }, [departmentCode, fallbackData]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!department) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Department Not Found</h1>
          <p className="text-muted-foreground">The requested department could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <DepartmentHero 
        title={department.name}
        description={department.description}
        imageUrl={department.hero_image_url}
      />

      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Mission & Vision */}
        {(department.mission || department.vision) && (
          <div className="grid md:grid-cols-2 gap-6">
            {department.mission && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{department.mission}</p>
                </CardContent>
              </Card>
            )}
            {department.vision && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{department.vision}</p>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Programs Offered */}
        {department.programs_offered && department.programs_offered.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Programs Offered</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {department.programs_offered.map((program, index) => (
                  <Badge key={index} variant="secondary">{program}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Faculty */}
        {faculty.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Faculty Members
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {faculty.map((member) => (
                  <FacultyCard key={member.id} faculty={member} />
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Facilities */}
        {department.facilities && department.facilities.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Facilities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {department.facilities.map((facility, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>{facility}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Achievements */}
        {department.achievements && department.achievements.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {department.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Award className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Photo Gallery */}
        {department.gallery_images && department.gallery_images.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Gallery</CardTitle>
            </CardHeader>
            <CardContent>
              <PhotoGallery images={department.gallery_images} />
            </CardContent>
          </Card>
        )}

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {department.head_name && (
              <div className="flex items-center gap-3">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span><strong>Head:</strong> {department.head_name}</span>
              </div>
            )}
            {department.contact_email && (
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href={`mailto:${department.contact_email}`} className="text-primary hover:underline">
                  {department.contact_email}
                </a>
              </div>
            )}
            {department.location_details && (
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{department.location_details}</span>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}