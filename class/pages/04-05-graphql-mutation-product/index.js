import { useMutation, gql } from "@apollo/client";

// '#'은 아폴로에서 //과 같음.

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    #타입 적는 곳
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      # 실제 우리가 전달할 변수 적는 곳
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [create__Product] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await create__Product({
      variables: {
        //variables -> $ 역할
        seller: "아가사",
        createProductInput: {
          name: "자동으로 코드치는 키보드",
          detail: "성능을 믿을 수 있다면 구매하라!",
          price: 3000000,
        },
      }, //변수 넣는 곳
    });
    console.log(result);
    alert(result.data.createProduct.message);
  };

  return (
    <>
      <button onClick={onClickSubmit}>Graphql API 요청하기(동기)</button>
    </>
  );
}
