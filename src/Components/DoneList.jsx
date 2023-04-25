function DoneList({ todoList, onWorkingHandler, removeTodoButton }) {
  return (
    <>
      <h2>Done!!</h2>
      <div className="grid outputSpace">
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
      </div>
    </>
  );
}

export default DoneList;
