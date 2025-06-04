import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, PartyPopper } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function MotivationTip() {
  return (
    <Card className="flex h-full flex-col p-6">
      {/* Motivation section */}
      <div className="mb-6 flex items-center gap-3 rounded-md bg-green-500/10 p-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
          <PartyPopper className="h-4 w-4 text-green-500" />
        </div>
        <p className="text-sm font-medium">Great progress! You've anonymized 5 prompts this month.</p>
      </div>

      {/* Reading tip section */}
      <div className="flex flex-1 flex-col">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-medium">Reading Tip</h3>
        </div>

        <div className="flex gap-4">
          <div className="h-16 w-16 overflow-hidden rounded-md bg-muted">
            <Image
              src="/placeholder.svg?height=64&width=64"
              alt="Article thumbnail"
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col">
            <h4 className="font-medium">Anonymization</h4>
            <p className="text-xs text-muted-foreground">5 min read</p>

            <Button asChild variant="link" className="mt-auto h-auto justify-start p-0 text-xs">
              <Link href="/article">Read Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
