import { styled } from '@mui/system';
import { Box, Container } from '@mui/material';
import { keyframes } from '@emotion/react';
import { ThemeColorMode } from 'widgets/theme/ui/useColorModeTheme';

const MainContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.mode === ThemeColorMode.light ? '#fff' : '#000',
  backgroundImage: theme.palette.mode === ThemeColorMode.light ? 'url(./images/main-background.jpg)' : 'url(./images/main-background-dark.jpg)',
  backgroundRepeat: 'round',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '3rem',
}));

const ModalContainer = styled(Box)(({ theme }) => ({
  position: 'absolute' as 'absolute',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  top: '30vh',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30rem',
  backgroundColor: theme.palette.mode === ThemeColorMode.light ? '#fff' : '#000',
  boxShadow: '0 0 0.5rem black',
  boxSizing: 'border-box',
  padding: '1rem 1rem 2rem 1rem',
  '@media (max-width:600px)': {
    top: 'unset',
    left: 'unset',
    transform: 'unset',
    width: '100vw',
    height: '100vh',
    padding: '2rem',
  },
}));

const ModalHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const BoxMain = styled(Box)({
  display: 'flex',
});

const fadeIn = keyframes({
  from: { transform: 'scale(1)' },
  to: { transform: 'scale(1.5)' },
});

export {
  MainContainer, ModalContainer, ModalHeader, BoxMain, fadeIn,
};
