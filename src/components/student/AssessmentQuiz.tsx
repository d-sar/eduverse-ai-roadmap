
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { initialAssessmentQuiz } from '@/data/mockData';
import { toast } from '@/components/ui/sonner';
import { BookOpenIcon, CheckCircle2Icon, ClockIcon } from 'lucide-react';

const AssessmentQuiz: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(initialAssessmentQuiz.timeLimit * 60);
  
  const totalQuestions = initialAssessmentQuiz.questions.length;
  const currentQuestion = initialAssessmentQuiz.questions[currentQuestionIndex];
  
  const handleStartQuiz = () => {
    setQuizStarted(true);
    // Start the timer
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleCompleteQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };
  
  const handleAnswerChange = (answer: string) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: answer
    });
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleCompleteQuiz();
    }
  };
  
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const handleCompleteQuiz = () => {
    setQuizCompleted(true);
    // In a real app, we would submit the answers to the server
    toast.success("Assessment completed! Generating your personalized roadmap...");
    
    // Simulate API call delay
    setTimeout(() => {
      navigate(`/student/courses/${courseId}/roadmap`);
    }, 3000);
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  if (!quizStarted) {
    return (
      <div className="edu-container max-w-3xl mx-auto">
        <Card className="edu-glass-card">
          <CardHeader>
            <CardTitle className="text-2xl">Initial Assessment</CardTitle>
            <CardDescription>
              This assessment will help us personalize your learning path
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-edu-blue-100 dark:bg-edu-blue-900 flex items-center justify-center">
                <BookOpenIcon className="h-6 w-6 text-edu-blue-600 dark:text-edu-blue-300" />
              </div>
              <div>
                <h3 className="font-medium">Course: Introduction to Computer Science</h3>
                <p className="text-sm text-muted-foreground">CS101</p>
              </div>
            </div>
            
            <div className="border-t border-b py-4 my-4">
              <h3 className="font-medium mb-2">Before you begin:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle2Icon className="h-4 w-4 mr-2 mt-0.5 text-edu-green-600" />
                  <span>This assessment contains {totalQuestions} questions of varying difficulty</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2Icon className="h-4 w-4 mr-2 mt-0.5 text-edu-green-600" />
                  <span>You have {initialAssessmentQuiz.timeLimit} minutes to complete the assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2Icon className="h-4 w-4 mr-2 mt-0.5 text-edu-green-600" />
                  <span>Your results will be used to generate a personalized learning roadmap</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2Icon className="h-4 w-4 mr-2 mt-0.5 text-edu-green-600" />
                  <span>Answer to the best of your ability - this is not graded, but helps us tailor the content to your needs</span>
                </li>
              </ul>
            </div>
            
            <div className="flex items-center bg-muted p-4 rounded-lg">
              <ClockIcon className="h-5 w-5 mr-3 text-muted-foreground" />
              <span>Time limit: {initialAssessmentQuiz.timeLimit} minutes</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={handleStartQuiz}>Begin Assessment</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
  
  if (quizCompleted) {
    return (
      <div className="edu-container max-w-3xl mx-auto">
        <Card className="edu-glass-card">
          <CardHeader>
            <CardTitle className="text-2xl">Assessment Completed</CardTitle>
            <CardDescription>
              Thank you for completing the initial assessment
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-center py-8">
            <div className="inline-flex h-20 w-20 rounded-full bg-edu-green-100 dark:bg-edu-green-900 items-center justify-center mx-auto">
              <CheckCircle2Icon className="h-10 w-10 text-edu-green-600 dark:text-edu-green-300" />
            </div>
            
            <h3 className="text-xl font-medium mt-4">
              Generating Your Personalized Roadmap
            </h3>
            
            <p className="text-muted-foreground">
              Our AI is analyzing your responses and creating a customized learning path
            </p>
            
            <div className="w-full max-w-md mx-auto mt-4">
              <Progress value={100} className="h-2 animate-pulse" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="edu-container max-w-3xl mx-auto">
      <Card className="edu-glass-card">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Question {currentQuestionIndex + 1} of {totalQuestions}</CardTitle>
            <div className="flex items-center text-muted-foreground">
              <ClockIcon className="h-4 w-4 mr-2" />
              <span>{formatTime(timeRemaining)}</span>
            </div>
          </div>
          <Progress 
            value={(currentQuestionIndex / totalQuestions) * 100} 
            className="h-1 mt-2" 
          />
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">{currentQuestion.content}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Topic: {currentQuestion.topic} • Difficulty: {Math.round(currentQuestion.difficulty * 10)}/10
            </p>
            
            {currentQuestion.type === 'multiple_choice' && (
              <RadioGroup
                value={answers[currentQuestion.id] || ''}
                onValueChange={handleAnswerChange}
              >
                <div className="space-y-3">
                  {currentQuestion.options?.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer p-2 hover:bg-muted rounded">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            )}
            
            {currentQuestion.type === 'true_false' && (
              <RadioGroup
                value={answers[currentQuestion.id] || ''}
                onValueChange={handleAnswerChange}
              >
                <div className="space-y-3">
                  {currentQuestion.options?.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer p-2 hover:bg-muted rounded">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            )}
            
            {currentQuestion.type === 'short_answer' && (
              <Textarea
                placeholder="Type your answer here..."
                value={answers[currentQuestion.id] || ''}
                onChange={(e) => handleAnswerChange(e.target.value)}
                rows={4}
              />
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>
          
          <Button
            variant={currentQuestionIndex === totalQuestions - 1 ? 'default' : 'outline'}
            onClick={handleNextQuestion}
          >
            {currentQuestionIndex === totalQuestions - 1 ? 'Complete' : 'Next'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AssessmentQuiz;
