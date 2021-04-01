/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
<<<<<<< HEAD

import { Container } from '@material-ui/core';

=======
import { Container } from '@material-ui/core';
>>>>>>> develop
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DeletedWords from './DeletedWords/DeletedWords';
import DifficultWords from './DifficultWords/DifficultWords';
import StudiedWords from './StudiedWords/StudiedWords';
import GameCards from '../../components/GameCards/GameCards';
<<<<<<< HEAD
=======
import './Vocabulary-module.scss';
import CommonStudyResults from './CommonStudyResults/CommonStudyResults';
>>>>>>> develop

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function allProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    height: 'auto',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="vocabulary-module">
      <Container>
<<<<<<< HEAD
        <h2>Vocabulary Module</h2>
=======
        <CommonStudyResults />
>>>>>>> develop
        <div className={classes.root}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
<<<<<<< HEAD
            <Tab label="Изучаемые слова" {...a11yProps(0)} />
            <Tab label="Сложные слова" {...a11yProps(1)} />
            <Tab label="Удаленные слова" {...a11yProps(2)} />
=======
            <Tab label="Изучаемые слова" {...allProps(0)} />
            <Tab label="Сложные слова" {...allProps(1)} />
            <Tab label="Удаленные слова" {...allProps(2)} />
>>>>>>> develop
          </Tabs>
          <TabPanel value={value} index={0}>
            <StudiedWords />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <DifficultWords />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <DeletedWords />
          </TabPanel>
        </div>
        <GameCards />
      </Container>
    </div>
  );
}
