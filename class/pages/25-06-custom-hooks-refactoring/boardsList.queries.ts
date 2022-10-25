import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards(
    $page: Int
    $search: String
    $startDate: DateTime
    $endDate: DateTime
  ) {
    fetchBoards(
      page: $page
      search: $search
      startDate: $startDate
      endDate: $endDate
    ) {
      _id
      writer
      title
      createdAt
    }
  }
`;

export const FETCH_BOARDS_OF_THE_BEST = gql`
  query {
    fetchBoardsOfTheBest {
      _id
      title
      images
      createdAt
    }
  }
`;

export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount(
    $endDate: DateTime
    $startDate: DateTime
    $search: String
  ) {
    fetchBoardsCount(endDate: $endDate, startDate: $startDate, search: $search)
  }
`;
