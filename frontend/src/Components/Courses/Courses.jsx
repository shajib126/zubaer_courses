import { Button, Container, Heading, HStack, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Course = ({views,title,imageSrc,id,addToPlayListHandler,creator,description,lecture,lectCount}) =>{

    
    return(
        <VStack m={'8'} className='course' alignItems={['center','flex-start']}>
            <Image  src={imageSrc} boxSize="60" objectFit="contain" />
            <Heading size={'sm'} textAlign={['center','left']} maxW="200px" fontFamily={"sans-serif"} noOfLines="3" children={title} />
            <Text noOfLines={2} children={description} />
            <HStack>
            <Text fontWeight={'bold'} textTransform="uppercase" children={"Creator"} />
            <Text fontFamily={'body'} textTransform="uppercase" children={creator} />
            
            </HStack>
            <Heading textAlign={'center'} size='xs' children={`Lecture - ${lectCount}`} textTransform="uppercase" />
            <Heading size='xs' children={`Views - ${views}`} textTransform="uppercase" />

            <Stack direction={['column','row']} alignItems="center">
                <Link to={`/course/${id}`}>
                    <Button colorScheme={'yellow'}>Watch Now</Button>
                </Link>
                <Button variant={'ghost'} colorScheme={'yellow'} onClick={()=>addToPlayListHandler(id)}>Add To Playlist</Button>
            </Stack>
        </VStack>
    )
}
const Courses = () => {
    const [keyword,setKeyword] = useState('')
    const [category,setCategory] = useState('')
    const categories = ['Web Development','Machine Learning','DSA','Python']
    const addToPlayListHandler = ()=>{
        console.log('added');
    }
  return (
   <Container minH={"95vh"} maxW="container.lg" paddingY={'8'}>
        <Heading children="All Courses" m={'8'} />
        <Input placeholder='Search A course..' type='text' value={keyword} onChange={(e)=>setKeyword(e.target.value)} focusBorderColor="yellow.500" />
        <HStack overflowY={'auto'} padding="8">
            
                {categories && categories?.map((category,i)=>(
                    <Button key={i} onClick={()=>setCategory(category)} m={'8'} minW={'60'}>
                     <Text children={category} />
                    </Button>
                ))}
             
           
        </HStack>
        <Stack direction={['column','row']} flexWrap={"wrap"} justifyContent={['flex-end','space-evenly']} alignItems={['center','flex-start']}>
            <Course title={'sample'} description={'Sample'} imageSrc={'https://cdn.pixabay.com/photo/2022/12/15/20/08/curacao-7658440_960_720.jpg'} id={'Sample'} creator={'Sample '} lecture={'sample'} lectCount={4} views={1000} addToPlayListHandler={addToPlayListHandler} />
        </Stack>
   </Container>
  )
}

export default Courses