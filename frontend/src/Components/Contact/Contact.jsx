import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [message,setMessage] = useState('')
  return (
    <Container height={'90vh'}>
        <VStack>
            <Heading children="Contact Us" />
            <Box my={'4'}>
           
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
            
            <Textarea
              required
              
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="message"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Button colorScheme={'yellow'} type="submit">
            Send Mail
          </Button>
          <Box my={"4"}>
            Request for a Course? {' '}
            <Link to="/request">
                <Button colorScheme={'yellow'} variant='link'>
                    Click
                </Button>{' '}
                here
            </Link>
          </Box>
        </VStack>
    </Container>
  )
}

export default Contact