import { ShoppingCart } from "phosphor-react";
import { QuantityInput } from "../../../../components/Quantityinput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { AddCartWrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./styles";
import { formartMoney } from "../../../../assets/utils/formartMoney";
import { useCart } from "../../../../hooks/useCart";
import { useState } from "react";

export interface Coffee {
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
}

interface CoffeeProps {
    coffee: Coffee;
}


export function CoffeCard( { coffee }: CoffeeProps ) {
    const [quantity, setQuantity] = useState(1);

    function handleIncrease() {
        setQuantity(state => state +1)
    }

    function handleDecrease() {
        setQuantity(state => state -1)
    }

    const { addCoffeeToCart } = useCart();
 
    function handleAddToCart() {
        const coffeeToAdd = {
            ...coffee,
            quantity,
        }
        addCoffeeToCart(coffeeToAdd)
    }


    const formartdPrice = formartMoney( coffee.price);

    return(
        <>
        <CoffeeCardContainer>
            <img src={`/coffees/${coffee.photo}`} alt="" />        
            <Tags>
                {coffee.tags.map( (tag) => (
                    <span key={`${coffee.id} ${tag}`}>{tag}</span>
                ))}
            </Tags>

            <Name>{coffee.name}</Name>
            <Description>{coffee.description}</Description>

            <CardFooter>
                <div>
                    <RegularText size="s">R$</RegularText>
                    <TitleText size="m" color="text" as="strong">
                        {formartdPrice}
                    </TitleText>
                </div>

            <AddCartWrapper>
                <QuantityInput
                    onIncrease={handleIncrease}
                    onDecrease={handleDecrease}
                    quantity={quantity}
                />
                <button onClick={handleAddToCart}>
                    <ShoppingCart weight="fill" size={22} />
                </button>
            </AddCartWrapper>

            </CardFooter>
        </CoffeeCardContainer>
        </>
    );
}