import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "tb_cats"})
export class Cat {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @Column()
  age: number

  @Column({nullable: true})
  gender: string
}
