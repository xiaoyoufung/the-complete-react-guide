import EventsList from "../components/EventsList";
import { fetchEvents } from "../util/http";
import { useQuery } from "@tanstack/react-query";

function EventsPage() {
    const { data, isPending, isError, error } = useQuery({
        queryKey: "events",
        queryFn: fetchEvents,
    });

    let content;

    if (isPending) {
        content = <p>Loading...</p>;
    }

    if (isError) {
        content = <p>Error: {error.message}</p>;
    }

    if (data) {
        content = <EventsList events={data} />;
    }

    return <>
        <h1>Events Page</h1>
       {content}
    </>;
}

export default EventsPage;