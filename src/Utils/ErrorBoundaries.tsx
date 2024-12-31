import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

interface ErrorComponentProps {
  errorMessage: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ errorMessage }) => {
  return <h1>{errorMessage}</h1>;
};

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: ''
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({ errorMessage: error.message });
  }

  handleReset = () => {
    window.location.reload()
  };

  render() {
    if (this.state.hasError) {
      return (
        <Dialog open={true}>
          <DialogTitle sx={{fontWeight:'900',fontSize:'110%'}}>Oops !</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{fontWeight:'900',fontSize:'95%'}}>
              Something went wrong. Please try again.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleReset} color='success' variant='contained' sx={{textTransform:'capitalize',fontSize:'95%'}} >ReLoad</Button>
          </DialogActions>
        </Dialog>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
