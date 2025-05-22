
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { BarChart3, Users, BookOpen, AlertCircle, Upload, FileQuestion } from 'lucide-react';
import { professorCourses } from '@/data/mockData';

const ProfessorDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="edu-container">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Professor Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your courses, track student progress, and provide support
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">My Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {professorCourses.map((course) => (
            <Card key={course.id} className="edu-card overflow-hidden">
              <div className="h-32 bg-cover bg-center" style={{ backgroundImage: `url(${course.coverImage})` }}>
                <div className="w-full h-full bg-black/40 flex items-end p-4">
                  <span className="text-white font-medium">{course.code}</span>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle>{course.name}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center justify-between mb-2 text-sm">
                  <span>Average Progress</span>
                  <span>{Math.round(course.averageProgress * 100)}%</span>
                </div>
                <Progress value={course.averageProgress * 100} className="h-2" />
                
                <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                  <div>
                    <div className="text-muted-foreground">Students</div>
                    <div className="font-medium">{course.studentCount}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Active</div>
                    <div className="font-medium">{course.activeStudentCount} ({Math.round(course.activeStudentCount / course.studentCount * 100)}%)</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <div className="flex items-center justify-between w-full">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center"
                    onClick={() => navigate(`/professor/courses/${course.id}/students`)}
                  >
                    <Users className="h-4 w-4 mr-2" />
                    <span>Students</span>
                  </Button>
                  
                  <Button 
                    variant="default" 
                    size="sm"
                    className="flex items-center"
                    onClick={() => navigate(`/professor/courses/${course.id}/manage`)}
                  >
                    <BarChart3 className="h-4 w-4 mr-2" />
                    <span>Manage</span>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <section>
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <Card className="edu-card">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-edu-blue-100 dark:bg-edu-blue-900 flex items-center justify-center mr-4">
                    <FileQuestion className="h-4 w-4 text-edu-blue-600 dark:text-edu-blue-300" />
                  </div>
                  <div>
                    <p className="font-medium">5 students completed the "Programming Basics Quiz"</p>
                    <p className="text-sm text-muted-foreground">CS101 • 1 day ago</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-edu-purple-100 dark:bg-edu-purple-900 flex items-center justify-center mr-4">
                    <AlertCircle className="h-4 w-4 text-edu-purple-600 dark:text-edu-purple-300" />
                  </div>
                  <div>
                    <p className="font-medium">3 students need assistance with "Control Structures"</p>
                    <p className="text-sm text-muted-foreground">CS101 • 2 days ago</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-edu-green-100 dark:bg-edu-green-900 flex items-center justify-center mr-4">
                    <Upload className="h-4 w-4 text-edu-green-600 dark:text-edu-green-300" />
                  </div>
                  <div>
                    <p className="font-medium">You uploaded 2 new resources to "Data Structures"</p>
                    <p className="text-sm text-muted-foreground">CS205 • 3 days ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <Card className="edu-card">
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="h-auto py-4 flex flex-col items-center justify-center"
                  onClick={() => navigate('/professor/resources/upload')}
                >
                  <Upload className="h-5 w-5 mb-2" />
                  <span>Upload Resources</span>
                </Button>
                <Button 
                  variant="outline"
                  className="h-auto py-4 flex flex-col items-center justify-center"
                  onClick={() => navigate('/professor/quizzes/create')}
                >
                  <FileQuestion className="h-5 w-5 mb-2" />
                  <span>Create Quiz</span>
                </Button>
                <Button 
                  variant="outline"
                  className="h-auto py-4 flex flex-col items-center justify-center"
                  onClick={() => navigate('/professor/students/manage')}
                >
                  <Users className="h-5 w-5 mb-2" />
                  <span>Manage Students</span>
                </Button>
                <Button 
                  variant="outline"
                  className="h-auto py-4 flex flex-col items-center justify-center"
                  onClick={() => navigate('/professor/analytics')}
                >
                  <BarChart3 className="h-5 w-5 mb-2" />
                  <span>View Analytics</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-4">Need Attention</h2>
        <Card className="edu-card">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="p-4 border border-yellow-200 bg-yellow-50 dark:border-yellow-900 dark:bg-yellow-950/30 rounded-lg">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mr-3" />
                  <div>
                    <p className="font-medium">3 students in CS101 are falling behind</p>
                    <p className="text-sm text-muted-foreground">Less than 30% completion of expected progress</p>
                  </div>
                  <Button variant="outline" size="sm" className="ml-auto" onClick={() => navigate('/professor/courses/1/students?filter=at-risk')}>
                    Review
                  </Button>
                </div>
              </div>
              <div className="p-4 border border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/30 rounded-lg">
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                  <div>
                    <p className="font-medium">CS205: "Sorting Algorithms" quiz needs review</p>
                    <p className="text-sm text-muted-foreground">Average score is below 60%</p>
                  </div>
                  <Button variant="outline" size="sm" className="ml-auto" onClick={() => navigate('/professor/courses/5/analytics?section=quizzes')}>
                    Review
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default ProfessorDashboard;
