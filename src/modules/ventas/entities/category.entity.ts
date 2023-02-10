import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, Column } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity('products', {schema:'ventas'})

export class CategoryEntity{
    @PrimaryGeneratedColumn('uuid')
    id:number
    @CreateDateColumn({
        name:'Create_date',
        type:'timestamp',
        default:() => 'CURRENT_TIMESTAMP',
    })
    createAt:Date;
    @UpdateDateColumn({
        name:'update_date',
        type:'timestamp',
        default:() => 'CURRENT_TIMESTAMP',
    })

    updateAp:Date;
    @DeleteDateColumn({
        name:'delete_date',
        type:'timestamp',
        nullable:true,
    })
    deleteAp:Date;
    //Relaciones
    @OneToMany (() => ProductEntity, (product) => product.category)
    product: ProductEntity;

    //Columnas

    @Column('varchar', {
        name:'title',
        comment:'nombre de la categoria',
    })
    title:string;
    @Column('text', {
        name:'Description',
        comment: 'Descripcion de la categoria'
    })
    description:string;
}

