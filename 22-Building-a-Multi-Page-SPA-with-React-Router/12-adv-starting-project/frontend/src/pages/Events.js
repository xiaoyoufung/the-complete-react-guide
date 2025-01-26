import { useLoaderData, defer, Await } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
    const data = useLoaderData();



    const events = data.events;

    return (
        <>
            <EventsList events={events} />
        </>
    );
}

export default EventsPage;

// async function loadEvents() {

// }

export async function loader() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        //   return {isError: true, message: 'Could not fetch events'};
        throw new Response(JSON.stringify({ message: 'Could not fetch events' }),
            { status: 500 });
    } else {
        return response;
    }
}