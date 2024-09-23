/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9qrof8pb6vphuy5")

  collection.listRule = "@request.auth.id = @request.data.owner"
  collection.viewRule = "@request.auth.id = @request.data.owner"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9qrof8pb6vphuy5")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
})
