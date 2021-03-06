import React from "react";
import Head from "next/head";
import { Footer } from "./footer";
import layoutData from "../content/global/index.json";

export const Layout = ({
  data = layoutData,
  themeData = {
    meta: {
      pageTitle: "Filecoin Hackathon",
      pageDescription: "Filecoin Hackathon Event",
      siteImageSrc: ""
    },
  },
  children,
}) => {
  return (
    <>
      <Head>
        <title>{themeData?.meta?.pageTitle}</title>
        <meta name="author" content="Protocol Labs"></meta>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:site_name" content={data?.siteUrl} />
        <meta property="og:title" content={themeData?.meta?.pageTitle} />
        <meta property="og:description" content={themeData?.meta?.pageDescription} />
        <meta property="og:image" content={themeData?.meta?.siteImageSrc} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={data?.siteUrl} />
        <meta property="twitter:url" content={data?.siteUrl} />
        <meta name="twitter:title" content={themeData?.meta?.pageTitle} />
        <meta name="twitter:description" content={themeData?.meta?.pageDescription} />
        <meta name="twitter:image" content={themeData?.meta?.siteImageSrc} />
        <style
          id="customProperties"
          dangerouslySetInnerHTML={{
            __html: `
            html {
              scroll-behavior: smooth;
            }
            :root {
              --primary-color: ${data?.colors?.primary};
              --accent1-color: ${data?.colors?.accent1};
              --accent2-color: ${data?.colors?.accent2};
              --accent3-color: ${data?.colors?.accent3};
              --accent4-color: ${data?.colors?.accent4};
              --white-color: ${data?.colors?.white};
              --black-color: ${data?.colors?.black};
              --gray-light-color: ${data?.colors?.grayLight};
              --gray-color: ${data?.colors?.gray};
              --gray-dark-color: ${data?.colors?.grayDark};
            }
            .markdown ul {
              list-style: disc inside;
              margin-left: 1.5rem;
            }
            .markdown ul li {
              margin-bottom: .5rem;
            }
            .markdown a {
              text-decoration: underline;
            }
          `,
          }}
        />

        {/* Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${data?.gtmId}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            if (document.location.hostname === "${data?.siteUrl}") {
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${data?.gtmId}', {
                  page_path: window.location.pathname,
                });
              }
            `,
          }}
        />
      </Head>
      <div className={`min-h-screen flex flex-col`}>
        <div className="flex flex-col flex-1">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export const layoutQueryFragment = `
  getGlobalDocument(relativePath: "index.json") {
    data {
      siteUrl
      gtmId
      redirects {
        from
        to
      }
      colors {
        primary
        accent1
        accent2
        accent3
        accent4
        white
        grayLight
        gray
        grayDark
        black
      }
      nav {
        navItems {
          link
          label
        }
        navAlignment
        navTextColor
        navBackgroundColor
      }
    }
  }
`;
