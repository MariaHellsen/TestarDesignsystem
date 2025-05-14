import { DigiLayoutBlock, DigiLayoutContainer, DigiTypography } from "@digi/arbetsformedlingen-react";
import "./App.css";
import {  LayoutBlockVariation } from "@digi/arbetsformedlingen";

function App() {
  return <>
  <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
  <DigiTypography>

  <DigiLayoutContainer> 
    <div></div>
    <div></div>
    <div></div>
    </DigiLayoutContainer>
  </DigiTypography>
  </DigiLayoutBlock>
  </>;
}

export default App;
