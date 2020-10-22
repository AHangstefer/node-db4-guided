const db = require("../data/config")

function find() {
	return db("zoos")
}

function findById(id) {
	return db("zoos")
		.where("id", id)
		.first()
}

function findZooAnimals(zooID){
	return db("zoos_animals as za")
		.innerJoin("zoos as z", "z.id", "za.zoo_id")
		.innerJoin("animals as a", "a.id", "za.animals_id")
		.where("z.id", zooID)
		.select("a.*")

}

module.exports = {
	find,
	findById,
	findZooAnimals
}