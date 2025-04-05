import useAirCall from "../../../state/airCallState/hooks/useAirCall";
import CallButton from '../components/CallButton';
import CallItemList from '../components/CallItemList';

/**
 * AllCallsLayout component to display all non-archived calls.
 * 
 * @returns JSX Element representing the layout for all non-archived calls.
 */
function AllCallsLayout() {
  const { allNonArchivedCalls, updateCallStatus, archiveAllUnarchivedCalls } = useAirCall();

  return (
    <div>
      <CallButton
        onClick={archiveAllUnarchivedCalls}
        isArchived={false}
      />

      <CallItemList
        calls={allNonArchivedCalls}
        updateCallStatus={updateCallStatus}
      />
    </div>
  );
}

export default AllCallsLayout;
