import React from "react";
import { useTranslations } from 'next-intl';
import GridBlock from "@/components/grid/gridblock";
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
    <main className="mx-6 md:mx-auto max-w-[1400px] h-full pt-24 md:pt-28 pb-20 md:pb-8">
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 auto-rows-[170px] gap-4 h-full sm:ml-0 xl:ml-24">
        <aside className="md:col-span-1 md:row-span-2">
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
        </aside>
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
          backgroundImage={Grid003}
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
          backgroundImage={Grid004}
          textColor="White"
          linkTo="/installation"
          textFont="Light"
          textSize="2XL"
          title={t('InstallationTitle')}
          ariaTitle={t('InstallationARIA')}
        />
        <GridBlock
          header={t('ProjectManagerHeader')}
          backgroundColor="ShadeOne"
          backgroundImage={Grid005}
          textColor="White"
          linkTo="/projectmanager"
          textFont="Light"
          textSize="2XL"
          title={t('ProjectManagerTitle')}
          ariaTitle={t('ProjectManagerARIA')}
        />
        <GridBlock
          header={t('DataGeneratorHeader')}
          backgroundColor="ShadeThree"
          backgroundImage={Grid007}
          textColor="White"
          linkTo="/datagenerator"
          textFont="Light"
          textSize="2XL"
          title={t('DataGeneratorTitle')}
          ariaTitle={t('DataGeneratorARIA')}
        />
        <section className="md:col-span-1 md:row-span-2">
          <GridBlock
            header={t('LicenseCreditsHeader')}
            backgroundColor="ShadeTwo"
            backgroundImage={Grid006}
            textColor="White"
            linkTo="/licensecredits"
            textFont="Light"
            textSize="2XL"
            title={t('LicenseCreditsTitle')}
            ariaTitle={t('LicenseCreditsARIA')}
          />
        </section>
        <GridBlock
          header={t('DepthGeneratorHeader')}
          backgroundColor="ShadeFour"
          backgroundImage={Grid008}
          textColor="White"
          linkTo="/depthgenerator"
          textFont="Light"
          textSize="2XL"
          title={t('DepthGeneratorTitle')}
          ariaTitle={t('DepthGeneratorARIA')}
        />
        <section className="md:row-span-1 md:col-span-2">
        <GridBlock
          header={t('ErrorDBHeader')}
          backgroundColor="ShadeOne"
          backgroundImage={Grid009}
          textColor="White"
          linkTo="/errors"
          textFont="Light"
          textSize="2XL"
          title={t('ErrorDBTitle')}
          ariaTitle={t('ErrorDBARIA')}
        />
        </section>
        
      </section>
    </main>
  );
}
