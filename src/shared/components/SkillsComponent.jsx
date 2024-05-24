import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const skills = [
  {
    title: "Javascript",
    description: "Conocimiento amplio en el lenguaje de POO mas utilizado en la actualidad.",
    image: "/assets/javascript.jpg"
  },
  {
    title: "Angular",
    description: "Experiencia utilizando este framework para el desarrollo de diferentes sowtware de gestion.",
    image: "/assets/angular.jpg"
  },
  {
    title: "Nest JS",
    description: "Experiencia utilizando este framework de backend para realizar APIS.",
    image: "/assets/nestjs.svg"
  },
  {
    title: "Yii2",
    description: "Experiencia en backend realizando APIS con este framework de php.",
    image: "/assets/yii2.jpg"
  },
  {
    title: "Metodologia SCRUM",
    description: "Se tiene experiencia trabajando en diversos equipos de trabajo con la metodologia agil SCRUM",
    image: "/assets/scrum.jpg"
  }
]

const SkillsComponent = () => {
  return (
    <Grid container spacing={4}>
      {
        skills.map((skill, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ backgroundColor: "lightgrey" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={skill.image}
                  alt={skill.title}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {skill.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {skill.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        })
      }
    </Grid>
  )
};

export default SkillsComponent;
