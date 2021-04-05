import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab, Tabs } from '@material-ui/core';
import { connect } from 'react-redux';

import './UnitsMenuVocabulary.scss';
import { setGroup } from '../../redux/textBook/actions';

function allProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return <Tab component={Link} {...props} />;
}

const UnitsMenuVocabulary = ({ currentGroup, setGroupConnect, currentPage }) => {
  const { group } = useParams('/textbook/list/:group/:page');

  useEffect(() => {
    setGroupConnect(Number(group - 1));
  }, []);

  const onGroupChange = (event, newGroup) => {
    setGroupConnect(newGroup);
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
          label="Unit 1"
          {...allProps(0)}
          to={`/textbook/list/1/${currentPage + 1}`}
        />
        <LinkTab
          label="Unit 2"
          {...allProps(1)}
          to={`/textbook/list/2/${currentPage + 1}`}
        />
        <LinkTab
          label="Unit 3"
          {...allProps(2)}
          to={`/textbook/list/3/${currentPage + 1}`}
        />
        <LinkTab
          label="Unit 4"
          {...allProps(3)}
          to={`/textbook/list/4/${currentPage + 1}`}
        />
        <LinkTab
          label="Unit 5"
          {...allProps(4)}
          to={`/textbook/list/5/${currentPage + 1}`}
        />
        <LinkTab
          label="Unit 6"
          {...allProps(5)}
          to={`/textbook/list/6/${currentPage + 1}`}
        />
      </Tabs>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentGroup: state.textBookPage.currentGroup,
  currentPage: state.textBookPage.currentPage,
});

export default connect(mapStateToProps, { setGroupConnect: setGroup })(UnitsMenuVocabulary);
