"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ArrowLeft,
  BookOpen,
  FlaskRoundIcon as Flask,
  Globe,
  History,
  Languages,
  CalculatorIcon as MathFunction,
  Palette,
} from "lucide-react"
import { temas } from "@/data/questions"

export default function TemasPage() {
  const temaIcons: Record<string, React.ReactNode> = {
    ciencia: <Flask className="w-12 h-12 text-blue-600" />,
    historia: <History className="w-12 h-12 text-amber-600" />,
    geografia: <Globe className="w-12 h-12 text-green-600" />,
    portugues: <BookOpen className="w-12 h-12 text-red-600" />,
    matematica: <MathFunction className="w-12 h-12 text-purple-600" />,
    artes: <Palette className="w-12 h-12 text-pink-600" />,
    idiomas: <Languages className="w-12 h-12 text-cyan-600" />,
  }

  const temaColors: Record<string, string> = {
    ciencia: "from-blue-400 to-blue-600",
    historia: "from-amber-400 to-amber-600",
    geografia: "from-green-400 to-green-600",
    portugues: "from-red-400 to-red-600",
    matematica: "from-purple-400 to-purple-600",
    artes: "from-pink-400 to-pink-600",
    idiomas: "from-cyan-400 to-cyan-600",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl border-4 border-yellow-300 mb-6">
          <div className="flex items-center mb-6">
            <Link href="/">
              <Button variant="ghost" size="icon" className="mr-4">
                <ArrowLeft className="h-6 w-6" />
              </Button>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Escolha um Tema</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.keys(temas).map((tema) => (
              <Link key={tema} href={`/dificuldade?tema=${tema}`} className="block">
                <Card className="p-6 hover:shadow-lg transition-all duration-200 transform hover:scale-105 border-2 border-gray-200 hover:border-blue-300 h-full">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="mb-4 p-4 rounded-full bg-gradient-to-br bg-opacity-20 bg-gray-100">
                      {temaIcons[tema] || <BookOpen className="w-12 h-12 text-gray-600" />}
                    </div>
                    <h2 className="text-xl font-bold mb-2 capitalize">{tema}</h2>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {temas[tema].descricao || `Teste seus conhecimentos em ${tema}`}
                    </p>
                    <div
                      className={`w-full py-2 px-4 rounded-full bg-gradient-to-r ${
                        temaColors[tema] || "from-gray-400 to-gray-600"
                      } text-white font-semibold`}
                    >
                      Selecionar
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
