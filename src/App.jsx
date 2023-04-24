import React, { useState, useEffect } from 'react';
import "./App.css";
import DoneList from "./Components/DoneList";
import WorkingList from "./Components/WorkingList";

function App() {
  // 로컬 스토리지에서 배열을 받아오도록 함
  // 로컬 스토리지에서 가져올 수 있는 데이터가 없으면 빈 배열을 생성함
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );
  // 제목 입력을 받는 공간
  const [subtitle, setSubtitle] = useState("");
  // 세부 할일을 입력 받는 공간
  const [todo, setTodo] = useState("");

  // 제목 변경 시 저장하는 함수
  const onSubtitleChangeHandler = function (event) {
    const inputsubtitle = event.target.value;
    setSubtitle(inputsubtitle);
  };

  // 세부 할일 변경 시 저장하는 함수
  const onTodoChangeHandler = function (event) {
    const inputTodo = event.target.value;
    setTodo(inputTodo);
  };

  // 저장 버튼 클릭 이벤트 처리
  const onSubmitHandler = function () {
    const newTodo = {
      id: todoList.length + 1,
      subtitle,
      todo,
      isDone: false,
    };

    setTodoList([...todoList, newTodo]);
    alert("저장 성공!");
    setSubtitle("");
    setTodo("");
  };

  // 삭제 버튼 클릭 이벤트 처리
  const removeTodoButton = function (id) {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  };

  // 작업중인 항목을 완료 상태로 변경
  const onDoneHandler = function (id) {
    setTodoList((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, isDone: true } : item
      )
    );
  };
  
  // 완료인 상태를 다시 작업 중으로 변경
  const onWorkingHandler = (id) => {
    setTodoList((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, isDone: false } : item
      )
    );
  };

  // 로컬 스토리지에서 데이터를 가져와 초기 할일 목록을 설정하는 함수
  // 컴포넌트가 처음 렌더링될 때 useEffect 함수가 호출되며, 
  // 두 번째 인자로 빈 배열이 전달되어 있기 때문에 컴포넌트가 처음 마운트될 때만 실행됩니다.
  useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem("todoList"));
    if (storedTodoList) {
      setTodoList(storedTodoList);
    }
  }, []);

  //할일 목록이 변경될 때마다 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <main className="container">
        <div className="heading">
          <h1>My To do list!</h1>
        </div>
        <div className="inputSpace">
          <div>
            <h2>할일을 기록하세요.</h2>
            <input
              type="text"
              value={subtitle}
              placeholder="제목을 입력하세요"
              onChange={onSubtitleChangeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              value={todo}
              placeholder="내용을 입력하세요"
              onChange={onTodoChangeHandler}
            />
          </div>
          <button className="outline" onClick={onSubmitHandler}>
            저장
          </button>
        </div>
        <div>
          <h2>Working...!!</h2>
          <div className="grid outputSpace">
            {/* 이 곳이 진행 중인 리스트가 들어갈 공간 */}
            <WorkingList
              todoList={todoList}
              onDoneHandler={onDoneHandler}
              removeTodoButton={removeTodoButton}
            />
          </div>
          <h2>Done!!</h2>
          <div className="grid outputSpace">
            {/* 이 곳이 완료된 리스트가 들어갈 공간 */}
            <DoneList
              todoList={todoList}
              onWorkingHandler={onWorkingHandler}
              removeTodoButton={removeTodoButton}
            />
          </div>
        </div>
        <img src="https://count.getloli.com/get/@:todo?theme=moebooru" alt=":todo" />
      </main>
    </>
  );
}

export default App;
