import { SyntheticEvent, useState } from "react";
import AllCalls from "../../allCalls/pages/AllCalls";
import Header from "../components/Header";
import { Tab, Tabs } from "@mui/material";
import useAirCall from "../../../state/airCallState/hooks/useAirCall";
import AllArchivedCalls from "../../allCalls/pages/AllArchivedCalls";

function MainLayout() {
    const { loading, error } = useAirCall();

    const [currentTab, setCurrentTab] = useState(0);

    const handleChange = (_event: SyntheticEvent, newValue: number) => {
        setCurrentTab(newValue);
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center w-full h-full">
                <h1>Loading...</h1>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center w-full h-full">
                <h1>{error}</h1>
            </div>
        );
    }

    return (
        <span className="flex flex-col items-center justify-center w-full">
            <Header />            

            <Tabs value={currentTab} onChange={handleChange} aria-label="basic tabs example" className="w-full">
                <Tab label="Activities" />
                <Tab label="Archived Calls" />
            </Tabs>

            {
                currentTab === 0 && (
                    <AllCalls />
                )
            }

            {
                currentTab === 1 && (
                    <AllArchivedCalls />
                )
            }
        </span>
    );
}

export default MainLayout;
