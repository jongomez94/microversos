type ArtProps = {
  className?: string;
};

export function Mark({ className }: ArtProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      aria-hidden="true"
      fill="none"
    >
      <rect width="64" height="64" rx="16" fill="#143028" />
      <path
        d="M12 34c0-12 8.8-20 20-20s20 8 20 20c-4.2 0-6.2 2.4-10 2.4S34.2 34 32 34s-7.6 2.4-10 2.4S16.2 34 12 34Z"
        fill="#E4C36A"
      />
      <path
        d="M26 36.5h12v14.2a6 6 0 0 1-12 0V36.5Z"
        fill="#F7F3EA"
      />
      <circle cx="24" cy="30" r="1.4" fill="#143028" opacity="0.35" />
      <circle cx="32" cy="27" r="1.4" fill="#143028" opacity="0.35" />
      <circle cx="40" cy="31" r="1.4" fill="#143028" opacity="0.35" />
    </svg>
  );
}

export function YellowOyster({ className }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 220 170" aria-hidden="true">
      <ellipse cx="78" cy="118" rx="52" ry="20" fill="#E4C36A" transform="rotate(-32 78 118)" />
      <ellipse cx="118" cy="104" rx="58" ry="22" fill="#F0D78A" transform="rotate(-8 118 104)" />
      <ellipse cx="156" cy="118" rx="46" ry="18" fill="#C9A24A" transform="rotate(24 156 118)" />
      <ellipse cx="104" cy="82" rx="40" ry="16" fill="#F6E7A8" transform="rotate(-20 104 82)" />
      <path
        d="M62 112c18 6 28 8 40 4M96 96c16 8 30 10 46 4M132 112c12 6 24 8 36 2"
        stroke="#8C6A22"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path d="M108 128c2 16 4 24 2 32" stroke="#8C6A22" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function ItalianOyster({ className }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 220 170" aria-hidden="true">
      <path
        d="M28 112c18-62 92-78 154-28-28 10-62 16-96 8-22-4-40 4-58 20Z"
        fill="#C4A48E"
      />
      <path
        d="M36 124c28-48 86-62 150-24-36 18-78 22-118 8-16-4-26 4-32 16Z"
        fill="#8D6F5C"
      />
      <path
        d="M48 116c22-6 40-4 54 6M78 108c24-2 46 4 64 16M112 104c20 6 38 16 50 28"
        stroke="#F4EFE4"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path d="M118 132c1 14 2 22 0 30" stroke="#6B5346" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}

export function LionsMane({ className }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 220 170" aria-hidden="true">
      <circle cx="110" cy="72" r="38" fill="#F7F1E6" />
      <circle cx="78" cy="84" r="26" fill="#FFFBF5" />
      <circle cx="142" cy="82" r="28" fill="#EFE4D4" />
      <circle cx="110" cy="96" r="24" fill="#F3EBDE" />
      <path
        d="M72 108v24M86 104v34M100 108v40M114 104v38M128 108v32M142 106v26M156 112v18"
        stroke="#E4D5C0"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M80 112v16M94 116v22M122 116v24M136 114v18"
        stroke="#F7F1E6"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const speciesArt = {
  gold: YellowOyster,
  clay: ItalianOyster,
  mane: LionsMane,
} as const;

export function SpeciesArt({
  tone,
  className,
}: {
  tone: keyof typeof speciesArt;
  className?: string;
}) {
  const Art = speciesArt[tone];
  return <Art className={className} />;
}

export function HeroGrove({ className }: ArtProps) {
  return (
    <div className={className} aria-hidden="true">
      <div className="relative mx-auto aspect-[5/4] w-full max-w-md">
        <div className="absolute inset-x-8 bottom-6 top-10 rounded-[2rem] bg-moss/10" />
        <YellowOyster className="absolute left-0 top-2 w-[58%]" />
        <ItalianOyster className="absolute right-0 top-8 w-[56%]" />
        <LionsMane className="absolute bottom-0 left-1/2 w-[48%] -translate-x-1/2" />
      </div>
    </div>
  );
}
