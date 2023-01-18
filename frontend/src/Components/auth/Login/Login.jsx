import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent="center" spacing={'16'}>
        <Heading children={'Welcome to Zubaer_Dev Course'} />
        <form style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="email address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              type={'email'}
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="password" children="password" />
            <Input
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="******"
              type={'password'}
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box>
            <Link to="/forgotPassword">
              <Button fontSize={'sm'} variant="link">
                Forgot Password?
              </Button>
            </Link>
          </Box>
          <Button my={'4'} colorScheme={'yellow'} type="submit">
            Login
          </Button>
          <Box my={'4'}>
            New User ?{' '}
            <Link to="/register">
              <Button colorScheme={'yellow'} variant="link">
                Register 
              </Button>
            </Link>
             <span> here</span>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
