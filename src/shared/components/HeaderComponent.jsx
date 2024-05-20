import { Menu } from "@mui/icons-material";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const HeaderComponent = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <Menu />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Mi portfolio
                </Typography>
                <Button color="inherit" component={Link} to="/">
                    Inicio
                </Button>
                <Button color="inherit" component={Link} to="/about">
                    Sobre mi
                </Button>
            </Toolbar>
        </AppBar>
    )
};

export default HeaderComponent;