import { Outlet } from "react-router-dom";
import { LaytoutContainer } from "./styles";
import { Header } from "../../components/header";

export function DefaultLaout() {
    return (
        <>
            <LaytoutContainer>
                <Header/>
                <Outlet />
            </LaytoutContainer>
        </>
    )
}