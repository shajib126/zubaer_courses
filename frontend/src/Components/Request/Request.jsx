import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Request = () => {
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [course,setCourse] = useState('')
  return (
    <Container height={'90vh'}>
        <VStack height={'full'} spacing="16" justifyContent={'center'}>
            <Heading children="Request new Course" />
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
              
              value={course}
              onChange={e => setCourse(e.target.value)}
              placeholder="explain the course"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Button colorScheme={'yellow'} type="submit">
            Send Mail
          </Button>
          <Box my={"4"}>
            See available Courses! {' '}
            <Link to="/courses">
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

export default Request