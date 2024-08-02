import React, { createContext, useContext, useState } from "react";
import { LoginContext } from "./loginContext";
import { lang } from "../localization";

const FetchContext = createContext<{
  request: (
    url: string,
    method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH",
    body?: any,
    successMessage?: string
  ) => Promise<{ status: number; data: any }>;
  loading: boolean;
}>({
  request: (url, method) => new Promise((res, rej) => {}),
  loading: false,
});
export { FetchContext };

function FetchContextProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState<boolean>(false);
  let { token } = useContext(LoginContext);
  const request = (
    url: string,
    method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH",
    body?: any,
    successMessage?: string
  ) => {
    setLoading(true);
    return new Promise<{ status: number; data: any }>((res, rej) => {
      const controller = new AbortController();
      const signal = controller.signal;
      var status: number;
      fetch(
        url,
        body
          ? {
              method: method,
              headers: {
                "content-type": "application/json",
                localization: lang ? lang : "fa",
                authorization: token && token.length > 0 ? token : "",
              },
              signal: signal,
              body: JSON.stringify(body),
            }
          : {
              method: method,
              headers: {
                "content-type": "application/json",
                authorization: token && token.length > 0 ? token : "",
              },
              signal: signal,
            }
      )
        .then((response) => {
          status = response.status;
          return response.json();
        })
        .then((responsJson) => {
          if (status === 500) {
            console.log("rete");
          } else if (status === 200 || status === 201) {
            if (method !== "GET") {
              console.log(responsJson.message);
            }
          } else if (status === 401) {
            localStorage.clear();
          } else if (status === 400 || status === 403 || status === 404) {
            console.log("dsfsf");
          } else {
            console.log("dsfsf");
          }
          setLoading(false);
          res({ status: status, data: responsJson });
        })
        .catch((e) => {
          if (status === 401) {
            localStorage.clear();
            window.location.reload();
          }
          console.log("status", status);

          console.log("dsfsf");
          setLoading(false);
          res({ status: 500, data: [] });
        });
    });
  };

  return (
    <FetchContext.Provider value={{ request, loading }}>
      {children}
      {loading && <div className="absolute w-full">loading</div>}
    </FetchContext.Provider>
  );
}
export default FetchContextProvider;
