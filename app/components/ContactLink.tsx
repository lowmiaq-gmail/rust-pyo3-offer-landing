"use client";

import type { ReactNode } from "react";

type ContactLinkProps = {
  className?: string;
  children?: ReactNode;
};

export default function ContactLink({
  className = "link",
  children,
}: ContactLinkProps) {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();

  if (!email) {
    return (
      <span className={className}>
        {children ?? "Set NEXT_PUBLIC_CONTACT_EMAIL"}
      </span>
    );
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      {children ?? email}
    </a>
  );
}
