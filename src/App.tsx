import { initGlobalState } from "qiankun";
import { useEffect, useState } from "react";
import { UserData, fetchInitialData } from "./utils";
import { Button, Space, Typography } from "antd";

const { Title } = Typography;

const initUserInfo: UserData = {
  name: "loading",
  city: "loading",
};
function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(initUserInfo);

  const { setGlobalState, onGlobalStateChange } = initGlobalState();

  useEffect(() => {
    fetchInitialData().then((res) => {
      setUser(res);
    });
  }, []);

  useEffect(() => {
    setGlobalState({
      ...user,
      baseAppClick: count,
    });
  }, [count, user]);

  const goToApp = (subappName: string) => {
    return history.pushState(null, subappName, subappName);
  };

  return (
    <div>
      <div>{JSON.stringify(user)}</div>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        +1
      </Button>
      <div>count: {count}</div>
      <hr />
      <Space wrap>
        <Button type="primary" onClick={() => goToApp("/react16")}>
          React 16
        </Button>
        <Button type="primary" onClick={() => goToApp("/vue3")}>
          Vue 3
        </Button>
      </Space>
      <hr />
    </div>
  );
}

export default App;
