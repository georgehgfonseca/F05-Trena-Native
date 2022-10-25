import client from "./client"

const login = (email: string, password: string) => client.post("/security/users/login", {email, password })
// const login = (email: string, password: string) => client.post("/auth", {email, password })

export default {
  login
}