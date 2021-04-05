import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab, Tabs } from '@material-ui/core';
import { connect } from 'react-redux';

import './NavTabs.scss';
import { setGroup } from '../../redux/textBook/actions';
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

const NavTabs = ({ currentGroup, setGroupConnect, currentPage }) => {
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
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs"
      >
        <LinkTab
          className="unit-1"
          label={UNIT_1}
          {...allProps(0)}
          to={`/textbook/list/1/${currentPage + 1}`}
        />
        <LinkTab
          className="unit-2"
          label={UNIT_2}
          {...allProps(1)}
          to={`/textbook/list/2/${currentPage + 1}`}
        />
        <LinkTab
          className="unit-3"
          label={UNIT_3}
          {...allProps(2)}
          to={`/textbook/list/3/${currentPage + 1}`}
        />
        <LinkTab
          className="unit-4"
          label={UNIT_4}
          {...allProps(3)}
          to={`/textbook/list/4/${currentPage + 1}`}
        />
        <LinkTab
          className="unit-5"
          label={UNIT_5}
          {...allProps(4)}
          to={`/textbook/list/5/${currentPage + 1}`}
        />
        <LinkTab
          className="unit-6"
          label={UNIT_6}
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

export default connect(mapStateToProps, { setGroupConnect: setGroup })(NavTabs);
