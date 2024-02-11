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
} from "@chakra-ui/react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    message: "",
  });

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
    <Container marginTop={250}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
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
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              name="lastName"
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
