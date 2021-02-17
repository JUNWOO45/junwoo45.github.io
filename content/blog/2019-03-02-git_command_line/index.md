---
title: git 명령어 정리
date: "2019-03-02"
description: "git을 잘 사용하려면 명령어들과 친해져야겠죠."
---

git을 잘 사용하려면 명령어들과 친해져야겠죠.

명령어가 헷갈릴때마다 이 포스팅에 정리된 내용을 확인할 생각인데요.

제 목표는 이 포스팅에 다시 들어오지 않는겁니다.

add + commit

```
$ git commit -am "[message]"
```

branch 생성

```
$ git checkout -b [branch name]
```

branch이름 바꾸기

```
$ git branch -M [change name]
```

branch삭제

```
$ git branch -d [branch name]
```

원격 저장소의 branch 삭제

1.

```
$ git branch -d [branch name]
$ git push origin [branch name]
```

2.

```
$ git push origin --delete [branch name]
```

특정 branch에 push하기

```
$ git push origin [branch name]
```

commit log 확인

```
$ git log
```

<hr>

변경이력이 있는 파일 변경사항 취소

```
$ git checkout -- [file name]
```

바로 직전 commit message 수정

```
$ git commit --amend
```

commit한개 취소

```
$ git reset HEAD^

$ git revert HEAD
```

현재 branch의 변경사항을 커밋없이 저장해두기

```
$ git stash
```

stash로 저장해둔 변경 내역 불러오기

```
$ git stash pop
```

다른 banch의 특정 commit을 가져와서 merge하기

```
$ git cherry-pick [commit hash number]
```

<hr>

원격저장소의 파일만 삭제하고, 로컬저장소의 파일은 그대로 둔다.

```
$ git rm --cached [파일명]
```
