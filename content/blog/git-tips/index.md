---
title: Handy git tips
date: "2021-02-19T22:07:54.527Z"
description: I've learned some handy Git tricks. Rebasing, amending and resetting to the next level.
---

I like the deep-diving and condensed courses of [Egghead](https://egghead.io). I thought I was quite familiar with git, but I found some really handy tips in [Productive git for developers](https://egghead.io/courses/productive-git-for-developers).

## `git add`

Adding files can be space separated:

```bash
git add fileA fileB
```

## Merging main/develop into feature branch

- if other developers work on the same branch: `git merge main` (creates an extra merge commit)
- if it's your own personal branch: `git rebase main` (commit hashes are rewritten)
  - but... if that branch already exists remotely you need to force-push your changes, so this can only be done when you're sure you are _the only one working on this branch_. Force pushing with extra checks for safety can be done with: `git push --force-with-lease`.

## Squashing commits before pushing with git rebase interactive

Copy the pointer of the commit after which you want to start rebasing:

```bash
git rebase -i 2e57685
```

## Squash commits with `fixup`

```bash
git add .
git commit --fixup 3e4556
# or
git commit --fixup :/update
# (if update was part of the commit message where we started fixup)
```

## Amend

I always did `git commit --amend -m "New message"`.
But just `git commit --amend` happens to open your text editor to change the commit message, which is handy if you just want to fix a typo in a long commit message.

If you have staged files when running `amend` to can be merged in the previous commit as well.

## Reset

`git reset HEAD~` removes the last commit and puts the files changed of that last commit in the staging area.

If commits already have been pushed, use `revert` instead of `reset` as this doesn't modify the git history but just adds an extra commit to undo the changes.

## Stash

I've written about [git stash](https://www.tomgreuter.nl/tech/2013/11/looking-into-git-stash/) before. But I forgot about this one:

`git stash pop` removes the entry from stash, while `git stash apply` keeps the stash entry.

```

```
