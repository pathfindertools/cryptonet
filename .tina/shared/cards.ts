
import type { TinaField } from "@tinacms/cli";
import { colorOptions, contentOrderOptions, hAlignOptions, textSizeOptions } from "./options"

export const cardsSchema: TinaField = {
  type: "object",
  label: "Section Style",
  name: "style",
  ui: {
    component: "group",
  },
  fields: [
    {
      label: "Minimum Height",
      name: "minHeight",
      type: "string",
    },
    {
      label: "Columns",
      name: "columns",
      ui: {
        component: "select",
      },
      type: "string",
      options: [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
      ],
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
          ui: {
            clearable: true,
          }
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      type: "string",
      label: "Label Style",
      name: "labelStyles",
      ui: {
        component: "typeControl"
      }
    },
    {
      type: "string",
      label: "Headline Style",
      name: "headlineStyles",
      ui: {
        component: "typeControl"
      }
    },
    {
      type: "string",
      label: "Subhead Style",
      name: "subheadStyles",
      ui: {
        component: "typeControl"
      }
    },
    {
      type: "string",
      label: "Text Style",
      name: "textStyles",
      ui: {
        component: "typeControl"
      }
    },
  ],
};