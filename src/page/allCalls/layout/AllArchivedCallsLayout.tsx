import useAirCall from "../../../state/airCallState/hooks/useAirCall";
import CallButton from '../components/CallButton';
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
      <CallButton
        onClick={unarchiveAllArchivedCalls}
        isArchived={true}
      />
     
     <CallItemList
        calls={allArchivedCalls}
        updateCallStatus={updateCallStatus}
      />
      
    </div>
  );
}

export default AllArchivedCallsLayout;
