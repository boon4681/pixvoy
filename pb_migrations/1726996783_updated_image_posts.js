/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vmbu5gn024k2ebt")

  collection.createRule = "@request.auth.id = @request.data.owner &&\n@request.data.likes:isset = false"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vmbu5gn024k2ebt")

  collection.createRule = "@request.data.likes:isset = false"

  return dao.saveCollection(collection)
})
