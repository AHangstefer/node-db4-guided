exports.seed = async function(knex) {
	await knex("zoos_animals").insert([
		{ zoo_id: 1, animal_id: 1, arrival_date: "2018-01-05" },
		{ zoo_id: 1, animal_id: 2, arrival_date: "2018-01-16" },
		{ zoo_id: 1, animal_id: 3, arrival_date: "2018-02-01", departure_date: "2019-12-30" },
		{ zoo_id: 1, animal_id: 4, arrival_date: "2018-05-17", departure_date: "2020-03-04" },
		{ zoo_id: 1, animal_id: 5, arrival_date: "2018-06-06", departure_date: "2019-04-15" },
		{ zoo_id: 1, animal_id: 8, arrival_date: "2019-02-07", departure_date: "2019-02-28" },
		{ zoo_id: 2, animal_id: 3, arrival_date: "2019-12-31" },
		{ zoo_id: 2, animal_id: 5, arrival_date: "2019-04-16" },
		{ zoo_id: 2, animal_id: 6, arrival_date: "2019-04-16" },
		{ zoo_id: 2, animal_id: 7, arrival_date: "2019-05-01" },
		{ zoo_id: 2, animal_id: 8, arrival_date: "2019-02-28" },
		{ zoo_id: 2, animal_id: 9, arrival_date: "2020-01-16" },
		{ zoo_id: 2, animal_id: 10, arrival_date: "2020-01-16" },
		{ zoo_id: 2, animal_id: 11, arrival_date: "2020-01-16" },
	])
}
