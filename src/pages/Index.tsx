
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';

const Index: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (isAuthenticated && user) {
      // Navigate based on user role
      if (user.role === 'student') {
        navigate('/student/dashboard');
      } else if (user.role === 'professor') {
        navigate('/professor/dashboard');
      }
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <GraduationCapIcon className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">EduNexus</span>
          </div>
          
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <Button onClick={handleGetStarted}>Go to Dashboard</Button>
            ) : (
              <Button onClick={() => navigate('/login')}>Sign In</Button>
            )}
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-edu-blue-100 via-background to-edu-purple-100 dark:from-edu-blue-900/20 dark:via-background dark:to-edu-purple-900/20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI-Driven Academic Success Platform
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Personalized learning experiences through intelligent course roadmaps, 
              adaptive quizzes, and real-time student support.
            </p>
            <Button size="lg" onClick={handleGetStarted}>
              Get Started
            </Button>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border rounded-lg text-center">
                <div className="h-12 w-12 rounded-full bg-edu-blue-100 dark:bg-edu-blue-900 flex items-center justify-center mx-auto mb-4">
                  <MapIcon className="h-6 w-6 text-edu-blue-600 dark:text-edu-blue-300" />
                </div>
                <h3 className="text-xl font-medium mb-2">Personalized Learning Paths</h3>
                <p className="text-muted-foreground">
                  AI-generated roadmaps tailored to your learning style and progress
                </p>
              </div>
              
              <div className="p-6 border rounded-lg text-center">
                <div className="h-12 w-12 rounded-full bg-edu-purple-100 dark:bg-edu-purple-900 flex items-center justify-center mx-auto mb-4">
                  <FileTextIcon className="h-6 w-6 text-edu-purple-600 dark:text-edu-purple-300" />
                </div>
                <h3 className="text-xl font-medium mb-2">Adaptive Assessments</h3>
                <p className="text-muted-foreground">
                  Dynamic quizzes that adjust to your knowledge level and learning gaps
                </p>
              </div>
              
              <div className="p-6 border rounded-lg text-center">
                <div className="h-12 w-12 rounded-full bg-edu-green-100 dark:bg-edu-green-900 flex items-center justify-center mx-auto mb-4">
                  <BarChartIcon className="h-6 w-6 text-edu-green-600 dark:text-edu-green-300" />
                </div>
                <h3 className="text-xl font-medium mb-2">Comprehensive Analytics</h3>
                <p className="text-muted-foreground">
                  Detailed insights into student performance and engagement metrics
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 EduNexus. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

function GraduationCapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
    </svg>
  );
}

function MapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" x2="9" y1="3" y2="18" />
      <line x1="15" x2="15" y1="6" y2="21" />
    </svg>
  );
}

function FileTextIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  );
}

function BarChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}
