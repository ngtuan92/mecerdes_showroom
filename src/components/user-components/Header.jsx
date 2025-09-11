// src/components/Header.jsx
import React from "react";
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

const Header = () => {
  const menus = ["Các mẫu xe", "Mua", "Dịch vụ", "Thương hiệu"];
  const [language, setLanguage] = React.useState("vi");

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
            style={{ 
              height: 90, 
              width: "auto",
              objectFit: "contain" 
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

          <Box 
            sx={{ 
              display: "flex", 
              alignItems: "center", 
              gap: 1,
              cursor: "pointer",
              padding: "4px 8px",
              borderRadius: "4px",
              transition: "background-color 0.2s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              }
            }}
          >
            <Avatar
              sx={{
                width: 32,
                height: 32,
                backgroundColor: "#333",
                color: "white"
              }}
            >
              <PersonIcon fontSize="small" />
            </Avatar>
            <Typography
              variant="body2"
              sx={{
                color: "white",
                display: { xs: "none", md: "block" }
              }}
            >
              Tên User
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
