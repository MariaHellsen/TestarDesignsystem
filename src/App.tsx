import { DigiLayoutBlock, DigiLayoutContainer, DigiTypography } from "@digi/arbetsformedlingen-react";
import "./App.css";
import {  LayoutBlockVariation } from "@digi/arbetsformedlingen";
import { DigiInfoCard } from "@digi/arbetsformedlingen-react";
import { InfoCardHeadingLevel } from "@digi/arbetsformedlingen";
import { InfoCardType } from "@digi/arbetsformedlingen";
import { InfoCardVariation } from "@digi/arbetsformedlingen";
import { InfoCardSize } from "@digi/arbetsformedlingen";

function App() {
  return <>
  <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
  <DigiTypography>

  <DigiLayoutContainer> 
    <div></div>
    <div><DigiInfoCard
	afHeading="Jag är ett infokort"
	afHeadingLevel={InfoCardHeadingLevel.H2}
	afType={InfoCardType.TIP}
	afLinkHref="Frivillig länk"	
 	afLinkText="Frivillig länktext"	
 	afVariation={InfoCardVariation.PRIMARY}	
 	afSize={InfoCardSize.STANDARD}
>
	<p>
		Det här är bara ord för att illustrera hur det ser ut med text inuti. Lorem ipsum dolor sit amet,
		consectetur adipiscing elit. Suspendisse commodo egestas elit in consequat. Proin in ex consectetur,
		laoreet augue sit amet, malesuada tellus.
	</p>
</DigiInfoCard></div>
    <div></div>
    </DigiLayoutContainer>
  </DigiTypography>
  </DigiLayoutBlock>
  </>;
}

export default App;
