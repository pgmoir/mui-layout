import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import ArticleCard from "./ArticleCard";

const useStyles = makeStyles((theme) => ({
  blogContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
}));

export default function Articles() {
  const classes = useStyles();

  const articles = [
    {
      title: "Fusce hendrerit efficitur",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel tellus est. Morbi arcu sapien, vestibulum iaculis felis in, lacinia.",
      details: [
        "Fusce aliquet neque ex. Praesent pulvinar vestibulum risus, in sodales massa blandit non. Fusce dictum, ex sit amet sodales imperdiet, nisi arcu finibus lectus, in convallis ante velit vitae lacus. Curabitur tincidunt quam condimentum purus interdum, quis facilisis enim luctus. Phasellus eu euismod purus. Curabitur fermentum rhoncus velit, id congue neque euismod at. Curabitur iaculis accumsan orci eu volutpat. Nulla facilisi. Aliquam ac blandit neque, non euismod risus. Sed mattis id lorem quis gravida.",
        "Cras at lacus sit amet justo auctor tempor eu at felis. Aliquam erat volutpat. Phasellus efficitur, nisi vitae vulputate iaculis, dui libero condimentum tortor, id tempus eros neque eu risus. Quisque tempus, ipsum a porttitor tempor, sapien sem eleifend tellus, vel euismod turpis diam id risus. Morbi fermentum scelerisque justo nec pulvinar. Suspendisse molestie non justo gravida facilisis. Quisque et lacus in sapien pulvinar condimentum. Suspendisse fermentum scelerisque ante, vel venenatis elit. Proin ultricies libero a commodo consequat.",
        "Aenean auctor turpis sit amet tellus lobortis ultricies. Sed placerat ipsum facilisis nisi porta, ac imperdiet risus consectetur. Ut justo eros, posuere vitae congue vitae, porta vitae neque. Nullam porttitor ex augue, eu sodales quam blandit ac. Phasellus ac vulputate tortor. Donec nec facilisis justo, at venenatis sapien. Vivamus quis faucibus mauris, maximus rutrum nunc. Aliquam et quam id felis tempus ultricies. Nulla dignissim aliquam arcu, eget auctor dui imperdiet sodales. Donec ante tortor, viverra et libero at, rhoncus consectetur odio. Aenean ac mi tincidunt, hendrerit ante sit amet, egestas tellus.",
      ],
      image: "../../bicycle1.jpg",
      author: "Huw Williams",
      date: "September 14, 2016",
    },
    {
      title: "Aenean in dui",
      description:
        "Duis lacinia mattis urna sed elementum. Donec faucibus metus ut lacus porttitor interdum. Morbi mattis suscipit ligula, sed sagittis elit.",
      details: [
        "Fusce aliquet neque ex. Praesent pulvinar vestibulum risus, in sodales massa blandit non. Fusce dictum, ex sit amet sodales imperdiet, nisi arcu finibus lectus, in convallis ante velit vitae lacus. Curabitur tincidunt quam condimentum purus interdum, quis facilisis enim luctus. Phasellus eu euismod purus. Curabitur fermentum rhoncus velit, id congue neque euismod at. Curabitur iaculis accumsan orci eu volutpat. Nulla facilisi. Aliquam ac blandit neque, non euismod risus. Sed mattis id lorem quis gravida.",
        "Cras at lacus sit amet justo auctor tempor eu at felis. Aliquam erat volutpat. Phasellus efficitur, nisi vitae vulputate iaculis, dui libero condimentum tortor, id tempus eros neque eu risus. Quisque tempus, ipsum a porttitor tempor, sapien sem eleifend tellus, vel euismod turpis diam id risus. Morbi fermentum scelerisque justo nec pulvinar. Suspendisse molestie non justo gravida facilisis. Quisque et lacus in sapien pulvinar condimentum. Suspendisse fermentum scelerisque ante, vel venenatis elit. Proin ultricies libero a commodo consequat.",
        "Aenean auctor turpis sit amet tellus lobortis ultricies. Sed placerat ipsum facilisis nisi porta, ac imperdiet risus consectetur. Ut justo eros, posuere vitae congue vitae, porta vitae neque. Nullam porttitor ex augue, eu sodales quam blandit ac. Phasellus ac vulputate tortor. Donec nec facilisis justo, at venenatis sapien. Vivamus quis faucibus mauris, maximus rutrum nunc. Aliquam et quam id felis tempus ultricies. Nulla dignissim aliquam arcu, eget auctor dui imperdiet sodales. Donec ante tortor, viverra et libero at, rhoncus consectetur odio. Aenean ac mi tincidunt, hendrerit ante sit amet, egestas tellus.",
      ],
      image: "../../bicycle2.jpg",
      author: "Dave Raynor",
      date: "November 6, 2017",
    },
    {
      title: "Phasellus scelerisque risus",
      description:
        "Nunc in mauris at neque efficitur rhoncus. Maecenas sit amet velit velit. Nulla sodales nunc in sapien placerat lacinia. Cras.",
      details: [
        "Fusce aliquet neque ex. Praesent pulvinar vestibulum risus, in sodales massa blandit non. Fusce dictum, ex sit amet sodales imperdiet, nisi arcu finibus lectus, in convallis ante velit vitae lacus. Curabitur tincidunt quam condimentum purus interdum, quis facilisis enim luctus. Phasellus eu euismod purus. Curabitur fermentum rhoncus velit, id congue neque euismod at. Curabitur iaculis accumsan orci eu volutpat. Nulla facilisi. Aliquam ac blandit neque, non euismod risus. Sed mattis id lorem quis gravida.",
        "Cras at lacus sit amet justo auctor tempor eu at felis. Aliquam erat volutpat. Phasellus efficitur, nisi vitae vulputate iaculis, dui libero condimentum tortor, id tempus eros neque eu risus. Quisque tempus, ipsum a porttitor tempor, sapien sem eleifend tellus, vel euismod turpis diam id risus. Morbi fermentum scelerisque justo nec pulvinar. Suspendisse molestie non justo gravida facilisis. Quisque et lacus in sapien pulvinar condimentum. Suspendisse fermentum scelerisque ante, vel venenatis elit. Proin ultricies libero a commodo consequat.",
        "Aenean auctor turpis sit amet tellus lobortis ultricies. Sed placerat ipsum facilisis nisi porta, ac imperdiet risus consectetur. Ut justo eros, posuere vitae congue vitae, porta vitae neque. Nullam porttitor ex augue, eu sodales quam blandit ac. Phasellus ac vulputate tortor. Donec nec facilisis justo, at venenatis sapien. Vivamus quis faucibus mauris, maximus rutrum nunc. Aliquam et quam id felis tempus ultricies. Nulla dignissim aliquam arcu, eget auctor dui imperdiet sodales. Donec ante tortor, viverra et libero at, rhoncus consectetur odio. Aenean ac mi tincidunt, hendrerit ante sit amet, egestas tellus.",
      ],
      image: "../../bicycle3.jpg",
      author: "Caleb Ewan",
      date: "April 22, 2021",
    },
    {
      title: "Pellentesque semper sollicitudin",
      description:
        "Integer at massa sapien. Aenean feugiat ipsum ullamcorper, viverra tortor quis, aliquet metus. Mauris in ante at tortor tempus porta.",
      details: [
        "Fusce aliquet neque ex. Praesent pulvinar vestibulum risus, in sodales massa blandit non. Fusce dictum, ex sit amet sodales imperdiet, nisi arcu finibus lectus, in convallis ante velit vitae lacus. Curabitur tincidunt quam condimentum purus interdum, quis facilisis enim luctus. Phasellus eu euismod purus. Curabitur fermentum rhoncus velit, id congue neque euismod at. Curabitur iaculis accumsan orci eu volutpat. Nulla facilisi. Aliquam ac blandit neque, non euismod risus. Sed mattis id lorem quis gravida.",
        "Cras at lacus sit amet justo auctor tempor eu at felis. Aliquam erat volutpat. Phasellus efficitur, nisi vitae vulputate iaculis, dui libero condimentum tortor, id tempus eros neque eu risus. Quisque tempus, ipsum a porttitor tempor, sapien sem eleifend tellus, vel euismod turpis diam id risus. Morbi fermentum scelerisque justo nec pulvinar. Suspendisse molestie non justo gravida facilisis. Quisque et lacus in sapien pulvinar condimentum. Suspendisse fermentum scelerisque ante, vel venenatis elit. Proin ultricies libero a commodo consequat.",
        "Aenean auctor turpis sit amet tellus lobortis ultricies. Sed placerat ipsum facilisis nisi porta, ac imperdiet risus consectetur. Ut justo eros, posuere vitae congue vitae, porta vitae neque. Nullam porttitor ex augue, eu sodales quam blandit ac. Phasellus ac vulputate tortor. Donec nec facilisis justo, at venenatis sapien. Vivamus quis faucibus mauris, maximus rutrum nunc. Aliquam et quam id felis tempus ultricies. Nulla dignissim aliquam arcu, eget auctor dui imperdiet sodales. Donec ante tortor, viverra et libero at, rhoncus consectetur odio. Aenean ac mi tincidunt, hendrerit ante sit amet, egestas tellus.",
      ],
      image: "../../bicycle4.jpg",
      author: "Mark Cavendish",
      date: "July 16, 2020",
    },
  ];

  return (
    <Container maxWidth="lg" className={classes.blogContainer}>
      <Typography variant="h4" className={classes.blogTitle}>
        Articles
      </Typography>
      <Grid container spacing={3}>
        {articles.map((article, index) => (
          <Grid key={`artcard-${index}`} item xs={12} sm={6} md={4}>
            <ArticleCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
