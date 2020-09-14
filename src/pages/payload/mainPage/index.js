import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./style";
import { truncateString } from "../../../utils/helper";
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";
import FlagOutlinedIcon from "@material-ui/icons/FlagOutlined";
import CategoryOutlinedIcon from "@material-ui/icons/CategoryOutlined";
import useFetch from "../../../hooks/useFetch";
import { useParams, useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { getDate } from "../../../utils/helper";
import CancelIcon from '@material-ui/icons/Cancel';
const PayloadPage = ({ data }) => {
  const classes = useStyles();
  const history = useHistory();

  const { id } = useParams();
  console.log("id", id);

  const [response, error, isLoading] = useFetch({
    url: `/payloads/${id}`,
  });

  console.log("response", response);

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
    orbit_params: {
      reference_system,
      regime,
      longitude,
      semi_major_axis_km,
      eccentricity,
      periapsis_km,
      apoapsis_km,
      inclination_deg,
      period_min,
      lifespan_years,
      epoch,
      mean_motion,
      raan,
      arg_of_pericenter,
      mean_anomaly,
    } = {},
  } = response || {};

  return (
    <div className={classes.root}>
      {!isLoading ? (
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

            <div className={classes.payload}>
              {payload_mass_kg && (
                <div className={classes.type}>
                  Payload Mass (Kg): <b> {payload_mass_kg}</b>
                </div>
              )}

              {payload_mass_lbs && (
                <div className={classes.type}>
                  Payload Mass (lbs): <b> {payload_mass_lbs}</b>
                </div>
              )}
              {orbit && (
                <div className={classes.type}>
                  Orbit : <b> {orbit}</b>
                </div>
              )}
            </div>
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
          <Grid item xs={12}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Reference System</TableCell>
                  <TableCell align="center">Regime</TableCell>
                  <TableCell align="center">Longitude</TableCell>
                  <TableCell align="center">Major Axis (km)</TableCell>
                  <TableCell align="center">Eccentricity</TableCell>
                  <TableCell align="center">Periapsis (km)</TableCell>
                  <TableCell align="center">Apoapsis (km)</TableCell>
                  <TableCell align="center">Inclination (deg)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row" align="center">
                    {reference_system}
                  </TableCell>
                  <TableCell align="center">
                    {regime || "Not Present"}
                  </TableCell>
                  <TableCell align="center">
                    {longitude || "Not Present"}
                  </TableCell>
                  <TableCell align="center">
                    {semi_major_axis_km || "Not Present"}
                  </TableCell>
                  <TableCell align="center">
                    {eccentricity || "Not Present"}
                  </TableCell>
                  <TableCell align="center">
                    {periapsis_km || "Not Present"}
                  </TableCell>
                  <TableCell align="center">
                    {apoapsis_km || "Not Present"}
                  </TableCell>
                  <TableCell align="center">
                    {inclination_deg || "Not Present"}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
          <Grid item xs={12}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Period (min)</TableCell>
                  <TableCell align="center">Lifespan (years)</TableCell>
                  <TableCell align="center">Epoch</TableCell>
                  <TableCell align="center">Mean Motion</TableCell>
                  <TableCell align="center">Raan</TableCell>
                  <TableCell align="center">Arg Of Pericenter</TableCell>
                  <TableCell align="center">Mean Anomaly</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row" align="center">
                    {period_min}
                  </TableCell>
                  <TableCell align="center">
                    {lifespan_years || "Not Present"}
                  </TableCell>
                  <TableCell align="center">
                    {getDate(epoch) || "Not Present"}
                  </TableCell>
                  <TableCell align="center">
                    {mean_motion || "Not Present"}
                  </TableCell>
                  <TableCell align="center">{raan || "Not Present"}</TableCell>
                  <TableCell align="center">
                    {arg_of_pericenter || "Not Present"}
                  </TableCell>
                  <TableCell align="center">
                    {mean_anomaly || "Not Present"}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      ) : (
        <CircularProgress />
      )}
      <CancelIcon
        onClick={() => history.goBack()}
        className={classes.close}
      />
    </div>
  );
};

export default PayloadPage;
