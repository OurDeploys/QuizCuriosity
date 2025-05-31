"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { temas, type Question } from "@/data/questions"
import { CheckCircle, XCircle, Trophy, RotateCcw, Home, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"

type GameState = "playing" | "finished"

interface QuizGameProps {
  tema: string
  dificuldade: string
}

export function QuizGame({ tema, dificuldade }: QuizGameProps) {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [gameState, setGameState] = useState<GameState>("playing")
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([])

  useEffect(() => {
    if (tema && dificuldade && temas[tema]) {
      const filteredQuestions = temas[tema].perguntas.filter((q) => q.dificuldade === dificuldade)
      setQuestions(filteredQuestions)
      setAnsweredQuestions(new Array(filteredQuestions.length).fill(false))
    }
  }, [tema, dificuldade])

  const progress = questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0

  const handleAnswerSelect = (answerIndex: number) => {
    if (showFeedback) return

    setSelectedAnswer(answerIndex)
    setShowFeedback(true)

    const isCorrect = answerIndex === questions[currentQuestion].correctAnswer
    if (isCorrect) {
      setScore(score + 1)
    }

    const newAnsweredQuestions = [...answeredQuestions]
    newAnsweredQuestions[currentQuestion] = true
    setAnsweredQuestions(newAnsweredQuestions)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    } else {
      setGameState("finished")
    }
  }

  const resetGame = () => {
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setGameState("playing")
    setAnsweredQuestions(new Array(questions.length).fill(false))
  }

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 90) return "🏆 Incrível! Você é um gênio!"
    if (percentage >= 70) return "🌟 Muito bom! Excelente conhecimento!"
    if (percentage >= 50) return "👍 Bom trabalho! Continue estudando!"
    return "📚 Não desista! Tente novamente!"
  }

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 90) return "text-yellow-600"
    if (percentage >= 70) return "text-green-600"
    if (percentage >= 50) return "text-blue-600"
    return "text-purple-600"
  }

  const getDificuldadeLabel = () => {
    switch (dificuldade) {
      case "facil":
        return "Fácil"
      case "medio":
        return "Médio"
      case "dificil":
        return "Difícil"
      default:
        return "Desconhecido"
    }
  }

  const getTemaLabel = () => {
    return tema.charAt(0).toUpperCase() + tema.slice(1)
  }

  if (gameState === "finished") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-yellow-300">
            <div className="flex justify-center mb-6">
              <Trophy className="w-20 h-20 text-yellow-500 animate-bounce" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Quiz Finalizado!</h1>

            <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-6 mb-6 border-2 border-blue-200">
              <p className="text-xl text-gray-700 mb-2">
                Tema: <span className="font-bold">{getTemaLabel()}</span> | Dificuldade:{" "}
                <span className="font-bold">{getDificuldadeLabel()}</span>
              </p>
              <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Sua Pontuação</p>
              <p className={`text-4xl md:text-6xl font-bold ${getScoreColor()} mb-2`}>
                {score}/{questions.length}
              </p>
              <p className="text-lg text-gray-600">{Math.round((score / questions.length) * 100)}% de acertos</p>
            </div>

            <p className="text-xl md:text-2xl font-semibold text-gray-700 mb-8">{getScoreMessage()}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={resetGame}
                size="lg"
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Jogar Novamente
              </Button>

              <Link href="/dificuldade?tema=ciencia">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Escolher Dificuldade
                </Button>
              </Link>

              <Link href="/temas">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-500 text-purple-600 hover:bg-purple-50 font-bold py-3 px-6 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Escolher Tema
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-yellow-300">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Carregando perguntas...</h1>
            <div className="flex justify-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
              <div
                className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-3 h-3 bg-green-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.3s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]
  const isCorrect = selectedAnswer === question.correctAnswer

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header com progresso */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 mb-6 shadow-lg border-2 border-yellow-300">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold text-gray-800">
              Pergunta {currentQuestion + 1} de {questions.length}
            </h2>
            <div className="text-lg font-bold text-purple-600">Pontuação: {score}</div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              Tema: {getTemaLabel()}
            </div>
            <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              Dificuldade: {getDificuldadeLabel()}
            </div>
          </div>
          <Progress value={progress} className="h-3 bg-gray-200" />
        </div>

        {/* Pergunta */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl border-4 border-blue-300 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-relaxed">{question.question}</h1>

          {/* Opções de resposta */}
          <div className="grid gap-4">
            {question.options.map((option, index) => {
              let buttonClass =
                "w-full p-4 text-left rounded-xl border-2 font-semibold text-lg transition-all duration-200 transform hover:scale-102"

              if (!showFeedback) {
                buttonClass += " border-gray-300 bg-white hover:border-blue-400 hover:bg-blue-50 hover:shadow-md"
              } else {
                if (index === question.correctAnswer) {
                  buttonClass += " border-green-500 bg-green-100 text-green-800"
                } else if (index === selectedAnswer && index !== question.correctAnswer) {
                  buttonClass += " border-red-500 bg-red-100 text-red-800"
                } else {
                  buttonClass += " border-gray-300 bg-gray-100 text-gray-600"
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={buttonClass}
                  disabled={showFeedback}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showFeedback && index === question.correctAnswer && (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    )}
                    {showFeedback && index === selectedAnswer && index !== question.correctAnswer && (
                      <XCircle className="w-6 h-6 text-red-600" />
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Feedback */}
          {showFeedback && (
            <div className="mt-6">
              <div
                className={`p-4 rounded-xl border-2 ${isCorrect ? "border-green-400 bg-green-50" : "border-red-400 bg-red-50"}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {isCorrect ? (
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-600" />
                  )}
                  <span className={`font-bold text-lg ${isCorrect ? "text-green-800" : "text-red-800"}`}>
                    {isCorrect ? "🎉 Correto!" : "❌ Incorreto!"}
                  </span>
                </div>
                <p className={`${isCorrect ? "text-green-700" : "text-red-700"}`}>{question.explanation}</p>
              </div>

              <div className="flex justify-center mt-6">
                <Button
                  onClick={handleNextQuestion}
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  {currentQuestion < questions.length - 1 ? "Próxima Pergunta" : "Ver Resultado"} →
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
