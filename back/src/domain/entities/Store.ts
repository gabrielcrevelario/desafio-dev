import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'store' })
export class Store {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  type: string

  @Column({ type: 'datetime' })
  dateStart: string

  @Column()
  value: number

  @Column()
  cpf: string

  @Column()
  card: string

  @Column()
  hour: string

  @Column()
  storeOwner: string

  @Column()
  nameStore: string
}
