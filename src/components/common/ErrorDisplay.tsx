import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle, ArrowLeft, RefreshCw } from "lucide-react";
import LoadingSpinner from "./feedback/LoadingSpinner";

interface ErrorDisplayProps {
  title?: string;
  message?: string;
  statusCode?: number;
  isRetrying?: boolean;
}

const ErrorDisplay = ({
  title,
  message,
  statusCode,
  isRetrying,
}: ErrorDisplayProps) => {
  const navigate = useNavigate();
  const [retrying, setRetrying] = useState(isRetrying);

  const handleRetry = () => {
    setRetrying(true);
    // Simulate retry attempt
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md mx-auto text-center space-y-6 loading-fade-in">
        <div className="flex justify-center mb-6">
          <div className="bg-red-50 p-4 rounded-full dark:bg-red-900/20">
            <AlertTriangle className="h-12 w-12 text-destructive" />
          </div>
        </div>
        
        {statusCode && (
          <span className="px-3 py-1 text-xs font-medium bg-destructive/10 text-destructive rounded-full">
            Error {statusCode}
          </span>
        )}
        
        <h1 className="text-2xl font-medium tracking-tight">{title}</h1>
        
        <p className="text-muted-foreground">{message}</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          {retrying ? (
            <div className="flex flex-col items-center justify-center p-4">
              <LoadingSpinner size="md" />
            </div>
          ) : (
            <>
              <button
                onClick={handleGoBack}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow-sm hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </button>
              <button
                onClick={handleRetry}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <RefreshCw className="h-4 w-4" />
                Try Again
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorDisplay;