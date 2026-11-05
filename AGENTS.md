# Portfolio development workflow

Explicit user instructions take precedence. Read README.md and CLAUDE.md for site conventions. Preserve the existing design, responsive layout, published work IDs, images and unrelated content. Keep Japanese and English consistent.

## Branches and delivery

- Inspect `git status`, local branches and remote state first. Preserve user changes, untracked files and local commits; never reset or overwrite them blindly.
- Fetch the latest main from origin before each development request. Normally create a dedicated branch from `origin/main` in the existing checkout. Cloud tasks are isolated; do not create a worktree unless the user requests one.
- Use one branch and PR per request. Check existing PRs before creating one. Follow-up changes may update the same unmerged PR. Inspect dependencies before carrying changes from an earlier branch; do not mix unrelated unmerged work. If main is not a suitable base, explain the dependency and chosen base.
- Implement only the requested changes. Content belongs in data/. After content changes run `node tools/build.mjs`, then review generated HTML and other outputs. Do not hand-edit generated HTML.
- Run relevant syntax checks, `git diff --check`, and meaningful functional checks. For UI changes, verify Japanese and English at desktop and mobile widths, language switching and persistence, affected links and console errors. Record checks that could not run. Do not install or commit unrelated dependencies merely for testing.
- Review the diff, commit the requested work with a descriptive message, and push the task branch. Commit, push and PR creation are standard completion conditions for development requests unless the user says otherwise.
- Create a PR against main, or update the existing PR for the same work. Supply a concise description of the problem, resulting behavior, tests and limitations. Use a body file for multiline gh CLI text. Never duplicate a PR after an ambiguous creation response: query the exact head/base first.
- NEVER push directly to main, automatically merge a PR, or change the live site/deployment settings without explicit user approval. The user reviews and merges on GitHub. Do not force-push without checking remote state and obtaining authorization where needed.

## GitHub failures

- Investigate failures rather than merely reporting them: distinguish proxy/network rejection, GitHub authentication errors, repository/PR permissions, CLI configuration, remote branch state and method-specific errors.
- Native Git over the platform HTTPS proxy and GitHub API authentication are separate capabilities. A successful push does not prove PR permissions. An unset token does not prove Git authentication is missing.
- Inspect managed runtime status and allowed destinations before network diagnosis. Do not dump credentials, token values, authentication headers, process environments or credential files. Never store secrets in Git.
- Check `gh` availability and required read-only Git/API operations. If GraphQL fails, try the equivalent supported REST operation when allowed. Use a standard Codex PR tool if actually available. Never bypass network policy or disable TLS verification.
- Retry after a meaningful diagnosis or configuration change. If blocked externally, complete independent work, report the actual error and precise required action, and resume after it is supplied. Never claim a PR exists until its URL is confirmed.
- AGENTS.md specifies workflow only: it cannot grant network access or GitHub permissions. Those belong to Codex environment settings and GitHub authorization. Environment publication and new-task restoration must be verified separately.

## Completion report

Report in Japanese: changes, files, test results and limitations, commit ID, branch, push result, PR URL (when created), and any concrete blocker or user action. When an artifact attachment tool is available, attach the created or updated PR. Do not claim new-task readiness from tests in only the current environment.
