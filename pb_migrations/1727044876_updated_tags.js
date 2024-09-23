/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3zaao79mgrwj307")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_bnm5gCm` ON `tags` (`name`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3zaao79mgrwj307")

  collection.indexes = []

  return dao.saveCollection(collection)
})
