import { useState } from 'react';
import { Button, TextField, Box, Typography, Dialog, DialogTitle, DialogContent } from '@mui/material';

const StoryCards = () => {
  const [stories, setStories] = useState([
    { id: 1, name: "Jenn F.", role: "Marketing Director @ Square", content: "I feel like I've learned as much from X as I did completing my masters. It's the first thing I read every morning." },
    { id: 2, name: "Alex M.", role: "Software Engineer", content: "This platform changed my life. I was able to connect with people who shared my passion for coding and found my dream job through a connection I made here." },
    { id: 3, name: "Sarah L.", role: "Entrepreneur", content: "The support I've received from this community has been invaluable. It's not just about the meals, it's about the hope and dignity it provides." },
    { id: 4, name: "Anonymous", role: "Community Member", content: "I was hesitant at first, but the kindness I've experienced here has restored my faith in humanity. Thank you for making a difference." },
    { id: 5, name: "David K.", role: "Local Business Owner", content: "Being able to contribute to my community by providing meals has been incredibly rewarding. It's a win-win for everyone involved." },
    { id: 6, name: "Emily R.", role: "Student", content: "As a student on a tight budget, this service has been a lifesaver. It's helped me focus on my studies without worrying about my next meal." },
    { id: 7, name: "Michael T.", role: "Retired Teacher", content: "In my retirement, I've found a new purpose by volunteering here. It's a beautiful way to give back and stay connected to my community." },
    { id: 8, name: "Lisa G.", role: "Healthcare Worker", content: "During long shifts, knowing I can count on a nutritious meal from local restaurants has been a blessing. It's community care at its finest." }
  ]);
  const [newStory, setNewStory] = useState({ name: '', content: '' });
  const [openDialog, setOpenDialog] = useState(false);

  const cardWidth = 480; // Increased from 320 to 480
  const cardSpacing = 32; // Increased from 16 to 32 for more space between cards

  const scrollAnimation = `
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New story submitted:', newStory);
    setNewStory({ name: '', content: '' });
    setOpenDialog(false);
  };

  return (
    <Box className="my-8 p-8 bg-gray-100 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden">
      <style>{scrollAnimation}</style>
      <Typography variant="h4" className="mb-4">Inspiration Stories</Typography>
      
      <Box className="relative w-full h-96 overflow-hidden">
        <Box 
          className="flex absolute top-0 left-0"
          style={{ 
            width: `${stories.length * (cardWidth + cardSpacing)}px`,
            animation: `scroll linear infinite ${stories.length * 15}s`, // Increased duration for slower scroll
          }}
        >
          {stories.concat(stories).map((story, index) => (
            <Box
              key={`${story.id}-${index}`}
              className="h-80 p-6 bg-white rounded-xl shadow-xl flex flex-col"
              style={{
                width: `${cardWidth}px`,
                marginRight: `${cardSpacing}px`,
                perspective: '1000px',
                transform: 'rotateY(5deg) rotateX(5deg)',
              }}
            >
              <div>
                <Typography variant="h6">{story.name}</Typography>
                <Typography variant="subtitle2" className="text-blue-600 mb-2">{story.role}</Typography>
              </div>
              <Typography variant="body2" className="flex-grow overflow-y-auto">
                {story.content}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box className="mt-8 text-center">
        <Button variant="contained" color="primary" onClick={() => setOpenDialog(true)}>
          Share Your Story
        </Button>
      </Box>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Share Your Story</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <TextField
              fullWidth
              label="Your Name (or Anonymous)"
              variant="outlined"
              value={newStory.name}
              onChange={(e) => setNewStory({ ...newStory, name: e.target.value })}
            />
            <TextField
              fullWidth
              label="Your Story"
              variant="outlined"
              multiline
              rows={4}
              value={newStory.content}
              onChange={(e) => setNewStory({ ...newStory, content: e.target.value.slice(0, 450) })}
              helperText={`${newStory.content.length}/450 characters`}
            />
            <Button type="submit" variant="contained" color="primary">
              Submit Story
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default StoryCards;