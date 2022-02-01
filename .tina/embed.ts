import type { TinaTemplate } from "@tinacms/cli";
import { navigationLabelSchema } from "./shared/navigation-label";

export const embedBlockSchema: TinaTemplate = {
  name: "embed",
  label: "Embed",
  ui: {
    defaultItem: {
      markup: "",
      style: {
        fillStyles: "bg-white",
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
          label: "Minimum Height",
          name: "minHeight",
          type: "string",
        },
        {
          label: "Full Width",
          name: "fullWidth",
          type: "boolean",
        },
        {
          label: "Padding",
          name: "padding",
          type: "string",
          ui: {
            component: "paddingControl",
          }
        },
        {
          type: "string",
          label: "Background",
          name: "fillStyles",
          ui: {
            component: "fillControl"
          }
        },
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
      label: "Html",
      name: "markup",
      description: "Any valid html, you can also use tailwind.",
      type: "string",
      ui: {
        component: "textarea"
      }
    },
    navigationLabelSchema,
  ],
};
