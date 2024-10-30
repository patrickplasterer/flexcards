"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export function CardPreview({ card }: { card: object }) {
  const searchParams = useSearchParams();
  const activeCard = searchParams.get("card");
  const router = useRouter();

  function handleClick() {
    router.push(`?deck=${card.deck}&card=${card.id}`);
    router.refresh();
  }

  return (
    <div
      onClick={handleClick}
      className={cn("flex flex-col min-h-[7rem] cursor-pointer rounded-xl border-2 w-full py-4 px-4 hover:bg-accent hover:text-accent-foreground", { "bg-accent text-accent-foreground": activeCard == card.id }
      )}
    >
      <h1 className="font-bold text-sm">{card.front}</h1>
      <p className="mt-2 text-xs overflow-hidden line-clamp-2">{card.back}</p>
    </div>
  );
}
