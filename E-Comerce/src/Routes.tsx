import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { CompleteOrderPage } from "./pages/CompleteOrder";
import { DefaultLaout } from "./layouts/DefaultLayout";
import { OrderConfirmedPage } from "./pages/OrderConfirmed";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLaout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/completeOrder" element={<CompleteOrderPage />} />
                <Route path="/orderConfirmed" element={<OrderConfirmedPage />} />
            </Route>
        </Routes>
    )
}