import React from 'react';

const Tumbsup = ({
  className,
  fill = '',
  opacity,
  width,
  height,
}: {
  className?: string;
  width?: string;
  opacity?: string;
  height?: string;
  fill?: string;
}) => {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect y="0.5" width="20" height="15" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_4529_36390"
            transform="matrix(0.00833333 0 0 0.0111111 0.125 0)"
          />
        </pattern>
        <image
          id="image0_4529_36390"
          width="90"
          height="90"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEYElEQVR4nO2dz4sUVxDHOwZDMHoQEoLuvBo0CYGcAh5yVBSdV7OLh5jN72siiMdAFASP/iLgJYdA9A+IB3/gSRBJjCYkhhDcSwghU9XOipE9iAkxILb07IKsdk/Sr19PdferL9S1p96na2pff6debxSpVCqVSqVSBanXZueeMZaOGOR5QE4eBf0Glmal82uNAPnwcsDLYD8Ay59I59gKmScqOSMsfyCdZ+MF/wUZOTHIdzo7+GXpXFsPGlLYli9K5xoEaEBOujbuS+cbBGhAnoui5CnpnEMAnXQxRumcgwANli9I5xwGaKQHU9PxK9J5BwCaE+jxAem8wwCN9It03oGA5gS2DzZI5x4GaBt/KJ17GKCRPpfOPQjQxvIV6dwbo+7mP551bx38u3T+jRFY+rRE6/hLOv9GCKZpLSAtuFc0/S29hkYILB93r+a0RxNJr6H2gmnaaJDvlQKNdEl6HbUXIH9VBvJSfCG9jlprqh+/MfrRtSTojuU90muptQD5sodqTtIbJr2W2qrbi9/0ARks3V83M1wlvZ5aatOmayvB0q9eQKt7ly9A3usH8qiiT0ZNHs1amhoaegOCtACWP1s3M3wekP70d90JhqX7S0M+5zo9fi86mKwoBRqQD1WXMMXiwDyFQf4pfQ6odjRLI1mETbecf3gwyP8oSC7QUviaUxsxlm8qaC70re1Yfrcw6HQKSEFz0fZ41gX0N9kXG2wteJ0koBgWB235THYvGryloDlvB3KvMGiDdCLzYj3araA5G7TlgQvoY9l3jfYraM7ZedBpF9D7c0AfU9Cc06PjXcVB92h3DugTCpqzuFx12kenR818fD1qsBNIqg9i58dwsINtOaC/VtC8jEm3F2+JXNXt33g95w7OKWh+vKJjY+klJ9AbZ4aQs1ecV9Cc1aO/i2aTpwuDfmHzrdU+NuXy/ZPrvetIlTdr8eL2m88paPazjx7n4K3fccMoaPbzZDjOwUv/UCpozgL9ryvo0g6efN/kiUXaAdxAe3DwpBcPk41zjqDpZDZo+lhB85MVjfSOE+hcB8/SPgXNjxUf/+g8euDDwavB1zmpOka7szLH73w4eNIQoPKgH0rNdfhy8NpdybTP6bG7Cgev7dUclR0JG+vgWbquoHmxqvv0dmnQPhw8+arjevobvh08cRBYbRS1jStz8FoP2jr6G74dPGkQ0JSKLuvgSYOAJvRoHw5e6yu672HX4cPBkwYBTdhH+3DwWlvJyPOlH719OnjSQKCKsPS993c4jXHwjoYE2iye6Tk7elm4r3bxPx28L0MCDRh/5B2uTwevNRVt+duKQZdz8KQBgbeghUpBj5nBCyoM8p1KQec5eKGFSWfrqlSegxdg7I2q1ugI7gSOiRnkU7WsZks/py8hmAToo56TP5T1Oa/uvL3GIJ+vG+TONE9Fsv/tp3glA/LhsdVxMFnRRX4/fesXWLotA5jupmdS0nYxkUpWqVQqlUqlUqlUqkhQDwGP73eye9sn3AAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
};

export default Tumbsup;
