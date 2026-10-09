# Contributing to Movec Landing Page

Thank you for contributing to the Movec Landing Page project! This document provides guidelines and best practices for contributing.

---

## Branch protection: no direct pushes, anywhere

No one can `git push` directly to *any* branch on this repo anymore — not `main`, and not your own personal branch (`dev/cozy`, `dev/frank`, etc.) either. Everything lands via a pull request.

### Why

A supply-chain incident (September 2026) got in by pushing straight to branches with write access — including personal branches, not just `main`. An obfuscated payload was injected into `eslint.config.js` (auto-executes on `dev`/`build`/`lint`), and `.gitignore` was weakened to stop excluding `.env`. It happened twice, hitting nearly every branch across the org both times.

If personal branches stayed pushable, that's still an open door for the same thing to happen again and quietly work its way into `main` later via a normal PR. Requiring a PR for every branch — even a self-merged, zero-approval one on your own branch — means any write has to go through GitHub's merge API, which a stolen token can't silently bypass the way a raw push could.

Force-push and branch deletion are blocked permanently on every branch, for everyone, admins included. That's not getting relaxed later.

### One-time setup

```bash
winget install --id GitHub.cli   # or your OS's equivalent
gh auth login
```

### Walkthrough: Cozy working on `dev/cozy`

Cozy **cannot** do this anymore — it will be rejected, even though it's their own branch:
```bash
git checkout dev/cozy
git commit -am "some change"
git push                          # ❌ rejected: "Changes must be made through a pull request"
```

Instead, they work on a throwaway topic branch, and PR *that* into `dev/cozy`:
```bash
git checkout dev/cozy
git pull
git checkout -b cozy-topic             # 1. new branch, off dev/cozy
git commit -am "some change"           # 2. commit here — can be multiple commits over time,
git commit -am "another change"        #    keep working on this branch as long as you're mid-task
git push -u origin cozy-topic          # 3. push THIS branch — allowed, it has no protection rule

gh pr create --base dev/cozy --title "..." --body "..."   # 4. PR: cozy-topic → dev/cozy
gh pr merge --auto --squash                                # 5. merges automatically, no approval needed

git checkout dev/cozy && git pull      # 6. sync back up
git branch -d cozy-topic                #    delete your LOCAL copy of the topic branch
# no need to delete it on GitHub -- it's auto-deleted the moment the PR merges
```

You don't need a new topic branch per commit — just per chunk of work you're ready to land on your branch.

### Landing something on main

Same shape, but `main` needs 1 approval before it merges:

```bash
git checkout -b fix/whatever
git push -u origin fix/whatever
gh pr create --base main --title "..." --body "..."
gh pr merge --auto --squash
```

It sits until someone runs `gh pr review <number> --approve` (or approves from the GitHub web UI), then merges automatically.

---

## Branch Naming Conventions

Use descriptive branch names that follow this pattern:

```
<type>/<short-description>
```

### Types:
- `feature/` - New features
- `fix/` - Bug fixes
- `refactor/` - Code refactoring
- `docs/` - Documentation updates
- `test/` - Testing updates
- `chore/` - Maintenance tasks
- `dev/` - Developer-specific branches

### Examples:
- `feature/newsletter-signup`
- `fix/navigation-dropdown`
- `refactor/contact-form`
- `docs/update-readme`
- `dev/cozy` - Personal development branch

---

## Code Style Guidelines

### TypeScript
- Use TypeScript for all new components
- Define proper interfaces and types
- Avoid `any` type when possible
- Use descriptive variable names

### React Components
- Use functional components with hooks
- One component per file
- Use proper prop typing
- Implement proper error boundaries

### CSS/Styling
- Use Tailwind CSS utility classes
- Follow existing color scheme (orange/green accent)
- Maintain dark mode compatibility
- Use responsive classes (sm:, md:, lg:)

### File Organization
```
src/
├── components/       # Reusable components
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── lib/             # Utility libraries
├── context/         # React context providers
└── config/          # Configuration files
```

---

## Commit Message Format

Follow the conventional commits specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types:
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Code style (formatting, no code change)
- `refactor` - Code refactoring
- `test` - Adding tests
- `chore` - Maintenance

### Examples:
```
feat(contact): add form validation

- Added real-time validation
- Added error messages
- Added loading spinner

Closes #123
```

