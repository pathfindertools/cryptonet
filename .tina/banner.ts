import type { TinaTemplate } from "@tinacms/cli";
import { buttonsSchema } from "./shared/buttons";
import { navigationLabelSchema } from "./shared/navigation-label";
import { colorOptions, contentOrderOptions, hAlignOptions, textSizeOptions } from "./shared/options"

export const bannerBlockSchema: TinaTemplate = {
  name: "banner",
  label: "Banner",
  ui: {
    defaultItem: {
      label: "",
      headline: "This is the main headline",
      subhead: "Here is a subhead",
      body: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.",
      style: {
        textColor: "white",
        headlineColor: "white",
        subheadColor: "white",
        backgroundColor: "black",
        textSize: 'base',
        headlineSize: '3xl',
        subheadSize: 'lg',
        textAlignment: "left",
        contentOrder: "labelHeadingsContent",
        width: "normal"
      },
    },
  },
  fields: [
    {
      label: "Image",
      name: "image",
      type: "object",
      fields: [
        {
          label: "Image Source",
          name: "src",
          type: "image",
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
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
    {
      type: "object",
      label: "Style",
      name: "style",
      ui: {
        component: "group",
      },
      fields: [
        {
          label: "Text Color",
          name: "textColor",
          ui: {
            component: "select",
          },
          type: "string",
          options: colorOptions,
        },
        {
          label: "Headline Color",
          name: "headlineColor",
          ui: {
            component: "select",
          },
          type: "string",
          options: colorOptions,
        },
        {
          label: "Subhead Color",
          name: "subheadColor",
          type: "string",
          ui: {
            component: "select",
          },
          options: colorOptions,
        },
        {
          label: "Background Color",
          name: "backgroundColor",
          type: "string",
          ui: {
            component: "select",
          },
          options: colorOptions,
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
            },
            {
              name: "alt",
              label: "Alt Text",
              type: "string",
            },
          ],
        },
        {
          label: "Text Size",
          name: "textSize",
          type: "string",
          ui: {
            component: "select",
          },
          options: textSizeOptions,
        },
        {
          label: "Headline Size",
          name: "headlineSize",
          type: "string",
          ui: {
            component: "select",
          },
          options: textSizeOptions,
        },
        {
          label: "Subhead Size",
          name: "subheadSize",
          type: "string",
          ui: {
            component: "select",
          },
          options: textSizeOptions,
        },
        {
          label: "Text Alignment",
          name: "textAlignment",
          type: "string",
          ui: {
            component: "select",
          },
          options: hAlignOptions,
        },
        {
          label: "Content Order",
          name: "contentOrder",
          type: "string",
          ui: {
            component: "select",
          },
          options: contentOrderOptions,
        },
        {
          label: "Width",
          name: "width",
          type: "string",
          ui: {
            component: "select",
          },
          options: [
            { label: "Normal", value: "normal" },
            { label: "Narrow", value: "narrow" },
          ],
        },
      ],
    },
  ],
};
