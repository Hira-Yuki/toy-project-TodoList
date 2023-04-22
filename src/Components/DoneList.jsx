function DoneList({ todoList, onWorkingHandler, removeTodoButton }) {
    return (
      <>
        {todoList
          .filter((item) => item.isDone)
          .map((item) => (
            <article className="card" key={item.id}>
              <header>{item.subtitle}</header>
              <body>{item.todo}</body>
              <footer className="grid">
                <button
                  className="secondary"
                  onClick={() => onWorkingHandler(item.id)}
                >
                  취소
                </button>
                <button
                  className="contrast outline"
                  onClick={() => removeTodoButton(item.id)}
                >
                  삭제
                </button>
              </footer>
            </article>
          ))}
      </>
    );
  }

  export default DoneList