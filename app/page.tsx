import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CircleDashedIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/footer";

export default function HomeScreen() {
  return (
    <div className="w-full flex flex-col justify-around items-center min-h-screen">
      <section className="flex flex-col justify-center items-center w-full min-h-52 gap-10">
        <h1 className="tracking-wider text-4xl md:text-3xl font-medium text-center">
          What can I help you ship?
        </h1>
        <div className="flex flex-col w-full max-w-2xl items-center border p-2 rounded-3xl bg-neutral-100 placeholder:text-black dark:bg-secondary border-none">
          <Textarea
            placeholder="Tell us a little bit about Imegin"
            className="border-0 block w-full resize-none shadow-none focus-visible:ring-offset-0 focus-visible:ring-0 md:text-lg tracking-normal bg-transparent placeholder:text-primary/40"
          />
          <div className="flex items-center w-full justify-between">
            <div className="flex items-center gap-2 justify-between hover:*:bg-primary/10">
              <Button type="submit" variant={"outline"} size={"icon"} className="rounded-full">
                <CircleDashedIcon className="h-5 w-5" />
              </Button>
              <Button type="submit" variant={"outline"} size={"default"} className="rounded-full">
                add style
              </Button>
            </div>
            <Button type="submit" variant={"default"} size={"icon"} className="rounded-full w-auto h-auto p-2">
              <ArrowRightIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      <section>
        <div></div>
      </section>
      <Footer />
    </div>
  );
}
