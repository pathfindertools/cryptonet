import type { TinaTemplate } from "@tinacms/cli";
import { iconSchema } from "./icon";

const defaultCard = {
  title: "Here's Another Card",
  text: "This is where you might talk about the card, if this wasn't just filler text.",
  icon: {
    color: "",
    style: "float",
    name: "",
  },
};

export const cardsBlockSchema: TinaTemplate = {
  name: "cards",
  label: "Cards",
  ui: {
    defaultItem: {
      items: [defaultCard, defaultCard, defaultCard],
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
      type: "object",
      label: "Cards",
      name: "items",
      list: true,
      ui: {
        defaultItem: {
          ...defaultCard,
        },
      },
      fields: [
        iconSchema,
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          label: "Subhead",
          name: "subhead",
          type: "string",
        },
        {
          type: "string",
          label: "Text",
          name: "text",
        },
      ],
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
      ],
    },
  ],
};
