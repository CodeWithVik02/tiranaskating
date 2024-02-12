import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  HStack,
  VStack,
  useBreakpointValue,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Flex,
} from "@chakra-ui/react";
import '../../../style/form.css'
import Feature from "../Features/Feature";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaArrowCircleDown } from "react-icons/fa";
const ContactForm = ({isMobile}) => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    message: "",
  });
  const featuresData = [
    {
      icon: FaPhone,
      iconBg: "#1F7CFF",
      heading: "Phone",
      text: "+355690978623",
    },
    {
      icon: IoMdMail,
      iconBg: "#F75C4E",
      heading: "Mail",
      text: "example@mail.com",
    },]
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, for example, sending data to backend
    console.log(formData);
  };

  const inputWidth = useBreakpointValue({ base: "100%", md: "50%" });

  return (
    <Container  className="cnt">
   
            <VStack spacing={{ base: "3rem", md: "1.85rem" }}>
        {/* Heading */}
        <VStack spacing="1.25rem">
          <VStack spacing="0.5rem">
            <Heading as="h1" size="xl" textAlign="center">
             Na kontaktoni ne
            </Heading>
          </VStack>
        </VStack>
        {/* Grid */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacingY="1.75rem"
          spacingX="15.25rem"
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
      
      </VStack>  
      <Flex alignItems="center" marginTop={50}>
    <Heading as="h1" id="hd6" size="lg" textAlign="center" marginRight="2rem">
      Ose na dergoni nje mesazh
    </Heading>
    <FaArrowCircleDown id='icn4' style={{ float:'right'}}/>
  </Flex>
      <form onSubmit={handleSubmit} >
        <VStack spacing={4} align="stretch" marginTop={10} id="cs1" marginBottom={30}> 
          <HStack spacing={4} justify="space-between" w="100%">
            <FormControl w="45%">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                size="lg"
                required
              />
            </FormControl>
            <FormControl w="45%">
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                size="lg"
                required
              />
            </FormControl>
          </HStack>
          <FormControl w="100%">
            <FormLabel>Email</FormLabel>
            <Input
              type="text"
              name="Email"
              value={formData.lastName}
              onChange={handleInputChange}
              size="lg"
              required
            />
          </FormControl>
          <FormControl w="100%">
            <FormLabel>Message</FormLabel>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              size="lg"
              required
            />
          </FormControl>
          <Button type="submit" size="lg">Submit</Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ContactForm;
