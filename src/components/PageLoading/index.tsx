import React from 'react';
import Spinner from '../UI/Spinner';
import TimedModal from '../TimedModal';

export const PageLoading: React.FC = () => (
  <TimedModal
    component={() => (
      <div style={{ minHeight: '100vh' }} className="center">
        <Spinner />
      </div>
    )}
    delay={200}
  />
);
