/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xkab7j0umvu929j")

  collection.options = {
    "query": "SELECT id,email, username FROM users"
  }

  // remove
  collection.schema.removeField("jkcdqusa")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jrvlxuxy",
    "name": "email",
    "type": "email",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "punvzca7",
    "name": "username",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xkab7j0umvu929j")

  collection.options = {
    "query": "SELECT id, username FROM users"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jkcdqusa",
    "name": "username",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("jrvlxuxy")

  // remove
  collection.schema.removeField("punvzca7")

  return dao.saveCollection(collection)
})
