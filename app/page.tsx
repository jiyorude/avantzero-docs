import React from "react";
import { useTranslations } from 'next-intl';
import GridBlock from "@/components/grid/gridblock";

export default function Home() {
  const t = useTranslations('HomePage');
  
  return (
    <main className="mxFlexCenter mt-10 overflow-scroll">
      <section className="grid grid-cols-4 gap-3 auto-rows-[200px] w-full">
        <aside className="col-span-2 row-span-2">
          <GridBlock
            header="Quickstart"
            backgroundColor="Red"
            textColor="White"
            linkTo="/"
            textFont="Bold"
            textSize="3XL"
            title="Hey there"
            ariaTitle="This is a aria title"
          />
        </aside>
        <GridBlock
          header="Background"
          backgroundColor="Red"
          textColor="White"
          linkTo="/"
          textFont="Bold"
          textSize="3XL"
          title="Hey there"
          ariaTitle="This is a aria title"
        />
        <GridBlock
          header="Requirements"
          backgroundColor="Red"
          textColor="White"
          linkTo="/"
          textFont="Bold"
          textSize="3XL"
          title="Hey there"
          ariaTitle="This is a aria title"
        />
        <GridBlock
          header="Installation"
          backgroundColor="Red"
          textColor="White"
          linkTo="/"
          textFont="Bold"
          textSize="3XL"
          title="Hey there"
          ariaTitle="This is a aria title"
        />
        <GridBlock
          header="Project Manager"
          backgroundColor="Red"
          textColor="White"
          linkTo="/"
          textFont="Bold"
          textSize="3XL"
          title="Hey there"
          ariaTitle="This is a aria title"
        />
        <GridBlock
          header="Data Generator"
          backgroundColor="Red"
          textColor="White"
          linkTo="/"
          textFont="Bold"
          textSize="3XL"
          title="Hey there"
          ariaTitle="This is a aria title"
        />
        <GridBlock
          header="Depth Generator"
          backgroundColor="Red"
          textColor="White"
          linkTo="/"
          textFont="Bold"
          textSize="3XL"
          title="Hey there"
          ariaTitle="This is a aria title"
        />
        <GridBlock
          header="Error Database"
          backgroundColor="Red"
          textColor="White"
          linkTo="/"
          textFont="Bold"
          textSize="3XL"
          title="Hey there"
          ariaTitle="This is a aria title"
        />
        <GridBlock
          header="License"
          backgroundColor="Black"
          textColor="White"
          linkTo="/"
          textFont="Bold"
          textSize="3XL"
          title="Hey there"
          ariaTitle="This is a aria title"
        />
        <GridBlock
          header="Credits"
          backgroundColor="Teal"
          textColor="White"
          linkTo="/"
          textFont="Bold"
          textSize="3XL"
          title="Hey there"
          ariaTitle="This is a aria title"
        />
      </section>
    </main>
  )
}
