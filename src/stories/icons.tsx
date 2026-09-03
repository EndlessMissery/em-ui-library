/**
 * Small hand-rolled stroke icons used only in Storybook demo content
 * (never imported by the library itself, so they add zero bundle weight
 * for consumers). Consistent 1.5px stroke, 20x20 viewBox, currentColor.
 */
import type { SVGProps } from 'react';

function IconBase(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    />
  );
}

export function UsersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="7.5" cy="6.5" r="2.75" />
      <path d="M2.5 16.5c0-2.76 2.24-5 5-5s5 2.24 5 5" />
      <path d="M12.5 3.6c1.2.4 2 1.55 2 2.9 0 1.35-.8 2.5-2 2.9" />
      <path d="M14.5 11.7c1.9.55 3.3 2.3 3.3 4.8" />
    </IconBase>
  );
}

export function WalletIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <rect x="2.5" y="5.5" width="15" height="10.5" rx="2" />
      <path d="M2.5 8.5h15" />
      <path d="M13.25 12.25h2.25" />
    </IconBase>
  );
}

export function BoltIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M11 2.5 4.5 11h4l-.5 6.5L15.5 9h-4l-.5-6.5Z" />
    </IconBase>
  );
}
