import {
  Avatar,
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

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name,setName] = useState('')
  const [imagePrev,setImagePrev] = useState('')
  const [image,setImage] = useState('')
  const changeImageHandler = e =>{
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = ()=>{
      setImagePrev(reader.result)
      setImage(reader.result)
    }
  }
  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent="center" spacing={'16'}>
        <Heading textTransform={'uppercase'} children={'Registration'} />
        <form style={{ width: '100%' }}>
          <Box my={'4'} display="flex" justifyContent={'center'}>
            <Avatar  src={imagePrev} my={'4'} size="2xl" />
          </Box>
        <Box my={'4'}>
            <FormLabel htmlFor="name" children="name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="name"
              type={'text'}
              focusBorderColor="yellow.500"
            />
          </Box>
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
          <Box my={'4'}>
            <FormLabel htmlFor="chooseAvatar" children="Choose Avatar" />
            <Input
              onChange={changeImageHandler}
              accept='image/*'
              required
              id="chooseAvatar"
              type={'file'}
              focusBorderColor="yellow.500"
            />
          </Box>
          
          <Button my={'4'} colorScheme={'yellow'} type="submit">
            Register
          </Button>
          <Box my={'4'}>
            Already registered ?{' '}
            <Link to="/login">
              <Button colorScheme={'yellow'} variant="link">
                Login 
              </Button>
            </Link>
             <span> here</span>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;