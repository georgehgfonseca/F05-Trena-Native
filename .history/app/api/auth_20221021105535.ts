import client from "./client"

const apiParam = "?X-TRENA-KEY=0a944fb8-2bbc-4f03-a81a-bf84899cd4f2"

const login = (email: string, password: string) => client.post("/security/users/login" + apiParam, {username: email, password: password })
// const login = (email: string, password: string) => client.post("/auth", {email, password })

export default {
  login
}