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

🛠️ Tecnologias Utilizadas

<div align="left"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" width="50" height="50"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" width="50" height="50"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" width="50" height="50"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" width="50" height="50"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="50" height="50"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" width="50" height="50"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="50" height="50"/> </div>

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
* Região: `us-west-2` (Oregon)
* Opção **"Block all public access"** desmarcada

#### Tela de criação do bucket e configuração da região e permissões:

<img width="1301" height="602" alt="01-criacao-bucket" src="https://github.com/user-attachments/assets/a5f74e1c-648c-4a0f-b503-0a1d983b3f96" />

<img width="1301" height="602" alt="02-object-ownership" src="https://github.com/user-attachments/assets/7d82ec6a-68b4-41ff-9103-a5e3fc835136" />

<img width="1301" height="602" alt="03-desativar-bloqueio-acesso-publico" src="https://github.com/user-attachments/assets/afaa9623-aed0-4d80-8fc8-2d363540ca43" />

### 2. Upload dos Arquivos do Site

* Arquivos enviados: `index.html`, `style.css`, `script.js` e imagens
* Upload realizado diretamente pelo console do S3

#### Tela de upload:

<img width="1301" height="602" alt="04-upload" src="https://github.com/user-attachments/assets/8b615220-56a9-4823-a7c6-648231477b61" />

#### Arquivos listados no bucket:

<img width="1301" height="602" alt="05-arquivos-bucket" src="https://github.com/user-attachments/assets/eb4a51d9-efd1-4a58-b343-9ea1647b9c2f" />


---

### 3. Testando o Acesso Antes da Política Pública

Após o upload, foi feita uma tentativa de acessar a URL do site na aba **Static website hosting**.

#### Resultado:

* Página retornou erro **Access Denied**
* Isso ocorre porque, por padrão, o Amazon S3 bloqueia o acesso público a objetos

<img width="1302" height="693" alt="07-tela-erro" src="https://github.com/user-attachments/assets/a7df2749-cc77-4bb8-ae24-aa34bb792955" />

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

<img width="1302" height="606" alt="08-permissoes" src="https://github.com/user-attachments/assets/92228c11-c4cf-414f-89b8-d33af9f66189" />

---

### 5. Ativar Hospedagem de Site Estático

Na aba **Properties** do bucket:

* Ativada a opção **Static website hosting**
* Documento de índice: `index.html`
* Documento de erro: `error.html` (opcional)

#### Configuração no console:


<img width="1301" height="602" alt="06-ativacao-hospedagem" src="https://github.com/user-attachments/assets/99b45b10-007f-48f8-83f5-98430a7a59a7" />


---

### 6. Teste do Site Online

Após a configuração, foi possível acessar o site pela URL pública gerada.

#### Site carregando corretamente:

<img width="1302" height="693" alt="09-site-online" src="https://github.com/user-attachments/assets/6d47f185-b22f-49ad-98ad-4ef5de96efb0" />

<img width="1302" height="693" alt="10-site-online" src="https://github.com/user-attachments/assets/0ff4a529-8929-452e-8b05-86dbde8dca3b" />

<img width="1302" height="693" alt="11-site-online" src="https://github.com/user-attachments/assets/2381f2ea-01f8-402f-85a4-7f7fbe97b413" />

---
