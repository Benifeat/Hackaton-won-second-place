import { Typography, TextField, Button } from '@mui/material'

function Contact() {
    return (
        <div>
            <Typography variant="h2" className="mb-4">Contact Us</Typography>
            <form className="flex flex-col space-y-4">
                <TextField label="Name" variant="outlined" />
                <TextField label="Email" variant="outlined" type="email" />
                <TextField label="Message" variant="outlined" multiline rows={4} />
                <Button variant="contained" color="primary">Send</Button>
            </form>
        </div>
    )
}

export default Contact