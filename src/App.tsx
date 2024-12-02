import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Switch, Box, Typography } from '@mui/material';
import ArticleList from './components/ArticleList.tsx';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
    },
});

const articles = [
    { title: 'Article 1', content: 'First article content' },
    { title: 'Article 2', content: 'More articles!!!' },
    { title: 'Article 3', content: 'Turururururu' },
];

const App: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="10vh">
                <Typography variant="body1" component="span" mr={1}>
                    Dark Mode
                </Typography>
                <Switch checked={isDarkMode} onChange={toggleTheme} />
            </Box>
            <ArticleList articles={articles} />
        </ThemeProvider>
    );
};

export default App;