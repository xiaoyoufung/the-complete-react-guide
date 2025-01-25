import EventItem from "../components/EventItem";
import { useLoaderData } from "react-router-dom";

function EventDetailPage() {
    const data = useLoaderData();

    let content;

    if (data) {
        content = <EventItem event={data.event} />;
    }

    return <>
        <h1>Event Detail Page</h1>
        {content}
    </>
}

export default EventDetailPage;

export async function loader({ request, params }) {
    const id = params.eventId;

    const response = await fetch(`http://localhost:8080/events/${id}`);

    if (!response.ok) {
        throw new Response(JSON.stringify({ message: 'Could not fetch details for selected event.' }),
            { status: 500 });
    } else {
        return response;
    }
}