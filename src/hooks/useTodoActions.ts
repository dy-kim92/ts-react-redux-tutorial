//  할일의 상태를 토글하고, 제거하는 함수 제공

import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { toggleTodo, removeTodo } from "../modules/todos";

export default function useTodoActions(id : number) {
    const dispatch = useDispatch();

    const onToggle = useCallback(() => dispatch(toggleTodo(id)), [dispatch, id]);
    const onRemove = useCallback(() => dispatch(removeTodo(id)), [dispatch, id]);

    return { onToggle, onRemove };
}