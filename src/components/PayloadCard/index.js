import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./style";
import EventIcon from "@material-ui/icons/Event";
import RedditIcon from "@material-ui/icons/Reddit";
import LinkIcon from "@material-ui/icons/Link";
import { truncateString } from "../../utils/helper";
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";
import FlagOutlinedIcon from "@material-ui/icons/FlagOutlined";
import CategoryOutlinedIcon from "@material-ui/icons/CategoryOutlined";

const PayloadCard = ({ data }) => {
  const classes = useStyles();

  const {
    payload_id,
    reused,
    customers,
    nationality,
    manufacturer,
    payload_type,
    payload_mass_kg,
    payload_mass_lbs,
    orbit,
    orbit_params: { reddit, article, wikipedia },
  } = data;

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <div className={classes.title}>
            {payload_id}
            {reused && "(Resused)"}
          </div>
          {Array.isArray(customers) &&
            customers.length > 0 &&
            customers.map((c, i, arr) => (
              <div className={classes.detail}>
                {c} {arr[i + 1] && ","}
              </div>
            ))}
        </Grid>

        <Grid item xs={4} className={classes.right}>
          {manufacturer && (
            <div className={classes.manufacturer}>
              <BuildOutlinedIcon fontSize="small" />
              {truncateString(manufacturer, 12)}
            </div>
          )}
          {nationality && (
            <div className={classes.nationality}>
              <FlagOutlinedIcon fontSize="small" />
              {nationality}
            </div>
          )}
          {payload_type && (
            <div className={classes.type}>
              <CategoryOutlinedIcon fontSize="small" />
              {payload_type}
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default PayloadCard;
