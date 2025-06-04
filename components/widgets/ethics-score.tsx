"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Info } from "lucide-react"

export function EthicsScore() {
  const [showDetails, setShowDetails] = useState(false)
  const score = 75
  const level = "Level 3"
  const title = "Transparency Champ"

  // Calculate the circumference and the filled portion for the donut chart
  const radius = 60
  const circumference = 2 * Math.PI * radius
  const filled = (score / 100) * circumference
  const strokeWidth = 12

  return (
    <>
      <Card className="flex h-full flex-col items-center justify-center p-6 relative">
        <button
          onClick={() => setShowDetails(true)}
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="View details"
        >
          <Info className="h-5 w-5" />
        </button>

        <div className="relative flex h-[140px] w-[140px] items-center justify-center">
          {/* Background circle */}
          <svg className="absolute h-full w-full -rotate-90" viewBox="0 0 150 150">
            <circle cx="75" cy="75" r={radius} fill="none" stroke="hsl(var(--muted))" strokeWidth={strokeWidth} />
            {/* Foreground circle */}
            <circle
              cx="75"
              cy="75"
              r={radius}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={circumference - filled}
              strokeLinecap="round"
            />
          </svg>

          {/* Score and level text */}
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl font-bold">{score}%</span>
            <span className="text-sm text-muted-foreground">{level}</span>
          </div>
        </div>

        <Badge variant="secondary" className="mt-4">
          {title}
        </Badge>
      </Card>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Ethics Score Details</DialogTitle>
          </DialogHeader>

          <div className="mt-4 space-y-6">
            {/* Details content - simplified for this example */}
            <div className="flex items-center gap-4">
              <div className="relative flex h-[80px] w-[80px] flex-shrink-0 items-center justify-center">
                <svg className="absolute h-full w-full -rotate-90" viewBox="0 0 150 150">
                  <circle cx="75" cy="75" r={radius} fill="none" stroke="hsl(var(--muted))" strokeWidth={strokeWidth} />
                  <circle
                    cx="75"
                    cy="75"
                    r={radius}
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference - filled}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="flex flex-col items-center justify-center">
                  <span className="text-xl font-bold">{score}%</span>
                </div>
              </div>

              <div>
                <h3 className="font-medium">
                  {level} - {title}
                </h3>
                <p className="text-sm text-muted-foreground">25 points to Level 4</p>
              </div>
            </div>

            {/* Score breakdown */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Score Breakdown</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-md border p-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Privacy</span>
                    <span className="text-sm font-medium">22/30</span>
                  </div>
                </div>
                <div className="rounded-md border p-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Bias</span>
                    <span className="text-sm font-medium">18/30</span>
                  </div>
                </div>
                <div className="rounded-md border bg-primary/5 p-3">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Transparency</span>
                    <span className="text-sm font-medium">28/30</span>
                  </div>
                </div>
                <div className="rounded-md border p-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Legal</span>
                    <span className="text-sm font-medium">7/10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
