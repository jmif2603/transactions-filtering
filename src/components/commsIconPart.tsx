import accountSvg from '../assets/commsIconPart-account.svg';
import claimRelatedAffirmativeSvg from '../assets/commsIconPart-claim-related-affirmative.svg';
import claimRelatedWarningSvg from '../assets/commsIconPart-claim-related-warning.svg';
import cardRelatedAffirmativeSvg from '../assets/commsIconPart-card-related-affirmative.svg';
import cardRelatedWarningSvg from '../assets/commsIconPart-card-related-warning.svg';
import documentsSvg from '../assets/commsIconPart-documents.svg';
import fundsAffirmativeSvg from '../assets/commsIconPart-funds-affirmative.svg';
import fundsWarningSvg from '../assets/commsIconPart-funds-warning.svg';
import hsaRedrawSvg from '../assets/commsIconPart-HSA-redraw.svg';
import hsaInvestmentSvg from '../assets/commsIconPart-HSA-investment.svg';
import marketingHsaSvg from '../assets/commsIconPart-marketing-hsa.svg';
import marketingOnboardingSvg from '../assets/commsIconPart-marketing-onboarding.svg';
import marketingUtilizationSvg from '../assets/commsIconPart-marketing-utilization.svg';
import marketingYearEndSvg from '../assets/commsIconPart-marketing-year-end.svg';
import securitySvg from '../assets/commsIconPart-security.svg';

// ============ Types ============

export type CommsIconPartVariant =
  | 'account'
  | 'claim-related-affirmative'
  | 'claim-related-warning'
  | 'card-related-affirmative'
  | 'card-related-warning'
  | 'documents'
  | 'funds-affirmative'
  | 'funds-warning'
  | 'HSA-redraw'
  | 'HSA-investment'
  | 'marketing-hsa'
  | 'marketing-onboarding'
  | 'marketing-utilization'
  | 'marketing-year-end'
  | 'security';

interface CommsIconPartProps {
  variant: CommsIconPartVariant;
  size?: number;
  style?: React.CSSProperties;
}

// ============ Asset map ============

const assetMap: Record<CommsIconPartVariant, string> = {
  'account': accountSvg,
  'claim-related-affirmative': claimRelatedAffirmativeSvg,
  'claim-related-warning': claimRelatedWarningSvg,
  'card-related-affirmative': cardRelatedAffirmativeSvg,
  'card-related-warning': cardRelatedWarningSvg,
  'documents': documentsSvg,
  'funds-affirmative': fundsAffirmativeSvg,
  'funds-warning': fundsWarningSvg,
  'HSA-redraw': hsaRedrawSvg,
  'HSA-investment': hsaInvestmentSvg,
  'marketing-hsa': marketingHsaSvg,
  'marketing-onboarding': marketingOnboardingSvg,
  'marketing-utilization': marketingUtilizationSvg,
  'marketing-year-end': marketingYearEndSvg,
  'security': securitySvg,
};

// ============ Component ============

const CommsIconPart = ({ variant, size = 100, style }: CommsIconPartProps) => (
  <img
    src={assetMap[variant]}
    width={size}
    height={size}
    alt={variant}
    style={style}
  />
);

export default CommsIconPart;
