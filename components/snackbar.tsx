// components/SnackbarComponent.tsx
import { useEffect, useState } from 'react';
import { Card, } from '@nextui-org/react';

interface SnackbarComponentProps {
  message: string;
  severity: 'success' | 'warning' | 'error';
  duration?: number;
}

const SnackbarComponent: React.FC<SnackbarComponentProps> = ({ message, severity, duration = 3000 }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
    const timer = setTimeout(() => {
      setOpen(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [message, duration]);

  if (!open) return null;

  // Define colors based on severity
  const getBackgroundColor = () => {
    switch (severity) {
      case 'success':
        return '#4caf50'; // Green
      case 'warning':
        return '#ff9800'; // Orange
      case 'error':
        return '#f44336'; // Red
      default:
        return '#333'; // Default dark background
    }
  };

  return (
    <Card
      c{{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        width: 'fit-content',
        background: getBackgroundColor(),
        color: '#fff',
      }}
    >
      <Card.Body>
        <Text>{message}</Text>
      </Card.Body>
    </Card>
  );
};

export default SnackbarComponent;
