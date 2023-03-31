import { axiosApi } from "./apis";

function App() {
  /**
   * get a cookie from Backend
   *
   * React send cookie to react
   * FastAPI get a cookie named 'access_token'
   * when this headers has no 'access_token', raise 401 Error
   */
  function get() {
    console.log(">>>>>>>>>>>>>>>>>> getCookie");

    axiosApi
      .get("/auth/cookie")
      .then((resp) => {
        console.log(resp);
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /**
   * post to /auth/cookie
   *
   * Backend(FastAPI) set cookie using random_string
   * key is "access_token"
   *
   */
  function post() {
    console.log(">>>>>>>>>>>>>>>>>> getCookieFromAPI");

    axiosApi
      .post("/auth/cookie")
      .then((resp) => {
        if (resp.status == 200) {
          console.log(resp);
          console.log(resp.data);
        } else {
          console.log("wow");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-200 text-2xl">
      <div className="p-4">
        <h1 className="text-2xl">Set Cookies</h1>
      </div>

      <div className="p-4 flex gap-10">
        <button
          onClick={get}
          className="px-2 py-1 bg-slate-300 text-slate-800 rounded-md"
        >
          GET
        </button>

        <button
          onClick={post}
          className="px-2 py-1 bg-pink-800 text-slate-300 rounded-md"
        >
          POST
        </button>
      </div>
    </div>
  );
}

export default App;
