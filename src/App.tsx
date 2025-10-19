import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { AuthProvider } from "./hooks/use-auth";
import Index from "./pages/Index";
import AdminLayout from "./components/admin-layout";
import AdminDashboard from "./components/admin-dashboard";
import NoticesManager from "./components/admin/notices-manager";
import HeroImagesManager from "./components/admin/hero-images-manager";
import AcademicPagesManager from "./components/admin/academic-pages-manager";
import TimetablesManager from "./components/admin/timetables-manager";
import DownloadsManager from "./components/admin/downloads-manager";
import FeesManager from "./components/admin/fees-manager";
import ScholarshipsManager from "./components/admin/scholarships-manager";
import TranscriptsManager from "./components/admin/transcripts-manager";
import CampusPagesManager from "./components/admin/campus-pages-manager";
import SportsFacilitiesManager from "./components/admin/sports-facilities-manager";
import HostelManager from "./components/admin/hostel-manager";
import EventsManager from "./components/admin/events-manager";
import WellnessManager from "./components/admin/wellness-manager";
import GovernanceManager from "./components/admin/governance-manager";
import TimetablePage from "./pages/academics/Timetable";
import Overview from "./pages/campus-life/Overview";
import Sports from "./pages/campus-life/Sports";
import Hostel from "./pages/campus-life/Hostel";
import Wellness from "./pages/campus-life/Wellness";
import Governance from "./pages/campus-life/Governance";
import Events from "./pages/campus-life/Events";
import Amenities from "./pages/campus-life/Amenities";
import Publications from "./pages/campus-life/Publications";
import Festivals from "./pages/campus-life/Festivals";
import FeesPage from "./pages/academics/Fees";
import DownloadsPage from "./pages/academics/Downloads";
import TranscriptsPage from "./pages/academics/Transcripts";
import ScholarshipsPage from "./pages/academics/Scholarships";
import WomensForum from "./pages/campus-life/WomensForum";
import Clubs from "./pages/campus-life/Clubs";
import SocialConsciousness from "./pages/campus-life/SocialConsciousness";
import OtherFacilities from "./pages/campus-life/OtherFacilities";
import PublicationsManager from "./components/admin/publications-manager";
import AmenitiesManager from "./components/admin/amenities-manager";
import AboutPagesManager from "./components/admin/about-pages-manager";
import AdminLogin from "./pages/admin/AdminLogin";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

// Department Pages
import CSEDepartment from "./pages/departments/CSE";
import ITDepartment from "./pages/departments/IT";
import MCADepartment from "./pages/departments/MCA";
import BCADepartment from "./pages/departments/BCA";
import MechanicalDepartment from "./pages/departments/Mechanical";
import ElectricalDepartment from "./pages/departments/Electrical";
import CivilDepartment from "./pages/departments/Civil";
import MBADepartment from "./pages/departments/MBA";

// Admin Components
import { DepartmentsManager } from "./components/admin/departments-manager";
import { UsersManager } from "./components/admin/users-manager";
import { FacultyManager } from "./components/admin/faculty-manager";
import AcademicContentManager from "./components/admin/academic-content-manager";
import AcademicExcellenceManager from "./components/admin/academic-excellence-manager";
import ClubsActivitiesManager from "./components/admin/clubs-activities-manager";
import { SubmissionsManager } from "./components/admin/submissions-manager";
import RoleManagement from "./components/admin/role-management";
import { ContactManager } from "./components/admin/contact-manager";
import { NewsManager } from "./components/admin/news-manager";
import { PhotoGalleryManager } from "./components/admin/photo-gallery-manager";
import { CampusStatsManager } from "./components/admin/campus-stats-manager";
import { MagazinesManager } from "./components/admin/magazines-manager";
import StudentActivities from "./pages/campus-life/StudentActivities";
import Innovation from "./pages/campus-life/Innovation";
import CampusLifeManager from "./components/admin/campus-life-manager";
import StudentActivitiesManager from "./components/admin/student-activities-manager";
import WomensForumManager from "./components/admin/women-forum-manager";
import SocialInitiativesManager from "./components/admin/social-initiatives-manager";
import InnovationManager from "./components/admin/innovation-manager";
import AwardsAchievementsManager from "./components/admin/awards-achievements-manager";
import SettingsManager from "./components/admin/settings-manager";
import LeadershipManager from "./components/admin/leadership-manager";

