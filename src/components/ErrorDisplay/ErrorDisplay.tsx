import { useRollbar } from '@rollbar/react';
import { useEffect } from 'react';

import { useThemeContext } from '../../contexts/ThemeContext';
import Button, { ButtonSize } from '../../shared/Button/Button';
import styles from './ErrorDisplay.module.scss';

type ErrorDisplayProps = {
  error?: Error;
  resetErrorBoundary: Function;
};

const ErrorDisplay = ({ error, resetErrorBoundary }: ErrorDisplayProps) => {
  const rollbar = useRollbar();
  const { currentTheme } = useThemeContext();

  useEffect(() => {
    rollbar.error(error);
  });

  return (
    <main className={styles.main}>
      <div className={styles.container} data-theme={currentTheme}>
        <h1>A following error has occured:</h1>
        <p>{error?.message || 'unknown error'}</p>
        <Button size={ButtonSize.Big} onClick={() => resetErrorBoundary()}>
          Try again
        </Button>
      </div>
    </main>
  );
};

export default ErrorDisplay;
