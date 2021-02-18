---
title: git 계정설정
date: "2019-01-14"
description: "git 계정설정을 알아봅니다."
---

노트북을 바꾸고 난 다음에 github contribution이 카운팅이 안되고 있다는걸 깨달았는데요.

~~(잔디가 심어지지않으면 버틸 수가 엄써..)~~

~~탈모랑은 연관이 없습니다 ㅡㅡ~~

---

github의 contribution은 github계정과 commit한 계정의 정보가 동일해야 카운트되는 듯합니다.

```
$ git config —global [user.name](http://user.name) [USER NAME]

$ git config —global [user.email](http://user.email) [USER EMAIL]
```

단순히 이메일 주소만 동일해서는 안되고, user.name값 또한 동일해야 카운팅이 되서 잠시 헤맸습니다.

—global 옵션을 빼면 프로젝트별로 다른 이메일을 사용할 수도 있습니다.

```
$ git config --local user.name "해당 프로젝트에만 적용할 github 이름"
$ git config --local user.email "해당 프로젝트에만 적용할 github 이메일"
```

이런식으로 `--local` 명령어로 프로젝트마다 다른 계정설정을 할 수도 있습니다.

git config —list 명령어로 계정 설정을 확인할 수 있습니다.
