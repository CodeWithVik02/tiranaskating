import React from "react";
import '../../../style/homeStyle/feauters.css'
import { Container, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { SiFunimation } from "react-icons/si";
import { GiRollerSkate } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { GrAchievement } from "react-icons/gr";
import Feature from "./Feature";

const featuresData = [
  {
    icon: SiFunimation,
    iconBg: "#1F7CFF",
    heading: "Argetim",
    text: "Nje vend zbavites dhe i sigurt per te gjitha grupmoshat e ndryshme",
  },
  {
    icon: GiRollerSkate,
    iconBg: "#F75C4E",
    heading: "Patinazh & Patinazh ne akull",
    text: "Mesime patinazthi dhe ati ne akull me kushtet e duhura per te gjitha grupmoshat",
  },
  {
    icon: FaUserFriends,
    iconBg: "#191046",
    heading: "Shumellojshmeria",
    text: "Ofrohen kurse te grupmoshave te ndryshme per patinazh dhe ate ne akull po ashtu dhe kurse shtes",
  },
  {
    icon: FaMoneyCheckDollar,
    iconBg: "#FF1FB3",
    heading: "Pagesa cash & online",
    text: "Keni mundesin te paguanui dhe rregjistroheni online ose te zgjidhni pagesen chash",
  },
  {
    icon: RiTeamFill,
    iconBg: "#5C4EF7",
    heading: "Drejtuesit",
    text: "Skuadra drejtuese te cilet do jen mesuesit tuaj  jan mirkprites dhe te mirkuptueshem ",
  },
  {
    icon: GrAchievement,
    iconBg: "#F7954E",
    heading: "Qellimet",
    text: "Arrini qellimet tuaja ne kursin e zgjedhur me rezultate maksimale",
  },
];

function Features({isMobile}) {
  return (
    <Container style={{ maxWidth: "none"  }} size="md" pt={{ base: "5rem", md: "8.125rem" }}>
      <VStack spacing={{ base: "3rem", md: "4.25rem" }}>
        {/* Heading */}
        <VStack spacing="1.25rem">
          <VStack spacing="0.5rem">
            <Heading as="h2" size="lg" textAlign="center">
              Per kurset ne vijim 
            </Heading>
          </VStack>
          <Text color="muted" maxW="25rem" textAlign="center" lineHeight="2rem">
            Ketu mund te rregjistroheni dhe beni pages mujore per kursin e deshiruar
          </Text>
        </VStack>
        {/* Grid */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacingY="3.75rem"
          spacingX="5.25rem"
          maxW="1105px"
          
        >
          {featuresData.map((featureData , index) => (
            <Feature
              key={index}
              icon={featureData.icon}
              iconBg={featureData.iconBg}
              heading={featureData.heading}
              text={featureData.text}
              isMobile={isMobile}
            />
          ))}
        </SimpleGrid>
      <button className="button-81" role="button">Shiko me shume</button>
      
      </VStack>
      
    </Container>
  );
}

export default Features;
