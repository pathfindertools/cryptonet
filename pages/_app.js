import "../styles.css";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { TinaEditProvider } from "tinacms/dist/edit-state";
import { Layout } from "../components/layout";
import { TinaCloudCloudinaryMediaStore } from "next-tinacms-cloudinary";
import FourOhFour from "./404";

const TinaCMS = dynamic(() => import("tinacms"), { ssr: false });
const NEXT_PUBLIC_TINA_CLIENT_ID = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
const NEXT_PUBLIC_USE_LOCAL_CLIENT =
  process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT || 0;
const SERVER_ENV = process.env.SERVER_ENV || "staging";

function getMaybeRedirect(redirects) {
  if (!redirects) return;
  const currentPath = window.location?.href?.replace(window.location.origin, "");

  return redirects.find((redirect) => {
    return redirect.from === currentPath;
  });
}

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    const maybeRedirect = getMaybeRedirect(
      pageProps.data?.getGlobalDocument?.data?.redirects
    );
    if (maybeRedirect) {
      window.location.href = maybeRedirect.to;
    }
  }, []);
  const maybePage = pageProps.data?.getPagesDocument?.data;
  if (SERVER_ENV === "prod" && maybePage?.draft) {
    // On production, any page in draft mode should be a 404
    return <FourOhFour />;
  }
  return (
    <>
      <TinaEditProvider
        showEditButton={false}
        editMode={
          <TinaCMS
            branch="main"
            clientId={NEXT_PUBLIC_TINA_CLIENT_ID}
            isLocalClient={Boolean(Number(NEXT_PUBLIC_USE_LOCAL_CLIENT))}
            mediaStore={TinaCloudCloudinaryMediaStore}
            cmsCallback={(cms) => {
              import("react-tinacms-editor").then(({ MarkdownFieldPlugin }) => {
                cms.plugins.add(MarkdownFieldPlugin);
              });
              import('tinacms').then(({GroupListFieldPlugin}) => {
                cms.fields.add({
                  ...GroupListFieldPlugin,
                  name: 'cards',
                  Component: (props) => {
                    const field = {
                      ...props.field,
                      itemProps: (item) => {
                        return { label: item.headline || item.subhead }
                      },
                    }
                    return <GroupListFieldPlugin.Component {...props} field={field} />
                  },
                })
              }) 
              import('../plugins.tsx').then(({ emailFieldPlugin }) => {
                cms.plugins.add(emailFieldPlugin)
              });
              import('../plugins.tsx').then(({ typeControlFieldPlugin }) => {
                cms.plugins.add(typeControlFieldPlugin)
              });
              import('../plugins.tsx').then(({ fillControlFieldPlugin }) => {
                cms.plugins.add(fillControlFieldPlugin)
              });
              import('../plugins.tsx').then(({ alignmentControlFieldPlugin }) => {
                cms.plugins.add(alignmentControlFieldPlugin)
              });
              import('../plugins.tsx').then(({ imageControlFieldPlugin }) => {
                cms.plugins.add(imageControlFieldPlugin)
              });
              import('../plugins.tsx').then(({ paddingControlFieldPlugin }) => {
                cms.plugins.add(paddingControlFieldPlugin)
              });
              import('../plugins.tsx').then(({ borderControlFieldPlugin }) => {
                cms.plugins.add(borderControlFieldPlugin)
              });
              import('../plugins.tsx').then(({ selectFieldPlugin }) => {
                cms.plugins.add(selectFieldPlugin)
              });
              import('../plugins.tsx').then(({ featureContentFieldPlugin }) => {
                cms.plugins.add(featureContentFieldPlugin)
              });
              import('../plugins.tsx').then(({ featureImageFieldPlugin }) => {
                cms.plugins.add(featureImageFieldPlugin)
              });
              import('../plugins.tsx').then(({ ruledTitlePlugin }) => {
                cms.plugins.add(ruledTitlePlugin)
              });
            }}
            documentCreatorCallback={{
              /**
               * After a new document is created, redirect to its location
               */
              onNewDocument: ({ collection: { slug }, breadcrumbs }) => {
                const relativeUrl = `/${breadcrumbs.join("/")}`;
                return (window.location.href = relativeUrl);
              },
              /**
               * Only allows documents to be created to the `Pages` Collection
               */
              filterCollections: (options) => {
                return options.filter(
                  (option) => option.label === "Pages"
                );
              },
            }}
            /**
             * Treat the Global collection as a global form
             */
            formifyCallback={({ formConfig, createForm, createGlobalForm }) => {
              if (formConfig.id === "getGlobalDocument") {
                return createGlobalForm(formConfig);
              }

              return createForm({
                ...formConfig,
                fields: formConfig.fields.map(field => {
                  if (field.name === 'pageTitle') {
                    // replace `text` with `textarea`
                    field.component = 'textarea'
                  }
                  return field
                }),
              });
            }}
            {...pageProps}
          >
            {(livePageProps) => (
              <Layout
                rawData={livePageProps}
                themeData={livePageProps.data?.getPagesDocument?.data}
                data={livePageProps.data?.getGlobalDocument?.data}
              >
                <Component {...livePageProps} />
              </Layout>
            )}
          </TinaCMS>
        }
      >
        <Layout
          rawData={pageProps}
          themeData={pageProps.data?.getPagesDocument?.data}
          data={pageProps.data?.getGlobalDocument?.data}
        >
          <Component {...pageProps} />
        </Layout>
      </TinaEditProvider>
    </>
  );
};

export default App;
