import type { TinaTemplate } from "@tinacms/cli";
import { backgroundSchema } from "./shared/background";
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
        fillStyles: "bg-white",
        textAlignment: "left",
        contentOrder: "labelHeadingsContent",
        labelStyles: "text-black text-sm mb-0",
        headlineStyles: "text-black text-5xl mb-0",
        subheadStyles: "text-black text-3xl mb-0",
        textStyles: "text-black text-md mb-0",
      },
      cardStyle: {
        type: "solid",
        buttonType: "solid",
        accentColor: "primary",
        fillStyles: "bg-gray",
        labelStyles: "text-black text-sm mb-0",
        headlineStyles: "text-black text-2xl mb-0",
        subheadStyles: "text-black text-lg mb-0",
        textStyles: "text-black text-sm mb-0",
      },
      items: [defaultCard, defaultCard, defaultCard],
    },
  },
  fields: [
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
          type: "string",
          label: "Background",
          name: "fillStyles",
          ui: {
            component: "fillControl"
          }
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
          label: "Type",
          name: "type",
          type: "string",
          ui: {
            component: "selectField",
          },
          options: [
            { label: "Solid", value: "solid" },
            { label: "Transparent Background", value: "transparent" },
          ],
        },
        {
          label: "Accent Color",
          name: "accentColor",
          type: "string",
          ui: {
            component: "selectField",
          },
          options: colorOptions,
        },
        {
          type: "string",
          label: "Border",
          name: "borderStyles",
          ui: {
            component: "borderControl"
          }
        },
        {
          label: "Typography",
          name: "typographyTitle",
          type: "string",
          ui: {
            component: "ruledTitle",
          },
        },
        {
          type: "string",
          label: "Label",
          name: "labelStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Headline",
          name: "headlineStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Subhead",
          name: "subheadStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Text",
          name: "textStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          label: "Button",
          name: "buttonTitle",
          type: "string",
          ui: {
            component: "ruledTitle",
          },
        },
        {
          label: "Button Type",
          name: "buttonType",
          type: "string",
          ui: {
            component: "selectField",
          },
          options: [
            { label: "Solid", value: "solid" },
            { label: "Outline", value: "outline" },
            { label: "Link", value: "link" },
          ],
        },
        {
          label: "Button Text Color",
          name: "buttonTextColor",
          type: "string",
          ui: {
            component: "selectField",
          },
          options: colorOptions,
        },
      ],
    },
    backgroundSchema,
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
        component: 'cards',
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
            component: "selectField",
          },
          options: colorOptions,
        },
      ],
    },
    navigationLabelSchema,
  ],
};
