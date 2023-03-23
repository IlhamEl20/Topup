import RootLayout from "@/app/layout";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import React from "react";
interface GameItemProps {
  title: string;
  catagory: string;
  thumbnail:
    | "Thumbnail-1"
    | "Thumbnail-2"
    | "Thumbnail-3"
    | "Thumbnail-4"
    | "Thumbnail-5";
}

export default function GameItem(props: GameItemProps) {
  const { title, catagory, thumbnail } = props;
  return (
    <RootLayout>
      <div className="featured-game-card position-relative">
        <Link href="/detail">
          <div className="blur-sharp">
            <Image
              className="thumbnail"
              src={`/img/${thumbnail}.png`}
              width={205}
              height={270}
              alt="thumbnail"
            />
          </div>
          <div className="cover position-absolute bottom-0 m-32">
            <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
              <div className="game-icon mx-auto">
                <Image
                  src="/icon/gameitem1.svg"
                  width={54}
                  height={36}
                  alt=""
                />
              </div>
              <div>
                <p className="fw-semibold text-white text-xl m-0">{title}</p>
                <p className="fw-light text-white m-0">{catagory}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </RootLayout>
  );
}
