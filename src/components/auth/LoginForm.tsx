
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { UserRole } from '@/types';
import { toast } from '@/components/ui/sonner';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [activeTab, setActiveTab] = useState<UserRole>('student');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Use the appropriate demo login based on the selected tab
      const demoEmail = activeTab === 'student' ? 'student@example.com' : 'professor@example.com';
      await login(demoEmail, 'password', rememberMe);
      
      toast.success(`Welcome back! You are now logged in as a ${activeTab}.`);
      
      // Redirect based on role
      if (activeTab === 'student') {
        navigate('/student/dashboard');
      } else {
        navigate('/professor/dashboard');
      }
    } catch (error) {
      toast.error('Login failed. Please check your credentials and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleForgotPassword = () => {
    toast.info('Password reset functionality would be implemented in a production version.');
  };

  const handleDemoLogin = (role: UserRole) => {
    setActiveTab(role);
    setEmail(role === 'student' ? 'student@example.com' : 'professor@example.com');
    setPassword('password');
  };

  return (
    <Card className="w-full max-w-md mx-auto edu-glass-card">
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl font-bold text-center">Welcome to EduNexus</CardTitle>
        <CardDescription className="text-center">
          Sign in to access your personalized learning experience
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="student" value={activeTab} onValueChange={(value) => setActiveTab(value as UserRole)}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="student">Student</TabsTrigger>
            <TabsTrigger value="professor">Professor</TabsTrigger>
          </TabsList>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-xs text-primary hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked === true)}
              />
              <Label htmlFor="remember" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Remember me
              </Label>
            </div>
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>
        </Tabs>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="text-sm text-center text-muted-foreground">
          For demo purposes, you can use:
        </div>
        <div className="flex justify-center space-x-4">
          <Button variant="outline" size="sm" onClick={() => handleDemoLogin('student')}>
            Demo Student
          </Button>
          <Button variant="outline" size="sm" onClick={() => handleDemoLogin('professor')}>
            Demo Professor
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
