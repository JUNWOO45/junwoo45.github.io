---
title: git reflog로 hard-reset되돌리기
date: "2019-05-27"
description: "hard reset도 되돌릴 수 있다!"
---

HEAD

- 마지막 커밋의 참조
- 가장 최신 커밋
- 혹은 새로운 커밋의 부모

git reset

- HEAD의 상태를 변경시키는 명령
- 옵션에 따라 HEAD, 스테이지, 작업 디렉토리의 내용이 달라짐
- 보통 강제로 특정 커밋으로 돌아가고 싶을 때 많이 사용함.

git log를 한줄로 볼때 다음과 같은 명령어를 사용합니다.

```
$ git log --oneline
```

커밋 하나 전으로 돌아가기는 다음과 같습니다.

```
$ git reset --hard HEAD~
```

<br>

### 다음과같이 상황을 가정해봅니다.

`7e5b465`커밋을 하고, `b6596fc`커밋은 한 뒤 `3477f6`커밋을 했다고 가정합니다.

```
3477df6 (HEAD -> master) commit 2
b6596fc commit 1
7e5b465 (origin/master, origin/HEAD) Initial commit
```

그런데 실수로 3477df6을 $ git reset --hard HEAD로 지워버려서,
현재 HEAD는 b6596fc (HEAD -> master)가 되어버렸습니다.

<br>

이럴때, `git reflog` 명령어로 모든 커밋로그를 확인한 후에 `git reset --hard` 명령어를 사용하여 되돌아 갈 수 있습니다.

```
$ git reflog // 커밋로그가 모두 나온다.
$ git reset --hard 3477df6
```

<br>

하지만 모든 커밋들의 hash를 기억하고 있는 사람이 있을 수 없으니........
그 해결책은 바로 ..!

`git reflog` 란?

- 참조(reference)의 기록(log)를 보여주는 명령
- hard reset을 되돌릴 수 있다!

---

### Summary

- git의 커밋은 "세이브포인트"랑 같다.
- git reflog명령을 이용하면 hard-reset도 되돌릴 수 있다.
- 거의 모든 상황에서 커밋은 복구될 수 있다.
