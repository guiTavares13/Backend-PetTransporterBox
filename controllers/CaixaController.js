const mysql = require('../connection/database').pool;

module.exports = {
    async insertCaixa(req,res){
        const connection = await mysql.getConnection();

        var queryStr = `INSERT INTO tb_caixa (caixa_id, caixa_nome, tipo_caixa)
                        VALUES('${req.body.caixa_id}', '${req.body.caixa_nome}','${req.body.tipo_caixa}');`

        try {
            await connection.query(queryStr);
            await connection.release();
            return res.status(201).send({status:"Inserido com sucesso"});
    
        } catch(e) {
            await connection.release();
            return res.status(400).send(e);
        }
    },

    async deleteCaixa(req,res){
        const id = req.query.id;

        const connection = await mysql.getConnection();
        
        try {
            await connection.query('START TRANSACTION');
            await connection.query(`DELETE FROM tb_caixa WHERE caixa_id='${id}';`);
            await connection.query('COMMIT;');
            await connection.release();
            return res.status(201).send({status:"Removido com sucesso"});
        } catch(e) {
            await connection.query('ROLLBACK');
            await connection.release();
            return res.status(400).send({e});
        }
    },

    async updateCaixa(req,res){
        var id = req.query.id;

        const connection = await mysql.getConnection();

        var queryStr = `UPDATE tb_caixa SET
                            caixa_nome='${req.body.caixa_nome}', caixa_tipo='${req.body.tipo_caixa_id}'
                        WHERE caixa_id='${id}';`;
                        
        var queryIntermediaria = `UPDATE tb_caixa_x_usuario SET
                                      usuario='${req.body.usuario_id}'
                                  WHERE caixa='${id}';`;

        try {
            await connection.query(queryStr);
            await connection.release();
            return res.status(201).send({status:"Atualizado com sucesso"});
        } catch(e) {
            await connection.release();
            return res.status(400).send(e);
        } 
    },

    async getCaixa(req,res){

        var id = req.query.id

        var queryStr = "SELECT * FROM tb_caixa"

        if(id)
        {
            queryStr += ` WHERE caixa_id='${id}'`;
        }

        const connection = await mysql.getConnection();

        try {
            const [rows,fields] = await connection.query(queryStr);
            await connection.release();
            return res.status(200).send(rows);
        } catch(e){
            await connection.release();
            return res.status(400).send(e);
        }
    }
}