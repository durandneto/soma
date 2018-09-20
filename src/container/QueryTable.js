import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

let id = 0;
function createData(text, times, date) {
  id += 1;
  return { id, text, times, date };
}

const data = [
  createData('Select * from users', 159,'Ontem'),
  createData('Select count(id) users', 237,'2 dias atrás')
];

function QueryleTable(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Typography variant="display1" gutterBottom>
              Lista de queries
            </Typography>
            <div className={classes.tableContainer}>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Query</TableCell>
            <TableCell numeric>N Execuções</TableCell>
            <TableCell >Última Execução</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.text}
                </TableCell>
                <TableCell numeric>{n.times}</TableCell>
                <TableCell >{n.date}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
    </div>
    </React.Fragment>
  );
}

QueryleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QueryleTable);