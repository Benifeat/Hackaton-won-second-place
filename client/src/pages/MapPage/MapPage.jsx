import { Typography, Box, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { MapPin, Search, ClipboardList, Utensils } from 'lucide-react';
import Map from '../../components/Map/Map';

function MapPage() {
    return (
        <Box component="main" aria-label="Meal Sign-Up Map">
        <Typography
            component="h1"
            className="text-sm font-bold leading-tight mb-4 sr-only"
        >
            Meal Sign-Up Map
        </Typography>

            <Typography variant="h2" className="mb-4">Meal Sign-Up Map</Typography>

            <section aria-labelledby="instructions-heading">
                <Paper elevation={3} className="p-4 mb-4">
                    <Typography id="instructions-heading" variant="h3" className="mb-2">How to Use Our Meal Sign-Up System</Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon><MapPin size={24} /></ListItemIcon>
                            <ListItemText
                                primary={<Typography variant="h4">View the Map</Typography>}
                                secondary="Your current location will be marked on the map."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><Search size={24} /></ListItemIcon>
                            <ListItemText
                                primary={<Typography variant="h4">Find Restaurants</Typography>}
                                secondary="Look for pin icons representing participating restaurants."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><MapPin size={24} /></ListItemIcon>
                            <ListItemText
                                primary={<Typography variant="h4">Explore Options</Typography>}
                                secondary="Click on any pin to view restaurant details and available meals."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><ClipboardList size={24} /></ListItemIcon>
                            <ListItemText
                                primary={<Typography variant="h4">Sign Up for a Meal</Typography>}
                                secondary="Click the 'Sign Up' button in the restaurant's info window."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><Utensils size={24} /></ListItemIcon>
                            <ListItemText
                                primary={<Typography variant="h4">Collect Your Meal</Typography>}
                                secondary="Visit the restaurant and provide your order number to get your meal."
                            />
                        </ListItem>
                    </List>
                    <Typography variant="body2" color="error" className="mt-2">
                        NOTE: You can only sign up for one meal at a time.
                    </Typography>
                    <Typography variant="body2" className="mt-2">
                        Enjoy your meal!
                    </Typography>
                </Paper>
            </section>

            <section aria-label="Interactive Map">
                <Map />
            </section>
        </Box>
    );
}

export default MapPage;
