import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Resident} from "./Resident.entity";

@Entity()

export class Dutties {
  @PrimaryGeneratedColumn('uuid')
  duttyId: string;

  @Column()
  duttyName: string;

  @Column()
  duttyDescription: string;

  @Column()
  duttyDate: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';

  @ManyToOne(() => Resident, (resident) => resident.dutties)
  duttyResident: Resident;
}
