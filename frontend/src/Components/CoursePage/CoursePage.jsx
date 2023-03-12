import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import intro_video from '../../assets/videos/intro_video.mp4'
const CoursePage = () => {
    const [lectureNumber,setLectureNumber] = useState(0)
    const lectures = [
        {
            _id:"sampleid",
            title:"Sample",
            description:"description",
            video:{
                url:"sampleurl"
            }
        },
        {
            _id:"sampleid2",
            title:"Sample2",
            description:"description",
            video:{
                url:"sampleurl"
            }
        },
        {
            _id:"sampleid3",
            title:"Sample3",
            description:"description",
            video:{
                url:"sampleurl"
            }
        }
    ]

  return (
    <Grid minH={'90vh'} templateColumns={['1fr','3fr 1fr']}>
            <Box>
                <video width={"100%"} controls controlsList='nodownload nofullscreen noremoteplayback' disablePictureInPicture disableRemotePlayback src={intro_video}>

                </video>
                <Heading m={"4"} children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`} />
                <Heading m={"4"} children="Description" />
                <Text children={lectures[lectureNumber].description}/>
            </Box>
            <VStack>
                {
                    lectures.map((item,index)=>(
                        <button onClick={()=>setLectureNumber(index)} key={item._id} style={{width:"100%",padding:"1rem",textAlign:"center",margin:0,borderBottom:"1px solid(0,0,0,0.2)"}}>
                        <Text noOfLines={1}>
                            #{index+1} {item.title}
                        </Text>
                        </button>
                    ))
                }
            </VStack>
    </Grid>
  )
}

export default CoursePage