import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";



import { AuthRouter, AuthRoutes } from "../auth/routes";
import { JournalRouter, JournalRoutes } from "../journal/routes";


const routesConfig = createBrowserRouter([
    {
        // Login y registro
        path: "/auth/*",
        element: (
            //   <PublicRoute>
            <AuthRouter />
            //   </PublicRoute>
        ),
        children: AuthRoutes,
    },
    {
        // Journalist App
        path: "/",
        element: (
            //   <PrivateRoute>
            <JournalRouter />
            //   </PrivateRoute>
        ),
        children: JournalRoutes,
    },
    {
        path: "/*",
        element: <Navigate to={"/"} />,
    },
]);

export const AppRouter = () => {
    return <RouterProvider router={routesConfig} />;
};
