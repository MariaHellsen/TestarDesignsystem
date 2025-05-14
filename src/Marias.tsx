import {
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiTypography,
  DigiCalender,
} from "@digi/arbetsformedlingen-react";
export const Marias = () => {
  return (
    <>
      <DigiLayoutBlock>
        <DigiTypography>
          <DigiLayoutContainer>
            <DigiCalender afActive={true} afMultipleDates={true}></DigiCalender>
          </DigiLayoutContainer>
        </DigiTypography>
      </DigiLayoutBlock>
    </>
  );
};
