import type { TinaTemplate } from "@tinacms/cli";

export const bannerBlockSchema: TinaTemplate = {
  name: "banner",
  label: "Banner",
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
          label: "Icon",
          name: "icon",
          type: "boolean",
        },
        {
          label: "Link",
          name: "link",
          type: "string",
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
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
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
      description: "Background Color",
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
  ],
};
