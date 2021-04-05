import React from 'react';
// import { Container } from '@material-ui/core';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import { Link, useParams } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DeletedWords from './DeletedWords/DeletedWords';
import DifficultWords from './DifficultWords/DifficultWords';
import StudiedWords from './StudiedWords/StudiedWords';
import './Vocabulary.scss';
import CommonStudyResults from './CommonStudyResults/CommonStudyResults';
import GameCards from '../../components/GameCards/GameCards';
import UnitsMenuVocabulary from '../../components/UnitsMenuVocabulary/UnitsMenuVocabulary';

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

function allProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VocabularyModule() {
  const { unit, page } = useParams();

  return (
    <div className="vocabulary">
      <CommonStudyResults />
      <div className="classes.root">
        <Tabs
          variant="fullWidth"
          indicatorColor="secondary"
          value={unit}
          aria-label="Vertical tabs example"
          className="vocabulary-tabs"
          centered
        >
          <Tab
            className="vocabulary-tab"
            component={Link}
            value="studied"
            label="Изучаемые слова"
            {...allProps('studied')}
            to="/textbook/vocabulary/studied/1"
          />
          <Tab
            component={Link}
            value="difficult"
            label="Сложные слова"
            {...allProps('difficult')}
            to="/textbook/vocabulary/difficult/1"
          />
          <Tab
            component={Link}
            value="deleted"
            label="Удаленные слова"
            {...allProps('deleted')}
            to="/textbook/vocabulary/deleted/1"
          />
        </Tabs>
        <UnitsMenuVocabulary currentGroup={0} setGroupConnect={null} currentPage={0} />
        <TabPanel value={unit} index="studied">
          <StudiedWords />
        </TabPanel>
        <TabPanel value={unit} index="difficult">
          <DifficultWords />
        </TabPanel>
        <TabPanel value={unit} index="deleted">
          <DeletedWords />
        </TabPanel>
        <GameCards />
      </div>
    </div>
  );
}
