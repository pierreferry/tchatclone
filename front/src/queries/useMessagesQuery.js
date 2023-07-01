import { useQuery, useQueryClient } from "react-query";
import { useEffect } from "react";
const QUERY_PATH = "/api/messages";

function useMessagesQuery() {
  const queryClient = useQueryClient();

  useEffect(() => {
    // const websocket = new WebSocket("ws://localhost:8080");
    const websocket = new WebSocket("ws://localhost:8080");
    websocket.onopen = () => {
      console.log("connected");
    };
    websocket.onmessage = (event) => {
      // const data = JSON.parse(event.data);
      // const queryKey = [...data.entity, data.id].filter(Boolean);

      /** The simplest implementation is to invalidate the messages query.
       * This will trigger a background refetch of the messages query,
       * which will then update the UI. */
      queryClient.invalidateQueries({ queryKey: [QUERY_PATH] });
    };

    return () => {
      websocket.close();
    };
  }, [queryClient]);

  return useQuery({
    queryKey: [QUERY_PATH], // Putting the path as the query key will make sure that the query is only executed once per path.
    queryFn: () => fetch(QUERY_PATH).then((res) => res.json()),
  });
}

export default useMessagesQuery;
