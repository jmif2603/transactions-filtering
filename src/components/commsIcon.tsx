import accountSvg from '../assets/commsIcon-account.svg';
import claimRelatedAffirmativeSvg from '../assets/commsIcon-claim-related-affirmative.svg';
import claimRelatedWarningSvg from '../assets/commsIcon-claim-related-warning.svg';
import cardRelatedAffirmativeSvg from '../assets/commsIcon-card-related-affirmative.svg';
import cardRelatedWarningSvg from '../assets/commsIcon-card-related-warning.svg';
import documentsSvg from '../assets/commsIcon-documents.svg';
import fundsAffirmativeSvg from '../assets/commsIcon-funds-affirmative.svg';
import fundsWarningSvg from '../assets/commsIcon-funds-warning.svg';
import hsaSvg from '../assets/commsIcon-hsa.svg';
import hsaInvestmentSvg from '../assets/commsIcon-hsa-investment.svg';
import marketingHsaSvg from '../assets/commsIcon-marketing-hsa.svg';
import marketingOnboardingSvg from '../assets/commsIcon-marketing-onboarding.svg';
import marketingUtilizationSvg from '../assets/commsIcon-marketing-utilization.svg';
import marketingYearEndSvg from '../assets/commsIcon-marketing-year-end.svg';
import securitySvg from '../assets/commsIcon-security.svg';

// ============ Types ============

export type CommsIconVariant =
  | 'account'
  | 'claim-related-affirmative'
  | 'claim-related-warning'
  | 'card-related-affirmative'
  | 'card-related-warning'
  | 'documents'
  | 'funds-affirmative'
  | 'funds-warning'
  | 'hsa'
  | 'hsa-investment'
  | 'marketing-hsa'
  | 'marketing-onboarding'
  | 'marketing-utilization'
  | 'marketing-year-end'
  | 'security';

interface CommsIconProps {
  variant: CommsIconVariant;
  size?: number;
  style?: React.CSSProperties;
}

// ============ Asset map ============

const assetMap: Record<CommsIconVariant, string> = {
  'account':                   accountSvg,
  'claim-related-affirmative': claimRelatedAffirmativeSvg,
  'claim-related-warning':     claimRelatedWarningSvg,
  'card-related-affirmative':  cardRelatedAffirmativeSvg,
  'card-related-warning':      cardRelatedWarningSvg,
  'documents':                 documentsSvg,
  'funds-affirmative':         fundsAffirmativeSvg,
  'funds-warning':             fundsWarningSvg,
  'hsa':                       hsaSvg,
  'hsa-investment':            hsaInvestmentSvg,
  'marketing-hsa':             marketingHsaSvg,
  'marketing-onboarding':      marketingOnboardingSvg,
  'marketing-utilization':     marketingUtilizationSvg,
  'marketing-year-end':        marketingYearEndSvg,
  'security':                  securitySvg,
};

// ============ Component ============

const CommsIcon = ({ variant, size = 100, style }: CommsIconProps) => (
  <img
    src={assetMap[variant]}
    width={size}
    height={size}
    alt={variant}
    style={style}
  />
);

export default CommsIcon;
