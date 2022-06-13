import React, { useState, useEffect } from 'react';

const TimedModal = ({ component: Component, delay }: { component: React.FC; delay: number }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowModal(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, []);

  if (showModal) {
    return <Component />;
  }

  return null;
};

export default TimedModal;
