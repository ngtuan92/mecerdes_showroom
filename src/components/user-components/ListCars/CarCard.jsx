import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Box,
    IconButton
} from '@mui/material';
import {
    Person,
    Speed,
    Favorite,
    FavoriteBorder
} from '@mui/icons-material';
import { GiCarDoor } from "react-icons/gi";

const CarCard = ({ car, favorites, onToggleFavorite, onViewDetails, formatVND }) => {
    return (
        <Card
            sx={{
                height: 500,
                borderRadius: 3,
                backgroundColor: '#2a2a2a',
                color: 'white',
                transition: 'all 0.3s ease',
                overflow: 'hidden',
                flexDirection: 'column',
                position: 'relative',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                '&:hover': {
                    cursor: 'pointer',
                    transform: 'scale(1.02)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.25)',
                }
            }}
        >
            <Box sx={{ position: 'relative', backgroundColor: '#ffffffff', p: 2 }}>
                <CardMedia
                    component="img"
                    image={car.image}
                    sx={{
                        display: 'flex',
                        height: 350,
                        borderRadius: '8px 8px 0 0',
                        objectFit: 'contain',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '80px',
                        background: 'linear-gradient(to bottom, rgba(42,42,42,0) 0%, rgba(42,42,42,0.3) 40%, rgba(42,42,42,0.8) 80%, rgba(42,42,42,1) 100%)',
                        pointerEvents: 'none'
                    }}
                />
                <IconButton
                    onClick={() => onToggleFavorite(car.id)}
                    sx={{
                        position: 'absolute',
                        top: 13,
                        right: 16,
                        width: 50,
                        height: 50,
                        zIndex: 10,
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 1)',
                        }
                    }}
                >
                    {favorites.has(car.id) ?
                        <Favorite sx={{ color: '#f44336' }} /> :
                        <FavoriteBorder />
                    }
                </IconButton>

                <Box sx={{ position: 'absolute', top: 20, left: 16, right: 16 }}>
                    <Typography variant="h6" fontWeight={700} sx={{ mb: 1, color: '#2d2d2dff' }}>
                        {car.name}
                    </Typography>
                </Box>
            </Box>

            <CardContent sx={{ p: 3, pt: 2 }}>
                <Box display="flex" alignItems="center" gap={2} mb={2.5}>
                    <Box display="flex" alignItems="center" gap={0.5}>
                        <Person sx={{ fontSize: 16, color: '#ffffffff' }} />
                        <Typography variant="body2" sx={{ color: '#ffffffff' }}>
                            {car.seats}
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={0.5}>
                        <GiCarDoor />
                        <Typography variant="body2" sx={{ color: '#ffffffff' }}>
                            {car.doors}
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={0.5}>
                        <Speed sx={{ fontSize: 16, color: '#ffffffff' }} />
                        <Typography variant="body2" sx={{ color: '#ffffffff', textTransform: 'uppercase' }}>
                            {car.transmission}
                        </Typography>
                    </Box>
                </Box>

                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Box>
                        <Typography variant="h5" fontWeight={700}>
                            {formatVND(car.price)}
                            <Typography
                                component="span"
                                sx={{
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    ml: 0.5,
                                    color: '#ccc'
                                }}
                            >
                                {car.period}
                            </Typography>
                        </Typography>
                    </Box>
                    <Button
                        variant="outlined"
                        onClick={() => onViewDetails(car.id)}
                        sx={{
                            color: 'white',
                            backgroundColor: 'transparent',
                            borderColor: 'white',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            },
                            fontSize: { xs: '0.7rem', md: '0.9rem' },
                            px: { xs: 1.5, md: 4 },
                            py: { xs: 0.5, md: 0.85 },
                            textTransform: 'none'
                        }}
                    >
                        Xem chi tiết
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default CarCard;