import RootLayout from "@/app/layout";
import React from "react";
import GameItem from "../../molekul/GameItem";

export default function FeaturedGame() {
  return (
    <RootLayout>
      <section className="featured-game pt-50 pb-50">
        <div className="container-fluid">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">
            Our Featured
            <br /> Games This Year
          </h2>
          <div
            className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
            data-aos="fade-up"
          >
            <GameItem
              title="Super Mechs"
              catagory="Mobile"
              thumbnail="Thumbnail-1"
            />
            <GameItem
              title="Call of Duty: Modern"
              catagory="Mobile"
              thumbnail="Thumbnail-2"
            />
            <GameItem
              title="Mobile Legends"
              catagory="Mobile"
              thumbnail="Thumbnail-3"
            />
            <GameItem
              title="Clash of Clans"
              catagory="Mobile"
              thumbnail="Thumbnail-4"
            />
            <GameItem
              title="Valorant"
              catagory="Desktop"
              thumbnail="Thumbnail-5"
            />
          </div>
        </div>
      </section>
    </RootLayout>
  );
}
