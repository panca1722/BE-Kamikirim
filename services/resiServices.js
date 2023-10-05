const { prisma } = require("../config");
async function getAllResi() {
    try{
        const resi = await prisma.resi.findMany()
        return resi;
    }catch(error){
        console.error(error)
        throw new Error()
    }
}

module.exports = {
  getAllResi,
};
