//pega o valor da variavel de ambiente, senão achar usa o valor padrão 
//sempre que fazer uma requisição peaga o valor BASE_URL
export const BASE_URL = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080";