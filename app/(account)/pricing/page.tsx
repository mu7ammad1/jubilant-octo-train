import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PricingComparison() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full p-4">
      <div className="bg-secondary rounded-3xl p-12 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 gradient box">
        <div className="flex flex-col">
          <div className="mb-6">
            <h2 className="text-4xl font-bold border-b border-primary/40 border-dashed border-spacing-10 pb-3">
              $9.99 <span className="text-lg font-normal text-primary/70">/month</span>
            </h2>
            <h3 className="text-2xl font-semibold mt-4">Basic Plan</h3>
            <p className="text-primary/70 mt-2">Unleash the Power of Imagination!</p>
          </div>

          <div className="space-y-2 mb-8">
            <div className="flex justify-start gap-3 items-center">
              <Check className="w-4 h-4" />
              <span className="dark:text-[#e2e2e2]">~3,200 Po</span>
            </div>
            <div className="flex justify-start gap-3 items-center">
              <Check className="w-4 h-4" />
              <span className="dark:text-[#e2e2e2]">2 Users team</span>
            </div>
            <div className="flex justify-start gap-3 items-center">
              <Check className="w-4 h-4" />
              <span className="dark:text-[#e2e2e2]">2 Users team</span>
            </div>
          </div>

          <Button variant={"default"} size={"lg"} className="rounded-full mt-auto py-6">
            Choose plan
          </Button>
        </div>

        <div className="flex flex-col">
          <div className="mb-6">
            <h2 className="text-4xl font-bold border-b border-primary/40 border-dashed border-spacing-10 pb-3">
              $19 <span className="text-lg font-normal text-primary/70">/month</span>
            </h2>
            <h3 className="text-2xl font-semibold mt-4">Pro Plan</h3>
            <p className="text-primary/70 mt-2">Elevate Your Creative Vision!</p>
          </div>

          <div className="space-y-2 mb-8">
            <div className="flex justify-start gap-3 items-center">
              <Check className="w-4 h-4" />
              <span className="dark:text-[#e2e2e2]">~3,200 </span>
            </div>
            <div className="flex justify-start gap-3 items-center">
              <Check className="w-4 h-4" />
              <span className="dark:text-[#e2e2e2]">~1,600 images</span>
            </div>
            <div className="flex justify-start gap-3 items-center">
              <Check className="w-4 h-4" />
              <span className="dark:text-[#e2e2e2]">~16 videos</span>
            </div>
            <div className="flex justify-start gap-3 items-center">
              <Check className="w-4 h-4" />
              <span className="dark:text-[#e2e2e2]">~19000 realtime image 1024px</span>
            </div>
            <div className="flex justify-start gap-3 items-center">
              <Check className="w-4 h-4" />
              <span className="dark:text-[#e2e2e2]">~180 Enhancer Upscales 2k</span>
            </div>
            <div className="flex justify-start gap-3 items-center">
              <Check className="w-4 h-4" />
              <span className="dark:text-[#e2e2e2]">1 Hour Video Animation</span>
            </div>

          </div>

          <Button variant={"default"} size={"lg"} className="rounded-full mt-auto py-6">
            Choose plan
          </Button>
        </div>

        <div className="flex flex-col">
          <div className="mb-6">
            <h2 className="text-4xl font-bold border-b border-primary/40 border-dashed border-spacing-10 pb-3">
              $49 <span className="text-lg font-normal text-primary/70">/month</span>
            </h2>
            <h3 className="text-2xl font-semibold mt-4">Enterprise Plan</h3>
            <p className="text-primary/70 mt-2">Master the Art of Limitless Creation!</p>
          </div>

          <div className="space-y-2 mb-8">
            <div className="flex justify-start gap-3 items-center">
              <Check className="w-4 h-4" />
              <span>2 Users team</span>
            </div>
            <div className="flex justify-start gap-3 items-center">
              <Check className="w-4 h-4" />
              <span>2 Users team</span>
            </div>
            <div className="flex justify-start gap-3 items-center">
              <Check className="w-4 h-4" />
              <span className="dark:text-[#e2e2e2]">2 Users team</span>
            </div>
            <div className="flex justify-start gap-3 items-center">
              <Check className="w-4 h-4" />
              <span className="dark:text-[#e2e2e2]">2 Users team</span>
            </div>
            <div className="flex justify-start gap-3 items-center">
              <Check className="w-4 h-4" />
              <span className="dark:text-[#e2e2e2]">2 Users team</span>
            </div>
          </div>

          <Button variant={"default"} size={"lg"} className="rounded-full mt-auto py-6">
            Choose plan
          </Button>
        </div>
      </div>
    </div>
  )
}

