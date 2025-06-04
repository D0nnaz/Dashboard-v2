import { Card, CardContent } from "@/components/ui/card"
import { BookOpen } from "lucide-react"
import Link from "next/link"

export function ReadingTip() {
  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col p-6">
        <h3 className="text-sm font-medium">Mijn leestip voor jou</h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Je hebt deze maand 3 privacy alerts gehad. Wil je verbeteren op dit gebied?
        </p>

        <div className="mt-4 flex items-start gap-3">
          <div className="rounded-md bg-primary/10 p-2">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Best Practices voor Anonimiseren</h4>
            <p className="text-xs text-muted-foreground">5 min read</p>
          </div>
        </div>

        <div className="mt-auto flex gap-4 pt-4">
          <Link href="/article" className="text-sm text-primary hover:underline">
            Lees artikel
          </Link>
          <Link href="/knowledge-base" className="text-sm text-primary hover:underline">
            Ga naar kennisbank
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
