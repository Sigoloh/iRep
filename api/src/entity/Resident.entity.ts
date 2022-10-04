import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Billing} from "./Billing.entity";
import {Dutties} from "./Dutties.entity";

@Entity()
export class Resident {
  @PrimaryGeneratedColumn('uuid')
  residentId: string;

  @Column()
  residentFirstName: string;

  @Column()
  residentLastName: string;

  @Column()
  residentEmail: string;

  @Column()
  residentNickName: string;

  @Column()
  residentIngress: Date

  @Column()
  residentRole: 'resident' | 'tresurer' | 'dean';

  @OneToMany(() => Dutties, (duttie) => duttie.duttyResident)
  dutties: Dutties[];

  @OneToMany(() => Billing, (billing) => billing.billingOwner)
  billings: Billing[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

}
