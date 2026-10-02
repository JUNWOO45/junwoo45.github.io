# 준우의 기록

Astro 기반 Markdown 블로그. 주소: https://junwoo45.github.io
예전 Jekyll/Gatsby 글은 이관하지 않았습니다.

## 실행

Node.js 22.12 이상 (권장: Node 22 LTS).

```sh
npm ci
npm run dev
```

로컬 주소: http://localhost:4321

```sh
npm run build
npm run preview
```

빌드에서 타입 검사와 Markdown 메타데이터 검증을 함께 수행합니다.

## 글 작성

```sh
npm run new:post -- my-first-post
```

`src/content/posts/my-first-post.md`에 초안을 만듭니다. 또는 `.md` 파일을 직접 추가하세요.

```md
---
title: "글 제목"
description: "글을 한 문장으로 소개합니다."
date: 2026-10-02
tags: [개발, 기록]
draft: true
---

본문을 Markdown으로 작성합니다.
```

- `title`, `description`, `date`는 필수입니다.
- `draft: true` 글은 로컬·배포 모두 글 목록, 글 페이지, RSS, 사이트맵에서 제외됩니다.
- 글을 확인하려면 로컬에서 `draft: false`로 변경하세요. 공개 준비가 끝났을 때 커밋하세요.
- `draft`를 생략하면 공개됩니다. 미래 날짜는 자동 예약 기능이 아니므로 초안으로 유지하세요.
- `updated: 2026-10-03`을 추가하면 수정 날짜가 표시됩니다.
- 파일 이름이 주소가 됩니다: `my-first-post.md` → `/posts/my-first-post/`.
- 글을 공개한 뒤에는 링크 유지를 위해 파일 이름을 바꾸지 마세요.
- 이미지: `public/images/example.png` → `![이미지 설명](/images/example.png)`.
- `##`, `###` 제목은 자동으로 글 목차에 표시됩니다.

## 첫 배포 설정 (한 번만)

1. 이 프로젝트를 `JUNWOO45/junwoo45.github.io` 저장소의 `master` 브랜치에 반영합니다.
2. 저장소 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 선택합니다.
3. Actions에서 **Deploy blog to GitHub Pages**를 확인합니다. 필요하면 **Run workflow**로 수동 실행하세요.
4. 완료 후 https://junwoo45.github.io 에서 확인합니다.

이후 `master`에 Markdown을 푸시하면 자동 배포됩니다. PR에서는 빌드 검사만 실행하고 공개하지 않습니다.
별도 배포 토큰이나 서버는 필요 없습니다. Actions가 실패하면 기존 배포가 유지됩니다.
기본 브랜치를 변경한다면 두 워크플로의 `branches`도 함께 수정하세요.

## 구성

- `src/content/posts/`: 글
- `src/pages/index.astro`: 홈
- `src/pages/about.astro`: 소개
- `src/layouts/Base.astro`: 사이트 제목, 메뉴, 메타데이터
- `src/styles/global.css`: 디자인
- `.github/workflows/deploy.yml`: 자동 배포

RSS `/rss.xml`, 사이트맵 `/sitemap-index.xml`, 다크 모드, 모바일 레이아웃, 코드 강조를 지원합니다.
