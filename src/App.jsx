import React, { useState } from "react";
import "./App.css";




function App() {
  // 저장된 할일 목록
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      subtitle: "아침 고양이 보살피기",
      todo: "물갈기, 화장실 치우기",
      isDone: true,
    },
    {
      id: 2,
      subtitle: "고양이와 놀아주기",
      todo: "사냥놀이 30분",
      isDone: false,
    },
    {
      id: 3,
      subtitle: "공부한 내용 정리하기",
      todo: "TIL, WIL 정리하기",
      isDone: false,
    },
  ]);

  // 입력한 제목이 들어가는 공간
  const [subtitle, setSubtitle] = useState("");
  // 입력한 내용이 들어가는 공간
  const [todo, setTodo] = useState("");
  // 할일 제목 입력
  const onSubtitleChangeHandler = function (event) {
    const inputsubtitle = event.target.value;
    setSubtitle(inputsubtitle);
  };

  // 할일 목록 내용 입력
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
          <h2>Working!!</h2>
          <div className="grid outputSpace">
            {/* 이 곳이 진행 중인 리스트가 들어갈 공간 */}
            {todoList
              .filter((item) => !item.isDone)
              .map((item) => (
                <article className="card" key={item.id}>
                  <header>{item.subtitle}</header>
                  <body>{item.todo}</body>
                  <footer className="grid">
                    <button>완료</button>
                    <button className="contrast outline">삭제</button>
                  </footer>
                </article>
              ))}
          </div>
          <h2>Done..!!</h2>
          <div className="grid outputSpace">
            {/* 이 곳이 완료된 리스트가 들어갈 공간 */}
            {todoList
              .filter((item) => item.isDone)
              .map((item) => (
                <article className="card" key={item.id}>
                  <header>{item.subtitle}</header>
                  <body>{item.todo}</body>
                  <footer className="grid">
                    <button>미완료</button>
                    <button className="contrast outline">삭제</button>
                  </footer>
                </article>
              ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
