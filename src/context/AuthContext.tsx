
import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthState, User, UserRole } from '@/types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string, rememberMe: boolean) => Promise<void>;
  logout: () => void;
  resetPassword: (email: string) => Promise<void>;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>(initialState);

  // Mock authentication - in a real app, this would use API calls
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check for stored user in localStorage
        const storedUser = localStorage.getItem('eduNexusUser');
        
        if (storedUser) {
          const user = JSON.parse(storedUser);
          setAuthState({
            user,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        } else {
          setAuthState({
            ...initialState,
            isLoading: false,
          });
        }
      } catch (error) {
        setAuthState({
          ...initialState,
          error: 'Authentication check failed',
          isLoading: false,
        });
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string, rememberMe: boolean) => {
    try {
      setAuthState({
        ...authState,
        isLoading: true,
        error: null,
      });

      // Mock login - in a real app, this would call an API
      // This simulates the response with student and professor users
      const mockUsers: Record<string, User> = {
        'student@example.com': {
          id: '1',
          email: 'student@example.com',
          firstName: 'Alex',
          lastName: 'Student',
          role: 'student',
          avatar: 'https://i.pravatar.cc/150?u=student',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        'professor@example.com': {
          id: '2',
          email: 'professor@example.com',
          firstName: 'Pat',
          lastName: 'Professor',
          role: 'professor',
          avatar: 'https://i.pravatar.cc/150?u=professor',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      };

      // Check if the email exists in our mock users
      if (mockUsers[email] && password === 'password') {
        const user = mockUsers[email];
        
        if (rememberMe) {
          localStorage.setItem('eduNexusUser', JSON.stringify(user));
        } else {
          sessionStorage.setItem('eduNexusUser', JSON.stringify(user));
        }
        
        setAuthState({
          user,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        });
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (error) {
      setAuthState({
        ...authState,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Login failed',
      });
    }
  };

  const logout = () => {
    localStorage.removeItem('eduNexusUser');
    sessionStorage.removeItem('eduNexusUser');
    
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });
  };

  const resetPassword = async (email: string) => {
    try {
      setAuthState({
        ...authState,
        isLoading: true,
        error: null,
      });
      
      // Mock password reset - in a real app, this would call an API
      // Simulate a successful password reset request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setAuthState({
        ...authState,
        isLoading: false,
      });
    } catch (error) {
      setAuthState({
        ...authState,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Password reset failed',
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
