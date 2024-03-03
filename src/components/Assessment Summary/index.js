import './index.css'

const AssessmentSummary = props => {
  const {
    answeredQuestions,
    unansweredQuestions,
    questions,

    onSubmit,
    onQuestionClick,
    selectedQuestionIndex,
  } = props

  return (
    <div className="assessment-summary">
      <div className="answered-unanswered-card">
        <p className="answered">
          <span className="answered-span">{answeredQuestions}</span> Answered
          Questions
        </p>
        <p className="unanswered">
          <span className="unanswered-span">
            {' '}
            {unansweredQuestions + questions.length - answeredQuestions}
          </span>{' '}
          Unanswered Questions
        </p>
      </div>
      <hr className="summary-horizontal-line" />
      <div className="question-number-container">
        <h1 className="question-number-heading">
          Question({questions.length})
        </h1>
        <ul className="question-number-card">
          {questions.map((item, index) => (
            <button
              type="button"
              className={
                index === selectedQuestionIndex
                  ? 'question-number selected'
                  : 'question-number'
              }
              key={item.id}
              onClick={() => onQuestionClick(item.id)}
            >
              {index + 1}
            </button>
          ))}
        </ul>
      </div>
      <div className="submit-btn-card">
        <button type="button" className="submit-btn" onClick={onSubmit}>
          Submit Assessment
        </button>
      </div>
    </div>
  )
}

export default AssessmentSummary
