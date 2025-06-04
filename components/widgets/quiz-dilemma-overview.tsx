import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export function QuizDilemmaOverview() {
  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col p-6">
        <div className="space-y-6 flex-1">
          {/* Quizzes Section */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-medium">Quizzes</h3>
              <span className="text-xs text-muted-foreground">3/5 voltooid</span>
            </div>
            <Progress value={60} className="h-2" />
            <div className="mt-2">
              <Link href="/quiz" className="text-xs text-primary hover:underline">
                Start een Quiz
              </Link>
            </div>
          </div>

          {/* Ethical Dilemmas Section */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-medium">Ethical Dilemmas</h3>
              <span className="text-xs text-muted-foreground">2/4 voltooid</span>
            </div>
            <Progress value={50} className="h-2" />
            <div className="mt-2">
              <Link href="/dilemma" className="text-xs text-primary hover:underline">
                Start een Dilemma
              </Link>
            </div>
          </div>
        </div>

        {/* Action Link */}
        <div className="mt-auto text-right pt-4">
          <Link href="/settings/goals" className="text-xs text-primary hover:underline">
            Pas je doelen aan
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
