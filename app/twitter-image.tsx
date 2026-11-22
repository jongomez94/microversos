import { ImageResponse } from "next/og";
import { ShareCard } from "@/components/share-card";

export const dynamic = "force-static";

export const alt =
  "Microversos. Bienvenido al microverso fúngico de El Salvador. Iniciativa salvadoreña dedicada a los hongos comestibles y funcionales, fundada por Jonathan Gómez.";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(<ShareCard />, { ...size });
}
