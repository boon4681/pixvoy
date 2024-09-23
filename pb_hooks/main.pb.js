/// <reference path="../pb_data/types.d.ts" />
console.log("HI")

onRecordBeforeCreateRequest((e) => {
    const formData = new FormData();
    formData.append("image", $filesystem.fileFromMultipart(e.httpContext.formFile('image')))
    const res = $http.send({
        url: "https://deepbooru.boon4681.com/predict",
        method: "POST",
        body: formData,
    })
    if (res.statusCode == 200) {
        e.record.set("tags", res.json.tags.map(a => {
            return $app.dao().findFirstRecordByData("tags", "name", a.tag).id
        }))
    }
}, "image_posts")

routerAdd(
    "GET",
    "/user/@me",
    (c) => {
        const info = $apis.requestInfo(c);
        return c.json(200, {
            id: info.authRecord.id,
            email: info.authRecord.email(),
            username: info.authRecord.username()
        })
    }
)


routerAdd(
    "GET",
    "/user/view/:id",
    (c) => {
        const id = c.pathParam("id")
        const user = $app.dao().findRecordById("users", id)
        const followers = $app.dao().findRecordsByExpr("following",
            $dbx.exp("follow = {:id}", { "id": user.id })
        )
        const following = $app.dao().findRecordsByExpr("following",
            $dbx.exp("owner = {:id}", { "id": user.id })
        )
        const likes = $app.dao().findRecordsByExpr("image_posts",
            $dbx.exp("owner = {:id}", { "id": user.id })
        ).map(a => a.likes ? a.likes : 0).reduce((a, b) => a + b, 0)
        return c.json(200, {
            id: user.id,
            username: user.username(),
            email: user.email(),
            followed: !!followers.find(a => a.id == c.get("authRecord").id),
            following: following.length,
            followers: followers.length,
            likes
        })
    },
    $apis.requireAdminOrRecordAuth()
)

routerAdd(
    "GET",
    "/user/info/:username",
    (c) => {
        const username = c.pathParam("username")
        const user = $app.dao().findAuthRecordByUsername("users", username)
        const followers = $app.dao().findRecordsByExpr("following",
            $dbx.exp("follow = {:id}", { "id": user.id })
        )
        const following = $app.dao().findRecordsByExpr("following",
            $dbx.exp("owner = {:id}", { "id": user.id })
        )
        const likes = $app.dao().findRecordsByExpr("image_posts",
            $dbx.exp("owner = {:id}", { "id": user.id })
        ).map(a => a.likes ? a.likes : 0).reduce((a, b) => a + b, 0)
        return c.json(200, {
            id: user.id,
            username: user.username(),
            email: user.email(),
            followed: !!followers.find(a => a.id == c.get("authRecord").id),
            following: following.length,
            followers: followers.length,
            likes
        })
    },
    $apis.requireAdminOrRecordAuth()
)