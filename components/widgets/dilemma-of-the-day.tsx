"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Quote } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"

export function DilemmaOfTheDay() {
  const [showReflection, setShowReflection] = useState(false)
  const [hasResponded, setHasResponded] = useState(false)
  const [response, setResponse] = useState("")

  const handleSubmit = () => {
    if (response.trim()) {
      setHasResponded(true)
    }
  }

  return (
    <>
      <Card className="flex h-full flex-col justify-between p-6 relative">
        <div className="absolute left-6 top-6 text-primary/60">
          <Quote className="h-6 w-6" />
        </div>

        <div className="flex flex-1 flex-col items-center justify-center px-4 pt-8">
          <p className="text-center text-lg font-medium leading-relaxed">
            Zou je het gebruik van AI-afbeeldingen aan een klant onthullen als ze er niet specifiek naar vragen?
          </p>
        </div>

        <div className="flex justify-end mt-6">
          <Button onClick={() => setShowReflection(true)} className="rounded-lg">
            Reflect Now
          </Button>
        </div>
      </Card>

      <Dialog open={showReflection} onOpenChange={setShowReflection}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Dilemma Reflection</DialogTitle>
          </DialogHeader>

          <div className="mt-2">
            <div className="rounded-md bg-muted p-4">
              <div className="flex items-center gap-2">
                <Quote className="h-5 w-5 text-primary" />
                <h3 className="font-medium">Transparency Dilemma</h3>
              </div>
              <p className="mt-2 text-sm">
                Zou je het gebruik van AI-afbeeldingen aan een klant onthullen als ze er niet specifiek naar vragen?
              </p>
            </div>

            {!hasResponded ? (
              <div className="mt-4 space-y-4">
                <Textarea
                  placeholder="Share your thoughts on this dilemma..."
                  className="min-h-[120px]"
                  value={response}
                  onChange={(e) => setResponse(e.target.value)}
                />
                <Button onClick={handleSubmit}>Submit Reflection</Button>
              </div>
            ) : (
              <Tabs defaultValue="personal" className="mt-4">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="personal">Your Reflection</TabsTrigger>
                  <TabsTrigger value="community">Community</TabsTrigger>
                </TabsList>

                <TabsContent value="personal" className="mt-4 space-y-4">
                  <div className="rounded-md bg-muted/50 p-4">
                    <p className="text-sm">{response}</p>
                  </div>

                  <div className="rounded-md border p-4">
                    <h4 className="font-medium">Charlie's Thoughts</h4>
                    <p className="mt-2 text-sm">
                      Good reflection! Transparency is essential when building trust with clients. Many professionals
                      choose to disclose AI-generated content even when not asked, as it establishes an honest
                      relationship and prevents potential issues later.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="community" className="mt-4 space-y-4">
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="rounded-md bg-muted/50 p-3 text-sm">
                        <p className="font-medium">Jane Doe</p>
                        <p className="mt-1">
                          I always disclose AI-generated content to my clients. It's about building trust and being
                          transparent about my process.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>MS</AvatarFallback>
                      </Avatar>
                      <div className="rounded-md bg-muted/50 p-3 text-sm">
                        <p className="font-medium">Mark Smith</p>
                        <p className="mt-1">
                          I think it depends on the client and project. For creative explorations, I might not mention
                          it, but for final deliverables, I always disclose.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/community-discussion">View Full Discussion</Link>
                  </Button>
                </TabsContent>
              </Tabs>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
