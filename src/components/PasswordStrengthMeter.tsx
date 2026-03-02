import { cn } from '@/lib/utils';
import { Check, X } from 'lucide-react';
import React from 'react';

export type StrengthLevel = 'empty' | 'weak' | 'fair' | 'good' | 'strong';

export interface PasswordStrengthRequirement {
  label: string;
  validator: (password: string) => boolean;
}

export interface StrengthMeterTheme {
  container?: string;
  input?: string;
  inputContainer?: string;
  meterContainer?: string;
  meterSegment?: string;
  strengthText?: string;
  requirementsContainer?: string;
  requirementItem?: string;
  requirementIcon?: string;
  requirementText?: string;
  strengthColors?: {
    empty?: string;
    weak?: string;
    fair?: string;
    good?: string;
    strong?: string;
  };
}

export interface PasswordStrengthMeterProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  showText?: boolean;
  showRequirements?: boolean;
  segments?: number;
  strengthThresholds?: Record<StrengthLevel, number>;
  requirements?: PasswordStrengthRequirement[];
  customCalculateStrength?: (password: string) => number;
  showPasswordToggle?: boolean;
  strengthLabels?: Record<StrengthLevel, string>;
  className?: string;
  meterClassName?: string;
  inputClassName?: string;
  placeholder?: string;
  theme?: StrengthMeterTheme;
}

const defaultRequirements: PasswordStrengthRequirement[] = [
  {
    label: 'At least 8 characters',
    validator: (password) => password.length >= 8,
  },
  {
    label: 'At least one lowercase letter',
    validator: (password) => /[a-z]/.test(password),
  },
  {
    label: 'At least one uppercase letter',
    validator: (password) => /[A-Z]/.test(password),
  },
  {
    label: 'At least one number',
    validator: (password) => /\d/.test(password),
  },
  {
    label: 'At least one special character',
    validator: (password) => /[!@#$%^&*(),.?":{}|<>]/.test(password),
  },
];

const defaultStrengthLabels = {
  empty: 'Empty',
  weak: 'Weak',
  fair: 'Fair',
  good: 'Good',
  strong: 'Strong',
};

const defaultStrengthThresholds = {
  empty: 0,
  weak: 1,
  fair: 40,
  good: 70,
  strong: 90,
};

const defaultTheme: StrengthMeterTheme = {
  container: 'space-y-3',
  inputContainer: 'relative',
  input: 'pr-20 border-border focus:border-primary focus:ring-primary/20 bg-background text-foreground',
  meterContainer: 'w-full h-2 rounded-full bg-muted flex gap-1 overflow-hidden',
  meterSegment: 'h-full rounded-sm transition-all duration-300 ease-in-out flex-1',
  strengthText: 'text-sm font-medium',
  requirementsContainer: 'space-y-2',
  requirementItem: 'flex items-center gap-2 text-sm',
  requirementIcon: 'h-4 w-4 shrink-0',
  requirementText: 'text-muted-foreground',
  strengthColors: {
    empty: 'bg-transparent',
    weak: 'bg-red-500 dark:bg-red-600',
    fair: 'bg-amber-500 dark:bg-amber-600',
    good: 'bg-blue-500 dark:bg-blue-600',
    strong: 'bg-emerald-500 dark:bg-emerald-600',
  },
};

export const PasswordStrengthMeter = ({
  value = '',
  segments = 4,
  strengthThresholds = defaultStrengthThresholds,
  requirements = defaultRequirements,
  customCalculateStrength,
  showText = false,
  showRequirements = true,
  strengthLabels = defaultStrengthLabels,
  theme,
  className,
  meterClassName,
  ...props
}: PasswordStrengthMeterProps) => {
  const appliedTheme = { ...defaultTheme, ...theme };

  const calculateStrength =
    customCalculateStrength ||
    ((pwd: string) => {
      if (!pwd) return 0;
      let score = 0;
      let passedRequirements = 0;
      requirements.forEach((r) => {
        if (r.validator(pwd)) passedRequirements++;
      });
      score = (passedRequirements / requirements.length) * 100;
      if (pwd.length > 12) score += 10;
      if (pwd.length > 16) score += 10;
      if (/[!@#$%^&*(),.?":{}|<>]{2,}/.test(pwd)) score += 10;
      return Math.min(score, 100);
    });

  const strengthScore = calculateStrength(value);

  const getStrengthLevel = (): StrengthLevel => {
    if (strengthScore >= strengthThresholds.strong) return 'strong';
    if (strengthScore >= strengthThresholds.good) return 'good';
    if (strengthScore >= strengthThresholds.fair) return 'fair';
    if (strengthScore >= strengthThresholds.weak) return 'weak';
    return 'empty';
  };

  const strengthLevel = getStrengthLevel();

  const getSegmentStrength = (index: number): StrengthLevel => {
    const segmentThreshold = (index + 1) * (100 / segments);
    return strengthScore >= segmentThreshold ? strengthLevel : 'empty';
  };

  const getPassedRequirements = () => requirements.filter((r) => r.validator(value));

  const getStrengthColor = (): string => {
    if (!appliedTheme.strengthColors) return '';
    return appliedTheme.strengthColors[strengthLevel] || appliedTheme.strengthColors.empty || '';
  };

  const getSegmentColor = (segmentStrength: StrengthLevel): string => {
    return appliedTheme.strengthColors?.[segmentStrength] || appliedTheme.strengthColors?.empty || 'bg-transparent';
  };

  return (
    <div className={cn(appliedTheme.container, className)} {...props}>
      <div className={cn(appliedTheme.meterContainer, meterClassName)}>
        {Array.from({ length: segments }).map((_, i) => (
          <div key={i} className={cn(appliedTheme.meterSegment, getSegmentColor(getSegmentStrength(i)))} />
        ))}
      </div>

      {showText && value && (
        <div className="flex items-center">
          <span className={cn(appliedTheme.strengthText, getStrengthColor())}>{strengthLabels[strengthLevel]}</span>
          <span className="ml-auto text-xs text-muted-foreground">
            {getPassedRequirements().length} of {requirements.length} requirements met
          </span>
        </div>
      )}

      {showRequirements && (
        <ul className={cn(appliedTheme.requirementsContainer)}>
          {requirements.map((r, i) => {
            const passed = r.validator(value);
            return (
              <li key={i} className={cn(appliedTheme.requirementItem)}>
                {passed ? (
                  <Check className={cn(appliedTheme.requirementIcon, 'text-emerald-500 dark:text-emerald-400')} />
                ) : (
                  <X className={cn(appliedTheme.requirementIcon, 'text-muted-foreground')} />
                )}
                <span
                  className={cn(appliedTheme.requirementText, passed ? 'text-foreground' : 'text-muted-foreground')}
                >
                  {r.label}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
