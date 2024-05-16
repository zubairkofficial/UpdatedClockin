import React, { createContext, useContext, useState, useMemo } from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: '200px',
        height: '50px',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: '25px',
        p: 1,
      }}
    >
      <IconButton
        sx={{
          position: 'absolute',
          left: theme.palette.mode === 'dark' ? '10%' : '40%',
          zIndex: theme.palette.mode === 'dark' ? 2 : 1,
          bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.600',
          color: 'white',
          width: '80px',
          height: '40px',
          borderRadius: '20px',
          transition: 'all 0.3s ease',
        }}
        onClick={colorMode.toggleColorMode}
      >
        {theme.palette.mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
      </IconButton>
      <IconButton
        sx={{
          position: 'absolute',
          left: theme.palette.mode === 'dark' ? '40%' : '10%',
          zIndex: theme.palette.mode === 'dark' ? 1 : 2,
          bgcolor: theme.palette.mode === 'dark' ? 'grey.600' : 'grey.800',
          color: 'white',
          width: '80px',
          height: '40px',
          borderRadius: '20px',
          transition: 'all 0.3s ease',
        }}
        onClick={colorMode.toggleColorMode}
      >
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    },
  }), []);

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
    },
  }), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
