# GIT Tips

### Reject changes in current directory

```bash
git checkout -- .
```

### Reseting branch

```bash
git reset --hard origin/master
git reset --hard any_branch
git reset --hard hash
```

### Revert file to version from other branch

```bash
git checkout origin/master [filename]
```

### Revert to specific commit

```bash
git reset --hard commit-hash
git stash -u
git push -f origin/current-branch-name
```

### Setup username and email

```bash
# Regular (--global, --local)
git config --global user.name "FIRST_NAME LAST_NAME"
git config --global user.email "MY_NAME@example.com"
```
