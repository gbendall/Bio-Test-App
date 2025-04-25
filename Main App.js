import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';

const questionBank = {
  "Photosynthesis": [
    {
      question: "Name the two products of the light-dependent stage of photosynthesis.",
      correct: "ATP and reduced NADP",
      options: ["ATP and oxygen", "ATP and reduced NADP", "NAD and glucose", "Oxygen and glucose"]
    },
    {
      question: "Describe what happens during the light-independent stage of photosynthesis.",
      correct: "CO₂ fixed by RuBP using Rubisco, forming GP, which is reduced to TP using ATP and reduced NADP.",
      options: [
        "Water is split to release electrons and protons",
        "Chlorophyll absorbs light energy",
        "CO₂ fixed by RuBP using Rubisco, forming GP, which is reduced to TP using ATP and reduced NADP.",
        "Glucose is directly formed from ATP and oxygen"
      ]
    },
    {
      question: "What pigment is primarily responsible for light absorption in photosynthesis?",
      correct: "Chlorophyll a",
      options: ["Chlorophyll a", "Chlorophyll b", "Carotenoids", "Xanthophyll"]
    },
    {
      question: "Which of the following is a product of the light-dependent reactions?",
      correct: "ATP",
      options: ["Glucose", "Oxygen", "ATP", "Carbon dioxide"]
    },
    {
      question: "Where in the chloroplast does the Calvin cycle take place?",
      correct: "Stroma",
      options: ["Thylakoid membrane", "Stroma", "Granum", "Lumen"]
    },
    {
      question: "Which molecule acts as a hydrogen carrier in photosynthesis?",
      correct: "NADP",
      options: ["ATP", "NADP", "Glucose", "Oxygen"]
    },
    {
      question: "Which of the following is not required for the light-dependent reaction?",
      correct: "Carbon dioxide",
      options: ["Light", "Water", "Carbon dioxide", "Chlorophyll"]
    },
    {
      question: "What is the enzyme responsible for carbon fixation in the Calvin cycle?",
      correct: "Rubisco",
      options: ["ATP synthase", "RuBP", "Rubisco", "NADP reductase"]
    },
    {
      question: "Which factor is most likely to limit photosynthesis on a bright, hot day?",
      correct: "Carbon dioxide concentration",
      options: ["Light intensity", "Temperature", "Water availability", "Carbon dioxide concentration"]
    },
    {
      question: "What happens to TP in the Calvin cycle?",
      correct: "Used to regenerate RuBP and form glucose",
      options: ["Forms starch only", "Is oxidised to CO₂", "Used to regenerate RuBP and form glucose", "Moves into mitochondria"]
    },
    {
      question: "How many turns of the Calvin cycle are needed to form one glucose molecule?",
      correct: "Six",
      options: ["One", "Two", "Four", "Six"]
    },
    {
      question: "Which of the following describes cyclic photophosphorylation?",
      correct: "Electrons return to PSI and ATP is produced without NADPH",
      options: ["Electrons move from PSI to NADP", "Oxygen is produced", "Electrons return to PSI and ATP is produced without NADPH", "Glucose is formed"]
    }
  ],
  "Cell Structure": [
    {
      question: "Which organelle is responsible for protein synthesis?",
      correct: "Ribosome",
      options: ["Mitochondrion", "Ribosome", "Golgi apparatus", "Smooth ER"]
    },
    {
      question: "Which microscope offers the highest resolution?",
      correct: "Transmission electron microscope",
      options: ["Light microscope", "Scanning electron microscope", "Transmission electron microscope", "Laser scanning confocal microscope"]
    }
    // TODO: Add 48 more real-style OCR questions for Cell Structure
  ],
  "Genetics": [
    {
      question: "What is meant by a dominant allele?",
      correct: "An allele that is expressed in the phenotype even when only one copy is present",
      options: [
        "An allele that only shows in homozygous condition",
        "An allele that causes disease",
        "An allele that is expressed in the phenotype even when only one copy is present",
        "An allele that codes for a recessive trait"
      ]
    },
    {
      question: "What is the probability of two heterozygous parents (Aa) producing a homozygous recessive child (aa)?",
      correct: "25%",
      options: ["0%", "25%", "50%", "75%"]
    }
    // TODO: Add 48 more real-style OCR questions for Genetics
  ],
  "Respiration": [
    {
      question: "Where does glycolysis occur in a cell?",
      correct: "Cytoplasm",
      options: ["Mitochondrial matrix", "Cytoplasm", "Nucleus", "Chloroplast"]
    },
    {
      question: "What is the final electron acceptor in aerobic respiration?",
      correct: "Oxygen",
      options: ["Carbon dioxide", "Water", "NADH", "Oxygen"]
    }
    // TODO: Add 48 more real-style OCR questions for Respiration
  ]
};

export default function BiologyQuizApp() {
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [started, setStarted] = useState(false);
  const [topic, setTopic] = useState('Photosynthesis');
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [questionAnswered, setQuestionAnswered] = useState(false);

  const handleNewQuestion = () => {
    const questions = questionBank[topic];
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
    setFeedback(null);
    setQuestionAnswered(false);
    setQuestionCount((prev) => prev + 1);
  };

  const handleAnswer = (option) => {
    if (questionAnswered) return;
    setQuestionAnswered(true);
    if (option === currentQuestion.correct) {
      setFeedback("✅ Correct!");
      setScore((prev) => prev + 1);
    } else {
      setFeedback(`❌ Incorrect. The correct answer is: ${currentQuestion.correct}`);
    }
  };

  if (!started) {
    return (
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Welcome to the OCR Biology Quiz</h1>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Name:</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-medium">Email:</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
          />
        </div>
        <Button className="w-full" onClick={() => setStarted(true)} disabled={!studentName || !studentEmail}>
          Start Quiz
        </Button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🌿 OCR A Level Biology Quiz 🌿</h1>
      <div className="mb-4 text-center text-lg">Score: {score} / {questionCount}</div>
      <div className="flex justify-center mb-6">
        <Select onValueChange={setTopic} defaultValue={topic}>
          <SelectTrigger className="w-64 text-lg font-medium text-center">{topic}</SelectTrigger>
          <SelectContent>
            {Object.keys(questionBank).map((t) => (
              <SelectItem key={t} value={t}>{t}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {currentQuestion && (
        <Card className="mt-4 shadow-lg border border-green-300">
          <CardContent className="p-6">
            <p className="text-xl font-semibold mb-4">🧪 Q: {currentQuestion.question}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentQuestion.options.map((option, idx) => (
                <Button key={idx} variant="outline" className="text-base" onClick={() => handleAnswer(option)}>
                  {option}
                </Button>
              ))}
            </div>
            {feedback && <p className="mt-6 text-lg font-medium text-blue-700">{feedback}</p>}
            {questionAnswered && (
              <Button className="mt-4" onClick={handleNewQuestion}>
                Next Question
              </Button>
            )}
          </CardContent>
        </Card>
      )}
      {!currentQuestion && (
        <Button className="mt-6 w-full" onClick={handleNewQuestion}>
          Start Quiz
        </Button>
      )}
    </div>
  );
}
