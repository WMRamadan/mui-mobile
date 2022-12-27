import {
    AppBar,
    BottomNavigation,
    BottomNavigationAction,
  } from "@mui/material";
  import AccountCircleIcon from '@mui/icons-material/AccountCircle';
  import WorkIcon from '@mui/icons-material/Work';
  import ChatIcon from '@mui/icons-material/Chat';
  
  const Bottomnav = () => {
    return (
        <AppBar
            position="fixed"
            style={{top:"auto", bottom: 0}}
        >
            <BottomNavigation
                showLabels
                //value={value}
                onChange={(event, newValue) => {
                //setValue(newValue);
                }}
            >
            <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
            <BottomNavigationAction label="Jobs" icon={<WorkIcon />} />
            <BottomNavigationAction label="Messages" icon={<ChatIcon />} />
        </BottomNavigation>
      </AppBar>
    );
  };
  
  export default Bottomnav;