import Link from "next/link";
import { Container } from "../components/container";
import { Feature } from "../components/blocks/feature";

export default function FourOhFour() {
  return (
    <Feature
      data={{
        color: "default",
        headline: "404 – Page Not Found",
        text: "Page not found",
        buttons: [
          {
            label: "Return Home",
            type: "button",
            icon: true,
            link: "/",
          },
        ],
      }}
    />
  );
}
