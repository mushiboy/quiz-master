//Should accept the Question to be displayed as an input object and then add them to the question block and answer blocks
import CurrentQuestion from "./CurrentQuestion";
import Navbar from "./NavBar";
const QuestionPanelPage = () => {
  const sampleQuestion = {
    id: "1",
    question: "What is the capital of Canada?",
    quizId: "quiz123",
    options: {
      A: "Toronto",
      B: "Ottawa",
      C: "Vancouver",
      D: "Montreal",
    },
    correctAnswer: "B",
  };

  return (
    <div>
      <Navbar currentPage="game-page" />
      <div className="container mx-auto mt-8">
        <CurrentQuestion question={sampleQuestion}></CurrentQuestion>
      </div>
    </div>
  );
};

export default QuestionPanelPage;
