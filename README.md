#  Backend Learning Project – Express + Middleware

---

##  What I Learned

* Express server setup and routing
* Middleware flow and usage
* MVC (Model-View-Controller) architecture
* Request validation and error handling

---

##  Tech Stack

* Node.js
* Express.js
* JavaScript (ES6)

---

##  Project Structure

```
backend-pro/
│
├── server.js
├── app.js
├── routes/
├── controllers/
├── middleware/
├── models/
```

---


### 🔐 Middleware

* Authentication middleware (token-based)
* Logger middleware (request tracking)
* Validation middleware (input checking)
* Error handling middleware (centralized)

---

## 📡 API Endpoints

### Get all users

```
GET /api/users
```

### Create user

```
POST /api/users
Body:
{
  "name": "Pushkar"
}
```

### Protected route

```
GET /api/users/profile
Headers:
Authorization: valid-token
```


## Key Concepts Demonstrated

* Separation of concerns
* Scalable backend architecture
* Middleware chaining
* Request-response lifecycle

---

##  Future Improvements

* MongoDB integration
* JWT authentication
* Role-based access control
* Docker setup
* Deployment (AWS / Render)

---

