/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vmbu5gn024k2ebt")

  // remove
  collection.schema.removeField("7djbrk7e")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vmbu5gn024k2ebt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7djbrk7e",
    "name": "tags",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "3zaao79mgrwj307",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
