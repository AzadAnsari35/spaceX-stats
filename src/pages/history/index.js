import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import HistoryCard from "../../components/HistoryCard";
import { useStyles } from "./style";
import Typography from "@material-ui/core/Typography";
import { HISTORY_SUCCESS, HISTORY_FAIL } from "../../actions/types";
import useFetch from "../../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";

const History = () => {
  //   useEffect(() => getHistory(), []);
  const dispatch = useDispatch();

  const [response, error, isLoading] = useFetch({
    url: "/history",
  });

  const [term, setTerm] = useState("");

  const historyData = useSelector((state) => state.history.data);

  useEffect(() => {
    if (response !== null) {
      dispatch({ type: HISTORY_SUCCESS, payload: response });
    }
  }, [response]);

  const searchingFor = (term) => {
    return (x) => x.title.toLowerCase().includes(term.toLowerCase()) || false;
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography color="primary" variant="h4" className={classes.heading}>
        History
      </Typography>
      <div className={classes.search}>
        <TextField
          id="standard-basic"
          label="Search by title"
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>

      {!isLoading && historyData ? (
        <Grid container spacing={4}>
          {Array.isArray(historyData) && historyData.length > 0 ? (
            historyData.filter(searchingFor(term)).map((data) => (
              <Grid item xs={6}>
                <HistoryCard data={data} />
              </Grid>
            ))
          ) : (
            <div>No record found</div>
          )}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default History;
