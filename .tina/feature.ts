import type { TinaTemplate } from "@tinacms/cli";
import { buttonsSchema } from "./shared/buttons";
import { navigationLabelSchema } from "./shared/navigation-label";
import { contentOrderOptions, minHeightOptions } from "./shared/options"

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
        minHeight: "",
        flipLayout: false,
        imageStyle: "natural",
        labelStyles: "text-black text-sm mb-0",
        headlineStyles: "text-black text-5xl mb-0",
        subheadStyles: "text-black text-3xl mb-0",
        textStyles: "text-black text-md mb-0",
        fillStyles: "bg-white",
        textAlignment: "left",
        contentAlignment: "center",
        contentOrder: "labelHeadingsContent",
      },
    },
  },
  fields: [
    {
      type: "object",
      label: "Section Style",
      name: "style",
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
          label: "Alignment",
          name: "alignment",
          type: "string",
          ui: {
            component: "alignmentControl",
          },
        },
        {
          label: "Minimum Height",
          name: "minHeight",
          type: "string",
          ui: {
            component: "selectField",
            mobileMode: true,
          },
          options: minHeightOptions,
        },
        {
          label: "Content Padding",
          name: "padding",
          type: "string",
          ui: {
            component: "paddingControl",
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
          label: "Content Order",
          name: "contentOrder",
          type: "string",
          ui: {
            component: "selectField",
          },
          options: contentOrderOptions,
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
          ui: {
            clearable: true,
          }
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
        {
          label: "Layout Style",
          name: "imageStyle",
          type: "string",
          ui: {
            component: "select",
          },
          options: [
            { label: "Inside Padding", value: "padding" },
            { label: "Half", value: "half" },
            { label: "Half to Edge", value: "halfEdge" },
            { label: "Overlap", value: "overlap" },
          ],
        },
        {
          label: "Fit",
          name: "fit",
          ui: {
            component: "select",
          },
          type: "string",
          options: [
            { label: "Natural", value: "none" },
            { label: "Scale down only", value: "scaleDown" },
            { label: "Fit", value: "contain" },
            { label: "Fill", value: "cover" },
          ],
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
    navigationLabelSchema,
  ],
};
