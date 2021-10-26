
import type { TinaField } from "@tinacms/cli";

export const cardsSchema: TinaField = {
  type: "object",
  label: "Style",
  name: "style",
  ui: {
    component: "group",
  },
  fields: [
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
      label: "Text Color",
      name: "textColor",
      ui: {
        component: "select",
      },
      type: "string",
      options: [
        { label: "White", value: "white" },
        { label: "Gray Light", value: "grayLight" },
        { label: "Gray", value: "gray" },
        { label: "Gray Dark", value: "grayDark" },
        { label: "Black", value: "black" },
      ],
    },
    {
      label: "Background Color",
      name: "backgroundColor",
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
      label: "Content Order",
      name: "contentOrder",
      type: "string",
      ui: {
        component: "select",
      },
      options: [
        { label: "Label Headings Content", value: "labelHeadingsContent" },
        { label: "Label Content Headings", value: "labelContentHeadings" },
        { label: "Headings Label Content", value: "headingsLabelContent" },
        { label: "Headings Content Label", value: "headingsContentLabel" },
        { label: "Content Label Headings", value: "contentLabelHeadings" },
        { label: "Content Headings Label", value: "contentHeadingsLabel" },
      ],
    },
    {
      label: "Text Alignment",
      name: "textAlignment",
      type: "string",
      ui: {
        component: "select",
      },
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" },
      ],
    },
  ],
};