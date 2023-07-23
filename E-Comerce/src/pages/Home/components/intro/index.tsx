import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from "./styles";
import introImg from '../../../../assets/intro-img.png'
import { RegularText } from "../../../../components/Typography";
import { InfoWithIcon } from "../../../../components/infoWithIcon";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { useTheme } from "styled-components";

export function Intro() {
  const { colors} = useTheme();

  return (
    <>
      <IntroContainer>
        <IntroContent className="container">
          <div>
            <section>
              <IntroTitle size="xl" >
                Encontre o café perfeito para qualquer hora do dia
              </IntroTitle>
              <RegularText size="l" color="subtitle" as="h3">
                Com o Coffe Delivery você recebe seu café onde estiver, a 
                qualquer hora
              </RegularText>
            </section>

            <BenefitsContainer>
              <InfoWithIcon
                IconBg={colors["brand-yellow-dark"]}
                icon={<ShoppingCart weight="fill" />}              
                text="Compre simples e segura"
                />
               <InfoWithIcon
                IconBg={colors["base-text"]}
                icon={<Package weight="fill" />}              
                text="Embalagem mantém o café intacto"
                />
                 <InfoWithIcon
                IconBg={colors["brand-yellow"]}
                icon={<Timer weight="fill" />}              
                text="Entega rápida e rastreada"
                />
                 <InfoWithIcon
                IconBg={colors["brand-purple"]}
                icon={<Coffee weight="fill"/>}              
                text="O café chega fresquinho até você"
                />
            </BenefitsContainer>


          </div>

          <img src={introImg} />
        </IntroContent>
      </IntroContainer>
    </>
  );
}