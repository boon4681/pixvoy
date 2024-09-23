/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tfi85jtf99c2r1w")

  collection.options = {
    "query": "SELECT id,owner,private, title, image, COUNT(image_posts.id) as liked, tags, created, updated FROM image_posts\nORDER BY image_posts.created DESC"
  }

  // remove
  collection.schema.removeField("c3qso3yo")

  // remove
  collection.schema.removeField("t06devny")

  // remove
  collection.schema.removeField("ihqrsqfn")

  // remove
  collection.schema.removeField("cbe2u1dp")

  // remove
  collection.schema.removeField("jooujlzx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wyyieyeg",
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
    "id": "otaq5rjc",
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
    "id": "ww4ojxgp",
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
    "id": "tslbwama",
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
    "id": "nnoe4pl7",
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
    "id": "soderbdm",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tfi85jtf99c2r1w")

  collection.options = {
    "query": "SELECT id,owner,private, title, image, tags, created, updated FROM image_posts\nORDER BY image_posts.created DESC"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c3qso3yo",
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
    "id": "t06devny",
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
    "id": "ihqrsqfn",
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
    "id": "cbe2u1dp",
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
    "id": "jooujlzx",
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
  collection.schema.removeField("wyyieyeg")

  // remove
  collection.schema.removeField("otaq5rjc")

  // remove
  collection.schema.removeField("ww4ojxgp")

  // remove
  collection.schema.removeField("tslbwama")

  // remove
  collection.schema.removeField("nnoe4pl7")

  // remove
  collection.schema.removeField("soderbdm")

  return dao.saveCollection(collection)
})
