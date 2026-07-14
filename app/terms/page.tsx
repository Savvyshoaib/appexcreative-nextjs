import type { Metadata } from "next";
import { LegalDocument } from "@/components/sections/legal-document";
import { legalSections } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using the Appexcreative website and services.",
};

export default function TermsPage() {
  const { terms } = legalSections;

  return (
    <LegalDocument
      eyebrow="Legal"
      title="Terms & Conditions."
      updated={terms.updated}
      sections={terms.sections}
    />
  );
}
