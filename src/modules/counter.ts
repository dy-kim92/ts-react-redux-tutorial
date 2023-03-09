//  액션 type 선언
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;
//  as const -> const assertions 라는 Typescript 문법 (추후 객체 생성 시 실제 값을 가르킴)

type CounterAction =
    | ReturnType<typeof increase>
    | ReturnType<typeof decrease>
    | ReturnType<typeof increaseBy>;

export const increase = () => ({ type : INCREASE });
export const decrease = () => ({ type : DECREASE });
export const increaseBy = (diff : number) => ({ 
    type : INCREASE_BY,
    payload : diff
});

//  모듈에서 관리할 상태의 타입과 상태의 초기값 선언
type CounterState = {
    count : number;
}

const initialState : CounterState = {
    count : 0
}

//  리듀서 작성
function counter(state : CounterState = initialState, action : CounterAction) {
    switch (action.type) {
        case INCREASE :
            return { count : state.count + 1};
        case DECREASE :
            return { count : state.count - 1};
        case INCREASE_BY :
            return { count : state.count + action.payload};
        default :
            return state;
    }
}

export default counter;