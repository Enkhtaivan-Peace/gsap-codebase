import React, { createContext, useContext } from 'react';
import { useState } from 'react';

const TransitionContext = createContext({ completed: false });

const TransitionProvider = ({ children }) => {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = (value) => {
    setCompleted(value);
  };

  return (
    <TransitionContext.Provider
      value={{
        toggleCompleted,
        completed,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

const useTransitionCtx = () => useContext(TransitionContext);
export { useTransitionCtx, TransitionProvider }
