//  typesafe-actions 로 리덕스 모듈 리팩토링
import { createAction, ActionType, createReducer } from 'typesafe-actions';

// //  액션 type 선언 기존코드
// const INCREASE = 'counter/INCREASE' as const;
// const DECREASE = 'counter/DECREASE' as const;
// const INCREASE_BY = 'counter/INCREASE_BY' as const;
// //  as const -> const assertions 라는 Typescript 문법 (추후 객체 생성 시 실제 값을 가르킴)


const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';


//  액션 생성 함수 기존코드
// export const increase = () => ({ type : INCREASE });
// export const decrease = () => ({ type : DECREASE });
// export const increaseBy = (diff : number) => ({ 
//     type : INCREASE_BY,
//     payload : diff
// });

//  typesafe-actions -> 액션 생성 함수
export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
export const increaseBy = createAction(INCREASE_BY)<number>();


//  액션 객체타입 생성 기존코드
// type CounterAction =
//     | ReturnType<typeof increase>
//     | ReturnType<typeof decrease>
//     | ReturnType<typeof increaseBy>;

//  typesafe-actions -> 액션의 객체타입 생성
const actions = { increase, decrease, increaseBy };
type CounterAction = ActionType<typeof actions>;
//  -> ActionType 을 사용하여 actions 이라는 객체에 모든 액션 생성함수 넣음


//  모듈에서 관리할 상태의 타입과 상태의 초기값 선언
type CounterState = {
    count : number;
}

const initialState : CounterState = {
    count : 0
}


//  리듀서 작성 기존코드
// function counter(state : CounterState = initialState, action : CounterAction) {
//     switch (action.type) {
//         case INCREASE :
//             return { count : state.count + 1};
//         case DECREASE :
//             return { count : state.count - 1};
//         case INCREASE_BY :
//             return { count : state.count + action.payload};
//         default :
//             return state;
//     }
// }

//  createReducer 로 리듀서 만들기
// const counter = createReducer<CounterState, CounterAction> (initialState, {
//     [INCREASE] : state => ({ count : state.count + 1 }),
//     [DECREASE] : state => ({ count : state.count - 1 }),
//     [INCREASE_BY] : (state, action) => ({ count : state.count + action.payload })
// });

//  메소드 체이닝 방식으로 리듀서 구현하기
const counter = createReducer<CounterState, CounterAction> (initialState)
    .handleAction(increase, state => ({ count : state.count + 1 }))
    .handleAction(decrease, state => ({ count : state.count - 1 }))
    .handleAction(increaseBy, (state, action) => ({ count : state.count + action.payload }));


export default counter;