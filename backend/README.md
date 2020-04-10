# BACKEND
> In this file I will explain some of the Endpoints of this app

## ENDPOINTS
| ROUTE | HTTP | DESCRIPTION |
|---|---|---|
|`/register`|POST|Register a new user in the App|
|`/login`|POST|Let the user logs into the application|
|`/api/post/getAllPosts`|GET|Retrieve all published posts|
|`/api/post/getPostById/:id`|GET|Retrieve a post by ID|
|`/api/post/search`|POST|Retrieve all published posts wich is matched with the param
|`/api/post/getPostByUser`|POST|Retrieve all post identified by User ID|
|`/api/post/edit`|PUT|Edit all the content of a post|
|`/api/post/delete`|POST|Updates the post to hide in the app|
|`/api/comment/create`|POST|Let add comments to post|
|`/api/comment/delete`|PUT|Let the user delete a comment|
|`/api/comment/getComments/:id`|GET|Retrieve all comments by a POST ID|

##### REGISTER REQUEST
```
{
	"email": "sam@gmail.com",
	"password" : "1234",
	"name": "angel",
	"surname": "Spens",
	"userName": "Angel_s"
}
```
##### LOGIN REQUEST
```
{
	"email": "jamie3@gmail.com",
	"password": "1234"
}
```
##### SEARCH REQUEST
```
{
	"query": "champion"
}
```
##### SEARCH REQUEST
```
{
	"id": 9
}
```
##### EDIT REQUEST
```
{
	"id": 4,
	"title" : "Edite'd post??",
	"description": "Editing this post",
	"content": "<p>HELLO</p> cuales contenian pasajes de Lore'm Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
	"userId": 12
}
```
##### DELETE REQUEST
```
{
	"id": 4,
	"userId": 12
}
```
##### CREATE COMMENT REQUEST
```
{
	"idPost": "4",
	"idUser": 12,
	"comment": "Test from insomnia"
}
```
##### DELETE COMMENT REQUEST
```
{
	"id":41,
	"idPost": 4,
	"idUser": 12
}
```