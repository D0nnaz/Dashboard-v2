import { EthicsScore } from "@/components/widgets/ethics-score"
import { DilemmaOfTheDay } from "@/components/widgets/dilemma-of-the-day"
import { QuizDilemmaOverview } from "@/components/widgets/quiz-dilemma-overview"
import { ActivityTimeline } from "@/components/widgets/activity-timeline"
import { ReadingTip } from "@/components/widgets/reading-tip"

export function DashboardWidgets() {
  return (
    <div className="grid grid-cols-1 gap-5">
      {/* Row 1: Three equal blocks */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <EthicsScore />
        <DilemmaOfTheDay />
        <QuizDilemmaOverview />
      </div>

      {/* Row 2: Two blocks (2/3 and 1/3 width) */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div className="md:col-span-2">
          <ActivityTimeline />
        </div>
        <div className="md:col-span-1">
          <ReadingTip />
        </div>
      </div>
    </div>
  )
}
