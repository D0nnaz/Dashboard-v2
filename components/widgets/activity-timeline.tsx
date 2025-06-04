"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Brain, Eye } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function ActivityTimeline() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const timelineItems = [
    {
      id: 1,
      date: "Vandaag",
      time: "10:30",
      icon: AlertTriangle,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-500",
      title: "Privacy-risico",
      link: "/review-prompt",
      actionLabel: "Bekijk prompt",
    },
    {
      id: 2,
      date: "Gisteren",
      time: "14:15",
      icon: Brain,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-500",
      title: "Bias gedetecteerd",
      link: "/review-prompt",
      actionLabel: "Bekijk prompt",
    },
    {
      id: 3,
      date: "7 mei",
      time: "15:45",
      icon: Eye,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-500",
      title: "Onheldere prompt",
      link: "/review-prompt",
      actionLabel: "Bekijk prompt",
    },
    {
      id: 4,
      date: "5 mei",
      time: "09:20",
      icon: AlertTriangle,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-500",
      title: "Gevoelige info",
      link: "/review-prompt",
      actionLabel: "Bekijk prompt",
    },
    {
      id: 5,
      date: "3 mei",
      time: "11:10",
      icon: Brain,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-500",
      title: "Bias-alert",
      link: "/review-prompt",
      actionLabel: "Bekijk prompt",
    },
    {
      id: 6,
      date: "1 mei",
      time: "16:30",
      icon: Eye,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-500",
      title: "Gebrek transparantie",
      link: "/review-prompt",
      actionLabel: "Bekijk prompt",
    },
  ]

  return (
    <Card className="h-full overflow-visible">
      <CardContent className="flex h-full flex-col p-6 overflow-visible">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-medium">Mijn laatste waarschuwingen</h3>
          <Link href="/history" className="text-xs text-primary hover:underline">
            Bekijk alle activiteit
          </Link>
        </div>

        <div className="relative overflow-visible mb-8">
          <div ref={scrollRef} className="relative scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
            {/* Wrapper zorgt voor ruimte onderaan voor de datums */}
            <div className="relative overflow-visible min-w-max px-2 pb-10">
              {/* Flex-container zo hoog als de bolletjes */}
              <div className="relative flex items-center">
                {/* 1px-lijn precies door het midden van de bolletjes */}
                <div className="absolute inset-0 flex items-center pointer-events-none">
                  <span className="block h-px w-full bg-muted" />
                </div>
                {/* Bolletjes + tooltips + datums */}
                <div className="relative flex gap-16 z-10">
                  {timelineItems.map((item) => (
                    <div key={item.id} className="group relative">
                      <div
                        className={cn(
                          "h-4 w-4 rounded-full border-2 border-background cursor-pointer transition-transform",
                          item.bgColor,
                          "group-hover:scale-125",
                        )}
                      />
                      {/* datum onder het bolletje */}
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-muted-foreground">
                        {item.date}
                      </div>
                      {/* tooltip */}
                      <div className="absolute -left-20 -top-28 w-48 rounded-md border bg-card p-3 shadow-md invisible opacity-0 transition-all group-hover:visible group-hover:opacity-100 z-50">
                        <div className="flex items-start gap-2">
                          <item.icon className={cn("h-5 w-5", item.iconColor)} />
                          <div className="flex-1">
                            <p className="font-medium">{item.title}</p>
                            <p className="text-xs text-muted-foreground">{item.time}</p>
                            <Link
                              href={item.link}
                              className="mt-2 inline-block text-sm text-primary hover:underline font-medium"
                            >
                              {item.actionLabel}
                            </Link>
                          </div>
                        </div>
                        <div className="absolute -bottom-2 left-20 h-4 w-4 rotate-45 border-b border-r bg-card" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* einde scroll-container */}
          </div>
        </div>

        <div className="mt-auto rounded-md bg-green-500/10 p-3">
          <p className="text-sm">Geweldige voortgang! Je hebt deze maand 5 prompts geanonimiseerd.</p>
        </div>
      </CardContent>
    </Card>
  )
}
