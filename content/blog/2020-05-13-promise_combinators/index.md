---
title: Promise Combinators 정리
date: "2020-05-13"
description: "ES2020에 Promise.allSettled이 소개되었습니다."
---

ES2020에 `Promise.allSettled` 가 소개되었습니다.

여기에 더해 아직 [TC39 Proposal Stage 3단계](https://github.com/tc39/proposals){:target="\_blank"}인 `Promise.any` 도 같이 공부하며, 정리해보려고 합니다.

<br>

## 프로미스 기본 개념

<br>

### 프로미스 상태

- 대기(pending): 이행(fulfilled)되거나 거부(rejected)되지 않은 초기 상태를 뜻합니다.

- 이행(fulfilled): 성공적으로 완료된 상태입니다.

- 거부(rejected): 실패한 상태입니다.

- 처리(settled): 대기중이지 않으며 이행되거나 거부되었을때 처리되었다고 말합니다.

  ```
  settled === !pending && (fulfilled || rejected)
  ```

<br>

### Promise 프로토타입

3가지 메서드가 있습니다.

```typescript
fetch("https://api.github.com/users")
  .then(data => console.log("data : ", data))
  .catch(error => console.error("error : ", error))
  .finally(() => console.log("Finally..!"))
```

<br>

---

## Promise Combinators

<br>

### 4가지 Combinators

ES2015에서 소개된 `Promise.all` 과 `Promise.race` ,

이번에 ES2020에서 소개된 `Promise.allSettled` ,

그리고 마지막으로 곧 새로운 기능으로 합류될 예정인 `Promise.any` 가 있습니다.

<br>

#### Promise.all

모든 프로미스가 이행(fullfilled)되거나, 하나라도 거부(rejected)되었을 때 프로미스 객체를 반환합니다.

```typescript
const promises = [
  fetch("/api/a").then(() => "a"),
  fetch("/api/b").then(() => "b"),
  fetch("/api/c").then(() => "c"),
]

try {
  const apiResponses = await Promise.all(promises)
  // 모든 프로미스가 fullfilled되면..
  renderNewData(apiResponses)
} catch (error) {
  displayError(error.reason)
}
```

<br>

#### Promise.race

가장 먼저 처리(settled)된 프로미스를 잡아내고 싶을 때 사용합니다.

메소드이름처럼 정말 경주를 하는 것 같습니다.

예시1)

```typescript
const promises = [performVeryHeavyLogic(), rejectByForceAfterTimeoutMs(5000)]

try {
  const result = await Promise.race(promises)
  // performVeryHeavyLogic()이 완료되면,
  renderResult()
} catch (error) {
  //rejectByForceAfterTimeoutMs()로 인해 5s 이상 지나거나 에러가 발생하면,
  renderError(error)
}
```

예시2)

```typescript
Promise.race([
  fetch("https://api.github.com/users/schacon").then(data => data.json()),
  fetch("https://api.github.com/users/pjhyett").then(data => data.json()),
])
  .then(data => console.log(`${data.name}가 먼저 도착했어요!`))
  .catch(error => console.error("error : ", error))
```

<br>

#### Promise.allSettled

모든 프로미스가 처리(settled)된 경우, 즉 모든 프로미스가 이행(fullfilled)되거나 거부(rejected)되었을 때 프로미스 객체를 반환합니다.

```typescript
const promises = [
  fetch("/api/a").then(() => "a"),
  fetch("/api/b").then(() => "b"),
  fetch("/api/c").then(() => "c"),
]
// 일부는 이행(fullfilled)되고 일부는 거부(rejected)되었더라도

await Promise.allSettled(promises)
// allSettled는 오직 처리(settled)되었는지만 확인합니다.
removeLoadingIndicator()
```

<br>

#### Promise.any

`Promise.any` 는 [TC39 Candidate stage (Stage 3)](https://github.com/tc39/proposal-promise-any){:target="\_blank"} 단계의 메소드입니다.

여러 프로미스 중, 단 하나의 프로미스가 이행(fullfilled)되면 프로미스 객체를 반환합니다.

`Promise.race` 는 이행(fullfilled)이나 거부(rejected)를 가리지않지만, `Promise.any` 는 이행(fullfilled)만을 취급합니다.

```typescript
const promises = [
  fetch("/api/a").then(() => "a"),
  fetch("/api/b").then(() => "b"),
  fetch("/api/c").then(() => "c"),
]

try {
  const first = await Promise.any(promises)
  // 가장 먼저 이행(fullfilled)된 프로미스
  console.log(first) // ex: 'c'
} catch (error) {
  // 모든 프로미스들이 거부(rejected)되어야지만,
  console.error(error)
}
```

<br>

### Reference

- [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise){:target="\_blank"}

- [https://pawelgrzybek.com/promise-combinators-explained/](https://pawelgrzybek.com/promise-combinators-explained/){:target="\_blank"}
- [https://v8.dev/features/promise-combinators](https://v8.dev/features/promise-combinators){:target="\_blank"}
