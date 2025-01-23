import { Link, Outlet, useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchEvent } from "../../util/http.js";
import { deleteEvent } from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import Header from "../Header.jsx";
import { useQueryClient } from "@tanstack/react-query";

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data, isLoading, isError: isDataError, error } = useQuery({
    queryKey: ["event", { id }],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
    staleTime: 5000,
  });

  const { mutate, isPending, isError: isDeleteError, error: deleteError } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"], exact: true });
      navigate("/events");
    },
  });

  function handleDelete() {
    mutate({ id });
  }

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {isLoading || isPending && <LoadingIndicator />}
      {(isDataError || isDeleteError) && (
        <p>
          An error occurred: {error?.info?.message || deleteError?.info?.message || "Failed to fetch or delete event."}
        </p>
      )}
      {data && (
        <article id="event-details">
          <header>
            <h1>{data.title}</h1>
            <nav>
              <button onClick={handleDelete}>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img
              src={`http://localhost:3000/${data.image}`}
              alt={data.title}
            />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{data.location}</p>
                <time dateTime={new Date(data.date).toISOString()}>
                  {data.date} @ {data.time}
                </time>
              </div>
              <p id="event-details-description">{data.description}</p>
            </div>
          </div>
        </article>
      )}
    </>
  );
}