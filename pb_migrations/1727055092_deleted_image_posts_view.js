/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nusszye3c3o18v4");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "nusszye3c3o18v4",
    "created": "2024-09-23 01:25:45.754Z",
    "updated": "2024-09-23 01:26:12.295Z",
    "name": "image_posts_view",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xi2swwzl",
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
      },
      {
        "system": false,
        "id": "tf7n35wx",
        "name": "private",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "engpnybp",
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
      },
      {
        "system": false,
        "id": "1padf5a1",
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
            "300x350"
          ],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      },
      {
        "system": false,
        "id": "gs1aaqnd",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT id,owner,private,title,image,tags,created FROM image_posts\nORDER BY created DESC"
    }
  });

  return Dao(db).saveCollection(collection);
})
