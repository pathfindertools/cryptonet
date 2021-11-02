import type { TinaTemplate } from "@tinacms/cli";
import { buttonsSchema } from "./shared/buttons";
import { navigationLabelSchema } from "./shared/navigation-label";
import { colorOptions } from "./shared/options"

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
        textColor: "white",
        backgroundColor: "black",
        flipLayout: false,
        contentOrder: "labelHeadingsContent",
        imageStyle: "natural",
        contentAlignment: "center",
        textAlignment: "left",
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
          label: "Flip Layout",
          name: "flipLayout",
          type: "boolean",
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
          label: "Image Style",
          name: "imageStyle",
          type: "string",
          ui: {
            component: "select",
          },
          options: [
            { label: "Natural Size", value: "natural" },
            { label: "Fit in Half", value: "fitHalf" },
            { label: "Fill Half", value: "fillHalf" },
            { label: "Fill Overlap", value: "overlap" },
          ],
        },
        {
          label: "Content Alignment",
          name: "contentAlignment",
          type: "string",
          ui: {
            component: "select",
          },
          options: [
            { label: "Top", value: "top" },
            { label: "Center", value: "center" },
            { label: "Bottom", value: "bottom" },
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
    },
    navigationLabelSchema
  ],
};
