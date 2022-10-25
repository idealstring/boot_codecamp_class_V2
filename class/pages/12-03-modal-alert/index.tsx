import { Modal } from "antd";

const success = () => {
  Modal.success({
    content: "some messages...some... success!!!!!",
  });
};

const error = () => {
  Modal.error({
    title: "This is an error message",
    // content: "some messages...some fail...",
  });
};

const App = () => (
  <div>
    <button onClick={success}>성공!!!!!</button>
    <button onClick={error}>실패했을때....</button>
  </div>
);

export default App;
