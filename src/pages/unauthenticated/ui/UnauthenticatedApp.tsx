import { Box, Button, Typography } from '@mui/material';

import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Modal } from 'shared/ui/modal/Modal';
import { BoxMain, fadeIn } from '../lib/style';

const UnauthenticatedApp = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [isOpenRegisterModal, setIsOpenRegisterModal] = useState(false);
  const handleLoginOpen = () => setIsOpenLoginModal(true);
  const handleLoginClose = () => setIsOpenLoginModal(false);
  const handleRegisterOpen = () => setIsOpenRegisterModal(true);
  const handleRegisterClose = () => setIsOpenRegisterModal(false);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
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
      <BoxMain
        sx={{
          marginTop: '2rem',
        }}
      >
        <Box>
          <Button onClick={handleLoginOpen}>Войти</Button>
          <Modal
            isOpen={isOpenLoginModal}
            title="Войти в приложение"
            onClose={handleLoginClose}
          >
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Modal>
        </Box>
        <Box>
          <Button onClick={handleRegisterOpen}>Зарегистрироваться</Button>
          <Modal
            isOpen={isOpenRegisterModal}
            title="Зарегистрироваться в приложении"
            onClose={handleRegisterClose}
          >
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Modal>
        </Box>
      </BoxMain>
    </Box>
  );
};

export { UnauthenticatedApp };
