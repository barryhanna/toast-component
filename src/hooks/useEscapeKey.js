import React from 'react';

function useEscapeKey(callback) {
  function handleEscapeKeyDown(e) {
    if (e.code === 'Escape') {
      callback();
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', handleEscapeKeyDown);
    return () => window.removeEventListener('keydown', handleEscapeKeyDown);
  });
}

export default useEscapeKey;
