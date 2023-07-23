import { formartMoney } from "../../../../assets/utils/formartMoney";
import { RegularText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { Button } from "../Button";
import { ConfirmationSectionContainer } from "./sytles";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection() {
    const { cartItemsTotal, cartQuantity } = useCart();
    const cartTotal = DELIVERY_PRICE + cartItemsTotal;

    const formattedItemsTotal = formartMoney(cartItemsTotal);
    const formattedCartTotal = formartMoney(cartTotal);
    const formatteDeliveryPrice = formartMoney(DELIVERY_PRICE);

    return (
        <>
            <ConfirmationSectionContainer>
                <div>
                    <RegularText size="s" >Total de itens</RegularText>
                    <RegularText>R${formattedItemsTotal}</RegularText>
                </div>
                <div>
                    <RegularText size="s" >Entrega</RegularText>
                    <RegularText>R${formatteDeliveryPrice}</RegularText>
                </div>
                <div>
                    <RegularText weight="700" color="subtitle" size="l" >Total</RegularText>
                    <RegularText weight="700" color="subtitle" size="l" >R$ {formattedCartTotal}</RegularText>
                </div>

                <Button text="Confirmar Pedido" disabled={cartQuantity <= 0} type="submit" />
            </ConfirmationSectionContainer>
        </>
    )
} 