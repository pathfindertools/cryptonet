
import type { TinaField } from "@tinacms/cli";

export const buttonsSchema: TinaField = {
  type: "object",
  label: "Buttons",
  name: "buttons",
  list: true,
  ui: {
    defaultItem: {
      label: "Button Label",
      link: "/",
      type: "solid",
      textColor: "black",
      backgroundColor: "primary",
    },
  },
  fields: [
    {
      label: "Label",
      name: "label",
      type: "string",
    },
    {
      label: "Link",
      name: "link",
      type: "string",
    },
    {
      label: "Type",
      name: "type",
      type: "string",
      ui: {
        component: "select",
      },
      options: [
        { label: "Solid", value: "solid" },
        { label: "Outline", value: "outline" },
        { label: "Link", value: "link" },
      ],
    },
    {
      label: "Text Color",
      name: "textColor",
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
  ],
};
