import { MongoClient } from "mongodb"

export async function connectToDatabase() {
  useCreateIndex: true

  //const client = await MongoClient.connect("mongodb://localhost:27017/auth-demo")
  const client = await MongoClient.connect("mongodb+srv://dbUser:dbUser@cluster0.7b6rt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
  return client
}

// DATABASE_CLOUD='mongodb+srv://dbUser:dbUser@cluster0.fups3.mongodb.net/dtseo'
// DATABASE_LOCAL='mongodb://localhost:27017/seoblog'
