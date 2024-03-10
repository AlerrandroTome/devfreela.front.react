import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseLine from '@mui/material/CssBaseline';
import baseTheme from '../../commons/styles/theme';
import GlobalStyles from '../../commons/styles/global-style';

const theme = createTheme(baseTheme);

function AppTheme({ children }) {
    return(
        <StyledThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <CssBaseLine />
                {children}
            </ThemeProvider>
        </StyledThemeProvider>
    );
}

export default AppTheme;