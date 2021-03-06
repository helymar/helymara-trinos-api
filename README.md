# [Template] Tinos API - CRUD
Student: HELYMAR FELIPE ACOSTA ESCOBAR - 200062508

## Setup
```
npm install
```

## Run in development
```bash
docker-compose up
```

## Run tests
```bash
npm run test
```

## Run linter
```bash
npm run linter
```
## Screenshot Test
![Screenshot Test](https://github.com/helymar/helymara-trinos-api/blob/master/assets/Tests.png)

## Screenshot Linter
![Screenshot Linter](https://github.com/helymar/helymara-trinos-api/blob/master/assets/Linter.png)

## Collection Trinos-API Helymar Postman
```json
{
	"info": {
		"_postman_id": "f401d808-78fb-4c9c-9f27-174b92d157cf",
		"name": "Collection Trinos-API Helymar",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "/users",
			"protocolProfileBehavior": {
				"followAuthorizationHeader": true,
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"username\": \"helymar\",\n  \"name\": \"helymar\",\n  \"password\": \"1234\",\n  \"passwordConfirmation\": \"1234\",\n  \"email\": \"ahelymar@gmail.com\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/users/1",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"users",
						"1"
					]
				}
			},
			"response": []
		},
		{
			"name": "/users",
			"protocolProfileBehavior": {
				"followAuthorizationHeader": true
			},
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicm9sZSI6IlJFR1VMQVIiLCJpYXQiOjE2MzczMDIyMTcsImV4cCI6MTYzNzM4ODYxN30.kn2ImXq8_Zu5zwbzytl7kslpMsYSEgQAnDPEFlElMck",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"username\": \"helymara\",\n  \"name\": \"helymar\",\n  \"password\": \"12345\",\n  \"passwordConfirmation\": \"12345\",\n  \"email\": \"ahelymar@gmail.com\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/users",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"users"
					]
				}
			},
			"response": []
		},
		{
			"name": "/users/logout",
			"protocolProfileBehavior": {
				"followAuthorizationHeader": true
			},
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicm9sZSI6IlJFR1VMQVIiLCJpYXQiOjE2MzczMDIyMTcsImV4cCI6MTYzNzM4ODYxN30.kn2ImXq8_Zu5zwbzytl7kslpMsYSEgQAnDPEFlElMck",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"username\": \"helymara\",\n  \"name\": \"helymar\",\n  \"password\": \"12345\",\n  \"passwordConfirmation\": \"12345\",\n  \"email\": \"ahelymar@gmail.com\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/users/logout",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"users",
						"logout"
					]
				}
			},
			"response": []
		},
		{
			"name": "/users/reset_password",
			"protocolProfileBehavior": {
				"followAuthorizationHeader": true
			},
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6IlJFR1VMQVIiLCJpYXQiOjE2MzcwNDU3MDYsImV4cCI6MTYzNzEzMjEwNn0.4mSkpCDotGNBhdwQQBg9v9zQHhFC4nyNRywxYsBUtTc",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"token\": \"7f951cc9-8563-4cdc-84b3-1942a1d68905\",\n  \"password\": \"1234567\",\n  \"passwordConfirmation\": \"1234567\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/users/reset_password",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"users",
						"reset_password"
					]
				}
			},
			"response": []
		},
		{
			"name": "/users/login",
			"protocolProfileBehavior": {
				"followAuthorizationHeader": true
			},
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"username\": \"helymara\",\n  \"password\": \"12345\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/users/login",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"users",
						"login"
					]
				}
			},
			"response": []
		},
		{
			"name": "/users/{id}",
			"protocolProfileBehavior": {
				"followAuthorizationHeader": true
			},
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlJFR1VMQVIiLCJpYXQiOjE2MzcyODA4MzcsImV4cCI6MTYzNzM2NzIzN30.CQXFOdlCgI4SVDGP2KMx4B_LN3muSjkvVMnCd9Ngy28",
							"type": "string"
						}
					]
				},
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"username\": \"helymar\",\n  \"name\": \"Helymar Felipe Acosta Escobar\",\n  \"email\": \"ahelymar@gmail.com\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/users/1",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"users",
						"1"
					]
				}
			},
			"response": []
		},
		{
			"name": "/users/{id}",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6IlJFR1VMQVIiLCJpYXQiOjE2MzcwNDU3MDYsImV4cCI6MTYzNzEzMjEwNn0.4mSkpCDotGNBhdwQQBg9v9zQHhFC4nyNRywxYsBUtTc",
							"type": "string"
						}
					]
				},
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "localhost:3000/users/2",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"users",
						"2"
					]
				}
			},
			"response": []
		},
		{
			"name": "/users/update_password",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlJFR1VMQVIiLCJpYXQiOjE2MzcyODA4MzcsImV4cCI6MTYzNzM2NzIzN30.CQXFOdlCgI4SVDGP2KMx4B_LN3muSjkvVMnCd9Ngy28",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"password\": \"123456\",\n  \"passwordConfirmation\": \"123456\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/users/update_password",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"users",
						"update_password"
					]
				}
			},
			"response": []
		},
		{
			"name": "/users/send_password_reset",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlJFR1VMQVIiLCJpYXQiOjE2MzcwNjI4NTYsImV4cCI6MTYzNzE0OTI1Nn0.ZPS_wYwYS6e0OkdiU6AcL3U4QJAvgizp52tw1fpMkxQ",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"username\": \"helymar\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/users/send_password_reset",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"users",
						"send_password_reset"
					]
				}
			},
			"response": []
		},
		{
			"name": "/users/reset_password",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlJFR1VMQVIiLCJpYXQiOjE2MzcwNjI4NTYsImV4cCI6MTYzNzE0OTI1Nn0.ZPS_wYwYS6e0OkdiU6AcL3U4QJAvgizp52tw1fpMkxQ",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"token\": \"bfe5872b-67d4-4c7f-a631-4d2742ff1e5f\",\n  \"password\": \"1234\",\n  \"passwordConfirmation\": \"1234\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/users/reset_password",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"users",
						"reset_password"
					]
				}
			},
			"response": []
		},
		{
			"name": "/tweets",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlJFR1VMQVIiLCJpYXQiOjE2MzcyODA4MzcsImV4cCI6MTYzNzM2NzIzN30.CQXFOdlCgI4SVDGP2KMx4B_LN3muSjkvVMnCd9Ngy28",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"token\": \"4e46be8a-80f6-476e-9aaf-9069766c780a\",\n  \"password\": \"1234\",\n  \"passwordConfirmation\": \"1234\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/tweets",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"tweets"
					]
				}
			},
			"response": []
		},
		{
			"name": "/tweets POST",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlJFR1VMQVIiLCJpYXQiOjE2MzcyODA4MzcsImV4cCI6MTYzNzM2NzIzN30.CQXFOdlCgI4SVDGP2KMx4B_LN3muSjkvVMnCd9Ngy28",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"text\": \"my tweet\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/tweets",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"tweets"
					]
				}
			},
			"response": []
		},
		{
			"name": "/tweets/{id}",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/tweets/1",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"tweets",
						"1"
					]
				}
			},
			"response": []
		},
		{
			"name": "/tweets/{id} DELETE",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlJFR1VMQVIiLCJpYXQiOjE2MzcyODA4MzcsImV4cCI6MTYzNzM2NzIzN30.CQXFOdlCgI4SVDGP2KMx4B_LN3muSjkvVMnCd9Ngy28",
							"type": "string"
						}
					]
				},
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/tweets/3",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"tweets",
						"3"
					]
				}
			},
			"response": []
		},
		{
			"name": "/tweets/{id}/likes POST",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlJFR1VMQVIiLCJpYXQiOjE2MzcyODA4MzcsImV4cCI6MTYzNzM2NzIzN30.CQXFOdlCgI4SVDGP2KMx4B_LN3muSjkvVMnCd9Ngy28",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/tweets/2/likes",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"tweets",
						"2",
						"likes"
					]
				}
			},
			"response": []
		},
		{
			"name": "/tweets/{id}/comments POST",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlJFR1VMQVIiLCJpYXQiOjE2MzcyODA4MzcsImV4cCI6MTYzNzM2NzIzN30.CQXFOdlCgI4SVDGP2KMx4B_LN3muSjkvVMnCd9Ngy28",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"text\": \"Comentario en le 6to tweet\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/tweets/1/comments",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"tweets",
						"1",
						"comments"
					]
				}
			},
			"response": []
		},
		{
			"name": "/tweets/feed/helymar GET FEED",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/tweets/feed/helymar",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"tweets",
						"feed",
						"helymar"
					]
				}
			},
			"response": []
		},
		{
			"name": "/comments/{id}/likes POST",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicm9sZSI6IlJFR1VMQVIiLCJpYXQiOjE2MzczMDIyMTcsImV4cCI6MTYzNzM4ODYxN30.kn2ImXq8_Zu5zwbzytl7kslpMsYSEgQAnDPEFlElMck",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/comments/1/likes",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"comments",
						"1",
						"likes"
					]
				}
			},
			"response": []
		},
		{
			"name": "/comments/{id} DELETE",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicm9sZSI6IlJFR1VMQVIiLCJpYXQiOjE2MzczMDIyMTcsImV4cCI6MTYzNzM4ODYxN30.kn2ImXq8_Zu5zwbzytl7kslpMsYSEgQAnDPEFlElMck",
							"type": "string"
						}
					]
				},
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/comments/3",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"comments",
						"3"
					]
				}
			},
			"response": []
		}
	],
	"event": [
		{
			"listen": "prerequest",
			"script": {
				"type": "text/javascript",
				"exec": [
					"http://localhost:3000/users"
				]
			}
		},
		{
			"listen": "test",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		}
	]
}
```
