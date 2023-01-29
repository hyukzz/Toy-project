const redux = require("redux");

// 리듀서
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};
// input: Old State + Dispatched Action
// output: New State Object

// 저장소
const store = redux.createStore(counterReducer);
// 어떤 리듀서가 그 저장소를 변경하는지 저장소가 알아야 한다.
// 저장소랑 작업하는 것은 리듀서이다.

// console.log(store.getState());

// 구독자
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
  // createStore()로 생성된 저장소에서 사용할 수 있는 메서드이다.
};

store.subscribe(counterSubscriber);
// 리덕스가 실행하기 때문에 () 사용하지 않는다/

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
// 액션을 발송한다.
// 식별자 역할을 하는 타입 프로퍼티를 가진 자바스크립트 객체이다.

/*
리덕스

리듀서 === store data를 변경

리듀서 함수
입력을 변환 => 새로운 출력, 결과

액션
컴포넌트가 액션을 발송(디스패치)
(컴포넌트가 어떤 액션을 트리거)

정리
=> 1. 액션을 발송(디스패치)
=> 2. 리듀서로 전달 
=> 3. 리듀서는 액션이 원하는 것을 실행
=> 4. 리듀서는 새로운 상태를 뱉음 
=> 5. 데이터 저장소의 기존 상태를 대체
=> 6. 데이터 저장소를 구독하는 컴포넌트가 알림을 받고 업데이트 됨
*/
