const mysql = require('../connection/database').pool;

module.exports = {
    async insertTipoCaixa(req,res){
        const connection = await mysql.getConnection();

        var queryStr = `INSERT INTO tb_tipo_caixa (tipo_caixa_id, caixa_nome, caixa_altura, caixa_largura)
                        VALUES('${req.body.tipo_caixa_id}', '${req.body.caixa_nome}',${req.body.caixa_largura}, ${req.body.caixa_altura});`

        try {
            await connection.query(queryStr);
            await connection.release();
            return res.status(201).send({status:"Inserido com sucesso"});
    
        } catch(e) {
            await connection.release();
            return res.status(400).send(e);
        }
    },

    async deleteTipoCaixa(req,res){
        const id = req.query.id;

        const connection = await mysql.getConnection();
        
        try {
            await connection.query('START TRANSACTION');
            await connection.query(`DELETE FROM tb_tipo_caixa WHERE tipo_caixa_id='${id}';`);
            await connection.query('COMMIT;');
            await connection.release();
            return res.status(201).send({status:"Removido com sucesso"});
        } catch(e) {
            await connection.query('ROLLBACK');
            await connection.release();
            return res.status(400).send({e});
        }
    },

    async updateTipoCaixa(req,res){
        var id = req.query.id;

        const connection = await mysql.getConnection();

        var queryStr = `UPDATE tb_tipo_caixa SET
                            caixa_nome='${req.body.caixa_nome}', caixa_altura=${req.body.caixa_largura}, caixa_largura=${req.body.caixa_altura}
                        WHERE tipo_caixa_id='${id}';`;

        try {
            await connection.query(queryStr);
            await connection.release();
            return res.status(201).send({status:"Atualizado com sucesso"});
        } catch(e) {
            await connection.release();
            return res.status(400).send(e);
        } 
    },

    async getTipoCaixa(req,res){

        var id = req.query.id

        var queryStr = "SELECT * FROM tb_tipo_caixa"

        if(id)
        {
            queryStr += ` WHERE tipo_caixa_id='${id}'`;
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