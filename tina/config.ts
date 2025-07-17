import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  
  // Get these from your Tina Cloud dashboard and Vercel env vars
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
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
        label: "Documentation Pages",
        path: "docs",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Page Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "sidebar_label",
            label: "Sidebar Label",
            description: "Short name for navigation",
          },
          {
            type: "number",
            name: "sidebar_position",
            label: "Sidebar Position",
            description: "Order in navigation (1, 2, 3...)",
          },
          {
            type: "string",
            name: "description",
            label: "SEO Description",
            description: "Brief description for search engines",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "keywords",
            label: "Keywords",
            description: "Comma-separated keywords for SEO",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true,
            templates: [
              {
                name: "Callout",
                label: "Callout Box",
                fields: [
                  {
                    type: "string",
                    name: "type",
                    label: "Type",
                    options: ["tip", "warning", "danger", "info"],
                  },
                  {
                    type: "rich-text",
                    name: "content",
                    label: "Content",
                  },
                ],
              },
              {
                name: "CodeBlock",
                label: "Code Block",
                fields: [
                  {
                    type: "string",
                    name: "language",
                    label: "Language",
                    options: ["javascript", "html", "css", "bash", "json", "php"],
                  },
                  {
                    type: "string",
                    name: "code",
                    label: "Code",
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
              },
            ],
          },
        ],
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "getting-started") {
              return `/`;
            }
            return `/${document._sys.breadcrumbs.join("/")}`;
          },
        },
      },
      {
        name: "blog",
        label: "Blog Posts",
        path: "blog",
        format: "mdx",
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
            name: "description",
            label: "Description",
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
          },
          {
            type: "string",
            name: "authors",
            label: "Authors",
            list: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
