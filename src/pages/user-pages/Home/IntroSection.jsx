import React from 'react';
import {
    Container,
    Grid,
    Typography,
    Box,
    Button,
    useTheme
} from '@mui/material';
import {
    EmojiEvents,
    Group,
    DirectionsCar,
    LocationOn,
    VerifiedUser,
    Support,
    Send
} from '@mui/icons-material';

const IntroSection = () => {
    const theme = useTheme();

    return (
        <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#f8f9fa' }}>
            <Container maxWidth="lg">
                <Grid container spacing={8}>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Typography
                                variant="h3"
                                component="h2"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: { xs: '2.5rem', md: '3rem' },
                                    mb: 3,
                                    lineHeight: 1.2
                                }}
                            >
                                Về Chúng Tôi
                            </Typography>

                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: '1.1rem',
                                    lineHeight: 1.6,
                                    mb: 4
                                }}
                            >
                                Đối tác tin cậy trong hành trình sở hữu chiếc xe mơ ước của bạn
                            </Typography>

                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                                    mb: 3,
                                    lineHeight: 1.3
                                }}
                            >
                                CarShow - Nơi Khởi Đầu Những Hành Trình
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    lineHeight: 1.8,
                                    fontSize: '1rem',
                                    mb: 3
                                }}
                            >
                                Với hơn 15 năm kinh nghiệm trong ngành ô tô, chúng tôi tự hào là đối tác tin cậy của hàng nghìn gia đình Việt Nam.
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    lineHeight: 1.8,
                                    fontSize: '1rem',
                                    mb: 4
                                }}
                            >
                                Không chỉ là nơi mua bán xe, chúng tôi cam kết mang đến trải nghiệm hoàn hảo với dịch vụ chuyên nghiệp toàn quốc.
                            </Typography>

                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1rem',
                                    borderRadius: 1,
                                    textTransform: 'none',
                                    backgroundColor: theme.palette.primary.main
                                }}
                            >
                                Tìm hiểu thêm
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <Box sx={{ textAlign: 'center', py: 3 }}>
                                    <EmojiEvents sx={{ fontSize: 50, mb: 2 }} />
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontWeight: 'bold',
                                            fontSize: '2.5rem',
                                            mb: 1
                                        }}
                                    >
                                        15+
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{ fontWeight: 500 }}
                                    >
                                        Năm kinh nghiệm
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Box sx={{ textAlign: 'center', py: 3 }}>
                                    <Group sx={{ fontSize: 50, mb: 2 }} />
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontWeight: 'bold',
                                            fontSize: '2.5rem',
                                            mb: 1
                                        }}
                                    >
                                        10,000+
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{ fontWeight: 500 }}
                                    >
                                        Khách hàng tin tưởng
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Box sx={{ textAlign: 'center', py: 3 }}>
                                    <DirectionsCar sx={{ fontSize: 50, mb: 2 }} />
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontWeight: 'bold',
                                            fontSize: '2.5rem',
                                            mb: 1
                                        }}
                                    >
                                        5,000+
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{fontWeight: 500 }}
                                    >
                                        Xe đã giao thành công
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Box sx={{ textAlign: 'center', py: 3 }}>
                                    <LocationOn sx={{ fontSize: 50, mb: 2 }} />
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontWeight: 'bold',
                                            fontSize: '2.5rem',
                                            mb: 1
                                        }}
                                    >
                                        50+
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{ fontWeight: 500 }}
                                    >
                                        Showroom toàn quốc
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Box mt={8}>
                    <Typography
                        variant="h4"
                        textAlign="center"
                        sx={{
                            fontWeight: 'bold',
                            mb: 6,
                            fontSize: { xs: '2rem', md: '2.5rem' }
                        }}
                    >
                        Tại Sao Chọn Chúng Tôi?
                    </Typography>

                    <Grid container spacing={6}>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                                <Box
                                    sx={{
                                        flexShrink: 0,
                                        width: 60,
                                        height: 60,
                                        borderRadius: '50%',
                                        backgroundColor: '#2c3e50',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <VerifiedUser sx={{ color: 'white', fontSize: 30 }} />
                                </Box>
                                <Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 'bold',
                                            mb: 2,
                                            fontSize: '1.3rem'
                                        }}
                                    >
                                        Uy tín & Chất lượng
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{  lineHeight: 1.7 }}
                                    >
                                        Cam kết 100% xe chính hãng, đảm bảo chất lượng và nguồn gốc rõ ràng.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                                <Box
                                    sx={{
                                        flexShrink: 0,
                                        width: 60,
                                        height: 60,
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Support sx={{ color: 'white', fontSize: 30 }} />
                                </Box>
                                <Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 'bold',
                                            mb: 2,
                                            fontSize: '1.3rem'
                                        }}
                                    >
                                        Hỗ trợ toàn diện
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{lineHeight: 1.7 }}
                                    >
                                        Tư vấn 24/7, hỗ trợ tài chính và dịch vụ hậu mãi trọn đời.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                                <Box
                                    sx={{
                                        flexShrink: 0,
                                        width: 60,
                                        height: 60,
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Send sx={{ color: 'white', fontSize: 30 }} />
                                </Box>
                                <Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 'bold',
                                            mb: 2,
                                            fontSize: '1.3rem'
                                        }}
                                    >
                                        Quy trình minh bạch
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{lineHeight: 1.7 }}
                                    >
                                        Thủ tục nhanh gọn, giá cả minh bạch, không phí ẩn.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default IntroSection;
