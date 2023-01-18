import {
    Box,
    Button,
    Container,
    FormLabel,
    Heading,
    Input,
    VStack,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
  
  const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const params = useParams()
    console.log(params.token);
    return (
      <Container height={'95vh'}>
        <form>
          <Heading
            children="Reset Password"
            my={'16'}
            textTransform="uppercase"
            textAlign={['center', 'left']}
          />
          <VStack spacing={'8'}>
            <Input
              required
              id="email"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="New password"
              type={'password'}
              focusBorderColor="yellow.500"
            />
            <Button colorScheme={'yellow'} width={'full'}>
              Reset Password
            </Button>
          </VStack>
        </form>
      </Container>
    );
  };
  
  export default ResetPassword;
  