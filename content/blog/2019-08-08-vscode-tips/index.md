---
title: Visual Studio Code Tips
date: "2019-08-08"
description: "VS Code를 애용하고 있으므로 개발환경설정 및 기분전환에 사용하기위해 기록으로 남깁니다."
---

VS Code를 애용하고 있으므로 개발환경설정 및 기분전환에 사용하기위해 기록으로 남깁니다.

<br>

## 터미널 관련

---

### 터미널에서 `code ` 라고 입력하여 VS Code 실행되도록 설정

Command Pallete(Shift + Command + P) 에서 `Shell command: Install 'code' command in PATH` 선택하여 설치

```
$ code .
```

<br>

## 커스터마이징

---

### 테마 변경

```
Command + K  Command + T
```

현재 쓰고 있는 Theme

- Material Icon Theme

<br>

## 단축키

---

### 터미널 열기

```
Shift + Control + `
```

- 개인적으로 손가락이 너무 힘들다.. 근데 굉장히 자주 쓰게된다...

<br>

### 사이드바 토글

```
command + b
```

<br>

### Zen mode(전체화면)

```
Command + k z
```

- ESC를 두 번 누르면 나가집니다.

<br>

### 현재 탭 복사하여 하나 또 열기

```
Command + \
```

<br>

### 탭 스위칭

```
Command + 1, Command + 2 ...
```

<br>

### Extensions 열기

```
Shift + Command + X
```

<br>

## Editing

---

### Multi cursor selection (여러 위치 선택)

```
Option + Click
```

<br>

### 커서가 위치한 단어와 동일한 모든 단어 선택

```
Shift + Command + l
```

<br>

### 현재 위치에 선택한 단어와 동일한 단어 하나씩 추가

```
Command + d
```

<br>

### Column selection

```
Shift + Option + 마우스 드래그
```

<br>

<br>

## 좋아하는 VS Code extension

---

### gitLens

가장 최근에 알게된 녀석인데요. 진짜 강력합니다.

커서가 가르키는 코드가 언제, 누가 바꾸었는지 보여주는 마법구슬입니다. 강력추천!!

<br>

### auto close tag

VS Code 1.16부터는 빌트인기능으로 들어갔지만, Vue나 TypeScript등을 사용할 때에는 여전히 유용합니다.

<br>

### auto rename tag

2019.09.16 코멘트

굉장히 유용했지만.. 개발자가 더 이상 프로젝트를 관리하고 있지 않습니다..

[깃허브 레포지토리](https://github.com/formulahendry/vscode-auto-rename-tag/issues) 를 보면.. issue가 17페이지나 쌓여있습니다 ;\_;

<br>

### live server

라이브서버는 사랑입니다.

프로젝트 html파일에서 우클릭 후 live server버튼만 눌러주면 live reload 페이지를 띄워줍니다.

<br>

### Path Intellisense

자동으로 파일 디렉터리를 자동완성시켜주는 플러그인입니다.

<br>

### Bracket Pair colorizer V2

괄호의 짝을 맞추어 색을 입혀주는 플러그인입니다.

<br>

### Easy less

LESS파일을 자동으로 컴파일하고 CSS파일을 생성해줍니다.

엄청 편리하지만.... less파일을 저장하면 무조건 css파일이 generate되어버리기 때문에 css파일을 저장하지않는 프로젝트에서는 조금 귀찮아집니다 -\_-;

<br>

### indent-rainbow

indentation을 보기쉽게 바꿔주는 플러그인입니다.

<br>

### Rainbow CSV

CSV파일을 작업하는 일이 종종있는데, CSV파일의 가독성을 높여줍니다.

CSV Lint기능까지 있습니다.

---

## settings.json

나를 그렇게도 괴롭히던...

파일을 열면 기존에 열어놨던 파일을 덮어씌워버리면서 새롭게 열리는 것을 방지

```
"workbench.editor.enablePreview": false
```
