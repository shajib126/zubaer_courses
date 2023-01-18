import React from 'react'
import {HStack,Stack,Image,VStack,Heading,Text,Button,Box} from "@chakra-ui/react"
import {Link} from 'react-router-dom'
import {CgGoogle,CgYoutube} from 'react-icons/cg'
import {SiCoursera,SiUdemy} from 'react-icons/si'
import {DiAws} from 'react-icons/di'
import introVideo from '../../assets/videos/intro_video.mp4'
import "./Home.css"
const Home = () => {
  return (
    <section>
    <div className="container">
        <Stack direction={['column','row']} height="100%" justifyContent={['center','space-between']} alignItems="center" spacing={['16','56']}>
            <VStack spacing={'8'} width={'full'} alignItems={['center','flex-end']}>
                <Heading children="LEARN FROM THE EXPERTS" size={"2xl"} />
                <Text fontFamily={'cursive'} fontSize="2xl" textAlign={['center','left']} children="Find Valuable Content At Reasonable Price"/>
                <Link>
                    <Button size={"lg"} colorScheme="yellow">Explore Now</Button>
                 </Link>
            </VStack>
            <Image className='vector-graphics' objectFit='contain' boxSize={'md'} src="https://img.freepik.com/free-vector/programmer-graphic-designer-characters-create-website-man-with-laptop-woman-with-tablet-deve_107791-7443.jpg?w=826&t=st=1673938556~exp=1673939156~hmac=cd3a3a65081e05bdc458741af2ab081fa0a5516c1709d6de5c0c686fe94e4b9f" alt="logo"/>
        </Stack>
        
    </div>
    <Box padding={'8'} bg="blackAlpha.800">
        <Heading children="OUR BRANDS" color={'yellow.400'} textAlign={'center'} fontFamily='body' />
        <HStack className='brandsBanner' justifyContent={'space-evenly'} mt='4'>
            <CgGoogle/>
            <CgYoutube/>
            <SiCoursera/>
            <SiUdemy/>
            <DiAws/>
        </HStack>
    </Box>
    <div className="container2">
        <video autoPlay controls src={introVideo} controlsList="nodownload nofullscreen noremoteplayback" disablePictureInPicture disableRemotePlayback></video>
    </div>
    </section>
  )
}

export default Home