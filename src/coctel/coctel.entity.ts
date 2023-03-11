import {Entity, Column, PrimaryColumn} from 'typeorm';

@Entity('coctel')
export class CoctelEntity{
    @PrimaryColumn()
    id_coctel: string;

    @Column()
    nombre_coctel: string;

    @Column()
    keys_coctel: string;

    @Column()
    instr_coctel: string;

    @Column()
    data_coctel: string;

    @Column()
    categoria_coctel: string;

    @Column()
    img_coctel: string;
}