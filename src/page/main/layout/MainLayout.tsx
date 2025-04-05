import { SyntheticEvent, useState } from 'react';
import { Box, Tabs, Tab, Typography, Paper, Container, CircularProgress } from '@mui/material';

import AllCalls from '../../allCalls/pages/AllCalls';
import AllArchivedCalls from '../../allCalls/pages/AllArchivedCalls';
import Header from '../components/Header';
import useAirCall from '../../../state/airCallState/hooks/useAirCall';

function MainLayout() {
    const { loading, error } = useAirCall();
    const [currentTab, setCurrentTab] = useState(0);

    const handleChange = (_event: SyntheticEvent, newValue: number) => {
        setCurrentTab(newValue);
    };

    if (loading) {
        return (
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
                <CircularProgress />
                <Typography mt={2}>Loading calls...</Typography>
            </Box>
        );
    }

    if (error) {
        return (
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
                <Typography variant="h6" color="error">
                    {error}
                </Typography>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                minHeight: '100vh',
                width: '50vw',
                backgroundColor: 'background.default',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Header />

            <Paper elevation={1} square sx={{ px: 2, bgcolor: 'background.paper' }}>
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

            <Container maxWidth="md" sx={{ py: 4, flexGrow: 1 }}>
                {currentTab === 0 && <AllCalls />}
                {currentTab === 1 && <AllArchivedCalls />}
            </Container>
        </Box>
    );
}

export default MainLayout;
