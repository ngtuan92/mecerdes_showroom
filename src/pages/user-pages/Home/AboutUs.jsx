import React from 'react'
import { Box, Button, Card, CardMedia, Container, Grid, Paper, Typography } from '@mui/material'

const AbouUs = () => {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={2}>
                <Box sx={{ py: { xs: 6, md: 8 } }}>
                    <Grid container spacing={20}>
                        <Grid item xs={12} md={6}>
                            <Card sx={{ maxWidth: 650, height: 600 }}>
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image="/proj_images/aboutus/intro.avif"
                                    alt="green iguana"
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '2.5rem' } }}>
                                VỊ THẾ VƯỢT THỜI GIAN TỪ 1886.
                            </Typography>
                            <Typography variant="body1" gutterBottom sx={{ fontSize: '1.1rem', color: '#1d1d1dff', mt: 3 }}>
                                Định nghĩa về xe luôn thay đổi, nhưng đẳng cấp thì không. Khi đó là Mercedes-Benz.
                            </Typography>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    maxWidth: 300,
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1.3rem',
                                    marginTop: 5,
                                    fontWeight: 600,
                                    borderRadius: 2,
                                    textTransform: 'none',
                                    backgroundColor: '#000000ff',
                                    '&:hover': {
                                        backgroundColor: '#ffffffff',
                                        color: '#000000ff',
                                    }
                                }}
                            >
                                Tìm hiểu thêm
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Container >
    )
}

export default AbouUs
