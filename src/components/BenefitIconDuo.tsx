import type { CSSProperties } from 'react';

import imgHSAFSA from '../assets/benefitIcons-duo-HSAFSA.svg';
import imgHRA from '../assets/benefitIcons-duo-HRA.svg';
import imgDCFSA from '../assets/benefitIcons-duo-DCFSA.svg';
import imgLPFSA from '../assets/benefitIcons-duo-LPFSA.svg';
import imgRemote from '../assets/benefitIcons-duo-remote.svg';
import imgTransit from '../assets/benefitIcons-duo-transit.svg';
import imgLSA from '../assets/benefitIcons-duo-LSA.svg';
import imgParking from '../assets/benefitIcons-duo-parking.svg';
import imgRewards from '../assets/benefitIcons-duo-rewards.svg';

export type BenefitIconDuoType =
  | 'HSA_FSA'
  | 'HRA'
  | 'DCFSA'
  | 'LPFSA'
  | 'LSA'
  | 'Parking'
  | 'Remote Work'
  | 'Rewards'
  | 'Transit'
  | 'placeholder';

interface BenefitIconDuoProps {
  icon?: BenefitIconDuoType;
  style?: CSSProperties;
}

const icons: Record<BenefitIconDuoType, string | null> = {
  HSA_FSA: imgHSAFSA,
  HRA: imgHRA,
  DCFSA: imgDCFSA,
  LPFSA: imgLPFSA,
  LSA: imgLSA,
  Parking: imgParking,
  'Remote Work': imgRemote,
  Rewards: imgRewards,
  Transit: imgTransit,
  placeholder: null,
};

const BenefitIconDuo = ({ icon = 'HSA_FSA', style }: BenefitIconDuoProps) => {
  const src = icons[icon];
  return (
    <div style={{ width: 40, height: 40, ...style }}>
      {src && <img alt="" src={src} style={{ width: '100%', height: '100%' }} />}
    </div>
  );
};

export default BenefitIconDuo;
