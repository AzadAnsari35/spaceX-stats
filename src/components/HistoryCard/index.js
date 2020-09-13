import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./style";
import EventIcon from "@material-ui/icons/Event";
import RedditIcon from "@material-ui/icons/Reddit";
import LinkIcon from "@material-ui/icons/Link";
import { truncateString, getDate } from "../../utils/helper";
import FlightOutlinedIcon from "@material-ui/icons/FlightOutlined";
import WikipediaIcon from "../../assets/wikipedia.svg";

const HistoryCard = ({ data }) => {
  const classes = useStyles();

  const {
    title,
    details,
    flight_number,
    event_date_utc,
    links: { reddit, article, wikipedia },
  } = data;

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <div className={classes.title}>{title}</div>
          <div className={classes.detail}>{truncateString(details, 200)}</div>
        </Grid>

        <Grid item xs={4} className={classes.right}>
          <div className={classes.date}>
            <EventIcon fontSize="small" />
            {getDate(event_date_utc)}
          </div>
          <div className={classes.number}>
            <FlightOutlinedIcon fontSize="small" />
            {flight_number}
          </div>
          <div className={classes.link}>
            {article && (
              <a href={article}>
                <LinkIcon fontSize="small" />
              </a>
            )}
            {reddit && (
              <a href={reddit}>
                <RedditIcon fontSize="small" />
              </a>
            )}
            {wikipedia && (
              <a href={wikipedia}>
                <img src={WikipediaIcon} />
              </a>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HistoryCard;
