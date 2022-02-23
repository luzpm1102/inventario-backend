insert into inventario.producto_medida(idMedida, idProducto, precio, cantidad) values (1,1,310,5);

insert into inventario.medida(nombre, nombreCorto) values ('Bolsa', 'BLS');

select * from inventario.producto_medida;

insert into inventario.producto(nombre, descripcion, SKU) values ('cemento', 'Cemento Holcim', '1');

select * from inventario.orden;

Select sum(precioTotal) as total from inventario.producto_orden as P , inventario.orden as O
where p.idOrden = o.idOrden;

insert into inventario.orden(total) select sum(precioTotal) as total from inventario.producto_orden as P , inventario.orden as O
where p.idOrden = o.idOrden;


select * from inventario.producto_orden;

update inventario.producto_orden set cantidad = 2 where idProductoOrden =1;
select * from inventario.producto_orden;


insert into inventario.producto_orden(idOrden, idProductoMedida, cantidad, precioUnitario) values (1,1,2,300);

delete from inventario.orden where idOrden=2

