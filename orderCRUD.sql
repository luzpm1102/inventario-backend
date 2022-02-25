SELECT * FROM inventario.orden;
INSERT INTO inventario.orden(idCliente, total, fecha, fechaEntrega) VALUES (?,?,?,?);
DELETE FROM inventario.orden WHERE idOrden = ?;
UPDATE inventario.orden SET  idCliente = ? , total = ?, fecha = ?, fechaEntrega = ? WHERE idOrden = ?