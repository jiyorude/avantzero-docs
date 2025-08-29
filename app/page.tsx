import React from "react";
import { useTranslations } from 'next-intl';
import GridBlock from "@/components/grid/gridblock";
import AvantZeroLogo from '@/public/images/AvantZero_Logo.svg';
import Image from 'next/image';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <main className="mxFlexCenter h-screen pt-20 max-w-[1400px]">
      <section className="grid grid-cols-4 gap-4 auto-rows-[170px] w-full ml-22">
        <aside className="col-span-1 row-span-2">
          <GridBlock
            header=""
            icon={
              <Image
                src={AvantZeroLogo}
                alt="Avant Zero Logo"
                width={130}
                height={130} 
              />
            }
            backgroundColor="Black"
            textColor="White"
            linkTo=""
            textFont="Logo"
            textSize="9XL"
            title=""
            ariaTitle={t('LogoARIA')}
          />
        </aside>
          <GridBlock
            header={t('QuickstartHeader')}
            backgroundColor="Teal"
            textColor="White"
            linkTo="/quickstart"
            textFont="Light"
            textSize="2XL"
            title={t('QuickstartTitle')}
            ariaTitle={t('QuickstartARIA')}
          />
        <GridBlock
          header={t('BackgroundHeader')}
          backgroundColor="ShadeOne"
          textColor="White"
          linkTo="/background"
          textFont="Light"
          textSize="2XL"
          title={t('BackgroundTitle')}
          ariaTitle={t('BackgroundARIA')}
        />
        <GridBlock
          header={t('RequirementsHeader')}
          backgroundColor="ShadeThree"
          textColor="White"
          linkTo="/requirements"
          textFont="Light"
          textSize="2XL"
          title={t('RequirementsTitle')}
          ariaTitle={t('RequirementsARIA')}
        />
        <GridBlock
          header={t('InstallationHeader')}
          backgroundColor="ShadeFour"
          textColor="White"
          linkTo="/installation"
          textFont="Light"
          textSize="2XL"
          title={t('InstallationTitle')}
          ariaTitle={t('InstallationARIA')}
        />
        <GridBlock
          header={t('ProjectManagerHeader')}
          backgroundColor="ShadeFive"
          textColor="White"
          linkTo="/projectmanager"
          textFont="Light"
          textSize="2XL"
          title={t('ProjectManagerTitle')}
          ariaTitle={t('ProjectManagerARIA')}
        />
        <section className="col-span-1 row-span-2">
          <GridBlock
            header={t('LicenseCreditsHeader')}
            backgroundColor="ShadeSix"
            textColor="White"
            linkTo="/licensecredits"
            textFont="Light"
            textSize="2XL"
            title="Hey there"
            ariaTitle="This is a aria title"
          />
        </section>
        <GridBlock
          header="DATA GENERATOR"
          backgroundColor="ShadeFive"
          textColor="White"
          linkTo="/datagenerator"
          textFont="Light"
          textSize="2XL"
          title="Hey there"
          ariaTitle="This is a aria title"
        />
        <GridBlock
          header="DEPTH GENERATOR"
          backgroundColor="ShadeThree"
          textColor="White"
          linkTo="/depthgenerator"
          textFont="Light"
          textSize="2XL"
          title="Hey there"
          ariaTitle="This is a aria title"
        />
        <GridBlock
          header="ERROR DATABASE"
          backgroundColor="ShadeOne"
          textColor="White"
          linkTo="/errors"
          textFont="Light"
          textSize="2XL"
          title="Hey there"
          ariaTitle="This is a aria title"
        />
      </section>
    </main>
  )
}
