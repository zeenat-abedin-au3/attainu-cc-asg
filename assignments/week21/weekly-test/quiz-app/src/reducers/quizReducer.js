import { QUESTIONS } from "../data";

const initialState = {
  questions: QUESTIONS.questions.map(question => ({
    ...question,
    selected: null
  })),
  currentQuestion: null,
  count: 0,
  length: QUESTIONS.questions.length
};

const manipulateArray = questions => {
  return questions.map(question => {
    if (question.selected === null) {
      return question;
    } else {
      question.options.map(option => {
        if (option.id === question.selected) {
          if (option.isAnswer) {
            question.givenAnswers = true;
          } else {
            question.givenAnswers = false;
          }
        }
        return option;
      });
      return question;
    }
  });
};

export const quizReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case "SELECTED_ANSWER":
      return {
        ...state,
        questions: state.questions.map(question => {
          if (question.id === payload.questionId) {
            question.selected = payload.optionId;
            return question;
          } else {
            return question;
          }
        })
      };
    case "SORTING_QUESTION":
      const sortArray = manipulateArray(state.questions);

      return {
        ...state,
        questions: sortArray
      };
    case "FIRST_QUESTION":
      return {
        ...state,
        currentQuestion: state.questions[0],
        count: 0
      };
    case "PREV_QUESTION":
      return {
        ...state,
        currentQuestion: state.questions[state.count - 1],
        count: state.count - 1
      };
    case "LAST_QUESTION":
      return {
        ...state,
        currentQuestion: state.questions[state.questions.length - 1],
        count: state.questions.length - 1
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestion: state.questions[state.count + 1],
        count: state.count + 1
      };
    case "RESTART_QUIZ":
      return {
        questions: QUESTIONS.questions.map(question => ({
          ...question,
          selected: null
        })),
        currentQuestion: state.questions[0],
        count: 0,
        length: QUESTIONS.questions.length
      };
    default:
      return state;
  }
};
