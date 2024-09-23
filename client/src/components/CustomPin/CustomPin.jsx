// import React, { useState } from 'react';
// import { Marker, Popup } from 'react-leaflet';
// import { Button, Typography, Box } from '@mui/material';
// import L from 'leaflet';

// function CustomPin({ business, onSignUp, isSignedUp }) {
//   const [localIsSignedUp, setLocalIsSignedUp] = useState(isSignedUp);

//   const handleSignUp = () => {
//     if (!localIsSignedUp) {
//       onSignUp(business.id);
//       setLocalIsSignedUp(true);
//     }
//   };

//   const customIcon = L.icon({
//     iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
//     popupAnchor: [1, -34],
//   });

//   return (
//     <Marker position={business.coordinates} icon={customIcon}>
//       <Popup>
//         <Box>
//           <Typography variant="h6">{business.name}</Typography>
//           <Typography variant="body2">Available meals: {business.availableMeals}</Typography>
//           <Typography variant="body2">Pickup location: {business.pickupLocation}</Typography>
//           <Button 
//             variant="contained" 
//             color="primary" 
//             onClick={handleSignUp}
//             disabled={localIsSignedUp}
//           >
//             {localIsSignedUp ? "Signed Up" : "Sign Up for Meal"}
//           </Button>
//         </Box>
//       </Popup>
//     </Marker>
//   );
// }

// export default CustomPin;

import React, { useState, useCallback } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Button, Typography, Box } from '@mui/material';
import L from 'leaflet';

const CustomPin = ({ business, onSignUp, isSignedUp }) => {
  const [localIsSignedUp, setLocalIsSignedUp] = useState(isSignedUp);
  const [availableMeals, setAvailableMeals] = useState(business.availableMeals);

  const handleSignUp = useCallback(() => {
    if (!localIsSignedUp && availableMeals > 0) {
      onSignUp(business.id);
      setLocalIsSignedUp(true);
      setAvailableMeals(prevMeals => prevMeals - 1);
    }
  }, [localIsSignedUp, availableMeals, onSignUp, business.id]);

  const customIcon = L.icon({
    iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <Marker position={business.coordinates} icon={customIcon}>
      <Popup>
        <Box>
          <Typography variant="h6" gutterBottom>
            {business.name}
          </Typography>
          <Typography variant="body2" paragraph>
            Available meals: {availableMeals}
          </Typography>
          <Typography variant="body2" paragraph>
            Pickup location: {business.pickupLocation}
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleSignUp}
            disabled={localIsSignedUp || availableMeals <= 0}
          >
            {localIsSignedUp ? 'Signed Up' : 'Sign Up for Meal'}
          </Button>
        </Box>
      </Popup>
    </Marker>
  );
};

export default CustomPin;
