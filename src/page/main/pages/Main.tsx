import AirCallProvider from "../../../state/airCallState/providers/airCallProvider";
import MainLayout from "../layout/MainLayout";

/**
 * Main component to display the main layout of the application.
 * 
 * @returns JSX Element representing the main layout.
 */
function Main() {
    return (
        <AirCallProvider>
            <MainLayout />
        </AirCallProvider>  
    );
}

export default Main;
