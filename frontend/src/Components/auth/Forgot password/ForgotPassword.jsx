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

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <Container height={'95vh'}>
      <form>
        <Heading
          children="Forgot Password"
          my={'16'}
          textTransform="uppercase"
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>
          <Input
            required
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            type={'email'}
            focusBorderColor="yellow.500"
          />
          <Button colorScheme={'yellow'} width={'full'}>
            Send Reset Link
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ForgotPassword;