// About Us Pages
import About from "./pages/about/About";
import VisionMission from "./pages/about/VisionMission";
import ChairmanMessage from "./pages/about/ChairmanMessage";
import ViceChairmanMessage from "./pages/about/ViceChairmanMessage";
import DirectorMessage from "./pages/about/DirectorMessage";
import History from "./pages/about/History";
import Awards from "./pages/about/Awards";
import AboutGovernance from "./pages/about/Governance";
import Accreditation from "./pages/about/Accreditation";
import NAAC from "./pages/about/NAAC";
import NBA from "./pages/about/NBA";
import SIRO from "./pages/about/SIRO";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="nalanda-ui-theme">
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              
              {/* Academic Pages */}
              <Route path="/academics/timetable" element={<TimetablePage />} />
              <Route path="/academics/fees" element={<FeesPage />} />
              <Route path="/academics/downloads" element={<DownloadsPage />} />
              <Route path="/academics/transcripts" element={<TranscriptsPage />} />
              <Route path="/academics/scholarships" element={<ScholarshipsPage />} />
              
              {/* About Us Pages */}
              <Route path="/about" element={<About />} />
              <Route path="/about/vision-mission" element={<VisionMission />} />
              <Route path="/about/chairman-message" element={<ChairmanMessage />} />
              <Route path="/about/vice-chairman-message" element={<ViceChairmanMessage />} />
              <Route path="/about/director-message" element={<DirectorMessage />} />
              <Route path="/about/history" element={<History />} />
              <Route path="/about/governance" element={<AboutGovernance />} />
              <Route path="/about/awards" element={<Awards />} />
              <Route path="/about/accreditation" element={<Accreditation />} />
              <Route path="/about/accreditation/naac" element={<NAAC />} />
              <Route path="/about/accreditation/nba" element={<NBA />} />
              <Route path="/about/accreditation/siro" element={<SIRO />} />
              
              {/* Department Pages */}
              <Route path="/departments/cse" element={<CSEDepartment />} />
              <Route path="/departments/it" element={<ITDepartment />} />
              <Route path="/departments/mca" element={<MCADepartment />} />
              <Route path="/departments/bca" element={<BCADepartment />} />
              <Route path="/departments/mechanical" element={<MechanicalDepartment />} />
              <Route path="/departments/electrical" element={<ElectricalDepartment />} />
              <Route path="/departments/civil" element={<CivilDepartment />} />
              <Route path="/departments/mba" element={<MBADepartment />} />
              
              {/* Campus Life Pages */}
              <Route path="/campus-life/overview" element={<Overview />} />
              <Route path="/campus-life/sports" element={<Sports />} />
              <Route path="/campus-life/hostel" element={<Hostel />} />
              <Route path="/campus-life/wellness" element={<Wellness />} />
              <Route path="/campus-life/governance" element={<Governance />} />
              <Route path="/campus-life/events" element={<Events />} />
              <Route path="/campus-life/amenities" element={<Amenities />} />
              <Route path="/campus-life/publications" element={<Publications />} />
              <Route path="/campus-life/festivals" element={<Festivals />} />
              <Route path="/campus-life/womens-forum" element={<WomensForum />} />
              <Route path="/campus-life/clubs" element={<Clubs />} />
              <Route path="/campus-life/student-activities" element={<StudentActivities />} />
              <Route path="/campus-life/innovation" element={<Innovation />} />
              <Route path="/campus-life/social-consciousness" element={<SocialConsciousness />} />
              <Route path="/campus-life/other-facilities" element={<OtherFacilities />} />
              
              {/* Contact Page */}
              <Route path="/contact" element={<Contact />} />
              
              {/* Admin Login */}
              <Route path="/admin/login" element={<AdminLogin />} />
              
              {/* Admin Routes */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="notices" element={<NoticesManager />} />
                <Route path="hero-images" element={<HeroImagesManager />} />
                <Route path="academic-pages" element={<AcademicPagesManager />} />
                <Route path="timetables" element={<TimetablesManager />} />
                <Route path="downloads" element={<DownloadsManager />} />
                <Route path="fees" element={<FeesManager />} />
                <Route path="scholarships" element={<ScholarshipsManager />} />
                <Route path="sports-facilities" element={<SportsFacilitiesManager />} />
                <Route path="hostel" element={<HostelManager />} />
                <Route path="events" element={<EventsManager />} />
                <Route path="wellness" element={<WellnessManager />} />
                <Route path="governance" element={<GovernanceManager />} />
                <Route path="transcripts" element={<TranscriptsManager />} />
                <Route path="publications" element={<PublicationsManager />} />
                <Route path="amenities" element={<AmenitiesManager />} />
                <Route path="about-pages" element={<AboutPagesManager />} />
                <Route path="departments" element={<DepartmentsManager />} />
                <Route path="users" element={<UsersManager />} />
                <Route path="faculty" element={<FacultyManager />} />
                <Route path="academic-content" element={<AcademicContentManager />} />
                <Route path="academic-excellence" element={<AcademicExcellenceManager />} />
                <Route path="clubs-activities" element={<ClubsActivitiesManager />} />
                <Route path="submissions" element={<SubmissionsManager />} />
                <Route path="roles" element={<RoleManagement />} />
                <Route path="contact" element={<ContactManager />} />
                <Route path="news" element={<NewsManager />} />
                <Route path="photo-gallery" element={<PhotoGalleryManager />} />
                <Route path="campus-stats" element={<CampusStatsManager />} />
                <Route path="magazines" element={<MagazinesManager />} />
                <Route path="campus-life" element={<CampusLifeManager />} />
                <Route path="student-activities" element={<StudentActivitiesManager />} />
                <Route path="womens-forum" element={<WomensForumManager />} />
                <Route path="social-initiatives" element={<SocialInitiativesManager />} />
                <Route path="innovation" element={<InnovationManager />} />
                <Route path="awards" element={<AwardsAchievementsManager />} />
                <Route path="leadership" element={<LeadershipManager />} />
                <Route path="settings" element={<SettingsManager />} />
              </Route>
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
