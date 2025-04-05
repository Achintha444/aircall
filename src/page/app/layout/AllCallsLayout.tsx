import useAirCall from "../../../state/airCallState/hooks/useAirCall";

function AllCallsLayout() {
    const { allCalls } = useAirCall();

    return (
       <div>
        {
              allCalls.map((call) => (
                <div key={call.id}>
                     <h2>{call.from}</h2>
                     <p>{call.to}</p>
                     <p>{call.duration}</p>
                     <p>{call.created_at}</p>
                </div>
              ))
        }
       </div>
    );
}

export default AllCallsLayout;
