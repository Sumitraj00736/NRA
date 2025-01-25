import { createContext, useCallback, useState } from "react";
import axios from "axios";

const EventContext = createContext();

const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  //backend url
  const BACKEND_URL = "auth.zeenopay.com/";

  //to gell all the events
  const getAllEvents = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BACKEND_URL}/events`);
      setEvents(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <EventContext.Provider
      value={{
        events,
        loading,
        getAllEvents,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export { EventProvider, EventContext };