```
fix(navbar): resolve dropdown hover issue

Fixed dropdown closing when moving mouse from trigger to menu.
Added 200ms grace period using timeout.

Closes #456
```

---

## Pull Request Process

### Before Creating a PR:

1. **Update from main**
   ```bash
   git checkout main
   git pull origin main
   git checkout your-branch
   git merge main
   ```

2. **Run tests and build**
   ```bash
   npm run build
   npm run lint
   ```

3. **Test your changes**
   - Test on multiple browsers
   - Test responsive design
   - Test dark mode
   - Check console for errors

### Creating a PR:

1. **Use the PR template** (auto-populated)
2. **Write a clear title**
   - Good: "feat: add newsletter subscription component"
   - Bad: "updates"

3. **Fill out the description**
   - What changed
   - Why it changed
   - How to test
   - Screenshots (if UI changes)

4. **Link related issues**
   - Use "Closes #123" to auto-close issues

5. **Request review**
   - Tag appropriate reviewers
   - Wait for approval before merging

### PR Checklist:
- [ ] Code follows style guidelines
- [ ] Tested on Chrome, Firefox, Safari
- [ ] Tested on mobile devices
- [ ] No console errors or warnings
- [ ] Documentation updated (if needed)
- [ ] Build succeeds
- [ ] Lint passes
- [ ] Dark mode works
- [ ] Responsive design maintained
- [ ] Accessibility maintained

---

## Testing Guidelines

### Manual Testing:
- Test all interactive elements
- Test form validation
- Test navigation
- Test on multiple screen sizes
- Test dark mode toggle

### Browser Testing:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Mobile Testing:
- iOS Safari
- Android Chrome

---

## Development Workflow

### 1. Pick an Issue
- Assign yourself to the issue
- Comment that you're working on it

### 2. Create a Branch
```bash
git checkout main
git pull origin main
git checkout -b feature/your-feature
```

### 3. Make Changes
- Write code
- Test locally
- Commit frequently with clear messages

### 4. Push and Create PR
```bash
git push origin feature/your-feature
```
- Create PR on GitHub
- Fill out template
- Request review

### 5. Address Review Comments
- Make requested changes
- Push updates
- Re-request review

### 6. Merge
- Squash and merge (preferred)
- Delete branch after merge

---

## Design Guidelines

### Colors:
- Primary: Orange (#f97316)
- Secondary: Green (#22c55e)
- Background (light): #ffffff
- Background (dark): #0f172a
- Text (light): #0f172a
- Text (dark): #ffffff

### Typography:
- Font: Inter
- Headers: Bold, larger sizes
- Body: Regular weight
- Use proper heading hierarchy (h1 > h2 > h3)

### Spacing:
- Use Tailwind spacing scale (4, 6, 8, 12, 16, 24, 32)
- Consistent padding/margin across components

---

## Bug Reports

When reporting bugs, include:

1. **Description** - Clear description of the issue
2. **Steps to Reproduce** - Exact steps to reproduce
3. **Expected Behavior** - What should happen
4. **Actual Behavior** - What actually happens
5. **Screenshots** - Visual evidence
6. **Environment** - Browser, OS, device
7. **Console Errors** - Any error messages

---

## Feature Requests

When requesting features, include:

1. **Problem** - What problem does this solve?
2. **Solution** - Proposed solution
3. **Alternatives** - Other solutions considered
4. **Mockups** - Visual representation (if applicable)
5. **Priority** - How important is this?

---

## Security

- Never commit sensitive data (.env, API keys, passwords)
- Use environment variables for secrets
- Report security issues privately to info@movec.co.ke
- Don't disclose vulnerabilities publicly

---

## Resources

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Vite Documentation](https://vitejs.dev/)

---

## Questions?

- Open a discussion on GitHub
- Contact the team lead
- Email: info@movec.co.ke

---

**Thank you for contributing to Movec!**

### Common mistake: "No commits between X and Y"

If you commit directly to your own branch out of habit (before making the topic branch), then create the topic branch *afterward*, it starts out identical to your branch — there's nothing to diff, so `gh pr create` fails with something like:
```
pull request create failed: GraphQL: No commits between dev/cozy and cozy-topic
```
The fix: create the topic branch **first**, then make your changes and commit **on the topic branch** — never commit directly to your own named branch (`dev/cozy`, `dev/frank`, etc.), even though old habit makes that tempting. If you've already hit this, just make an actual change on the topic branch (edit a file, commit again) before opening the PR.
