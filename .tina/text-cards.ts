import type { TinaTemplate } from "@tinacms/cli";
import { buttonsSchema } from "./shared/buttons";
import { cardsSchema } from "./shared/cards";
import { navigationLabelSchema } from "./shared/navigation-label";
import { colorOptions } from "./shared/options"

const defaultCard = {
  headline: "Here's Another Card",
  subhead: "",
  text: "This is where you might talk about the card, if this wasn't just filler text.",
};

export const textCardsBlockSchema: TinaTemplate = {
  name: "textCards",
  label: "Text Cards",
  ui: {
    defaultItem: {
      label: "",
      headline: "This is a headline",
      subhead: "Here is a subhead",
      body: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.",
      style: {
        columns: "3",
        textColor: "white",
        backgroundColor: "black",
        contentOrder: "labelHeadingsContent",
        textAlignment: "left",
      },
      cardStyle: {
        textColor: "white",
        backgroundColor: "gray",
        accentColor: "primary",
        type: "solid",
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
          ui: {
            component: "markdown",
          },
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
          options: colorOptions,
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
          label: "Accent Color",
          name: "accentColor",
          type: "string",
          ui: {
            component: "select",
          },
          options: colorOptions,
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
            { label: "Transparent Background", value: "transparent" },
          ],
        },
      ],
    },
    navigationLabelSchema
  ],
};
