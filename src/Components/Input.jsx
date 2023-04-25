function Input({
  subtitle,
  onSubtitleChangeHandler,
  todo,
  onTodoChangeHandler,
  onSubmitHandler,
}) {
  return (
    <>
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
    </>
  );
}

export default Input;
