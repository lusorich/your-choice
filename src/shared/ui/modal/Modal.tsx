import React from 'react';
import { IconButton, Modal as MaterialModal, Typography } from '@mui/material';
import { ModalContainer, ModalHeader } from 'pages/unauthenticated/lib/style';
import CloseIcon from '@mui/icons-material/Close';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({
  isOpen, onClose, title, children,
}: ModalProps) => (
  <MaterialModal
    open={isOpen}
    onClose={onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <ModalContainer>
      <ModalHeader>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </ModalHeader>
      {children}
    </ModalContainer>
  </MaterialModal>
);

export { Modal };
