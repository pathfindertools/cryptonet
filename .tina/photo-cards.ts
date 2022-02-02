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

export const photoCardsBlockSchema: TinaTemplate = {
  name: "photoCards",
  label: "Photo Cards",
  ui: {
    defaultItem: {
      label: "",
      headline: "This is a headline",
      subhead: "Here is a subhead",
      body: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.",
      style: {
        columns: "3",
        textAlignment: "left",
        contentOrder: "labelHeadingsContent",
        fillStyles: "bg-white",
        labelStyles: "text-black text-sm mb-0",
        headlineStyles: "text-black text-5xl mb-0",
        subheadStyles: "text-black text-3xl mb-0",
        textStyles: "text-black text-md mb-0",
      },
      cardStyle: {
        type: "solid",
        accentColor: "primary",
        buttonType: "solid",
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
          label: "Type",
          name: "type",
          type: "string",
          ui: {
            component: "select",
          },
          options: [
            { label: "Solid Background", value: "solid" },
            { label: "Semi Transparent", value: "transparent" },
            { label: "Horizontal Fade", value: "fadeH" },
          ],
        },
        {
          type: "string",
          label: "Image",
          name: "imageStyles",
          ui: {
            component: "imageControl"
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
          label: "Padding",
          name: "padding",
          type: "string",
          ui: {
            component: "paddingControl",
          }
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
          label: "Button Type",
          name: "buttonType",
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
          type: "string",
          label: "Background",
          name: "buttonFillStyles",
          ui: {
            component: "fillControl"
          }
        },
        {
          label: "Button Text Color",
          name: "buttonTextColor",
          type: "string",
          ui: {
            component: "select",
          },
          options: colorOptions,
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
          label: "Image",
          name: "image",
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
              name: "alt",
              label: "Alt Text",
              type: "string",
            },
          ],
        },
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
      ],
    },
    navigationLabelSchema,
  ],
};
