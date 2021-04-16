import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.7)), url('../../banner.jpg')`,
    height: "360px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("md")]: {
      height: "240px",
      fontSize: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "180px",
      fontSize: "2rem",
    },
  },
  heroTitle: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

export default function HeroSection() {
  const classes = useStyles();
  return (
    <Box className={classes.hero}>
      <Box className={classes.heroTitle}>No limits</Box>
    </Box>
  );
}
