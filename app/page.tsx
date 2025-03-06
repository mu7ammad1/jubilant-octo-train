import { Button } from "@/components/ui/button";
import { ArrowRightIcon, DicesIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/footer";
import Image from "next/image";
import D3 from '@/assets/images/3d.png'
import Link from "next/link";

export default function HomeScreen() {
  return (
    <div className="w-full flex flex-col gap-20 justify-around items-center min-h-screen">
      <section className="flex flex-col justify-center items-center w-full min-h-52 gap-10">
        <h1 className="tracking-wider text-4xl md:text-3xl font-medium text-center">
          What can I help you ship?
        </h1>
        <div className="flex flex-col w-full max-w-2xl items-center border p-2 rounded-3xl bg-neutral-100 placeholder:text-black dark:bg-secondary/90 border-none box">
          <Textarea
            placeholder="Tell us a little bit about Imegin"
            className="border-0 block w-full resize-none shadow-none focus-visible:ring-offset-0 focus-visible:ring-0 md:text-lg tracking-normal bg-transparent placeholder:text-primary/40"
          />
          <div className="flex items-center w-full justify-between">
            <div className="flex items-center gap-2 justify-between hover:*:bg-primary-foreground">
              <Button type="submit" variant={"secondary"} size={"icon"} className="rounded-full">
                <DicesIcon className="h-5 w-5" />
              </Button>
              <Button type="submit" variant={"secondary"} size={"default"} className="rounded-full">
                Image style
              </Button>
              <Button type="submit" variant={"secondary"} size={"default"} className="rounded-full">
                add style
              </Button>
            </div>
            <Button type="submit" variant={"default"} size={"icon"} className="rounded-full w-auto h-auto p-2">
              <ArrowRightIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center w-full">
        <section className="w-full *:w-96 *:h-40 flex flex-wrap justify-center gap-5 *:bg-secondary/50">
          <Link href={'/'} className="flex gap-3 w-full rounded-2xl">
            <Image alt="D3" src={D3} className="w-1/3 h-full rounded-s-2xl" />
            <div className="w-2/3 space-y-2">
              <h3 className="text-2xl font-semibold tracking-wide">3D Isomertic</h3>
              <p className="text-sm font-thin tracking-widest">Vibrant and minimalist 3D origami.</p>
              <Button variant={"secondary"} size={"sm"} className="py-0.5 px-5 rounded-full">Try</Button>
            </div>
          </Link>

          <Link href={'/'} className="flex gap-3 w-full rounded-2xl">
            <Image alt="D3" src={D3} className="w-1/3 h-full rounded-s-2xl" />
            <div className="w-2/3 space-y-2">
              <h3 className="text-2xl font-semibold tracking-wide">3D Isomertic</h3>
              <p className="text-sm font-thin tracking-widest">Vibrant and minimalist 3D origami.</p>
              <Button variant={"secondary"} size={"sm"} className="py-0.5 px-5 rounded-full">Try</Button>
            </div>
          </Link>

          <Link href={'/'} className="flex gap-3 w-full rounded-2xl">
            <Image alt="D3" src={D3} className="w-1/3 h-full rounded-s-2xl" />
            <div className="w-2/3 space-y-2">
              <h3 className="text-2xl font-semibold tracking-wide">3D Isomertic</h3>
              <p className="text-sm font-thin tracking-widest">Vibrant and minimalist 3D origami.</p>
              <Button variant={"secondary"} size={"sm"} className="py-0.5 px-5 rounded-full">Try</Button>
            </div>
          </Link>

          <Link href={'/'} className="flex gap-3 w-full rounded-2xl">
            <Image alt="D3" src={D3} className="w-1/3 h-full rounded-s-2xl" />
            <div className="w-2/3 space-y-2">
              <h3 className="text-2xl font-semibold tracking-wide">3D Isomertic</h3>
              <p className="text-sm font-thin tracking-widest">Vibrant and minimalist 3D origami.</p>
              <Button variant={"secondary"} size={"sm"} className="py-0.5 px-5 rounded-full">Try</Button>
            </div>
          </Link>

          <Link href={'/'} className="flex gap-3 w-full rounded-2xl">
            <Image alt="D3" src={D3} className="w-1/3 h-full rounded-s-2xl" />
            <div className="w-2/3 space-y-2">
              <h3 className="text-2xl font-semibold tracking-wide">3D Isomertic</h3>
              <p className="text-sm font-thin tracking-widest">Vibrant and minimalist 3D origami.</p>
              <Button variant={"secondary"} size={"sm"} className="py-0.5 px-5 rounded-full">Try</Button>
            </div>
          </Link>

          <Link href={'/'} className="flex gap-3 w-full rounded-2xl">
            <Image alt="D3" src={D3} className="w-1/3 h-full rounded-s-2xl" />
            <div className="w-2/3 space-y-2">
              <h3 className="text-2xl font-semibold tracking-wide">3D Isomertic</h3>
              <p className="text-sm font-thin tracking-widest">Vibrant and minimalist 3D origami.</p>
              <Button variant={"secondary"} size={"sm"} className="py-0.5 px-5 rounded-full">Try</Button>
            </div>
          </Link>

        </section>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
