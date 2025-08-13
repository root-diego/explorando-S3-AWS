# 🪣 Documentação: Deploy de Site Estático no Amazon S3 (AWS re/Start)

Este repositório contém minha documentação prática do processo de criação e configuração de um bucket S3 para hospedar um site estático, como parte das atividades do programa **AWS re/Start - Campinho Digital**.

---

## 🧠 O que eu aprendi

* Criar e configurar um bucket no Amazon S3
* Fazer upload dos arquivos do site (HTML, CSS, JS)
* Configurar permissões e políticas para acesso público
* Ativar a hospedagem de site estático no S3
* Testar a URL pública do site

---

## 📁 Estrutura do Repositório

`Documentacao-S3-AWS/`

```
├── s3-screenshots/          # Capturas de tela organizadas por etapa
│   ├── 01-criacao-bucket.png
│   ├── 02-regiao-permissoes.png
│   ├── 03-upload.png
│   ├── 04-arquivos-bucket.png
│   ├── 05-teste-access-denied.png
│   ├── 06-politica-publica.png
│   ├── 07-hospedagem-estatica.png
│   └── 08-site-online.png
├── site-files/              # Arquivos do site estático
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── imagens/
└── README.md
```

---

## 🖥️ Etapas Realizadas

### 1. Criação do Bucket no Amazon S3

* Nome do bucket: `meu-portfolio-nuvem-pratica`
* Região: `us-east-1` (Norte da Virgínia)
* Opção **"Block all public access"** desmarcada

#### Tela de criação do bucket:

<img width="878" height="648" alt="01-criacao-bucket" src="https://github.com/seu-usuario/Documentacao-S3-AWS/raw/main/s3-screenshots/01-criacao-bucket.png" />

#### Configuração da região e permissões:

<img width="878" height="648" alt="02-regiao-permissoes" src="https://github.com/seu-usuario/Documentacao-S3-AWS/raw/main/s3-screenshots/02-regiao-permissoes.png" />

---

### 2. Upload dos Arquivos do Site

* Arquivos enviados: `index.html`, `style.css`, `script.js` e imagens
* Upload realizado diretamente pelo console do S3

#### Tela de upload:

<img width="878" height="648" alt="03-upload" src="https://github.com/seu-usuario/Documentacao-S3-AWS/raw/main/s3-screenshots/03-upload.png" />

#### Arquivos listados no bucket:

<img width="878" height="648" alt="04-arquivos-bucket" src="https://github.com/seu-usuario/Documentacao-S3-AWS/raw/main/s3-screenshots/04-arquivos-bucket.png" />

---

### 3. Testando o Acesso Antes da Política Pública

Após o upload, foi feita uma tentativa de acessar a URL do site na aba **Static website hosting**.

#### Resultado:

* Página retornou erro **Access Denied**
* Isso ocorre porque, por padrão, o Amazon S3 bloqueia o acesso público a objetos

<img width="878" height="648" alt="05-teste-access-denied" src="https://github.com/seu-usuario/Documentacao-S3-AWS/raw/main/s3-screenshots/05-teste-access-denied.png" />

---

### 4. Adicionando a Política Pública

Para permitir acesso a todos os objetos, foi adicionada a seguinte **Bucket Policy** na aba **Permissions**:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::meu-portfolio-nuvem-pratica/*"
    }
  ]
}
```

#### Tela de política aplicada:

<img width="878" height="648" alt="06-politica-publica" src="https://github.com/seu-usuario/Documentacao-S3-AWS/raw/main/s3-screenshots/06-politica-publica.png" />

---

### 5. Ativar Hospedagem de Site Estático

Na aba **Properties** do bucket:

* Ativada a opção **Static website hosting**
* Documento de índice: `index.html`
* Documento de erro: `error.html` (opcional)

#### Configuração no console:

<img width="878" height="648" alt="07-hospedagem-estatica" src="https://github.com/seu-usuario/Documentacao-S3-AWS/raw/main/s3-screenshots/07-hospedagem-estatica.png" />

---

### 6. Teste do Site Online

Após a configuração, foi possível acessar o site pela URL pública gerada.

#### Site carregando corretamente:

<img width="1300" height="737" alt="08-site-online" src="https://github.com/seu-usuario/Documentacao-S3-AWS/raw/main/s3-screenshots/08-site-online.png" />

---

💡 **Conclusão:**
O Amazon S3 oferece uma maneira simples, rápida e escalável de hospedar sites estáticos, eliminando a necessidade de servidores dedicados para esse tipo de aplicação.
