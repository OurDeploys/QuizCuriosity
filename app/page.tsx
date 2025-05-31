import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Brain, Star, Trophy, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-yellow-300">
          {/* Header com ícones decorativos */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <Star className="w-8 h-8 text-yellow-500 animate-pulse" />
            <Brain className="w-12 h-12 text-purple-600" />
            <Star className="w-8 h-8 text-yellow-500 animate-pulse" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Quiz das
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}
              Curiosidades
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Teste seus conhecimentos em diversos temas e níveis de dificuldade! Escolha seu tema favorito e desafie-se!
          </p>

          {/* Características do quiz */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-100 rounded-xl p-4 border-2 border-blue-200">
              <Trophy className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-blue-800 font-semibold">Múltiplos Temas</p>
            </div>
            <div className="bg-green-100 rounded-xl p-4 border-2 border-green-200">
              <Zap className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-green-800 font-semibold">3 Níveis de Dificuldade</p>
            </div>
            <div className="bg-yellow-100 rounded-xl p-4 border-2 border-yellow-200">
              <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <p className="text-yellow-800 font-semibold">Feedback Instantâneo</p>
            </div>
          </div>

          <Link href="/temas">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-200 border-4 border-white"
            >
              🚀 Escolher Tema
            </Button>
          </Link>

          <div className="mt-6 flex justify-center gap-2">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
