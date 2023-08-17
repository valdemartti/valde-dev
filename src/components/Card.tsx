import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { HoverSwitch } from "./ui/HoverSwitch";

export function Card() {
  return (
    <div>
      <div className="aspect-18/9 sm:aspect-18/5 relative overflow-hidden rounded-xl">
        <Image src="/unto-otso.jpg" layout="fill" objectFit="cover" alt="" />
      </div>
      <div className="w-full z-20 relative">
        <div className="w-full h-32 -translate-y-1/2 -mb-12 relative flex items-center justify-center">
          <div className="w-32 h-32 bg-background rounded-full flex items-center justify-center overflow-hidden outline outline-background">
            <Image
              src="/valtteri.jpeg"
              width={128}
              height={128}
              className="w-full h-full"
              alt="Valtteri Palonkorpi"
            />
          </div>
        </div>
        <CardHeader className="text-center">
          <CardTitle>Valtteri Palonkorpi</CardTitle>
          <HoverSwitch className="w-80 mx-auto">
            <CardDescription>
              Software Engineer at Elisa Esports
            </CardDescription>
            <CardDescription>
              Poodle dad with a love for creating things
            </CardDescription>
          </HoverSwitch>
          <div className="flex items-center justify-center gap-1 pt-2">
            <Link
              className={buttonVariants({ variant: "outline", size: "icon" })}
              href="https://twitter.com/valdemart"
              target="_blank"
            >
              <TwitterLogoIcon className="h-4 w-4" />
            </Link>
            <Link
              className={buttonVariants({ variant: "outline", size: "icon" })}
              href="https://github.com/valdemartti"
              target="_blank"
            >
              <GitHubLogoIcon className="h-4 w-4" />
            </Link>
            <Link
              className={buttonVariants({ variant: "outline", size: "icon" })}
              href="https://linkedin.com/in/valtteri-palonkorpi"
              target="_blank"
            >
              <LinkedInLogoIcon className="h-4 w-4" />
            </Link>
            <Link
              className={buttonVariants({ variant: "outline", size: "icon" })}
              href="https://instagram.com/valtteripalonkorpi"
              target="_blank"
            >
              <InstagramLogoIcon className="h-4 w-4" />
            </Link>
          </div>
        </CardHeader>
      </div>
    </div>
  );
}
