import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom"

import { Root } from "~/components"
import { About, Home } from "~/routes"

import "~/App.css"

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
        <Route index               element={<Home />} />
        <Route path="/about"       element={<About />} />
    </Route>
))

export const App = () => {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}
