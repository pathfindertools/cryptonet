import { getStaticPropsForTina } from "tinacms";
import Link from "next/link";
import { Container } from "../components/container";
import { Feature } from "../components/blocks/feature";
import { layoutQueryFragment } from "../components/layout";

export default function FourOhFour(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
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

export const getStaticProps = async () => {
  const tinaProps = await getStaticPropsForTina({
    query: `#graphql
      query PageQuery {
        ${layoutQueryFragment}
      }
    `,
    variables: {},
  });

  return {
    props: {
      ...tinaProps,
    },
  };
};
