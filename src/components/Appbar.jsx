import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  MenuItem,
  Menu,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../assets/images/logo.svg';
import FlagUK from '../assets/images/gb.svg';
import FlagSE from '../assets/images/sweden-flag.svg';
import FlagGE from '../assets/images/de.svg';
import FlagJP from '../assets/images/jp.svg';
import FlagIT from '../assets/images/it.svg';
import FlagFR from '../assets/images/fr.svg';

// 🔍 Search styling
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: '#ffa500',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  maxWidth: 500,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    maxwidth: 700,
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  color: 'black',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [accountAnchorEl, setAccountAnchorEl] = React.useState(null);

  const [selectedLang, setSelectedLang] = React.useState({
    name: 'English',
    flag: FlagUK,
  });

  const [user, setUser] = React.useState(null);

React.useEffect(() => {
  const { pathname } = location;

  // list of paths where you DON'T want to load user
  const excludedPaths = ['/', '/login', '/register'];

  const isExcluded = excludedPaths.some(path => pathname === path);

  if (!isExcluded) {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser && storedUser !== 'undefined' && storedUser !== 'null') {
        setUser(JSON.parse(storedUser));
      }
    } catch (err) {
      console.error('Failed to parse user from localStorage:', err);
    }
  } else {
    setUser(null);
  }
}, [location.pathname]);

  // Menu handlers
  const handleLangMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleLangMenuClose = () => setAnchorEl(null);

  const handleAccountMenuOpen = (event) => setAccountAnchorEl(event.currentTarget);
  const handleAccountMenuClose = () => setAccountAnchorEl(null);

  const handleMobileMenuOpen = (event) => setMobileMoreAnchorEl(event.currentTarget);
  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const handleLanguageChange = (lang) => {
    setSelectedLang(lang);
    handleLangMenuClose();
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: '#1c1c1c' }}>
        <Toolbar>
          {/* Menu Icon */}
          <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              component="img"
              src={Logo}
              alt="Logo"
              sx={{
                height: 30,
                transition: 'filter 0.3s ease',
                '&:hover': {
                  filter:
                    'brightness(0) saturate(100%) invert(63%) sepia(98%) saturate(744%) hue-rotate(360deg) brightness(105%) contrast(101%)',
                  cursor: 'pointer',
                },
              }}
            />
          </Box>

          {/* Search Bar */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </Search>

          {/* Spacer */}
          <Box sx={{ flexGrow: 1 }} />

          {/*  Visible Welcome Text */}
          <Typography variant="body2" sx={{ color: 'white', mr: 2 }}>
            {user ? `Welcome, ${user.firstName || 'User'}` : 'Welcome, Guest'}
          </Typography>

          {/* 👇 Account Menu */}
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <IconButton
              color="inherit"
              onClick={handleAccountMenuOpen}
              sx={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: 1,
                padding: '2px 8px',
              }}
            >
              <Typography variant="body2" sx={{ mr: 0.5 }}>
                Account
              </Typography>
              <ArrowDropDownIcon />
            </IconButton>
          </Box>

          
          <Menu
            anchorEl={accountAnchorEl}
            open={Boolean(accountAnchorEl)}
            onClose={handleAccountMenuClose}
            PaperProps={{ sx: { mt: 1.5 } }}
          >
            {!user ? (
              <>
                <MenuItem component={Link} to="/login" onClick={handleAccountMenuClose}>
                  <LoginIcon sx={{ mr: 1 }} /> Login
                </MenuItem>
                <MenuItem component={Link} to="/register" onClick={handleAccountMenuClose}>
                  <PersonAddAltIcon sx={{ mr: 1 }} /> Register
                </MenuItem>
                <MenuItem>
                  <PersonAddAltIcon sx={{ mr: 1 }} />
                  Welcome, Guest
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem>
                  <PersonAddAltIcon sx={{ mr: 1 }} />
                  {`Welcome, ${user.firstName || 'User'}`}
                </MenuItem>

                {/* 👇 Logout only on /dashboard */}
                {location.pathname.startsWith('/dashboard') && (
                  <MenuItem
                    onClick={() => {
                      handleLogout();
                      handleAccountMenuClose();
                    }}
                  >
                    <LoginIcon sx={{ mr: 1, color: 'red' }} />
                    Logout
                  </MenuItem>
                )}
              </>
            )}
          </Menu>

          {/* 🌍 Flag Dropdown */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              onClick={handleLangMenuOpen}
              sx={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: 1,
                padding: '2px 8px',
              }}
            >
              <Box
                component="img"
                src={selectedLang.flag}
                alt={`${selectedLang.name} Flag`}
                sx={{ width: 24, height: 16, mr: 1 }}
              />
              <Typography variant="body2">{selectedLang.name}</Typography>
              <ArrowDropDownIcon />
            </IconButton>
          </Box>

          {/* Flag Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleLangMenuClose}
            PaperProps={{ sx: { mt: 1.5 } }}
          >
            <Typography sx={{ px: 2, pt: 1, fontWeight: 'bold', fontSize: 13 }}>
              Language
            </Typography>
            <MenuItem onClick={() => handleLanguageChange({ name: 'Svenska', flag: FlagSE })}>
              <Box component="img" src={FlagSE} alt="Sweden" sx={{ width: 24, height: 16, mr: 1 }} />
              Svenska
            </MenuItem>
            <MenuItem onClick={() => handleLanguageChange({ name: 'English', flag: FlagUK })}>
              <Box component="img" src={FlagUK} alt="English" sx={{ width: 24, height: 16, mr: 1 }} />
              English
            </MenuItem>
            <MenuItem onClick={() => handleLanguageChange({ name: 'German', flag: FlagGE })}>
              <Box component="img" src={FlagGE} alt="German" sx={{ width: 24, height: 16, mr: 1 }} />
              German
            </MenuItem>
            <MenuItem onClick={() => handleLanguageChange({ name: 'France', flag: FlagFR })}>
              <Box component="img" src={FlagFR} alt="France" sx={{ width: 24, height: 16, mr: 1 }} />
              French
            </MenuItem>
            <MenuItem onClick={() => handleLanguageChange({ name: 'Italia', flag: FlagIT })}>
              <Box component="img" src={FlagIT} alt="Italy" sx={{ width: 24, height: 16, mr: 1 }} />
              Italia
            </MenuItem>
            <MenuItem onClick={() => handleLanguageChange({ name: 'Japan', flag: FlagJP })}>
              <Box component="img" src={FlagJP} alt="Japan" sx={{ width: 24, height: 16, mr: 1 }} />
              Japanese
            </MenuItem>
          </Menu>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
