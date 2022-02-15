import type { TinaTemplate } from "@tinacms/cli";
import { buttonsSchema } from "./shared/buttons";
import { navigationLabelSchema } from "./shared/navigation-label";
import { contentOrderOptions, minHeightOptions } from "./shared/options"

export const featureBlockSchema: TinaTemplate = {
  name: "feature",
  label: "Feature",
  ui: {
    defaultItem: {
      label: "",
      headline: "This is the main headline",
      subhead: "Here is a subhead",
      body: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.",
      style: {
        labelStyles: "text-black text-sm mb-0",
        headlineStyles: "text-black text-5xl mb-0",
        subheadStyles: "text-black text-3xl mb-0",
        textStyles: "text-black text-md mb-0",
        fillStyles: "bg-white",
        contentOrder: "labelHeadingsContent",
      },
    },
  },
  fields: [
    {
      type: "object",
      label: "Section Style",
      name: "style",
      ui: {
        component: "group",
      },
      fields: [
        {
          type: "string",
          label: "Background",
          name: "fillStyles",
          ui: {
            component: "fillControl"
          }
        },
        {
          label: "Alignment",
          name: "alignment",
          type: "string",
          ui: {
            component: "alignmentControl",
          },
        },
        {
          label: "Content",
          name: "contentTitle",
          type: "string",
          ui: {
            component: "ruledTitle",
          },
        },
        {
          label: "",
          name: "featureContent",
          type: "string",
          ui: {
            component: "featureContentField",
          }
        },
        {
          label: "Content Padding",
          name: "padding",
          type: "string",
          ui: {
            component: "paddingControl",
          }
        },
        {
          label: "Image",
          name: "imageTitle",
          type: "string",
          ui: {
            component: "ruledTitle",
          },
        },
        {
          label: "",
          name: "featureImage",
          type: "string",
          ui: {
            component: "featureImageField",
          }
        },
        {
          label: "Image Padding",
          name: "imagePadding",
          type: "string",
          ui: {
            component: "paddingControl",
          }
        },
        {
          label: "Typography",
          name: "typographyTitle",
          type: "string",
          ui: {
            component: "ruledTitle",
          },
        },
        {
          type: "string",
          label: "Label",
          name: "labelStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Headline",
          name: "headlineStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Subhead",
          name: "subheadStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Text",
          name: "textStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          label: "Content Order",
          name: "contentOrder",
          type: "string",
          ui: {
            component: "selectField",
          },
          options: contentOrderOptions,
        },
      ],
    },
    {
      label: "Image",
      name: "image",
      type: "object",
      fields: [
        {
          label: "Image Source",
          name: "src",
          type: "image",
          ui: {
            clearable: true,
          }
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        }
      ],
    },
    {
      label: "Background Image",
      name: "backgroundImage",
      type: "object",
      fields: [
        {
          label: "Image Source",
          name: "src",
          type: "image",
          ui: {
            clearable: true,
          }
        },
        {
          label: "Position",
          name: "position",
          ui: {
            component: "select",
          },
          type: "string",
          options: [
            { label: "Bottom", value: "object-bottom" },
            { label: "Center", value: "object-center" },
            { label: "Left", value: "object-left" },
            { label: "Left Bottom", value: "object-left-bottom" },
            { label: "Left Top", value: "object-left-top" },
            { label: "Right", value: "object-right" },
            { label: "Right Bottom", value: "object-right-bottom" },
            { label: "Right Top", value: "object-right-top" },
            { label: "Top", value: "object-top" },
          ],
        },
      ],
    },
    {
      label: "Label",
      name: "label",
      type: "string",
    },
    {
      label: "Headline",
      name: "headline",
      type: "string",
    },
    {
      label: "Subhead",
      name: "subhead",
      type: "string",
    },
    {
      label: "Body",
      name: "body",
      type: "string",
      ui: {
        component: "markdown",
      },
    },
    buttonsSchema,
    navigationLabelSchema,
  ],
};
