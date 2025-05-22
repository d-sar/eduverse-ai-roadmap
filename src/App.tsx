
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeProvider";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import AppLayout from "./components/layout/AppLayout";
import ProtectedRoute from "./components/auth/ProtectedRoute";

// Student pages
import StudentDashboardPage from "./pages/student/StudentDashboardPage";
import CourseViewPage from "./pages/student/CourseViewPage";
import AssessmentQuizPage from "./pages/student/AssessmentQuizPage";
import CourseRoadmapPage from "./pages/student/CourseRoadmapPage";

// Professor pages
import ProfessorDashboardPage from "./pages/professor/ProfessorDashboardPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system">
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<LoginPage />} />
              
              {/* Student Routes */}
              <Route path="/student" element={
                <ProtectedRoute allowedRoles={['student']}>
                  <AppLayout />
                </ProtectedRoute>
              }>
                <Route index element={<Navigate to="/student/dashboard" replace />} />
                <Route path="dashboard" element={<StudentDashboardPage />} />
                <Route path="courses/:courseId" element={<CourseViewPage />} />
                <Route path="courses/:courseId/assessment" element={<AssessmentQuizPage />} />
                <Route path="courses/:courseId/roadmap" element={<CourseRoadmapPage />} />
              </Route>
              
              {/* Professor Routes */}
              <Route path="/professor" element={
                <ProtectedRoute allowedRoles={['professor']}>
                  <AppLayout />
                </ProtectedRoute>
              }>
                <Route index element={<Navigate to="/professor/dashboard" replace />} />
                <Route path="dashboard" element={<ProfessorDashboardPage />} />
              </Route>
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
