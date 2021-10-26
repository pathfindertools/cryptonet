import type { TinaTemplate } from "@tinacms/cli";
import { buttonsSchema } from "./shared/buttons";
import { cardsSchema } from "./shared/cards";

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
      ],
    },
    cardsSchema
  ],
};
