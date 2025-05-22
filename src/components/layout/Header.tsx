
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/theme/ModeToggle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Bell, LogOut, Settings, User } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('Successfully logged out');
    navigate('/login');
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase();
  };

  if (!user) return null;

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <GraduationCapIcon className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">EduNexus</span>
          </Link>
          
          <nav className="hidden md:flex gap-6">
            <Link to={user.role === 'student' ? '/student/dashboard' : '/professor/dashboard'} className="text-sm font-medium transition-colors hover:text-primary">
              Dashboard
            </Link>
            <Link to={user.role === 'student' ? '/student/courses' : '/professor/courses'} className="text-sm font-medium transition-colors hover:text-primary">
              Courses
            </Link>
            {user.role === 'professor' && (
              <Link to="/professor/resources" className="text-sm font-medium transition-colors hover:text-primary">
                Resources
              </Link>
            )}
            {user.role === 'professor' && (
              <Link to="/professor/analytics" className="text-sm font-medium transition-colors hover:text-primary">
                Analytics
              </Link>
            )}
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <ModeToggle />
          
          <div className="relative">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                3
              </Badge>
            </Button>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
                  <AvatarFallback>{getInitials(`${user.firstName} ${user.lastName}`)}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">{user.firstName} {user.lastName}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate(`/${user.role}/profile`)}>
                <User className="h-4 w-4 mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate(`/${user.role}/settings`)}>
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;

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
