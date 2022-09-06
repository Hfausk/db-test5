import prisma from "./db.js";


export default function handler(req, res) {
    const getUsers = async () => {
        try {
            // get all kiosks from db
            const kiosks = await prisma.user.findMany({
                orderBy: [
                    {
                        email: "asc",
                    },
                    {
                        name: "asc",
                    },
                ],
            });
            
            res.status(200).json(kiosks)
        } catch (error) {
            res.status(500)
        }
    };
    getUsers()

  }
  

  