import { RegularText, TitleText } from "../../components/Typography";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";
import confirmedOrderIllustration from '../../assets/Illustration.svg'
import { InfoWithIcon } from "../../components/infoWithIcon";
import { Clock, CurrencyCircleDollar, MapPin } from "phosphor-react";
import { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../CompleteOrder";
import { paymentMethods } from "../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions";
import { useEffect } from "react";

interface LocationType {
    state: OrderData;
}

export function OrderConfirmedPage() {
    const { colors } = useTheme();
    
    const { state } = useLocation() as unknown as LocationType;

    const navigate = useNavigate();

    useEffect(()=>{
        if(!state) {
            navigate("/")
        }
    }, []);

    if(!state) return <></>

    return (
        <>
            <OrderConfirmedContainer className="container">
                <div>
                    <TitleText size="l" >Uhu! Pedido Confirmado</TitleText>
                    <RegularText size="l" color="subtitle" >
                        Agora é só aguardar que logo o café chegará até voce
                    </RegularText>
                </div>
                <section>
                    <OrderDetailsContainer>
                        <InfoWithIcon
                            icon={<MapPin weight="fill" />}
                            text={
                                <RegularText>
                                    Enrege em <strong>{state.street}, {state.number}</strong>
                                    <br />
                                    {state.district} - {state.city}, {state.uf}
                                </RegularText>}
                            IconBg={colors["brand-purple"]}></InfoWithIcon>
                        <InfoWithIcon
                            icon={<Clock weight="fill" />}
                            text={
                                <RegularText>
                                    Previsão de entrega
                                    <br />
                                    <strong> 20 min - 30 min</strong>
                                </RegularText>}
                            IconBg={colors["brand-yellow"]}></InfoWithIcon>
                            <InfoWithIcon
                            icon={<CurrencyCircleDollar weight="fill" />}
                            text={
                                <RegularText>
                                    Pagamento na entrega
                                    <br />
                                    <strong>{paymentMethods[state.paymentMethod].label}</strong>
                                </RegularText>}
                            IconBg={colors["brand-yellow"]}></InfoWithIcon>
                    </OrderDetailsContainer>

                    <img src={confirmedOrderIllustration} />
                </section>
            </OrderConfirmedContainer>
        </>
    )
}