import { getStaticPropsForTina, staticRequest } from "tinacms";
import { Blocks } from "../components/blocks";
import { Header } from "../components/header";
import { layoutQueryFragment } from "../components/layout";
import type { PagesDocument } from "../.tina/__generated__/types";

export default function HomePage(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  return (
    <>
      <Header {...props.data.getPagesDocument.data} />
      <Blocks {...props.data.getPagesDocument.data} />
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const tinaProps = (await getStaticPropsForTina({
    query: `#graphql
      query ContentQuery($relativePath: String!) {
        # "index.md" is _relative_ to the "Pages" path property in your schema definition
        # you can inspect this file at "content/pages/index.md"
        ${layoutQueryFragment}
        getPagesDocument(relativePath: $relativePath) {
          data {
            __typename
            blocks {
              __typename
              ... on PagesBlocksPhotoCards {
                label
                headline
                subhead
                body
                buttons {
                  label
                  type
                  link
                  textColor
                  backgroundColor
                }
                items {
                  image {
                    src
                    alt
                  }
                  headline
                  subhead
                  text
                  link
                  buttonLabel
                }
                style {
                  columns
                  textColor
                  backgroundColor
                  backgroundImage {
                    src
                    alt
                  }
                }
                navigationLabel
              }
              ... on PagesBlocksTextCards {
                label
                headline
                subhead
                body
                buttons {
                  label
                  type
                  link
                  textColor
                  backgroundColor
                }
                items {
                  headline
                  subhead
                  text
                  link
                  buttonLabel
                  accentColor
                }
                style {
                  columns
                  textColor
                  backgroundColor
                  backgroundImage {
                    src
                    alt
                  }
                }
                cardStyle {
                  textColor
                  backgroundColor
                  accentColor
                  type
                }
                navigationLabel
              }
              ... on PagesBlocksFeature {
                label
                headline
                subhead
                body
                buttons {
                  label
                  type
                  link
                  textColor
                  backgroundColor
                }
                image {
                  src
                  alt
                }
                style {
                  textColor
                  backgroundColor
                  backgroundImage {
                    src
                    alt
                  }
                  flipLayout
                  imageStyle
                  contentAlignment
                  textAlignment
                }
                navigationLabel
              }
              ... on PagesBlocksBanner {
                label
                headline
                subhead
                body
                buttons {
                  label
                  type
                  link
                  textColor
                  backgroundColor
                }
                style {
                  textColor
                  backgroundColor
                  backgroundImage {
                    src
                    alt
                  }
                }
                navigationLabel
              }
            }
            primary
            accent1
            accent2
            accent3
            navTextColor
            navBackgroundColor
          }
        }
      }
  `,
    variables: { relativePath: `${params.filename}.md` },
  })) as { data: { getPagesDocument: PagesDocument } };

  return {
    props: {
      ...tinaProps,
    },
  };
};

export const getStaticPaths = async () => {
  const pagesListData = (await staticRequest({
    query: `#graphql
      {
        getPagesList {
          edges {
            node {
              sys {
                filename
              }
            }
          }
        }
      }
    `,
  })) as any;
  return {
    paths: pagesListData.getPagesList.edges.map((page) => ({
      params: { filename: page.node.sys.filename },
    })),
    fallback: false,
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;
