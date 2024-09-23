/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "tfi85jtf99c2r1w",
    "created": "2024-09-23 04:32:30.001Z",
    "updated": "2024-09-23 04:32:30.001Z",
    "name": "image_post_view",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xhhc1cx4",
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
        "id": "yzbq1s1s",
        "name": "private",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "i6rpgwfl",
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
        "id": "dnzs1wik",
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
      },
      {
        "system": false,
        "id": "lzitts6v",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT id,owner,private, title, image, tags, created, updated FROM image_posts"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("tfi85jtf99c2r1w");

  return dao.deleteCollection(collection);
})
