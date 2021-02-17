---
title: 원격저장소에 프로젝트등록하기
date: "2019-06-02"
description: "전 이거 정말정말정말 자주 씁니다."
---

기존에는 항상..

1. 레포지토리를 만들고

2. 저장소 주소를 복사하고

3. 프로젝트를 시작하려는 폴더에 가서 $ git clone [복사한 저장소 주소] 입력

   (이는 "**원격 저장소를 복제**"하는 행위입니다.)

4. 뭔가 연동이 됬구나..! 이제 만들어보자!

항상 이런 방법으로 저장소에 프로젝트를 올렸었는데요.

이 방법말고 로컬에 프로젝트를 먼저 만들고 이걸 github에 등록하는 방법을 정리해보려합니다. ~~왜 이제 찾아봤을까?~~

1. 먼저 터미널에서 <mark>$ git init</mark> 을 입력해줍니다.

   이러면 현재 디렉토리에 .git이라는 파일이 생성됩니다.

   git init 명령어는 **"저장소를 생성"**해줍니다.

2. <mark>$ git add</mark>로 스테이징 해주고..

3. <mark>$ git commit</mark>으로 커밋해주면..

   github저장소에 push할 준비는 되었지만.. push해줄 저장소가 존재하지 않습니다!

   이 시점에서 저장소를 만들거나, 이미 만들어져 있어야합니다.

4. 저장소가 만들어졌다면, 저장소 주소를 복사해옵니다.

5. <mark>$ git remote add origin [복사한 저장소 주소]</mark> 를 입력해줍니다.

6. 이제 <mark>$ git push origin master</mark> 를 입력하면.. 저장소에 프로젝트가 push됩니다!

---

## troubleshooting!

### - git pull 이후 non-fast-forward 문제 해결 방법

자주 마주치는 문제인데요.

```
$ git init
$ git remote add origin <repository url>
```

이후에

```
$ git pull
```

을 진행하면 이 에러가 발생하는데요

![error image](../img/git_pull1.png)

### 해결

```
git pull origin master --allow-unrelated-histories
```

### 왜 발생할까?

git은 관련이 없는 두 저장소를 병합하는 것을 기본적으로 거부한다고 합니다.

(pull 하려고 한 원격저장소에 readme.md가 있어서 그런걸까..!?)

따라서 두 저장소를 병합하는 것을 허용하도록 옵션을 추가해주었습니다.
