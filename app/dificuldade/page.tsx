"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Award, Shield, Swords } from "lucide-react"

export default function DificuldadePage() {
  const searchParams = useSearchParams()
  const tema = searchParams.get("tema") || "ciencia"

  const dificuldades = [
    {
      id: "facil",
      nome: "Fácil",
      descricao: "5 perguntas básicas para iniciantes",
      icon: <Shield className="w-12 h-12 text-green-600" />,
      color: "from-green-400 to-green-600",
      questoes: 5,
    },
    {
      id: "medio",
      nome: "Médio",
      descricao: "5 perguntas de dificuldade intermediária",
      icon: <Award className="w-12 h-12 text-yellow-600" />,
      color: "from-yellow-400 to-yellow-600",
      questoes: 5,
    },
    {
      id: "dificil",
      nome: "Difícil",
      descricao: "10 perguntas desafiadoras para especialistas",
      icon: <Swords className="w-12 h-12 text-red-600" />,
      color: "from-red-400 to-red-600",
      questoes: 10,
    },
  ]

  const temaNome = tema.charAt(0).toUpperCase() + tema.slice(1)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl border-4 border-yellow-300 mb-6">
          <div className="flex items-center mb-6">
            <Link href="/temas">
              <Button variant="ghost" size="icon" className="mr-4">
                <ArrowLeft className="h-6 w-6" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Escolha a Dificuldade</h1>
              <p className="text-gray-600">Tema: {temaNome}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dificuldades.map((dificuldade) => (
              <Link key={dificuldade.id} href={`/quiz?tema=${tema}&dificuldade=${dificuldade.id}`} className="block">
                <Card className="p-6 hover:shadow-lg transition-all duration-200 transform hover:scale-105 border-2 border-gray-200 hover:border-blue-300 h-full">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="mb-4 p-4 rounded-full bg-gradient-to-br bg-opacity-20 bg-gray-100">
                      {dificuldade.icon}
                    </div>
                    <h2 className="text-xl font-bold mb-2">{dificuldade.nome}</h2>
                    <p className="text-gray-600 mb-4 flex-grow">{dificuldade.descricao}</p>
                    <div
                      className={`w-full py-2 px-4 rounded-full bg-gradient-to-r ${dificuldade.color} text-white font-semibold`}
                    >
                      {dificuldade.questoes} Perguntas
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
