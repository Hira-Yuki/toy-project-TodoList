function WorkingList({ todoList, onDoneHandler, removeTodoButton }) {
    return (
      <>
        {todoList
          .filter((item) => !item.isDone)
          .map((item) => (
            <article className="card" key={item.id}>
              <header>{item.subtitle}</header>
              <body>{item.todo}</body>
              <footer className="grid">
                <button onClick={() => onDoneHandler(item.id)}>완료</button>
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
  export default WorkingList