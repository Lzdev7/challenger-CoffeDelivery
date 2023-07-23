import { ReactNode } from "react";
import { IconContainer, InfoWithIconContainer } from "./style";

interface InfoWithIconProps {
    icon: ReactNode;
    text: string | ReactNode;
    IconBg: string;
}

export function InfoWithIcon( { icon, text, IconBg }: InfoWithIconProps) {
    return (
        <>
            <InfoWithIconContainer>
                <IconContainer iconBg={IconBg}>{icon}</IconContainer>
                {typeof text === "string" ? <p>{text}</p> : text}
            </InfoWithIconContainer>
        </>
    )
}