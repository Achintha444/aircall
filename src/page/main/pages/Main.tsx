import AirCallProvider from "../../../state/airCallState/providers/airCallProvider";
import MainLayout from "../layout/MainLayout";

function Main() {
    return (
        <AirCallProvider>
            <MainLayout />
        </AirCallProvider>  
    );
}

export default Main;
