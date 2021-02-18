---
title: 자바스크립트 자료구조
date: "2020-05-09"
description: "모르는 것을 자꾸 피하다보면 나중엔 더 부끄러울 것 같습니다."
---

<br>

모르는 것을 자꾸 피하다보면 나중엔 더 부끄러울 것 같습니다.

꾸준히 채워지는 포스트가 될 것 같습니다.

<br>

### Stack

**LIFO(Last In, First Out)** 구조입니다.

- 삽입: push
- 삭제: pop
- 읽기: peek

```typescript
const stack = []

stack.push("a") //push
stack.push("b") //push

stack[stack.length - 1] //peek 'b'
stack.pop() // 'b'
```

<br>

### Queue

**FIFO(First In, First Out)** 구조입니다.

- enqueue
- dequeue

```typescript
const queue = []

queue.push("a") //enqueue
queue.push("b") //enqueue

queue.shift() //dequeue 'a'
queue.shift() //dequeue 'b'
```

<br>

### Linked List

배열과 자주 비교되곤 합니다.

- (배열에 비해)데이터의 추가/삽입 및 삭제가 용이합니다.

  - 배열은 데이터를 중간에 삽입하면, 다른 데이터들의 위치를 모두 바꿔줘야하기때문에 O(n)의 시간이 소요됩니다.
  - 반면 링크드리스트는 데이터를 중간에 삽입하면 링크의 연결만 조정해주면 되기때문에 O(1)의 시간이 소요됩니다.

- (배열에 비해)데이터의 검색 속도가 떨어집니다.

  - 배열에서 인덱스만 알면 값을 읽는데 O(1)이 소요되는 반면,

    링크드리스트는 각 노드가 다음 노드의 주소만을 가지고 있기 때문에 최악의 경우 모든 요소를 순회하는 O(n)이 소요됩니다.

```typescript
const Node = value => {
  return { value, next: null }
}

const list = {
  head: null,
  tail: null,
  add(value) {
    const newNode = Node(value)

    if (list.head) {
      const tailStore = list.tail
      list.tail = newNode
      tailStore.next = list.tail
    } else {
      list.head = newNode
      list.tail = newNode
    }
  },
  removeHead() {
    if (list.head) {
      const headStore = list.head.value
      list.head = list.head.next

      if (list.head === null) {
        list.tail = null
      }

      return `${headStore} is removed`
    }

    return "list is empty"
  },
  contains(value) {
    let head = list.head
    while (head) {
      if (head.value === value) {
        return true
      }
      head = head.next
    }

    return false
  },
}
```

<br>

### Map

key-value로 이루어진 자료구조입니다. O(1)의 시간이 소요됩니다.

`Object` 와 유사하지만, 중요한 차이점이 있습니다. 몇가지만 적어보면..

`Object` 는 프로토타입을 가지고 있으므로, 의도치않은 `key` 충돌이 있을 수 있습니다.

하지만 `map` 은 명시적으로 제공된 `key` 만을 가지고 있습니다.

또한, `Object` 의 `key` 는 삽입 순서를 보장하지않지만, `map` 은 삽입순으로 순회합니다.

또한 `map` 의 `key` 값으론, 정말 아무거나 다~ 사용할 수 있습니다.

<br>

### Set

`map` 은 `key`를 넣으면 `value`를 줍니다.

`set` 은 값만 모여있고, 중복값을 허용하지 않습니다.

```typescript
const foo = new Set([1, 2, 3, 4, 3, 2, 4, 5])

console.log(foo) //Set(5) {1, 2, 3, 4, 5}
```

<br>

### WeakMap, WeakSet?

`map` 과 `set` 을 공부하다보면 `WeakMap` 과 `WeakSet` 과 마주치게 됩니다.

[WeakMap - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) 을 살펴보면, `map` 과는 달리 `object` 만 `key` 가 될 수 있다고 합니다.

설명을 읽다보니... 이걸 내가 언제 써야하는걸까? 쓸 날이 오긴 할까?라는 의문이 들었습니다.

자바스크립트는 `가비지 컬렉터` 가 있기 때문에 프로그래머가 메모리 관리를 해줄 필요가 없는 언어입니다.

그로인해 더 비즈니스 로직에 집중한 코드를 작성할 수 있는 장점이 있습니다.

하지만 이 `WeakMap` 과 `WeakSet` 은 가비지 컬렉터를 신경쓰면서 코드를 작성해야하는 자료구조입니다.

내공이 너무 부족해서.. 너무나 멀게만 느껴지는 자료구조입니다.
