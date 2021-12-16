
import type { TinaField } from "@tinacms/cli";
import { contentOrderOptions, hAlignOptions } from "./options"

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
      type: "string",
      label: "Background",
      name: "fillStyles",
      ui: {
        component: "fillControl"
      }
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
      label: "Content Width",
      name: "contentWidth",
      type: "string",
      ui: {
        component: "select",
      },
      options: [
        { label: "100%", value: "w-full" },
        { label: "75%", value: "w-9/12" },
        { label: "66%", value: "w-8/12" },
        { label: "50%", value: "w-6/12" },
        { label: "33%", value: "w-4/12" },
        { label: "25%", value: "w-3/12" },
      ],
    },
  ],
};