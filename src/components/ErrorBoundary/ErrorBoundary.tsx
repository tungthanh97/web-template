import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import tracking from 'utils/tracking';
import { Container, Text } from './styled';

const ErrorFallback = () => (
  <Container>
    <Text>
      {' '}
      An unforeseen error has occurred. Our technical staff has been notified and are working on a solution to the
      problem. You can try navigating back to the <a href="/">login page</a> to continue.
    </Text>
  </Container>
);

const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback} onError={(error, info) => tracking.error({ e: error, info })}>
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
