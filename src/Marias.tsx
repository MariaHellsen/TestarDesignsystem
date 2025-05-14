import {
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiTypography,
  DigiCalendar,
} from "@digi/arbetsformedlingen-react";
export const Marias = () => {
  return (
    <>
      <DigiLayoutBlock>
        <DigiTypography>
          <DigiLayoutContainer>
            <DigiCalendar afActive={true} afMultipleDates={true}></DigiCalendar>
          </DigiLayoutContainer>
        </DigiTypography>
      </DigiLayoutBlock>
    </>
  );
};
