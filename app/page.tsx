import React from "react";
import { useTranslations } from 'next-intl';
import GridBlock from "@/components/grid/gridblock";
import AvantZeroLogo from '@/public/images/AvantZero_Logo.svg';
import Image from 'next/image';
import Grid001 from '@/public/images/grids/grid_001.jpg';
import Grid002 from '@/public/images/grids/grid_002.jpg';
import Grid003 from '@/public/images/grids/grid_003.jpg';
import Grid004 from '@/public/images/grids/grid_004.jpg';
import Grid005 from '@/public/images/grids/grid_005.jpg';
import Grid006 from '@/public/images/grids/grid_006.jpg';
import Grid007 from '@/public/images/grids/grid_007.jpg';
import Grid008 from '@/public/images/grids/grid_008.jpg';
import Grid009 from '@/public/images/grids/grid_009.jpg';


export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <main className="mxFlexCenter h-screen pt-20 max-w-[1400px]">
      <section className="grid grid-cols-4 gap-4 auto-rows-[170px] w-full py-10 ml-22">
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
            hasHover={false}
            textFont="Logo"
            textSize="9XL"
            title=""
            ariaTitle={t('LogoARIA')}
          />
        </aside>
          <GridBlock
            header={t('QuickstartHeader')}
            backgroundColor="ShadeOne"
            backgroundImage={Grid001}
            textColor="White"
            linkTo="/quickstart"
            textFont="Light"
            textSize="2XL"
            title={t('QuickstartTitle')}
            ariaTitle={t('QuickstartARIA')}
          />
        <GridBlock
          header={t('BackgroundHeader')}
          backgroundColor="ShadeTwo"
          backgroundImage={Grid002}
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
          backgroundImage={Grid003}
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
          backgroundImage={Grid004}
          linkTo="/installation"
          textFont="Light"
          textSize="2XL"
          title={t('InstallationTitle')}
          ariaTitle={t('InstallationARIA')}
        />
        <GridBlock
          header={t('ProjectManagerHeader')}
          backgroundColor="ShadeOne"
          textColor="White"
          backgroundImage={Grid005}
          linkTo="/projectmanager"
          textFont="Light"
          textSize="2XL"
          title={t('ProjectManagerTitle')}
          ariaTitle={t('ProjectManagerARIA')}
        />
        <section className="col-span-1 row-span-2">
          <GridBlock
            header={t('LicenseCreditsHeader')}
            backgroundColor="ShadeTwo"
            textColor="White"
            backgroundImage={Grid006}
            linkTo="/licensecredits"
            textFont="Light"
            textSize="2XL"
            title={t('LicenseCreditsTitle')}
            ariaTitle={t('LicenseCreditsARIA')}
          />
        </section>
        <GridBlock
          header={t('DataGeneratorHeader')}
          backgroundColor="ShadeThree"
          textColor="White"
          backgroundImage={Grid007}
          linkTo="/datagenerator"
          textFont="Light"
          textSize="2XL"
          title={t('DataGeneratorTitle')}
          ariaTitle={t('DataGeneratorARIA')}
        />
        <GridBlock
          header={t('DepthGeneratorHeader')}
          backgroundColor="ShadeFour"
          textColor="White"
          linkTo="/depthgenerator"
          backgroundImage={Grid008}
          textFont="Light"
          textSize="2XL"
          title={t('DepthGeneratorTitle')}
          ariaTitle={t('DepthGeneratorARIA')}
        />
        <GridBlock
          header={t('ErrorDBHeader')}
          backgroundColor="ShadeOne"
          textColor="White"
          linkTo="/errors"
          backgroundImage={Grid009}
          textFont="Light"
          textSize="2XL"
          title={t('ErrorDBTitle')}
          ariaTitle={t('ErrorDBARIA')}
        />
      </section>
    </main>
  )
}
