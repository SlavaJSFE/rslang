import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab, Tabs } from '@material-ui/core';
import { connect } from 'react-redux';

import './UnitsMenuVocabulary.scss';
import { setGroup, setPage } from '../../redux/vocabulary/DeletedWords/actions';

import {
  UNIT_1, UNIT_2, UNIT_3, UNIT_4, UNIT_5, UNIT_6,
} from '../../constants/constants';

function allProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return <Tab component={Link} {...props} />;
}

const UnitsMenuVocabulary = ({
  currentGroup, setGroupConnect, setPageConnect, /* currentPage */
}) => {
  const { typeWords, unit } = useParams('/vocabulary/:typeWords/:unit/:page');

  useEffect(() => {
    setGroupConnect(Number(unit - 1));
  }, []);

  const onGroupChange = (event, newGroup) => {
    setGroupConnect(newGroup);
    setPageConnect(0);
  };

  return (
    <div className="textbook-tabs">
      <Tabs
        value={currentGroup}
        onChange={onGroupChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs"
      >
        <LinkTab
          // className="unit-1"
          label={UNIT_1}
          {...allProps(0)}
          to={`/textbook/vocabulary/${typeWords}/1/1`}
        />
        <LinkTab
          // className="unit-2"
          label={UNIT_2}
          {...allProps(1)}
          to={`/textbook/vocabulary/${typeWords}/2/1`}
        />
        <LinkTab
          // className="unit-3"
          label={UNIT_3}
          {...allProps(2)}
          to={`/textbook/vocabulary/${typeWords}/3/1`}
        />
        <LinkTab
          // className="unit-4"
          label={UNIT_4}
          {...allProps(3)}
          to={`/textbook/vocabulary/${typeWords}/4/1`}
        />
        <LinkTab
          // className="unit-5"
          label={UNIT_5}
          {...allProps(4)}
          to={`/textbook/vocabulary/${typeWords}/5/1`}
        />
        <LinkTab
          // className="unit-6"
          label={UNIT_6}
          {...allProps(5)}
          to={`/textbook/vocabulary/${typeWords}/6/1`}
        />
      </Tabs>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentPage: state.vocabularyDeletedWords.delCurrentPage,
  currentGroup: state.vocabularyDeletedWords.delCurrentGroup,
});

export default connect(mapStateToProps, {
  setGroupConnect: setGroup,
  setPageConnect: setPage,
})(UnitsMenuVocabulary);
