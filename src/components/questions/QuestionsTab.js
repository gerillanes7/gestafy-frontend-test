import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Card, CardContent, Tabs, Tab } from '@mui/material';
import QuestionItem from './QuestionItem';
import Pagination from '@mui/material/Pagination';
import usePagination from '../../hooks/usePagination/usePagination';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
        </div>
    );
};

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
};

const QuestionsTab = ({ answered, unanswered, asnwerQuestion }) => {

    const [value, setValue] = useState(0);

    const [pageAnswered, setPageAnswered] = useState(1);
    const [pageUnanswered, setPageUnanswered] = useState(1);


    const PER_PAGE = 10;

    const countAnswered = Math.ceil(answered?.length / PER_PAGE)

    const countUnanswered = Math.ceil(unanswered?.length / PER_PAGE)


    const _ANSWERED = usePagination(answered, 10)
    const _UNANSWERED = usePagination(unanswered, 10)



    const changePage = (e, p) => {
        setPageAnswered(p);
        _ANSWERED.jump(p);
    };

    const changePageUnanswered = (e, p) => {
        setPageUnanswered(p);
        _UNANSWERED.jump(p);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Card
            sx={{
                p: {
                    xs: '20px',
                    sm: '35px',
                    lg: '35px',
                },
            }}
        >
            <CardContent
                sx={{
                    p: 0,
                }}
            >
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                            textColor="secondary"
                            allowScrollButtonsMobile
                            scrollButtons
                            indicatorColor="secondary"
                        >
                            <Tab
                                sx={{
                                    textTransform: 'capitalize',
                                }}
                                label="Sin responder"
                                {...a11yProps(0)}
                            />
                            <Tab
                                sx={{
                                    textTransform: 'capitalize',
                                }}
                                label="Respondidas"
                                {...a11yProps(1)}
                            />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0} component="div">
                        <Box>
                            {
                                _UNANSWERED?.currentData().map((question, i) => <QuestionItem key={question.id} question={question} asnwerQuestion={asnwerQuestion} />)
                            }
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Pagination count={countUnanswered} size='large' page={pageUnanswered} onChange={changePageUnanswered} />
                            </Box>
                        </Box>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Box>
                            {
                                _ANSWERED?.currentData().map((question, i) => <QuestionItem key={i} question={question} />)
                            }
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Pagination count={countAnswered} size='large' page={pageAnswered} onChange={changePage} />
                            </Box>
                        </Box>
                    </TabPanel>
                </Box>
            </CardContent>
        </Card>
    );
};

export default QuestionsTab;
