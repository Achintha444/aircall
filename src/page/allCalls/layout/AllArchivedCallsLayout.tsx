import { Button } from '@mui/material';
import useAirCall from "../../../state/airCallState/hooks/useAirCall";
import CallItemList from '../components/CallItemList';

/**
 * AllArchivedCallsLayout component to display all archived calls.
 * 
 * @returns JSX Element representing the layout for all archived calls.
 */
function AllArchivedCallsLayout() {
  const { allArchivedCalls, updateCallStatus, unarchiveAllArchivedCalls } = useAirCall();

  return (
    <div>
      <Button variant="contained" onClick={unarchiveAllArchivedCalls}>
        Unarchive All
      </Button>
     
     <CallItemList
        calls={allArchivedCalls}
        updateCallStatus={updateCallStatus}
      />
      
    </div>
  );
}

export default AllArchivedCallsLayout;
