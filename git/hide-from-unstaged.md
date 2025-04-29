# Hide file from unstaged changes

The `–assume-unchanged` option tells Git to temporarily assume that a tracked file has not been modified in the working tree. Therefore, changes made won’t be reflected in the staging area:

```bash
git update-index --assume-unchanged file.txt
```

Although mainly used for that purpose, the assume-unchanged option was never meant to ignore changes to tracked files. It’s designed for cases where it’s expensive to check whether a group of files have been modified.

How to revert it

```bash
git update-index --no-assume-unchanged file.txt
```

The `–skip-worktree` option ignores uncommitted changes in a file that is already tracked. Regardless of any modification made in the working tree, git will always use the file content and attributes from the staging area. **This is useful when we want to add local changes to a file without pushing them to the upstream**:

```bash
# apply
git update-index --skip-worktree file.txt
# revert
git update-index --no-skip-worktree file.txt
```
