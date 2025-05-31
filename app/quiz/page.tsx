"use client"

import { useSearchParams } from "next/navigation"
import { QuizGame } from "@/components/quiz-game"

export default function QuizPage() {
  const searchParams = useSearchParams()
  const tema = searchParams.get("tema") || "ciencia"
  const dificuldade = searchParams.get("dificuldade") || "facil"

  return <QuizGame tema={tema} dificuldade={dificuldade} />
}
