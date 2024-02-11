import React from 'react';
import '../../../style/homeStyle/loactions.css'
import { Heading , Button  , Text } from '@chakra-ui/react';
const Location = () => {
 
  return (
  <div>
  <div className='loco'>  
  <Heading as="h1" size="lg" id='hd4' textAlign="center" >
              Lokacioni
              </Heading>
    <div className='locations' >
      <div className='place--holder--one'>
      <a href='https://medium.com/@yukthihettiarachchissck/getting-started-with-google-maps-api-in-react-js-1390b19d18f0'><img src={require('../../../style/images/Screenshot 2024-02-10 142509.png')}  ></img></a>
      <Text fontSize='3xl' textAlign="center" style={{paddingTop:'10px'}}>Patinazh</Text>
      <div className='one--txt'><Text fontSize='xl' style={{width:'300px'}}  textAlign="center">Tirana Ring Center, Sheshi Karl Topia, Tirana 1000, Albania </Text></div>
       </div>
      <div className='place--holder--second'>
      <a> <img src={require('../../../style/images/Screenshot 2024-02-10 142606.png')} ></img></a>
      <Text fontSize='3xl' textAlign="center" style={{paddingTop:'10px'}}>Patinazh ne akull</Text>
      <div className='one--txt'>
      <Text fontSize='xl' style={{width:'300px'}} textAlign="center">Plaza Tirana, Sheshi Skender Beu, Tirana 1001, Albania</Text>
      </div>
      </div>
    </div>
  </div>
   </div>      
  );
};

export default Location;