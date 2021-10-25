import type { TinaTemplate } from "@tinacms/cli";

export const featureBlockSchema: TinaTemplate = {
  name: "feature",
  label: "Feature",
  ui: {
    defaultItem: {
      label: "Here's some text above the other text",
      headline: "This Big Text is Totally Awesome",
      subhead: "Here is a subhead",
      body: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.",
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
    {
      label: "Buttons",
      name: "buttons",
      type: "object",
      list: true,
      ui: {
        defaultItem: {
          label: "Button Label",
          type: "button",
          icon: true,
          link: "/",
        },
      },
      fields: [
        {
          label: "Label",
          name: "label",
          type: "string",
        },
        {
          label: "Type",
          name: "type",
          type: "string",
          options: [
            { label: "Button", value: "button" },
            { label: "Link", value: "link" },
          ],
        },
        {
          label: "Link",
          name: "link",
          type: "string",
        },
      ],
    },
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
  ],
};
