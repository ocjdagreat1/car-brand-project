// src/components/PrimarySearchAppBar.jsx
import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  MenuItem,
  Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

import Logo from "../assets/images/logo.svg";
import FlagUK from "../assets/images/gb.svg";
import FlagSE from "../assets/images/sweden-flag.svg";
import FlagGE from "../assets/images/de.svg";
import FlagJP from "../assets/images/jp.svg";
import FlagIT from "../assets/images/it.svg";
import FlagFR from "../assets/images/fr.svg";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "#0b1220",
  border: `1px solid ${theme.palette.mode === "light" ? "#e5e7eb" : "rgba(255,255,255,0.06)"}`,
  width: "100%",
  maxWidth: 500,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  color: theme.palette.mode === "light" ? "#6b7280" : "#9aa4b2",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.text.primary,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

export default function PrimarySearchAppBar() {
  const location = useLocation();
  const { mode, toggleTheme } = React.useContext(ThemeContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [accountAnchorEl, setAccountAnchorEl] = React.useState(null);
  const [langAnchorEl, setLangAnchorEl] = React.useState(null);

  const [selectedLang, setSelectedLang] = React.useState({ name: "English", flag: FlagUK });
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const { pathname } = location;
    const excludedPaths = ["/", "/login", "/register"];
    if (!excludedPaths.includes(pathname)) {
      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser && storedUser !== "undefined" && storedUser !== "null") {
          setUser(JSON.parse(storedUser));
        }
      } catch (err) {
        console.error("Failed to parse user from localStorage:", err);
      }
    } else {
      setUser(null);
    }
  }, [location.pathname]);

  const handleAccountOpen = (e) => setAccountAnchorEl(e.currentTarget);
  const handleAccountClose = () => setAccountAnchorEl(null);

  const handleLangOpen = (e) => setLangAnchorEl(e.currentTarget);
  const handleLangClose = () => setLangAnchorEl(null);
  const handleLanguageChange = (lang) => {
    setSelectedLang(lang);
    handleLangClose();
  };

  const handleMobileMenuOpen = (e) => setMobileMoreAnchorEl(e.currentTarget);
  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const mobileMenuId = "primary-search-mobile-menu";
  const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl} open={Boolean(mobileMoreAnchorEl)} onClose={handleMobileMenuClose}>
      
      
      {!user ? (
        <>
          <MenuItem component={Link} to="/login" onClick={handleMobileMenuClose}>
            <LoginIcon sx={{ mr: 1 }} /> Login
          </MenuItem>
          <MenuItem component={Link} to="/register" onClick={handleMobileMenuClose}>
            <PersonAddAltIcon sx={{ mr: 1 }} /> Register
          </MenuItem>
        </>
      ) : (
        <MenuItem
          onClick={() => {
            handleLogout();
            handleMobileMenuClose();
          }}
        >
          <LoginIcon sx={{ mr: 1, color: "red" }} /> Logout
        </MenuItem>
      )}
      <MenuItem onClick={handleLangOpen}>
        <Box component="img" src={selectedLang.flag} alt="flag" sx={{ width: 24, height: 16, mr: 1 }} />
        {selectedLang.name}
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="primary" elevation={1}>
        <Toolbar sx={{ minHeight: 64, display: "flex", justifyContent: "space-between" }}>
          {/* Left: Menu + Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton size="large" edge="start" color="inherit">
              <MenuIcon />
            </IconButton>
            <Box
              component="img"
              src={Logo}
              alt="Logo"
              sx={{
                height: 30,
                filter: mode === "dark" ? "brightness(100%)" : "none",
                cursor: "pointer",
                display: { xs: "none", sm: "block" },
              }}
            />
          </Box>

          {/* Center: Search */}
          <Box sx={{ flexGrow: 1, mx: 2, display: { xs: "none", md: "flex" } }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
            </Search>
          </Box>

          {/* Right: Toggle, Account, Language */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {/* Dark Mode Toggle */}
            <Box
              onClick={toggleTheme}
              sx={{
                width: 56,
                height: 30,
                borderRadius: 20,
                backgroundColor: mode === "dark" ? "#fff" : "#2f3542",
                display: { xs: "flex" }, // always visible
                alignItems: "center",
                padding: "4px",
                cursor: "pointer",
                position: "relative",
                border: mode === "dark" ? "1px solid rgba(0,0,0,0.08)" : "1px solid rgba(255,255,255,0.06)",
                transition: "background-color 300ms ease",
              }}
            >
              <Brightness4Icon
                sx={{ position: "absolute", left: 8, fontSize: 16, color: mode === "dark" ? "#000" : "#fff" }}
              />
              <Brightness7Icon
                sx={{ position: "absolute", right: 8, fontSize: 16, color: mode === "dark" ? "#000" : "#FFD54F" }}
              />
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  backgroundColor: mode === "dark" ? "#000" : "#fff",
                  position: "absolute",
                  left: mode === "dark" ? 4 : 32,
                  transition: "left 300ms cubic-bezier(.2,.8,.2,1), background-color 300ms ease",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                }}
              />
            </Box>

            {/* Account */}
            <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}>
              <IconButton color="inherit" onClick={handleAccountOpen} sx={{ display: "flex", alignItems: "center", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 1, padding: "2px 8px" }}>
                <Typography variant="body2" sx={{ mr: 0.5 }}>Account</Typography>
                <ArrowDropDownIcon />
              </IconButton>
              <Menu anchorEl={accountAnchorEl} open={Boolean(accountAnchorEl)} onClose={handleAccountClose} PaperProps={{ sx: { mt: 1.5 } }}>
                {!user ? (
                  <>
                    <MenuItem component={Link} to="/login" onClick={handleAccountClose}>
                      <LoginIcon sx={{ mr: 1 }} /> Login
                    </MenuItem>
                    <MenuItem component={Link} to="/register" onClick={handleAccountClose}>
                      <PersonAddAltIcon sx={{ mr: 1 }} /> Register
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem>
                      <PersonAddAltIcon sx={{ mr: 1 }} /> {`Welcome, ${user.firstName || "User"}`}
                    </MenuItem>
                    {location.pathname.startsWith("/dashboard") && (
                      <MenuItem onClick={() => { handleLogout(); handleAccountClose(); }}>
                        <LoginIcon sx={{ mr: 1, color: "red" }} /> Logout
                      </MenuItem>
                    )}
                  </>
                )}
              </Menu>
            </Box>

            {/* Language */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton color="inherit" onClick={handleLangOpen} sx={{ display: "flex", alignItems: "center", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 1, padding: "2px 8px", ml: 1 }}>
                <Box component="img" src={selectedLang.flag} alt="flag" sx={{ width: 24, height: 16, mr: 1 }} />
                <Typography variant="body2">{selectedLang.name}</Typography>
                <ArrowDropDownIcon />
              </IconButton>
              <Menu anchorEl={langAnchorEl} open={Boolean(langAnchorEl)} onClose={handleLangClose}>
                <Typography sx={{ px: 2, pt: 1, fontWeight: "bold", fontSize: 13 }}>Language</Typography>
                {[{ name: "Svenska", flag: FlagSE }, { name: "English", flag: FlagUK }, { name: "German", flag: FlagGE }, { name: "France", flag: FlagFR }, { name: "Italia", flag: FlagIT }, { name: "Japan", flag: FlagJP }].map((lang) => (
                  <MenuItem key={lang.name} onClick={() => handleLanguageChange(lang)}>
                    <Box component="img" src={lang.flag} alt={lang.name} sx={{ width: 24, height: 16, mr: 1 }} />
                    {lang.name}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Mobile More Icon */}
            <Box sx={{ display: { xs: "flex", sm: "none" } }}>
              <IconButton size="large" color="inherit" onClick={handleMobileMenuOpen}>
                <MoreIcon />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}
