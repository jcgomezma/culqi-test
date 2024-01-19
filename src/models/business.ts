import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('business')
export class Business {

	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: false })
	name: string;

	@Column({ nullable: false })
	pk: string;

}
