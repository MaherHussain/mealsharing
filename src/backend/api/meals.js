const express = require("express");
const app = express();
const router = express.Router();

const pool = require("./../database");
const knex = require("../database");

router.get("/", async (request, response) => {
   pool.query("select * from meals ", function (error, results, fields) {
     if (error) {
       throw error;
     }

     response.json(results);
     // error will be an Error if one occurred during the query
     // results will contain the results of the query
     // fields will contain information about the returned results fields (if any)
   });

  
});
router.get("/id", async (request, response) => {
  pool.query(`select * from meals where{id = ${request.params.id} } `, function (error, results, fields) {
    if (error) {
      throw error;
    }

    response.json(results);
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)
  });
});

/* router.post("/", async (request, response) => {
  creatNewMeal({
    body: request.body,
  })
    .then((result) => response.json(result))
    .catch((error) => {
      response.status(400).send("Bad request");
      console.log(error);
    });
});

const creatNewMeal = async ({ body }) => {
  const {
    title,
    description,
    location,
    when,
    max_reservations,
    price,
    created_date,
  } = body;
  return await knex("meals").insert({
    title,
    description,
    location,
    when,
    max_reservations,
    price,
    created_date,
  });
}; */

// return meal by Id
/* const getMealById = async ({ id, body }) => {
  try {
    const {
      title,
      description,
      location,
      when,
      max_reservations,
      price,
      created_date,
    } = body;
    return await knex("meals").where({ id: id }).select("*");
  } catch (error) {
    console.log(error);
  }
};
router.get("/:id", async (request, response) => {
  getMealById({
    id: request.params.id,
    body: request.body,
  })
    .then((result) => response.json(result))
    .catch((ex) => {
      response.status(400).send("Bad request").end();
      console.log(ex);
    });
});
 */
// update meal by id
/* router.put("/:id", async (request, response) => {
  editMeal({
    body: request.body,
    id: request.params.id,
  })
    // @ts-ignore
    .then((result) => {
      console.log(result);
      return response.json(result);
    })
    .catch((error) => {
      response.status(400).send("Bad request").end();
      console.log(error);
    });
});
const editMeal = async ({ body, id }) => {
  const {
    title,
    description,
    location,
    when,
    max_reservations,
    price,
    created_date,
  } = body;

  const meal = await knex("meals").select("*").where({ id: id });
  console.log(meal);
  if (meal.length === 0) {
    // @ts-ignore
    throw new HttpError("Bad request", `meal not found: ID ${id}!`, 404);
  }
  const queryDto = {
    title: title,
    description: description,
    location: location,
    when: when,
    max_reservations: max_reservations,
    price: price,
    created_date: created_date,
  };
  if (Object.keys(queryDto).length !== 0) {
    return knex("meals")
      .where({
        id: id,
      })
      .update(queryDto);
  } else return "Nothing updated!";
};

//delete meals
router.delete("/:id", async (request, response) => {
  deleteMeal({
    body: request.body,
    id: request.params.id,
  })
    // @ts-ignore
    .then((result) => {
      return response.json(result);
    })
    .catch((error) => {
      response.status(400).send("Bad request").end();
      console.log(error);
    });
});
const deleteMeal = async ({ body, id }) => {
  const {
    title,
    description,
    location,
    when,
    max_reservations,
    price,
    created_date,
  } = body;

  const meals = await knex("meals").select("*").where({
    id: id,
  });

  if (meals.length === 0) {
    // @ts-ignore
    throw new HttpError("Bad request", `meal not found: ID ${id}!`, 404);
  }

  if (meals.length !== 0) {
    return knex("meals")
      .where({
        id: id,
      })
      .delete(meals);
  } else return "Nothing deleted!";
};
 */


module.exports = router;
