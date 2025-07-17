import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  
  // Hardcoded client ID (simpler)
  clientId: "7558fb44-6cec-4cee-9fc4-d66c3f3e2d91",
  
  // Only need token from env
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  
  media: {
    tina: {
      mediaRoot: "img",
      publicFolder: "static",
    },
  },
  
  schema: {
    collections: [
      {
        name: "docs",
        label: "Documentation",
        path: "docs",
        format: "md",
        create: true,
        ui: {
          allowedActions: {
            create: true,
            delete: true,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "sidebar_label",
            label: "Sidebar Label",
          },
          {
            type: "number",
            name: "sidebar_position",
            label: "Position",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true,
          },
        ],
      },
    ],
  },
});
