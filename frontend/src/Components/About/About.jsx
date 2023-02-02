import { Avatar, Box, Button, Container, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import introVideo from '../../assets/videos/intro_video.mp4'
import { Link } from 'react-router-dom'
import { RiSecurePaymentFill } from 'react-icons/ri'
const Founder = ()=>{
    return(
        <Stack direction={['column','row']} spacing={['4','16']} padding='8'>
            <VStack>
                <Avatar src='https://avatars.githubusercontent.com/u/31980836?s=400&u=9e9376c10b18298659971cb5c841c59387e024a0&v=4' boxSize={['40','48']} />
                <Text children="Co-Founder" opacity={0.7} />
            </VStack>
            <VStack justifyContent={'center'} alignItems={['center','flex-start']}>
                <Heading children="Abu Zubaer " size={['md','xl']} />
                <Text alignItems={['center','left']} children='Hi i am a web developer. Our goal is to provide quality content at reasonable price' />
            </VStack>
        </Stack>
    )
}

const VideoPlayer = ()=>{
    return(
    <Box>
         <video autoPlay controls src={introVideo} controlsList="nodownload nofullscreen noremoteplayback" disablePictureInPicture disableRemotePlayback></video>
    </Box>
    )
}
const TandC = ({termsAndCondition})=>{
    return(
        <Box>
            <Heading size={'md'} children='Terms and Condition' textAlign={['center','left']} my='4'/>
            <Box h='sm' p='4'>
                <Text textAlign={['center','left']} letterSpacing={'widest'} fontFamily='heading' >{termsAndCondition}</Text>
            </Box>
            <Heading my={'4'} size="xs" children="Refund only applicable for cancelation within 7 days" />
        </Box>
    )
}
const About = () => {
  return (
    <Container maxW={"container.lg"} padding='16' boxShadow={'lg'}>
        <Heading children="About Us" textAlign={['center','left']} />
        <Founder/>
        <Stack m={'8'} direction={['column','row']} >
            <Text fontFamily={'cursive'} m="8" textAlign={['center','left']}>
                We are a video streaming platform with some premium courses available only for premium users
            </Text>
            <Link to='/subscribe'>
                <Button variant={'ghost'} colorScheme='yellow' >
                    Checkout Our Plan
                </Button>
            </Link>
        </Stack>
        <VideoPlayer/>
        <TandC termsAndCondition={'terms and Condition'} />
        <HStack my={'4'} padding='4'>
            <RiSecurePaymentFill/>
            <Heading size={'xs'} fontFamily="sans-serif" children="Payment is Secured By BKash" />
        </HStack>
    </Container>
  )
}

export default About