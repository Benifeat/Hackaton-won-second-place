import { Typography, Box } from '@mui/material';
import MapPreview from '../../components/MapPreview/MapPreview';
import StoryCards from '../../components/StoryCards/StoryCards';
import Section from '../../components/Sections/Section';
import MapSection from '../../components/Sections/MapSection';
import HeadSection from '../../components/Sections/HeadSection';
import SectionExplore from '../../components/Sections/SectionExplore'
import PostPreview from '../../components/postpreview/PostPreview';


function Home() {
    return (
        <>
        {/* <HeadSection/>
        <Section/>
        <MapSection/> */}
        <Box>
            <HeadSection/>
            <Section/>
            <MapSection/>
            <MapPreview />
         <PostPreview />
            <StoryCards />
            <SectionExplore />
        </Box>
        </>
    );
}

export default Home