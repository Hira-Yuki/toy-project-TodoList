# 간단하게 동작하는 To-Do List App 입니다.

Create React App을 이용해 생성한 프로젝트입니다.

- 할일 목록을 추가하고 완료 여부를 추적할 수 있습니다.
- 실수로 완료한 항목은 다시 취소할 수 있습니다.
- 불필요한 항목은 삭제할 수도 있습니다.

## Components Tree
- App : 부모 컴포넌트 메인 컨테이너와 할일 목록 추가 기능을 수행하며 자식 컴포넌트로 변수를 전달합니다.
- DoneList : 완료된 항목을 화면에 렌더링하는 기능을 수행합니다.
- WorkingList : 진행 중인 항목을 화면에 렌더링하는 기능을 수행합니다.

## 주의사항
- Local Storage를 사용하여 데이터를 저장하고 불러오기 때문에 브러우저 청소를 하게 되면 데이터가 지워집니다.

![:name](https://count.getloli.com/get/@:todo?theme=gelbooru)
