import type { Metadata } from "next";
import { LegalDocument } from "@/components/sections/legal-document";
import { legalSections } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Appexcreative collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  const { privacy } = legalSections;

  return (
    <LegalDocument
      eyebrow="Legal"
      title={`${privacy.title}.`}
      updated={privacy.updated}
      sections={privacy.sections}
    />
  );
}
