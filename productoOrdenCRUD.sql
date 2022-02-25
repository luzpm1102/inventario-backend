SELECT * FROM inventario.producto_orden
INSERT INTO inventario.producto_orden ( idOrden, idProductoMedida, cantidad, precioUnitario, precioTotal) VALUES (?,?,?,?,?)
UPDATE inventario.producto_orden SET idOrden = ?, idProductoMedida = ?, cantidad = ?, precioUnitario = ?, precioTotal = ? WHERE idProductoOrden = ?
DELETE FROM inventario.producto_orden WHERE idProductoOrden = ?
