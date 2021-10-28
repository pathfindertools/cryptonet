import type { TinaTemplate } from "@tinacms/cli";
import { buttonsSchema } from "./shared/buttons";
import { cardsSchema } from "./shared/cards";
import { navigationLabelSchema } from "./shared/navigation-label";

const defaultCard = {
  headline: "Here's Another Card",
  text: "This is where you might talk about the card, if this wasn't just filler text.",
};

export const textCardsBlockSchema: TinaTemplate = {
  name: "textCards",
  label: "Text Cards",
  ui: {
    defaultItem: {
      style: {
        columns: "3"
      },
      cardStyle: {
        textColor: "white",
        backgroundColor: "black",
        accentColor: "primary",
        type: 'default'
      },
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
    buttonsSchema,
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
        {
          type: "string",
          label: "Title",
          name: "headline",
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
        {
          type: "string",
          label: "Link",
          name: "link",
        },
        {
          type: "string",
          label: "Button Label",
          name: "buttonLabel",
          description: "A button will be included if you have a link and button label, with only a link the entire card is linked"
        },
        {
          label: "Accent Color",
          name: "accentColor",
          type: "string",
          ui: {
            component: "select",
          },
          options: [
            { label: "Default", value: "default" },
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
    },
    cardsSchema,
    {
      type: "object",
      label: "Card Style",
      name: "cardStyle",
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
        {
          label: "Accent Color",
          name: "accentColor",
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
          label: "Type",
          name: "type",
          type: "string",
          ui: {
            component: "select",
          },
          options: [
            { label: "Default", value: "default" },
            { label: "Transparent Background", value: "transparent" },
          ],
        },
      ],
    },
    navigationLabelSchema
  ],
};
