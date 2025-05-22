
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { CalendarIcon, BookOpenIcon, MapIcon, ClockIcon } from 'lucide-react';
import { studentCourses } from '@/data/mockData';
import { formatDistanceToNow } from 'date-fns';

const StudentDashboard: React.FC = () => {
  const navigate = useNavigate();

  const getDeadlineText = (deadline: string) => {
    try {
      return `Due ${formatDistanceToNow(new Date(deadline), { addSuffix: true })}`;
    } catch (error) {
      return 'Due soon';
    }
  };

  return (
    <div className="edu-container">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Your Learning Dashboard</h1>
        <p className="text-muted-foreground">
          Track your progress and continue your learning journey
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">My Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentCourses.map((course) => (
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
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm">{Math.round(course.progress * 100)}%</span>
                </div>
                <Progress value={course.progress * 100} className="h-2" />
                
                {course.nextDeadline && (
                  <div className="flex items-center mt-4 text-sm text-muted-foreground">
                    <ClockIcon className="h-4 w-4 mr-2" />
                    <span>{getDeadlineText(course.nextDeadline)}</span>
                  </div>
                )}
              </CardContent>
              <CardFooter className="pt-2">
                <div className="flex items-center justify-between w-full">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center"
                    onClick={() => navigate(`/student/courses/${course.id}`)}
                  >
                    <BookOpenIcon className="h-4 w-4 mr-2" />
                    <span>Materials</span>
                  </Button>
                  
                  <Button 
                    variant="default" 
                    size="sm"
                    className="flex items-center"
                    onClick={() => {
                      if (!course.hasInitialAssessment) {
                        navigate(`/student/courses/${course.id}/assessment`);
                      } else {
                        navigate(`/student/courses/${course.id}/roadmap`);
                      }
                    }}
                  >
                    {!course.hasInitialAssessment ? (
                      <>
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        <span>Start</span>
                      </>
                    ) : (
                      <>
                        <MapIcon className="h-4 w-4 mr-2" />
                        <span>Roadmap</span>
                      </>
                    )}
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <Card className="edu-card">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-edu-blue-100 dark:bg-edu-blue-900 flex items-center justify-center mr-4">
                  <BookOpenIcon className="h-4 w-4 text-edu-blue-600 dark:text-edu-blue-300" />
                </div>
                <div>
                  <p className="font-medium">Completed "Programming Fundamentals" topic</p>
                  <p className="text-sm text-muted-foreground">CS101 • 2 days ago</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-edu-purple-100 dark:bg-edu-purple-900 flex items-center justify-center mr-4">
                  <CalendarIcon className="h-4 w-4 text-edu-purple-600 dark:text-edu-purple-300" />
                </div>
                <div>
                  <p className="font-medium">Achieved 85% on "Introduction to Data Types" quiz</p>
                  <p className="text-sm text-muted-foreground">CS101 • 3 days ago</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-edu-green-100 dark:bg-edu-green-900 flex items-center justify-center mr-4">
                  <MapIcon className="h-4 w-4 text-edu-green-600 dark:text-edu-green-300" />
                </div>
                <div>
                  <p className="font-medium">Started "Control Structures" topic</p>
                  <p className="text-sm text-muted-foreground">CS101 • 4 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default StudentDashboard;
