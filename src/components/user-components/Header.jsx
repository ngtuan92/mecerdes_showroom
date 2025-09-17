import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import LanguageIcon from "@mui/icons-material/Language";
import { Link as RouterLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import Fade from '@mui/material/Fade';

const Header = () => {
  const menus = ["Các mẫu xe", "Mua", "Dịch vụ", "Thương hiệu"];
  const [language, setLanguage] = React.useState("vi");
  const [anchorEl, setAnchorEl] = useState(null);

  const [user, setUser] = useState(null);

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

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#000000",
        boxShadow: "none",
        height: "100px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          px: { xs: 2, md: 15 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: { xs: 2, md: 4 },
            flex: 1,
            justifyContent: "flex-start"
          }}
        >
          {menus.map((item, index) => (
            <Button
              key={index}
              sx={{
                color: "white",
                fontSize: "18px",
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
              {item}
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
            src="../../../public/proj_images/logo/logo.jpg"
            alt="Mercedes-Benz Logo"
            onClick={() => window.location.href = '/'}
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

          <FormControl size="small">
            <Select
              value={language}
              onChange={handleLanguageChange}
              sx={{
                color: "white",
                fontSize: "14px",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none"
                },
                "& .MuiSvgIcon-root": {
                  color: "white"
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "none"
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #cccccc"
                }
              }}
            >
              <MenuItem value="vi">
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <LanguageIcon fontSize="small" />
                  <Typography variant="body2">VI</Typography>
                </Box>
              </MenuItem>
              <MenuItem value="en">
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <LanguageIcon fontSize="small" />
                  <Typography variant="body2">EN</Typography>
                </Box>
              </MenuItem>
            </Select>
          </FormControl>

          {!isLoggedIn ? (
            <>
              <Button
                component={RouterLink}
                to="/login"
                sx={{
                  color: "white",
                  border: "1px solid #fff",
                  borderRadius: "20px",
                  px: 2,
                  ml: 1,
                  "&:hover": { backgroundColor: "#222" }
                }}
              >
                Đăng nhập
              </Button>
              <Button
                component={RouterLink}
                to="/signup"
                sx={{
                  color: "white",
                  border: "1px solid #fff",
                  borderRadius: "20px",
                  px: 2,
                  ml: 1,
                  "&:hover": { backgroundColor: "#222" }
                }}
              >
                Đăng ký
              </Button>
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
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
