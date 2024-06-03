const router = require("express").Router();


module.exports = db => {
  router.get("/favourites", (request, response) => {
    db.query(`
          SELECT favourites.photo_id FROM favourites
        `).then(({ rows }) => {
          const favouritePhotosArray = rows.map((favourite) => favourite.photo_id);
      response.json(favouritePhotosArray);
    });
  });

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