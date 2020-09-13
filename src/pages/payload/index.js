import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./style";
import Typography from "@material-ui/core/Typography";
import { PAYLOAD_SUCCESS, PAYLOAD_FAIL } from "../../actions/types";
import useFetch from "../../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import PayloadCard from "../../components/PayloadCard";
import Pagination from "@material-ui/lab/Pagination";

const Payload = () => {
  //   useEffect(() => getHistory(), []);
  const dispatch = useDispatch();

  const [response, error, isLoading] = useFetch({
    url: "/payloads",
  });

  const [term, setTerm] = useState("");
  // const [pageData, setPageData] = useState(null);

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [lowOffset, setLowOffset] = useState(0);
  const [highOffset, setHighOffset] = useState(10);

  const payloadData = useSelector((state) => state.payload?.data);
  let count = payloadData?.length;

  useEffect(() => {
    if (response !== null) {
      dispatch({ type: PAYLOAD_SUCCESS, payload: response });
    }
  }, [response]);

  // useEffect(() => {
  //   if (payloadData) {
  //     let data = payloadData.slice(0, 10);
  //     setPageData(data);
  //   }
  // }, [payloadData]);

  const searchingFor = (term) => {
    return (x) =>
      x.payload_id.toLowerCase().includes(term.toLowerCase()) || false;
  };

  const handleChange = (event, newPage) => {
    setPage(newPage);
    handleOffset(newPage);
  };

  const handleOffset = (newPage) => {
    let lowOffset = size * (newPage - 1);
    setLowOffset(lowOffset);
    let updatedHightOffset = lowOffset + size;
    setHighOffset(count > updatedHightOffset ? updatedHightOffset : count);
  };

  const pageData =
    Array.isArray(payloadData) &&
    payloadData.length > 0 &&
    payloadData.filter(searchingFor(term)).slice(lowOffset, highOffset);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography color="primary" variant="h4" className={classes.heading}>
        Payload
      </Typography>
      <div className={classes.search}>
        <TextField
          id="standard-basic"
          label="Search by payload"
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>

      {!isLoading && pageData ? (
        <Grid container spacing={4} direction="row" justify="center">
          {Array.isArray(pageData) && pageData.length > 0 ? (
            pageData.filter(searchingFor(term)).map((data) => (
              <Grid item xs={6}>
                <PayloadCard data={data} />
              </Grid>
            ))
          ) : (
            <div>No record found</div>
          )}
          <Grid item xs={6} className={classes.pagination}>
            <Pagination
              count={Math.ceil(
                payloadData.filter(searchingFor(term)).length / size
              )}
              page={page}
              onChange={handleChange}
              size="large"
              color="primary"
            />
          </Grid>
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Payload;
