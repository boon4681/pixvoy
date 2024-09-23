/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tfi85jtf99c2r1w")

  collection.options = {
    "query": "SELECT p.id,p.owner, COUNT(l.id) as liked FROM image_posts p\nLEFT JOIN liked l ON p.id = l.post\nGROUP BY p.id\nORDER BY p.created DESC"
  }

  // remove
  collection.schema.removeField("fnz5huvz")

  // remove
  collection.schema.removeField("oimss58u")

  // remove
  collection.schema.removeField("6ur25m0k")

  // remove
  collection.schema.removeField("kxmyplyr")

  // remove
  collection.schema.removeField("ue8cwjbf")

  // remove
  collection.schema.removeField("xgau4g8d")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wgblkr3p",
    "name": "owner",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vnw2ujfi",
    "name": "liked",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tfi85jtf99c2r1w")

  collection.options = {
    "query": "SELECT p.id,p.owner,p.private, p.title, p.image, COUNT(l.id) as liked, p.tags, p.created, p.updated FROM image_posts p\nLEFT JOIN liked l ON p.id = l.image_post\nGROUP BY p.id\nORDER BY p.created DESC"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fnz5huvz",
    "name": "owner",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oimss58u",
    "name": "private",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6ur25m0k",
    "name": "title",
    "type": "text",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kxmyplyr",
    "name": "image",
    "type": "file",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/png",
        "image/webp",
        "video/webm",
        "image/gif",
        "image/jpeg"
      ],
      "thumbs": [
        "240x280",
        "300x350"
      ],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ue8cwjbf",
    "name": "liked",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xgau4g8d",
    "name": "tags",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "3zaao79mgrwj307",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("wgblkr3p")

  // remove
  collection.schema.removeField("vnw2ujfi")

  return dao.saveCollection(collection)
})
