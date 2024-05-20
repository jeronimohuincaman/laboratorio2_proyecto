import { Typography } from "@mui/material";
import HeaderComponent from "../shared/components/HeaderComponent";
import MainContainerComponent from '../shared/components/MainContainer';

function HomePage() {
    return (
        <>
            <HeaderComponent />
            <MainContainerComponent>
                <Typography variant="h4" sx={{ textAlign: "center" }}>
                    Bienvenidos a mi portfolio
                </Typography>
                <Typography variant="body1" sx={{ my: 2 , textAlign: "initial"}}>
                    Esta será una pequeña demostración de los conocimientos obtenidos en react en la materia LBFS2.
                </Typography>
                

            </MainContainerComponent>

        </>
    );
}

export default HomePage;