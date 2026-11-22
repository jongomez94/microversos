import { faqJsonLd, organizationJsonLd, serializeJsonLd } from "@/lib/json-ld";

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(organizationJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(faqJsonLd()),
        }}
      />
    </>
  );
}
