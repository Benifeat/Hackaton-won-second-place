import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MapPreviewImage from '../../assets/previewofmap.png';

const MapPreview = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[300px] overflow-hidden rounded-lg group">
      <img
        src={MapPreviewImage}
        alt="Map Preview"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0">
        <div className="absolute inset-0 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40 backdrop-blur-[2px] translate-x-0 group-hover:translate-x-full transition-all duration-500 ease-in-out" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Button
          variant="contained"
          onClick={() => navigate('/map')}
          className="transition-all duration-500 ease-in-out group-hover:translate-x-4 z-10"
        >
          Go to Map
        </Button>
      </div>
    </div>
  );
};

export default MapPreview;