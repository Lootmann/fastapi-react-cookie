import { axiosApi } from "./apis";
import { CookiesProvider, useCookies } from "react-cookie";
import { useEffect } from "react";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["fake_session_key"]);

  useEffect(() => {
    console.log("* Update");
    console.log(cookies);
  }, []);

  function sendCookieToAPi() {
    console.log(">>> getCookie");
    console.log(cookies);
    console.log(cookies.fake_session_key);

    // TODO: not working sending cookie
    axiosApi
      .post("/auth/cookie", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Cookie: `fake_session_key=${cookies.fake_session_key}`,
        },
      })
      .then((resp) => {
        console.log(resp);
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /**
   * getCookieFromAPI
   *
   * React(gimme a cookie)     -> FastAPI Request: GET /auth/cookie
   * FastAPI(creates a cookie) -> React
   */
  function getCookieFromAPI() {
    console.log(">>> getCookieFromAPI");
    // get fastapi token

    axiosApi
      .get("/auth/cookie")
      .then((resp) => {
        if (resp.status == 200) {
          console.log(resp);
          console.log(resp.data);
          setCookie("fake_session_key", resp.data.token);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <CookiesProvider>
      <div className="min-h-screen bg-zinc-900 text-zinc-200 text-xl">
        <div className="p-4">
          <h1 className="text-2xl">Set Cookies</h1>
        </div>

        <div className="p-4">
          <button
            onClick={sendCookieToAPi}
            className="px-2 py-1 bg-slate-300 text-slate-800 rounded-md"
          >
            Send My Cookie to Backend Server
          </button>
        </div>

        <div className="p-4">
          <button
            onClick={getCookieFromAPI}
            className="px-2 py-1 bg-slate-300 text-slate-800 rounded-md"
          >
            Get Cookie From API - Cookie has JWT Token
          </button>
        </div>
      </div>
    </CookiesProvider>
  );
}

export default App;
