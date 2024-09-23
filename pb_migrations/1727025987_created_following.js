/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "yq7rwib5jmitr80",
    "created": "2024-09-22 17:26:27.420Z",
    "updated": "2024-09-22 17:26:27.420Z",
    "name": "following",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ktasdkua",
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
        "id": "t70napai",
        "name": "follow",
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
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "@request.auth.id ~ @request.data.follow.id &&\n@request.auth.id = @request.data.owner.id",
    "updateRule": null,
    "deleteRule": "@request.auth.id ~ @request.data.follow.id &&\n@request.auth.id = @request.data.owner.id",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("yq7rwib5jmitr80");

  return dao.deleteCollection(collection);
})
