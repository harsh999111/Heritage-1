const {username,password} =process.env
export const connectionSrt="mongodb+srv://"+username+":"+password+"@cluster0.rvpgbau.mongodb.net/userDb?retryWrites=true&w=majority"