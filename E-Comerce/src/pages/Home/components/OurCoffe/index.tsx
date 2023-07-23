import { TitleText } from "../../../../components/Typography";
import { coffees } from "../../../../data/coffee";
import { CoffeCard } from "../coffeeCard";
import { CoffeeList, OurCoffeesContainer } from "./styles";

export function OurCoffees() {
    return (
        <>
            <OurCoffeesContainer className="container">
                <TitleText size="l" color="subtitle">
                    Nossos Cafés
                </TitleText>

                <CoffeeList>
                    {coffees.map(( coffee ) => (
                        <CoffeCard key={coffee.id} coffee={coffee}/>
                    ))}                    
                </CoffeeList>
            </OurCoffeesContainer>
        </>
    )
}