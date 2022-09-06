import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function displayUsers() 

//unfinished code here 

export async function getServerSideProps() {
    const allUsers = await prisma.user.findMany({
        orderBy: [
            {
                email: "asc",
            },
            {
                name: "asc",
            },
        ],
    });
    };



    




