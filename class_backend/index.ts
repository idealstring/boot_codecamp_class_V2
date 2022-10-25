import { DataSource } from "typeorm";
import { Board } from "./BoardTable.postgres";

// 아폴로 서버
// const { ApolloServer, gql } = require("apollo-server");  // common.js 방식 import
import { ApolloServer, gql } from "apollo-server"; // module 방식

// DOCS 화면
// The GraphQL schema
const typeDefs = gql`
  type MyBoard {
    number: Int
    writer: String
    title: String
    contents: String
  }

  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  type Query {
    "A simple type for getting started!"
    fetchBoards: [MyBoard]
  }
  type Mutation {
    # 연습용 example 방식
    # createBoard(writer: String, title: String, contents: String): String

    # 실무용 backend09 방식
    createBoard(createBoardInput: CreateBoardInput!): String
    # updateBoard: string
    # deleteBoard: string
  }
`;

// 실제 API
// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    fetchBoards: async () => {
      const result = await Board.find();

      // //한개만 골라서 꺼내기
      // Board.findOne({ where: { number: 3 } });

      return result; // [{number:1,writer:"철수",title:"제목",contents:"내용입니다~~~"}, {...}, {...}, ...]
    },
  },

  Mutation: {
    createBoard: async (parent: any, args: any, context: any, info: any) => {
      // parent는 API에서 API를 요청할 때, 예를 들여 여기 createBoard에서 fetchboards를 요청한다면..!
      // args는 브라우저에서 뭔가 요청할 때, 값이 들어올 때
      // context는 헤더랑 리퀘스트 정보들어옴
      // info는 나머지 정보
      await Board.insert({
        ...args.createBoardInput,

        // 하나한 모두 입력하는 방식
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });

      return "등록에 성공~!!!";
    },

    // updateBoard: async () => {
    //   // Board.update({조건}, {바꿔줄내용});
    //   await Board.update({ number: 3 }, { writer: "영희" }); // 3번 게시글 작성자를 영희로 바꿔줘
    //   // Board.update({}, {});

    //   return "게시글 수정 완료!";
    // },
    // deleteBoard: async () => {
    //   await Board.delete({ number: 3 }); // 3번 게시글 삭제
    //   await Board.update({ number: 3 }, { isDelete: true }); // 실무에선 실제로 삭제하지 않고, isDelete라는 컬럼을 만들고 true만들어 삭제된 것처럼 만듬.
    //   await Board.update({ number: 3 }, { deleteAt: new Date() }); // 삭제가 true가 되면 삭제 날짜도 등록하게 한다. 따라서 deleteAt이 null이면 삭제 안된 게시글, new Date()시간이 들어가 있으면 그 시간에 삭제된 게시글

    //   return "게시글 삭제함.";
    // },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true, // 모두 퍼가게 할 때
  // // 일부만 퍼가게 하게.
  // cors: {
  //   origin: ["http://www.navr.com", "http://qqq.com"],
  // },
});

// 디비 연결까지 끝나고 가장 마지막에 실행해야 되니 연결 이후로 보냄!
// // 실행 부분 - 이제부터 24시간 기다릴래...!! listen!!!  listen 매개변수로 넣는 게 포트 번호
// // server.listen(4000).then(({ url }) => {
// server.listen(4000).then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.199.68",
  port: 5003,
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [Board],
});

AppDataSource.initialize()
  .then(() => {
    console.log("DB 접속에 성공했습니다.");

    //DB 연결이 모두 끝나고 가장마지막에 실행(다른 사람의 접속을 기다리기 위해서)
    server.listen(4000).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch((error) => {
    console.log("DB 접속에 실패했습니다.");
    console.log("원인 : ");
    console.log(error);
  });
