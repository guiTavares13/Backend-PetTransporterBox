DROP DATABASE db_caixapet;
CREATE DATABASE db_caixapet;

USE db_caixapet;

CREATE TABLE tb_tipo_pet(
    tipo_pet_id VARCHAR(40) NOT NULL PRIMARY KEY,
    tipo_nome VARCHAR(64),
    tipo_descricao VARCHAR(512)
);

CREATE TABLE tb_pet(
    pet_id VARCHAR(40) NOT NULL PRIMARY KEY, 
    pet_nome VARCHAR(64),
    pet_idade INTEGER,
    pet_raca VARCHAR(64),
    pet_tipo VARCHAR(40),
    FOREIGN KEY (pet_tipo) REFERENCES tb_tipo_pet(tipo_pet_id)
);

CREATE TABLE tb_tipo_caixa(
    tipo_caixa_id VARCHAR(40) NOT NULL PRIMARY KEY,
    caixa_nome VARCHAR(64),
    caixa_altura FLOAT,
    caixa_largura FLOAT
);

CREATE TABLE tb_caixa(
    caixa_id VARCHAR(40) NOT NULL PRIMARY KEY, 
    caixa_nome VARCHAR(64),
    tipo_caixa VARCHAR(40),
    FOREIGN KEY (tipo_caixa) REFERENCES tb_tipo_caixa(tipo_caixa_id)
);

CREATE TABLE tb_tipopet_x_tipocaixa(
    tipo_pet VARCHAR(40),
    tipo_caixa VARCHAR(40),
    FOREIGN KEY (tipo_pet) REFERENCES tb_tipo_pet(tipo_pet_id),
    FOREIGN KEY (tipo_caixa) REFERENCES tb_tipo_caixa(tipo_caixa_id)
);

CREATE TABLE tb_usuario(
    usuario_id VARCHAR(40) NOT NULL PRIMARY KEY,
    usuario_nome VARCHAR(64),
    usuario_documento VARCHAR(16),
    usuario_data_nascimento DATETIME,
    usuario_email VARCHAR(128),
    usuario_senha VARCHAR(512),
    usuario_telefone VARCHAR(32)
);

CREATE TABLE tb_pet_x_usuario(
    pet VARCHAR(40),
    usuario VARCHAR(40),
    FOREIGN KEY (pet) REFERENCES tb_pet(pet_id),
    FOREIGN KEY (usuario) REFERENCES tb_usuario(usuario_id)
);

CREATE TABLE tb_caixa_x_usuario(
    caixa VARCHAR(40),
    usuario VARCHAR(40),
    FOREIGN KEY (caixa) REFERENCES tb_caixa(caixa_id),
    FOREIGN KEY (usuario) REFERENCES tb_usuario(usuario_id)
);

CREATE TABLE tb_estado_pet(
    estado_pet_id VARCHAR(40) NOT NULL PRIMARY KEY,
    estado_pet_descricao VARCHAR(128)
);

CREATE TABLE tb_viagem(
    viagem_id VARCHAR(40) NOT NULL PRIMARY KEY,
    pet VARCHAR(40),
    caixa VARCHAR(40),
    viagem_data DATETIME,
    FOREIGN KEY (pet) REFERENCES tb_pet(pet_id),
    FOREIGN KEY (caixa) REFERENCES tb_caixa(caixa_id)
);

CREATE TABLE tb_localizacao_pet(
    localizacao_pet_id VARCHAR(40) NOT NULL PRIMARY KEY,
    latitude FLOAT,
    longitude FLOAT
);

CREATE TABLE tb_leitura(
    leitura_id VARCHAR(40) NOT NULL PRIMARY KEY,
    leitura_data DATETIME,
    leitura_porta_aberta BIT(1),
    viagem VARCHAR(40),
    estado_pet VARCHAR(40),
    caixa VARCHAR(40),
    localizacao VARCHAR(40),
    FOREIGN KEY (viagem) REFERENCES tb_viagem(viagem_id),
    FOREIGN KEY (caixa) REFERENCES tb_caixa(caixa_id)
);

CREATE TABLE tb_localizacaopet_x_leitura(
    localizacao VARCHAR(40),
    leitura VARCHAR(40),
    FOREIGN KEY (localizacao) REFERENCES tb_localizacao_pet(localizacao_pet_id),
    FOREIGN KEY (leitura) REFERENCES tb_leitura(leitura_id)
);

CREATE TABLE tb_estadopet_x_leitura(
    estado_pet VARCHAR(40),
    leitura VARCHAR(40),
    FOREIGN KEY (estado_pet) REFERENCES tb_estado_pet(estado_pet_id),
    FOREIGN KEY (leitura) REFERENCES tb_leitura(leitura_id)
);

INSERT INTO tb_tipo_pet VALUES ('1', 'Pequeno Porte', 'Animal de pequeno porte');
INSERT INTO tb_tipo_pet VALUES ('2', 'Médio Porte', 'Animal de médio porte');
INSERT INTO tb_tipo_pet VALUES ('3', 'Grande Porte', 'Animal de grande porte');

-- PROCEDURES 

DELIMITER $$

CREATE PROCEDURE proc_add_pet(IN p_pet_id VARCHAR(40),IN p_pet_nome VARCHAR(64), IN p_pet_idade INTEGER, IN p_pet_raca VARCHAR(64), IN p_pet_tipo VARCHAR(40), IN p_user_id VARCHAR(40))
BEGIN
    INSERT INTO tb_pet VALUES (p_pet_id,p_pet_nome,p_pet_idade,p_pet_raca,p_pet_tipo);
    INSERT INTO tb_pet_x_usuario VALUES (p_pet_id,p_user_id);

END$$


CREATE PROCEDURE proc_get_pets_user(IN p_user_id VARCHAR(40))
BEGIN
	SELECT  P.pet_id,
    P.pet_nome,
    P.pet_idade,
    P.pet_raca,
    P.pet_tipo FROM tb_pet P  left JOIN tb_pet_x_usuario F ON F.pet = P.pet_id WHERE F.usuario = p_user_id;
END$$

