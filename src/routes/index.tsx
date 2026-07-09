import { createFileRoute } from "@tanstack/react-router";
import siteHtml from "../heals-site.html?raw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Heals Media — Visual Stories That Change Health Outcomes" },
      {
        name: "description",
        content:
          "Heals Media creates animations, illustrations, and visual stories that make health information land with the communities who need it most.",
      },
      { property: "og:title", content: "Heals Media — Visual Stories That Change Health Outcomes" },
      {
        property: "og:description",
        content:
          "Visual storytelling for hospitals, NGOs, and public health programs across Africa.",
      },
      { property: "og:url", content: "https://healsmedia.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://healsmedia.lovable.app/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      title="Heals Media"
      srcDoc={siteHtml}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: 0,
      }}
    />
  );
}
