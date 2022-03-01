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
      <Header blocks={props.data.getPagesDocument.data.blocks} />
      <Blocks {...props.data.getPagesDocument.data} />
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const tinaProps = (await getStaticPropsForTina({
    query: `
      query ContentQuery($relativePath: String!) {
        ${layoutQueryFragment}
        getPagesDocument(relativePath: $relativePath) {
          data {
            __typename
            draft
            blocks {
              __typename
              ... on PagesBlocksPhotoCards {
                backgroundImage {
                  src
                  position
                }
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
                  buttonFillStyles
                }
                items {
                  image {
                    src
                    alt
                  }
                  label
                  headline
                  subhead
                  text
                  link
                  buttonLabel
                }
                style {
                  minHeight
                  columns
                  textAlignment
                  padding
                  fillStyles
                  labelStyles
                  headlineStyles
                  subheadStyles
                  textStyles
                  contentOrder
                  contentWidth
                }
                cardStyle {
                  type
                  padding
                  buttonType
                  imageStyles
                  labelStyles
                  headlineStyles
                  subheadStyles
                  textStyles
                  fillStyles
                  accentColor
                  buttonTextColor
                  buttonFillStyles
                }
                navigationLabel
              }
              ... on PagesBlocksTextCards {
                backgroundImage {
                  src
                  position
                }
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
                  buttonFillStyles
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
                  minHeight
                  columns
                  textAlignment
                  padding
                  fillStyles
                  labelStyles
                  headlineStyles
                  subheadStyles
                  textStyles
                  contentOrder
                  contentWidth
                }
                cardStyle {
                  type
                  padding
                  borderStyles
                  buttonType
                  labelStyles
                  headlineStyles
                  subheadStyles
                  textStyles
                  fillStyles
                  accentColor
                  buttonTextColor
                }
                navigationLabel
              }
              ... on PagesBlocksFeature {
                image {
                  src
                  alt
                }
                backgroundImage {
                  src
                  position
                }
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
                  buttonFillStyles
                }
                style {
                  fillStyles
                  alignment
                  featureContent
                  featureImage
                  imagePadding
                  padding
                  contentOrder
                  labelStyles
                  headlineStyles
                  subheadStyles
                  textStyles
                }
                navigationLabel
              }
              ... on PagesBlocksBanner {
                image {
                  src
                  alt
                }
                backgroundImage {
                  src
                  position
                }
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
                  buttonFillStyles
                }
                style {
                  minHeight
                  width
                  padding
                  labelStyles
                  headlineStyles
                  subheadStyles
                  textStyles
                  fillStyles
                  textAlignment
                  contentOrder
                }
                navigationLabel
              }
              ... on PagesBlocksEmbed {
                backgroundImage {
                  src
                  position
                }
                markup
                style {
                  minHeight
                  fullWidth
                  padding
                  fillStyles
                }
                navigationLabel
              }
            }
            meta {
              pageTitle
              pageDescription
              siteImageSrc
            }
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
  const pagesNoIndex = pagesListData.getPagesList.edges.filter(page => page.node.sys.filename !== 'index')
  return {
    paths: pagesNoIndex.map((page) => ({
      params: { filename: page.node.sys.filename },
    })),
    fallback: false,
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;
