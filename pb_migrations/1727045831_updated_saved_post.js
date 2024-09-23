/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9qrof8pb6vphuy5")

  collection.name = "saved_posts"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9qrof8pb6vphuy5")

  collection.name = "saved_post"

  return dao.saveCollection(collection)
})
