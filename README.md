# 📸 API de Upload de Fotos

Criei essa API simples com Node.js/Express/MongoDB e Multer para invio de fotos para o servidor. 



## Endpoint: Upload de Arquivo

### POST /image

Este endpoint é usado para enviar uma foto.

**Tipo de Requisição:**
A requisição deve ser enviada como `multipart/form-data`.

| Parâmetro (Form Data) | Tipo | Obrigatório? | Descrição |
| :--- | :--- | :--- | :--- |
| `name` | String | Não | Nome final do arquivo. |
| `file` | Arquivo (File) | Sim | Arquivo de imagem (JPG, PNG, JPEG) |


### Exemplo de Resposta (200 Created)

Em caso de sucesso, a API retorna os dados da imagem salva..

```json
{
  "image": {
    "name":"teste",
    "src":"/uploads/teste.jpg",
    "_id":"*id gerado pelo mongodb*",
    "__v":0,
  },
  "mensage": "image saved",
}
```

### Exemplo de Resposta de Erro 

Caso envie algum arquivo diferente do permitido.
```json
{
  "message":"only PNG, JPEG and JPG are allowed."
}
```
Caso faça uma requisição sem anexar um arquivo.
```json
{
  "message":"you need to attach a file"
}
```
Caso faça uma requisição com um arquivo que tenha o MIME Type diferente de imagem (ex: um .exe disfarçado de .jpg), o upload será rejeitado por segurança.
```json
{
  "message":"invalid format"
}
```

---

## 📧 Observação

Caso faça uma requisição sem preencher o nome no form, o arquivo terá um nome unico automaticamente que será pego pelo Date.now()
