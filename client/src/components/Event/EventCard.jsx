// src/components/EventCard.js
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
    position: 'relative',
    height: '450px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    color: theme.palette.common.white,
    '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7))',
    },
}));

const ContentContainer = styled(CardContent)(({ theme }) => ({
    position: 'relative',
    zIndex: 10,
    padding: theme.spacing(2),
}));

const DateContainer = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    left: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: theme.palette.common.white,
}));

const EventCard = ({ image, date, title, link }) => (
    <StyledCard style={{ backgroundImage: `url(${image})` }}>
        <DateContainer>
            <Button
                variant="contained"
                color="primary"
                sx={{ textTransform: 'uppercase', fontSize: '0.75rem' }}
                href="#"
            >
                Politics
            </Button>
            <div>
                <Typography variant="h3" component="div">
                    {date.day}
                </Typography>
                <Typography variant="caption">{date.month}</Typography>
            </div>
        </DateContainer>
        <ContentContainer>
            <Typography
                variant="h6"
                component="a"
                href={link}
                sx={{ textDecoration: 'none', color: 'inherit' }}
            >
                {title}
            </Typography>
        </ContentContainer>
    </StyledCard>
);

export default EventCard;
