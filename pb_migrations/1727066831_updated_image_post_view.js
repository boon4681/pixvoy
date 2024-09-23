/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tfi85jtf99c2r1w")

  collection.options = {
    "query": "SELECT p.id,p.owner,p.private, p.title, p.image, COUNT(l.id) as liked, p.tags, p.created, p.updated FROM image_posts p\nLEFT JOIN liked l ON p.id = l.image_post\nORDER BY p.created DESC"
  }

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pzuoat6s",
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
    "id": "zmgyu27s",
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
    "id": "4obkjynj",
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
    "id": "hu0hoj7e",
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
    "id": "tnjd87cn",
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
    "id": "othvpdq8",
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
    "query": "SELECT id,owner,private, title, image, COUNT(image_posts.id) as liked, tags, created, updated FROM image_posts\nORDER BY image_posts.created DESC"
  }

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

  // remove
  collection.schema.removeField("pzuoat6s")

  // remove
  collection.schema.removeField("zmgyu27s")

  // remove
  collection.schema.removeField("4obkjynj")

  // remove
  collection.schema.removeField("hu0hoj7e")

  // remove
  collection.schema.removeField("tnjd87cn")

  // remove
  collection.schema.removeField("othvpdq8")

  return dao.saveCollection(collection)
})
