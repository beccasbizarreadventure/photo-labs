const router = require("express").Router();


module.exports = db => {
  // get the IDs of favourited photos and map over the returned array of 
  // favourite photos to create an array containing just the IDs 
  // grabbing the full photo object causes errors with how data is displayed on the frontend 
  router.get("/favourites", (request, response) => {
    db.query(`
          SELECT favourites.photo_id FROM favourites
        `).then(({ rows }) => {
          const favouritePhotosArray = rows.map((favourite) => favourite.photo_id);
      response.json(favouritePhotosArray);
    });
  });

  // update favourites table with a photo id when a photo is likes, adding it the the array of photos 
  router.post("/favourites", (request, response) => {
    const { photo_id } = request.body;
    return db.query(`
    INSERT INTO favourites (photo_id)
    VALUES ($1);
  `, [photo_id])
      .then(() => {
        response.json({success: true});
      })
      .catch(error => {
        response.status(500).json({ error: 'Error occurred while adding favourite', details: error });
      });
  });

  // remove a photo from the favourites table where the specific photo ID is a parameter supplied in the URL (parameters)
  // id has to be grabbed as a parameter because a delete request does not have a res.body
  router.delete("/favourites/:id", (request, response) => {
    const photo_id = request.params.id;
    return db.query(`
         DELETE FROM favourites 
         WHERE photo_id = $1;
        `, [photo_id])
      .then(() => {
        response.json({success: true});
      })
      .catch(error => {
        response.status(500).json({ error: 'Error occurred while removing favourite', details: error });
      });
  });
 
  return router;
};