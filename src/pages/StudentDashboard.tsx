import { useState } from 'react';
import { PageLayout } from '@/components/page-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { StudentSubmissionForm } from '@/components/student-submission-form';
import { 
  User, Bell, Newspaper, BookOpen, Trophy, Calendar, 
  Users, DollarSign, Download, Home, Clock, CheckCircle,
  AlertCircle, FileText, ChevronRight, Award
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function StudentDashboard() {
  const [isSubmissionOpen, setIsSubmissionOpen] = useState(false);

  // Mock student data
  const studentData = {
    name: "Rahul Kumar",
    rollNumber: "21BCA001",
    department: "Computer Science & Engineering",
    semester: "6th Semester",
    email: "rahul.kumar@student.edu",
    phone: "+91 98765 43210",
    currentClub: "Coding Club",
    attendance: "87.5%"
  };

  const notices = [
    { id: 1, title: "Mid-term Exam Schedule Released", date: "2024-03-20", type: "urgent" },
    { id: 2, title: "Sports Day Registration Open", date: "2024-03-18", type: "info" },
    { id: 3, title: "Library Hours Extended", date: "2024-03-15", type: "info" }
  ];

  const news = [
    { id: 1, title: "NIT Students Win National Hackathon", category: "Achievement", date: "2024-03-19" },
    { id: 2, title: "Guest Lecture by Industry Expert", category: "Event", date: "2024-03-17" }
  ];

  const semesterResults = [
    { subject: "Data Structures", credits: 4, grade: "A+", score: 92 },
    { subject: "Database Management", credits: 4, grade: "A", score: 88 },
    { subject: "Operating Systems", credits: 3, grade: "A+", score: 94 },
    { subject: "Computer Networks", credits: 3, grade: "B+", score: 82 },
    { subject: "Software Engineering", credits: 4, grade: "A", score: 89 }
  ];

  const timetable = [
    { day: "Monday", slots: ["Data Structures (9-10)", "DBMS Lab (10-12)", "Free", "OS (2-3)"] },
    { day: "Tuesday", slots: ["Networks (9-10)", "SE (10-11)", "Free", "DSA Lab (2-4)"] },
    { day: "Wednesday", slots: ["DBMS (9-10)", "OS (10-11)", "Networks (11-12)", "Free"] },
    { day: "Thursday", slots: ["SE (9-10)", "Data Structures (10-11)", "Free", "Sports (2-4)"] },
    { day: "Friday", slots: ["Networks Lab (9-11)", "Free", "OS (12-1)", "SE Lab (2-4)"] }
  ];

  const clubs = [
    { id: 1, name: "Coding Club", members: 156, joined: true },
    { id: 2, name: "Photography Club", members: 89, joined: false },
    { id: 3, name: "Music Club", members: 124, joined: false },
    { id: 4, name: "Drama Club", members: 67, joined: false },
    { id: 5, name: "Sports Club", members: 203, joined: false },
    { id: 6, name: "Literary Club", members: 92, joined: false }
  ];

  const attendance = [
    { subject: "Data Structures", total: 45, present: 42, percentage: 93.3 },
    { subject: "DBMS", total: 42, present: 38, percentage: 90.5 },
    { subject: "Operating Systems", total: 40, present: 34, percentage: 85.0 },
    { subject: "Networks", total: 38, present: 32, percentage: 84.2 },
    { subject: "Software Engineering", total: 36, present: 30, percentage: 83.3 }
  ];

  const notes = [
    { id: 1, subject: "Data Structures", topic: "Binary Trees", uploadedBy: "Dr. Sharma", date: "2024-03-15" },
    { id: 2, subject: "DBMS", topic: "Normalization", uploadedBy: "Prof. Verma", date: "2024-03-14" },
    { id: 3, subject: "Operating Systems", topic: "Process Scheduling", uploadedBy: "Dr. Kumar", date: "2024-03-13" },
    { id: 4, subject: "Networks", topic: "TCP/IP Protocol", uploadedBy: "Prof. Singh", date: "2024-03-12" }
  ];

  const magazines = [
    { id: 1, title: "Tech Tribune - March 2024", date: "2024-03-01" },
    { id: 2, title: "Campus Newsletter - Feb 2024", date: "2024-02-15" }
  ];

  return (
    <PageLayout
      heroTitle="Student Dashboard"
      heroSubtitle={`Welcome back, ${studentData.name}`}
      heroDescription="Manage your academic journey all in one place"
      heroHeight="small"
      heroBadge={studentData.rollNumber}
    >
      <div className="space-y-8">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Button onClick={() => setIsSubmissionOpen(true)} className="h-auto py-4 flex-col gap-2">
            <Trophy className="h-6 w-6" />
            <span>Submit Work</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex-col gap-2" asChild>
            <a href="/">
              <Home className="h-6 w-6" />
              <span>Visit Main Site</span>
            </a>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex-col gap-2">
            <DollarSign className="h-6 w-6" />
            <span>Registration Fees</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex-col gap-2">
            <DollarSign className="h-6 w-6" />
            <span>College Due</span>
          </Button>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="academics">Academics</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
            <TabsTrigger value="clubs">Clubs</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
            <TabsTrigger value="updates">Updates</TabsTrigger>
            <TabsTrigger value="timetable">Timetable</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Student Profile Card */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    My Profile
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-medium">{studentData.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Roll Number</p>
                    <p className="font-medium">{studentData.rollNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Department</p>
                    <p className="font-medium">{studentData.department}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Semester</p>
                    <p className="font-medium">{studentData.semester}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-sm">{studentData.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">{studentData.phone}</p>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Overall Attendance</span>
                    <Badge variant="secondary" className="text-lg font-bold">{studentData.attendance}</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <div className="lg:col-span-2 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium">Current Club</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{studentData.currentClub}</div>
                      <p className="text-xs text-muted-foreground mt-1">Active Member</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium">Current Semester</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{studentData.semester}</div>
                      <p className="text-xs text-muted-foreground mt-1">In Progress</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Notices */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="h-5 w-5" />
                      Recent Notices
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {notices.map((notice) => (
                      <div key={notice.id} className="flex items-start gap-3 p-3 rounded-lg border">
                        <AlertCircle className={`h-5 w-5 mt-0.5 ${notice.type === 'urgent' ? 'text-destructive' : 'text-primary'}`} />
                        <div className="flex-1">
                          <p className="font-medium">{notice.title}</p>
                          <p className="text-xs text-muted-foreground mt-1">{notice.date}</p>
                        </div>
                        {notice.type === 'urgent' && (
                          <Badge variant="destructive">Urgent</Badge>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Recent News */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Newspaper className="h-5 w-5" />
                      Latest News
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {news.map((item) => (
                      <div key={item.id} className="flex items-start justify-between p-3 rounded-lg border">
                        <div>
                          <p className="font-medium">{item.title}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">{item.category}</Badge>
                            <span className="text-xs text-muted-foreground">{item.date}</span>
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Academics Tab */}
          <TabsContent value="academics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Semester Results - 5th Semester
                </CardTitle>
                <CardDescription>Your academic performance overview</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {semesterResults.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-lg border"
                    >
                      <div className="flex-1">
                        <p className="font-medium">{result.subject}</p>
                        <p className="text-sm text-muted-foreground">Credits: {result.credits}</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Score</p>
                          <p className="font-bold text-lg">{result.score}%</p>
                        </div>
                        <Badge className="text-lg px-4 py-1">{result.grade}</Badge>
                      </div>
                    </motion.div>
                  ))}
                  <Separator />
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="font-bold">Overall CGPA</span>
                    <span className="text-2xl font-bold text-primary">8.7</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Attendance Tab */}
          <TabsContent value="attendance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Attendance Details
                </CardTitle>
                <CardDescription>Track your class attendance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {attendance.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{item.subject}</span>
                        <Badge variant={item.percentage >= 85 ? "default" : item.percentage >= 75 ? "secondary" : "destructive"}>
                          {item.percentage.toFixed(1)}%
                        </Badge>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.percentage}%` }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`h-full ${
                              item.percentage >= 85 ? 'bg-primary' : 
                              item.percentage >= 75 ? 'bg-secondary' : 'bg-destructive'
                            }`}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {item.present}/{item.total}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Clubs Tab */}
          <TabsContent value="clubs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  My Clubs
                </CardTitle>
                <CardDescription>Current membership and available clubs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {clubs.map((club) => (
                    <Card key={club.id} className={club.joined ? 'border-primary' : ''}>
                      <CardHeader>
                        <CardTitle className="text-base">{club.name}</CardTitle>
                        <CardDescription>{club.members} members</CardDescription>
                      </CardHeader>
                      <CardContent>
                        {club.joined ? (
                          <Badge className="w-full justify-center">Current Member</Badge>
                        ) : (
                          <Button variant="outline" className="w-full">Join Club</Button>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notes Tab */}
          <TabsContent value="notes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Study Materials & Notes
                </CardTitle>
                <CardDescription>Download notes uploaded by faculty</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {notes.map((note) => (
                    <div key={note.id} className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="flex items-start gap-3">
                        <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">{note.topic}</p>
                          <p className="text-sm text-muted-foreground">{note.subject}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            By {note.uploadedBy} • {note.date}
                          </p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Updates Tab */}
          <TabsContent value="updates" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Magazines & Newsletters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {magazines.map((mag) => (
                    <div key={mag.id} className="flex items-center justify-between p-4 rounded-lg border">
                      <div>
                        <p className="font-medium">{mag.title}</p>
                        <p className="text-sm text-muted-foreground">{mag.date}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">View</Button>
                        <Button size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Timetable Tab */}
          <TabsContent value="timetable" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Weekly Timetable
                </CardTitle>
                <CardDescription>Your class schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {timetable.map((day, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-semibold text-primary">{day.day}</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {day.slots.map((slot, slotIndex) => (
                          <div
                            key={slotIndex}
                            className={`p-3 rounded-lg text-center text-sm ${
                              slot === 'Free' 
                                ? 'bg-muted text-muted-foreground' 
                                : 'bg-primary/10 text-primary font-medium'
                            }`}
                          >
                            {slot}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <StudentSubmissionForm 
        isOpen={isSubmissionOpen} 
        onClose={() => setIsSubmissionOpen(false)} 
      />
    </PageLayout>
  );
}
