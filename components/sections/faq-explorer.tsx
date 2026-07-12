"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FAQAccordion, type FaqItem } from "@/components/sections/faq-accordion";
import { faqCategories } from "@/content/faq";

export function FAQExplorer({ items }: { items: FaqItem[] }) {
  const [query, setQuery] = useState("");

  const searchResults = useMemo(() => {
    if (!query.trim()) return null;
    const q = query.toLowerCase();
    return items.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q)
    );
  }, [query, items]);

  return (
    <div>
      <div className="relative mx-auto max-w-md">
        <Search className="absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search questions..."
          className="h-11 pl-10"
        />
      </div>

      {searchResults ? (
        <div className="mt-12 mx-auto max-w-3xl">
          {searchResults.length > 0 ? (
            <FAQAccordion items={searchResults} />
          ) : (
            <p className="text-center text-muted-foreground">
              No questions match &ldquo;{query}&rdquo;.
            </p>
          )}
        </div>
      ) : (
        <Tabs defaultValue={faqCategories[0]} className="mt-12 w-full">
          <TabsList className="mx-auto flex w-fit flex-wrap">
            {faqCategories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {faqCategories.map((category) => (
            <TabsContent key={category} value={category} className="mx-auto mt-10 max-w-3xl">
              <FAQAccordion items={items.filter((item) => item.category === category)} />
            </TabsContent>
          ))}
        </Tabs>
      )}
    </div>
  );
}
