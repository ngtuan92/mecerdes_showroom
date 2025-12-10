import React, { use, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Fade from '@mui/material/Fade';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from "@mui/material";
import { useCart } from '../../hooks/useCart';

const Header = () => {
  const navigate = useNavigate();
  const menus = [
    { label: "Các mẫu xe", path: "/danh-sach-san-pham" },
    { label: "Dịch vụ", path: "/dich-vu" },
    { label: "Về chúng tôi", path: "/ve-chung-toi" }
  ];
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState(null);

  const { getCartCount } = useCart();
  const countCart = getCartCount();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  }, []);

  const isLoggedIn = !!user;

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload();
  };




  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#000000",
        boxShadow: "none",
        height: "100px",
      }}
    >
      <Toolbar
        sx={{
          height: "100%",
          px: { xs: 2, md: 15 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: { xs: 2, md: 4 },
            flex: 1,
          }}
        >
          {menus.map((item, index) => (
            <Button
              component={RouterLink}
              to={item.path}
              key={index}
              sx={{
                color: "white",
                fontSize: "16px",
                fontWeight: 400,
                textTransform: "none",
                minWidth: "auto",
                padding: "6px 8px",
                transition: "color 0.2s ease",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#cccccc"
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center"
          }}
        >
          <img
            src="../../../public/proj_images/logo/logo.png"
            alt="Mercedes-Benz Logo"
            onClick={() => navigate('/')}
            style={{
              height: 90,
              width: "auto",
              objectFit: "contain",
              cursor: "pointer"
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            flex: 1,
            justifyContent: "flex-end"
          }}
        >
          <IconButton
            sx={{
              color: "white",
              "&:hover": { color: "#cccccc" }
            }}
          >
            <SearchIcon />
          </IconButton>

          {!isLoggedIn ? (
            <>
              <Box
                onClick={() => navigate('/dang-nhap')}
                sx={{
                  color: "white",
                  cursor: "pointer",
                  px: 1,
                  ml: 1,
                  "&:hover": { color: "#ccc" },
                }}
              >
                Đăng nhập
              </Box>
              <Box
                onClick={() => navigate('/dang-ky')}
                sx={{
                  color: "white",
                  px: 1,
                  ml: 1,
                  cursor: "pointer",
                  "&:hover": { color: "#ccc" },
                }}
              >
                Đăng ký
              </Box>
              <IconButton
                onClick={() => navigate('/gio-hang')}
                sx={{
                  color: "white",
                  "&:hover": { color: "#cccccc" }
                }}
              >
                <Badge
                  badgeContent={countCart}
                  sx={{
                    '& .MuiBadge-badge': {
                      backgroundColor: '#ee4d2d',
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '0.7rem',
                    }
                  }}
                >
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </>
          ) : (
            <>
              <IconButton
                onClick={handleMenuOpen}
                sx={{
                  padding: "4px 8px",
                  borderRadius: "4px",
                  transition: "background-color 0.2s ease",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                  "&.MuiIconButton-root": {
                    "&:focus": {
                      outline: "none"
                    }
                  }
                }}
              >


                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Avatar
                    src={user.avatar}
                    sx={{
                      width: 32,
                      height: 32,
                      backgroundColor: "#333",
                      color: "white"
                    }}
                  />
                  <Typography sx={{ color: "white", fontWeight: 500 }}>
                    {user.full_name}
                  </Typography>
                  <ArrowDropDownIcon sx={{ color: "white" }} />
                </Box>
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                TransitionComponent={Fade}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                PaperProps={{
                  sx: {
                    borderRadius: 3,
                    minWidth: 150,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                    background: "linear-gradient(135deg, #fff 80%, #e3e3e3 100%)",
                    p: 1,
                  }
                }}
              >
                <MenuItem
                  onClick={() => { handleMenuClose(); window.location.href = "/profile"; }}
                  sx={{
                    borderRadius: 2,
                    py: 1.5,
                    px: 2,
                    fontWeight: 500,
                    fontSize: 16,
                    color: "#222",
                    gap: 1.5,
                    transition: "background 0.2s",
                    "&:hover": {
                      background: "linear-gradient(90deg, #e3e3e3 60%, #fff 100%)",
                      color: "#1976d2"
                    }
                  }}
                >

                  Hồ sơ cá nhân
                </MenuItem>
                <MenuItem
                  onClick={handleLogout}
                  sx={{
                    borderRadius: 2,
                    py: 1.5,
                    px: 2,
                    fontWeight: 500,
                    fontSize: 16,
                    color: "#222",
                    gap: 1.5,
                    transition: "background 0.2s",
                    "&:hover": {
                      background: "linear-gradient(90deg, #ffeaea 60%, #fff 100%)",
                      color: "#d32f2f"
                    }
                  }}
                >

                  Đăng xuất
                </MenuItem>
              </Menu>
              <IconButton
                onClick={() => navigate('/gio-hang')}
                sx={{
                  color: "white",
                  "&:hover": { color: "#cccccc" }
                }}
              >
                <Badge
                  badgeContent={countCart}
                  sx={{
                    '& .MuiBadge-badge': {
                      backgroundColor: '#ee4d2d',
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '0.7rem',
                    }
                  }}
                >
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
