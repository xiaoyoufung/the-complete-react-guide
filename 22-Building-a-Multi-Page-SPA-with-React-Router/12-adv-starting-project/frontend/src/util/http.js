import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export async function fetchEvents() {
    let url = 'http://localhost:8080/events';

    const response = await fetch(url);

    if (!response.ok) {
        const error = new Error('An error occurred while fetching the events');
        error.code = response.status;
        throw error;
    }

    const { events } = await response.json();
    return events;
}

export async function fetchEvent({ signal, id }) {
    let url = `http://localhost:8080/events/${id}`;

    const response = await fetch(url, { signal });

    if (!response.ok) {
        const error = new Error('An error occurred while fetching the event details');
        error.code = response.status;
        throw error;
    }
    const { event } = await response.json();
    
    return event;
}