import HeaderComponent from "../shared/components/HeaderComponent";
import FooterComponent from "../shared/components/FooterComponent";
import MainContainer from "../shared/components/MainContainer";
import { Paper, Typography, Avatar, Box } from "@mui/material";

const MyImageUrl = '/assets/myimage.jpg';

function AboutPage() {
    return (
        <>
            <HeaderComponent />
            <MainContainer>
                <Paper elevation={3} style={{ padding: '2rem' }}>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Avatar
                        alt="My Photo"
                        src={MyImageUrl}
                        sx={{ width: 100, height: 100, marginRight: 2 }}
                    />
                    <Typography variant="h3" component="h1" gutterBottom sx={{ textAlign: "center" }}>
                        Hola, Soy Jerónimo 👋
                    </Typography>
                    </Box>
                    <Typography variant="body1" paragraph sx={{ textAlign: "center" }}>
                        Bienvenidos a mi portfolio! te cuento un poco de mi trayecotria...
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ textAlign: "center" }}>
                        Soy <b>Tecnico programador</b> egresado de la <i>EPET 2O</i>. Actualmente curso la carrera de <b>Desarrollo Full Stack</b> en el el <i>Instituto Tecnico Superior de Cipolleti</i>.
                    </Typography>

                </Paper>
                {/* <Paper elevation={3} style={{ padding: '2rem' }}>
                    <Typography variant="h3" component="h1" gutterBottom>
                        About Us
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Welcome to our website! We are dedicated to providing you with the best experience possible.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Our team consists of experts in various fields, all working together to deliver high-quality content and services.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Thank you for visiting our site. We hope you find what you re looking for and enjoy your time here.
                    </Typography>
                </Paper> */}
            </MainContainer >
            <FooterComponent />
        </>
    );
}

export default AboutPage;