import { TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { CoffeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./sytles";

export function SelectCoffees() {
    const { cartItems } = useCart();

    return (
        <>
            <SelectedCoffeesContainer>
                <TitleText>
                    Cafés Selecionados
                </TitleText>

                <DetailsContainer>
                    {cartItems.map((item ) => 
                        <CoffeCartCard key={item.id} coffee={item} />
                    )}
                   <ConfirmationSection/> 
                </DetailsContainer>

            </SelectedCoffeesContainer>
        </>
    )
}