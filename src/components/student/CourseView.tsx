
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { studentCourses, courseResources } from '@/data/mockData';
import { BookOpenIcon, CalendarIcon, ClockIcon, FileTextIcon, MapIcon, MonitorIcon, FileIcon } from 'lucide-react';

const CourseView: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  
  const course = studentCourses.find(c => c.id === courseId);
  
  if (!course) {
    return (
      <div className="edu-container">
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Course Not Found</h2>
          <p className="text-muted-foreground mb-4">The course you're looking for doesn't exist or you don't have access to it.</p>
          <Button onClick={() => navigate('/student/dashboard')}>Return to Dashboard</Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="edu-container">
      <div 
        className="h-48 bg-cover bg-center rounded-lg overflow-hidden mb-6"
        style={{ backgroundImage: `url(${course.coverImage})` }}
      >
        <div className="w-full h-full bg-black/40 flex flex-col justify-end p-6">
          <Badge className="w-fit mb-2">{course.code}</Badge>
          <h1 className="text-3xl font-bold text-white">{course.name}</h1>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="overview">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="assignments">Assignments</TabsTrigger>
              <TabsTrigger value="discussions">Discussions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Course Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{course.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                    <div className="flex flex-col items-center p-3 bg-muted rounded-md">
                      <CalendarIcon className="h-5 w-5 mb-2 text-muted-foreground" />
                      <span className="text-sm font-medium">15 Weeks</span>
                      <span className="text-xs text-muted-foreground">Duration</span>
                    </div>
                    <div className="flex flex-col items-center p-3 bg-muted rounded-md">
                      <BookOpenIcon className="h-5 w-5 mb-2 text-muted-foreground" />
                      <span className="text-sm font-medium">8 Modules</span>
                      <span className="text-xs text-muted-foreground">Content</span>
                    </div>
                    <div className="flex flex-col items-center p-3 bg-muted rounded-md">
                      <FileTextIcon className="h-5 w-5 mb-2 text-muted-foreground" />
                      <span className="text-sm font-medium">5 Assessments</span>
                      <span className="text-xs text-muted-foreground">Quizzes</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Your Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>Overall Progress</span>
                        <span>{Math.round(course.progress * 100)}%</span>
                      </div>
                      <Progress value={course.progress * 100} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Current Module</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="font-medium">Control Structures</div>
                          <div className="text-sm text-muted-foreground">65% Complete</div>
                          <Progress value={65} className="h-1.5 mt-2" />
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Next Assessment</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="font-medium">Programming Basics Quiz</div>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <CalendarIcon className="h-4 w-4 mr-1" />
                            <span>Due in 5 days</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full"
                    onClick={() => navigate(`/student/courses/${courseId}/roadmap`)}
                  >
                    <MapIcon className="h-4 w-4 mr-2" />
                    View Learning Roadmap
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-edu-blue-100 dark:bg-edu-blue-900 flex items-center justify-center mr-4">
                        <BookOpenIcon className="h-4 w-4 text-edu-blue-600 dark:text-edu-blue-300" />
                      </div>
                      <div>
                        <p className="font-medium">Completed "Programming Fundamentals" topic</p>
                        <p className="text-sm text-muted-foreground">2 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-edu-purple-100 dark:bg-edu-purple-900 flex items-center justify-center mr-4">
                        <FileTextIcon className="h-4 w-4 text-edu-purple-600 dark:text-edu-purple-300" />
                      </div>
                      <div>
                        <p className="font-medium">Achieved 85% on "Introduction to Data Types" quiz</p>
                        <p className="text-sm text-muted-foreground">3 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-edu-green-100 dark:bg-edu-green-900 flex items-center justify-center mr-4">
                        <MapIcon className="h-4 w-4 text-edu-green-600 dark:text-edu-green-300" />
                      </div>
                      <div>
                        <p className="font-medium">Started "Control Structures" topic</p>
                        <p className="text-sm text-muted-foreground">4 days ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="resources" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Course Resources</CardTitle>
                  <CardDescription>Access all learning materials for this course</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {courseResources.map((resource) => (
                      <div key={resource.id} className="border rounded-md p-4 flex items-start">
                        <div className="rounded-md bg-muted p-2 mr-4">
                          {resource.type === 'video' && <MonitorIcon className="h-5 w-5 text-edu-blue-500" />}
                          {resource.type === 'pdf' && <FileTextIcon className="h-5 w-5 text-edu-purple-500" />}
                          {resource.type === 'interactive' && <BookOpenIcon className="h-5 w-5 text-edu-green-500" />}
                          {resource.type === 'external_link' && <FileIcon className="h-5 w-5 text-gray-500" />}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{resource.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{resource.description}</p>
                          <div className="flex items-center mt-2">
                            <Badge variant="outline" className="mr-2">
                              <ClockIcon className="h-3 w-3 mr-1" />
                              {resource.estimatedTime} min
                            </Badge>
                            <Badge variant="outline">
                              {resource.type}
                            </Badge>
                            {resource.aiRecommended && (
                              <Badge className="ml-2 bg-edu-purple-500 text-white">AI Recommended</Badge>
                            )}
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="ml-4">
                          Access
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="assignments">
              <Card>
                <CardHeader>
                  <CardTitle>Assignments</CardTitle>
                  <CardDescription>View and submit your course assignments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <FileTextIcon className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">No Current Assignments</h3>
                    <p className="text-muted-foreground">
                      Check back later for upcoming assignments or continue with your roadmap
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="discussions">
              <Card>
                <CardHeader>
                  <CardTitle>Discussion Forum</CardTitle>
                  <CardDescription>Engage with your classmates and instructors</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <MessageCircleIcon className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">Join the Conversation</h3>
                    <p className="text-muted-foreground mb-4">
                      Discuss course topics, ask questions, and collaborate with peers
                    </p>
                    <Button>View Discussions</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Instructor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center">
                <div className="h-24 w-24 rounded-full bg-cover bg-center mb-4" style={{ backgroundImage: 'url(https://i.pravatar.cc/150?u=professor)' }}></div>
                <h3 className="font-medium text-lg">Dr. Pat Professor</h3>
                <p className="text-sm text-muted-foreground mb-4">Department of Computer Science</p>
                <Button variant="outline" size="sm" className="w-full">
                  Contact Instructor
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Deadlines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-2 border-edu-blue-500 pl-4">
                  <h4 className="font-medium">Programming Basics Quiz</h4>
                  <p className="text-sm text-muted-foreground">Due in 5 days</p>
                </div>
                <div className="border-l-2 border-edu-purple-500 pl-4">
                  <h4 className="font-medium">Algorithm Assignment</h4>
                  <p className="text-sm text-muted-foreground">Due in 12 days</p>
                </div>
                <div className="border-l-2 border-edu-green-500 pl-4">
                  <h4 className="font-medium">Module 3 Completion</h4>
                  <p className="text-sm text-muted-foreground">Due in 18 days</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start" onClick={() => navigate(`/student/courses/${courseId}/roadmap`)}>
                  <MapIcon className="h-4 w-4 mr-2" />
                  View Roadmap
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileTextIcon className="h-4 w-4 mr-2" />
                  Take Practice Quiz
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BookOpenIcon className="h-4 w-4 mr-2" />
                  Continue Learning
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CourseView;

function MessageCircleIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}
