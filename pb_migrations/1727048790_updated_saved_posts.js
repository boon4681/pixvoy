/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9qrof8pb6vphuy5")

  collection.createRule = "@request.auth.id = @request.data.owner"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9qrof8pb6vphuy5")

  collection.createRule = "@request.auth.id = @request.data.owner &&\n@request.auth.id ~ @request.data.saved"

  return dao.saveCollection(collection)
})
