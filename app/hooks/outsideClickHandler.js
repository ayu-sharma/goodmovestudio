// components/OutsideClickHandler.js
import React from 'react';
import useOutsideClick from './useOutSideClick';

const OutsideClickHandler = ({ children, onOutsideClick }) => {
  const ref = useOutsideClick(onOutsideClick);
  
  return (
    <div ref={ref}>
      {children}
    </div>
  );
};

export default OutsideClickHandler;