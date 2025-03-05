import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { LoginPage } from "./pages/LoginPage/LoginPage"
import { MainPage } from "./pages/MainPage/MainPage";
import { FavPlayer } from "./pages/FavPlayer/FavPlayer";
import { RegistPage } from "./pages/RegistPage/RegistPage";
import { FavTeam } from "./pages/FavTeam/FavTeam";
import { ThemeProvider } from "./contexts/themeProvider";



function App() {

  const routerConfig = createBrowserRouter([
    {
      path: "/regist-page",
      element: <RegistPage />
    },
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/main-page",
      element: <MainPage />,
    },
    {
      path: "/fav-player",
      element: <FavPlayer />
    },
    {
      path: "/fav-team",
      element: <FavTeam />
    },
    // {
    //   path: "/league-page",
    //   element: <LeguePage />
    // },
    // {
    //   path: "/matches-page",
    //   element: <MatchesPage />
    // },
    // {
    //   path: "/player-page",
    //   element: <PlayerPage />
    // },
  ]);


  return (
    <ThemeProvider>
      <RouterProvider router={routerConfig} />
    </ThemeProvider>
  )
}

export default App
