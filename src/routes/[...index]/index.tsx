import { component$ } from "@builder.io/qwik";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import {
  getContent,
  RenderContent,
  getBuilderSearchParams,
} from "@builder.io/sdk-qwik";
import { CUSTOM_COMPONENTS } from "../../components/builder-registry";

// This page is a catch-all for all routes that don't have a pre-defined route.
// Using a catch-all route allows you to dynamically create new pages in Builder.

// Use the `useBuilderContent` route loader to get your content from Builder.
// `routeLoader$()` takes an async function to fetch content
// from Builder with using `getContent()`.
export const useBuilderContent = routeLoader$(async ({ url, error }) => {
  const isPreviewing = url.searchParams.has("builder.preview");

  // Fetch Builder.io Visual CMS content using the Qwik SDK.
  // The public API key is set in the .env file at the root
  // https://www.builder.io/c/docs/using-your-api-key
  const builderContent = await getContent({
    model: "page",
    apiKey: import.meta.env.PUBLIC_BUILDER_API_KEY,
    options: getBuilderSearchParams(url.searchParams),
    userAttributes: {
      urlPath: url.pathname,
    },
  });

  // If there's no content, throw a 404.
  // You can use your own 404 component here
  if (!builderContent && !isPreviewing) {
    throw error(404, "Page not found");
  }

  // return content fetched from Builder, which is JSON
  return builderContent;
});

export default component$(() => {
  const builderContent = useBuilderContent();

  // RenderContent component uses the `content` prop to render
  // the page, specified by the API Key, at the current URL path.
  return (
    <RenderContent
      model="page"
      content={builderContent.value}
      apiKey={import.meta.env.PUBLIC_BUILDER_API_KEY}
      customComponents={CUSTOM_COMPONENTS}
    />
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const builderContent = resolveValue(useBuilderContent);
  return {
    title: builderContent?.data?.title,
    description: builderContent?.data?.description,
    meta: [
      { name: "keywords", content: builderContent?.data?.keywords },
      { name: "author", content: builderContent?.data?.author },
      { property: "og:image", content: builderContent?.data?.ogImage },
      { property: "og:image:width", content: builderContent?.data?.ogImageWidth },
      { property: "og:image:height", content: builderContent?.data?.ogImageHeight },
      { property: "og:image:alt", content: builderContent?.data?.ogImageAlt },
      { name: "twitter:image", content: builderContent?.data?.twitterImage },
      { name: "twitter:image:alt", content: builderContent?.data?.twitterImageAlt },
      { name: "twitter:card", content: builderContent?.data?.twitterCard },
      { name: "twitter:site", content: builderContent?.data?.twitterSite },
      { name: "twitter:creator", content: builderContent?.data?.twitterCreator },
      { name: "theme-color", content: builderContent?.data?.themeColor },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { name: "robots", content: "index, follow" },
      { name: "og:title", content: builderContent?.data?.ogTitle },
      { name: "og:description", content: builderContent?.data?.ogDescription },
      { name: "og:type", content: builderContent?.data?.ogType },
      { name: "og:url", content: builderContent?.data?.ogUrl },
      { name: "og:site_name", content: builderContent?.data?.ogSiteName },
      { name: "twitter:title", content: builderContent?.data?.twitterTitle },
      { name: "twitter:description", content: builderContent?.data?.twitterDescription },
      { name: "twitter:url", content: builderContent?.data?.twitterUrl },
      { name: "twitter:domain", content: builderContent?.data?.twitterDomain },
    ],
  };
};
