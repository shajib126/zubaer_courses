import { Avatar, Button, Container, Heading, HStack, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { fileUploadCss } from '../auth/Register/Register'

const Profile = () => {
    const user = {
        name:"something",
        email:"example@gmail.com",
        createdAt:String(new Date().toISOString()),
        role:'user',
        subscription:{
            status:'undefined'
        },
        playlist:[
            {
                course:'samplecourse',
                poster:"https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/04/01170800/Free-Online-Courses-with-Certificates.jpg"
            }
        ]
    }

    const removeFromPlaylistHandler = (id)=>{

    }
  return (
    <Container minH={'95vh'} maxW="container.lg" py={"8"}>
        <Heading children="Profile" m={"8"} textTransform={"uppercase"}/>
        <Stack justifyContent={'flex-start'} direction={['column','row']} alignItems="center" spacing={["8","16"]} padding="8">
            <VStack>
                <Avatar boxSize={"48"}/>
                <Button colorScheme={"yellow"} variant="ghost"  >Change Photo</Button>
            </VStack>

            <VStack spacing={'4'} alignItems={['center','flex-start']}>
                <HStack>
                    <Text children="Name" fontWeight={'bold'} />
                    <Text children={user.name}/>
                </HStack>
                <HStack>
                    <Text children="Email" fontWeight={'bold'} />
                    <Text children={user.email}/>
                </HStack>
                <HStack>
                    <Text children="CreatedAt" fontWeight={'bold'} />
                    <Text children={user.createdAt.split("T")[0]}/>
                </HStack>

                {
                    user.role !== 'admin' && (
                        <HStack>
                            <Text children="Subscription" fontWeight={'bold'} />
                            {
                                user.subscription.status === 'active'?(
                                    <Button colorScheme={'yellow.500'} variant="unstyled">Cancel Subsciption</Button>
                                ):(
                                    <Link to='/subscribe'>
                                        <Button colorScheme={'yellow'}>
                                            Subscribe
                                        </Button>
                                    </Link>
                                ) 
                            }
                        </HStack>
                    )
                }
                <Stack direction={['column','row']} alignItems="center">
                    <Link to='/updateprofile'>
                        <Button>Update Profile</Button>
                    </Link>
                    <Link to='/changepassword'>
                        <Button>Change Password</Button>
                    </Link>
                </Stack>
            </VStack>

        </Stack>
        <Heading children="Playlist" size={'md'} my='8' />
        {
            user.playlist.length > 0 && (
                <Stack direction={['column','row']} alignItems="center" flexWrap='wrap' p="4">
                    {
                        user.playlist.map((item,index)=>(
                            <VStack w={'48'} m="2" key={item.course}>
                                <Image boxSize={'full'} objectFit="contain" src={item.poster} />
                                <HStack>
                                    <Link to={`/course/${item.course}`}>
                                        <Button variant={'ghost'} colorScheme="yellow">Watch Now</Button>
                                    </Link>
                                    <Button onClick={()=>removeFromPlaylistHandler(item.course)}>
                                        <RiDeleteBin7Fill/>
                                    </Button>
                                </HStack>
                            </VStack>
                        ))
                    }
                </Stack>
            )
        }
        <ChangePhotoBox/>
    </Container>
  )
}

export default Profile

function ChangePhotoBox({}){
    const changeImage = e =>{
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = ()=>{
          setImagePrev(reader.result)
          setImage(reader.result)
        }
      }
    <Modal>
        <ModalOverlay backdropFilter={'blur(10px)'} />
        <ModalContent>
            <ModalCloseButton/>
            <ModalBody>
                <Container>
                    <form >
                        <VStack spacing={'8'}>
                            <Avatar boxSize={'48'}/>
                            <Input onChange={changeImage} type={'file'} css={{"&::file-selector-button":fileUploadCss}} />
                            <Button w={'full'} colorScheme="yellow" type='submit'>Change</Button>
                        </VStack>
                    </form>
                </Container>
            </ModalBody>
            <ModalFooter>
                <Button mr='3'>Cancel</Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
}