"use client"

import { useState, useEffect, useRef } from "react"
import { X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const toneResponses = {
  friendly: [
    "Dat is een goede vraag over ethiek! Het belangrijkste principe hier is transparantie met je belanghebbenden.",
    "Ik begrijp je zorgen. Bij AI-ethiek is het belangrijk om zowel de technische als sociale implicaties te overwegen.",
    "Bedankt voor het delen. Vanuit ethisch perspectief is het belangrijk om te overwegen hoe dit gebruikersvertrouwen en privacy kan beïnvloeden.",
    "Goed punt! Veel organisaties worstelen met vergelijkbare ethische vragen. Heb je overwogen om je besluitvormingsproces te documenteren?",
  ],
  formal: [
    "Met betrekking tot uw vraag over ethische overwegingen, transparantie met belanghebbenden is een fundamenteel principe om te overwegen.",
    "Uw zorg is terecht. Bij het behandelen van AI-ethiek moet men zowel technische implementatie als maatschappelijke gevolgen evalueren.",
    "Dank voor uw input. Vanuit ethisch oogpunt zou het verstandig zijn om potentiële effecten op gebruikersvertrouwen en privacy te beoordelen.",
    "Een geldige observatie. Talrijke organisaties worden geconfronteerd met vergelijkbare ethische dilemma's. Heeft u een documentatieprotocol voor uw besluitvormingsproces geïmplementeerd?",
  ],
  sarcastic: [
    "Oh, ethiek! Ieders favoriete onderwerp bij etentjes. Maar serieus, transparantie is best een grote zaak hier.",
    "Wow, wat een verrassing - nog een lastige AI-ethiek vraag! Laat me raden, je vraagt je af of de technische dingen net zo belangrijk zijn als de sociale? Spoiler: ze zijn beide belangrijk.",
    "Bedankt voor dat fascinerende inzicht. Heb je misschien, heel misschien, nagedacht over hoe dit gebruikersvertrouwen kan beïnvloeden? Gewoon een wilde gedachte.",
    "Baanbrekende vraag! Je zult geschokt zijn te horen dat je pas de 500e persoon bent die dat vandaag vraagt. Misschien je beslissingen opschrijven? Revolutionair concept, ik weet het.",
  ],
}

export function CharlieAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAwake, setIsAwake] = useState(false)
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    { role: "assistant", content: "Hallo! Hoe kan ik je helpen met je ethische vragen vandaag?" },
  ])
  const [input, setInput] = useState("")
  const [tone, setTone] = useState("friendly")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const savedMessages = localStorage.getItem("charlieMessages")
    const savedTone = localStorage.getItem("charlieTone")

    if (savedMessages) {
      setMessages(JSON.parse(savedMessages))
    }

    if (savedTone) {
      setTone(savedTone)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("charlieMessages", JSON.stringify(messages))
  }, [messages])

  useEffect(() => {
    const handleToneChange = (event: StorageEvent) => {
      if (event.key === "charlieTone" && event.newValue) {
        setTone(event.newValue)
      }
    }

    window.addEventListener("storage", handleToneChange)
    return () => window.removeEventListener("storage", handleToneChange)
  }, [])

  const handleOpen = () => {
    setIsAwake(true)
    setTimeout(() => {
      setIsOpen(true)
    }, 300)
  }

  const handleClose = () => {
    setIsOpen(false)
    setTimeout(() => {
      setIsAwake(false)
    }, 300)
  }

  const handleSend = () => {
    if (input.trim()) {
      const updatedMessages = [...messages, { role: "user", content: input }]
      setMessages(updatedMessages)
      localStorage.setItem("charlieMessages", JSON.stringify(updatedMessages))

      setTimeout(() => {
        const responses = toneResponses[tone as keyof typeof toneResponses] || toneResponses.friendly
        const randomResponse = responses[Math.floor(Math.random() * responses.length)]

        const newMessages = [...updatedMessages, { role: "assistant", content: randomResponse }]
        setMessages(newMessages)
        localStorage.setItem("charlieMessages", JSON.stringify(newMessages))
      }, 1000)

      setInput("")
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  useEffect(() => {
    const openCharlie = () => handleOpen()
    window.openCharlie = openCharlie
    return () => {
      delete window.openCharlie
    }
  }, [])

  return (
    <>
      <div className="fixed bottom-2 right-2 z-50">
        <button
          onClick={handleOpen}
          aria-label="Open Charlie Assistant"
          style={{ border: "none", background: "transparent", padding: 0 }}
        >
          <div className="h-20 w-20 rounded-full bg-white shadow-md overflow-hidden hover:scale-105 transition-transform">
            <img
              src="https://i.postimg.cc/zGxCdnWr/charie-chat.png"
              alt="Charlie"
              className="object-cover h-full w-full"
            />
          </div>
        </button>
      </div>

      {isOpen && (
        <Card className="fixed bottom-24 right-4 z-50 w-80 shadow-lg transition-opacity duration-300 md:w-96">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="https://i.postimg.cc/MGXygvbj/charlie-chat.png"
                  alt="Charlie"
                  className="h-10 w-10 object-contain"
                />
                <div>
                  <CardTitle className="text-base">Charlie</CardTitle>
                  <p className="text-xs text-muted-foreground">Ethics Assistant</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={handleClose}
                aria-label="Close Charlie Assistant"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="h-[300px] overflow-y-auto p-3">
            <div className="flex flex-col gap-3">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn("flex w-full", message.role === "user" ? "justify-end" : "justify-start")}
                >
                  <div
                    className={cn(
                      "max-w-[80%] rounded-lg px-3 py-2 text-sm",
                      message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground",
                    )}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter className="flex gap-2 p-3">
            <Textarea
              placeholder="Vraag Charlie over ethiek..."
              className="min-h-[40px] resize-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSend()
                }
              }}
            />
            <Button size="icon" onClick={handleSend}>
              <Send className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}
    </>
  )
}

declare global {
  interface Window {
    openCharlie?: () => void
  }
}
