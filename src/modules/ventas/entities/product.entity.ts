import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn,
         Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { CategoryEntity } from "./category.entity";

@Entity('products', {schema:'ventas'})

export class ProductEntity{
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

    //Relaciones ♥♥

    @ManyToOne (() => CategoryEntity, (category) => category.product)
    category: CategoryEntity;

    /*@ManyToOne (() => DetalleVentaEntity, (detalleVenta) => detallVenta.product)
    detalleVenta: DetalleVentaEntity;*/

    //Columnas ♥♥

    @Column('varchar', {
        name:'title',
        comment:'nombre del producto',
    })
    title:string;
    @Column('number', {
        name:'price',
        comment:'precio con 2 decimales del producto'
    })
    price:number;
    @Column('text', {
        name:'Description',
        comment: 'Descripcion del producto'
    })
    description:string;
    @Column('array',{
        name: 'images',
        comment: 'imagenes del producto'
    })
    image:string[];
    @Column('varchar',{
        name:'category-id',
        comment:'id de la categoria con la que se relaciona la tabla'
    })
    categoryId:'number'

    @BeforeInsert()
    @BeforeUpdate()

    async setTitle(){
        if(!this.title){
            return ('No hay prodcuto');
        }
        this.title = this.title.toUpperCase();
    }

    /*  @BeforeInsert()
        @BeforeUpdate()

    async setEmail(){
        if(!this.email){
            return ('El correo no existe');
        }
        this.email = this.email.toLowerCase().trim();
    }*/

    /*
    @BeforeInsert()
    @BeforeUpdate()

    async hashPassword(){
        if(!this.password){
            return ('No existe el password');
        }
        this.password = await Bcrypt.hash(this.password, 16)
    }*/

    //se comenta para que no de errores
}
