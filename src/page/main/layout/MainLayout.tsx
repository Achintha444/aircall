import { SyntheticEvent, useState } from 'react';
import {
    Box,
    Tabs,
    Tab,
    Typography,
    Paper,
    Container,
    CircularProgress,
    Fade,
} from '@mui/material';

import AllCalls from '../../allCalls/pages/AllCalls';
import AllArchivedCalls from '../../allCalls/pages/AllArchivedCalls';
import Header from '../components/Header';
import useAirCall from '../../../state/airCallState/hooks/useAirCall';

/**
 * MainLayout component to display the main layout of the application.
 */
function MainLayout() {
    const { loading, error } = useAirCall();
    const [currentTab, setCurrentTab] = useState(0);

    /**
     * Handle tab change event.
     */
    const handleChange = (_event: SyntheticEvent, newValue: number) => {
        setCurrentTab(newValue);
    };

    if (loading) {
        return (
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height="100vh"
                bgcolor="background.default"
                sx={{
                    width: {
                        xs: '100%',
                        sm: '90%',
                        md: '60vw',
                    },
                }}
            >
                <CircularProgress size={32} />
                <Typography mt={2} variant="body2" color="text.secondary">
                    Loading calls...
                </Typography>
            </Box>
        );
    }

    if (error) {
        return (
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height="100vh"
                bgcolor="background.default"
                textAlign="center"
                px={2}
                sx={{
                    width: {
                        xs: '100%',
                        sm: '90%',
                        md: '60vw',
                    },
                }}
            >
                <Typography variant="h6" color="error" gutterBottom>
                    Something went wrong
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {error}
                </Typography>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                minHeight: '100vh',
                width: {
                    xs: '100%',
                    sm: '90%',
                    md: '60vw',
                },
                mx: 'auto',
                bgcolor: 'background.default',
                display: 'flex',
                flexDirection: 'column',
                p: 4,
                borderRadius: 4,
            }}
        >
            <Header />

            <Paper
                elevation={1}
                square
                sx={{
                    px: 2,
                    bgcolor: 'background.paper',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    mt: 2,
                }}
            >
                <Tabs
                    value={currentTab}
                    onChange={handleChange}
                    aria-label="Call Tabs"
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                >
                    <Tab label="Activities" />
                    <Tab label="Archived Calls" />
                </Tabs>
            </Paper>

            <Container
                maxWidth="md"
                sx={{
                    py: 4,
                    flexGrow: 1,
                    transition: 'all 0.3s ease',
                }}
            >
                <Fade in={currentTab === 0} timeout={300} unmountOnExit>
                    <Box>{currentTab === 0 && <AllCalls />}</Box>
                </Fade>

                <Fade in={currentTab === 1} timeout={300} unmountOnExit>
                    <Box>{currentTab === 1 && <AllArchivedCalls />}</Box>
                </Fade>
            </Container>
        </Box>
    );
}

export default MainLayout;
