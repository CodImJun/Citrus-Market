import { ChatHistory } from "../../_components";

const ChatRoomPage = () => {
  return (
    <>
      <ul className="flex flex-col px-[1.6rem] py-[2rem] gap-y-[1rem] overflow-scroll">
        <li>
          <ChatHistory
            sender="me"
            content="옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다."
            sentAt={new Date()}
            chatType="string"
          />
        </li>
        <li>
          <ChatHistory
            sender="other"
            content="옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다."
            sentAt={new Date()}
            chatType="string"
          />
        </li>
      </ul>
    </>
  );
};

export default ChatRoomPage;
