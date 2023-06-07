import { useState } from "react"
import { Accordion, AccordionDetails, AccordionSummary, Typography, Box, Button } from "@mui/material"
import CustomTextField from "../forms/custom-elements/CustomTextField"

import { ANSWERED, UNANSWERED } from '../../../pages/management/questions/constants'

const QuestionItem = ({ question, key, asnwerQuestion }) => {

    const [expanded, setExpanded] = useState(false);
    const [answer, setAnswer] = useState('')

    const date = new Date(question?.date_created).toLocaleDateString('en-GB', {
        hour12: false,
    })

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Accordion 
            sx={{ mb: 2 }}
            expanded={expanded === key && question.status === UNANSWERED}
            onChange={handleChange(key)}
        >
            <AccordionSummary>
                <Box
                    sx={{
                        ml: 2,
                    }}
                >
                    <Typography
                        component="span"
                        sx={{
                            fontSize: "16px",
                        }}
                    >
                        {question?.text}
                    </Typography>

                    {
                        question.status === ANSWERED && (
                            <Box>
                                <Typography
                                    component="span"
                                    color='textSecondary'
                                    sx={{
                                        fontSize: "14px",
                                    }}
                                >
                                    {question?.answer.text}
                                </Typography>
                            </Box>

                        )
                    }

                    <Box
                        sx={{
                            mt: 2,
                            display: {
                                xs: "block",
                                lg: "flex",
                                sm: "flex",
                            },
                            alignItems: "center",
                        }}
                    >
                        {
                            question.status === UNANSWERED && (
                                <Typography variant="h6" fontWeight="500">
                                    Responder
                                </Typography>
                            )
                        }
                        <Typography
                            component="span"
                            color="textSecondary"
                            sx={{
                                fontSize: "14px",
                                ml: question.status === UNANSWERED && 2,
                            }}
                        >
                            {date}
                        </Typography>
                    </Box>
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                <CustomTextField fullWidth multiline onChange={(e) => setAnswer(e.target.value)}/>
                <Box sx={{ mt: 1, float: 'right', mb: 3 }}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={() => asnwerQuestion(question.seller_id, question.id, answer)}
                    >
                        Enviar
                    </Button>
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}

export default QuestionItem