# Vanilla Redux

## practice Vanilla-redux

- state = 0 state의 default Value는 0이다.
- countModifier 즉, reducer는 action을 통해 데이터를 수정가능하다.
- action은 redux에서 함수를 부를 때 쓰는 두 번째 인자이다.
- action은 object이여야 한다. ({type:"EXAMPLE"})
- dispatch를 통해 action을 보낼 수 있다.
  ex) reducer(state= 0{type: "ADD"})

- reducer은 내 데이터를 수정할 수 있는 함수이다
- 숫자가 increase증가 or decrease감소 할 수 있다.
- 이곳에서 return하는 것은 뭐든지 내 app의 데이터가 된다.

- store은 데이터를 저장하는곳

### p.s

reducer 개선점
=> if else 문

    if (action.type === "ADD") {
    	return state + 1;
    } else if (action.type === "MINUS") {
    	return state - 1;
    } else {
    	return state;
    }

=> switch로 개선가능

    switch (action.type) {
    	case "ADD":
    		return state + 1;
    	case "MINUS":
    		return state - 1;

    	default:
    		return state;
    }

결국 reducer에서 데이터 수정하고 여기서 리턴한 것이 새로운 데이터이다.

액션을 보내는 것은 함수와 상호작용이고, 이러한 액션을 디스패치할 때마다 현재의 상태에 들어가게 된다.
