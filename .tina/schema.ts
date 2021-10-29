import { defineSchema } from "@tinacms/cli";
import type { TinaTemplate } from "@tinacms/cli";

import { iconSchema } from "./icon";
import { featureBlockSchema } from "./feature";
import { photoCardsBlockSchema } from "./photo-cards";
import { textCardsBlockSchema } from "./text-cards";
import { bannerBlockSchema } from "./banner";

const contentBlockSchema: TinaTemplate = {
  name: "content",
  label: "Content",
  ui: {
    defaultItem: {
      body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    },
  },
  fields: [
    {
      type: "string",
      ui: {
        component: "markdown",
      },
      label: "Body",
      name: "body",
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
      ],
    },
  ],
};

export default defineSchema({
  collections: [
    {
      label: "Blog Posts",
      name: "posts",
      path: "content/posts",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "reference",
          label: "Author",
          name: "author",
          collections: ["authors"],
        },
        {
          type: "datetime",
          label: "Posted Date",
          name: "date",
          ui: {
            dateFormat: "MMMM DD YYYY",
            timeFormat: "hh:mm A",
          },
        },
        {
          type: "image",
          name: "featureImg",
          label: "Feature Image",
        },
        {
          type: "string",
          label: "Excerpt",
          ui: {
            component: "textarea",
          },
          name: "excerpt",
        },
        {
          type: "string",
          label: "Body",
          ui: {
            component: "markdown",
          },
          name: "body",
          isBody: true,
        },
      ],
    },
    {
      label: "Global",
      name: "global",
      path: "content/global",
      fields: [
        {
          type: "object",
          label: "Header",
          name: "header",
          fields: [
            iconSchema,
            {
              type: "string",
              label: "Color",
              name: "color",
              options: [
                { label: "Default", value: "default" },
                { label: "Primary", value: "primary" },
              ],
            },
            {
              type: "object",
              label: "Nav Links",
              name: "nav",
              list: true,
              ui: {
                defaultItem: {
                  href: "home",
                  label: "Home",
                },
              },
              fields: [
                {
                  type: "string",
                  label: "Link",
                  name: "href",
                },
                {
                  type: "string",
                  label: "Label",
                  name: "label",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          label: "Footer",
          name: "footer",
          fields: [
            {
              type: "string",
              label: "Color",
              name: "color",
              options: [
                { label: "Default", value: "default" },
                { label: "Primary", value: "primary" },
              ],
            },
            {
              type: "object",
              label: "Social Links",
              name: "social",
              fields: [
                {
                  type: "string",
                  label: "Facebook",
                  name: "facebook",
                },
                {
                  type: "string",
                  label: "Twitter",
                  name: "twitter",
                },
                {
                  type: "string",
                  label: "Instagram",
                  name: "instagram",
                },
                {
                  type: "string",
                  label: "Github",
                  name: "github",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          label: "Redirects",
          name: "redirects",
          list: true,
          fields: [
            {
              type: "string",
              label: "From",
              name: "from",
            },
            {
              type: "string",
              label: "To",
              name: "to",
            },
          ]
        },
        {
          type: "object",
          label: "Theme",
          name: "theme",
          fields: [
            {
              type: "string",
              label: "Primary Color",
              name: "color",
              options: [
                {
                  label: "Blue",
                  value: "blue",
                },
                {
                  label: "Teal",
                  value: "teal",
                },
                {
                  label: "Green",
                  value: "green",
                },
                {
                  label: "Red",
                  value: "red",
                },
                {
                  label: "Pink",
                  value: "pink",
                },
                {
                  label: "Purple",
                  value: "purple",
                },
                {
                  label: "Orange",
                  value: "orange",
                },
                {
                  label: "Yellow",
                  value: "yellow",
                },
              ],
            },
            {
              type: "string",
              name: "font",
              label: "Font Family",
              options: [
                {
                  label: "System Sans",
                  value: "sans",
                },
                {
                  label: "Nunito",
                  value: "nunito",
                },
                {
                  label: "Lato",
                  value: "lato",
                },
              ],
            },
            {
              type: "string",
              name: "icon",
              label: "Icon Set",
              options: [
                {
                  label: "Boxicons",
                  value: "boxicon",
                },
                {
                  label: "Featureicons",
                  value: "featureicon",
                },
              ],
            },
            {
              type: "string",
              name: "darkMode",
              label: "Dark Mode",
              options: [
                {
                  label: "System",
                  value: "system",
                },
                {
                  label: "Light",
                  value: "light",
                },
                {
                  label: "Dark",
                  value: "dark",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: "Authors",
      name: "authors",
      path: "content/authors",
      fields: [
        {
          type: "string",
          label: "Name",
          name: "name",
        },
        {
          type: "string",
          label: "Avatar",
          name: "avatar",
        },
      ],
    },
    {
      label: "Pages",
      name: "pages",
      path: "content/pages",
      fields: [
        {
          type: "boolean",
          label: "Draft",
          description: "Draft posts are only visible on staging.",
          name: "draft",
        },
        {
          type: "object",
          list: true,
          name: "blocks",
          label: "Sections",
          templates: [
            featureBlockSchema,
            photoCardsBlockSchema,
            textCardsBlockSchema,
            bannerBlockSchema,
          ],
        },
        {
          type: "string",
          label: "Primary",
          name: "primary",
          ui: {
            component: "color",
          },
        },
        {
          type: "string",
          label: "Accent 1",
          name: "accent1",
          ui: {
            component: "color",
          },
        },
        {
          type: "string",
          label: "Accent 2",
          name: "accent2",
          ui: {
            component: "color",
          },
        },
        {
          type: "string",
          label: "Accent 3",
          name: "accent3",
          ui: {
            component: "color",
          },
        },
        {
          label: "Navigation Text Color",
          name: "navTextColor",
          ui: {
            component: "select",
          },
          type: "string",
          options: [
            { label: "Primary", value: "primary" },
            { label: "Accent 1", value: "accent1" },
            { label: "Accent 2", value: "accent2" },
            { label: "Accent 3", value: "accent3" },
            { label: "White", value: "white" },
            { label: "Gray Light", value: "grayLight" },
            { label: "Gray", value: "gray" },
            { label: "Gray Dark", value: "grayDark" },
            { label: "Black", value: "black" },
          ],
        },
        {
          label: "Navigation Background Color",
          name: "navBackgroundColor",
          type: "string",
          ui: {
            component: "select",
          },
          options: [
            { label: "Primary", value: "primary" },
            { label: "Accent 1", value: "accent1" },
            { label: "Accent 2", value: "accent2" },
            { label: "Accent 3", value: "accent3" },
            { label: "White", value: "white" },
            { label: "Gray Light", value: "grayLight" },
            { label: "Gray", value: "gray" },
            { label: "Gray Dark", value: "grayDark" },
            { label: "Black", value: "black" },
          ],
        },
        {
          type: "string",
          label: "Site Title",
          name: "siteTitle",
        },
        {
          type: "string",
          label: "Site Description",
          name: "siteDescription",
        },
        {
          type: "image",
          label: "Site Image",
          name: "siteImageSrc",
        },
      ],
    },
  ],
});
