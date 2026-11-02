# How we work with branches

This is the same in every Figbloom repo. **You don't need Mike to review your everyday work.** You merge it into your
own dev branch yourself. Mike only reviews when your work goes into `dev-staging` or `main`.

```
feature/trip-map ──PR──┐
fix/login-timeout ─PR──┼──▶ dev-<you> ──PR──▶ dev-staging ──PR──▶ main
fix/typo ──────────PR──┘
     you merge these yourself,          Mike approves      Mike approves
     no approval needed
```

| Branch | What it is | Who approves the PR into it |
|---|---|---|
| `feature/...`, `fix/...` | your work in progress, one per piece of work | nothing to approve, you push to it directly |
| `dev-<you>` | your branch in that repo | nobody, you merge it yourself |
| `dev-staging` | everyone's finished work, tested together | Mike |
| `main` | what's live | Mike |

Repos that also have `dev-stable`, `development` or `production` treat them like `dev-staging`: Mike approves.

## Your branches

| Repo | Dev branches |
|---|---|
| CRM | `dev-given` |
| fleet_management_system | `dev-francis` |
| SmartCart | `dev-joe` |
| School_Management_System | `dev-joe`, `dev-essy` |
| PropertyManagement | `dev-staging-joe`, `dev-staging-fid` |

Mike has `dev-mike` in every repo. If you need a branch in a repo that isn't listed, ask Mike once and he'll set it
up.

## Rules GitHub enforces

- **No force pushes on any branch, for anyone, admins included.** `git push --force` and `--force-with-lease` are
  rejected.
- **No direct pushes to your dev branch, `dev-staging` or `main`.** Everything lands through a pull request, even on
  your own branch. You still merge your own branch's PRs yourself, with no approval.
- `main`, `dev-staging` and the dev branches can't be deleted.
- A PR into `main` or `dev-staging` can't merge until Mike approves it. Anything pushed after he approves needs his
  approval again.

**Why:** in September and October 2026, malware on contributors' computers pushed straight to branches and
force-pushed rewritten ones, in nearly every org repo. When every change has to go through a pull request, nothing can
be slipped in silently.

## One-time setup

```bash
winget install --id GitHub.cli   # or your OS's equivalent
gh auth login
```

## Everyday work (example: Given on `dev-given`)

```bash
git checkout dev-given
git pull                                   # 1. start from the latest of your branch
git checkout -b fix/lead-search-empty      # 2. new branch for this piece of work (feature/... or fix/...)
git commit -am "fix empty lead search"     # 3. commit here, as many times as you like
git push -u origin fix/lead-search-empty   # 4. push THIS branch (allowed, it isn't protected)

gh pr create --base dev-given --title "Fix empty lead search" --body "..."   # 5. PR into YOUR branch
gh pr merge --auto --squash                # 6. merges by itself once CI passes, no approval needed

git checkout dev-given && git pull         # 7. sync back up
git branch -d fix/lead-search-empty        #    delete your local copy (GitHub deletes its copy on merge)
```

You don't need a new branch per commit, only per piece of work. Keep committing to the same `fix/...` branch until
it's ready, then start a fresh one for the next thing.

**Don't ask Mike to review these.** Small fixes, typos and experiments all stay on your own branch.

### Bring in everyone else's approved work

Every few days, and always before you open a PR to `dev-staging`:

```bash
gh pr create --base dev-given --head dev-staging --title "Bring dev-staging into dev-given" --body ""
gh pr merge --auto --merge
```

If GitHub says there are conflicts, make a `fix/...` branch from `dev-given`, run `git pull origin dev-staging` on it,
fix the conflicts, then commit, push and PR it into `dev-given` as usual.

## When your work is ready to ship

Open **one PR from your dev branch into `dev-staging`**:

```bash
gh pr create --base dev-staging --head dev-given --title "CRM: lead search fixes and import" --body "..."
```

- **Put many changes in one PR**, not one per fix. In the description, list what changed and how you tested it, plus
  screenshots for anything on screen.
- Then tell Mike the PR link. That's the only time he needs to hear from you about a PR.
- If he asks for changes, fix them on a `fix/...` branch and merge that into your dev branch as usual. The open PR
  updates by itself, and Mike approves again.
- Only Mike moves `dev-staging` into `main`.

## Common problems

**"Changes must be made through a pull request"**: you pushed straight to `dev-given` (or `dev-staging`/`main`). Make
a `fix/...` branch from where you are (`git checkout -b fix/whatever`), push that, and open a PR.

**"No commits between dev-given and fix/..."**: you committed on `dev-given` first and made the topic branch
afterwards, so the two are the same. Always create the `fix/...` branch **first**, then commit on it. If it already
happened: `git checkout -b fix/whatever`, push it, open the PR, then on `dev-given` run `git reset --hard origin/dev-given`
so your local copy matches GitHub again. That only touches your computer, and your work is safe on the `fix/...` branch.

**Push rejected with "non-fast-forward" or "fetch first"**: someone (or you, from another computer) pushed to that
branch before you. Run `git pull`, fix any conflicts, commit, and push again. Never force it.

## Staying safe

- Never commit `.env` files, passwords or API keys. Use `.env.example` with empty values.
- Don't add npm or pip packages without a reason. Pick versions that have been out for at least two weeks.
- If you see any of these, **stop, don't run the project, and tell Mike**: a config file with a very long run of
  spaces ending in code like `global['!']=...`, a `.vscode/tasks.json` you didn't add, font files like
  `fa-solid-*.woff2` appearing on their own, or `.env` disappearing from `.gitignore`.

## When to message Mike

- When you've opened a PR into `dev-staging` or `main`.
- When you're stuck, or something above doesn't work.

Not for PRs into your own dev branch. Merge those yourself.
