import { Box, Button, Container, IconButton, Modal, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { keyframes } from '@emotion/react';

const modalContainerStyle = {
  position: 'absolute' as 'absolute',
  top: '30vw',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30rem',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const modalHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const BoxMain = styled(Box)({
  display: 'flex',
});

const fadeIn = keyframes({
  from: { transform: 'scale(1)' },
  to: { transform: 'scale(1.5)' },
});

const UnauthenticatedApp = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [isOpenRegisterModal, setIsOpenRegisterModal] = useState(false);
  const handleLoginOpen = () => setIsOpenLoginModal(true);
  const handleLoginClose = () => setIsOpenLoginModal(false);
  const handleRegisterOpen = () => setIsOpenRegisterModal(true);
  const handleRegisterClose = () => setIsOpenRegisterModal(false);
  return (
    <Container maxWidth={false}>
      <Box>
        <FavoriteIcon
          sx={{
            fontSize: '10rem',
            color: 'red',
            '&:hover': {
              animation: `${fadeIn} 1.5s backwards`,
              animationIterationCount: 'infinite',
            },
          }}
        />
      </Box>
      <BoxMain>
        <Box>
          <Button onClick={handleLoginOpen}>Войти</Button>
          <Modal
            open={isOpenLoginModal}
            onClose={handleLoginClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalContainerStyle}>
              <Box sx={modalHeaderStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Войти в приложение
                </Typography>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  onClick={handleLoginClose}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </Box>
        <Box>
          <Button onClick={handleRegisterOpen}>Зарегистрироваться</Button>
          <Modal
            open={isOpenRegisterModal}
            onClose={handleRegisterClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalContainerStyle}>
              <Box sx={modalHeaderStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Зарегистрироваться в приложении
                </Typography>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  onClick={handleRegisterClose}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </Box>
      </BoxMain>
    </Container>
  );
};

export { UnauthenticatedApp };
