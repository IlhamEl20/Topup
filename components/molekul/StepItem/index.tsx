import RootLayout from "@/app/layout";
import Image from "next/image";
import React from "react";
interface StepItemProps {
  icon: "step1" | "step2" | "step3";
  title: string;
  desc: string;
  desc1: string;
}

export default function StepItem(props: StepItemProps) {
  const { icon, title,desc,desc1 } = props;
  return (
    <RootLayout>
      <div className="col-lg-4">
        <div className="card feature-card border-0">
          <Image
            src={`/icon/${icon}.svg`}
            width={80}
            height={80}
            alt=""
            className="mb-30"
          />
          <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
          <p className="text-lg color-palette-1 mb-0">
            {desc}
           
            <br />
            {desc1}
         
          </p>
        </div>
      </div>
    </RootLayout>
  );
}
