import {
    Box,
    Container,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Chip,
    IconButton,
    Paper,
    Stack,
    Divider,
    TextField,
    MenuItem,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Badge
} from '@mui/material'
import {
    FilterList,
    ExpandMore,
    Person,
    Settings,
    Speed,
    Favorite,
    FavoriteBorder,
    Sort,
    LocalGasStation,
    DirectionsCar
} from '@mui/icons-material'
import React, { useState } from 'react'
import MainLayout from '../../../layouts/user-layouts/MainLayout'
import { GiCarDoor } from "react-icons/gi";


const ListCars = () => {
    const [sortBy, setSortBy] = useState('most-popular')
    const [favorites, setFavorites] = useState(new Set())
    const [selectedPriceRanges, setSelectedPriceRanges] = useState(new Set(['€50 - €100']))
    const [selectedCategory, setSelectedCategory] = useState('SUV')

    const cars = [
        {
            id: 1,
            brand: 'BMW',
            model: 'M440 Coupe',
            image: '/public/proj_images/mecerdes-benz/sedan/c-class.png',
            price: 159,
            period: 'per day',
            totalPrice: '1427.84',
            seats: 2,
            doors: 1,
            transmission: 'Automatic',
            tags: ['Or Similar Count', 'Advice of the Day'],
            category: 'Coupe',
            fuelType: 'Petrol',
            year: 2023,
            mileage: '15,000 km'
        },
        {
            id: 2,
            brand: 'VW',
            model: 'T-Roc',
            image: '',
            price: 58,
            period: 'per day',
            totalPrice: '792.84',
            seats: 5,
            doors: 3,
            transmission: 'Manual',
            tags: ['Or Similar Day', 'Easy Bird Special'],
            category: 'SUV',
            fuelType: 'Diesel',
            year: 2022,
            mileage: '25,000 km'
        },
        {
            id: 3,
            brand: 'BMW',
            model: 'X3 30',
            image: '',
            price: 70,
            period: 'per day',
            totalPrice: '1002.29',
            seats: 4,
            doors: 0,
            transmission: 'Automatic',
            tags: ['Or Similar Sun', 'Easy Bird Special'],
            category: 'SUV',
            fuelType: 'Hybrid',
            year: 2023,
            mileage: '18,000 km'
        },
        {
            id: 4,
            brand: 'BMW',
            model: 'X3 30',
            image: '',
            price: 70,
            period: 'per day',
            totalPrice: '1002.29',
            seats: 4,
            doors: 0,
            transmission: 'Automatic',
            tags: ['Or Similar Sun', 'Easy Bird Special'],
            category: 'SUV',
            fuelType: 'Electric',
            year: 2024,
            mileage: '5,000 km'
        },
        {
            id: 5,
            brand: 'BMW',
            model: '520',
            image: '',
            price: 85,
            period: 'per day',
            totalPrice: '1200.00',
            seats: 5,
            doors: 4,
            transmission: 'Automatic',
            tags: ['Or Similar Sun', 'Advice of the Day'],
            category: 'Limousine',
            fuelType: 'Petrol',
            year: 2023,
            mileage: '12,000 km'
        },
        {
            id: 6,
            brand: 'MERCEDES-AMG',
            model: 'GT 63 S',
            image: '',
            price: 220,
            period: 'per day',
            totalPrice: '3500.00',
            seats: 2,
            doors: 2,
            transmission: 'Automatic',
            tags: ['Or Similar Sun', 'Easy Bird Special'],
            category: 'Coupe',
            fuelType: 'Petrol',
            year: 2024,
            mileage: '2,000 km'
        },
        {
            id: 7,
            brand: 'AUDI',
            model: 'A4 Avant',
            image: '',
            price: 95,
            period: 'per day',
            totalPrice: '1330.00',
            seats: 5,
            doors: 5,
            transmission: 'Automatic',
            tags: ['Or Similar Count', 'Easy Bird Special'],
            category: 'Family Car',
            fuelType: 'Hybrid',
            year: 2023,
            mileage: '20,000 km'
        },
        {
            id: 8,
            brand: 'TESLA',
            model: 'Model 3',
            image: '',
            price: 110,
            period: 'per day',
            totalPrice: '1540.00',
            seats: 5,
            doors: 4,
            transmission: 'Automatic',
            tags: ['Or Similar Sun', 'Advice of the Day'],
            category: 'Electric vehicle',
            fuelType: 'Electric',
            year: 2024,
            mileage: '8,000 km'
        },
        {
            id: 9,
            brand: 'BMW',
            model: 'Z4 Roadster',
            image: '',
            price: 180,
            period: 'per day',
            totalPrice: '2520.00',
            seats: 2,
            doors: 2,
            transmission: 'Manual',
            tags: ['Or Similar Count', 'Easy Bird Special'],
            category: 'Cabriolet',
            fuelType: 'Petrol',
            year: 2023,
            mileage: '10,000 km'
        }
    ]

    const categories = [
        { name: 'Limousine', count: 0 },
        { name: 'SUV', count: 6 },
        { name: 'Coupe', count: 0 },
        { name: 'Xe mui trần', count: 0 },
        { name: 'Xe gia đình', count: 0 },
        { name: 'Xe điện', count: 0 }
    ]

    const priceRanges = [
        '< 1.000.000.000₫',
        '1.000.000.000₫ - 1.500.000.000₫',
        '1.500.000.000₫ - 2.000.000.000₫',
        '2.000.000.000₫ - 3.000.000.000₫',
        '3.000.000.000₫ - 5.000.000.000₫',
        '5.000.000.000₫ - 8.000.000.000₫',
        '8.000.000.000₫ - 12.000.000.000₫',
        '> 12.000.000.000₫'
    ]

    const gearShifts = ['Số tự động', 'Số tay']
    const fuelTypes = ['Xăng', 'Diesel', 'Hybrid', 'Điện']

    const toggleFavorite = (carId) => {
        const newFavorites = new Set(favorites)
        if (newFavorites.has(carId)) {
            newFavorites.delete(carId)
        } else {
            newFavorites.add(carId)
        }
        setFavorites(newFavorites)
    }

    const handlePriceRangeChange = (range) => {
        const newRanges = new Set(selectedPriceRanges)
        if (newRanges.has(range)) {
            newRanges.delete(range)
        } else {
            newRanges.add(range)
        }
        setSelectedPriceRanges(newRanges)
    }

    return (
        <MainLayout>
            <Box sx={{ py: { xs: 4, md: 6 }, backgroundColor: '#232323ff', minHeight: '100vh' }}>
                <Container maxWidth="">
                    <Grid container spacing={3}>
                        <Grid size={3} item xs={12} md={3}>
                            <Paper
                                sx={{
                                    p: 3,
                                    backgroundColor: '#1a1a1a',
                                    color: 'white',
                                    borderRadius: 2,
                                    height: 'fit-content',
                                    position: 'sticky',
                                    top: 20
                                }}
                            >
                                <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
                                    <Typography variant="h6" fontWeight={700} sx={{ color: 'white' }}>
                                        BỘ LỌC
                                    </Typography>
                                    <Button
                                        size="small"
                                        sx={{
                                            color: '#a3a3a3ff',
                                            textTransform: 'none',
                                            fontSize: '17px',
                                            '&:hover': {
                                                backgroundColor: 'rgba(79, 195, 247, 0.1)'
                                            }
                                        }}
                                        onClick={() => {
                                            setSelectedPriceRanges(new Set())
                                            setSelectedCategory('')
                                        }}
                                    >
                                        Xóa bộ lọc
                                    </Button>
                                </Box>

                                <Accordion
                                    defaultExpanded
                                    sx={{
                                        backgroundColor: 'transparent',
                                        boxShadow: 'none',
                                        '&:before': { display: 'none' }
                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMore sx={{ color: 'white' }} />}
                                        sx={{ p: 0, minHeight: 'unset' }}
                                    >
                                        <Typography fontWeight={600} sx={{ color: 'white', fontSize: '14px' }}>
                                            KHUNG GIÁ
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ p: 0, pt: 2 }}>
                                        <FormGroup>
                                            {priceRanges.map((range) => (
                                                <FormControlLabel
                                                    key={range}
                                                    control={
                                                        <Checkbox
                                                            checked={selectedPriceRanges.has(range)}
                                                            onChange={() => handlePriceRangeChange(range)}
                                                            sx={{
                                                                color: '#666',
                                                                '&.Mui-checked': { color: '#ffffffff' }
                                                            }}
                                                            size="small"
                                                        />
                                                    }
                                                    label={
                                                        <Typography sx={{ color: '#ccc', fontSize: '14px' }}>
                                                            {range}
                                                        </Typography>
                                                    }
                                                />
                                            ))}
                                        </FormGroup>
                                    </AccordionDetails>
                                </Accordion>

                                <Divider sx={{ my: 2, borderColor: '#333' }} />

                                <Accordion
                                    defaultExpanded
                                    sx={{
                                        backgroundColor: 'transparent',
                                        boxShadow: 'none',
                                        '&:before': { display: 'none' }
                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMore sx={{ color: 'white' }} />}
                                        sx={{ p: 0, minHeight: 'unset' }}
                                    >
                                        <Typography fontWeight={600} sx={{ color: 'white', fontSize: '14px' }}>
                                            LOẠI XE
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ p: 0, pt: 2 }}>
                                        <Stack spacing={1.5}>
                                            {categories.map((category) => (
                                                <Box
                                                    key={category.name}
                                                    display="flex"
                                                    alignItems="center"
                                                    sx={{
                                                        cursor: 'pointer',
                                                        '&:hover': {
                                                            '& .MuiTypography-root': {
                                                                color: '#ffffffff'
                                                            }
                                                        }
                                                    }}
                                                    onClick={() => setSelectedCategory(category.name)}
                                                >
                                                    <DirectionsCar sx={{
                                                        fontSize: 16,
                                                        color: selectedCategory === category.name ? '#f9f9f9ff' : '#666',
                                                        mr: 2
                                                    }} />
                                                    <Typography sx={{
                                                        color: selectedCategory === category.name ? '#f1f1f1ff' : '#ccc',
                                                        fontSize: '14px',
                                                        flex: 1
                                                    }}>
                                                        {category.name}
                                                    </Typography>
                                                    {category.count > 0 && (
                                                        <Chip
                                                            label={category.count}
                                                            size="small"
                                                            sx={{
                                                                backgroundColor: '#333',
                                                                color: '#ffffffff',
                                                                height: 20,
                                                                fontSize: '11px',
                                                                minWidth: 24
                                                            }}
                                                        />
                                                    )}
                                                </Box>
                                            ))}
                                        </Stack>
                                    </AccordionDetails>
                                </Accordion>

                                <Divider sx={{ my: 2, borderColor: '#333' }} />

                                <Accordion
                                    sx={{
                                        backgroundColor: 'transparent',
                                        boxShadow: 'none',
                                        '&:before': { display: 'none' }
                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMore sx={{ color: 'white' }} />}
                                        sx={{ p: 0, minHeight: 'unset' }}
                                    >
                                        <Typography fontWeight={600} sx={{ color: 'white', fontSize: '14px' }}>
                                            CẦU SỐ
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ p: 0, pt: 2 }}>
                                        <Stack spacing={1}>
                                            {gearShifts.map((gear) => (
                                                <FormControlLabel
                                                    key={gear}
                                                    control={
                                                        <Checkbox
                                                            sx={{
                                                                color: '#666',
                                                                '&.Mui-checked': { color: '#4fc3f7' }
                                                            }}
                                                            size="small"
                                                        />
                                                    }
                                                    label={
                                                        <Typography sx={{ color: '#ccc', fontSize: '14px' }}>
                                                            {gear}
                                                        </Typography>
                                                    }
                                                />
                                            ))}
                                        </Stack>
                                    </AccordionDetails>
                                </Accordion>

                                <Divider sx={{ my: 2, borderColor: '#333' }} />

                                <Accordion
                                    sx={{
                                        backgroundColor: 'transparent',
                                        boxShadow: 'none',
                                        '&:before': { display: 'none' }
                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMore sx={{ color: 'white' }} />}
                                        sx={{ p: 0, minHeight: 'unset' }}
                                    >
                                        <Typography fontWeight={600} sx={{ color: 'white', fontSize: '14px' }}>
                                            LOẠI NHIÊN LIỆU
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ p: 0, pt: 2 }}>
                                        <Stack spacing={1}>
                                            {fuelTypes.map((fuel) => (
                                                <FormControlLabel
                                                    key={fuel}
                                                    control={
                                                        <Checkbox
                                                            sx={{
                                                                color: '#666',
                                                                '&.Mui-checked': { color: '#4fc3f7' }
                                                            }}
                                                            size="small"
                                                        />
                                                    }
                                                    label={
                                                        <Typography sx={{ color: '#ccc', fontSize: '14px' }}>
                                                            {fuel}
                                                        </Typography>
                                                    }
                                                />
                                            ))}
                                        </Stack>
                                    </AccordionDetails>
                                </Accordion>
                            </Paper>
                        </Grid>

                        <Grid size={9} item xs={12} md={9}>
                            <Box display="flex" alignItems="center" justifyContent="space-between" mb={4} >
                                <Box>
                                    <Typography variant="h4" fontWeight={700} sx={{ color: '#eeeeeeff' }}>
                                        Lựa chọn xe của bạn
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: '#a3a3a3ff',
                                            fontSize: '16px',
                                            fontWeight: 400,
                                            mt: 1
                                        }}
                                    >
                                        tổng số xe được tìm thấy: {cars.length}
                                    </Typography>
                                </Box>

                                <Box display="flex" alignItems="center" gap={2}>
                                    <Typography sx={{ color: '#a3a3a3ff', fontSize: '17px', fontWeight: 500 }}>
                                        Xếp theo:
                                    </Typography>
                                    <TextField
                                        select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        size="small"
                                        sx={{
                                            width: 250,
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: 2,
                                                color: '#ffffffff',
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: '#a3a3a3ff',
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: '#fff',
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: '#fff',
                                                }
                                            },
                                            '& .MuiSvgIcon-root': {
                                                color: '#edececff'
                                            }
                                        }}
                                    >
                                        <MenuItem value="most-popular">XE PHỔ BIẾN NHẤT</MenuItem>
                                        <MenuItem value="price-low">Giá: Thấp đến Cao</MenuItem>
                                        <MenuItem value="price-high">Giá: Cao đến Thấp</MenuItem>
                                        <MenuItem value="newest">Mới Nhất</MenuItem>
                                    </TextField>
                                </Box>
                            </Box>

                            <Grid container spacing={3} sx={{ marginLeft: { xs: 1, md: 2 } }}>
                                {cars.map((car) => (
                                    <Grid item xs={12} sm={6} md={3} key={car.id}>
                                        <Card
                                            sx={{
                                                width: 439,
                                                height: 500,
                                                borderRadius: 3,
                                                backgroundColor: '#2a2a2a',
                                                color: 'white',
                                                transition: 'all 0.3s ease',
                                                overflow: 'hidden',
                                                flexDirection: 'column',
                                                '&:hover': {
                                                    transform: 'translateY(-6px)',
                                                    boxShadow: '0 16px 32px rgba(0,0,0,0.4)'
                                                }
                                            }}
                                        >
                                            <Box sx={{ position: 'relative', backgroundColor: '#404040', p: 2 }}>
                                                <CardMedia
                                                    component="img"
                                                    image={car.image}
                                                    alt={`${car.brand} ${car.model}`}
                                                    sx={{
                                                        height: 320,
                                                    }}
                                                />
                                                <IconButton
                                                    onClick={() => toggleFavorite(car.id)}
                                                    sx={{
                                                        position: 'absolute',
                                                        top: 16,
                                                        right: 16,
                                                        backgroundColor: 'rgba(255,255,255,0.9)',
                                                        '&:hover': {
                                                            backgroundColor: 'white',
                                                            transform: 'scale(1.1)'
                                                        }
                                                    }}
                                                    size="small"
                                                >
                                                    {favorites.has(car.id) ?
                                                        <Favorite sx={{ color: '#f44336' }} /> :
                                                        <FavoriteBorder />
                                                    }
                                                </IconButton>

                                                <Box sx={{ position: 'absolute', top: 10, left: 16, right: 16 }}>
                                                    <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
                                                        {car.brand} {car.model}
                                                    </Typography>

                                                </Box>
                                            </Box>

                                            <CardContent sx={{ p: 3 }}>

                                                <Box display="flex" alignItems="center" gap={2} mb={2.5}>
                                                    <Box display="flex" alignItems="center" gap={0.5}>
                                                        <Person sx={{ fontSize: 16, color: '#ffffffff' }} />
                                                        <Typography variant="body2" sx={{ color: '#ffffffff' }}>
                                                            {car.seats}
                                                        </Typography>
                                                    </Box>
                                                    <Box display="flex" alignItems="center" gap={0.5}>
                                                        <GiCarDoor/>
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

                                                {/* Price */}
                                                <Box display="flex" alignItems="center" justifyContent="space-between">
                                                    <Box>
                                                        <Typography variant="h5" fontWeight={700}>
                                                            {car.price}
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
                                                        <Typography variant="body2" sx={{ color: '#999', fontSize: '12px' }}>
                                                            {car.totalPrice} € TOTAL PRICE
                                                        </Typography>
                                                   
                                                    </Box>
                                                    <Button
                                                        variant="contained"
                                                        sx={{
                                                            backgroundColor: '#4fc3f7',
                                                            '&:hover': {
                                                                backgroundColor: '#29b6f6',
                                                                transform: 'scale(1.05)'
                                                            },
                                                            borderRadius: 2,
                                                            px: 3,
                                                            py: 1,
                                                            fontWeight: 600,
                                                            textTransform: 'none'
                                                        }}
                                                    >
                                                        Book
                                                    </Button>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>

                            {/* Load More Button */}
                            <Box display="flex" justifyContent="center" mt={5}>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    sx={{
                                        borderColor: '#1a1a1a',
                                        color: '#1a1a1a',
                                        px: 4,
                                        py: 1.5,
                                        borderRadius: 2,
                                        fontWeight: 600,
                                        textTransform: 'none',
                                        '&:hover': {
                                            backgroundColor: '#1a1a1a',
                                            color: 'white'
                                        }
                                    }}
                                >
                                    Load More Cars
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </MainLayout>
    )
}

export default ListCars
