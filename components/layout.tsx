import React from "react";
import Head from "next/head";
import { Footer } from "./footer";
import layoutData from "../content/global/index.json";
import { Theme } from "./theme";

export const Layout = ({
  rawData = "",
  data = layoutData,
  themeData = {
    primary: "",
    accent1: "",
    accent2: "",
    accent3: "",
    siteTitle: "Filecoin Hackathon",
    siteDescription: "Filecoin Hackathon Event",
    siteImageSrc: ""
  },
  children,
}) => {
  return (
    <>
      <Head>
        <title>{themeData.siteTitle}</title>
        <meta name="author" content="Protocol Labs"></meta>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:site_name" content="hackathons.filecoin.io" />
        <meta property="og:title" content={themeData.siteTitle} />
        <meta property="og:description" content={themeData.siteDescription} />
        <meta property="og:image" content={themeData.siteImageSrc} />        
        <style
          id="customProperties"
          dangerouslySetInnerHTML={{
            __html: `
            html {
              scroll-behavior: smooth;
            }
            :root {
              --primary-color: ${themeData?.primary};
              --accent1-color: ${themeData?.accent1};
              --accent2-color: ${themeData?.accent2};
              --accent3-color: ${themeData?.accent3};
            }
          `,
          }}
        />
      </Head>
      <Theme data={data?.theme}>
        <div
          className={`min-h-screen flex flex-col ${
            data.theme.font === "nunito" && "font-nunito"
          } ${data.theme.font === "lato" && "font-lato"} ${
            data.theme.font === "sans" && "font-sans"
          }`}
        >
          <div className="flex flex-col flex-1">{children}</div>
          <Footer
            rawData={rawData}
            data={data?.footer}
            icon={data?.header.icon}
          />
        </div>
      </Theme>
    </>
  );
};

export const layoutQueryFragment = `
  getGlobalDocument(relativePath: "index.json") {
    data {
      header {
        icon {
          name
          color
          style
        }
        color
        nav {
          href
          label
        }
      }
      footer {
        color
        social {
          facebook
          twitter
          instagram
          github
        }
      }  
      theme {
        color
        icon
        font
        darkMode
      }
      gtmId
      redirects {
        from
        to
      }
    }
  }
`;
