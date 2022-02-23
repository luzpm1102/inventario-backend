
-- get all client
SELECT * FROM inventario.cliente;
-- get client id=1
SELECT * FROM inventario.cliente where idCliente=1;

-- Insert new client
INSERT INTO inventario.cliente (nombre, direccion, telefono) VALUES( 'Margarita Montes', 'Villa reconciliacion', '57446452');
INSERT INTO inventario.cliente (nombre, direccion, telefono) VALUES( 'Cliente', 'Atencion', '22334818');

-- Delete client
delete from inventario.cliente where idCliente=2;

-- Update cliente where id =2

update inventario.cliente set nombre= 'elnombre' where idCliente= 2