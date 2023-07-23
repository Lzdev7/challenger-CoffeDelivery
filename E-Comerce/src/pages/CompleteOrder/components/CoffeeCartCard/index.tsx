import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/Quantityinput";
import { RegularText } from "../../../../components/Typography";
import { ActionsContainer, CoffeCardCartContainer, RemoveButton } from "./style";
import { CartItem } from "../../../../contexts/CartContext";
import { formartMoney } from "../../../../assets/utils/formartMoney";
import { useCart } from "../../../../hooks/useCart";

interface CoffeCartCardProps {
    coffee:CartItem;
}

export function CoffeCartCard({ coffee }: CoffeCartCardProps) {
    const { changeCartItemQuantity, removeCartItem } = useCart();

    function handleIncrease() {
        changeCartItemQuantity(coffee.id, "increase")
    }

    function handleDecrease() {
        changeCartItemQuantity(coffee.id, "decrease")
    }

    function handleRemove() {
        removeCartItem(coffee.id)
    }


    const coffeeTotal = coffee.price * coffee.quantity;

    const formattedPrice = formartMoney(coffeeTotal);
    return(
        <>
            <CoffeCardCartContainer>
                <div>
                    <img src={`/coffees/${coffee.photo}`} alt="" />
                    <div>
                        <RegularText color="subtitle">{coffee.name}</RegularText>
                        <ActionsContainer>
                            <QuantityInput size="small"
                             onIncrease={handleIncrease}
                             onDecrease={handleDecrease} 
                            quantity={coffee.quantity}/>
                            <RemoveButton onClick={handleRemove} >
                                <Trash size={16}/>
                                REMOVER
                            </RemoveButton>
                        </ActionsContainer>
                    </div>
                </div>

                <p>R${formattedPrice}</p>
            </CoffeCardCartContainer>
        </>
    )
}