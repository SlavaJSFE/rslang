import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab, Tabs } from '@material-ui/core';
import { connect } from 'react-redux';

import { setGroup } from '../../redux/textBook/actions';

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return <Tab component={Link} {...props} />;
}

const NavTabs = ({ currentGroup, setGroupConnect, currentPage }) => {
  const { group } = useParams('/textbook/:group/:page');

  useEffect(() => {
    setGroupConnect(Number(group - 1));
  }, []);

  const onGroupChange = (event, newGroup) => {
    setGroupConnect(newGroup);
  };

  return (
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
        {...a11yProps(0)}
        to={`/textbook/1/${currentPage + 1}`}
      />
      <LinkTab
        label="Unit 2"
        {...a11yProps(1)}
        to={`/textbook/2/${currentPage + 1}`}
      />
      <LinkTab
        label="Unit 3"
        {...a11yProps(2)}
        to={`/textbook/3/${currentPage + 1}`}
      />
      <LinkTab
        label="Unit 4"
        {...a11yProps(3)}
        to={`/textbook/4/${currentPage + 1}`}
      />
      <LinkTab
        label="Unit 5"
        {...a11yProps(4)}
        to={`/textbook/5/${currentPage + 1}`}
      />
      <LinkTab
        label="Unit 6"
        {...a11yProps(5)}
        to={`/textbook/6/${currentPage + 1}`}
      />
    </Tabs>
  );
};

const mapStateToProps = (state) => ({
  currentGroup: state.textBookPage.currentGroup,
  currentPage: state.textBookPage.currentPage,
});

export default connect(mapStateToProps, { setGroupConnect: setGroup })(NavTabs);
