/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rzk1mr0d0zxlsph")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ous3rali",
    "name": "post",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "vmbu5gn024k2ebt",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rzk1mr0d0zxlsph")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ous3rali",
    "name": "image_post",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "vmbu5gn024k2ebt",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
