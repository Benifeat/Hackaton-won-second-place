import { Typography, Box, Button } from '@mui/material';
import photo1 from '../../assets/img/girl.jpg';
import { useNavigate } from 'react-router-dom';

export default function PostPreview() {
  const likes = Math.floor(Math.random() * 1000);
   const navigate = useNavigate();

  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: 6,
        m: 2,
        bgcolor: 'blue.50',
        borderRadius: '16px',
        boxShadow: 3,
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <Box 
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            bgcolor: 'blue.200',
            backgroundImage: `url(${photo1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: '4px solid',
            borderColor: 'blue.500',
          }}
        />
       <Box sx={{ ml: 2 }}>
          <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold' }}>
            Michal Levi
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Subject: Financial
          </Typography>
        </Box>
      </Box>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        Eco-Friendly Financial Consulting: A Path to Sustainable Prosperity
      </Typography>
      <Typography variant="body1" color="textPrimary" sx={{ mb: 2 }}>
        In today’s world, financial decisions are about more than just profits—they’re about protecting our planet, too. Eco-friendly financial consulting helps individuals and businesses make smart, sustainable choices that align with environmental goals. By investing in green technologies, supporting ethical companies, and reducing waste, eco-friendly finance not only boosts your bottom line but also contributes to a healthier, more sustainable future. Let’s work together to create wealth that doesn’t cost the Earth. Sustainable prosperity is within reach! 🌍💚
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Typography variant="body2" color="textSecondary" sx={{ mr: 2 }}>
          {likes} Likes
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate('/Posts')}
          sx={{
            transition: 'all 0.5s ease-in-out',
            '&:hover': {
              transform: 'translateX(4px)',
            },
          }}
        >
          View More
        </Button>
      </Box>
    </Box>
  );
}