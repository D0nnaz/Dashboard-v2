import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LockKeyhole, Target, Eye } from "lucide-react"
import Link from "next/link"

export function QuizProgress() {
  const quizzes = [
    {
      id: 1,
      name: "Privacy",
      icon: LockKeyhole,
      progress: 50,
      color: "bg-amber-500",
    },
    {
      id: 2,
      name: "Bias",
      icon: Target,
      progress: 33,
      color: "bg-purple-500",
    },
    {
      id: 3,
      name: "Transparency",
      icon: Eye,
      progress: 60,
      color: "bg-blue-500",
    },
  ]

  return (
    <Card className="flex h-full flex-col p-6 relative">
      <div className="absolute right-6 top-6">
        <Badge variant="outline" className="text-xs">
          3/5
        </Badge>
      </div>

      <div className="grid h-full grid-cols-1 gap-6">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="flex flex-col items-center">
            <quiz.icon className="mb-2 h-5 w-5 text-muted-foreground" />

            <div className="relative h-3 w-full overflow-hidden rounded-full bg-muted">
              <div className={`absolute left-0 top-0 h-full ${quiz.color}`} style={{ width: `${quiz.progress}%` }} />
            </div>

            <div className="mt-2 flex w-full items-center justify-between">
              <span className="text-xs">{quiz.name}</span>
              <span className="text-xs font-medium">{quiz.progress}%</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center">
        <Link href="/quiz" className="text-xs text-primary hover:underline">
          Continue Learning
        </Link>
      </div>
    </Card>
  )
}
