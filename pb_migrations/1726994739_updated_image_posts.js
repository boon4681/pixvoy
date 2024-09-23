/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vmbu5gn024k2ebt")

  collection.listRule = "@collection.image_posts.private = false ||\n(@collection.image_posts.private = true && @request.auth.id = @collection.image_posts.owner.id)"
  collection.viewRule = "@collection.image_posts.private = false ||\n(@collection.image_posts.private = true && @request.auth.id = @collection.image_posts.owner.id)"
  collection.createRule = ""
  collection.updateRule = "@request.data.owner = @collection.image_posts.owner &&\n@request.data.image:isset = false &&\n@request.data.owner:isset = false"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eit9vj3a",
    "name": "private",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vmbu5gn024k2ebt")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null

  // remove
  collection.schema.removeField("eit9vj3a")

  return dao.saveCollection(collection)
})
