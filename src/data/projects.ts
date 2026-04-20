/* Date: 4/20/2026 | Developer: Yahia Saad | License: First Stand Studio. All rights reserved. */
import erireLogo from "../../assets/icon/Erire Logo.png";
import type { ProjectRecord } from "./types";

export const projects: ProjectRecord[] = [
  {
    slug: "erire",
    label: "Featured Project",
    title: "Erire Language",
    shortTitle: "Erire",
    subtitle: "PROGRAMMING LANGUAGE",
    description:
      "A programming language and UI-first development system with its own runtime and IDE, built to create modern applications faster and with less setup.",
    status: "IN DEVELOPMENT",
    type: "Programming Language & UI-First Development System",
    atmosphere: "Built to make application development faster, clearer, and more direct.",
    accent: "#aa7840",
    accentSoft: "rgba(170, 120, 64, 0.14)",
    logo: erireLogo,
    favicon: erireLogo,
    facts: [
      { label: "Type", value: "Programming Language & UI-First Development System" },
      { label: "Status", value: "In Development" },
      { label: "Architecture", value: "Language + Runtime + IDE" },
      { label: "UI System", value: "Built-in UI components and layout tools" },
      { label: "Workflow", value: "Direct run and build from Erire Studio" },
      { label: "Backend", value: "main.er, backend.er, or backend/" },
      { label: "Integration", value: "Python and C++ for heavy logic" },
      { label: "Current Focus", value: "Performance, stability, and IDE user experience" }
    ],
    links: [
      {
        label: "DOWNLOAD",
        href: "https://github.com/yahiawork/Erire-Studio-IDE-COMPILER-INTERPRETER/releases/download/Erire-New/erire-v1.0.4-windows-x64.zip"
      }
    ],
    github: {
      owner: "",
      repo: "",
      branch: "main",
      fallback: [
        {
          message: "Defined Erire around one direct flow: language, runtime, and IDE together.",
          committedAt: "2026-04-20T12:00:00.000Z"
        },
        {
          message: "Current work is focused on runtime stability and the Erire Studio experience.",
          committedAt: "2026-04-16T12:00:00.000Z"
        }
      ]
    }
  }
];

export const projectMap = new Map(projects.map((project) => [project.slug, project]));
