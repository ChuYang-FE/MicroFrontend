import React, { useState } from "react";
import { Button, Modal } from "antd";

export default function () {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(true)}>CLICK ME</Button>
      <Modal
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        title="qiankun"
      >
        I'm the Modal
      </Modal>
    </>
  );
}
