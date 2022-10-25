type IProps = {};

export default function Button01(props: any) {
  return (
    <button
      style={{
        backgroundColor: props.isActive ? "yellow" : "default",
      }}
    >
      {props.title}
    </button>
  );
}
