import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Board extends BaseEntity {
  // 주요키면서 번호를 자동으로 부여해줌. 그냥 PrimaryColumn만 쓰면 키만 설정됨.
  @PrimaryGeneratedColumn("increment") // sql에서 필요한 타입설정
  number!: number; // type 스크립트 타입 설정

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "text" })
  contents!: string;
}
