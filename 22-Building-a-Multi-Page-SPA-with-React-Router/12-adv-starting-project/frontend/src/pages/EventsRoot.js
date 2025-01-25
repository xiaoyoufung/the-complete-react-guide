import { Outlet } from "react-router-dom";

import EventNavigation from "../components/EventsNavigation";

function EventsRootLayout() {
    return (
        <>
            <EventNavigation />
            <Outlet />
        </>
    );
}

export default EventsRootLayout;