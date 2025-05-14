import { DigiButton, DigiLayoutBlock, DigiLayoutContainer, DigiTypography } from "@digi/arbetsformedlingen-react";
import "./App.css";
import {  ButtonSize, ButtonVariation, LayoutBlockVariation } from "@digi/arbetsformedlingen";

function App() {
  return <>
  <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
  <DigiTypography>

  <DigiLayoutContainer> 
    <div><DigiButton
  afSize={ButtonSize.MEDIUM}
	afVariation={ButtonVariation.PRIMARY}
	afFullWidth={false}>
	Knapp test
</DigiButton></div>
    <div></div>
    <div></div>
    </DigiLayoutContainer>
  </DigiTypography>
  </DigiLayoutBlock>
  </>;
}

export default App;
