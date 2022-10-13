import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, UpdateResult} from "typeorm";
import {Resident} from "./Resident.entity";

@Entity('Billing')
export class Billing {

  @PrimaryGeneratedColumn('uuid')
  billingId: string;

  @Column()
  room: string;

  @Column()
  fixedExpenses: string;

  @Column()
  houseExpenses: string;

  @Column()
  splitwise: string

  @Column()
  fines: string;

  @Column()
  otherExpenses: string;

  @Column()
  totalExpenses: string;

  @Column()
  reference: 'jannuary' | 'february' | 'march' | 'april' | 'may' | 'june' | 'july' | 'august' | 'september' | 'october' | 'november' | 'december';

  @ManyToOne(() => Resident, (resident) => resident.billings)
  billingOwner: Resident;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

}
