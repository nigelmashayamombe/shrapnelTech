'use client';

export function Logo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary"
    >
      <circle cx="50" cy="50" r="45" fill="currentColor" />
      <path
        d="M30 30H70V45H45V70H30V30Z"
        fill="white"
        className="transform origin-center"
      />
    </svg>
  );
}