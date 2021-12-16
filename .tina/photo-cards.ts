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
            component: "select",
          },
          options: [
            { label: "0", value: "p-0" },
            { label: "1", value: "p-px" },
            { label: "2", value: "p-0.5" },
            { label: "4", value: "p-1" },
            { label: "6", value: "p-1.5" },
            { label: "8", value: "p-2" },
            { label: "10", value: "p-2.5" },
            { label: "12", value: "p-3" },
            { label: "14", value: "p-3.5" },
            { label: "16", value: "p-4" },
            { label: "20", value: "p-5" },
            { label: "24", value: "p-6" },
            { label: "28", value: "p-7" },
            { label: "32", value: "p-8" },
            { label: "36", value: "p-9" },
            { label: "40", value: "p-10" },
            { label: "44", value: "p-11" },
            { label: "48", value: "p-12" },
            { label: "52", value: "p-13" },
            { label: "56", value: "p-14" },
          ],
        },
        {
          type: "string",
          label: "Label Style",
          name: "labelStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Headline Style",
          name: "headlineStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Subhead Style",
          name: "subheadStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Text Style",
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
