import React , {useState}from "react";
import { FormControl 
, FormLabel 
, Input 
, FormHelperText 
, FormErrorMessage} from "@chakra-ui/react";
import '../../../style/form.css'
export default function Form({paddingTop}){
    const [input, setInput] = useState('')

    const handleInputChange = (e) => setInput(e.target.value)
    
    const isError = input === ''
  
    return (
    <div className="cntn">
    <div  className="form">
      <FormControl isInvalid={isError} w={'400px'}>
        <FormLabel>Email</FormLabel>
        <Input type='email' value={input} onChange={handleInputChange} className="input--form"/>
        {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive a response on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isRequired w={'400px'}>
  <FormLabel>First name</FormLabel>
  <Input placeholder='First name' className="input--form"/>
</FormControl>
      
      
      
      </div>
      </div>
    )

}