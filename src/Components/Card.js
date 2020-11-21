import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import useStyles from "../styles/components/Card";

export default function MediaCard({
  pictureUrl,
  name,
  tags,
  description,
  price,
  addToCart,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia image={pictureUrl} title={name} className={classes.card__media}/>
        <CardContent>
          <Typography gutterBottom variant="h5">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div>
        <CardContent className={classes.card__price}>
          <Typography variant="h6">{price}$</Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            endIcon={<ShoppingCartIcon />}
            onClick={() => addToCart()}
          >
            Add to cart
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}
