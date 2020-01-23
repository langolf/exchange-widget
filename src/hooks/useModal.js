import React, { useRef, useState } from 'react';
import Modal from 'react-modal';

function useModal(ref) {
  const [isOpen, setOpen] = useState(false);

  const temp = useRef(ref);

  return [temp, setOpen];
}

export default useModal;
