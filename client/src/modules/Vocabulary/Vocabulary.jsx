import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect /* , useDispatch */ } from 'react-redux';
import { Pagination, PaginationItem } from '@material-ui/lab';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import VocabularyPage from './VocabularyPage/VocabularyPage';
import calcPaginationCount from './utils';
import {
  setPage,
  setGroup,
  fetchDelWords,
} from '../../redux/vocabulary/DeletedWords/actions';
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

function VocabularyModule({
  fetchDelWordsConnect,
  setGroupConnect,
  setPageConnect,
  // loading,
  currentPage,
  currentGroup,
  userData,
  wordsCount,
}) {
  //  console.log('wordsCount', wordsCount);

  const { typeWords, numPage } = useParams('/vocabulary/:typeWords/:unit/:numPage');
  // console.log('typeWords', typeWords);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setGameWords(words));
  // }, [words]);

  useEffect(() => {
    setPageConnect(numPage - 1);
  }, []);

  useEffect(() => {
    fetchDelWordsConnect(typeWords, currentGroup, currentPage, userData);
  }, [typeWords, currentPage, currentGroup, userData]);

  const onPageChange = (event, page) => {
    setPageConnect(page - 1);
  };

  const onTypeWordsChange = () => {
    setGroupConnect(0);
    setPageConnect(0);
  };

  return (
    <div className="vocabulary">
      <CommonStudyResults />
      <div className="classes.root">
        <Tabs
          variant="fullWidth"
          indicatorColor="secondary"
          onChange={onTypeWordsChange}
          value={typeWords}
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
            to="/textbook/vocabulary/studied/1/1"
          />
          <Tab
            component={Link}
            value="difficult"
            label="Сложные слова"
            {...allProps('difficult')}
            to="/textbook/vocabulary/difficult/1/1"
          />
          <Tab
            component={Link}
            value="deleted"
            label="Удаленные слова"
            {...allProps('deleted')}
            to="/textbook/vocabulary/deleted/1/1"
          />
        </Tabs>
        <UnitsMenuVocabulary />
        <TabPanel value={typeWords} index={typeWords}>
          <VocabularyPage />
        </TabPanel>
        {/* <TabPanel value={typeWords} index="difficult">
          <VocabularyPage />
        </TabPanel>
        <TabPanel value={typeWords} index="deleted">
          <VocabularyPage />
        </TabPanel> */}
        <Pagination
          className="textbook-pagination"
          count={calcPaginationCount(wordsCount) || 30}
          color="primary"
          page={currentPage + 1}
          onChange={onPageChange}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/textbook/vocabulary/${typeWords}/${currentGroup + 1}/${item.page}`}
              {...item}
            />
          )}
        />
        <GameCards />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  delWords: state.vocabularyDeletedWords.delWords,
  loading: state.vocabularyDeletedWords.loading,
  currentPage: state.vocabularyDeletedWords.delCurrentPage,
  currentGroup: state.vocabularyDeletedWords.delCurrentGroup,
  wordsCount: state.vocabularyDeletedWords.delWordsCount,
  userData: state.user.user,
});

export default connect(mapStateToProps, {
  fetchDelWordsConnect: fetchDelWords,
  setGroupConnect: setGroup,
  setPageConnect: setPage,
})(VocabularyModule);
