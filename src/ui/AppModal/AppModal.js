import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useSpring, animated, useTransition } from 'react-spring';

const AppModal = ({ children, onCancelClick, ...props }) => {
  const transitions = useTransition(props.isOpen, null, {
    from: { transform: 'translate3d(0, 100%, 0)', opacity: 0 },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0 },
  });

  return (
    <Modal
      ariaHideApp={false}
      isOpen={props.isOpen}
      style={{
        overlay: { backgroundColor: 'rgba(0,0,0, .5)', zIndex: 100 },
        content: {
          zIndex: 101,
          backgroundColor: 'transparent',
          flexDirection: 'column',
          display: 'flex',
          justifyContent: 'flex-end',
          bottom: 0,
          top: 'auto',
          border: 0,
          left: 0,
          right: 0,
        },
      }}
    >
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={{ borderRadius: 10, ...props }}>
              {children}
            </animated.div>
          )
      )}
    </Modal>
  );
};

export default AppModal;
