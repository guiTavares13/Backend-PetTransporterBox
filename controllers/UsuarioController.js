const mysql = require('../connection/database').pool;

module.exports = {
    async insertCaixa(req,res){
        const connection = await mysql.getConnection();

        var queryStr = `INSERT INTO tb_usuario (usuario_id, usuario_nome, usuario_documento, 
                                                usuario_data_nascimento, usuario_email, usuario_telefone)
                        VALUES('${req.body.usuario_id}', '${req.body.usuario_nome}','${req.body.usuario_documento}',
                                ${req.body.usuario_data_nascimento}', '${req.body.usuario_email}','${req.body.usuario_telefone}');`

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
            await connection.query(`DELETE FROM tb_usuario WHERE usuario_id='${id}';`);
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

        var queryStr = `UPDATE tb_usuario SET
                            usuario_nome='${req.body.usuario_nome}', usuario_documento='${req.body.usuario_documento}',
                            usuario_data_nascimento='${req.body.usuario_data_nascimento}', usuario_email='${req.body.usuario_email}',
                            usuario_telefone='${req.body.usuario_telefone}'
                        WHERE usuario_id='${id}';`;

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

        var queryStr = "SELECT * FROM tb_usuario"

        if(id)
        {
            queryStr += ` WHERE usuario_id='${id}'`;
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