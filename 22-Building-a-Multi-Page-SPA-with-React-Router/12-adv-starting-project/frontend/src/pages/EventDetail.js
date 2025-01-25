import EventItem from "../components/EventItem";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchEvent } from "../util/http";

function EventDetailPage() {
    const params = useParams();

    const { data, isPending, isError, error } = useQuery({
        queryKey: ["events", params.eventId],
        queryFn: ({ signal }) => fetchEvent({ signal, id: params.eventId }),
        staleTime: 5000,
    });

    let content;

    if (isPending) {
        content = <p>Loading...</p>;
    }

    if (isError) {
        content = <p>Error: {error.message}</p>;
    }

    if (data) {
        content = <EventItem event={data} />;
    }

    return <>
        <h1>Event Detail Page</h1>
        {content}
    </>
}

export default EventDetailPage;