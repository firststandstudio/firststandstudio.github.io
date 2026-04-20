/* Date: 4/20/2026 | Developer: Yahia Saad | License: First Stand Studio. All rights reserved. */
import { formatRelativeTime } from "./date";
import type { DevelopmentItem, GithubRepoConfig } from "../data/types";
import type { SupportedLocale } from "../i18n/config";

interface GithubCommitApiRecord {
  sha: string;
  html_url: string;
  commit: {
    message: string;
    committer: {
      date: string;
    };
  };
}

const GITHUB_API = "https://api.github.com/repos";

function normalizeFallback(items: DevelopmentItem[], limit: number, locale: SupportedLocale) {
  return items.slice(0, limit).map((item) => ({
    ...item,
    relativeTime: formatRelativeTime(item.committedAt, locale)
  }));
}

export async function getRecentCommits(repo: GithubRepoConfig, limit = 3, locale: SupportedLocale = "en") {
  if (!repo.owner || !repo.repo) {
    return normalizeFallback(repo.fallback, limit, locale);
  }

  const token = import.meta.env.GITHUB_TOKEN;
  const endpoint = `${GITHUB_API}/${repo.owner}/${repo.repo}/commits?per_page=${limit}${
    repo.branch ? `&sha=${repo.branch}` : ""
  }`;

  try {
    const response = await fetch(endpoint, {
      headers: {
        Accept: "application/vnd.github+json",
        ...(token ? { Authorization: `Bearer ${token}` } : {})
      }
    });

    if (!response.ok) {
      throw new Error(`GitHub request failed with status ${response.status}`);
    }

    const data = (await response.json()) as GithubCommitApiRecord[];

    return data.map((commit) => ({
      hash: commit.sha.slice(0, 7),
      href: commit.html_url,
      message: commit.commit.message.split("\n")[0],
      committedAt: commit.commit.committer.date,
      relativeTime: formatRelativeTime(commit.commit.committer.date, locale)
    }));
  } catch {
    return normalizeFallback(repo.fallback, limit, locale);
  }
}
