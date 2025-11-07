import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Quartz 4",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Times New Roman",
        body: "Times New Roman",
        code: "Times New Roman",
      },
      colors: {
        lightMode: {
          light: "#faf8f8", //base
          lightgray: "#e5e5e5", //node connect
          gray: "#b8b8b8", //node itself
          darkgray: "#4e4e4e",//texto in side bar
          dark: "#2b2b2b", //texto punto
          secondary: "#284b63", //linked things
          tertiary: "#84a59d", //selected sidebar item
          highlight: "rgba(143, 159, 169, 0.15)", //behind tag and link
          textHighlight: "#fff23688",//no se bro
        },
        darkMode: {
          light: "#2E2939",
          lightgray: "#534173", //node connect
          gray: "#DDCFDD", //node itself
          darkgray: "#d4d4d4", //texto in side bar
          dark: "#C9BCD8",//texto punto
          secondary: "#B4AACA", //linked things
          tertiary: "#B6AACA", //selected sidebar item
          highlight: "#23147A66",//behind tag and link 
          textHighlight: "#632FD466", //no se bro
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
